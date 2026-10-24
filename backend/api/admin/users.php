<?php
/**
 * TXCO Admin Users API Endpoint
 * GET: Retrieve list of registered users from Hostinger MySQL
 * DELETE: Delete a user by ID
 */

require_once __DIR__ . '/../../config/db.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        handleGetUsers($pdo);
        break;

    case 'DELETE':
        handleDeleteUser($pdo);
        break;

    default:
        http_response_code(405);
        echo json_encode(["success" => false, "message" => "Method not allowed."]);
        break;
}

/**
 * GET: Fetch all registered users (never expose passwords)
 */
function handleGetUsers($pdo) {
    try {
        $stmt = $pdo->query("
            SELECT id, name, email, company, role, created_at, updated_at 
            FROM users 
            ORDER BY id DESC
        ");
        $users = $stmt->fetchAll();

        // Format dates and IDs cleanly
        $formatted = array_map(function($u) {
            return [
                "id" => (int)$u['id'],
                "name" => $u['name'],
                "email" => $u['email'],
                "company" => $u['company'] ?? '',
                "role" => $u['role'] ?? 'customer',
                "createdAt" => $u['created_at'],
                "updatedAt" => $u['updated_at']
            ];
        }, $users);

        echo json_encode([
            "success" => true,
            "count" => count($formatted),
            "users" => $formatted
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Failed to fetch users: " . $e->getMessage()]);
    }
}

/**
 * DELETE: Remove a user by ID
 */
function handleDeleteUser($pdo) {
    $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;

    if ($id <= 0) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Valid user ID is required."]);
        return;
    }

    try {
        // Prevent deleting the primary admin
        $checkStmt = $pdo->prepare("SELECT email, role FROM users WHERE id = ?");
        $checkStmt->execute([$id]);
        $targetUser = $checkStmt->fetch();

        if ($targetUser && $targetUser['email'] === 'admin@txco.com') {
            http_response_code(403);
            echo json_encode(["success" => false, "message" => "Default system administrator cannot be deleted."]);
            return;
        }

        $stmt = $pdo->prepare("DELETE FROM users WHERE id = ?");
        $stmt->execute([$id]);

        echo json_encode([
            "success" => true,
            "message" => "User deleted successfully."
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Failed to delete user: " . $e->getMessage()]);
    }
}
