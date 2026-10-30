-- TXCO Database Schema for Hostinger MySQL (phpMyAdmin)
-- Hostinger Character Set: utf8mb4 / utf8mb4_unicode_ci

-- Target Database in Hostinger: `u547609561_txco`
-- Select database `u547609561_txco` in phpMyAdmin and click Import!

-- 1. Users Table
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(120) NOT NULL,
  `email` VARCHAR(191) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `company` VARCHAR(150) DEFAULT NULL,
  `role` ENUM('customer', 'admin') DEFAULT 'customer',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Stock Inventory Table
CREATE TABLE IF NOT EXISTS `stock_items` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `item_code` VARCHAR(100) NOT NULL UNIQUE,
  `product` VARCHAR(255) NOT NULL,
  `category` VARCHAR(100) NOT NULL,
  `profile` VARCHAR(100) NOT NULL,
  `material` VARCHAR(100) NOT NULL,
  `pressure_class` VARCHAR(100) NOT NULL,
  `nps_size` VARCHAR(50) NOT NULL,
  `ring_number` VARCHAR(50) DEFAULT '-',
  `quantity` INT DEFAULT 0,
  `status` ENUM('In Stock', 'Ready to Ship', 'Lead Time (2-3 Days)') DEFAULT 'In Stock',
  `location` VARCHAR(100) DEFAULT 'Main Facility (Warehouse A)',
  `standard` VARCHAR(100) DEFAULT 'ASME B16.20 / API 6A',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Initial Seed: Default Admin User (Password: Admin@123)
INSERT INTO `users` (`name`, `email`, `password`, `company`, `role`)
VALUES (
  'TXCO Admin',
  'admin@txco.com',
  'Admin@123',
  'TXCO Sealing Products',
  'admin'
) ON DUPLICATE KEY UPDATE `password` = 'Admin@123';

-- 4. Initial Seed: 15 Core Stock Items
INSERT INTO `stock_items` (`item_code`, `product`, `category`, `profile`, `material`, `pressure_class`, `nps_size`, `ring_number`, `quantity`, `status`, `location`, `standard`)
VALUES
('TX-RTJ-R24-316', 'Style R Octagonal RTJ Gasket', 'Metallic Gaskets', 'Style R Octagonal RTJ', 'SS 316 / 316L', 'Class 1500', '2\"', 'R-24', 450, 'In Stock', 'Warehouse A - Bay 12', 'ASME B16.20 / API 6A'),
('TX-RTJ-RX35-INC', 'Style RX Pressure-Energized Gasket', 'Metallic Gaskets', 'Style RX Pressure-Energized', 'Inconel 625', 'Class 2500', '3\"', 'RX-35', 180, 'In Stock', 'Warehouse A - Bay 14', 'API Spec 6A'),
('TX-RTJ-BX155-S', 'Style BX Subsea RTJ Gasket', 'Metallic Gaskets', 'Style BX High-Pressure', 'Low Carbon Steel (S)', 'API 10,000 / 15,000 psi', '4\"', 'BX-155', 75, 'Ready to Ship', 'Warehouse B - Subsea Unit', 'API Spec 6A (15K)'),
('TX-SWG-CGI-300', 'Style CGI Spiral Wound Gasket with Rings', 'Semi-Metallic Gaskets', 'Style CGI Spiral Wound', 'SS 316 / 316L', 'Class 300', '4\"', '-', 820, 'In Stock', 'Warehouse A - Bay 04', 'ASME B16.20'),
('TX-SWG-CGI-600', 'Style CGI High Pressure SWG Gasket', 'Semi-Metallic Gaskets', 'Style CGI Spiral Wound', 'Inconel 625', 'Class 600', '6\"', '-', 340, 'In Stock', 'Warehouse A - Bay 05', 'ASME B16.20'),
('TX-KAM-SER-150', 'Kammprofile Serrated Metallic Gasket', 'Semi-Metallic Gaskets', 'Kammprofile Serrated', 'Soft Iron / Graphite', 'Class 150', '8\"', '-', 290, 'In Stock', 'Warehouse A - Bay 08', 'DIN EN 1514-6'),
('TX-MJG-PASS-600', 'Metal Jacketed Heat Exchanger Gasket', 'Semi-Metallic Gaskets', 'Metal Jacketed Pass Partition', 'SS 316 / 316L', 'Class 600', '12\"', '-', 65, 'Lead Time (2-3 Days)', 'Custom Fab Unit', 'ASME B16.20 Type 1'),
('TX-PTFE-EXP-150', 'Expanded PTFE Sheet Gasket Ring', 'Non-Metallic Gaskets', 'Expanded PTFE Gasket', 'Expanded PTFE (ePTFE)', 'Class 150', '3\"', '-', 540, 'In Stock', 'Cleanroom Storage Bay 2', 'FDA 21 CFR 177.1550'),
('TX-CNAF-IND-300', 'Compressed Non-Asbestos (CNAF) Sheet', 'Non-Metallic Gaskets', 'Compressed Non-Asbestos (CNAF)', 'Compressed Non-Asbestos (CNAF)', 'Class 300', '6\"', '-', 710, 'In Stock', 'Warehouse C - Sheet Bay', 'BS 7531 Grade X'),
('TX-SIG-EPDM-150', 'Steel-Reinforced EPDM Waterworks Gasket', 'Steel-Inserted Gaskets', 'Steel-Inserted Rubber Gasket', 'Steel-Reinforced EPDM', 'Class 150', '10\"', '-', 320, 'In Stock', 'Waterworks Bay 6', 'EN 681-1 / WRAS Approved'),
('TX-FLG-WN-600', 'Weld Neck Raised Face Flange (WN)', 'Flanges', 'Weld Neck Flange (WN)', 'Low Carbon Steel (S)', 'Class 600', '4\"', '-', 110, 'Ready to Ship', 'Heavy Yard Bay 3', 'ASME B16.5 ASTM A105'),
('TX-VLV-PACK-900', 'Die-Formed High-Purity Graphite Packing', 'Valve Components', 'Die-Formed Valve Packing Ring', 'High-Purity Graphite', 'Class 900', '2\"', '-', 890, 'In Stock', 'Valve Components Bay 1', 'API 622 / ISO 15848-1'),
('TX-ISO-FIK-G10', 'Type F Flange Isolation Kit (Grease-Resistant)', 'Commercial Products', 'Type F Flange Isolation Kit', 'G-10 Glass Epoxy', 'Class 1500', '4\"', '-', 95, 'In Stock', 'Isolation Systems Bay 4', 'NACE MR0175 / Shell Approved'),
('TX-RTJ-R37-316', 'Style R Oval / Octagonal RTJ Gasket', 'Metallic Gaskets', 'Style R Octagonal RTJ', 'SS 316 / 316L', 'Class 900', '3\"', 'R-37', 310, 'In Stock', 'Warehouse A - Bay 13', 'ASME B16.20'),
('TX-SWG-CG-150', 'Style CG Flexible Graphite Spiral Wound', 'Semi-Metallic Gaskets', 'Style CGI Spiral Wound', 'SS 316 / 316L', 'Class 150', '2\"', '-', 960, 'In Stock', 'Warehouse A - Bay 02', 'ASME B16.20')
ON DUPLICATE KEY UPDATE `item_code` = `item_code`;

-- ============================================================================
-- 5. Contact Page Enquiries Table
-- ============================================================================
CREATE TABLE IF NOT EXISTS `contact_enquiries` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `reference_id` VARCHAR(60) NOT NULL UNIQUE,
  `full_name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(191) NOT NULL,
  `phone` VARCHAR(50) DEFAULT NULL,
  `company` VARCHAR(150) DEFAULT NULL,
  `industry` VARCHAR(100) DEFAULT 'Oil & Gas',
  `inquiry_type` VARCHAR(100) DEFAULT 'Request for Quote (RFQ)',
  `message` TEXT NOT NULL,
  `attachment_name` VARCHAR(255) DEFAULT NULL,
  `status` ENUM('New', 'In Review', 'Quoted', 'Closed') DEFAULT 'New',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_contact_email` (`email`),
  INDEX `idx_contact_status` (`status`),
  INDEX `idx_contact_created` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- 6. Chatbot Enquiries Table (RFQs, Drawings, Vendor Registrations, Callbacks)
-- ============================================================================
CREATE TABLE IF NOT EXISTS `chatbot_enquiries` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `reference_id` VARCHAR(60) NOT NULL UNIQUE,
  `enquiry_type` VARCHAR(50) NOT NULL DEFAULT 'RFQ',
  `contact_name` VARCHAR(150) NOT NULL,
  `company_name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(191) NOT NULL,
  `phone` VARCHAR(50) DEFAULT NULL,
  `country` VARCHAR(100) DEFAULT 'India',
  `city` VARCHAR(100) DEFAULT NULL,
  `product_category` VARCHAR(150) DEFAULT NULL,
  `description` TEXT DEFAULT NULL,
  `standard` VARCHAR(100) DEFAULT NULL,
  `dimensions` VARCHAR(100) DEFAULT NULL,
  `material` VARCHAR(100) DEFAULT NULL,
  `pressure` VARCHAR(100) DEFAULT NULL,
  `quantity` VARCHAR(100) DEFAULT NULL,
  `delivery_date` VARCHAR(100) DEFAULT NULL,
  `notes` TEXT DEFAULT NULL,
  `file_name` VARCHAR(255) DEFAULT NULL,
  `file_size` VARCHAR(50) DEFAULT NULL,
  `vendor_category` VARCHAR(100) DEFAULT NULL,
  `customer_portal_ref` VARCHAR(100) DEFAULT NULL,
  `status` ENUM('New', 'In Review', 'Quoted', 'Closed') DEFAULT 'New',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_chatbot_ref` (`reference_id`),
  INDEX `idx_chatbot_email` (`email`),
  INDEX `idx_chatbot_type` (`enquiry_type`),
  INDEX `idx_chatbot_status` (`status`),
  INDEX `idx_chatbot_created` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

