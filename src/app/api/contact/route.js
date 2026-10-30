import { NextResponse } from 'next/server';
import { sendEnquiryNotificationAndThankYou } from '@/utils/mailService';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

// Local storage backup file path (persists between server reloads)
const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'contactEnquiriesStore.json');

function readStoredEnquiries() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Error reading contact enquiries store:', err);
  }
  return [];
}

function writeStoredEnquiries(enquiries) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(enquiries, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing contact enquiries store:', err);
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      company,
      industry = 'Oil & Gas',
      inquiryType = 'Request for Quote (RFQ)',
      message,
      attachmentName,
    } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please fill in all required fields (Full Name, Email, and Message).',
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please provide a valid email address.',
        },
        { status: 400 }
      );
    }

    // Generate unique reference ID
    const year = new Date().getFullYear();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceId = `TXCO-CNT-${year}-${randomSuffix}`;

    const newEnquiry = {
      id: Date.now(),
      reference_id: referenceId,
      full_name: fullName,
      email: email.trim().toLowerCase(),
      phone: phone || 'N/A',
      company: company || 'N/A',
      industry: industry || 'Oil & Gas',
      inquiry_type: inquiryType || 'Request for Quote (RFQ)',
      message,
      attachment_name: attachmentName || null,
      status: 'New',
      created_at: new Date().toISOString(),
    };

    // 1. Save to local persistent file store
    const existing = readStoredEnquiries();
    existing.unshift(newEnquiry);
    writeStoredEnquiries(existing);

    // 2. Try syncing with Hostinger PHP Backend (db.php / MySQL)
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://txco-dark.iadesigns.in/backend/api';
    try {
      const phpEndpoint = `${backendUrl}/enquiries/contact.php`;
      await fetch(phpEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEnquiry),
        signal: AbortSignal.timeout(4000), // timeout safely after 4s
      }).catch((e) => {
        console.warn('[Sync to Hostinger contact.php Warning]', e.message);
      });
    } catch (phpErr) {
      console.warn('[Sync to Hostinger contact.php failed]', phpErr.message);
    }

    // 3. Send automated emails:
    //    - Thank you to user
    //    - Notification to banuakash99@gmail.com and info@txcosealing.com
    const emailResult = await sendEnquiryNotificationAndThankYou({
      source: 'contact',
      type: inquiryType,
      referenceId,
      data: newEnquiry,
    });

    console.log(
      `[TXCO Contact Enquiry] Received: ${referenceId} from ${fullName} (${email}). Emails sent: user=${emailResult.userEmailSent}, maintenance=${emailResult.adminEmailSent}`
    );

    return NextResponse.json({
      success: true,
      referenceId,
      message: 'Thank you for contacting TXCO Sealing Products. Your enquiry has been received and our engineering team will get back to you shortly.',
      enquiry: newEnquiry,
      emailStatus: emailResult,
    });
  } catch (error) {
    console.error('[Contact API Error]', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to submit enquiry. Please try again or email info@txcosealing.com.',
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const enquiries = readStoredEnquiries();
    return NextResponse.json({
      success: true,
      count: enquiries.length,
      enquiries,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
