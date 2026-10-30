import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

const CONTACT_FILE = path.join(process.cwd(), 'src', 'data', 'contactEnquiriesStore.json');
const CHATBOT_FILE = path.join(process.cwd(), 'src', 'data', 'chatbotEnquiriesStore.json');

function readFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
  } catch (e) {
    console.error(`Error reading ${filePath}:`, e);
  }
  return [];
}

function writeFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (e) {
    console.error(`Error writing ${filePath}:`, e);
  }
}

export async function GET() {
  try {
    const contactEnquiries = readFile(CONTACT_FILE);
    const chatbotEnquiries = readFile(CHATBOT_FILE);

    // Also fetch remote enquiries if available
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://txco.iadesigns.in/backend/api';
    let remoteContact = [];
    let remoteChatbot = [];

    try {
      const [resC, resB] = await Promise.allSettled([
        fetch(`${backendUrl}/enquiries/contact.php`, { signal: AbortSignal.timeout(3000) }),
        fetch(`${backendUrl}/enquiries/chatbot.php`, { signal: AbortSignal.timeout(3000) }),
      ]);

      if (resC.status === 'fulfilled' && resC.value.ok) {
        const json = await resC.value.json();
        if (json.success && Array.isArray(json.enquiries)) {
          remoteContact = json.enquiries;
        }
      }

      if (resB.status === 'fulfilled' && resB.value.ok) {
        const json = await resB.value.json();
        if (json.success && Array.isArray(json.enquiries)) {
          remoteChatbot = json.enquiries;
        }
      }
    } catch (netErr) {
      // Remote unavailable, continue with local
    }

    // Merge without duplicates (by reference_id)
    const contactMerged = [...contactEnquiries];
    remoteContact.forEach((item) => {
      const ref = item.reference_id || item.referenceId;
      if (!contactMerged.some((m) => (m.reference_id || m.referenceId) === ref)) {
        contactMerged.push(item);
      }
    });

    const chatbotMerged = [...chatbotEnquiries];
    remoteChatbot.forEach((item) => {
      const ref = item.reference_id || item.referenceId;
      if (!chatbotMerged.some((m) => (m.reference_id || m.referenceId) === ref)) {
        chatbotMerged.push(item);
      }
    });

    const all = [...contactMerged, ...chatbotMerged];

    return NextResponse.json({
      success: true,
      stats: {
        total: all.length,
        contactCount: contactMerged.length,
        chatbotCount: chatbotMerged.length,
        newCount: all.filter((i) => i.status === 'New').length,
        inReviewCount: all.filter((i) => i.status === 'In Review').length,
        quotedCount: all.filter((i) => i.status === 'Quoted').length,
        closedCount: all.filter((i) => i.status === 'Closed').length,
      },
      contactEnquiries: contactMerged,
      chatbotEnquiries: chatbotMerged,
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const { id, referenceId, source = 'contact', status } = await request.json();

    if (!status) {
      return NextResponse.json({ success: false, error: 'Status is required' }, { status: 400 });
    }

    const targetFile = source === 'contact' ? CONTACT_FILE : CHATBOT_FILE;
    const items = readFile(targetFile);

    const updated = items.map((item) => {
      const itemRef = item.reference_id || item.referenceId;
      if (item.id === id || (referenceId && itemRef === referenceId)) {
        return { ...item, status, updated_at: new Date().toISOString() };
      }
      return item;
    });

    writeFile(targetFile, updated);

    // Try updating remote MySQL as well
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://txco.iadesigns.in/backend/api';
    try {
      const endpoint = `${backendUrl}/enquiries/${source === 'contact' ? 'contact.php' : 'chatbot.php'}`;
      await fetch(endpoint, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
        signal: AbortSignal.timeout(3000),
      }).catch(() => {});
    } catch (e) {}

    return NextResponse.json({ success: true, message: 'Status updated successfully' });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const referenceId = searchParams.get('referenceId');
    const source = searchParams.get('source') || 'contact';

    const targetFile = source === 'contact' ? CONTACT_FILE : CHATBOT_FILE;
    const items = readFile(targetFile);

    const filtered = items.filter((item) => {
      const itemRef = item.reference_id || item.referenceId;
      if (referenceId && itemRef === referenceId) return false;
      if (id && String(item.id) === String(id)) return false;
      return true;
    });

    writeFile(targetFile, filtered);

    // Try deleting from remote MySQL as well
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://txco.iadesigns.in/backend/api';
    try {
      const endpoint = `${backendUrl}/enquiries/${source === 'contact' ? 'contact.php' : 'chatbot.php'}?id=${id}`;
      await fetch(endpoint, {
        method: 'DELETE',
        signal: AbortSignal.timeout(3000),
      }).catch(() => {});
    } catch (e) {}

    return NextResponse.json({ success: true, message: 'Enquiry deleted successfully' });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
