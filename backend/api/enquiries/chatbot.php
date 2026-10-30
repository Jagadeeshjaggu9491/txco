<?php
/**
 * TXCO Chatbot Enquiries API Endpoint
 * Handles GET, POST, PUT, DELETE for Chatbot RFQs, Drawings, Vendor Registrations, and Callbacks
 * Database: u547609561_txco (via backend/config/db.php)
 */

require_once __DIR__ . '/../../config/db.php';
require_once __DIR__ . '/../../config/mailer.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        handleGetChatbotEnquiries($pdo);
        break;

    case 'POST':
        handleCreateChatbotEnquiry($pdo);
        break;

    case 'PUT':
        handleUpdateChatbotStatus($pdo);
        break;

    case 'DELETE':
        handleDeleteChatbotEnquiry($pdo);
        break;

    default:
        http_response_code(405);
        echo json_encode(["success" => false, "message" => "Method not allowed."]);
        break;
}

/**
 * GET: Retrieve all chatbot enquiries
 */
function handleGetChatbotEnquiries($pdo) {
    try {
        $search = $_GET['search'] ?? '';
        $type = $_GET['type'] ?? '';
        $status = $_GET['status'] ?? '';

        $query = "SELECT * FROM chatbot_enquiries WHERE 1=1";
        $params = [];

        if (!empty($type) && $type !== 'All') {
            $query .= " AND enquiry_type = ?";
            $params[] = $type;
        }

        if (!empty($status) && $status !== 'All') {
            $query .= " AND status = ?";
            $params[] = $status;
        }

        if (!empty($search)) {
            $query .= " AND (reference_id LIKE ? OR contact_name LIKE ? OR company_name LIKE ? OR email LIKE ? OR product_category LIKE ?)";
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
        echo json_encode(["success" => false, "message" => "Failed to retrieve chatbot enquiries: " . $e->getMessage()]);
    }
}

/**
 * POST: Insert a new chatbot enquiry
 */
function handleCreateChatbotEnquiry($pdo) {
    try {
        $data = getJsonInput();

        $enquiryType = trim($data['type'] ?? $data['enquiry_type'] ?? 'RFQ');
        $contactName = trim($data['contactName'] ?? $data['contact_name'] ?? '');
        $companyName = trim($data['companyName'] ?? $data['company_name'] ?? '');
        $email = trim($data['email'] ?? '');
        $phone = trim($data['phone'] ?? '');
        $country = trim($data['country'] ?? 'India');
        $city = trim($data['city'] ?? '');
        $productCategory = trim($data['productCategory'] ?? $data['product_category'] ?? '');
        $description = trim($data['description'] ?? '');
        $standard = trim($data['standard'] ?? '');
        $dimensions = trim($data['dimensions'] ?? '');
        $material = trim($data['material'] ?? '');
        $pressure = trim($data['pressure'] ?? '');
        $quantity = trim($data['quantity'] ?? '');
        $deliveryDate = trim($data['deliveryDate'] ?? $data['delivery_date'] ?? '');
        $notes = trim($data['notes'] ?? '');
        $fileName = trim($data['fileName'] ?? $data['file_name'] ?? '');
        $fileSize = trim($data['fileSize'] ?? $data['file_size'] ?? '');
        $vendorCategory = trim($data['vendorCategory'] ?? $data['vendor_category'] ?? '');
        $customerPortalRef = trim($data['customerPortalRef'] ?? $data['customer_portal_ref'] ?? '');

        if (empty($contactName) || empty($companyName) || empty($email)) {
            http_response_code(400);
            echo json_encode(["success" => false, "message" => "Contact Name, Company Name, and Email are mandatory."]);
            return;
        }

        // Generate Reference ID if not provided
        $year = date('Y');
        $randomSuffix = rand(1000, 9999);
        $prefixMap = [
            'RFQ' => 'TXCO-RFQ',
            'DRAWING' => 'TXCO-DRW',
            'VENDOR_REGISTRATION' => 'TXCO-VR',
            'CALLBACK' => 'TXCO-CB',
            'TECHNICAL' => 'TXCO-TECH'
        ];
        $prefix = $prefixMap[$enquiryType] ?? 'TXCO-ENQ';
        $referenceId = $data['referenceId'] ?? $data['reference_id'] ?? "{$prefix}-{$year}-{$randomSuffix}";

        $stmt = $pdo->prepare("
            INSERT INTO chatbot_enquiries 
            (reference_id, enquiry_type, contact_name, company_name, email, phone, country, city, product_category, description, standard, dimensions, material, pressure, quantity, delivery_date, notes, file_name, file_size, vendor_category, customer_portal_ref, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'New')
        ");
        $stmt->execute([
            $referenceId,
            $enquiryType,
            $contactName,
            $companyName,
            $email,
            $phone ?: null,
            $country,
            $city ?: null,
            $productCategory ?: null,
            $description ?: null,
            $standard ?: null,
            $dimensions ?: null,
            $material ?: null,
            $pressure ?: null,
            $quantity ?: null,
            $deliveryDate ?: null,
            $notes ?: null,
            $fileName ?: null,
            $fileSize ?: null,
            $vendorCategory ?: null,
            $customerPortalRef ?: null
        ]);

        $newId = $pdo->lastInsertId();

        // Send Thank-You email to customer and notification email to maintenance team
        $emailStatus = [
            'customerEmailSent' => false,
            'adminEmailSent' => false
        ];
        if (function_exists('sendChatbotEnquiryEmails')) {
            try {
                $emailStatus = sendChatbotEnquiryEmails([
                    'reference_id' => $referenceId,
                    'enquiry_type' => $enquiryType,
                    'contact_name' => $contactName,
                    'company_name' => $companyName,
                    'email' => $email,
                    'phone' => $phone,
                    'country' => $country,
                    'city' => $city,
                    'product_category' => $productCategory,
                    'description' => $description,
                    'standard' => $standard,
                    'dimensions' => $dimensions,
                    'material' => $material,
                    'pressure' => $pressure,
                    'quantity' => $quantity,
                    'delivery_date' => $deliveryDate,
                    'notes' => $notes,
                    'file_name' => $fileName,
                    'file_size' => $fileSize,
                    'vendor_category' => $vendorCategory,
                    'customer_portal_ref' => $customerPortalRef
                ]);
            } catch (Exception $mailEx) {
                error_log("Chatbot email dispatch failed: " . $mailEx->getMessage());
            }
        }

        echo json_encode([
            "success" => true,
            "id" => $newId,
            "referenceId" => $referenceId,
            "message" => "Thank you for contacting TXCO Sealing Products. Your enquiry has been submitted to our team for review. A TXCO representative will review the information and follow up.",
            "record" => [
                "id" => $newId,
                "reference_id" => $referenceId,
                "enquiry_type" => $enquiryType,
                "contact_name" => $contactName,
                "company_name" => $companyName,
                "email" => $email,
                "phone" => $phone,
                "country" => $country,
                "city" => $city,
                "product_category" => $productCategory,
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
 * PUT: Update chatbot enquiry status
 */
function handleUpdateChatbotStatus($pdo) {
    try {
        $data = getJsonInput();
        $id = $data['id'] ?? null;
        $status = $data['status'] ?? null;

        if (!$id || !$status) {
            http_response_code(400);
            echo json_encode(["success" => false, "message" => "Enquiry ID and Status are required."]);
            return;
        }

        $stmt = $pdo->prepare("UPDATE chatbot_enquiries SET status = ? WHERE id = ?");
        $stmt->execute([$status, $id]);

        echo json_encode(["success" => true, "message" => "Enquiry status updated."]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Update failed: " . $e->getMessage()]);
    }
}

/**
 * DELETE: Delete a chatbot enquiry
 */
function handleDeleteChatbotEnquiry($pdo) {
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

        $stmt = $pdo->prepare("DELETE FROM chatbot_enquiries WHERE id = ?");
        $stmt->execute([$id]);

        echo json_encode(["success" => true, "message" => "Enquiry deleted successfully."]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Delete failed: " . $e->getMessage()]);
    }
}
