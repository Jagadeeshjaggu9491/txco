<?php
/**
 * TXCO Contact Page Enquiries API Endpoint
 * Handles GET, POST, PUT, DELETE for Contact Page RFQs and Technical Inquiries
 * Database: u547609561_txco (via backend/config/db.php)
 */

require_once __DIR__ . '/../../config/db.php';
require_once __DIR__ . '/../../config/mailer.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        handleGetContactEnquiries($pdo);
        break;

    case 'POST':
        handleCreateContactEnquiry($pdo);
        break;

    case 'PUT':
        handleUpdateContactStatus($pdo);
        break;

    case 'DELETE':
        handleDeleteContactEnquiry($pdo);
        break;

    default:
        http_response_code(405);
        echo json_encode(["success" => false, "message" => "Method not allowed."]);
        break;
}

/**
 * GET: Retrieve all contact page enquiries
 */
function handleGetContactEnquiries($pdo) {
    try {
        $search = $_GET['search'] ?? '';
        $status = $_GET['status'] ?? '';

        $query = "SELECT * FROM contact_enquiries WHERE 1=1";
        $params = [];

        if (!empty($status) && $status !== 'All') {
            $query .= " AND status = ?";
            $params[] = $status;
        }

        if (!empty($search)) {
            $query .= " AND (reference_id LIKE ? OR full_name LIKE ? OR email LIKE ? OR company LIKE ? OR inquiry_type LIKE ?)";
            $searchTerm = "%{$search}%";
            $params[] = $searchTerm;
            $params[] = $searchTerm;
            $params[] = $searchTerm;
            $params[] = $searchTerm;
            $params[] = $searchTerm;
        }

        $query .= " ORDER BY created_at DESC";

        $stmt = $pdo->prepare($query);
        $stmt->execute($params);
        $enquiries = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode([
            "success" => true,
            "count" => count($enquiries),
            "enquiries" => $enquiries
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Failed to retrieve enquiries: " . $e->getMessage()]);
    }
}

/**
 * POST: Insert a new contact page enquiry
 */
function handleCreateContactEnquiry($pdo) {
    try {
        $data = getJsonInput();

        $fullName = trim($data['fullName'] ?? $data['full_name'] ?? '');
        $email = trim($data['email'] ?? '');
        $phone = trim($data['phone'] ?? '');
        $company = trim($data['company'] ?? '');
        $industry = trim($data['industry'] ?? 'Oil & Gas');
        $inquiryType = trim($data['inquiryType'] ?? $data['inquiry_type'] ?? 'Request for Quote (RFQ)');
        $message = trim($data['message'] ?? '');
        $attachmentName = trim($data['attachmentName'] ?? $data['attachment_name'] ?? '');

        if (empty($fullName) || empty($email) || empty($message)) {
            http_response_code(400);
            echo json_encode(["success" => false, "message" => "Full Name, Email, and Message are required."]);
            return;
        }

        // Generate Reference ID if not provided
        $year = date('Y');
        $randomSuffix = rand(1000, 9999);
        $referenceId = $data['referenceId'] ?? $data['reference_id'] ?? "TXCO-CNT-{$year}-{$randomSuffix}";

        $stmt = $pdo->prepare("
            INSERT INTO contact_enquiries 
            (reference_id, full_name, email, phone, company, industry, inquiry_type, message, attachment_name, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'New')
        ");
        $stmt->execute([
            $referenceId,
            $fullName,
            $email,
            $phone ?: null,
            $company ?: null,
            $industry,
            $inquiryType,
            $message,
            $attachmentName ?: null
        ]);

        $newId = $pdo->lastInsertId();

        // Send Thank-You email to customer and notification email to maintenance team
        $emailStatus = [
            'customerEmailSent' => false,
            'adminEmailSent' => false
        ];
        if (function_exists('sendContactEnquiryEmails')) {
            try {
                $emailStatus = sendContactEnquiryEmails([
                    'reference_id' => $referenceId,
                    'full_name' => $fullName,
                    'email' => $email,
                    'phone' => $phone,
                    'company' => $company,
                    'industry' => $industry,
                    'inquiry_type' => $inquiryType,
                    'message' => $message,
                    'attachment_name' => $attachmentName
                ]);
            } catch (Exception $mailEx) {
                error_log("Contact email dispatch failed: " . $mailEx->getMessage());
            }
        }

        echo json_encode([
            "success" => true,
            "id" => $newId,
            "referenceId" => $referenceId,
            "message" => "Thank you for contacting TXCO Sealing Products. Your enquiry has been received and our engineering team will get back to you shortly.",
            "enquiry" => [
                "id" => $newId,
                "reference_id" => $referenceId,
                "full_name" => $fullName,
                "email" => $email,
                "phone" => $phone,
                "company" => $company,
                "industry" => $industry,
                "inquiry_type" => $inquiryType,
                "message" => $message,
                "attachment_name" => $attachmentName,
                "status" => "New",
                "created_at" => date('Y-m-d H:i:s')
            ],
            "emailStatus" => $emailStatus
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Database insert error: " . $e->getMessage()]);
    }
}

/**
 * PUT: Update enquiry status (e.g. New -> In Review -> Quoted -> Closed)
 */
function handleUpdateContactStatus($pdo) {
    try {
        $data = getJsonInput();
        $id = $data['id'] ?? null;
        $status = $data['status'] ?? null;

        if (!$id || !$status) {
            http_response_code(400);
            echo json_encode(["success" => false, "message" => "Enquiry ID and Status are required."]);
            return;
        }

        $stmt = $pdo->prepare("UPDATE contact_enquiries SET status = ? WHERE id = ?");
        $stmt->execute([$status, $id]);

        echo json_encode(["success" => true, "message" => "Enquiry status updated."]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Update failed: " . $e->getMessage()]);
    }
}

/**
 * DELETE: Delete an enquiry
 */
function handleDeleteContactEnquiry($pdo) {
    try {
        $id = $_GET['id'] ?? null;
        if (!$id) {
            $data = getJsonInput();
            $id = $data['id'] ?? null;
        }

        if (!$id) {
            http_response_code(400);
            echo json_encode(["success" => false, "message" => "Enquiry ID is required for deletion."]);
            return;
        }

        $stmt = $pdo->prepare("DELETE FROM contact_enquiries WHERE id = ?");
        $stmt->execute([$id]);

        echo json_encode(["success" => true, "message" => "Enquiry deleted successfully."]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Delete failed: " . $e->getMessage()]);
    }
}
