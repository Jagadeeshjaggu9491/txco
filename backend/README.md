# TXCO Hostinger Deployment & Live Database Sync Guide

This directory contains the production-ready PHP backend for **TXCO**, pre-configured for your Hostinger database `u547609561_txco`.

---

## 📁 Backend Structure

```
backend/
├── .htaccess                 # CORS headers and HTTP OPTIONS preflight handler
├── config/
│   └── db.php                # PDO MySQL connection (pre-configured for u547609561_txco)
├── api/
│   ├── auth/
│   │   ├── register.php      # Customer account creation
│   │   ├── login.php         # 2-step credential validation endpoint
│   │   └── send_otp.php      # Email OTP sender via txco@iadesigns.in
│   └── admin/
│       ├── stock.php         # Live stock inventory CRUD (GET, POST, PUT, DELETE)
│       └── users.php         # Registered users list for Admin Dashboard
├── schema.sql                # Complete SQL table schema & initial 15 stock items
└── README.md
```

---

## 🚀 Quick Setup Instructions

### Step 1: Import Database into Hostinger phpMyAdmin
1. Log in to **Hostinger hPanel** (`hpanel.hostinger.com`).
2. Go to **Databases** > **MySQL Databases**.
3. Locate `u547609561_txco` and click **Enter phpMyAdmin**.
4. In phpMyAdmin, click on `u547609561_txco` in the left sidebar.
5. Click the **Import** tab at the top.
6. Choose `backend/schema.sql` from your computer and click **Import** (or **Go**).
7. Both tables (`users` and `stock_items`) and the initial 15 products will be created instantly.

### Step 2: Upload Backend to Hostinger
1. In Hostinger hPanel, go to **Files** > **File Manager**.
2. Open `public_html/`.
3. Upload the entire `backend/` folder into `public_html/`.
4. Your endpoints will be live at:
   - `https://iadesigns.in/backend/api/admin/stock.php`
   - `https://iadesigns.in/backend/api/admin/users.php`
   - `https://iadesigns.in/backend/api/auth/login.php`
   - `https://iadesigns.in/backend/api/auth/register.php`

### Step 3: Local Development Live SQL Fetching
Your local `.env.local` is already configured:
```env
NEXT_PUBLIC_API_URL=https://iadesigns.in/backend/api
```
Whenever you run `npm run dev` locally:
- Viewing `/stock-list` fetches real-time items from Hostinger MySQL.
- Adding, editing, or deleting items in `/admin/stock` updates Hostinger MySQL directly.
- Registering or logging in validates against Hostinger MySQL.
