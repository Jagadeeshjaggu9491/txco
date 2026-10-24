import { NextResponse } from 'next/server';

/**
 * TXCO Chatbot Enquiry API Route
 * Handles Phase 1 enquiries: RFQs, drawing uploads, vendor registrations, and callback requests.
 * Complies with Phase 1 Development Specification Section 14 & 15.
 */

// In-memory record store for local dev / runtime persistence
const storedEnquiries = [];

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

    storedEnquiries.push(enquiryRecord);
    console.log(`[TXCO Chatbot Enquiry Received] ID: ${referenceId} | Type: ${type} | Client: ${contactName} (${companyName})`);

    return NextResponse.json({
      success: true,
      referenceId,
      message:
        'Thank you for contacting TXCO Sealing Products. Your enquiry has been submitted to our team for review. A TXCO representative will review the information and follow up.',
      record: enquiryRecord,
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
