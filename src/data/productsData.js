export {
  productCategoriesHierarchy,
  allProductsList,
  getProductBySlug,
  getCategoryBySlug,
} from './productsCatalogData';

export const productsHeroData = {
  title: 'TXCO SEALING',
  subtitle:
    'Deploy, manage and troubleshoot cloud-native applications at scale without overwhelming your engineers with the complexity of Kubernetes.',
  description:
    'Engineered industrial sealing solutions for critical applications, high pressure, extreme temperatures, and demanding operating environments.',
  heroImage: '/images/home-products.png',
};

export const mainProductCategories = [
  {
    id: 'gaskets',
    title: 'GASKETS',
    description:
      'High-performance precision engineered industrial metallic, semi-metallic, non-metallic, and steel-inserted gaskets.',
    image: '/images/products/industrial-gaskets/ring-type-joint.png',
    fallbackImage: '/images/home-products.png',
    href: '/products/gaskets',
  },
  {
    id: 'flanges',
    title: 'FLANGES',
    description:
      'Forged and precision-machined connection flanges including Weld Neck, Slip-On, Blind, Socket Weld, and custom designs.',
    image: '/images/home-products.png',
    fallbackImage: '/images/home-products.png',
    href: '/products/flanges',
  },
  {
    id: 'valve-components',
    title: 'VALVE COMPONENTS',
    description:
      'Engineered valve trims, compression packings, bonnet gaskets, and high-integrity sealing components for flow control.',
    image: '/images/home-services.png',
    fallbackImage: '/images/home-services.png',
    href: '/products/valve-components',
  },
  {
    id: 'commercial-products',
    title: 'COMMERCIAL PRODUCTS',
    description:
      'Complete commercial supply range including ASTM heavy hex stud bolts, nuts, flange protectors, and pipeline consumables.',
    image: '/images/products/industrial-gaskets/flange-insulation-kits.png',
    fallbackImage: '/images/home-products.png',
    href: '/products/commercial-products',
  },
];

export const industrialSealingProducts = {
  heading: 'INDUSTRIAL SEALING PRODUCTS',
  mainDescription:
    'At TXCO Sealing Products, we are a leading manufacturer of high-performance industrial sealing solutions, with a commitment to delivering custom-engineered products that meet the rigorous demands of the industries we serve. We specialize in designing, manufacturing and supplying a comprehensive range of precision sealing components for critical applications across the oil & gas, petrochemical, power and heavy-engineering sectors. Headquartered in the industrial hub of Hyderabad, India, our highly automated and integrated operations meet the most demanding national and international standards in design, engineering, manufacture and testing.',
  cards: [
    {
      id: 'gaskets',
      title: 'GASKETS',
      description:
        'Precision-engineered sealing solutions for demanding industrial applications. Our gasket range includes Ring Type Joints, Spiral Wound Gaskets, Kammprofile Gaskets, Non-Metallic Gaskets, Gasket Sheets and Flange Insulation Kits. Designed for reliable sealing performance across high-pressure, high-temperature and critical service environments.',
      label: 'PRODUCTS:',
      productsList: [
        'Metallic Gaskets (RTJ, Bonnet, Lens, Blind, Delta, IX, etc.)',
        'Semi-Metallic Gaskets (Spiral Wound, Kammprofile, Metal Jacketed)',
        'Non-Metallic Gaskets (Rubber, PTFE, ePTFE, CNAF)',
        'Steel-Inserted Gaskets (Rubber-Inserted, Graphite-Inserted)',
        'Flanges (Weld Neck, Slip-On, Blind, Orifice, Custom)',
        'Valve Components (Packing, Gaskets, Trims, Sealing)',
      ],
    },
    {
      id: 'jacketed-solutions',
      title: 'JACKETED SOLUTIONS',
      description:
        'Reliable sealing solutions designed for demanding temperature, pressure and process conditions. Our Metal Jacketed Gaskets combine metallic construction with suitable filler materials to provide dependable sealing performance. Available in corrugated and flat jacket configurations for a range of industrial applications.',
      label: 'PRODUCTS:',
      productsList: [
        'Metal Jacketed Gaskets',
        'Corrugated Jacketed Gaskets',
        'Flat Jacketed Gaskets',
      ],
    },
    {
      id: 'specialized-custom-solutions',
      title: 'SPECIALIZED & CUSTOM SOLUTIONS',
      description:
        'Engineered sealing and protection solutions for applications where standard products are not enough. TXCO provides specialty gaskets and customized configurations, including Lens, Delta, IX and Bridgeman designs, along with protective coatings, pipeline insulation solutions and custom groove configurations.',
      label: 'SOLUTIONS:',
      productsList: [
        'Special & Custom Gaskets',
        'Protective Coatings',
        'Pipeline Insulation Kits',
        'Custom Groove Configurations',
        'Specialty Gaskets',
      ],
    },
  ],
};

export const engineeredSolutionsData = {
  heading: 'DISCOVER OUR ENGINEERED SOLUTIONS',
  items: [
    {
      id: 'precision-gaskets',
      title: 'PRECISION GASKETS',
      iconSrc: '/images/icons/industries/Renewable Energy.png',
      svgType: 'lightbulb',
    },
    {
      id: 'custom-engineering',
      title: 'CUSTOM ENGINEERING',
      iconSrc: '/images/icons/industries/Power Generation.png',
      svgType: 'factory',
    },
    {
      id: 'specialty-sealing',
      title: 'SPECIALTY SEALING',
      iconSrc: '/images/icons/industries/Oil and Gas.png',
      svgType: 'rig',
    },
    {
      id: 'protective-solutions',
      title: 'PROTECTIVE SOLUTIONS',
      iconSrc: '/images/icons/industries/EPC.png',
      svgType: 'helmet',
    },
  ],
  banner: {
    text:
      'From high-performance gaskets, hoses and fasteners to custom-engineered sealing solutions, Lamons helps customers solve demanding applications with reliable products, technical expertise and responsive support.',
    phone: '+91 6302 152 938',
    email: 'info@txco.co',
    image: '/images/contact-img.png',
  },
};

export const rtjSubProducts = [
  {
    id: 'ring-joint-gaskets',
    title: 'RING JOINT GASKETS',
    subtitle: 'R • RX • BX',
    image: '/images/products/industrial-gaskets/ring-type-joint.png',
    href: '/products/gaskets-kits-seals/ring-type-joint/details?tab=ring-joint-gaskets',
  },
  {
    id: 'kammprofile-rtj',
    title: 'KAMMPROFILE RING TYPE JOINT (RTJ)',
    subtitle: 'Style R • RIR • CG • CGI',
    image: '/images/products/industrial-gaskets/kammprofile-gaskets.png',
    href: '/products/gaskets-kits-seals/ring-type-joint/details?tab=kammprofile-rtj',
  },
];

export const rtjTabContent = {
  applications: [
    'Higher Pressure Connections (up to 20,000 psi)',
    'High Temperature Services',
    'Metal to Metal Sealing',
    'Petroleum Upstream, Midstream and Downstream',
    'Alternative Fuels',
    'Subsea',
  ],
  benefits: [
    'Exceptional sealability under extreme pressure and temperature cycles',
    'High blowout resistance for critical safety compliance',
    'Extensive material selection (Soft Iron, Low Carbon Steel, SS304/316, Inconel 625, Monel, Hastelloy)',
    'Full compliance with API 6A, API 17D, and ASME B16.20 specifications',
    'Precision machined tolerances preventing flange face damage',
  ],
};

export const jacketedProducts = [
  {
    id: 'metal-jacketed',
    title: 'METAL JACKETED GASKETS',
    subtitle: 'High-temperature sealing for heat exchangers and pressure vessels',
    image: '/images/products/industrial-gaskets/kammprofile-gaskets.png',
    href: '/contact',
  },
  {
    id: 'corrugated-jacketed',
    title: 'CORRUGATED JACKETED GASKETS',
    subtitle: 'Resilient corrugated metal design with filler core for cyclic pressure',
    image: '/images/products/industrial-gaskets/sprial-wound-gaskets.png',
    href: '/contact',
  },
  {
    id: 'flat-jacketed',
    title: 'FLAT JACKETED GASKETS',
    subtitle: 'Smooth jacket construction for narrow flange surfaces and valves',
    image: '/images/products/industrial-gaskets/ring-type-joint.png',
    href: '/contact',
  },
];

export const specializedProducts = [
  {
    id: 'special-custom-gaskets',
    title: 'SPECIAL & CUSTOM GASKETS',
    subtitle: 'Tailored sealing geometry for high pressure and non-standard flanges',
    image: '/images/products/industrial-gaskets/special-custom.png',
    href: '/contact',
  },
  {
    id: 'protective-coatings',
    title: 'PROTECTIVE COATINGS',
    subtitle: 'Anti-corrosion, anti-wear and thermal protective surface treatments',
    image: '/images/products/industrial-gaskets/non-metallic-gaskets.png',
    href: '/contact',
  },
  {
    id: 'pipeline-insulation-kits',
    title: 'PIPELINE INSULATION KITS',
    subtitle: 'Complete electrical isolation for cathodic protection and flange preservation',
    image: '/images/products/industrial-gaskets/flange-insulation-kits.png',
    href: '/contact',
  },
  {
    id: 'custom-groove-config',
    title: 'CUSTOM GROOVE CONFIGURATIONS',
    subtitle: 'Lens, Delta, IX, Bridgeman and specialized metal profiles',
    image: '/images/products/industrial-gaskets/ring-type-joint.png',
    href: '/contact',
  },
];
