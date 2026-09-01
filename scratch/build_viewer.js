const fs = require('fs');
const path = require('path');

// Read productsDetailCatalog.js
const catalogFile = fs.readFileSync(path.join(__dirname, '../../src/data/productsDetailCatalog.js'), 'utf8');

// Also load all_pdf_text.txt if needed
const pdfTextPath = path.join(__dirname, 'all_pdf_text.txt');
const pdfText = fs.existsSync(pdfTextPath) ? fs.readFileSync(pdfTextPath, 'utf8') : '';

// Create a standalone HTML page with an embedded interactive viewer
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TXCO Product Catalog Reference & Architecture (PDF Master)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary-navy: #052C58;
      --dark-navy: #262846;
      --accent-green: #018F5D;
      --slate-blue: #114680;
      --bg-page: #f8fafc;
      --bg-card: #ffffff;
      --border-color: #e2e8f0;
      --text-main: #1e293b;
      --text-muted: #64748b;
      --font-base: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: var(--font-base);
      background-color: var(--bg-page);
      color: var(--text-main);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }
    
    /* Top Header */
    .top-header {
      background-color: #ffffff;
      border-bottom: 1px solid var(--border-color);
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 1px 4px rgba(0,0,0,0.03);
    }
    .header-inner {
      max-width: 1600px;
      margin: 0 auto;
      padding: 0.9rem 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1.5rem;
    }
    .brand-title {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      text-decoration: none;
    }
    .brand-logo {
      height: 38px;
      width: auto;
    }
    .brand-badge {
      background-color: #F5F5FF;
      color: #404377;
      padding: 0.3rem 0.65rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .search-box {
      flex-grow: 1;
      max-width: 420px;
      position: relative;
    }
    .search-input {
      width: 100%;
      padding: 0.6rem 1rem 0.6rem 2.4rem;
      border-radius: 20px;
      border: 1.5px solid var(--border-color);
      font-size: 0.88rem;
      background: #f1f5f9;
      outline: none;
      transition: all 0.2s;
    }
    .search-input:focus {
      background: #ffffff;
      border-color: var(--accent-green);
      box-shadow: 0 0 0 3px rgba(1, 143, 93, 0.12);
    }
    .search-icon {
      position: absolute;
      left: 0.85rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-muted);
      font-size: 0.9rem;
    }
    
    /* Category Navigation Bar */
    .cat-nav-bar {
      background: #ffffff;
      border-bottom: 1px solid var(--border-color);
      overflow-x: auto;
      white-space: nowrap;
      padding: 0 1.5rem;
    }
    .cat-nav-inner {
      max-width: 1600px;
      margin: 0 auto;
      display: flex;
      gap: 0.5rem;
    }
    .cat-tab {
      padding: 0.85rem 1.1rem;
      font-size: 0.88rem;
      font-weight: 600;
      color: var(--dark-navy);
      cursor: pointer;
      border-bottom: 3px solid transparent;
      transition: all 0.2s;
      background: none;
      border-top: none;
      border-left: none;
      border-right: none;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    }
    .cat-tab:hover {
      color: var(--accent-green);
    }
    .cat-tab.active {
      color: var(--primary-navy);
      border-bottom-color: var(--accent-green);
      font-weight: 700;
    }

    /* Main Container */
    .app-layout {
      max-width: 1600px;
      margin: 1.5rem auto;
      padding: 0 1.5rem;
      display: grid;
      grid-template-columns: 310px minmax(0, 1fr);
      gap: 2rem;
      align-items: start;
    }

    /* Sidebar Navigation */
    .sidebar {
      background: #ffffff;
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 1.2rem;
      position: sticky;
      top: 130px;
      max-height: calc(100vh - 150px);
      overflow-y: auto;
      box-shadow: 0 1px 3px rgba(0,0,0,0.02);
    }
    .sidebar-heading {
      font-size: 0.76rem;
      font-weight: 800;
      color: var(--text-muted);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 0.8rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid var(--border-color);
    }
    .product-nav-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }
    .product-nav-btn {
      width: 100%;
      text-align: left;
      padding: 0.65rem 0.85rem;
      border-radius: 6px;
      background: none;
      border: none;
      font-size: 0.86rem;
      font-weight: 600;
      color: #334155;
      cursor: pointer;
      transition: all 0.15s ease;
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 1.35;
    }
    .product-nav-btn:hover {
      background: #f1f5f9;
      color: var(--primary-navy);
    }
    .product-nav-btn.active {
      background: #f4f3fe;
      color: #404377;
      font-weight: 700;
      border-left: 3px solid var(--accent-green);
    }
    .product-nav-btn.active::after {
      content: '▶';
      font-size: 0.7rem;
      color: var(--accent-green);
    }

    /* Content Area */
    .content-area {
      min-width: 0;
    }
    
    /* Top Hero Banner */
    .hero-banner {
      width: 100%;
      min-height: 200px;
      border-radius: 16px;
      background-color: #232747;
      background-image: url('/images/product-detials-images/product-details-page-banner.avif');
      background-size: cover;
      background-position: center right;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      padding: 2.2rem 3rem;
      box-shadow: 0 6px 20px rgba(5, 44, 88, 0.06);
      margin-bottom: 2rem;
    }
    .hero-title {
      font-size: clamp(1.4rem, 2.3vw, 1.95rem);
      font-weight: 800;
      color: #ffffff;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      max-width: 65%;
      line-height: 1.25;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }

    /* Section Block */
    .section-block {
      margin-bottom: 2.2rem;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }
    .section-header {
      background-color: #F5F5FF;
      padding: 0.85rem 1.2rem;
      border-radius: 6px;
      border-left: 3px solid #404377;
    }
    .section-title {
      font-size: 0.98rem;
      font-weight: 800;
      color: #404377;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .section-p {
      font-size: 0.95rem;
      color: #334155;
      line-height: 1.7;
    }

    /* Point Cards Grid */
    .points-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.2rem;
      margin: 0.6rem 0 1rem 0;
    }
    .point-card {
      background: #ffffff;
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 1.4rem 1.6rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
      transition: all 0.2s ease;
      display: flex;
      flex-direction: column;
      gap: 0.45rem;
    }
    .point-card:hover {
      border-color: #cbd5e1;
      box-shadow: 0 6px 16px rgba(5, 44, 88, 0.06);
      transform: translateY(-2px);
    }
    .point-title {
      font-size: 20px;
      font-weight: 600;
      color: #262846;
      line-height: 1.35;
    }
    .point-desc {
      font-size: 1rem;
      color: #000000;
      line-height: 1.65;
    }

    /* Tables */
    .table-container {
      background: #ffffff;
      border: 1px solid var(--border-color);
      border-radius: 10px;
      overflow-x: auto;
      box-shadow: 0 1px 3px rgba(0,0,0,0.02);
      margin: 1rem 0;
    }
    .data-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.88rem;
    }
    .data-table thead tr {
      background: #f8fafc;
      border-bottom: 1px solid var(--border-color);
    }
    .data-table th {
      padding: 1rem 1.2rem;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #1e293b;
      text-align: left;
    }
    .data-table tbody tr {
      border-bottom: 1px solid #f1f5f9;
      transition: background 0.15s;
    }
    .data-table tbody tr:last-child {
      border-bottom: none;
    }
    .data-table tbody tr:hover {
      background: #f8fafc;
    }
    .data-table td {
      padding: 1rem 1.2rem;
      color: #334155;
      vertical-align: middle;
    }
    .data-table td:first-child {
      font-weight: 600;
      color: #1e293b;
    }
    .table-footnote {
      padding: 0.6rem 0.2rem;
      font-size: 0.8rem;
      color: var(--text-muted);
      font-style: italic;
    }

    /* PDF Master Summary Matrix Tab */
    .range-summary-card {
      background: #ffffff;
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
    }
    .range-summary-title {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--primary-navy);
      margin-bottom: 0.8rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    @media (max-width: 960px) {
      .app-layout { grid-template-columns: 1fr; }
      .sidebar { position: static; max-height: none; }
      .points-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

  <!-- Top Navigation Header -->
  <header class="top-header">
    <div class="header-inner">
      <a href="/" class="brand-title">
        <img src="/images/logo/logo.png" alt="TXCO" class="brand-logo" onerror="this.style.display='none'">
        <span style="font-size: 1.2rem; font-weight: 800; color: #052C58; letter-spacing: 0.04em;">TXCO SEALING</span>
        <span class="brand-badge">PDF Master Spec Reference</span>
      </a>

      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input type="text" id="globalSearch" class="search-input" placeholder="Search products, materials, UNS, standards...">
      </div>
    </div>

    <!-- Category Tabs -->
    <div class="cat-nav-bar">
      <div class="cat-nav-inner" id="categoryTabs">
        <!-- Rendered by JS -->
      </div>
    </div>
  </header>

  <!-- App Layout -->
  <main class="app-layout">
    <!-- Left Sticky Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-heading" id="sidebarTitle">Products List</div>
      <ul class="product-nav-list" id="productsListNav">
        <!-- Rendered by JS -->
      </ul>
    </aside>

    <!-- Main Content Area -->
    <section class="content-area" id="mainContent">
      <!-- Rendered by JS -->
    </section>
  </main>

  <script>
    // Embedded Catalog Data directly translated from PDF & subcategoryDetailCatalog
    window.CATALOG_DATA = \` + JSON.stringify(catalogFile) + \`;
  </script>
  <script src="/catalog-viewer-app.js"></script>
</body>
</html>\`;

fs.writeFileSync(path.join(__dirname, '../../public/pdf-catalog-reference.html'), htmlContent);
console.log('Successfully generated public/pdf-catalog-reference.html');
