export const utilityNavLinks = [
  { name: 'Home', href: '/' },
  { name: 'Contact', href: '/contact' },
  { name: 'Catalogues', href: '/catalogues' },
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
      {
        name: 'GASKETS',
        href: '/products/gaskets',
        children: [
          {
            name: 'Metallic Gaskets',
            href: '/products/gaskets/metallic-gaskets',
            children: [
              { name: 'Ring Type Joint (RTJ)', href: '/products/gaskets/metallic-gaskets/details?product=ring-type-joint-rtj' },
              { name: 'Rubber-Coated RTJ', href: '/products/gaskets/metallic-gaskets/details?product=rubber-coated-rtj' },
              { name: 'PTFE-Insert RTJ', href: '/products/gaskets/metallic-gaskets/details?product=ptfe-insert-rtj' },
              { name: 'Protective-Coated RTJ', href: '/products/gaskets/metallic-gaskets/details?product=protective-coated-rtj' },
              { name: 'Bonnet Rings', href: '/products/gaskets/metallic-gaskets/details?product=bonnet-rings' },
              { name: 'Lens Rings', href: '/products/gaskets/metallic-gaskets/details?product=lens-rings' },
              { name: 'Blind Gaskets', href: '/products/gaskets/metallic-gaskets/details?product=blind-gaskets' },
              { name: 'VX–AX Gaskets', href: '/products/gaskets/metallic-gaskets/details?product=vx-ax-gaskets' },
              { name: 'IX Gaskets', href: '/products/gaskets/metallic-gaskets/details?product=ix-gaskets' },
              { name: 'Delta Gaskets', href: '/products/gaskets/metallic-gaskets/details?product=delta-gaskets' },
              { name: 'Bridge Gaskets', href: '/products/gaskets/metallic-gaskets/details?product=bridge-gaskets' },
              { name: 'Spectacle Blind Gaskets', href: '/products/gaskets/metallic-gaskets/details?product=spectacle-blind-gaskets' },
              { name: 'Transition RTJ', href: '/products/gaskets/metallic-gaskets/details?product=transition-rtj' },
              { name: 'Soft-Material-Seated RTJ', href: '/products/gaskets/metallic-gaskets/details?product=soft-material-seated-rtj' },
              { name: 'Weld-Lip Seals', href: '/products/gaskets/metallic-gaskets/details?product=weld-lip-seals' },
            ],
          },
          {
            name: 'Semi-Metallic Gaskets',
            href: '/products/gaskets/semi-metallic-gaskets',
            children: [
              { name: 'Spiral Wound Gaskets', href: '/products/gaskets/semi-metallic-gaskets?product=spiral-wound-gaskets' },
              { name: 'Kammprofile Gaskets', href: '/products/gaskets/semi-metallic-gaskets?product=kammprofile-gaskets' },
              { name: 'Metal Jacketed Gaskets', href: '/products/gaskets/semi-metallic-gaskets?product=metal-jacketed-gaskets' },
            ],
          },
          {
            name: 'Non-Metallic Gaskets',
            href: '/products/gaskets/non-metallic-gaskets',
            children: [
              { name: 'Rubber Gaskets', href: '/products/gaskets/non-metallic-gaskets?product=rubber-gaskets' },
              { name: 'PTFE Gaskets', href: '/products/gaskets/non-metallic-gaskets?product=ptfe-gaskets' },
              { name: 'ePTFE Gaskets', href: '/products/gaskets/non-metallic-gaskets?product=eptfe-gaskets' },
              { name: 'Non-Asbestos Gaskets', href: '/products/gaskets/non-metallic-gaskets?product=non-asbestos-gaskets' },
              { name: 'Asbestos-Free Gaskets', href: '/products/gaskets/non-metallic-gaskets?product=asbestos-free-gaskets' },
            ],
          },
          {
            name: 'Steel-Inserted Gaskets',
            href: '/products/gaskets/steel-inserted-gaskets',
            children: [
              { name: 'Rubber-Inserted', href: '/products/gaskets/steel-inserted-gaskets?product=rubber-inserted' },
              { name: 'Graphite-Inserted', href: '/products/gaskets/steel-inserted-gaskets?product=graphite-inserted' },
            ],
          },
        ],
      },
      {
        name: 'FLANGES',
        href: '/products/flanges',
        children: [
          { name: 'Weld Neck Flanges', href: '/products/flanges' },
          { name: 'Slip-On Flanges', href: '/products/flanges' },
          { name: 'Blind Flanges', href: '/products/flanges' },
          { name: 'Socket Weld Flanges', href: '/products/flanges' },
          { name: 'Lap Joint Flanges', href: '/products/flanges' },
          { name: 'Threaded / Screwed Flanges', href: '/products/flanges' },
          { name: 'Orifice Flanges', href: '/products/flanges' },
          { name: 'Custom Flanges', href: '/products/flanges' },
        ],
      },
      {
        name: 'VALVE COMPONENTS',
        href: '/products/valve-components',
        children: [
          { name: 'Valve Components', href: '/products/valve-components' },
          { name: 'Valve Packing', href: '/products/valve-components' },
          { name: 'Valve Gaskets', href: '/products/valve-components' },
          { name: 'Sealing Components', href: '/products/valve-components' },
        ],
      },
      {
        name: 'COMMERCIAL PRODUCTS',
        href: '/products/commercial-products',
        children: [
          { name: 'Commercial Products', href: '/products/commercial-products' },
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
      { name: 'Gaskets', href: '/products/gaskets-kits-seals' },
      { name: 'Metallic Gaskets', href: '/products/ring-type-joint' },
      { name: 'Semi-Metallic Gaskets', href: '/products/gaskets-kits-seals' },
      { name: 'Non-Metallic Gaskets', href: '/products/specialized-solutions' },
      { name: 'Flanges', href: '/products/flanges' },
      { name: 'Valve Components', href: '/products/valve-components' },
      { name: 'Commercial Products', href: '/products/commercial-products' },
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

];
