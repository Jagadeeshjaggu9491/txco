/**
 * Subcategories Data for the 4 Main Categories:
 * 1. GASKETS
 * 2. FLANGES
 * 3. VALVE COMPONENTS
 * 4. COMMERCIAL PRODUCTS
 */

export const subcategoriesByCategory = {
  gaskets: {
    id: 'gaskets',
    title: 'GASKETS',
    parentTitle: 'PRODUCTS',
    parentHref: '/products',
    description:
      'High-performance precision engineered industrial metallic, semi-metallic, non-metallic, and steel-inserted gaskets.',
    items: [
      {
        id: 'metallic-gaskets',
        title: 'METALLIC GASKETS',
        subtitle: 'R • RX • BX • Bonnet • Lens • Delta • IX',
        description:
          'Precision CNC-machined solid metallic ring joints, subsea seals, and specialty high-pressure vessel gaskets.',
        image: '/images/product-detials-images/Ring-Type-Joint-RT-J.avif',
        href: '/products/gaskets/metallic-gaskets',
      },
      {
        id: 'semi-metallic-gaskets',
        title: 'SEMI-METALLIC GASKETS',
        subtitle: 'Spiral Wound • Kammprofile • Metal Jacketed',
        description:
          'Engineered composite sealing elements combining metal mechanical strength with compressible soft filler materials.',
        image: '/images/product-detials-images/Spiral-Wound-Gaskets-Planisteel-SW.avif',
        href: '/products/gaskets/semi-metallic-gaskets',
      },
      {
        id: 'non-metallic-gaskets',
        title: 'NON-METALLIC GASKETS',
        subtitle: 'Rubber • PTFE • ePTFE • Non-Asbestos',
        description:
          'Elastomeric, fluoropolymer, and CNAF compressed sheets designed for universal chemical resistance and utility service.',
        image: '/images/product-detials-images/PTFE-Jointing-Sheets-Planiflon.avif',
        href: '/products/gaskets/non-metallic-gaskets',
      },
      {
        id: 'steel-inserted-gaskets',
        title: 'STEEL-INSERTED GASKETS',
        subtitle: 'Rubber-Inserted • Graphite-Inserted',
        description:
          'Reinforced composite gaskets containing internal steel wire or tanged cores for high blowout resistance and stiffness.',
        image: '/images/product-detials-images/Graphite-Gasketing-Sheet.avif',
        href: '/products/gaskets/steel-inserted-gaskets',
      },
    ],
  },

  flanges: {
    id: 'flanges',
    title: 'FLANGES',
    parentTitle: 'PRODUCTS',
    parentHref: '/products',
    description:
      'Forged and precision-machined industrial flanges in carbon steel, stainless steel, duplex, and nickel alloys.',
    items: [
      {
        id: 'weld-neck-flanges',
        title: 'WELD NECK FLANGES',
        subtitle: 'ASME B16.5 • Class 150 to 2500',
        description:
          'Butt-weld connection flanges with long tapered hub engineered for critical high-pressure and cyclic thermal duty.',
        image: '/images/home-products.png',
        href: '/products/flanges/details?product=weld-neck-flanges',
      },
      {
        id: 'slip-on-flanges',
        title: 'SLIP-ON FLANGES',
        subtitle: 'ASME B16.5 • Flat Face & Raised Face',
        description:
          'Cost-effective slip-over pipe flanges with dual fillet welds for low to medium pressure process piping systems.',
        image: '/images/home-products.png',
        href: '/products/flanges/details?product=slip-on-flanges',
      },
      {
        id: 'blind-flanges',
        title: 'BLIND FLANGES',
        subtitle: 'ASME B16.5 • API 6B / 6BX',
        description:
          'Solid forged blanking flanges for positive line termination, vessel inspection ports, and pressure isolation.',
        image: '/images/home-products.png',
        href: '/products/flanges/details?product=blind-flanges',
      },
      {
        id: 'socket-weld-flanges',
        title: 'SOCKET WELD FLANGES',
        subtitle: 'ASME B16.5 • Small Bore Piping',
        description:
          'Socket recess design engineered for high-pressure compact small bore pipelines in chemical plants.',
        image: '/images/home-products.png',
        href: '/products/flanges/details?product=socket-weld-flanges',
      },
      {
        id: 'lap-joint-flanges',
        title: 'LAP JOINT FLANGES',
        subtitle: 'ASME B16.5 • Used with Stub Ends',
        description:
          'Loose backing flanges that rotate freely on stub ends for quick bolt hole alignment in stainless systems.',
        image: '/images/home-products.png',
        href: '/products/flanges/details?product=lap-joint-flanges',
      },
      {
        id: 'threaded-screwed-flanges',
        title: 'THREADED / SCREWED FLANGES',
        subtitle: 'ASME B16.5 • NPT Threads',
        description:
          'Internal tapered thread flanges for hazardous piping environments where welding is strictly prohibited.',
        image: '/images/home-products.png',
        href: '/products/flanges/details?product=threaded-screwed-flanges',
      },
      {
        id: 'orifice-flanges',
        title: 'ORIFICE FLANGES',
        subtitle: 'ASME B16.36 • Differential Flow',
        description:
          'Equipped with radial tapped holes and jacking screws for differential pressure flow metering plates.',
        image: '/images/home-products.png',
        href: '/products/flanges/details?product=orifice-flanges',
      },
      {
        id: 'custom-flanges',
        title: 'CUSTOM FLANGES',
        subtitle: 'API 17D • TEMA • Bespoke Drawings',
        description:
          'CNC-machined bespoke flanges, compact swivel-ring flanges, and specialized offshore subsea profiles.',
        image: '/images/home-products.png',
        href: '/products/flanges/details?product=custom-flanges',
      },
    ],
  },

  'valve-components': {
    id: 'valve-components',
    title: 'VALVE COMPONENTS',
    parentTitle: 'PRODUCTS',
    parentHref: '/products',
    description:
      'Precision machined internal valve trims, compression packings, bonnet gaskets, and high-integrity sealing elements.',
    items: [
      {
        id: 'valve-components-trim',
        title: 'VALVE COMPONENTS',
        subtitle: 'API 6D • API 600 • Precision Trims',
        description:
          'Precision CNC-machined valve stems, balls, seats, discs, wedges, and internal guide components.',
        image: '/images/product-detials-images/Ball-for-Ball-Valve.avif',
        href: '/products/valve-components/details?product=valve-components-trim',
      },
      {
        id: 'valve-packing',
        title: 'VALVE PACKING',
        subtitle: 'API 622 • API 624 Low-E Certified',
        description:
          'Die-formed flexible graphite rings and braided carbon fiber stem packing for zero-emission fugitive VOC compliance.',
        image: '/images/product-detials-images/O-Ring-for-Ball-Valve.avif',
        href: '/products/valve-components/details?product=valve-packing',
      },
      {
        id: 'valve-gaskets',
        title: 'VALVE GASKETS',
        subtitle: 'ASME B16.34 • Body-to-Bonnet Seals',
        description:
          'Pressure-seal rings, body-to-bonnet gaskets, and lantern rings for extreme pressure gate and globe valves.',
        image: '/images/product-detials-images/Bodies-and-Closures-for-Ball-Valve.avif',
        href: '/products/valve-components/details?product=valve-gaskets',
      },
      {
        id: 'sealing-components',
        title: 'SEALING COMPONENTS',
        subtitle: 'Spring-Energized PTFE • PEEK Backups',
        description:
          'Spring-energized PTFE lip seals, PEEK backup rings, and custom energizers for high-cycle and sour service.',
        image: '/images/product-detials-images/Seat-for-Ball-and-Gate-Valve.avif',
        href: '/products/valve-components/details?product=sealing-components',
      },
    ],
  },

  'commercial-products': {
    id: 'commercial-products',
    title: 'COMMERCIAL PRODUCTS',
    parentTitle: 'PRODUCTS',
    parentHref: '/products',
    description:
      'Standardized industrial fasteners, heavy hex bolting, stud bolts, lubricants, and commercial pipeline maintenance supply products.',
    items: [
      {
        id: 'commercial-products-item',
        title: 'COMMERCIAL PRODUCTS',
        subtitle: 'ASTM A193 B7/B16 • Stud Bolts & Nuts',
        description:
          'Heavy hex stud bolts, nuts, anti-seize torque lubricants, flange protectors, and standard pipeline hardware.',
        image: '/images/product-detials-images/Expanding-Gates-and-Through-Conduit-Gates.avif',
        href: '/products/commercial-products/details?product=commercial-products-item',
      },
    ],
  },
};
