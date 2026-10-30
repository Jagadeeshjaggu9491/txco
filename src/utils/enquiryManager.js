/**
 * TXCO Enquiry Manager Utility
 * Manages fetching, updating, and syncing contact and chatbot enquiries in Admin Panel.
 */

const LOCAL_CONTACT_STORAGE_KEY = 'txco_contact_enquiries';
const LOCAL_CHATBOT_STORAGE_KEY = 'txco_chatbot_enquiries';

// Initial sample data so the Admin panel is immediately populated and responsive
export const initialContactEnquiries = [
  {
    id: 1,
    reference_id: 'TXCO-CNT-2026-8421',
    full_name: 'Rajesh K. Sharma',
    email: 'r.sharma@reliancepetro.in',
    phone: '+91 98201 44521',
    company: 'Reliance Jamnagar Refinery',
    industry: 'Petrochemical & Refining',
    inquiry_type: 'Request for Quote (RFQ)',
    message: 'Need quotation for 450 pcs of 3" Class 900 RTJ Gaskets Style R Oval in SS 316L for upcoming turnaround maintenance shutdown in November.',
    attachment_name: 'Jamnagar_Turnaround_BOQ_Rev2.pdf',
    status: 'New',
    created_at: '2026-10-27T08:30:00Z',
  },
  {
    id: 2,
    reference_id: 'TXCO-CNT-2026-6190',
    full_name: 'David Van Der Berg',
    email: 'd.berg@shelloffshore.nl',
    phone: '+31 20 798 1234',
    company: 'Shell Deepwater Exploration',
    industry: 'Energy & Oil & Gas',
    inquiry_type: 'Technical Drawing Review',
    message: 'Subsea manifold connector sealing project. Please review attached drawing for Style BX 155 in Inconel 625 for 15,000 PSI service.',
    attachment_name: 'Subsea_BX155_CAD_Spec.dwg',
    status: 'In Review',
    created_at: '2026-10-26T14:15:00Z',
  },
  {
    id: 3,
    reference_id: 'TXCO-CNT-2026-3392',
    full_name: 'Amitabh Sengupta',
    email: 'asengupta@iocleproc.com',
    phone: '+91 94330 98112',
    company: 'Indian Oil Corporation Haldia',
    industry: 'Energy & Oil & Gas',
    inquiry_type: 'Bulk Stock Procurement',
    message: 'Requesting formal price schedule for Kammprofile and Spiral Wound Gaskets Class 150 to 600 NPS 2" to 12" with delivery to Haldia.',
    attachment_name: null,
    status: 'Quoted',
    created_at: '2026-10-25T11:00:00Z',
  },
];

export const initialChatbotEnquiries = [
  {
    id: 101,
    referenceId: 'TXCO-RFQ-2026-7812',
    type: 'RFQ',
    status: 'New',
    createdAt: '2026-10-27T09:12:00Z',
    contact: {
      name: 'Mohamed Al-Mansoor',
      company: 'ADNOC Offshore Gas',
      email: 'm.almansoor@adnoc.ae',
      phone: '+971 50 123 4567',
      country: 'United Arab Emirates',
      city: 'Abu Dhabi',
    },
    technical: {
      productCategory: 'Metallic Gaskets',
      description: 'API 6A Wellhead replacement gaskets for offshore platform Das Island. Requires 100% PMI and MTR 3.1 certification.',
      standard: 'API Spec 6A (10,000 psi)',
      dimensions: 'NPS 4-1/16"',
      material: 'Inconel 625 (UNS N06625)',
      pressure: '10,000 PSI',
      quantity: '50 pcs',
      deliveryDate: 'Urgent (14 Days)',
      notes: 'Must be sour gas compliant per NACE MR0175.',
    },
    file: {
      name: 'ADNOC_Das_Island_Gasket_BOQ.pdf',
      size: '1.8 MB',
    },
  },
  {
    id: 102,
    referenceId: 'TXCO-DRW-2026-4429',
    type: 'DRAWING',
    status: 'In Review',
    createdAt: '2026-10-26T16:45:00Z',
    contact: {
      name: 'Elena Rostova',
      company: 'PetroChem Engineering GmbH',
      email: 'e.rostova@petrochem-eng.de',
      phone: '+49 89 543 8901',
      country: 'Germany',
      city: 'Munich',
    },
    technical: {
      productCategory: 'Semi-Metallic Gaskets',
      description: 'Non-standard heat exchanger pass partition gasket with corrugated metal jacketed construction.',
      standard: 'DIN EN 1514-7',
      dimensions: 'OD 850mm x ID 780mm',
      material: 'SS 321 / Graphite Filler',
      pressure: 'Class 300',
      quantity: '12 pcs',
      deliveryDate: 'Standard 4-6 weeks',
      notes: 'Pass partition rib width 15mm.',
    },
    file: {
      name: 'HX_Partition_Serrated_Detail.step',
      size: '4.2 MB',
    },
  },
];

export function getBackendApiUrl() {
  if (typeof window !== 'undefined') {
    // If running on a live domain (e.g. txco-dark.iadesigns.in or custom host)
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
      return `${window.location.origin}/backend/api`;
    }
  }
  return process.env.NEXT_PUBLIC_API_URL || 'https://txco-dark.iadesigns.in/backend/api';
}

/**
 * Submit Contact Form enquiry (works on both local dev and live Hostinger PHP)
 */
export async function submitContactEnquiry(formData) {
  const isLocal = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

  // Try local Next.js API first if on localhost
  if (isLocal) {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.success) return data;
      }
    } catch (e) {
      console.warn('Local Next.js /api/contact failed, trying live PHP backend...');
    }
  }

  // Live PHP Backend on Hostinger
  const backendBase = getBackendApiUrl();
  const phpEndpoint = `${backendBase}/enquiries/contact.php`;

  const res = await fetch(phpEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch (err) {
    console.error('Non-JSON response from contact.php:', text);
    throw new Error('Server returned an unexpected response. Please contact info@txcosealing.com.');
  }

  if (!res.ok || !data.success) {
    throw new Error(data.message || data.error || 'Failed to transmit inquiry.');
  }

  return data;
}

/**
 * Submit Chatbot enquiry (works on both local dev and live Hostinger PHP)
 */
export async function submitChatbotEnquiry(payload) {
  const isLocal = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

  // Try local Next.js API first if on localhost
  if (isLocal) {
    try {
      const res = await fetch('/api/chatbot/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.success) return data;
      }
    } catch (e) {
      console.warn('Local Next.js /api/chatbot/enquiry failed, trying live PHP backend...');
    }
  }

  // Live PHP Backend on Hostinger
  const backendBase = getBackendApiUrl();
  const phpEndpoint = `${backendBase}/enquiries/chatbot.php`;

  const res = await fetch(phpEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch (err) {
    console.error('Non-JSON response from chatbot.php:', text);
    throw new Error('Server returned an unexpected response.');
  }

  if (!res.ok || !data.success) {
    throw new Error(data.message || data.error || 'Failed to submit enquiry.');
  }

  return data;
}

/**
 * Fetch all enquiries from API (with live PHP backend first, then local fallback)
 */
export async function fetchAllEnquiries() {
  const backendBase = getBackendApiUrl();

  try {
    // 1. Fetch from Hostinger PHP endpoints directly
    const [contactRes, chatbotRes] = await Promise.all([
      fetch(`${backendBase}/enquiries/contact.php`).catch(() => null),
      fetch(`${backendBase}/enquiries/chatbot.php`).catch(() => null),
    ]);

    let contactList = [];
    let chatbotList = [];

    if (contactRes && contactRes.ok) {
      const cData = await contactRes.json();
      if (cData && cData.success && Array.isArray(cData.enquiries)) {
        contactList = cData.enquiries;
      }
    }

    if (chatbotRes && chatbotRes.ok) {
      const cbData = await chatbotRes.json();
      if (cbData && cbData.success && Array.isArray(cbData.enquiries)) {
        chatbotList = cbData.enquiries;
      }
    }

    if (contactList.length > 0 || chatbotList.length > 0) {
      if (typeof window !== 'undefined') {
        localStorage.setItem(LOCAL_CONTACT_STORAGE_KEY, JSON.stringify(contactList));
        localStorage.setItem(LOCAL_CHATBOT_STORAGE_KEY, JSON.stringify(chatbotList));
      }
      return {
        contactEnquiries: contactList,
        chatbotEnquiries: chatbotList,
        stats: {
          total: contactList.length + chatbotList.length,
          contactCount: contactList.length,
          chatbotCount: chatbotList.length,
          newCount: [...contactList, ...chatbotList].filter((i) => (i.status || 'New') === 'New').length,
          inReviewCount: [...contactList, ...chatbotList].filter((i) => i.status === 'In Review').length,
          quotedCount: [...contactList, ...chatbotList].filter((i) => i.status === 'Quoted').length,
          closedCount: [...contactList, ...chatbotList].filter((i) => i.status === 'Closed').length,
        },
      };
    }
  } catch (err) {
    console.warn('Failed to fetch from live PHP backend, checking local storage:', err);
  }

  // 2. Fallback to localStorage or sample data
  if (typeof window !== 'undefined') {
    const localContact = localStorage.getItem(LOCAL_CONTACT_STORAGE_KEY);
    const localChatbot = localStorage.getItem(LOCAL_CHATBOT_STORAGE_KEY);

    const contactEnquiries = localContact ? JSON.parse(localContact) : initialContactEnquiries;
    const chatbotEnquiries = localChatbot ? JSON.parse(localChatbot) : initialChatbotEnquiries;

    return {
      contactEnquiries,
      chatbotEnquiries,
      stats: {
        total: contactEnquiries.length + chatbotEnquiries.length,
        contactCount: contactEnquiries.length,
        chatbotCount: chatbotEnquiries.length,
        newCount: [...contactEnquiries, ...chatbotEnquiries].filter((i) => (i.status || 'New') === 'New').length,
        inReviewCount: [...contactEnquiries, ...chatbotEnquiries].filter((i) => i.status === 'In Review').length,
        quotedCount: [...contactEnquiries, ...chatbotEnquiries].filter((i) => i.status === 'Quoted').length,
        closedCount: [...contactEnquiries, ...chatbotEnquiries].filter((i) => i.status === 'Closed').length,
      },
    };
  }

  return {
    contactEnquiries: initialContactEnquiries,
    chatbotEnquiries: initialChatbotEnquiries,
    stats: {
      total: initialContactEnquiries.length + initialChatbotEnquiries.length,
      contactCount: initialContactEnquiries.length,
      chatbotCount: initialChatbotEnquiries.length,
      newCount: 2,
      inReviewCount: 2,
      quotedCount: 1,
      closedCount: 0,
    },
  };
}

/**
 * Update Status of an enquiry
 */
export async function updateEnquiryStatus({ id, referenceId, source, status }) {
  try {
    const backendBase = getBackendApiUrl();
    const endpoint = source === 'contact' 
      ? `${backendBase}/enquiries/contact.php` 
      : `${backendBase}/enquiries/chatbot.php`;

    const res = await fetch(endpoint, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, referenceId, status }),
    });
    return res.ok;
  } catch (err) {
    console.error('Failed to update enquiry status:', err);
    return false;
  }
}

/**
 * Delete an enquiry
 */
export async function deleteEnquiry({ id, referenceId, source }) {
  try {
    const backendBase = getBackendApiUrl();
    const endpoint = source === 'contact' 
      ? `${backendBase}/enquiries/contact.php` 
      : `${backendBase}/enquiries/chatbot.php`;

    const params = new URLSearchParams();
    if (id) params.set('id', id);
    if (referenceId) params.set('referenceId', referenceId);

    const res = await fetch(`${endpoint}?${params.toString()}`, {
      method: 'DELETE',
    });
    return res.ok;
  } catch (err) {
    console.error('Failed to delete enquiry:', err);
    return false;
  }
}
