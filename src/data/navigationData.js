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
  stockList: {
    title: 'Stock List',
    href: '/stock-list',
    items: [
      { name: 'All Stock Items', href: '/stock-list' },
      { name: 'Ring Joints (RTJ)', href: '/stock-list/ring-joints-rtj' },
      { name: 'Spiral Wound Gaskets', href: '/stock-list/spiral-wound-gaskets' },
      { name: 'Kammprofile & Jacketed', href: '/stock-list/kammprofile-jacketed' },
      { name: 'Gasket Sheets & Non-Metallic', href: '/stock-list/gasket-sheets' },
      { name: 'Flanges & Valve Trims', href: '/stock-list/flanges-valve-trims' },
    ],
  },
  services: {
    title: 'Services',
    href: '/under-construction',
    items: [
      { name: 'Engineering Services', href: '/under-construction' },
      { name: 'Reverse Engineering', href: '/under-construction' },
      { name: 'Custom Gasket Engineering', href: '/under-construction' },
      { name: 'Field Support & Measurement', href: '/under-construction' },
      { name: 'Technical Training', href: '/under-construction' },
    ],
  },
  resources: {
    title: 'Resources',
    href: '/resources',
    items: [
      { name: 'All Resources', href: '/resources' },
      { name: 'Technical Blog', href: '/resources/blog' },
      { name: 'FAQs', href: '/resources/faqs' },
      { name: 'Company News', href: '/resources/news' },
      { name: 'Industry Certifications', href: '/certifications' },
    ],
  },
  about: {
    title: 'About Us',
    href: '/about',
    items: [
      { name: 'About TXCO', href: '/about' },
      { name: 'Quality & Certifications', href: '/certifications' },
      { name: 'Global Contacts', href: '/contact' },
      { name: 'Careers', href: '/under-construction' },
      { name: 'Sustainability', href: '/about' },
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
      { name: 'Renewable Energy', href: '/industries/renewable-energy' },
      { name: 'Water and Wastewater', href: '/industries/water-wastewater' },
    ],
  },
  {
    title: 'PRODUCTS',
    links: [
      { name: 'All Products', href: '/products' },
      { name: 'Metallic Gaskets', href: '/products/gaskets/metallic-gaskets' },
      { name: 'Semi-Metallic Gaskets', href: '/products/gaskets/semi-metallic-gaskets' },
      { name: 'Non-Metallic Gaskets', href: '/products/gaskets/non-metallic-gaskets' },
      { name: 'Steel-Inserted Gaskets', href: '/products/gaskets/steel-inserted-gaskets' },
      { name: 'Flanges', href: '/products/flanges' },
      { name: 'Valve Components', href: '/products/valve-components' },
      { name: 'Commercial Products', href: '/products/commercial-products' },
    ],
  },
  {
    title: 'SERVICES',
    links: [
      { name: 'All Services', href: '/under-construction' },
      { name: 'Reverse Engineering', href: '/under-construction' },
      { name: 'Field Support', href: '/under-construction' },
      { name: 'Gasket Recommendations', href: '/under-construction' },
      { name: 'Training', href: '/under-construction' },
      { name: 'Value-Added Benefits', href: '/under-construction' },
    ],
  },
  {
    title: 'RESOURCES',
    links: [
      { name: 'Blog', href: '/resources/blog' },
      { name: 'FAQs', href: '/resources/faqs' },
      { name: 'News', href: '/resources/news' },
      { name: 'Resource Library', href: '/resources' },
      { name: 'Industrial Certifications', href: '/certifications' },
      { name: 'Catalogues', href: '/catalogues' },
    ],
  },
  {
    title: 'ABOUT US',
    links: [
      { name: 'About TXCO', href: '/about' },
      { name: 'Certifications', href: '/certifications' },
      { name: 'Global Locations', href: '/contact' },
      { name: 'Careers', href: '/under-construction' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Sustainability', href: '/about' },
    ],
  },
  {
    title: 'Customer',
    links: [
      { name: 'Login', href: '/login' },
      { name: 'Register', href: '/register' },
      { name: 'Catalogues', href: '/catalogues' },
      { name: 'Stock List', href: '/stock-list' },
      { name: 'Cart', href: '/cart' },
    ],
  },
];
