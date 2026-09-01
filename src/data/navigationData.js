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
        name: 'METALLIC GASKETS',
        href: '/products/gaskets/metallic-gaskets',
        children: [
          { name: 'Ring Type Joint (RTJ) Gaskets', href: '/products/gaskets/metallic-gaskets/details?product=ring-type-joint-rtj' },
          { name: 'Rubber-Coated RTJ Gaskets', href: '/products/gaskets/metallic-gaskets/details?product=rubber-coated-rtj' },
          { name: 'PTFE-Insert RTJ Gaskets', href: '/products/gaskets/metallic-gaskets/details?product=ptfe-insert-rtj' },
          { name: 'Protective-Coated RTJ Gaskets', href: '/products/gaskets/metallic-gaskets/details?product=protective-coated-rtj' },
          { name: 'Bonnet Rings', href: '/products/gaskets/metallic-gaskets/details?product=bonnet-rings' },
          { name: 'Lens Rings', href: '/products/gaskets/metallic-gaskets/details?product=lens-rings' },
          { name: 'Blind Gaskets', href: '/products/gaskets/metallic-gaskets/details?product=blind-gaskets' },
          { name: 'VX–AX Gaskets', href: '/products/gaskets/metallic-gaskets/details?product=vx-ax-gaskets' },
          { name: 'IX Gaskets', href: '/products/gaskets/metallic-gaskets/details?product=ix-gaskets' },
          { name: 'Delta Gaskets', href: '/products/gaskets/metallic-gaskets/details?product=delta-gaskets' },
          { name: 'Bridgeman Gaskets', href: '/products/gaskets/metallic-gaskets/details?product=bridge-gaskets' },
          { name: 'Spectacle Blind Gaskets', href: '/products/gaskets/metallic-gaskets/details?product=spectacle-blind-gaskets' },
          { name: 'Transition RTJ Gaskets', href: '/products/gaskets/metallic-gaskets/details?product=transition-rtj' },
          { name: 'Soft-Material-Serrated RTJ Gaskets', href: '/products/gaskets/metallic-gaskets/details?product=soft-material-seated-rtj' },
          { name: 'Weld-Lip Seals', href: '/products/gaskets/metallic-gaskets/details?product=weld-lip-seals' },
        ],
      },
      {
        name: 'SEMI-METALLIC GASKETS',
        href: '/products/gaskets/semi-metallic-gaskets',
        children: [
          { name: 'Spiral Wound Gaskets', href: '/products/gaskets/semi-metallic-gaskets/details?product=spiral-wound-gaskets' },
          { name: 'Kammprofile Gaskets', href: '/products/gaskets/semi-metallic-gaskets/details?product=kammprofile-gaskets' },
          { name: 'Metal Jacketed Gaskets', href: '/products/gaskets/semi-metallic-gaskets/details?product=metal-jacketed-gaskets' },
          { name: 'Flange Isolation Kits', href: '/products/gaskets/semi-metallic-gaskets/details?product=flange-isolation-kits' },
        ],
      },
      {
        name: 'NON-METALLIC GASKETS',
        href: '/products/gaskets/non-metallic-gaskets',
        children: [
          { name: 'Rubber Gaskets', href: '/products/gaskets/non-metallic-gaskets/details?product=rubber-gaskets' },
          { name: 'PTFE Gaskets', href: '/products/gaskets/non-metallic-gaskets/details?product=ptfe-gaskets' },
          { name: 'ePTFE Gaskets', href: '/products/gaskets/non-metallic-gaskets/details?product=eptfe-gaskets' },
          { name: 'Asbestos Free Gaskets', href: '/products/gaskets/non-metallic-gaskets/details?product=asbestos-free-gaskets' },
          { name: 'Compressed Non-Asbestos', href: '/products/gaskets/non-metallic-gaskets/details?product=non-asbestos-gaskets' },
        ],
      },
      {
        name: 'STEEL-INSERTED GASKETS',
        href: '/products/gaskets/steel-inserted-gaskets',
        children: [
          { name: 'Rubber-Inserted Gaskets', href: '/products/gaskets/steel-inserted-gaskets/details?product=rubber-inserted' },
          { name: 'Graphite-Inserted Gaskets', href: '/products/gaskets/steel-inserted-gaskets/details?product=graphite-inserted' },
        ],
      },
      {
        name: 'PLUG GASKETS',
        href: '/products/plug-gaskets',
        children: [
          { name: 'Plug Gaskets', href: '/products/plug-gaskets/details?product=plug-gaskets' },
        ],
      },
      {
        name: 'FLANGES',
        href: '/products/flanges',
        children: [
          { name: 'Weld Neck Flanges', href: '/products/flanges/details?product=weld-neck-flanges' },
          { name: 'Slip-On Flanges', href: '/products/flanges/details?product=slip-on-flanges' },
          { name: 'Blind Flanges', href: '/products/flanges/details?product=blind-flanges' },
          { name: 'Socket Weld Flanges', href: '/products/flanges/details?product=socket-weld-flanges' },
          { name: 'Lap Joint Flanges', href: '/products/flanges/details?product=lap-joint-flanges' },
          { name: 'Threaded / Screwed Flanges', href: '/products/flanges/details?product=threaded-screwed-flanges' },
          { name: 'Orifice Flanges', href: '/products/flanges/details?product=orifice-flanges' },
          { name: 'Custom Flanges', href: '/products/flanges/details?product=custom-flanges' },
        ],
      },
      {
        name: 'MONOLITHIC INSULATION JOINTS',
        href: '/products/monolithic-insulation-joints',
        children: [
          { name: 'Monolithic Insulation Joints', href: '/products/monolithic-insulation-joints/details?product=monolithic-insulation-joints' },
        ],
      },
      {
        name: 'VALVE COMPONENTS',
        href: '/products/valve-components',
        children: [
          { name: 'Precision O-Rings & Backup Rings', href: '/products/valve-components/details?product=precision-o-rings' },
          { name: 'API 622 / ISO 15848-1 Gland Packing', href: '/products/valve-components/details?product=valve-packing' },
          { name: 'Valve Seats & Soft / Metallic Inserts', href: '/products/valve-components/details?product=valve-seats-inserts' },
        ],
      },
      {
        name: 'COMMERCIAL PRODUCTS',
        href: '/products/commercial-products',
        children: [
          { name: 'Commercial Products', href: '/products/commercial-products/details?product=commercial-products-item' },
        ],
      },
    ],
  },

  services: {
    title: 'Services',
    href: '#',
    items: [
      { name: 'Engineering Services', href: '#' },
      { name: 'Reverse Engineering', href: '#' },
      { name: 'Custom Gasket Engineering', href: '#' },
      { name: 'Field Support & Measurement', href: '#' },
      { name: 'Technical Training', href: '#' },
    ],
  },
  resources: {
    title: 'Resources',
    href: '/resources',
    items: [
      { name: 'All Resources', href: '/resources' },
      { name: 'Stock List', href: '/stock-list' },
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
      { name: 'Careers', href: '#' },
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
      { name: 'All Services', href: '#' },
      { name: 'Reverse Engineering', href: '#' },
      { name: 'Field Support', href: '#' },
      { name: 'Gasket Recommendations', href: '#' },
      { name: 'Training', href: '#' },
      { name: 'Value-Added Benefits', href: '#' },
    ],
  },
  {
    title: 'RESOURCES',
    links: [
      { name: 'Stock List', href: '/stock-list' },
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
      { name: 'Careers', href: '/careers' },
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
