<?php
/**
 * TXCO Sealing Products - Central Email Dispatcher (PHP)
 * Sends automated Thank-You emails to customers and Notification emails to the maintenance team:
 *  - Customer: Customer-provided email address
 *  - Maintenance Team: banuakash99@gmail.com, info@txcosealing.com
 * Supports Hostinger SMTP with fallback to PHP mail()
 */

// Maintenance recipient list
define('TXCO_MAINTENANCE_EMAILS', 'banuakash99@gmail.com, info@txcosealing.com');

/**
 * Send an HTML email via Hostinger SMTP or PHP mail()
 */
function sendSingleTxcoEmail($toEmail, $subject, $htmlContent, $replyTo = null) {
    $smtpHost = 'ssl://smtp.hostinger.com';
    $smtpPort = 465;
    $username = 'txco@iadesigns.in';
    $password = 'j$2WtbdANc8M7GA';
    $fromEmail = 'txco@iadesigns.in';
    $fromName = 'TXCO Sealing Products';

    if (empty($replyTo)) {
        $replyTo = $fromEmail;
    }

    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        ]
    ]);

    $socket = @stream_socket_client("{$smtpHost}:{$smtpPort}", $errno, $errstr, 8, STREAM_CLIENT_CONNECT, $context);

    if (!$socket) {
        error_log("TXCO Mailer: Socket failed ({$errno} {$errstr}). Using mail() fallback for {$toEmail}.");
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        $headers .= "From: {$fromName} <{$fromEmail}>\r\n";
        $headers .= "Reply-To: {$replyTo}\r\n";
        return @mail($toEmail, $subject, $htmlContent, $headers);
    }

    $readResponse = function() use ($socket) {
        $response = '';
        while ($line = fgets($socket, 515)) {
            $response .= $line;
            if (substr($line, 3, 1) === ' ') break;
        }
        return $response;
    };

    $sendCommand = function($cmd) use ($socket) {
        fputs($socket, $cmd . "\r\n");
    };

    $readResponse(); // greeting (220)
    $sendCommand("EHLO " . ($_SERVER['SERVER_NAME'] ?? 'txco-dark.iadesigns.in'));
    $readResponse();

    $sendCommand("AUTH LOGIN");
    $readResponse();
    $sendCommand(base64_encode($username));
    $readResponse();
    $sendCommand(base64_encode($password));
    $authResp = $readResponse();

    if (substr($authResp, 0, 3) !== '235') {
        error_log("TXCO Mailer: SMTP Auth failed ({$authResp}). Using mail() fallback for {$toEmail}.");
        fclose($socket);
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        $headers .= "From: {$fromName} <{$fromEmail}>\r\n";
        $headers .= "Reply-To: {$replyTo}\r\n";
        return @mail($toEmail, $subject, $htmlContent, $headers);
    }

    $sendCommand("MAIL FROM: <{$fromEmail}>");
    $readResponse();

    $sendCommand("RCPT TO: <{$toEmail}>");
    $rcptResp = $readResponse();
    if (substr($rcptResp, 0, 3) !== '250') {
        error_log("TXCO Mailer: RCPT TO rejected for {$toEmail}: {$rcptResp}");
        fclose($socket);
        return false;
    }

    $sendCommand("DATA");
    $readResponse();

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: {$fromName} <{$fromEmail}>\r\n";
    $headers .= "To: <{$toEmail}>\r\n";
    $headers .= "Reply-To: {$replyTo}\r\n";
    $headers .= "Subject: {$subject}\r\n";
    $headers .= "Date: " . date('r') . "\r\n";

    $message = $headers . "\r\n" . $htmlContent . "\r\n.\r\n";
    $sendCommand($message);
    $sendResp = $readResponse();

    $sendCommand("QUIT");
    $readResponse();
    fclose($socket);

    return substr($sendResp, 0, 3) === '250';
}

function sendTxcoEmail($toEmail, $subject, $htmlContent, $replyTo = null) {
    $recipients = array_map('trim', explode(',', $toEmail));
    $allSent = true;
    foreach ($recipients as $rcpt) {
        if (!empty($rcpt)) {
            $sent = sendSingleTxcoEmail($rcpt, $subject, $htmlContent, $replyTo);
            if (!$sent) {
                $allSent = false;
            }
        }
    }
    return $allSent;
}

/**
 * Dispatch emails for Contact Page Submissions
 */
function sendContactEnquiryEmails($data) {
    $refId = $data['reference_id'] ?? $data['referenceId'] ?? 'TXCO-CNT';
    $name = htmlspecialchars($data['full_name'] ?? $data['fullName'] ?? 'Valued Customer');
    $email = htmlspecialchars($data['email'] ?? '');
    $phone = htmlspecialchars($data['phone'] ?? 'N/A');
    $company = htmlspecialchars($data['company'] ?? 'N/A');
    $industry = htmlspecialchars($data['industry'] ?? 'Oil & Gas');
    $inquiryType = htmlspecialchars($data['inquiry_type'] ?? $data['inquiryType'] ?? 'Request for Quote');
    $message = nl2br(htmlspecialchars($data['message'] ?? ''));
    $attachment = htmlspecialchars($data['attachment_name'] ?? $data['attachmentName'] ?? 'None attached');

    $year = date('Y');

    // 1. Thank-You Email to Customer
    $customerSubject = "Enquiry Received - Reference #{$refId} | TXCO Sealing Products";
    $customerHtml = "
    <!DOCTYPE html>
    <html>
    <head><meta charset='utf-8'></head>
    <body style='margin:0;padding:0;background-color:#f4f6f8;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,sans-serif;'>
      <table width='100%' cellpadding='0' cellspacing='0' style='background:#f4f6f8;padding:35px 15px;'>
        <tr><td align='center'>
          <table width='100%' style='max-width:620px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.06);border:1px solid #e2e8f0;'>
            <tr>
              <td style='background:linear-gradient(135deg,#052C58 0%,#031830 100%);padding:32px 30px;text-align:center;'>
                <h1 style='margin:0;color:#ffffff;font-size:26px;letter-spacing:2px;font-weight:800;'>TXCO</h1>
                <p style='margin:6px 0 0;color:#C5A880;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;'>Sealing Products &amp; Joint Integrity</p>
              </td>
            </tr>
            <tr>
              <td style='padding:32px;color:#1e293b;font-size:15px;line-height:1.6;'>
                <p style='margin:0 0 12px;font-weight:700;color:#052C58;font-size:18px;'>Hello {$name},</p>
                <p style='margin:0 0 20px;color:#475569;'>Thank you for reaching out to <strong>TXCO Sealing Products</strong>. We have successfully logged your inquiry in our engineering queue. An applications engineer will review your specifications and follow up promptly.</p>

                <div style='background:#f8fafc;border-left:4px solid #018F5D;border-radius:8px;padding:18px 20px;margin-bottom:24px;'>
                  <div style='font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#64748b;font-weight:600;'>Your Inquiry Reference ID</div>
                  <div style='font-size:22px;font-weight:800;color:#052C58;margin-top:4px;letter-spacing:1px;'>{$refId}</div>
                  <div style='font-size:13px;color:#64748b;margin-top:4px;'>Please quote this reference number for all future communications.</div>
                </div>

                <table width='100%' style='border-collapse:collapse;font-size:14px;margin-bottom:24px;'>
                  <tr style='border-bottom:1px solid #f1f5f9;'><td style='padding:10px 0;color:#64748b;width:35%;'>Inquiry Type</td><td style='padding:10px 0;font-weight:600;color:#0f172a;'>{$inquiryType}</td></tr>
                  <tr style='border-bottom:1px solid #f1f5f9;'><td style='padding:10px 0;color:#64748b;'>Company</td><td style='padding:10px 0;font-weight:600;color:#0f172a;'>{$company}</td></tr>
                  <tr style='border-bottom:1px solid #f1f5f9;'><td style='padding:10px 0;color:#64748b;'>Industry Sector</td><td style='padding:10px 0;font-weight:600;color:#0f172a;'>{$industry}</td></tr>
                  <tr style='border-bottom:1px solid #f1f5f9;'><td style='padding:10px 0;color:#64748b;'>Attachment</td><td style='padding:10px 0;font-weight:600;color:#0f172a;'>{$attachment}</td></tr>
                </table>

                <div style='background:#ffffff;border:1px solid #e2e8f0;border-radius:8px;padding:16px;margin-bottom:24px;'>
                  <div style='font-size:12px;color:#64748b;font-weight:600;text-transform:uppercase;margin-bottom:6px;'>Submitted Requirements</div>
                  <div style='color:#334155;font-size:14px;'>{$message}</div>
                </div>

                <div style='padding:14px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;font-size:13px;color:#166534;'>
                  <strong>Need immediate assistance?</strong> Contact our technical sales desk at <a href='tel:+919553125566' style='color:#018F5D;font-weight:700;text-decoration:none;'>+91 9553125566</a> or email us at <a href='mailto:info@txcosealing.com' style='color:#018F5D;font-weight:700;'>info@txcosealing.com</a>.
                </div>
              </td>
            </tr>
            <tr>
              <td style='background:#f8fafc;padding:20px 30px;text-align:center;font-size:12px;color:#94a3b8;border-top:1px solid #e2e8f0;'>
                &copy; {$year} TXCO Sealing Products. ASME B16.20 &bull; API 6A &bull; High-Pressure Engineered Sealing Solutions.
              </td>
            </tr>
          </table>
        </td></tr>
      </table>
    </body>
    </html>
    ";

    // 2. Notification Email to Maintenance / Sales Team
    $adminSubject = "🚨 New Website Enquiry: {$refId} - {$company} ({$inquiryType})";
    $adminHtml = "
    <!DOCTYPE html>
    <html>
    <head><meta charset='utf-8'></head>
    <body style='margin:0;padding:0;background-color:#f4f6f8;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,sans-serif;'>
      <table width='100%' cellpadding='0' cellspacing='0' style='background:#f4f6f8;padding:35px 15px;'>
        <tr><td align='center'>
          <table width='100%' style='max-width:650px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.06);border:1px solid #e2e8f0;'>
            <tr>
              <td style='background:#052C58;padding:24px 30px;color:#ffffff;'>
                <div style='display:inline-block;background:#018F5D;color:#ffffff;font-size:11px;font-weight:700;text-transform:uppercase;padding:4px 10px;border-radius:4px;margin-bottom:8px;'>New Website Submission</div>
                <h2 style='margin:0;font-size:22px;color:#ffffff;'>New Customer Enquiry Received</h2>
                <p style='margin:4px 0 0;font-size:13px;color:#cbd5e1;'>Reference: <strong>{$refId}</strong></p>
              </td>
            </tr>
            <tr>
              <td style='padding:28px 30px;'>
                <table width='100%' style='border-collapse:collapse;font-size:14px;margin-bottom:24px;'>
                  <tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:10px;color:#64748b;font-weight:600;width:30%;'>Client Name</td><td style='padding:10px;font-weight:700;color:#0f172a;'>{$name}</td></tr>
                  <tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:10px;color:#64748b;font-weight:600;'>Email</td><td style='padding:10px;'><a href='mailto:{$email}' style='color:#0284c7;font-weight:600;'>{$email}</a></td></tr>
                  <tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:10px;color:#64748b;font-weight:600;'>Phone</td><td style='padding:10px;'><a href='tel:{$phone}' style='color:#018F5D;font-weight:600;'>{$phone}</a></td></tr>
                  <tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:10px;color:#64748b;font-weight:600;'>Company</td><td style='padding:10px;font-weight:600;color:#0f172a;'>{$company}</td></tr>
                  <tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:10px;color:#64748b;font-weight:600;'>Industry</td><td style='padding:10px;color:#334155;'>{$industry}</td></tr>
                  <tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:10px;color:#64748b;font-weight:600;'>Inquiry Type</td><td style='padding:10px;font-weight:700;color:#052C58;'>{$inquiryType}</td></tr>
                  <tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:10px;color:#64748b;font-weight:600;'>Attachment</td><td style='padding:10px;font-weight:600;color:#0284c7;'>{$attachment}</td></tr>
                </table>

                <div style='background:#f8fafc;border:1px solid #cbd5e1;border-radius:8px;padding:18px;margin-bottom:24px;'>
                  <div style='font-size:12px;font-weight:700;color:#475569;text-transform:uppercase;margin-bottom:8px;'>Requirements / Message:</div>
                  <div style='color:#1e293b;font-size:14px;line-height:1.6;'>{$message}</div>
                </div>

                <div style='text-align:center;'>
                  <a href='https://txco.iadesigns.in/admin/stock/' style='display:inline-block;background:#052C58;color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:6px;font-weight:700;font-size:14px;'>Open in Admin Portal</a>
                </div>
              </td>
            </tr>
          </table>
        </td></tr>
      </table>
    </body>
    </html>
    ";

    // Dispatch both
    $userSuccess = !empty($email) ? sendTxcoEmail($email, $customerSubject, $customerHtml, 'txco@iadesigns.in') : false;
    $adminSuccess = sendTxcoEmail(TXCO_MAINTENANCE_EMAILS, $adminSubject, $adminHtml, $email);

    return [
        'customerEmailSent' => $userSuccess,
        'adminEmailSent' => $adminSuccess
    ];
}

/**
 * Dispatch emails for Chatbot RFQ / Technical Submissions
 */
function sendChatbotEnquiryEmails($data) {
    $refId = $data['reference_id'] ?? $data['referenceId'] ?? 'TXCO-RFQ';
    $enquiryType = htmlspecialchars($data['enquiry_type'] ?? $data['enquiryType'] ?? $data['type'] ?? 'RFQ');
    $name = htmlspecialchars($data['contact_name'] ?? $data['contactName'] ?? 'Valued Customer');
    $company = htmlspecialchars($data['company_name'] ?? $data['companyName'] ?? 'N/A');
    $email = htmlspecialchars($data['email'] ?? '');
    $phone = htmlspecialchars($data['phone'] ?? 'N/A');
    $country = htmlspecialchars($data['country'] ?? 'N/A');
    $city = htmlspecialchars($data['city'] ?? '');
    $productCategory = htmlspecialchars($data['product_category'] ?? $data['productCategory'] ?? 'Engineered Gaskets');
    $description = htmlspecialchars($data['description'] ?? 'N/A');
    $standard = htmlspecialchars($data['standard'] ?? 'N/A');
    $dimensions = htmlspecialchars($data['dimensions'] ?? 'N/A');
    $material = htmlspecialchars($data['material'] ?? 'N/A');
    $pressure = htmlspecialchars($data['pressure'] ?? 'N/A');
    $quantity = htmlspecialchars($data['quantity'] ?? 'N/A');
    $deliveryDate = htmlspecialchars($data['delivery_date'] ?? $data['deliveryDate'] ?? 'Standard');
    $notes = htmlspecialchars($data['notes'] ?? 'None');
    $fileName = htmlspecialchars($data['file_name'] ?? $data['fileName'] ?? 'None');
    $fileSize = htmlspecialchars($data['file_size'] ?? $data['fileSize'] ?? '');

    $location = $city ? "{$city}, {$country}" : $country;
    $year = date('Y');

    // 1. Thank-You Email to Customer
    $customerSubject = "RFQ Submission Received - Ref: {$refId} | TXCO Sealing Products";
    $customerHtml = "
    <!DOCTYPE html>
    <html>
    <head><meta charset='utf-8'></head>
    <body style='margin:0;padding:0;background-color:#f4f6f8;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,sans-serif;'>
      <table width='100%' cellpadding='0' cellspacing='0' style='background:#f4f6f8;padding:35px 15px;'>
        <tr><td align='center'>
          <table width='100%' style='max-width:620px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.06);border:1px solid #e2e8f0;'>
            <tr>
              <td style='background:linear-gradient(135deg,#052C58 0%,#031830 100%);padding:32px 30px;text-align:center;'>
                <h1 style='margin:0;color:#ffffff;font-size:26px;letter-spacing:2px;font-weight:800;'>TXCO</h1>
                <p style='margin:6px 0 0;color:#C5A880;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;'>Sealing Products &amp; Joint Integrity</p>
              </td>
            </tr>
            <tr>
              <td style='padding:32px;color:#1e293b;font-size:15px;line-height:1.6;'>
                <p style='margin:0 0 12px;font-weight:700;color:#052C58;font-size:18px;'>Dear {$name},</p>
                <p style='margin:0 0 20px;color:#475569;'>Thank you for submitting your Request for Quotation (RFQ) through our technical portal. We have queued your request for engineering review.</p>

                <div style='background:#f8fafc;border-left:4px solid #018F5D;border-radius:8px;padding:18px 20px;margin-bottom:24px;'>
                  <div style='font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#64748b;font-weight:600;'>RFQ Reference Code</div>
                  <div style='font-size:22px;font-weight:800;color:#052C58;margin-top:4px;'>{$refId}</div>
                  <div style='font-size:13px;color:#64748b;margin-top:4px;'>Product: <strong>{$productCategory}</strong></div>
                </div>

                <div style='font-size:14px;font-weight:700;color:#052C58;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px;'>Technical Specifications Logged</div>
                <table width='100%' style='border-collapse:collapse;font-size:14px;margin-bottom:24px;border:1px solid #e2e8f0;border-radius:6px;'>
                  <tr style='background:#f8fafc;border-bottom:1px solid #e2e8f0;'><td style='padding:8px 12px;color:#64748b;width:35%;'>Standard</td><td style='padding:8px 12px;font-weight:600;'>{$standard}</td></tr>
                  <tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:8px 12px;color:#64748b;'>Dimensions / Size</td><td style='padding:8px 12px;font-weight:600;'>{$dimensions}</td></tr>
                  <tr style='background:#f8fafc;border-bottom:1px solid #e2e8f0;'><td style='padding:8px 12px;color:#64748b;'>Material Spec</td><td style='padding:8px 12px;font-weight:600;'>{$material}</td></tr>
                  <tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:8px 12px;color:#64748b;'>Pressure Class</td><td style='padding:8px 12px;font-weight:600;'>{$pressure}</td></tr>
                  <tr style='background:#f8fafc;border-bottom:1px solid #e2e8f0;'><td style='padding:8px 12px;color:#64748b;'>Quantity</td><td style='padding:8px 12px;font-weight:700;color:#018F5D;'>{$quantity}</td></tr>
                  <tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:8px 12px;color:#64748b;'>Required By</td><td style='padding:8px 12px;font-weight:600;'>{$deliveryDate}</td></tr>
                  <tr style='background:#f8fafc;'><td style='padding:8px 12px;color:#64748b;'>Drawing / Specs File</td><td style='padding:8px 12px;font-weight:600;color:#0284c7;'>{$fileName} {$fileSize}</td></tr>
                </table>

                <div style='padding:14px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;font-size:13px;color:#166534;'>
                  <strong>Direct Engineering Hotline:</strong> Contact us at <a href='tel:+919553125566' style='color:#018F5D;font-weight:700;'>+91 9553125566</a> or <a href='mailto:info@txcosealing.com' style='color:#018F5D;font-weight:700;'>info@txcosealing.com</a>.
                </div>
              </td>
            </tr>
            <tr>
              <td style='background:#f8fafc;padding:20px 30px;text-align:center;font-size:12px;color:#94a3b8;border-top:1px solid #e2e8f0;'>
                &copy; {$year} TXCO Sealing Products. ASME B16.20 &bull; API 6A &bull; High-Pressure Engineered Sealing Solutions.
              </td>
            </tr>
          </table>
        </td></tr>
      </table>
    </body>
    </html>
    ";

    // 2. Notification Email to Maintenance / Sales Team
    $adminSubject = "⚡ New Chatbot RFQ: {$refId} - {$company} ({$productCategory})";
    $adminHtml = "
    <!DOCTYPE html>
    <html>
    <head><meta charset='utf-8'></head>
    <body style='margin:0;padding:0;background-color:#f4f6f8;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,sans-serif;'>
      <table width='100%' cellpadding='0' cellspacing='0' style='background:#f4f6f8;padding:35px 15px;'>
        <tr><td align='center'>
          <table width='100%' style='max-width:650px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.06);border:1px solid #e2e8f0;'>
            <tr>
              <td style='background:#052C58;padding:24px 30px;color:#ffffff;'>
                <div style='display:inline-block;background:#018F5D;color:#ffffff;font-size:11px;font-weight:700;text-transform:uppercase;padding:4px 10px;border-radius:4px;margin-bottom:8px;'>Chatbot RFQ Submission</div>
                <h2 style='margin:0;font-size:22px;color:#ffffff;'>New Technical RFQ Submitted</h2>
                <p style='margin:4px 0 0;font-size:13px;color:#cbd5e1;'>Reference: <strong>{$refId}</strong></p>
              </td>
            </tr>
            <tr>
              <td style='padding:28px 30px;'>
                <table width='100%' style='border-collapse:collapse;font-size:14px;margin-bottom:20px;'>
                  <tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:8px 0;color:#64748b;width:30%;'>Client Name</td><td style='padding:8px 0;font-weight:700;'>{$name}</td></tr>
                  <tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:8px 0;color:#64748b;'>Company</td><td style='padding:8px 0;font-weight:700;'>{$company}</td></tr>
                  <tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:8px 0;color:#64748b;'>Email</td><td style='padding:8px 0;'><a href='mailto:{$email}' style='color:#0284c7;font-weight:600;'>{$email}</a></td></tr>
                  <tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:8px 0;color:#64748b;'>Phone</td><td style='padding:8px 0;'><a href='tel:{$phone}' style='color:#018F5D;font-weight:600;'>{$phone}</a></td></tr>
                  <tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:8px 0;color:#64748b;'>Location</td><td style='padding:8px 0;'>{$location}</td></tr>
                  <tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:8px 0;color:#64748b;'>Product Category</td><td style='padding:8px 0;font-weight:700;color:#052C58;'>{$productCategory}</td></tr>
                  <tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:8px 0;color:#64748b;'>Standard / Dimensions</td><td style='padding:8px 0;font-weight:600;'>{$standard} &bull; {$dimensions}</td></tr>
                  <tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:8px 0;color:#64748b;'>Material / Pressure</td><td style='padding:8px 0;font-weight:600;'>{$material} &bull; {$pressure}</td></tr>
                  <tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:8px 0;color:#64748b;'>Quantity &amp; Date</td><td style='padding:8px 0;font-weight:700;color:#018F5D;'>{$quantity} (Req: {$deliveryDate})</td></tr>
                  <tr style='border-bottom:1px solid #e2e8f0;'><td style='padding:8px 0;color:#64748b;'>Attached Drawing</td><td style='padding:8px 0;font-weight:600;color:#0284c7;'>{$fileName} {$fileSize}</td></tr>
                </table>

                <div style='background:#f8fafc;border:1px solid #cbd5e1;border-radius:8px;padding:16px;margin-bottom:20px;'>
                  <div style='font-size:12px;font-weight:700;color:#475569;text-transform:uppercase;margin-bottom:6px;'>Description / Notes:</div>
                  <div style='color:#1e293b;font-size:14px;line-height:1.5;'>{$description}</div>
                  " . ($notes !== 'None' ? "<div style='margin-top:8px;color:#64748b;font-size:13px;'><strong>Notes:</strong> {$notes}</div>" : "") . "
                </div>

                <div style='text-align:center;'>
                  <a href='https://txco.iadesigns.in/admin/stock/' style='display:inline-block;background:#052C58;color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:6px;font-weight:700;font-size:14px;'>Review in Admin Console</a>
                </div>
              </td>
            </tr>
          </table>
        </td></tr>
      </table>
    </body>
    </html>
    ";

    $userSuccess = !empty($email) ? sendTxcoEmail($email, $customerSubject, $customerHtml, 'txco@iadesigns.in') : false;
    $adminSuccess = sendTxcoEmail(TXCO_MAINTENANCE_EMAILS, $adminSubject, $adminHtml, $email);

    return [
        'customerEmailSent' => $userSuccess,
        'adminEmailSent' => $adminSuccess
    ];
}
