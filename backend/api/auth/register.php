<?php
/**
 * TXCO User Registration Endpoint
 * POST /backend/api/auth/register.php
 */

require_once __DIR__ . '/../../config/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed. Use POST."]);
    exit();
}

$data = getJsonInput();

$name = trim($data['name'] ?? '');
$email = strtolower(trim($data['email'] ?? ''));
$password = $data['password'] ?? '';
$company = trim($data['company'] ?? '');
$role = (isset($data['role']) && $data['role'] === 'admin') ? 'admin' : 'customer';

// Validation
if (empty($name) || empty($email) || empty($password)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "error" => "missing_fields",
        "message" => "Name, email, and password are required."
    ]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "error" => "invalid_email",
        "message" => "Please enter a valid email address."
    ]);
    exit();
}

if (strlen($password) < 6) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "error" => "weak_password",
        "message" => "Password must be at least 6 characters long."
    ]);
    exit();
}

try {
    // 1. Check if email already exists in database
    $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ? LIMIT 1");
    $stmt->execute([$email]);
    if ($stmt->fetch()) {
        http_response_code(409);
        echo json_encode([
            "success" => false,
            "error" => "email_already_registered",
            "message" => "An account with this email already exists. Please log in instead."
        ]);
        exit();
    }

    // 2. Hash password with bcrypt
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    // 3. Insert new user
    $insertStmt = $pdo->prepare("
        INSERT INTO users (name, email, password, company, role) 
        VALUES (?, ?, ?, ?, ?)
    ");
    $insertStmt->execute([$name, $email, $hashedPassword, $company, $role]);
    $userId = $pdo->lastInsertId();

    http_response_code(201);
    echo json_encode([
        "success" => true,
        "message" => "Account created successfully.",
        "user" => [
            "id" => (int)$userId,
            "name" => $name,
            "email" => $email,
            "company" => $company,
            "role" => $role
        ]
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => "server_error",
        "message" => "Failed to create account: " . $e->getMessage()
    ]);
}
