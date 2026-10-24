<?php
/**
 * TXCO Admin Stock Management API Endpoint
 * Handles GET, POST, PUT, DELETE for live stock inventory
 *
 * GET:    Fetch all stock items (supports query filters)
 * POST:   Create a new stock item
 * PUT:    Update an existing stock item
 * DELETE: Remove a stock item
 */

require_once __DIR__ . '/../../config/db.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        handleGetStock($pdo);
        break;

    case 'POST':
        handleCreateStock($pdo);
        break;

    case 'PUT':
        handleUpdateStock($pdo);
        break;

    case 'DELETE':
        handleDeleteStock($pdo);
        break;

    default:
        http_response_code(405);
        echo json_encode(["success" => false, "message" => "Method not allowed."]);
        break;
}

/**
 * GET: Retrieve all stock inventory items
 */
function handleGetStock($pdo) {
    try {
        $category = $_GET['category'] ?? '';
        $search = $_GET['search'] ?? '';

        $query = "SELECT * FROM stock_items WHERE 1=1";
        $params = [];

        if (!empty($category) && $category !== 'All Categories') {
            $query .= " AND category = ?";
            $params[] = $category;
        }

        if (!empty($search)) {
            $query .= " AND (item_code LIKE ? OR product LIKE ? OR material LIKE ?)";
            $searchTerm = "%{$search}%";
            $params[] = $searchTerm;
            $params[] = $searchTerm;
            $params[] = $searchTerm;
        }

        $query .= " ORDER BY id ASC";

        $stmt = $pdo->prepare($query);
        $stmt->execute($params);
        $items = $stmt->fetchAll();
        $formattedItems = array_map(function($row) {
            return [
                "id" => $row['id'],
                "itemCode" => $row['item_code'],
                "item_code" => $row['item_code'],
                "product" => $row['product'],
                "category" => $row['category'],
                "profile" => $row['profile'],
                "material" => $row['material'],
                "pressureClass" => $row['pressure_class'],
                "pressure_class" => $row['pressure_class'],
                "npsSize" => $row['nps_size'],
                "nps_size" => $row['nps_size'],
                "ringNumber" => $row['ring_number'],
                "ring_number" => $row['ring_number'],
                "quantity" => (int)$row['quantity'],
                "status" => $row['status'],
                "location" => $row['location'],
                "standard" => $row['standard'],
                "createdAt" => $row['created_at'] ?? null,
                "updatedAt" => $row['updated_at'] ?? null,
            ];
        }, $items);

        echo json_encode([
            "success" => true,
            "count" => count($formattedItems),
            "items" => $formattedItems
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Failed to fetch stock: " . $e->getMessage()]);
    }
}

/**
 * POST: Create a new stock item
 */
function handleCreateStock($pdo) {
    $data = getJsonInput();

    $itemCode = trim($data['item_code'] ?? $data['itemCode'] ?? '');
    $product = trim($data['product'] ?? '');
    $category = trim($data['category'] ?? 'Metallic Gaskets');
    $profile = trim($data['profile'] ?? '');
    $material = trim($data['material'] ?? '');
    $pressureClass = trim($data['pressure_class'] ?? $data['pressureClass'] ?? 'Class 150');
    $npsSize = trim($data['nps_size'] ?? $data['npsSize'] ?? '2"');
    $ringNumber = trim($data['ring_number'] ?? $data['ringNumber'] ?? '-');
    $quantity = (int)($data['quantity'] ?? 0);
    $status = trim($data['status'] ?? 'In Stock');
    $location = trim($data['location'] ?? 'Main Facility (Warehouse A)');
    $standard = trim($data['standard'] ?? 'ASME B16.20');

    if (empty($itemCode) || empty($product)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Item Code and Product Title are required."]);
        return;
    }

    try {
        $stmt = $pdo->prepare("
            INSERT INTO stock_items 
            (item_code, product, category, profile, material, pressure_class, nps_size, ring_number, quantity, status, location, standard)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ");
        $stmt->execute([
            $itemCode, $product, $category, $profile, $material, $pressureClass, $npsSize, $ringNumber, $quantity, $status, $location, $standard
        ]);

        $newId = $pdo->lastInsertId();

        http_response_code(201);
        echo json_encode([
            "success" => true,
            "message" => "Stock item created successfully.",
            "item" => array_merge($data, ["id" => (int)$newId, "item_code" => $itemCode])
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Failed to create item: " . $e->getMessage()]);
    }
}

/**
 * PUT: Update an existing stock item
 */
function handleUpdateStock($pdo) {
    $data = getJsonInput();

    $id = (int)($data['id'] ?? 0);
    $itemCode = trim($data['item_code'] ?? $data['itemCode'] ?? '');

    if ($id <= 0 && empty($itemCode)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Item ID or Item Code is required for update."]);
        return;
    }

    try {
        $fields = [];
        $params = [];

        $allowedKeys = [
            'product' => 'product',
            'category' => 'category',
            'profile' => 'profile',
            'material' => 'material',
            'pressure_class' => 'pressure_class',
            'pressureClass' => 'pressure_class',
            'nps_size' => 'nps_size',
            'npsSize' => 'nps_size',
            'ring_number' => 'ring_number',
            'ringNumber' => 'ring_number',
            'quantity' => 'quantity',
            'status' => 'status',
            'location' => 'location',
            'standard' => 'standard',
        ];

        foreach ($allowedKeys as $key => $column) {
            if (isset($data[$key])) {
                $fields[] = "`{$column}` = ?";
                $params[] = $data[$key];
            }
        }

        if (empty($fields)) {
            http_response_code(400);
            echo json_encode(["success" => false, "message" => "No valid fields provided to update."]);
            return;
        }

        if ($id > 0) {
            $query = "UPDATE stock_items SET " . implode(', ', $fields) . " WHERE id = ?";
            $params[] = $id;
        } else {
            $query = "UPDATE stock_items SET " . implode(', ', $fields) . " WHERE item_code = ?";
            $params[] = $itemCode;
        }

        $stmt = $pdo->prepare($query);
        $stmt->execute($params);

        echo json_encode([
            "success" => true,
            "message" => "Stock item updated successfully."
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Failed to update item: " . $e->getMessage()]);
    }
}

/**
 * DELETE: Remove a stock item
 */
function handleDeleteStock($pdo) {
    $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
    $itemCode = $_GET['item_code'] ?? '';

    if ($id <= 0 && empty($itemCode)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Item ID or Item Code is required to delete."]);
        return;
    }

    try {
        if ($id > 0) {
            $stmt = $pdo->prepare("DELETE FROM stock_items WHERE id = ?");
            $stmt->execute([$id]);
        } else {
            $stmt = $pdo->prepare("DELETE FROM stock_items WHERE item_code = ?");
            $stmt->execute([$itemCode]);
        }

        echo json_encode([
            "success" => true,
            "message" => "Stock item deleted successfully."
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Failed to delete item: " . $e->getMessage()]);
    }
}
