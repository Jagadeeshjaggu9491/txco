export const utilityNavLinks = [
  { name: 'Home', href: '/' },
  { name: 'Contact', href: '/contact' },
  { name: 'Downloads', href: '/downloads' },
];

export const mainNavigationMenu = {
  industries: {
    title: 'Industries',
    href: '/industries',
    items: [
      { name: 'All Industries', href: '/industries' },
      { name: 'Chemical', href: '/industries/chemical' },
      { name: 'Energy', href: '/industries/energy' },
      { name: 'Manufacturing', href: '/industries/manufacturing' },
      { name: 'Metals and Mining', href: '/industries/metals-mining' },
    ],
  },
  products: {
    title: 'Products',
    href: '/products',
    items: [
      { name: 'All Products', href: '/products' },
      {
        name: 'Gaskets, Kits, and Seals',
        href: '/products/gaskets-kits-seals',
        children: [
          { name: 'Metallic', href: '/products/gaskets/metallic' },
          { name: 'Semi-Metallic Gaskets', href: '/products/gaskets/semi-metallic' },
          { name: 'Non-Metallic', href: '/products/gaskets/non-metallic' },
          { name: 'Flange Isolation Gaskets and Kits', href: '/products/gaskets/flange-isolation' },
          { name: 'Blinds and Seals', href: '/products/gaskets/blinds-seals' },
        ],
      },
      {
        name: 'Hoses and Expansion Joints',
        href: '/products/hoses-expansion',
        children: [
          { name: 'Metallic Hoses', href: '/products/hoses/metallic' },
          { name: 'Expansion Joints', href: '/products/hoses/expansion' },
        ],
      },
      {
        name: 'Fasteners',
        href: '/products/fasteners',
        children: [
          { name: 'Heavy Hex Bolts', href: '/products/fasteners/hex-bolts' },
          { name: 'Stud Bolts & Nuts', href: '/products/fasteners/stud-bolts' },
        ],
      },
    ],
  },
  services: {
    title: 'Services',
    href: '/services',
    items: [
      { name: 'All Services', href: '/services' },
      { name: 'Reverse Engineering', href: '/services/reverse' },
      { name: 'Custom Gasket Engineering', href: '/services/engineering' },
      { name: 'Field Support', href: '/services/field-support' },
      { name: 'Training', href: '/services/training' },
    ],
  },
  resources: {
    title: 'Resources',
    href: '/resources',
    items: [
      { name: 'Blog', href: '/resources/blog' },
      { name: 'FAQs', href: '/resources/faqs' },
      { name: 'News', href: '/resources/news' },
      { name: 'Resource Library', href: '/resources/library' },
    ],
  },
  about: {
    title: 'About Us',
    href: '/about',
    items: [
      { name: 'Careers', href: '/about/careers' },
      { name: 'Company', href: '/about/company' },
      { name: 'History', href: '/about/history' },
      { name: 'Locations', href: '/about/locations' },
      { name: 'Sustainability', href: '/about/sustainability' },
    ],
  },
};

export const footerNavigationColumns = [
  {
    title: 'INDUSTRIES',
    links: [
      { name: 'All Industries', href: '/industries' },
      { name: 'Chemical', href: '/industries/chemical' },
      { name: 'Energy', href: '/industries/energy' },
      { name: 'Engineering, Procurement & Construction', href: '/industries/epc' },
      { name: 'Manufacturing', href: '/industries/manufacturing' },
      { name: 'Metals and Mining', href: '/industries/metals-mining' },
      { name: 'Transportation', href: '/industries/transportation' },
      { name: 'Water and Wastewater', href: '/industries/water' },
    ],
  },
  {
    title: 'PRODUCTS',
    links: [
      { name: 'All Products', href: '/products' },
      { name: 'Gaskets, Kits, and Seals', href: '/products/gaskets-kits-seals' },
      { name: 'Hoses and Expansion Joints', href: '/products/hoses-expansion' },
      { name: 'Fasteners', href: '/products/fasteners' },
    ],
  },
  {
    title: 'SERVICES',
    links: [
      { name: 'All Services', href: '/services' },
      { name: 'Reverse Engineering', href: '/services/reverse' },
      { name: 'Field Support', href: '/services/field-support' },
      { name: 'Gasket Recommendations', href: '/services/recommendations' },
      { name: 'Training', href: '/services/training' },
      { name: 'Value-Added Benefits', href: '/services/value' },
    ],
  },
  {
    title: 'RESOURCES',
    links: [
      { name: 'Blog', href: '/resources/blog' },
      { name: 'FAQs', href: '/resources/faqs' },
      { name: 'News', href: '/resources/news' },
      { name: 'Resource Library', href: '/resources/library' },
      { name: 'Industrial Turnaround (TAR)', href: '/resources/tar' },
      { name: 'Solutions', href: '/resources/solutions' },
    ],
  },
  {
    title: 'ABOUT US',
    links: [
      { name: 'Careers', href: '/about/careers' },
      { name: 'Company History', href: '/about/history' },
      { name: 'Innovation', href: '/about/innovation' },
      { name: 'TXCO Overview', href: '/about/overview' },
      { name: 'Locations', href: '/about/locations' },
      { name: 'Sustainability', href: '/about/sustainability' },
    ],
  },
  {
    title: 'CUSTOMER LOGIN',
    links: [
      { name: 'E Catalogs', href: '/login/catalogs' },
    ],
  },
];
