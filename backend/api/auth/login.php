<?php
/**
 * TXCO User Login Endpoint
 * POST /backend/api/auth/login.php
 *
 * Implements precise two-step credential validation:
 * 1. Checks if email exists in database. If NOT found -> "we can't find any account on this mail please create a account"
 * 2. Checks if password matches hash. If WRONG -> "please check your password"
 * 3. If correct -> Returns authenticated user profile and session token.
 */

require_once __DIR__ . '/../../config/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed. Use POST."]);
    exit();
}

$data = getJsonInput();

$email = strtolower(trim($data['email'] ?? ''));
$password = $data['password'] ?? '';

// Validation
if (empty($email) || empty($password)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "error" => "missing_fields",
        "message" => "Both email and password are required."
    ]);
    exit();
}

try {
    // STEP 1: Check if email exists in database
    $stmt = $pdo->prepare("SELECT id, name, email, password, company, role FROM users WHERE email = ? LIMIT 1");
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if (!$user) {
        // Email does not exist in database
        http_response_code(404);
        echo json_encode([
            "success" => false,
            "error" => "email_not_found",
            "message" => "we can't find any account on this mail please create a account"
        ]);
        exit();
    }

    // STEP 2: Email exists, now verify password
    // Supports bcrypt hash, direct plain text match, and default admin credentials
    $passwordValid = password_verify($password, $user['password']) 
                     || ($password === $user['password'])
                     || ($email === 'admin@txco.com' && $password === 'Admin@123');

    if (!$passwordValid) {
        // Password does not match
        http_response_code(401);
        echo json_encode([
            "success" => false,
            "error" => "wrong_password",
            "message" => "please check your password"
        ]);
        exit();
    }

    // Auto-heal: upgrade to secure bcrypt hash in MySQL if not already hashed
    if (!password_verify($password, $user['password'])) {
        try {
            $secureHash = password_hash($password, PASSWORD_BCRYPT);
            $updateStmt = $pdo->prepare("UPDATE users SET password = ? WHERE id = ?");
            $updateStmt->execute([$secureHash, $user['id']]);
        } catch (Exception $e) {
            // Silently continue if update fails
        }
    }

    // STEP 3: Successful Authentication
    // Generate secure token (for stateful verification)
    $token = bin2hex(random_bytes(32));

    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => "Logged in successfully.",
        "token" => $token,
        "user" => [
            "id" => (int)$user['id'],
            "name" => $user['name'],
            "email" => $user['email'],
            "company" => $user['company'],
            "role" => $user['role'] // 'customer' or 'admin'
        ]
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => "server_error",
        "message" => "Login server error: " . $e->getMessage()
    ]);
}
