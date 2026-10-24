import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { email, otp, name } = await request.json();

    const cleanEmail = (email || '').trim().toLowerCase();

    if (!cleanEmail || !cleanEmail.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Invalid recipient email address.' },
        { status: 400 }
      );
    }

    if (!otp) {
      return NextResponse.json(
        { success: false, message: 'OTP code is missing.' },
        { status: 400 }
      );
    }

    // Configure Hostinger SMTP Transporter
    const host = process.env.SMTP_HOST || 'smtp.hostinger.com';
    const port = Number(process.env.SMTP_PORT) || 465;
    const user = process.env.SMTP_USER || 'txco@iadesigns.in';
    const rawPass = process.env.SMTP_PASS;
    const pass = (rawPass && rawPass.length >= 8) ? rawPass : 'j$2WtbdANc8M7GA';
    const fromAddress = process.env.SMTP_FROM || `"TXCO Sealing Products" <${user}>`;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // SSL for 465
      auth: {
        user,
        pass,
      },
    });

    const displayName = (name || '').trim() || 'Valued Partner';

    // Branded TXCO Email Template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TXCO Account Verification</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f1f5f9; padding: 40px 10px;">
          <tr>
            <td align="center">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 560px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(5,44,88,0.08); border: 1px solid #e2e8f0;">
                <!-- Header -->
                <tr>
                  <td style="background-color: #052C58; padding: 28px 32px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 800; letter-spacing: 2px;">TXCO</h1>
                    <p style="margin: 4px 0 0 0; color: #94a3b8; font-size: 12px; letter-spacing: 1px; text-transform: uppercase;">Engineered Sealing Solutions</p>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding: 36px 32px;">
                    <h2 style="margin: 0 0 12px 0; color: #052C58; font-size: 20px; font-weight: 700;">Account Verification Code</h2>
                    <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.6; color: #475569;">
                      Hello <strong>${displayName}</strong>,<br><br>
                      Thank you for creating an account with TXCO Sealing Products. Use the verification code below to verify your email address and complete your registration:
                    </p>

                    <!-- OTP Highlight Box -->
                    <div style="background-color: #f8fafc; border: 2px dashed #018F5D; border-radius: 10px; padding: 24px; text-align: center; margin: 28px 0;">
                      <span style="display: block; font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Your 6-Digit One-Time Code</span>
                      <span style="font-family: monospace, Courier, monospace; font-size: 38px; font-weight: 800; color: #052C58; letter-spacing: 8px; display: inline-block;">${otp}</span>
                    </div>

                    <p style="margin: 0 0 8px 0; font-size: 13px; color: #64748b; line-height: 1.5;">
                      ⏰ This one-time password is valid for <strong>10 minutes</strong>.
                    </p>
                    <p style="margin: 0; font-size: 13px; color: #94a3b8; line-height: 1.5;">
                      If you did not request this verification code, please ignore this email or contact support.
                    </p>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8fafc; padding: 20px 32px; border-top: 1px solid #e2e8f0; text-align: center;">
                    <p style="margin: 0; font-size: 12px; color: #94a3b8; line-height: 1.5;">
                      © ${new Date().getFullYear()} TXCO Sealing Products Ltd. All rights reserved.<br>
                      Specialized Metallic Gaskets, RTJ, & API Flange Sealing.
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
      to: cleanEmail,
      subject: `Your TXCO Verification Code: ${otp}`,
      text: `Hello ${displayName},\n\nYour TXCO verification code is: ${otp}\n\nThis code is valid for 10 minutes.\n\nThank you,\nTXCO Sealing Products`,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: `Verification code sent to ${cleanEmail}`,
    });
  } catch (error) {
    console.error('Error sending OTP email via Hostinger:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Failed to send verification email. Please check your network.',
      },
      { status: 500 }
    );
  }
}
