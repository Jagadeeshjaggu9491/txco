/**
 * Comprehensive Catalogues and Technical Brochures Data
 */

export const DEFAULT_CATALOGUE_PDF = '/images/catalogues/TXCO-Global-Corporate-Presentation.pdf';

export const catalogueCategories = [
  'All Catalogues',
  'Metallic Gaskets',
  'Semi-Metallic Gaskets',
  'Non-Metallic Gaskets',
  'Flanges & Bolting',
  'Valve Components',
];

export const cataloguesList = [
  {
    id: 'metallic-gaskets-catalogue',
    title: 'Metallic Gaskets & Ring Type Joints (RTJ) Master Catalogue',
    category: 'Metallic Gaskets',
    fileSize: '1.8 MB',
    pages: '24 Pages',
    standards: 'API 6A • API 17D • ASME B16.20',
    edition: '2026 Engineering Edition',
    description:
      'Complete dimension tables, groove details, tolerances, material hardness limits, and pressure-temperature ratings for Style R, RX, BX, Weld-Lip, Lens, and Delta gaskets.',
    image: '/images/resources/trusted-partner-red.png',
    pdfUrl: DEFAULT_CATALOGUE_PDF,
    featured: true,
  },
  {
    id: 'spiral-wound-catalogue',
    title: 'Spiral Wound Gaskets Technical Guide & Sizing Charts',
    category: 'Semi-Metallic Gaskets',
    fileSize: '1.8 MB',
    pages: '24 Pages',
    standards: 'ASME B16.20 • EN 1514-2',
    edition: 'Rev 5.1 Technical Manual',
    description:
      'Comprehensive guide to Style R, RIR, CG, and CGI spiral wound gaskets with graphite, PTFE, and mica fillers for Class 150 through 2500 piping.',
    image: '/images/resources/trusted-partner-blue.png',
    pdfUrl: DEFAULT_CATALOGUE_PDF,
    featured: true,
  },
  {
    id: 'kammprofile-jacketed-catalogue',
    title: 'Kammprofile & Heat Exchanger Jacketed Gaskets Manual',
    category: 'Semi-Metallic Gaskets',
    fileSize: '1.8 MB',
    pages: '24 Pages',
    standards: 'DIN 2697 • EN 1514-6',
    edition: '2026 Product Edition',
    description:
      'Engineered serrated metallic core configurations, pass-partition ribs, facing materials, and seating stress requirements for refining heat exchangers.',
    image: '/images/resources/trusted-partner-red.png',
    pdfUrl: DEFAULT_CATALOGUE_PDF,
    featured: false,
  },
  {
    id: 'non-metallic-sheet-catalogue',
    title: 'Non-Metallic Sheet, PTFE & Elastomeric Gasket Catalog',
    category: 'Non-Metallic Gaskets',
    fileSize: '1.8 MB',
    pages: '24 Pages',
    standards: 'ASME B16.21 • EN 1514-1',
    edition: '2026 Industrial Series',
    description:
      'Chemical resistance compatibility charts, maximum torque values, and physical properties for CNAF, expanded PTFE, and vulcanized rubber gaskets.',
    image: '/images/resources/trusted-partner-blue.png',
    pdfUrl: DEFAULT_CATALOGUE_PDF,
    featured: false,
  },
  {
    id: 'flanges-piping-catalogue',
    title: 'Industrial Forged Flanges & Connection Components',
    category: 'Flanges & Bolting',
    fileSize: '1.8 MB',
    pages: '24 Pages',
    standards: 'ASME B16.5 • ASME B16.47 • API 6B',
    edition: '2026 Forgings Edition',
    description:
      'Weld Neck, Slip-On, Blind, Socket Weld, Lap Joint, and Orifice flanges specifications, facing dimensions, and ASTM carbon, alloy, and stainless grades.',
    image: '/images/resources/trusted-partner-red.png',
    pdfUrl: DEFAULT_CATALOGUE_PDF,
    featured: true,
  },
  {
    id: 'valve-trims-packing-catalogue',
    title: 'Valve Sealing, Packings & Precision Trim Components',
    category: 'Valve Components',
    fileSize: '1.8 MB',
    pages: '24 Pages',
    standards: 'API 622 • API 624 • ISO 15848-1',
    edition: 'Low-Emission Series',
    description:
      'Low-fugitive emission die-formed graphite rings, live-loaded gland packing sets, pressure seal gaskets, and CNC-machined valve internals.',
    image: '/images/resources/trusted-partner-blue.png',
    pdfUrl: DEFAULT_CATALOGUE_PDF,
    featured: false,
  },
  {
    id: 'subsea-specialty-seals-catalogue',
    title: 'Subsea & Offshore Extreme Pressure Sealing Solutions',
    category: 'Metallic Gaskets',
    fileSize: '1.8 MB',
    pages: '24 Pages',
    standards: 'API 17D • NORSOK L-005',
    edition: 'Deepwater Edition',
    description:
      'API Style BX subsea gaskets with pressure balance holes, IX compact seals for NORSOK flanges, and corrosion-resistant Inconel/Duplex cladding.',
    image: '/images/resources/trusted-partner-red.png',
    pdfUrl: DEFAULT_CATALOGUE_PDF,
    featured: false,
  },
  {
    id: 'bolting-hardware-catalogue',
    title: 'ASTM Heavy Hex Stud Bolts, Nuts & Fastener Catalog',
    category: 'Flanges & Bolting',
    fileSize: '1.8 MB',
    pages: '24 Pages',
    standards: 'ASTM A193 / A194 / A320',
    edition: 'Fasteners Series',
    description:
      'High-tensile Grade B7, B16, B8/B8M stud bolts, 2H heavy hex nuts, thread pitch data, torque tables, and anti-corrosion Xylan coatings.',
    image: '/images/resources/trusted-partner-blue.png',
    pdfUrl: DEFAULT_CATALOGUE_PDF,
    featured: false,
  },
];
