const fs = require('fs');
const path = require('path');

// Extract all categories from productsDetailCatalog.js
const catalogFilePath = path.join(__dirname, '../src/data/productsDetailCatalog.js');
let catalogContent = fs.readFileSync(catalogFilePath, 'utf8');

// Strip out export keywords to evaluate as JS object
catalogContent = catalogContent.replace(/export const subcategoryDetailCatalog\s*=\s*/, 'global.catalog = ');
eval(catalogContent);

const catalogData = global.catalog;

// PDF Pages 1-3 Overview Ranges for verification
const pdfOverviewRanges = [
  {
    category: '1. Metallic Gaskets',
    pdfPage: 'Page 1',
    description: 'Precision CNC-machined solid metal and specialty profile gaskets for high-pressure API 6A/17D and ASME flanges.',
    items: [
      { no: 1, product: 'Ring Type Joint (RTJ) Gaskets', types: 'R – Oval, R – Octagonal, RX, BX, SBX, SRX' },
      { no: 2, product: 'Rubber-Coated RTJ Gaskets', types: 'Soft Iron / Low Carbon Steel with Nitrile (NBR) Coating' },
      { no: 3, product: 'PTFE-Insert RTJ Gaskets', types: 'PTFE-Inserts for R & RX Profiles with Radial Pressure Holes' },
      { no: 4, product: 'Protective-Coated RTJ Gaskets', types: 'Zinc, Nickel, Silver Electroplated & Fluoropolymer Plated' },
      { no: 5, product: 'Bonnet Rings', types: 'Oval, Octagonal, Flat & Triangular Pressure Seals' },
      { no: 6, product: 'Lens Rings', types: 'DIN 2696 Spherical Convex-to-Concave High Pressure Seals' },
      { no: 7, product: 'Blind Gaskets', types: 'Solid Metallic Blanks & Paddle Spades (ASME B16.48)' },
      { no: 8, product: 'VX–AX Gaskets', types: 'VX Pressure-Energized, AX Insulated (API 16A / 17D)' },
      { no: 9, product: 'IX Gaskets', types: 'IX 15 to IX 1200 (NORSOK L-005) with PTFE/XYLAN/Silver' },
      { no: 10, product: 'Delta Gaskets', types: 'API 17D Subsea Pressure-Energized Delta Profile' },
      { no: 11, product: 'Bridgeman Gaskets', types: 'Unsupported Area High-Pressure Autoclave Closures' },
      { no: 12, product: 'Spectacle Blind Gaskets', types: 'Figure-8 Blinds, Paddle Blanks & Spacers (ASME B16.48)' },
      { no: 13, product: 'Transition RTJ Gaskets', types: 'Combination Rings with Dual Pitch / Groove Profiles' },
      { no: 14, product: 'Soft-Material-Serrated RTJ Gaskets', types: 'Serrated Metal Core with Graphite / PTFE Facing' },
      { no: 15, product: 'Weld-Lip Seals', types: 'Membrane (DIN 2695), Profiled Lip, Hollow-Lip Seals' }
    ]
  },
  {
    category: '2. Semi-Metallic Gaskets',
    pdfPage: 'Page 2',
    description: 'Composite sealing elements combining metal mechanical strength with compressible soft filler materials.',
    items: [
      { no: 1, product: 'Spiral Wound Gaskets', types: 'Style R, Style RIR, Style CG, Style CGI, Style CGI with Bolt Holes Full-Face' },
      { no: 2, product: 'Kammprofile Gaskets', types: 'Type Z, Type ZA, Type ZI' },
      { no: 3, product: 'Metal Jacketed Gaskets', types: 'Corrugated Metal Jacketed, Flat Metal Jacketed, Double Jacketed, Heat Exchanger' },
      { no: 4, product: 'Flange Isolation Kits', types: 'TX-ISOPRO™, TX-CERAMPRO™, TX Type D, TX TYPE -N' }
    ]
  },
  {
    category: '3. Non-Metallic Gaskets',
    pdfPage: 'Page 2',
    description: 'Elastomeric, fluoropolymer, and CNAF compressed sheets designed for universal chemical resistance and utility service.',
    items: [
      { no: 1, product: 'Rubber Gaskets', types: 'Neoprene, Nitrile (NBR), EPDM, Silicone, Viton® (FKM), Natural Rubber, SBR, Butyl' },
      { no: 2, product: 'PTFE Gaskets', types: 'Virgin PTFE, Expanded PTFE, Modified PTFE, Filled PTFE, PTFE Envelope, PTFE Ring, PTFE Full-Face, PTFE Envelope with Insert' },
      { no: 3, product: 'ePTFE Gaskets', types: 'Expanded PTFE – Sheet, Joint Sealant, Cut Gaskets, Custom Profiles' },
      { no: 4, product: 'Asbestos free Gaskets', types: 'TXCO AF-110, TXCO AF-120, TXCO AF-139, TXCO AF-154, TXCO AF-155 GF, TXCO AF-159, TXCO AF-160, TXCO AF-170, TXCO AF-190' },
      { no: 5, product: 'Compressed Non Asbestos', types: 'TXCO Style 11, TXCO Style 20, TXCO Style 39, TXCO Style 51, TXCO Style 54, TXCO Style 55, TXCO Style 59 Oil, TXCO Style 60 Acid' }
    ]
  },
  {
    category: '4. Steel-Inserted Gaskets',
    pdfPage: 'Page 3',
    description: 'Reinforced composite gaskets containing internal metallic cores for enhanced blowout resistance and stiffness.',
    items: [
      { no: 1, product: 'Steel-Inserted Gaskets', types: 'Rubber, Graphite' }
    ]
  },
  {
    category: '5. Plug Gaskets',
    pdfPage: 'Page 3',
    description: 'Specialized metallic and non-metallic sealing elements engineered to seal industrial equipment and piping plugs.',
    items: [
      { no: 1, product: 'Equipment Plug Gaskets', types: 'Metallic and Non-Metallic Sealing Elements' }
    ]
  },
  {
    category: '6. Flanges',
    pdfPage: 'Page 3',
    description: 'Forged and precision-machined connection flanges for all standard piping classes.',
    items: [
      { no: 1, product: 'Weld Neck Flanges', types: 'Class 150 to 2500, Standard & Custom Hubs' },
      { no: 2, product: 'Slip-On Flanges', types: 'Class 150 to 1500, Plain & Raised Face' },
      { no: 3, product: 'Blind Flanges', types: 'Class 150 to 2500, Solid Forged Closures' },
      { no: 4, product: 'Socket Weld Flanges', types: 'High Pressure Small Bore Piping' },
      { no: 5, product: 'Lap Joint Flanges', types: 'For use with Stub End Pipe Fittings' },
      { no: 6, product: 'Threaded (Screwed) Flanges', types: 'NPT, BSPT Threaded Flanged Connections' },
      { no: 7, product: 'Orifice Flanges', types: 'With Tapped Pressure Differential Metering Ports' },
      { no: 8, product: 'Custom Flanges', types: 'Manufactured as per customer drawings, specifications and application requirements' }
    ]
  },
  {
    category: '7. Monolithic Insulation Joints',
    pdfPage: 'Page 3',
    description: 'Solid-state, fully welded structural forgings for permanent Cathodic Protection (CP) isolation in buried and aboveground pipelines.',
    items: [
      { no: 1, product: 'Monolithic Insulation Joints', types: 'Fully Welded Boltless CP Isolating Joints (NPS 1/2" to 60", Class 150 to 2500)' }
    ]
  },
  {
    category: '8. Valve Components',
    pdfPage: 'Page 3',
    description: 'Engineered valve trims, compression packings, bonnet gaskets, and high-integrity sealing components for flow control.',
    items: [
      { no: 1, product: 'Valve Sealing Trims', types: 'Precision O-Rings, Low-Emission Gland Packing, Valve Seats & Inserts' }
    ]
  },
  {
    category: '9. Commercial Products',
    pdfPage: 'Page 3',
    description: 'Complete commercial supply range including ASTM heavy hex stud bolts, nuts, flange protectors, and pipeline consumables.',
    items: [
      { no: 1, product: 'Commercial Supply & Hardware', types: 'Industrial Bolting, Heavy Hex Studs, Nuts & Pipeline Hardware' }
    ]
  }
];

// Build Complete Standalone HTML file
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TXCO Product Catalog Reference & Architecture (PDF Master Spec)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
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
      flex-wrap: wrap;
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
    .view-mode-tabs {
      display: flex;
      background: #f1f5f9;
      padding: 0.25rem;
      border-radius: 8px;
      gap: 0.3rem;
    }
    .view-mode-btn {
      padding: 0.45rem 0.9rem;
      font-size: 0.82rem;
      font-weight: 600;
      border-radius: 6px;
      border: none;
      background: none;
      cursor: pointer;
      color: #475569;
      transition: all 0.2s;
    }
    .view-mode-btn.active {
      background: #ffffff;
      color: var(--primary-navy);
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      font-weight: 700;
    }
    .search-box {
      flex-grow: 1;
      max-width: 380px;
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
      gap: 2.2rem;
      align-items: start;
    }

    /* Sidebar Navigation */
    .sidebar {
      background: #ffffff;
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 1.2rem;
      position: sticky;
      top: 135px;
      max-height: calc(100vh - 160px);
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
      gap: 1.25rem 1.4rem;
      margin: 0.6rem 0 1rem 0;
    }
    .point-card {
      background: #ffffff;
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 1.5rem 1.75rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
      transition: all 0.2s ease;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
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

    /* PDF Master Matrix View */
    .matrix-section {
      background: #ffffff;
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 1.8rem;
      margin-bottom: 2rem;
      box-shadow: 0 1px 4px rgba(0,0,0,0.02);
    }
    .matrix-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      padding-bottom: 0.8rem;
      border-bottom: 1px solid var(--border-color);
    }
    .matrix-title {
      font-size: 1.3rem;
      font-weight: 800;
      color: var(--primary-navy);
      text-transform: uppercase;
    }
    .matrix-page-tag {
      background: #E8F5E9;
      color: #1B5E20;
      padding: 0.3rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 700;
    }
    .matrix-desc {
      font-size: 0.92rem;
      color: var(--text-muted);
      margin-bottom: 1.2rem;
    }

    /* Breadcrumbs */
    .content-breadcrumbs {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.82rem;
      font-weight: 700;
      color: #262846;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 1.2rem;
    }

    @media (max-width: 960px) {
      .app-layout { grid-template-columns: 1fr; }
      .sidebar { position: static; max-height: none; }
      .points-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

  <!-- Top Header -->
  <header class="top-header">
    <div class="header-inner">
      <a href="/pdf-catalog-reference.html" class="brand-title">
        <span style="font-size: 1.3rem; font-weight: 800; color: #052C58; letter-spacing: 0.04em;">TXCO SEALING</span>
        <span class="brand-badge">PDF Master Spec Reference</span>
      </a>

      <div class="view-mode-tabs">
        <button class="view-mode-btn active" id="btnDetailedView" onclick="setViewMode('detailed')">📖 Detailed Product View</button>
        <button class="view-mode-btn" id="btnMatrixView" onclick="setViewMode('matrix')">📑 PDF Product Range & Types (Pages 1–3)</button>
      </div>

      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input type="text" id="globalSearch" class="search-input" placeholder="Filter products or search specifications..." oninput="handleSearch(this.value)">
      </div>
    </div>

    <!-- Category Tabs -->
    <div class="cat-nav-bar" id="catNavBar">
      <div class="cat-nav-inner" id="categoryTabs">
        <!-- Rendered by JS -->
      </div>
    </div>
  </header>

  <!-- App Layout -->
  <main class="app-layout">
    <!-- Left Sticky Sidebar -->
    <aside class="sidebar" id="sidebarContainer">
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
    const CATALOG_DATA = ${JSON.stringify(catalogData)};
    const PDF_OVERVIEW = ${JSON.stringify(pdfOverviewRanges)};

    let currentCategoryKey = 'metallic-gaskets';
    let currentProductId = '';
    let currentViewMode = 'detailed'; // 'detailed' | 'matrix'

    // Point splitting helper
    function splitPointItem(item) {
      if (typeof item !== 'string') return { title: '', desc: item };
      const text = item.trim();

      const colonIdx = text.indexOf(':');
      if (colonIdx > 0 && colonIdx <= 65) {
        return {
          title: text.substring(0, colonIdx).trim(),
          desc: text.substring(colonIdx + 1).trim(),
        };
      }

      const dashMatch = text.match(/^([^\\n—–]{3,55})\\s+[—–]\\s+(.*)$/);
      if (dashMatch) {
        return {
          title: dashMatch[1].trim(),
          desc: dashMatch[2].trim(),
        };
      }

      const keywords = [
        ' designed for ', ' consist of ', ' consists of ', ' engineered for ',
        ' suitable for ', ' provides ', ' commonly used in ', ' commonly used ',
        ' manufactured from ', ' features '
      ];

      for (const kw of keywords) {
        const kwIdx = text.indexOf(kw);
        if (kwIdx >= 15 && kwIdx <= 65) {
          const isActionVerb = kw.includes('designed') || kw.includes('engineered') || kw.includes('manufactured');
          if (isActionVerb) {
            return {
              title: text.substring(0, kwIdx).trim(),
              desc: (text.substring(kwIdx + 1).charAt(0).toUpperCase() + text.substring(kwIdx + 2)).trim(),
            };
          } else {
            return {
              title: (text.substring(0, kwIdx) + kw).trim(),
              desc: text.substring(kwIdx + kw.length).trim(),
            };
          }
        }
      }

      const commaIdx = text.indexOf(',');
      if (commaIdx >= 18 && commaIdx <= 55) {
        return {
          title: text.substring(0, commaIdx).trim(),
          desc: text.substring(commaIdx + 1).trim(),
        };
      }

      if (text.length <= 55) {
        return { title: text, desc: '' };
      }

      const words = text.split(' ');
      if (words.length > 6) {
        return {
          title: words.slice(0, 5).join(' '),
          desc: words.slice(5).join(' '),
        };
      }

      return { title: text, desc: '' };
    }

    function init() {
      renderCategoryTabs();
      selectCategory('metallic-gaskets');
    }

    function setViewMode(mode) {
      currentViewMode = mode;
      document.getElementById('btnDetailedView').classList.toggle('active', mode === 'detailed');
      document.getElementById('btnMatrixView').classList.toggle('active', mode === 'matrix');
      document.getElementById('sidebarContainer').style.display = mode === 'detailed' ? 'block' : 'none';
      document.querySelector('.app-layout').style.gridTemplateColumns = mode === 'detailed' ? '310px minmax(0, 1fr)' : '1fr';

      if (mode === 'detailed') {
        renderProductContent();
      } else {
        renderMatrixView();
      }
    }

    function renderCategoryTabs() {
      const tabsContainer = document.getElementById('categoryTabs');
      const catKeys = Object.keys(CATALOG_DATA);

      tabsContainer.innerHTML = catKeys.map(key => {
        const cat = CATALOG_DATA[key];
        const isActive = key === currentCategoryKey;
        return \`<button class="cat-tab \${isActive ? 'active' : ''}" onclick="selectCategory('\${key}')">\${cat.subcategoryTitle}</button>\`;
      }).join('');
    }

    function selectCategory(key) {
      currentCategoryKey = key;
      renderCategoryTabs();

      const cat = CATALOG_DATA[key];
      const navList = document.getElementById('productsListNav');
      const sidebarTitle = document.getElementById('sidebarTitle');

      sidebarTitle.textContent = cat.subcategoryTitle;

      if (cat.productsList && cat.productsList.length > 0) {
        currentProductId = cat.productsList[0].id;
        navList.innerHTML = cat.productsList.map(p => {
          const isActive = p.id === currentProductId;
          return \`
            <li>
              <button class="product-nav-btn \${isActive ? 'active' : ''}" onclick="selectProduct('\${p.id}')">
                <span>\${p.title}</span>
              </button>
            </li>
          \`;
        }).join('');
      }

      if (currentViewMode === 'detailed') {
        renderProductContent();
      } else {
        renderMatrixView();
      }
    }

    function selectProduct(id) {
      currentProductId = id;
      const cat = CATALOG_DATA[currentCategoryKey];
      const navList = document.getElementById('productsListNav');

      navList.innerHTML = cat.productsList.map(p => {
        const isActive = p.id === currentProductId;
        return \`
          <li>
            <button class="product-nav-btn \${isActive ? 'active' : ''}" onclick="selectProduct('\${p.id}')">
              <span>\${p.title}</span>
            </button>
          </li>
        \`;
      }).join('');

      renderProductContent();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function renderProductContent() {
      const cat = CATALOG_DATA[currentCategoryKey];
      const product = cat.productDetails[currentProductId] || Object.values(cat.productDetails)[0];
      const main = document.getElementById('mainContent');

      if (!product) {
        main.innerHTML = '<p>No details found.</p>';
        return;
      }

      let html = '';

      // Breadcrumbs
      html += \`
        <div class="content-breadcrumbs">
          <span>\${cat.parentCategoryTitle || 'PRODUCTS'}</span>
          <span>/</span>
          <span>\${cat.subcategoryTitle}</span>
          <span>/</span>
          <span style="color: var(--accent-green);">\${product.title}</span>
        </div>
      \`;

      // Hero Banner
      const bgImg = product.bannerImage || '/images/product-detials-images/product-details-page-banner.avif';
      html += \`
        <div class="hero-banner" style="background-image: url('\${bgImg}');">
          <h1 class="hero-title">\${product.title}</h1>
        </div>
      \`;

      // Sections
      if (product.sections && product.sections.length > 0) {
        product.sections.forEach(sec => {
          html += \`<div class="section-block">\`;

          // Header
          if (sec.heading) {
            html += \`
              <div class="section-header">
                <h2 class="section-title">\${sec.heading}</h2>
              </div>
            \`;
          }

          // Paragraphs
          if (sec.paragraphs) {
            sec.paragraphs.forEach(p => {
              html += \`<p class="section-p">\${p}</p>\`;
            });
          }

          // Bullets / Points Grid
          if (sec.bullets && sec.bullets.length > 0) {
            if (sec.bulletsIntro) {
              html += \`<p style="font-weight: 600; color: #1e293b;">\${sec.bulletsIntro}</p>\`;
            }
            html += \`<div class="points-grid">\`;
            sec.bullets.forEach(b => {
              const { title, desc } = splitPointItem(b);
              html += \`
                <div class="point-card">
                  \${title ? \`<h5 class="point-title">\${title}</h5>\` : ''}
                  \${desc ? \`<p class="point-desc">\${desc}</p>\` : ''}
                </div>
              \`;
            });
            html += \`</div>\`;
          }

          // Table
          if (sec.table) {
            html += \`
              <div class="table-container">
                <table class="data-table">
                  <thead>
                    <tr>
                      \${sec.table.headers.map(th => \`<th>\${th}</th>\`).join('')}
                    </tr>
                  </thead>
                  <tbody>
                    \${sec.table.rows.map(row => {
                      if (Array.isArray(row.cells)) {
                        return \`<tr>\${row.cells.map((cell, idx) => \`<td class="\${idx === 0 ? 'table-first-col' : ''}">\${cell}</td>\`).join('')}</tr>\`;
                      }
                      return \`
                        <tr>
                          <td>\${row.code || '—'}</td>
                          \${row.description !== undefined ? \`<td>\${row.description}</td>\` : ''}
                          \${row.thickness !== undefined ? \`<td>\${row.thickness}</td>\` : ''}
                          \${row.reweld !== undefined ? \`<td>\${row.reweld}</td>\` : ''}
                          \${row.radial !== undefined ? \`<td>\${row.radial}</td>\` : ''}
                        </tr>
                      \`;
                    }).join('')}
                  </tbody>
                </table>
              </div>
              \${sec.table.footnote ? \`<p class="table-footnote">\${sec.table.footnote}</p>\` : ''}
            \`;
          }

          html += \`</div>\`;
        });
      }

      main.innerHTML = html;
    }

    function renderMatrixView() {
      const main = document.getElementById('mainContent');
      let html = \`
        <div style="margin-bottom: 2rem;">
          <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 0.5rem;">
            PART I & II: TXCO Product Range & Types Architecture (PDF Master Reference)
          </h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">
            Complete verbatim product range, variants, and engineering specifications extracted directly from Pages 1 to 3 of the technical specification document.
          </p>
        </div>
      \`;

      PDF_OVERVIEW.forEach(cat => {
        html += \`
          <div class="matrix-section">
            <div class="matrix-header">
              <h3 class="matrix-title">\${cat.category}</h3>
              <span class="matrix-page-tag">PDF \${cat.pdfPage}</span>
            </div>
            <p class="matrix-desc">\${cat.description}</p>
            <div class="table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th style="width: 70px;">S. No.</th>
                    <th style="width: 320px;">Product Name</th>
                    <th>Types / Variants / Materials (Verbatim from PDF)</th>
                  </tr>
                </thead>
                <tbody>
                  \${cat.items.map(item => \`
                    <tr>
                      <td style="font-weight: 700; color: var(--text-muted);">\${item.no}</td>
                      <td style="font-weight: 700; color: var(--primary-navy);">\${item.product}</td>
                      <td><span style="background: #f1f5f9; padding: 0.3rem 0.6rem; border-radius: 6px; font-weight: 500; color: #334155;">\${item.types}</span></td>
                    </tr>
                  \`).join('')}
                </tbody>
              </table>
            </div>
          </div>
        \`;
      });

      main.innerHTML = html;
    }

    function handleSearch(query) {
      if (!query || query.trim() === '') {
        if (currentViewMode === 'detailed') renderProductContent();
        else renderMatrixView();
        return;
      }

      const q = query.toLowerCase().trim();
      const main = document.getElementById('mainContent');
      let resultsHtml = \`<div style="margin-bottom: 1.5rem;"><h2 style="font-size: 1.4rem; color: var(--primary-navy);">Search Results for "\${query}"</h2></div>\`;
      let matches = 0;

      Object.keys(CATALOG_DATA).forEach(catKey => {
        const cat = CATALOG_DATA[catKey];
        Object.keys(cat.productDetails).forEach(prodKey => {
          const prod = cat.productDetails[prodKey];
          const textToSearch = JSON.stringify(prod).toLowerCase();

          if (textToSearch.includes(q)) {
            matches++;
            resultsHtml += \`
              <div class="matrix-section" style="cursor: pointer;" onclick="currentCategoryKey='\${catKey}'; selectProduct('\${prodKey}'); setViewMode('detailed');">
                <div class="matrix-header">
                  <h3 class="matrix-title">\${prod.title}</h3>
                  <span class="matrix-page-tag">\${cat.subcategoryTitle}</span>
                </div>
                <p style="font-size: 0.88rem; color: #64748b;">Click to open full product specification sheet</p>
              </div>
            \`;
          }
        });
      });

      if (matches === 0) {
        resultsHtml += '<p style="color: var(--text-muted); padding: 2rem; text-align: center;">No matching products found.</p>';
      }

      main.innerHTML = resultsHtml;
    }

    // Launch
    window.addEventListener('DOMContentLoaded', init);
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, '../public/pdf-catalog-reference.html'), html);
console.log('Successfully generated public/pdf-catalog-reference.html');
