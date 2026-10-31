import nodemailer from 'nodemailer';

/**
 * TXCO Email Service
 * Sends automated Thank-You emails to users and notification emails to website maintenance persons.
 * Recipients:
 *  - User: user-provided email address
 *  - Maintenance: banuakash99@gmail.com, info@txcosealing.com
 */

export function getSmtpTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.hostinger.com';
  const port = Number(process.env.SMTP_PORT) || 465;
  const user = process.env.SMTP_USER || 'txco@iadesigns.in';
  const rawPass = process.env.SMTP_PASS || 'j$2WtbdANc8M7GA';
  const pass = rawPass.replace(/^\s*"?|"?\s*$/g, '').replace(/\$\$/g, '$');

  return {
    transporter: nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    }),
    fromAddress: process.env.SMTP_FROM || `"TXCO Sealing Products" <${user}>`,
  };
}

const MAINTENANCE_EMAILS = ['banuakash99@gmail.com', 'info@txcosealing.com'];

/**
 * Send both Thank-You email to customer and notification email to maintenance team
 */
export async function sendEnquiryNotificationAndThankYou({
  source = 'contact', // 'contact' | 'chatbot'
  type = 'Request for Quote (RFQ)',
  referenceId,
  data,
}) {
  const { transporter, fromAddress } = getSmtpTransporter();

  const userEmail = (data.email || '').trim().toLowerCase();
  const userName = data.fullName || data.contactName || 'Valued Partner';
  const company = data.company || data.companyName || 'N/A';
  const phone = data.phone || 'N/A';
  const dateFormatted = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  const results = { userEmailSent: false, adminEmailSent: false, errors: [] };

  // =========================================================================
  // 1. Thank-You Email to User
  // =========================================================================
  if (userEmail && userEmail.includes('@')) {
    try {
      const userHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Contacting TXCO</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; padding: 35px 12px;">
            <tr>
              <td align="center">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(5,44,88,0.08); border: 1px solid #e2e8f0;">
                  <!-- Brand Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #052C58 0%, #114680 100%); padding: 32px 36px; text-align: left;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 800; letter-spacing: 2.5px;">TXCO</h1>
                      <p style="margin: 6px 0 0 0; color: #94a3b8; font-size: 12px; letter-spacing: 1.2px; text-transform: uppercase;">
                        TXCO Sealing Products Private Limited • Engineering Absolute Reliability
                      </p>
                    </td>
                  </tr>

                  <!-- Confirmation Banner -->
                  <tr>
                    <td style="background-color: #f0fdf4; border-bottom: 1px solid #bbf7d0; padding: 18px 36px;">
                      <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #16a34a;"></span>
                        <strong style="color: #166534; font-size: 14px;">Enquiry Received & Registered</strong>
                        <span style="margin-left: auto; background-color: #ffffff; border: 1px solid #bbf7d0; padding: 4px 10px; border-radius: 6px; font-family: monospace; font-size: 13px; font-weight: 700; color: #052C58;">${referenceId}</span>
                      </div>
                    </td>
                  </tr>

                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 36px;">
                      <h2 style="margin: 0 0 14px 0; color: #052C58; font-size: 20px; font-weight: 700;">
                        Hello ${userName},
                      </h2>
                      <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.65; color: #475569;">
                        Thank you for reaching out to <strong>TXCO Sealing Products</strong>. We have successfully logged your enquiry. Our engineering and technical sales team in Hyderabad is currently reviewing your project requirements and technical specifications.
                      </p>

                      <!-- Summary Box -->
                      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 22px; margin: 24px 0;">
                        <h3 style="margin: 0 0 14px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #052C58;">
                          Summary of Your Submission
                        </h3>
                        <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
                          <tr>
                            <td style="padding: 6px 0; color: #64748b; width: 140px;"><strong>Reference ID:</strong></td>
                            <td style="padding: 6px 0; color: #052C58; font-family: monospace; font-weight: 700;">${referenceId}</td>
                          </tr>
                          <tr>
                            <td style="padding: 6px 0; color: #64748b;"><strong>Category / Type:</strong></td>
                            <td style="padding: 6px 0; color: #1e293b;">${type}</td>
                          </tr>
                          ${company !== 'N/A' ? `<tr><td style="padding: 6px 0; color: #64748b;"><strong>Company:</strong></td><td style="padding: 6px 0; color: #1e293b;">${company}</td></tr>` : ''}
                          ${data.industry ? `<tr><td style="padding: 6px 0; color: #64748b;"><strong>Industry:</strong></td><td style="padding: 6px 0; color: #1e293b;">${data.industry}</td></tr>` : ''}
                          ${data.productCategory ? `<tr><td style="padding: 6px 0; color: #64748b;"><strong>Product Family:</strong></td><td style="padding: 6px 0; color: #1e293b;">${data.productCategory}</td></tr>` : ''}
                          ${data.attachmentName || data.fileName ? `<tr><td style="padding: 6px 0; color: #64748b;"><strong>Attachment:</strong></td><td style="padding: 6px 0; color: #018F5D; font-weight: 600;">📎 ${data.attachmentName || data.fileName}</td></tr>` : ''}
                        </table>
                      </div>

                      <!-- What Happens Next -->
                      <h3 style="margin: 28px 0 10px 0; font-size: 16px; color: #052C58; font-weight: 700;">
                        What Happens Next?
                      </h3>
                      <ul style="margin: 0 0 24px 0; padding-left: 20px; font-size: 14px; color: #475569; line-height: 1.7;">
                        <li>A dedicated Application & Estimating Engineer will evaluate your pressure ratings, dimensions, and material grades.</li>
                        <li>You will receive a detailed response with pricing, lead time, and technical data sheets within <strong>2 to 4 business hours</strong>.</li>
                        <li>For urgent turnarounds or immediate shutdowns, you can call our direct plant hotline at <strong>+91 9553125566</strong>.</li>
                      </ul>

                      <p style="margin: 0; font-size: 14px; color: #64748b; line-height: 1.6;">
                        Best regards,<br>
                        <strong>TXCO Engineering & Sales Support Desk</strong><br>
                        TXCO Sealing Products Private Limited<br>
                        Hyderabad, India • <a href="https://txco.co" style="color: #018F5D; text-decoration: none;">www.txcosealing.com</a>
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8fafc; padding: 22px 36px; border-top: 1px solid #e2e8f0; text-align: center;">
                      <p style="margin: 0; font-size: 12px; color: #94a3b8; line-height: 1.5;">
                        This is an automated confirmation of your enquiry sent to ${userEmail}.<br>
                        © ${new Date().getFullYear()} TXCO Sealing Products Private Limited. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `;

      await transporter.sendMail({
        from: fromAddress,
        to: userEmail,
        subject: `Thank you for your enquiry with TXCO Sealing Products [${referenceId}]`,
        html: userHtml,
      });

      results.userEmailSent = true;
    } catch (err) {
      console.error('[MailService] Failed to send Thank-You email to user:', err);
      results.errors.push(`User email error: ${err.message}`);
    }
  }

  // =========================================================================
  // 2. Admin & Maintenance Notification Email
  // =========================================================================
  try {
    const adminHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Website Enquiry</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0f172a; padding: 35px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 650px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 32px rgba(0,0,0,0.25);">
                <!-- Header -->
                <tr>
                  <td style="background-color: #052C58; padding: 24px 32px; border-bottom: 3px solid #018F5D;">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                      <div>
                        <span style="display: inline-block; background-color: #018F5D; color: #ffffff; font-size: 11px; font-weight: 800; padding: 3px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">
                          ${source === 'contact' ? 'Contact Page Form' : 'Interactive Chatbot'}
                        </span>
                        <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700;">
                          New Enquiry: ${type}
                        </h1>
                      </div>
                      <div style="text-align: right; color: #94a3b8; font-size: 12px;">
                        <span>Ref ID: <strong style="color: #ffffff; font-family: monospace;">${referenceId}</strong></span><br>
                        <span>${dateFormatted}</span>
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- Client Contact Block -->
                <tr>
                  <td style="padding: 28px 32px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                    <h3 style="margin: 0 0 12px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #64748b;">
                      Contact Information
                    </h3>
                    <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 5px 0; width: 140px; color: #64748b;"><strong>Contact Name:</strong></td>
                        <td style="padding: 5px 0; color: #052C58; font-weight: 700; font-size: 15px;">${userName}</td>
                      </tr>
                      <tr>
                        <td style="padding: 5px 0; color: #64748b;"><strong>Business Email:</strong></td>
                        <td style="padding: 5px 0;"><a href="mailto:${userEmail}" style="color: #018F5D; font-weight: 600; text-decoration: underline;">${userEmail}</a></td>
                      </tr>
                      <tr>
                        <td style="padding: 5px 0; color: #64748b;"><strong>Phone / WhatsApp:</strong></td>
                        <td style="padding: 5px 0; color: #1e293b;">${phone !== 'N/A' ? `<a href="tel:${phone}" style="color: #052C58; text-decoration: none; font-weight: 600;">${phone}</a>` : 'Not provided'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 5px 0; color: #64748b;"><strong>Company:</strong></td>
                        <td style="padding: 5px 0; color: #1e293b; font-weight: 600;">${company}</td>
                      </tr>
                      ${data.country || data.city ? `
                      <tr>
                        <td style="padding: 5px 0; color: #64748b;"><strong>Location:</strong></td>
                        <td style="padding: 5px 0; color: #1e293b;">${[data.city, data.country].filter(Boolean).join(', ')}</td>
                      </tr>` : ''}
                    </table>
                  </td>
                </tr>

                <!-- Technical Specs / Message Block -->
                <tr>
                  <td style="padding: 28px 32px;">
                    <h3 style="margin: 0 0 12px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #64748b;">
                      Requirement Specifications & Message
                    </h3>

                    <table style="width: 100%; font-size: 14px; border-collapse: collapse; margin-bottom: 20px;">
                      ${data.industry ? `<tr><td style="padding: 5px 0; width: 140px; color: #64748b;"><strong>Industry:</strong></td><td style="padding: 5px 0; color: #1e293b;">${data.industry}</td></tr>` : ''}
                      ${data.productCategory ? `<tr><td style="padding: 5px 0; width: 140px; color: #64748b;"><strong>Product Family:</strong></td><td style="padding: 5px 0; color: #1e293b;">${data.productCategory}</td></tr>` : ''}
                      ${data.standard && data.standard !== 'N/A' ? `<tr><td style="padding: 5px 0; color: #64748b;"><strong>Design Standard:</strong></td><td style="padding: 5px 0; color: #1e293b;">${data.standard}</td></tr>` : ''}
                      ${data.dimensions && data.dimensions !== 'N/A' ? `<tr><td style="padding: 5px 0; color: #64748b;"><strong>Dimensions:</strong></td><td style="padding: 5px 0; color: #1e293b;">${data.dimensions}</td></tr>` : ''}
                      ${data.material && data.material !== 'N/A' ? `<tr><td style="padding: 5px 0; color: #64748b;"><strong>Material Grade:</strong></td><td style="padding: 5px 0; color: #1e293b;">${data.material}</td></tr>` : ''}
                      ${data.pressure && data.pressure !== 'N/A' ? `<tr><td style="padding: 5px 0; color: #64748b;"><strong>Pressure Rating:</strong></td><td style="padding: 5px 0; color: #1e293b;">${data.pressure}</td></tr>` : ''}
                      ${data.quantity && data.quantity !== 'N/A' ? `<tr><td style="padding: 5px 0; color: #64748b;"><strong>Quantity:</strong></td><td style="padding: 5px 0; color: #1e293b;">${data.quantity}</td></tr>` : ''}
                      ${data.deliveryDate && data.deliveryDate !== 'N/A' ? `<tr><td style="padding: 5px 0; color: #64748b;"><strong>Delivery Required:</strong></td><td style="padding: 5px 0; color: #1e293b;">${data.deliveryDate}</td></tr>` : ''}
                      ${data.attachmentName || data.fileName ? `
                      <tr>
                        <td style="padding: 6px 0; color: #64748b;"><strong>Uploaded File:</strong></td>
                        <td style="padding: 6px 0; color: #018F5D; font-weight: 700;">📎 ${data.attachmentName || data.fileName} ${data.fileSize ? `(${data.fileSize})` : ''}</td>
                      </tr>` : ''}
                    </table>

                    <!-- Detailed Description or Message -->
                    <div style="background-color: #f1f5f9; border-left: 4px solid #052C58; padding: 16px 20px; border-radius: 4px;">
                      <strong style="display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #475569; margin-bottom: 6px;">
                        ${source === 'contact' ? 'Customer Message / Inquiry Notes' : 'Chatbot Problem Description & Notes'}:
                      </strong>
                      <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #0f172a; white-space: pre-wrap;">
                        ${data.message || data.description || data.notes || 'No extra message provided.'}
                      </p>
                    </div>

                    <!-- Direct Action Buttons -->
                    <div style="margin-top: 28px; text-align: center;">
                      <a href="mailto:${userEmail}?subject=Re:%20TXCO%20Sealing%20Products%20Quotation%20[${referenceId}]" style="display: inline-block; background-color: #018F5D; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 24px; border-radius: 6px; box-shadow: 0 4px 12px rgba(1,143,93,0.3);">
                        ✉️ Click to Reply to Client Directly
                      </a>
                    </div>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8fafc; padding: 18px 32px; border-top: 1px solid #e2e8f0; text-align: center;">
                    <p style="margin: 0; font-size: 12px; color: #94a3b8; line-height: 1.5;">
                      Automated dispatch from <strong>TXCO Website Portal</strong>.<br>
                      Sent to site maintenance: ${MAINTENANCE_EMAILS.join(', ')}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: fromAddress,
      to: MAINTENANCE_EMAILS.join(', '),
      subject: `[New ${source.toUpperCase()} ${type}] ${userName} (${company}) - ${referenceId}`,
      html: adminHtml,
    });

    results.adminEmailSent = true;
  } catch (err) {
    console.error('[MailService] Failed to send notification email to maintenance team:', err);
    results.errors.push(`Admin email error: ${err.message}`);
  }

  return results;
}
