<?php
/**
 * TXCO Sealing Products - Send Registration OTP via Hostinger SMTP
 * POST /backend/api/auth/send_otp.php
 * Payload: { "email": "user@example.com", "otp": "123456", "name": "Optional Name" }
 */

require_once __DIR__ . '/../../config/db.php';

// Helper for clean JSON responses
function sendResponse($data, $code = 200)
{
  http_response_code($code);
  echo json_encode($data);
  exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  sendResponse([
    'success' => false,
    'error' => 'method_not_allowed',
    'message' => 'Only POST requests are accepted.'
  ], 405);
}

$input = getJsonInput();
$email = trim(strtolower($input['email'] ?? ''));
$otp = trim($input['otp'] ?? '');
$name = trim($input['name'] ?? '');

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  sendResponse([
    'success' => false,
    'error' => 'invalid_email',
    'message' => 'Please provide a valid email address.'
  ], 400);
}

// Generate OTP if not provided
if (empty($otp)) {
  $otp = (string) random_int(100000, 999999);
}

// 1. Check if user already exists in database
if (isset($pdo)) {
  try {
    $stmt = $pdo->prepare('SELECT id FROM users WHERE email = ? LIMIT 1');
    $stmt->execute([$email]);
    if ($stmt->fetch()) {
      sendResponse([
        'success' => false,
        'error' => 'email_already_registered',
        'message' => 'An account with this email already exists. Please log in.'
      ], 409);
    }
  } catch (PDOException $e) {
    error_log('Database check failed: ' . $e->getMessage());
  }
}

// 2. Prepare Email Body
$displayName = !empty($name) ? htmlspecialchars($name) : 'Valued Partner';
$subject = "Your TXCO Verification Code: " . $otp;

$htmlBody = "<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <title>TXCO Verification Code</title>
</head>
<body style='margin: 0; padding: 0; background-color: #f4f6f8; font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;'>
  <table role='presentation' width='100%' cellspacing='0' cellpadding='0' style='background-color: #f4f6f8; padding: 40px 15px;'>
    <tr>
      <td align='center'>
        <table role='presentation' width='100%' style='max-width: 580px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.06); border: 1px solid #e5e9f0;'>
          <!-- Header Banner -->
          <tr>
            <td style='background: linear-gradient(135deg, #052C58 0%, #031830 100%); padding: 36px 30px; text-align: center;'>
              <h1 style='margin: 0; color: #ffffff; font-size: 26px; letter-spacing: 2px; font-weight: 800;'>TXCO</h1>
              <p style='margin: 6px 0 0; color: #C5A880; font-size: 13px; letter-spacing: 1.5px; text-transform: uppercase;'>Sealing Products &amp; Joint Integrity</p>
            </td>
          </tr>
          <!-- Body Content -->
          <tr>
            <td style='padding: 36px 32px; color: #222222; font-size: 15px; line-height: 1.6;'>
              <p style='margin: 0 0 16px; font-weight: 600; color: #052C58;'>Hello {$displayName},</p>
              <p style='margin: 0 0 24px; color: #555555;'>Thank you for initiating your corporate registration with TXCO. Please use the verification code below to verify your email address:</p>
              
              <!-- OTP Box -->
              <div style='background-color: #F8F9FA; border: 2px dashed #052C58; border-radius: 10px; padding: 22px; text-align: center; margin: 24px 0;'>
                <div style='font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: #777777; margin-bottom: 8px;'>Your One-Time Password</div>
                <div style='font-size: 38px; font-weight: 800; letter-spacing: 8px; color: #052C58; font-family: monospace;'>{$otp}</div>
                <div style='font-size: 12px; color: #999999; margin-top: 8px;'>Valid for 10 minutes</div>
              </div>

              <p style='margin: 24px 0 0; font-size: 13px; color: #777777;'>If you did not request this code, please safely disregard this email or contact support at <a href='mailto:txco@iadesigns.in' style='color: #052C58;'>txco@iadesigns.in</a>.</p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style='background-color: #F8F9FA; padding: 20px 30px; text-align: center; font-size: 12px; color: #888888; border-top: 1px solid #eeeeee;'>
              &copy; " . date('Y') . " TXCO Sealing Products. All rights reserved.<br>
              ASME B16.20 &bull; API 6A &bull; High-Pressure Engineered Gaskets
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>";

// 3. SMTP Sender Function via Socket
function sendHostingerSmtp($toEmail, $subject, $htmlContent)
{
  $smtpHost = 'ssl://smtp.hostinger.com';
  $smtpPort = 465;
  $username = 'txco@iadesigns.in';
  $password = 'j$2WtbdANc8M7GA';
  $fromEmail = 'txco@iadesigns.in';
  $fromName = 'TXCO Sealing Products';

  $context = stream_context_create([
    'ssl' => [
      'verify_peer' => false,
      'verify_peer_name' => false,
      'allow_self_signed' => true
    ]
  ]);

  $socket = @stream_socket_client("{$smtpHost}:{$smtpPort}", $errno, $errstr, 12, STREAM_CLIENT_CONNECT, $context);

  if (!$socket) {
    error_log("Hostinger SMTP socket connection failed: {$errno} {$errstr}. Falling back to mail().");
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: {$fromName} <{$fromEmail}>\r\n";
    $headers .= "Reply-To: {$fromEmail}\r\n";
    return @mail($toEmail, $subject, $htmlContent, $headers);
  }

  $readResponse = function () use ($socket) {
    $response = '';
    while ($line = fgets($socket, 515)) {
      $response .= $line;
      if (substr($line, 3, 1) === ' ')
        break;
    }
    return $response;
  };

  $sendCommand = function ($cmd) use ($socket) {
    fputs($socket, $cmd . "\r\n");
  };

  $readResponse(); // greeting
  $sendCommand("EHLO " . ($_SERVER['SERVER_NAME'] ?? 'txco.com'));
  $readResponse();

  $sendCommand("AUTH LOGIN");
  $readResponse();
  $sendCommand(base64_encode($username));
  $readResponse();
  $sendCommand(base64_encode($password));
  $authResp = $readResponse();

  if (substr($authResp, 0, 3) !== '235') {
    error_log("Hostinger SMTP authentication failed: {$authResp}. Falling back to mail().");
    fclose($socket);
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: {$fromName} <{$fromEmail}>\r\n";
    return @mail($toEmail, $subject, $htmlContent, $headers);
  }

  $sendCommand("MAIL FROM: <{$fromEmail}>");
  $readResponse();
  $sendCommand("RCPT TO: <{$toEmail}>");
  $readResponse();
  $sendCommand("DATA");
  $readResponse();

  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
  $headers .= "From: {$fromName} <{$fromEmail}>\r\n";
  $headers .= "To: <{$toEmail}>\r\n";
  $headers .= "Subject: {$subject}\r\n";
  $headers .= "Date: " . date('r') . "\r\n";

  $message = $headers . "\r\n" . $htmlContent . "\r\n.\r\n";
  $sendCommand($message);
  $readResponse();

  $sendCommand("QUIT");
  $readResponse();
  fclose($socket);
  return true;
}

$sent = sendHostingerSmtp($email, $subject, $htmlBody);

sendResponse([
  'success' => true,
  'message' => 'Verification code sent to ' . $email,
  'otp' => $otp
]);
