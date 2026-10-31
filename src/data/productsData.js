export {
  productCategoriesHierarchy,
  allProductsList,
  getProductBySlug,
  getCategoryBySlug,
} from './productsCatalogData';

export const productsHeroData = {
  title: 'TXCO SEALING',
  subtitle:
    'TXCO Sealing Products Private Limited manufactures mission-critical industrial gaskets, precision-forged flanges, monolithic insulation joints and severe-service valve components engineered to deliver complete end-to-end pipeline joint integrity across global oil & gas, petrochemical, nuclear, and power infrastructure.',
  description:
    'Engineered industrial sealing solutions for critical applications, high pressure, extreme temperatures, and demanding operating environments.',
  heroImage: '/images/home-products.png',
};

export const mainProductCategories = [
  {
    id: 'metallic-gaskets',
    title: 'METALLIC GASKETS',
    types: 'R – Oval, R – Octagonal, RX, BX, Bonnet, Lens, Delta, IX',
    description:
      'Solid metal and precision CNC-machined metallic sealing profiles designed for high-pressure API 6A/17D and ASME flanges.',
    image: '/images/TXCO PHOTOS FOR WEBSITE/RTJ/RTJ COVER.jpeg',
    fallbackImage: '/images/TXCO PHOTOS FOR WEBSITE/RTJ/RTJ - R OVAL.png',
    href: '/products/gaskets/metallic-gaskets',
  },
  {
    id: 'semi-metallic-gaskets',
    title: 'SEMI-METALLIC GASKETS',
    types: 'Spiral Wound, Kammprofile, Metal Jacketed, Flange Isolation Kits',
    description:
      'Engineered composite sealing elements combining metallic mechanical strength with compressible soft filler materials.',
    image: '/images/TXCO PHOTOS FOR WEBSITE/SEMI METALLIC/SEMIMETALLIC COVER PAGE.jpeg',
    fallbackImage: '/images/TXCO PHOTOS FOR WEBSITE/SEMI METALLIC/SPIRAL WOUND/SPIRAL WOUND GASKET.jpeg',
    href: '/products/gaskets/semi-metallic-gaskets',
  },
  {
    id: 'non-metallic-gaskets',
    title: 'NON-METALLIC GASKETS',
    types: 'Rubber, PTFE, ePTFE, Asbestos Free Gaskets, Compressed Non Asbestos, O-Rings and Gland Packing',
    description:
      'Elastomeric, fluoropolymer, and CNAF compressed sheets designed for universal chemical resistance and utility service.',
    image: '/images/TXCO PHOTOS FOR WEBSITE/NON METALLIC GASKETS/PTFE GASKETS.jpeg',
    fallbackImage: '/images/TXCO PHOTOS FOR WEBSITE/NON METALLIC GASKETS/RUBBER GASKETS.jpeg',
    href: '/products/gaskets/non-metallic-gaskets',
  },
  {
    id: 'steel-inserted-gaskets',
    title: 'STEEL-INSERTED GASKETS',
    types: 'Steel Insert - Rubber Gaskets, Steel Insert - Graphite Gaskets',
    description:
      'Reinforced composite gaskets containing internal steel wire or tanged cores for high blowout resistance and stiffness.',
    image: '/images/TXCO PHOTOS FOR WEBSITE/Steel Insert Graphite Gasket.png',
    fallbackImage: '/images/TXCO PHOTOS FOR WEBSITE/Steel Insert  Rubber Gasket.png',
    href: '/products/gaskets/steel-inserted-gaskets',
  },
  {
    id: 'plug-gaskets',
    title: 'PLUG GASKETS',
    types: 'Metallic & Non-Metallic Equipment Plug Seals',
    description:
      'Specialized metallic and non-metallic sealing elements engineered to seal industrial equipment and piping plugs.',
    image: '/images/TXCO PHOTOS FOR WEBSITE/plug gasket.png',
    fallbackImage: '/images/TXCO PHOTOS FOR WEBSITE/plug gasket.png',
    href: '/products/plug-gaskets',
  },
  {
    id: 'flanges',
    title: 'FLANGES',
    types: 'Weld Neck, Slip-On, Blind, Socket Weld, Lap Joint, Threaded, Orifice, Custom',
    description:
      'Forged and precision-machined connection flanges in stainless steel, duplex, super duplex, and nickel alloys meeting ASME, API, and DIN standards.',
    image: '/images/TXCO PHOTOS FOR WEBSITE/FLANGES/falnges cover image.png',
    fallbackImage: '/images/TXCO PHOTOS FOR WEBSITE/FLANGES/flanges.png',
    href: '/products/flanges',
  },
  {
    id: 'monolithic-insulation-joints',
    title: 'MONOLITHIC INSULATION JOINTS',
    types: 'Fully Welded Boltless CP Isolating Joints (NPS 1/2" to 60", Class 150 to 2500)',
    description:
      'Solid-state, fully welded structural forgings for permanent Cathodic Protection (CP) isolation in buried and aboveground pipelines.',
    image: '/images/TXCO PHOTOS FOR WEBSITE/Insulation-Joints.avif',
    fallbackImage: '/images/TXCO PHOTOS FOR WEBSITE/Insulation-Joints.avif',
    href: '/products/monolithic-insulation-joints',
  },
  {
    id: 'valve-components',
    title: 'VALVE COMPONENTS',
    types: 'Valve Seats & Inserts, Sleeves, Metallic Trims & Flow Control Components',
    description:
      'Engineered valve trims, bonnet gaskets, seat rings, and high-integrity sealing components for flow control.',
    image: '/images/TXCO PHOTOS FOR WEBSITE/VALVE COMPONENTS/SEAT RING.jpeg',
    fallbackImage: '/images/TXCO PHOTOS FOR WEBSITE/VALVE COMPONENTS/SEAT RING.jpeg',
    href: '/products/valve-components',
  },
  {
    id: 'commercial-products',
    title: 'COMMERCIAL PRODUCTS',
    types: 'Industrial Bolting, Heavy Hex Studs, Nuts & Pipeline Hardware',
    description:
      'Complete commercial supply range including ASTM heavy hex stud bolts, nuts, flange protectors, and pipeline consumables.',
    image: '/images/commercial-products-coming-soon.jpg',
    fallbackImage: '/images/commercial-products-coming-soon.jpg',
    href: '/products/commercial-products',
  },
];

export const industrialSealingProducts = {
  heading: 'INDUSTRIAL SEALING PRODUCTS',
  mainDescription:
    'TXCO Sealing Products Private Limited manufactures mission-critical industrial gaskets, precision-forged flanges, monolithic insulation joints and severe-service valve components engineered to deliver complete end-to-end pipeline joint integrity across global oil & gas, petrochemical, nuclear, and power infrastructure.',
  cards: [
    {
      id: 'metallic-gaskets',
      title: 'METALLIC GASKETS',
      description:
        'TXCO Sealing Products Private Limited manufactures and supplies metallic gaskets for critical applications in the oil & gas, petrochemical, refining, chemical and power industries. Our metallic gaskets are designed for demanding services requiring high pressure and temperature resistance, mechanical strength and chemical compatibility.',
      label: 'PRODUCTS & VARIANTS:',
      productsList: [
        'Ring Type Joint (RTJ) Gaskets (R – Oval, R – Octagonal, RX, BX, SBX, SRX)',
        'Rubber-Coated RTJ Gaskets',
        'PTFE-Insert RTJ Gaskets',
        'Protective-Coated RTJ Gaskets',
        'Bonnet Rings',
        'Lens Rings',
        'Blind Gaskets',
        'VX–AX Gaskets',
        'IX Gaskets',
        'Delta Gaskets',
        'Bridgeman Gaskets',
        'Spectacle Blind Gaskets',
        'Transition RTJ Gaskets',
        'Soft-Material-Serrated RTJ Gaskets',
        'Weld-Lip Seals',
      ],
    },
    {
      id: 'semi-metallic-gaskets',
      title: 'SEMI-METALLIC GASKETS',
      description:
        'Semi-metallic gaskets combine metallic strength with compressible sealing materials to provide reliable performance under demanding pressure, temperature and process conditions. TXCO offers Spiral Wound, Kammprofile and Metal Jacketed Gaskets, along with Flange Isolation Kits for sealing and electrical isolation.',
      label: 'PRODUCTS & VARIANTS:',
      productsList: [
        'Spiral Wound Gaskets (Style R, Style RIR, Style CG, Style CGI, Style CGI with Bolt Holes)',
        'Kammprofile Gaskets (Type Z, Type ZA, Type ZI)',
        'Metal Jacketed Gaskets (Corrugated Metal Jacketed, Flat Metal Jacketed, Double Jacketed, Heat Exchanger)',
        'Flange Isolation Kits (TX-ISOPRO™, TX-CERAMPRO™, TX Type D, TX TYPE -N)',
      ],
    },
    {
      id: 'non-metallic-flanges-components',
      title: 'NON-METALLIC GASKETS, FLANGES & VALVE COMPONENTS',
      description:
        'Non-metallic gaskets conform to flange surfaces and minor irregularities, creating a reliable barrier against leakage. TXCO also manufactures precision-forged industrial flanges, monolithic insulation joints, and severe-service valve components adhering strictly to ASME, API, and ISO standards.',
      label: 'PRODUCTS & VARIANTS:',
      productsList: [
        'Rubber Gaskets (Neoprene, Nitrile NBR, EPDM, Silicone, Viton FKM, Natural Rubber, SBR, Butyl)',
        'PTFE & ePTFE Gaskets (Virgin, Expanded, Modified, Filled, Envelope, Full-Face)',
        'Asbestos Free Gaskets (TXCO AF-110, AF-120, AF-139, AF-154, AF-155 GF, AF-159, AF-160, AF-170, AF-190)',
        'Compressed Non Asbestos (TXCO Style 11, Style 20, Style 39, Style 51, Style 54, Style 55, Style 59 Oil, Style 60 Acid)',
        'Steel-Inserted Gaskets (Rubber, Graphite) & Equipment Plug Gaskets',
        'Industrial Flanges (Weld Neck, Slip-On, Blind, Socket Weld, Lap Joint, Threaded, Orifice, Custom)',
        'Monolithic Insulation Joints (NPS 2" to 60", Class 150 to 2500)',
        'Valve Components (Precision O-Rings, Low-Emission Gland Packing, Valve Seats & Inserts)',
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
      'TXCO combines precision manufacturing, material expertise, standards-based production and sealing knowledge to provide flange and sealing solutions for demanding industrial applications.',
    phone: '+91 9553125566',
    email: 'info@txcosealing.com',
    image: '/images/contact-img.png',
  },
};

export const rtjSubProducts = [
  {
    id: 'ring-joint-gaskets',
    title: 'RING JOINT GASKETS',
    subtitle: 'R • RX • BX',
    image: '/images/TXCO PHOTOS FOR WEBSITE/RTJ/RTJ - R OVAL.png',
    href: '/products/gaskets-kits-seals/ring-type-joint/details?tab=ring-joint-gaskets',
  },
  {
    id: 'kammprofile-rtj',
    title: 'KAMMPROFILE RING TYPE JOINT (RTJ)',
    subtitle: 'Style R • RIR • CG • CGI',
    image: '/images/TXCO PHOTOS FOR WEBSITE/SEMI METALLIC/KAMMPROFILE GASKET.jpeg',
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
    image: '/images/TXCO PHOTOS FOR WEBSITE/SEMI METALLIC/jacketed gasket.png',
    href: '/contact',
  },
  {
    id: 'corrugated-jacketed',
    title: 'CORRUGATED JACKETED GASKETS',
    subtitle: 'Resilient corrugated metal design with filler core for cyclic pressure',
    image: '/images/TXCO PHOTOS FOR WEBSITE/SEMI METALLIC/jacketed gasket.png',
    href: '/contact',
  },
  {
    id: 'flat-jacketed',
    title: 'FLAT JACKETED GASKETS',
    subtitle: 'Smooth jacket construction for narrow flange surfaces and valves',
    image: '/images/TXCO PHOTOS FOR WEBSITE/SEMI METALLIC/jacketed gasket.png',
    href: '/contact',
  },
];

export const specializedProducts = [
  {
    id: 'special-custom-gaskets',
    title: 'SPECIAL & CUSTOM GASKETS',
    subtitle: 'Tailored sealing geometry for high pressure and non-standard flanges',
    image: '/images/TXCO PHOTOS FOR WEBSITE/METALLIC GASKETS/DELTA GASKET.jpeg',
    href: '/contact',
  },
  {
    id: 'protective-coatings',
    title: 'PROTECTIVE COATINGS',
    subtitle: 'Anti-corrosion, anti-wear and thermal protective surface treatments',
    image: '/images/TXCO PHOTOS FOR WEBSITE/RTJ/PROTECTIVE COATING.png',
    href: '/contact',
  },
  {
    id: 'pipeline-insulation-kits',
    title: 'PIPELINE INSULATION KITS',
    subtitle: 'Complete electrical isolation for cathodic protection and flange preservation',
    image: '/images/TXCO PHOTOS FOR WEBSITE/SEMI METALLIC/FLANGE ISOLATION KIT/FLANGE ISOLATION KIT.jpeg',
    href: '/contact',
  },
  {
    id: 'custom-groove-config',
    title: 'CUSTOM GROOVE CONFIGURATIONS',
    subtitle: 'Lens, Delta, IX, Bridgeman and specialized metal profiles',
    image: '/images/TXCO PHOTOS FOR WEBSITE/METALLIC GASKETS/TRANSISTION RING RTJ.jpeg',
    href: '/contact',
  },
];
