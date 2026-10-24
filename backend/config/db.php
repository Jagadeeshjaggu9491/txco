<?php
/**
 * TXCO Database Connection Configuration for Hostinger
 * Supports PDO with MySQL and automatic JSON & CORS response headers
 */

// Enable CORS for Next.js Frontend
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Hostinger MySQL Credentials
$host = 'localhost';
$db_name = 'u547609561_txco';
$username = 'u547609561_txco';
$password = 'j$2WtbdANc8M7GA';

try {
    $pdo = new PDO("mysql:host={$host};dbname={$db_name};charset=utf8mb4", $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => "database_connection_failed",
        "message" => "Database connection error: " . $e->getMessage()
    ]);
    exit();
}

/**
 * Helper to get JSON request body
 */
function getJsonInput() {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}
