import { NextResponse } from 'next/server';
import { sendEnquiryNotificationAndThankYou } from '@/utils/mailService';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

// Local storage backup file path (persists between server reloads)
const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'chatbotEnquiriesStore.json');

function readStoredChatbotEnquiries() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Error reading chatbot enquiries store:', err);
  }
  return [];
}

function writeStoredChatbotEnquiries(enquiries) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(enquiries, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing chatbot enquiries store:', err);
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      type = 'RFQ',
      contactName,
      companyName,
      email,
      phone,
      country,
      city,
      productCategory,
      description,
      standard,
      dimensions,
      material,
      pressure,
      quantity,
      deliveryDate,
      notes,
      fileName,
      fileSize,
      vendorCategory,
      customerPortalRef,
    } = body;

    // Validate required fields based on Phase 1 specification
    if (!contactName || !companyName || !email) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields: contactName, companyName, and email are mandatory.',
        },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please provide a valid business email address.',
        },
        { status: 400 }
      );
    }

    // Generate Unique Enquiry Reference ID per specification
    const year = new Date().getFullYear();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const prefixMap = {
      RFQ: 'TXCO-RFQ',
      DRAWING: 'TXCO-DRW',
      VENDOR_REGISTRATION: 'TXCO-VR',
      CALLBACK: 'TXCO-CB',
      TECHNICAL: 'TXCO-TECH',
    };
    const prefix = prefixMap[type] || 'TXCO-ENQ';
    const referenceId = body.referenceId || `${prefix}-${year}-${randomSuffix}`;

    const enquiryRecord = {
      id: Date.now(),
      referenceId,
      type,
      status: 'New',
      createdAt: new Date().toISOString(),
      contact: {
        name: contactName,
        company: companyName,
        email,
        phone: phone || 'N/A',
        country: country || 'India',
        city: city || 'N/A',
      },
      technical: {
        productCategory: productCategory || 'General Sealing Requirement',
        description: description || 'N/A',
        standard: standard || 'N/A',
        dimensions: dimensions || 'N/A',
        material: material || 'N/A',
        pressure: pressure || 'N/A',
        quantity: quantity || 'N/A',
        deliveryDate: deliveryDate || 'Standard Delivery',
        notes: notes || 'N/A',
      },
      file: fileName
        ? {
            name: fileName,
            size: fileSize || 'Uploaded via Web Chatbot',
          }
        : null,
      vendor: {
        category: vendorCategory || 'N/A',
        portalRef: customerPortalRef || 'N/A',
      },
    };

    // 1. Save to local persistent file store
    const existing = readStoredChatbotEnquiries();
    existing.unshift(enquiryRecord);
    writeStoredChatbotEnquiries(existing);

    // 2. Try syncing with Hostinger PHP Backend (db.php / MySQL)
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://txco-dark.iadesigns.in/backend/api';
    try {
      const phpEndpoint = `${backendUrl}/enquiries/chatbot.php`;
      await fetch(phpEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          referenceId,
          type,
          contactName,
          companyName,
          email,
          phone,
          country,
          city,
          productCategory,
          description,
          standard,
          dimensions,
          material,
          pressure,
          quantity,
          deliveryDate,
          notes,
          fileName,
          fileSize,
          vendorCategory,
          customerPortalRef,
        }),
        signal: AbortSignal.timeout(4000),
      }).catch((e) => {
        console.warn('[Sync to Hostinger chatbot.php Warning]', e.message);
      });
    } catch (phpErr) {
      console.warn('[Sync to Hostinger chatbot.php failed]', phpErr.message);
    }

    // 3. Send automated emails:
    //    - Thank you to user
    //    - Notification to banuakash99@gmail.com and info@txcosealing.com
    const emailResult = await sendEnquiryNotificationAndThankYou({
      source: 'chatbot',
      type: `${type} (Chatbot)`,
      referenceId,
      data: {
        contactName,
        companyName,
        email,
        phone,
        country,
        city,
        productCategory,
        description: description || notes,
        standard,
        dimensions,
        material,
        pressure,
        quantity,
        deliveryDate,
        fileName,
        fileSize,
      },
    });

    console.log(
      `[TXCO Chatbot Enquiry] Received: ${referenceId} from ${contactName} (${companyName}). Emails: user=${emailResult.userEmailSent}, maintenance=${emailResult.adminEmailSent}`
    );

    return NextResponse.json({
      success: true,
      referenceId,
      message:
        'Thank you for contacting TXCO Sealing Products. Your enquiry has been submitted to our team for review. A TXCO representative will review the information and follow up.',
      record: enquiryRecord,
      emailStatus: emailResult,
    });
  } catch (error) {
    console.error('[TXCO Chatbot API Error]', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process enquiry. Please email info@txcosealing.com directly.',
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const enquiries = readStoredChatbotEnquiries();
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
