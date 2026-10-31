/**
 * TXCO Gasket Selection Guide & RTJ Dimension Database
 * Comprehensive rules, operating parameters, and exact dimensional data
 * for ASME B16.5, API 6B, API 6BX, and ASME B16.47 Series A.
 */

// 1. Application-Based Parameters & Gasket Recommendations
export const applicationParameters = {
  flangeFacings: [
    { id: 'rf', label: 'Raised Face (RF)', description: 'Standard raised face (0.06" or 0.25" face height) per ASME B16.5/B16.47' },
    { id: 'ff', label: 'Flat Face (FF)', description: 'Full flat face commonly used with cast iron, ductile iron, or bronze flanges' },
    { id: 'rtj', label: 'Ring Type Joint (RTJ)', description: 'Precision 23° grooved flange face per ASME B16.20 / API 6A' },
    { id: 'tg_mf', label: 'Tongue & Groove / Male & Female', description: 'Confined joint preventing radial blowout and lateral gasket flow' },
    { id: 'fragile', label: 'Plastic / FRP / Glass-Lined', description: 'Fragile, low-allowable bolt torque flange materials' },
  ],

  pressureClasses: [
    { id: 'cl150', label: 'Class 150 (Low Pressure)', desc: 'Up to 20 bar (290 psi) operating pressure' },
    { id: 'cl300_600', label: 'Class 300–600 (Medium Pressure)', desc: '20 to 100 bar (290 to 1,440 psi) operating pressure' },
    { id: 'cl900_1500', label: 'Class 900–1500 (High Pressure)', desc: '100 to 250 bar (1,440 to 3,750 psi) operating pressure' },
    { id: 'cl2500', label: 'Class 2500 (Extreme Pressure)', desc: '250 to 420 bar (3,750 to 6,000 psi) operating pressure' },
    { id: 'api_high', label: 'API 5,000–20,000 psi (Wellhead / Ultra-High)', desc: 'High-pressure oilfield & subsea API 6A/6BX' },
  ],

  temperatures: [
    { id: 'cryo', label: 'Cryogenic (-200°C to -50°C)', desc: 'LNG, Liquid Nitrogen, Ethylene, Cryogenic process units' },
    { id: 'ambient', label: 'Ambient to Moderate (-50°C to 150°C)', desc: 'Water, cooling utilities, general hydrocarbons' },
    { id: 'medium', label: 'Steam & Process Heat (150°C to 450°C)', desc: 'High-pressure steam headers, refining cracking units' },
    { id: 'high', label: 'High Temperature (450°C to 650°C)', desc: 'Petrochemical heaters, exhaust manifolds, gas turbines' },
    { id: 'extreme', label: 'Ultra-High / Flue Gas (650°C to 1000°C+)', desc: 'Syngas, thermal oxidizers, aerospace, severe thermal cycling' },
  ],

  mediaTypes: [
    { id: 'general', label: 'General Service (Water, Steam, Air, Inert Gas)', desc: 'Standard non-hazardous utilities and cooling fluids' },
    { id: 'hydrocarbon', label: 'Hydrocarbons, Fuel & Crude Oil', desc: 'Refinery distillates, natural gas, volatile condensates' },
    { id: 'corrosive', label: 'Aggressive Chemicals & Strong Acids', desc: 'Nitric, Sulfuric, Chlorine, Caustics, acidic reagents' },
    { id: 'low_emission', label: 'Strict Low-Fugitive Emissions (TA-Luft / API 622)', desc: 'Zero VOC leakage tolerance, hazardous air pollutants' },
    { id: 'thermal_cycling', label: 'Severe Thermal Cycling & Vibration', desc: 'Heat exchangers, cycling reactors, pulsation lines' },
    { id: 'cathodic', label: 'Cathodic Isolation & Dielectric Protection', desc: 'Buried pipelines, offshore risers, electrolytic barrier' },
  ],

  flangeMaterials: [
    { id: 'carbon_steel', label: 'Carbon Steel / Alloy Steel (Standard Bolt Load)', desc: 'ASTM A105, A350, A182 high-strength piping' },
    { id: 'stainless_steel', label: 'Stainless / Duplex Steel (Standard Bolt Load)', desc: '304L, 316L, 2205 Duplex, 2507 Super Duplex' },
    { id: 'plastic_frp', label: 'FRP / PVC / Glass-Lined (Low Bolt Load)', desc: 'Brittle flange materials requiring low gasket seating stress' },
    { id: 'high_alloy', label: 'High-Nickel Alloys (Inconel, Monel, Hastelloy)', desc: 'Severe offshore, sour gas NACE MR0175 service' },
  ],
};

// Gasket Recommendations based on combination of parameters
export const gasketProfiles = [
  {
    id: 'spiral-wound-cgi',
    name: 'Spiral Wound Gasket Style CGI (with Inner & Outer Rings)',
    category: 'Semi-Metallic Gaskets',
    image: '/images/TXCO PHOTOS FOR WEBSITE/SPIRAL WOUND/STYLE CGI.png',
    href: '/products/gaskets/semi-metallic-gaskets/details?product=spiral-wound-gaskets',
    matchScore: 98,
    standards: 'ASME B16.20, API 605, DIN EN 1514-2',
    temperatureRange: '-200°C to +650°C (Graphite), -240°C to +260°C (PTFE)',
    maxPressure: 'Class 150 to Class 2500 (420 bar)',
    mFactor: '3.00',
    yStress: '10,000 psi (69 MPa)',
    recommendedMaterials: '316L Windings + Flexible Graphite filler + Carbon Steel Outer Ring + 316L Inner Ring',
    bestFor: [
      'Raised Face (RF) flanges across Class 150 through Class 2500',
      'High-pressure steam lines and severe thermal cycling',
      'Refinery hydrocarbon processing and fugitive emission compliance',
    ],
    whyRecommended:
      'Style CGI incorporates an integral centering ring for accurate alignment and a solid internal ring that prevents inward radial buckling under high bolt loads and thermal shocks. It offers exceptional elastic recovery and blow-out resistance.',
    conditionsMatch: {
      facings: ['rf', 'tg_mf'],
      pressures: ['cl150', 'cl300_600', 'cl900_1500', 'cl2500'],
      temperatures: ['cryo', 'ambient', 'medium', 'high'],
      media: ['general', 'hydrocarbon', 'low_emission', 'thermal_cycling'],
      materials: ['carbon_steel', 'stainless_steel', 'high_alloy'],
    },
  },

  {
    id: 'kammprofile-gaskets',
    name: 'Kammprofile / Camprofile Gaskets with Soft Facings',
    category: 'Semi-Metallic Gaskets',
    image: '/images/product-detials-images/Kammprofile-Gaskets.avif',
    href: '/products/gaskets/semi-metallic-gaskets/details?product=kammprofile-gaskets',
    matchScore: 99,
    standards: 'DIN EN 1514-6, ASME B16.20, Shell MESC SPE 85/203',
    temperatureRange: '-200°C to +1000°C (Mica / High-Temp Graphite)',
    maxPressure: 'Up to Class 2500 (420 bar)',
    mFactor: '2.00 – 2.50',
    yStress: '2,500 psi (17.2 MPa)',
    recommendedMaterials: 'Serrated 316L / Inconel Core + Expanded Flexible Graphite (or ePTFE) Facings',
    bestFor: [
      'Heat exchanger tube-sheet and channel cover joints',
      'Severe thermal cycling with frequent temperature excursions',
      'Low available bolt load applications requiring tight fugitive emission sealing',
    ],
    whyRecommended:
      'The precision-machined V-grooved serrated core concentrates bolt load into high-stress contact zones while the soft facing seals micro-imperfections. Requires dramatically lower seating stress than spiral wound gaskets and cannot blow out.',
    conditionsMatch: {
      facings: ['rf', 'tg_mf', 'ff'],
      pressures: ['cl150', 'cl300_600', 'cl900_1500', 'cl2500'],
      temperatures: ['cryo', 'ambient', 'medium', 'high', 'extreme'],
      media: ['general', 'hydrocarbon', 'low_emission', 'thermal_cycling', 'corrosive'],
      materials: ['carbon_steel', 'stainless_steel', 'high_alloy'],
    },
  },

  {
    id: 'rtj-r-octagonal',
    name: 'Ring Type Joint (RTJ) Gasket — Style R Octagonal',
    category: 'Metallic Gaskets',
    image: '/images/TXCO PHOTOS FOR WEBSITE/RTJ/RTJ- R OCTOGONAL.png',
    href: '/products/gaskets/metallic-gaskets/details?product=ring-type-joint-rtj',
    matchScore: 100,
    standards: 'ASME B16.20, API Spec 6A, ISO 10423',
    temperatureRange: '-200°C to +1000°C (Metallurgy dependent)',
    maxPressure: 'Class 300 to Class 2500 / API up to 5,000 psi',
    mFactor: '5.50 – 6.50',
    yStress: '18,000 – 26,000 psi',
    recommendedMaterials: 'Soft Iron (Max 90 HB), Low Carbon Steel, SS 316L (Max 160 HB), Inconel 625',
    bestFor: [
      'Ring Type Joint (RTJ) grooved flanges in high-pressure oil & gas',
      'Refinery high-pressure cracking units and offshore production manifolds',
      'Severe pressure containment where metal-to-metal sealing is mandatory',
    ],
    whyRecommended:
      'The octagonal profile produces higher contact stress against the 23° flat-bottom flange groove than an oval shape, establishing an unyielding metal-to-metal barrier designed for extreme pressure and high mechanical vibration.',
    conditionsMatch: {
      facings: ['rtj'],
      pressures: ['cl300_600', 'cl900_1500', 'cl2500', 'api_high'],
      temperatures: ['cryo', 'ambient', 'medium', 'high', 'extreme'],
      media: ['general', 'hydrocarbon', 'low_emission', 'thermal_cycling'],
      materials: ['carbon_steel', 'stainless_steel', 'high_alloy'],
    },
  },

  {
    id: 'rtj-rx-bx',
    name: 'Pressure-Energized RTJ Gaskets — Style RX & BX Series',
    category: 'Metallic Gaskets',
    image: '/images/TXCO PHOTOS FOR WEBSITE/RTJ/RTJ -BX.png',
    href: '/products/gaskets/metallic-gaskets/details?product=ring-type-joint-rtj',
    matchScore: 100,
    standards: 'API Spec 6A (21st Ed.), API 17D Subsea, ASME B16.20',
    temperatureRange: '-200°C to +1000°C',
    maxPressure: 'API 5,000 psi to 20,000 psi (1,380 bar)',
    mFactor: '6.50',
    yStress: '26,000 psi',
    recommendedMaterials: 'AISI 4130 / SS 316 / Inconel 625 / Inconel 718 (Controlled Hardness)',
    bestFor: [
      'API 6BX wellhead and Christmas tree connections up to 20,000 psi',
      'Subsea blowout preventers (BOP) and manifold headers',
      'High-pressure exploration drilling manifolds with severe vibration',
    ],
    whyRecommended:
      'Style RX and BX gaskets utilize internal system pressure to energize the sealing faces outward into the flange grooves. Style BX incorporates through-bore vent holes to eliminate hydrostatic lock and ensure face-to-face flange preloading.',
    conditionsMatch: {
      facings: ['rtj'],
      pressures: ['api_high', 'cl2500'],
      temperatures: ['cryo', 'ambient', 'medium', 'high', 'extreme'],
      media: ['hydrocarbon', 'low_emission', 'thermal_cycling'],
      materials: ['carbon_steel', 'high_alloy'],
    },
  },

  {
    id: 'expanded-ptfe',
    name: 'Expanded PTFE (ePTFE) & Modified Sheet Gaskets',
    category: 'Non-Metallic Gaskets',
    image: '/images/TXCO PHOTOS FOR WEBSITE/NON METALLIC GASKETS/EPTFE GASKETS.png',
    href: '/products/gaskets/non-metallic-gaskets/details?product=expanded-ptfe-gaskets',
    matchScore: 97,
    standards: 'ASME B16.21, FDA 21 CFR 177.1550, TA-Luft VDI 2440',
    temperatureRange: '-240°C to +260°C (intermittent to 315°C)',
    maxPressure: 'Full Vacuum up to Class 300 (80 bar)',
    mFactor: '1.50 – 2.00',
    yStress: '1,500 – 2,500 psi (10.3 to 17.2 MPa)',
    recommendedMaterials: '100% Multidirectionally Expanded Pure Virgin PTFE',
    bestFor: [
      'Aggressive chemicals, strong mineral acids (Nitric, Sulfuric, Hydrofluoric), and alkalis',
      'Plastic, FRP, and glass-lined flanges where high bolt torque causes flange cracking',
      'Pharmaceutical, food, and ultra-pure beverage process lines',
    ],
    whyRecommended:
      'Multidirectional fibrillated structure eliminates creep relaxation and cold flow typical of standard virgin PTFE. Chemically inert across pH 0–14, seals under low bolt torque, and conforms to warped or uneven flange faces.',
    conditionsMatch: {
      facings: ['ff', 'rf', 'fragile'],
      pressures: ['cl150', 'cl300_600'],
      temperatures: ['cryo', 'ambient', 'medium'],
      media: ['corrosive', 'general', 'low_emission'],
      materials: ['plastic_frp', 'stainless_steel', 'carbon_steel'],
    },
  },

  {
    id: 'cnaf-gaskets',
    name: 'Compressed Non-Asbestos Fibre (CNAF) — TXCO Style 51 / 54 Super',
    category: 'Non-Metallic Gaskets',
    image: '/images/TXCO PHOTOS FOR WEBSITE/NON METALLIC GASKETS/CNAF/TXCO STYLE54 SUPER.png',
    href: '/products/gaskets/non-metallic-gaskets/details?product=cnaf-gaskets',
    matchScore: 92,
    standards: 'BS 7531 Grade X/Y, DIN 3754, ASME B16.21',
    temperatureRange: '-100°C to +350°C (continuous 250°C)',
    maxPressure: 'Class 150 to Class 300 (up to 100 bar)',
    mFactor: '2.50 – 3.00',
    yStress: '3,000 – 4,000 psi',
    recommendedMaterials: 'High-grade Aramid / Carbon Fibres bonded with NBR Elastomer',
    bestFor: [
      'Flat Face (FF) and Raised Face (RF) utility connections',
      'Low-pressure steam, industrial cooling water, compressed air, and inert gases',
      'Commercial HVAC, plant balance-of-plant, and general industrial pipelines',
    ],
    whyRecommended:
      'Cost-effective, highly reliable general-service sheet gasket. Provides stable torque retention and resilience against hydrocarbons, oils, and neutral fluids in moderate pressure applications.',
    conditionsMatch: {
      facings: ['ff', 'rf'],
      pressures: ['cl150', 'cl300_600'],
      temperatures: ['ambient', 'medium'],
      media: ['general', 'hydrocarbon'],
      materials: ['carbon_steel', 'stainless_steel'],
    },
  },

  {
    id: 'flange-isolation-kits',
    name: 'Flange Isolation Kits — TX-ISOPRO™ & TX-CERAMPRO™ (Cathodic Protection)',
    category: 'Flange Isolation Kits',
    image: '/images/TXCO PHOTOS FOR WEBSITE/SEMI METALLIC/FLANGE ISOLATION KIT/TX-ISOPRO.jpeg',
    href: '/products/gaskets/semi-metallic-gaskets/details?product=flange-isolation-kits',
    matchScore: 100,
    standards: 'API 6FB Fire-Safe, NACE SP0169, ISO 15589-1',
    temperatureRange: '-196°C to +1000°C (TX-CERAMPRO High-Temp)',
    maxPressure: 'Class 150 to Class 2500 / API 10,000 psi',
    mFactor: '2.50 – 3.50',
    yStress: '3,500 – 7,500 psi',
    recommendedMaterials: 'G10 / G11 / Nomex / Ceramic core with Spring-Energized PTFE or Viton seal, Mylar/G10 sleeves, G10 washers',
    bestFor: [
      'Cathodic protection and dielectric isolation in underground/cross-country pipelines',
      'Offshore riser joints and dissimilar metal flanges (e.g. Stainless to Carbon Steel)',
      'Fire-safe API 6FB applications requiring complete electrical isolation and zero blow-out risk',
    ],
    whyRecommended:
      'Breaks the electrical continuity between mating flanges to stop galvanic and electrolytic corrosion. Includes high-dielectric insulating gasket, full-length bolt sleeves, and dual isolating washers engineered to withstand up to 1000°C.',
    conditionsMatch: {
      facings: ['rf', 'ff', 'rtj'],
      pressures: ['cl150', 'cl300_600', 'cl900_1500', 'cl2500', 'api_high'],
      temperatures: ['cryo', 'ambient', 'medium', 'high', 'extreme'],
      media: ['cathodic', 'hydrocarbon', 'general'],
      materials: ['carbon_steel', 'stainless_steel', 'high_alloy'],
    },
  },
];

// Quick application presets for one-click discovery
export const quickPresets = [
  {
    title: 'High-Pressure Steam Header',
    description: '400°C Superheated Steam, Class 600 RF',
    params: { facing: 'rf', pressure: 'cl300_600', temp: 'medium', media: 'general', material: 'carbon_steel' },
  },
  {
    title: 'Cryogenic LNG Service',
    description: '-165°C LNG, Class 300 RF Flange',
    params: { facing: 'rf', pressure: 'cl300_600', temp: 'cryo', media: 'hydrocarbon', material: 'stainless_steel' },
  },
  {
    title: 'Corrosive Chemical Acid Line',
    description: 'Hot Nitric/Sulfuric Acid, Class 150 RF',
    params: { facing: 'rf', pressure: 'cl150', temp: 'medium', media: 'corrosive', material: 'stainless_steel' },
  },
  {
    title: 'Severe Thermal Heat Exchanger',
    description: '550°C Thermal Cycling, Class 900 RF',
    params: { facing: 'rf', pressure: 'cl900_1500', temp: 'high', media: 'thermal_cycling', material: 'carbon_steel' },
  },
  {
    title: 'Oilfield Wellhead API 10K',
    description: '10,000 psi Wellhead, RTJ BX Flange',
    params: { facing: 'rtj', pressure: 'api_high', temp: 'medium', media: 'hydrocarbon', material: 'carbon_steel' },
  },
  {
    title: 'Pipeline Cathodic Isolation',
    description: 'Class 600 Cross-Country Gas Pipeline',
    params: { facing: 'rf', pressure: 'cl300_600', temp: 'ambient', media: 'cathodic', material: 'carbon_steel' },
  },
];

// 2. Comprehensive RTJ Size Selection & Dimension Database
export const rtjStandards = [
  { id: 'asme_b16_5', name: 'ASME B16.5', desc: 'Pipe Flanges & Flanged Fittings (NPS 1/2" to 24")' },
  { id: 'api_6b', name: 'API 6B', desc: 'Wellhead & Tree Equipment Flanges (720 to 5,000 psi)' },
  { id: 'api_6bx', name: 'API 6BX', desc: 'Extreme High-Pressure Wellhead Equipment (2,000 to 20,000 psi)' },
  { id: 'asme_b16_47_a', name: 'ASME B16.47 Series A', desc: 'Large Diameter Steel Flanges (NPS 26" to 36")' },
];

export const rtjPressureClassesByStandard = {
  asme_b16_5: [
    { id: 'cl150', name: 'Class 150' },
    { id: 'cl300_600', name: 'Class 300–600' },
    { id: 'cl900', name: 'Class 900' },
    { id: 'cl1500', name: 'Class 1500' },
    { id: 'cl2500', name: 'Class 2500' },
  ],
  api_6b: [
    { id: 'psi_720_960', name: '720–960 psi' },
    { id: 'psi_2000', name: '2,000 psi' },
    { id: 'psi_2900', name: '2,900 psi' },
    { id: 'psi_3000', name: '3,000 psi' },
    { id: 'psi_5000', name: '5,000 psi' },
  ],
  api_6bx: [
    { id: 'bx_2000', name: '2,000 psi' },
    { id: 'bx_3000', name: '3,000 psi' },
    { id: 'bx_5000', name: '5,000 psi' },
    { id: 'bx_10000', name: '10,000 psi' },
    { id: 'bx_15000', name: '15,000 psi' },
    { id: 'bx_20000', name: '20,000 psi' },
  ],
  asme_b16_47_a: [
    { id: 'b1647_300_600', name: 'Class 300–600' },
    { id: 'b1647_900', name: 'Class 900' },
  ],
};

export const rtjGasketTypesByStandardAndClass = {
  asme_b16_5: ['r_oval', 'r_octagonal'],
  api_6b: {
    psi_720_960: ['r_oval', 'r_octagonal', 'rx'],
    psi_2000: ['r_oval', 'r_octagonal'],
    psi_2900: ['rx'],
    psi_3000: ['r_oval', 'r_octagonal', 'rx'],
    psi_5000: ['r_oval', 'r_octagonal', 'rx'],
  },
  api_6bx: ['bx'],
  asme_b16_47_a: ['r_oval', 'r_octagonal'],
};

// Size to Ring Number Mapping
export const rtjSizeMapping = {
  asme_b16_5: {
    cl150: [
      { size: '1"', ring: 'R-15' },
      { size: '1¼"', ring: 'R-17' },
      { size: '1½"', ring: 'R-19' },
      { size: '2"', ring: 'R-22' },
      { size: '2½"', ring: 'R-25' },
      { size: '3"', ring: 'R-29' },
      { size: '3½"', ring: 'R-33' },
      { size: '4"', ring: 'R-36' },
      { size: '5"', ring: 'R-40' },
      { size: '6"', ring: 'R-43' },
      { size: '8"', ring: 'R-48' },
      { size: '10"', ring: 'R-52' },
      { size: '12"', ring: 'R-56' },
      { size: '14"', ring: 'R-59' },
      { size: '16"', ring: 'R-64' },
      { size: '18"', ring: 'R-68' },
      { size: '20"', ring: 'R-72' },
      { size: '24"', ring: 'R-76' },
    ],
    cl300_600: [
      { size: '½"', ring: 'R-11' },
      { size: '¾"', ring: 'R-13' },
      { size: '1"', ring: 'R-16' },
      { size: '1¼"', ring: 'R-18' },
      { size: '1½"', ring: 'R-20' },
      { size: '2"', ring: 'R-23' },
      { size: '2½"', ring: 'R-26' },
      { size: '3"', ring: 'R-30' },
      { size: '3½"', ring: 'R-34' },
      { size: '4"', ring: 'R-37' },
      { size: '5"', ring: 'R-41' },
      { size: '6"', ring: 'R-45' },
      { size: '8"', ring: 'R-49' },
      { size: '10"', ring: 'R-53' },
      { size: '12"', ring: 'R-57' },
      { size: '14"', ring: 'R-61' },
      { size: '16"', ring: 'R-65' },
      { size: '18"', ring: 'R-69' },
      { size: '20"', ring: 'R-73' },
      { size: '24"', ring: 'R-77' },
    ],
    cl900: [
      { size: '1"', ring: 'R-16' },
      { size: '3"', ring: 'R-31' },
      { size: '4"', ring: 'R-37' },
      { size: '5"', ring: 'R-41' },
      { size: '6"', ring: 'R-45' },
      { size: '8"', ring: 'R-49' },
      { size: '10"', ring: 'R-53' },
      { size: '12"', ring: 'R-57' },
      { size: '14"', ring: 'R-62' },
      { size: '16"', ring: 'R-66' },
      { size: '18"', ring: 'R-70' },
      { size: '20"', ring: 'R-74' },
      { size: '24"', ring: 'R-78' },
    ],
    cl1500: [
      { size: '½"', ring: 'R-12' },
      { size: '¾"', ring: 'R-14' },
      { size: '1"', ring: 'R-16' },
      { size: '1¼"', ring: 'R-18' },
      { size: '1½"', ring: 'R-20' },
      { size: '2"', ring: 'R-24' },
      { size: '2½"', ring: 'R-27' },
      { size: '3"', ring: 'R-35' },
      { size: '4"', ring: 'R-39' },
      { size: '5"', ring: 'R-44' },
      { size: '6"', ring: 'R-46' },
      { size: '8"', ring: 'R-50' },
      { size: '10"', ring: 'R-54' },
      { size: '12"', ring: 'R-58' },
      { size: '14"', ring: 'R-63' },
      { size: '16"', ring: 'R-67' },
      { size: '18"', ring: 'R-71' },
      { size: '20"', ring: 'R-75' },
      { size: '24"', ring: 'R-79' },
    ],
    cl2500: [
      { size: '½"', ring: 'R-12' },
      { size: '¾"', ring: 'R-16' },
      { size: '1"', ring: 'R-18' },
      { size: '1¼"', ring: 'R-21' },
      { size: '1½"', ring: 'R-23' },
      { size: '2"', ring: 'R-26' },
      { size: '2½"', ring: 'R-28' },
      { size: '3"', ring: 'R-32' },
      { size: '4"', ring: 'R-38' },
      { size: '5"', ring: 'R-42' },
      { size: '6"', ring: 'R-47' },
      { size: '8"', ring: 'R-51' },
      { size: '10"', ring: 'R-55' },
      { size: '12"', ring: 'R-60' },
    ],
  },

  api_6b: {
    psi_720_960: {
      r_type: [
        { size: '1"', ring: 'R-16' },
        { size: '1¼"', ring: 'R-18' },
        { size: '1½"', ring: 'R-20' },
        { size: '2"', ring: 'R-23' },
        { size: '2½"', ring: 'R-26' },
        { size: '3"', ring: 'R-31' },
        { size: '4"', ring: 'R-37' },
        { size: '5"', ring: 'R-41' },
        { size: '6"', ring: 'R-45' },
        { size: '8"', ring: 'R-49' },
        { size: '10"', ring: 'R-53' },
        { size: '12"', ring: 'R-57' },
        { size: '14"', ring: 'R-61' },
        { size: '16"', ring: 'R-65' },
        { size: '18"', ring: 'R-69' },
        { size: '20"', ring: 'R-73' },
      ],
      rx_type: [
        { size: '1½"', ring: 'RX-20' },
        { size: '2"', ring: 'RX-23' },
        { size: '2½"', ring: 'RX-26' },
        { size: '3"', ring: 'RX-31' },
        { size: '4"', ring: 'RX-37' },
        { size: '5"', ring: 'RX-41' },
        { size: '6"', ring: 'RX-45' },
        { size: '8"', ring: 'RX-49' },
        { size: '10"', ring: 'RX-53' },
        { size: '12"', ring: 'RX-57' },
        { size: '16"', ring: 'RX-65' },
        { size: '18"', ring: 'RX-69' },
        { size: '20"', ring: 'RX-73' },
      ],
    },
    psi_2000: [
      { size: '1"', ring: 'R-16' },
      { size: '1¼"', ring: 'R-18' },
      { size: '1½"', ring: 'R-20' },
      { size: '2"', ring: 'R-23' },
      { size: '2½"', ring: 'R-26' },
      { size: '3"', ring: 'R-31' },
      { size: '4"', ring: 'R-37' },
      { size: '5"', ring: 'R-41' },
      { size: '6"', ring: 'R-45' },
      { size: '8"', ring: 'R-49' },
      { size: '10"', ring: 'R-53' },
      { size: '12"', ring: 'R-57' },
      { size: '14"', ring: 'R-61' },
      { size: '16"', ring: 'R-65' },
      { size: '18"', ring: 'R-69' },
      { size: '20"', ring: 'R-73' },
    ],
    psi_2900: [
      { size: '1"', ring: 'RX-82' },
      { size: '1½"', ring: 'RX-84' },
      { size: '2"', ring: 'RX-85' },
      { size: '2½"', ring: 'RX-86' },
      { size: '3"', ring: 'RX-87' },
      { size: '3½"', ring: 'RX-89' },
      { size: '4"', ring: 'RX-88' },
      { size: '5"', ring: 'RX-90' },
      { size: '8"', ring: 'RX-99' },
      { size: '10"', ring: 'RX-91' },
    ],
    psi_3000: {
      r_type: [
        { size: '1"', ring: 'R-16' },
        { size: '1¼"', ring: 'R-18' },
        { size: '1½"', ring: 'R-20' },
        { size: '2"', ring: 'R-24' },
        { size: '2½"', ring: 'R-27' },
        { size: '3"', ring: 'R-31' },
        { size: '4"', ring: 'R-37' },
        { size: '5"', ring: 'R-41' },
        { size: '6"', ring: 'R-45' },
        { size: '8"', ring: 'R-49' },
        { size: '10"', ring: 'R-53' },
        { size: '12"', ring: 'R-57' },
        { size: '14"', ring: 'R-61' },
        { size: '16"', ring: 'R-66' },
        { size: '18"', ring: 'R-70' },
        { size: '20"', ring: 'R-74' },
      ],
      rx_type: [
        { size: '1½"', ring: 'RX-20' },
        { size: '2"', ring: 'RX-24' },
        { size: '2½"', ring: 'RX-27' },
        { size: '3"', ring: 'RX-31' },
        { size: '4"', ring: 'RX-37' },
        { size: '5"', ring: 'RX-41' },
        { size: '6"', ring: 'RX-45' },
        { size: '8"', ring: 'RX-49' },
        { size: '10"', ring: 'RX-53' },
        { size: '12"', ring: 'RX-57' },
        { size: '16"', ring: 'RX-66' },
        { size: '18"', ring: 'RX-70' },
        { size: '20"', ring: 'RX-74' },
      ],
    },
    psi_5000: {
      r_type: [
        { size: '1"', ring: 'R-16 / R-82' },
        { size: '1¼"', ring: 'R-18' },
        { size: '1½"', ring: 'R-20 / R-84' },
        { size: '2"', ring: 'R-24 / R-85' },
        { size: '2½"', ring: 'R-27 / R-86' },
        { size: '3"', ring: 'R-35 / R-87' },
        { size: '3½"', ring: 'R-37 / R-89' },
        { size: '4"', ring: 'R-39 / R-88' },
        { size: '5"', ring: 'R-44 / R-90' },
        { size: '6"', ring: 'R-46' },
        { size: '8"', ring: 'R-50' },
        { size: '10"', ring: 'R-54 / R-91' },
      ],
      rx_type: [
        { size: '1⅜"', ring: 'RX-201' },
        { size: '1 13/16"', ring: 'RX-205' },
        { size: '2 9/16"', ring: 'RX-210' },
        { size: '3"', ring: 'RX-35' },
        { size: '3⅛"', ring: 'RX-25' },
        { size: '4"', ring: 'RX-39' },
        { size: '4 1/16"', ring: 'RX-215' },
        { size: '5"', ring: 'RX-44' },
        { size: '6"', ring: 'RX-46' },
        { size: '8"', ring: 'RX-50 (or RX-47)' },
        { size: '10"', ring: 'RX-54' },
        { size: '14"', ring: 'RX-63' },
      ],
    },
  },

  api_6bx: {
    bx_2000: [
      { size: '26¾"', ring: 'BX-167' },
      { size: '30"', ring: 'BX-303' },
    ],
    bx_3000: [
      { size: '26¾"', ring: 'BX-168' },
      { size: '30"', ring: 'BX-303' },
    ],
    bx_5000: [
      { size: '13⅝"', ring: 'BX-160' },
      { size: '16¾"', ring: 'BX-161 / BX-162' },
      { size: '18¾"', ring: 'BX-163' },
      { size: '21¼"', ring: 'BX-165' },
    ],
    bx_10000: [
      { size: '1 11/16"', ring: 'BX-150' },
      { size: '1 13/16"', ring: 'BX-151' },
      { size: '2 1/16"', ring: 'BX-152' },
      { size: '2 9/16"', ring: 'BX-153' },
      { size: '3 1/16"', ring: 'BX-154' },
      { size: '4 1/16"', ring: 'BX-155' },
      { size: '5 1/8"', ring: 'BX-169' },
      { size: '6 5/8"', ring: 'BX-170' },
      { size: '7 1/16"', ring: 'BX-156' },
      { size: '8 9/16"', ring: 'BX-171' },
      { size: '9"', ring: 'BX-157' },
      { size: '11"', ring: 'BX-158' },
      { size: '11 5/32"', ring: 'BX-172' },
      { size: '13⅝"', ring: 'BX-159' },
      { size: '16¾"', ring: 'BX-162' },
      { size: '18¾"', ring: 'BX-164' },
      { size: '21¼"', ring: 'BX-166' },
    ],
    bx_15000: [
      { size: '1 11/16"', ring: 'BX-150' },
      { size: '1 13/16"', ring: 'BX-151' },
      { size: '2 1/16"', ring: 'BX-152' },
      { size: '2 9/16"', ring: 'BX-153' },
      { size: '3 1/16"', ring: 'BX-154' },
      { size: '4 1/16"', ring: 'BX-155' },
      { size: '6 5/8"', ring: 'BX-170' },
      { size: '7 1/16"', ring: 'BX-156' },
      { size: '8 9/16"', ring: 'BX-171' },
      { size: '9"', ring: 'BX-157' },
      { size: '11"', ring: 'BX-158' },
      { size: '11 5/32"', ring: 'BX-172' },
      { size: '13⅝"', ring: 'BX-159' },
      { size: '16¾"', ring: 'BX-162' },
      { size: '18¾"', ring: 'BX-164' },
    ],
    bx_20000: [
      { size: '1 13/16"', ring: 'BX-151' },
      { size: '2 1/16"', ring: 'BX-152' },
      { size: '2 9/16"', ring: 'BX-153' },
      { size: '3 1/16"', ring: 'BX-154' },
      { size: '4 1/16"', ring: 'BX-155' },
      { size: '7 1/16"', ring: 'BX-156' },
      { size: '9"', ring: 'BX-157' },
      { size: '11"', ring: 'BX-158' },
      { size: '13⅝"', ring: 'BX-159' },
    ],
  },

  asme_b16_47_a: {
    b1647_300_600: [
      { size: '26"', ring: 'R-93' },
      { size: '28"', ring: 'R-94' },
      { size: '30"', ring: 'R-95' },
      { size: '32"', ring: 'R-96' },
      { size: '34"', ring: 'R-97' },
      { size: '36"', ring: 'R-98' },
    ],
    b1647_900: [
      { size: '26"', ring: 'R-100' },
      { size: '28"', ring: 'R-101' },
      { size: '30"', ring: 'R-102' },
      { size: '32"', ring: 'R-103' },
      { size: '34"', ring: 'R-104' },
      { size: '36"', ring: 'R-105' },
    ],
  },
};

// 3. Complete Dimension Master Tables
export const rTypeDimensions = {
  'R-11': { p_in: '1.344', p_mm: '34.14', a_in: '0.250', a_mm: '6.35', b_in: '0.440', b_mm: '11.2', h_in: '0.380', h_mm: '9.7', c_in: '0.170', c_mm: '4.32', r1_in: '0.060', r1_mm: '1.5' },
  'R-12': { p_in: '1.563', p_mm: '39.70', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-13': { p_in: '1.688', p_mm: '42.88', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-14': { p_in: '1.750', p_mm: '44.45', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-15': { p_in: '1.875', p_mm: '47.63', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-16': { p_in: '2.000', p_mm: '50.80', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-17': { p_in: '2.250', p_mm: '57.15', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-18': { p_in: '2.375', p_mm: '60.33', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-19': { p_in: '2.563', p_mm: '65.10', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-20': { p_in: '2.688', p_mm: '68.28', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-21': { p_in: '2.844', p_mm: '72.24', a_in: '0.438', a_mm: '11.13', b_in: '0.690', b_mm: '17.5', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-22': { p_in: '3.250', p_mm: '82.55', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-23': { p_in: '3.250', p_mm: '82.55', a_in: '0.438', a_mm: '11.13', b_in: '0.690', b_mm: '17.5', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-24': { p_in: '3.750', p_mm: '95.25', a_in: '0.438', a_mm: '11.13', b_in: '0.690', b_mm: '17.5', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-25': { p_in: '4.000', p_mm: '101.60', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-26': { p_in: '4.000', p_mm: '101.60', a_in: '0.438', a_mm: '11.13', b_in: '0.690', b_mm: '17.5', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-27': { p_in: '4.250', p_mm: '107.95', a_in: '0.438', a_mm: '11.13', b_in: '0.690', b_mm: '17.5', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-28': { p_in: '4.375', p_mm: '111.13', a_in: '0.500', a_mm: '12.70', b_in: '0.750', b_mm: '19.1', h_in: '0.690', h_mm: '17.5', c_in: '0.341', c_mm: '8.66', r1_in: '0.060', r1_mm: '1.5' },
  'R-29': { p_in: '4.500', p_mm: '114.30', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-30': { p_in: '4.625', p_mm: '117.48', a_in: '0.438', a_mm: '11.13', b_in: '0.690', b_mm: '17.5', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-31': { p_in: '4.875', p_mm: '123.83', a_in: '0.438', a_mm: '11.13', b_in: '0.690', b_mm: '17.5', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-32': { p_in: '5.000', p_mm: '127.00', a_in: '0.500', a_mm: '12.70', b_in: '0.750', b_mm: '19.1', h_in: '0.690', h_mm: '17.5', c_in: '0.341', c_mm: '8.66', r1_in: '0.060', r1_mm: '1.5' },
  'R-33': { p_in: '5.188', p_mm: '131.78', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-34': { p_in: '5.188', p_mm: '131.78', a_in: '0.438', a_mm: '11.13', b_in: '0.690', b_mm: '17.5', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-35': { p_in: '5.375', p_mm: '136.53', a_in: '0.438', a_mm: '11.13', b_in: '0.690', b_mm: '17.5', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-36': { p_in: '5.875', p_mm: '149.23', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-37': { p_in: '5.875', p_mm: '149.23', a_in: '0.438', a_mm: '11.13', b_in: '0.690', b_mm: '17.5', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-38': { p_in: '6.188', p_mm: '157.18', a_in: '0.625', a_mm: '15.88', b_in: '0.880', b_mm: '22.4', h_in: '0.810', h_mm: '20.6', c_in: '0.413', c_mm: '10.49', r1_in: '0.060', r1_mm: '1.5' },
  'R-39': { p_in: '6.375', p_mm: '161.93', a_in: '0.438', a_mm: '11.13', b_in: '0.690', b_mm: '17.5', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-40': { p_in: '6.750', p_mm: '171.45', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-41': { p_in: '7.125', p_mm: '180.98', a_in: '0.438', a_mm: '11.13', b_in: '0.690', b_mm: '17.5', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-42': { p_in: '7.500', p_mm: '190.50', a_in: '0.750', a_mm: '19.05', b_in: '1.000', b_mm: '25.4', h_in: '0.940', h_mm: '23.9', c_in: '0.485', c_mm: '12.32', r1_in: '0.060', r1_mm: '1.5' },
  'R-43': { p_in: '7.625', p_mm: '193.68', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-44': { p_in: '7.625', p_mm: '193.68', a_in: '0.438', a_mm: '11.13', b_in: '0.690', b_mm: '17.5', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-45': { p_in: '8.313', p_mm: '211.15', a_in: '0.438', a_mm: '11.13', b_in: '0.690', b_mm: '17.5', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-46': { p_in: '8.313', p_mm: '211.15', a_in: '0.500', a_mm: '12.70', b_in: '0.750', b_mm: '19.1', h_in: '0.690', h_mm: '17.5', c_in: '0.341', c_mm: '8.66', r1_in: '0.060', r1_mm: '1.5' },
  'R-47': { p_in: '9.000', p_mm: '228.60', a_in: '0.750', a_mm: '19.05', b_in: '1.000', b_mm: '25.4', h_in: '0.940', h_mm: '23.9', c_in: '0.485', c_mm: '12.32', r1_in: '0.060', r1_mm: '1.5' },
  'R-48': { p_in: '9.750', p_mm: '247.65', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-49': { p_in: '10.625', p_mm: '269.88', a_in: '0.438', a_mm: '11.13', b_in: '0.690', b_mm: '17.5', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-50': { p_in: '10.625', p_mm: '269.88', a_in: '0.625', a_mm: '15.88', b_in: '0.880', b_mm: '22.4', h_in: '0.810', h_mm: '20.6', c_in: '0.413', c_mm: '10.49', r1_in: '0.060', r1_mm: '1.5' },
  'R-51': { p_in: '11.000', p_mm: '279.40', a_in: '0.875', a_mm: '22.23', b_in: '1.130', b_mm: '28.7', h_in: '1.060', h_mm: '26.9', c_in: '0.583', c_mm: '14.81', r1_in: '0.060', r1_mm: '1.5' },
  'R-52': { p_in: '12.000', p_mm: '304.80', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-53': { p_in: '12.750', p_mm: '323.85', a_in: '0.438', a_mm: '11.13', b_in: '0.690', b_mm: '17.5', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-54': { p_in: '12.750', p_mm: '323.85', a_in: '0.625', a_mm: '15.88', b_in: '0.880', b_mm: '22.4', h_in: '0.810', h_mm: '20.6', c_in: '0.413', c_mm: '10.49', r1_in: '0.060', r1_mm: '1.5' },
  'R-55': { p_in: '13.500', p_mm: '342.90', a_in: '1.125', a_mm: '28.58', b_in: '1.440', b_mm: '36.6', h_in: '1.380', h_mm: '35.1', c_in: '0.750', c_mm: '19.05', r1_in: '0.090', r1_mm: '2.3' },
  'R-56': { p_in: '15.000', p_mm: '381.00', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-57': { p_in: '15.000', p_mm: '381.00', a_in: '0.438', a_mm: '11.13', b_in: '0.690', b_mm: '17.5', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-58': { p_in: '15.000', p_mm: '381.00', a_in: '0.875', a_mm: '22.23', b_in: '1.130', b_mm: '28.7', h_in: '1.060', h_mm: '26.9', c_in: '0.583', c_mm: '14.81', r1_in: '0.060', r1_mm: '1.5' },
  'R-59': { p_in: '15.625', p_mm: '396.88', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-60': { p_in: '16.000', p_mm: '406.40', a_in: '1.250', a_mm: '31.75', b_in: '1.560', b_mm: '39.6', h_in: '1.500', h_mm: '38.1', c_in: '0.879', c_mm: '22.33', r1_in: '0.090', r1_mm: '2.3' },
  'R-61': { p_in: '16.500', p_mm: '419.10', a_in: '0.438', a_mm: '11.13', b_in: '0.690', b_mm: '17.5', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-62': { p_in: '16.500', p_mm: '419.10', a_in: '0.625', a_mm: '15.88', b_in: '0.880', b_mm: '22.4', h_in: '0.810', h_mm: '20.6', c_in: '0.413', c_mm: '10.49', r1_in: '0.060', r1_mm: '1.5' },
  'R-63': { p_in: '16.500', p_mm: '419.10', a_in: '1.000', a_mm: '25.40', b_in: '1.310', b_mm: '33.3', h_in: '1.250', h_mm: '31.8', c_in: '0.681', c_mm: '17.30', r1_in: '0.090', r1_mm: '2.3' },
  'R-64': { p_in: '17.875', p_mm: '454.03', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-65': { p_in: '18.500', p_mm: '469.90', a_in: '0.438', a_mm: '11.13', b_in: '0.690', b_mm: '17.5', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-66': { p_in: '18.500', p_mm: '469.90', a_in: '0.625', a_mm: '15.88', b_in: '0.880', b_mm: '22.4', h_in: '0.810', h_mm: '20.6', c_in: '0.413', c_mm: '10.49', r1_in: '0.060', r1_mm: '1.5' },
  'R-67': { p_in: '18.500', p_mm: '469.90', a_in: '1.125', a_mm: '28.58', b_in: '1.440', b_mm: '36.6', h_in: '1.380', h_mm: '35.1', c_in: '0.780', c_mm: '19.81', r1_in: '0.090', r1_mm: '2.3' },
  'R-68': { p_in: '20.375', p_mm: '517.53', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-69': { p_in: '21.000', p_mm: '533.40', a_in: '0.438', a_mm: '11.13', b_in: '0.690', b_mm: '17.5', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-70': { p_in: '21.000', p_mm: '533.40', a_in: '0.750', a_mm: '19.05', b_in: '1.000', b_mm: '25.4', h_in: '0.940', h_mm: '23.9', c_in: '0.485', c_mm: '12.32', r1_in: '0.060', r1_mm: '1.5' },
  'R-71': { p_in: '21.000', p_mm: '533.40', a_in: '1.125', a_mm: '28.58', b_in: '1.440', b_mm: '36.6', h_in: '1.380', h_mm: '35.1', c_in: '0.780', c_mm: '19.81', r1_in: '0.090', r1_mm: '2.3' },
  'R-72': { p_in: '22.000', p_mm: '558.80', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-73': { p_in: '23.000', p_mm: '584.20', a_in: '0.500', a_mm: '12.70', b_in: '0.750', b_mm: '19.1', h_in: '0.690', h_mm: '17.5', c_in: '0.341', c_mm: '8.66', r1_in: '0.060', r1_mm: '1.5' },
  'R-74': { p_in: '23.000', p_mm: '584.20', a_in: '0.750', a_mm: '19.05', b_in: '1.000', b_mm: '25.4', h_in: '0.940', h_mm: '23.9', c_in: '0.485', c_mm: '12.32', r1_in: '0.060', r1_mm: '1.5' },
  'R-75': { p_in: '23.000', p_mm: '584.20', a_in: '1.250', a_mm: '31.75', b_in: '1.560', b_mm: '39.6', h_in: '1.500', h_mm: '38.1', c_in: '0.879', c_mm: '22.33', r1_in: '0.090', r1_mm: '2.3' },
  'R-76': { p_in: '26.500', p_mm: '673.10', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-77': { p_in: '27.250', p_mm: '692.15', a_in: '0.625', a_mm: '15.88', b_in: '0.880', b_mm: '22.4', h_in: '0.810', h_mm: '20.6', c_in: '0.413', c_mm: '10.49', r1_in: '0.060', r1_mm: '1.5' },
  'R-78': { p_in: '27.250', p_mm: '692.15', a_in: '1.000', a_mm: '25.40', b_in: '1.310', b_mm: '33.3', h_in: '1.250', h_mm: '31.8', c_in: '0.681', c_mm: '17.30', r1_in: '0.090', r1_mm: '2.3' },
  'R-79': { p_in: '27.250', p_mm: '692.15', a_in: '1.375', a_mm: '34.93', b_in: '1.750', b_mm: '44.5', h_in: '1.630', h_mm: '41.4', c_in: '0.977', c_mm: '24.82', r1_in: '0.090', r1_mm: '2.3' },
  'R-80': { p_in: '24.250', p_mm: '615.95', a_in: '0.313', a_mm: '7.95', b_in: '0.560', b_mm: '14.2', h_in: '0.500', h_mm: '12.7', c_in: '0.206', c_mm: '5.23', r1_in: '0.060', r1_mm: '1.5' },
  'R-81': { p_in: '25.000', p_mm: '635.00', a_in: '0.563', a_mm: '14.30', b_in: '—', b_mm: '—', h_in: '0.750', h_mm: '19.1', c_in: '0.377', c_mm: '9.58', r1_in: '0.060', r1_mm: '1.5' },
  'R-82': { p_in: '2.250', p_mm: '57.15', a_in: '0.438', a_mm: '11.13', b_in: '—', b_mm: '—', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-84': { p_in: '2.500', p_mm: '63.50', a_in: '0.438', a_mm: '11.13', b_in: '—', b_mm: '—', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-85': { p_in: '3.125', p_mm: '79.38', a_in: '0.500', a_mm: '12.70', b_in: '—', b_mm: '—', h_in: '0.690', h_mm: '17.5', c_in: '0.341', c_mm: '8.66', r1_in: '0.060', r1_mm: '1.5' },
  'R-86': { p_in: '3.563', p_mm: '90.50', a_in: '0.625', a_mm: '15.88', b_in: '—', b_mm: '—', h_in: '0.810', h_mm: '20.6', c_in: '0.413', c_mm: '10.49', r1_in: '0.060', r1_mm: '1.5' },
  'R-87': { p_in: '3.938', p_mm: '100.03', a_in: '0.625', a_mm: '15.88', b_in: '—', b_mm: '—', h_in: '0.810', h_mm: '20.6', c_in: '0.413', c_mm: '10.49', r1_in: '0.060', r1_mm: '1.5' },
  'R-88': { p_in: '4.875', p_mm: '123.83', a_in: '0.750', a_mm: '19.05', b_in: '—', b_mm: '—', h_in: '0.940', h_mm: '23.9', c_in: '0.485', c_mm: '12.32', r1_in: '0.060', r1_mm: '1.5' },
  'R-89': { p_in: '4.500', p_mm: '114.30', a_in: '0.750', a_mm: '19.05', b_in: '—', b_mm: '—', h_in: '0.940', h_mm: '23.9', c_in: '0.485', c_mm: '12.32', r1_in: '0.060', r1_mm: '1.5' },
  'R-90': { p_in: '6.125', p_mm: '155.58', a_in: '0.875', a_mm: '22.23', b_in: '—', b_mm: '—', h_in: '1.060', h_mm: '26.9', c_in: '0.583', c_mm: '14.81', r1_in: '0.060', r1_mm: '1.5' },
  'R-91': { p_in: '10.250', p_mm: '260.35', a_in: '1.250', a_mm: '31.75', b_in: '—', b_mm: '—', h_in: '1.500', h_mm: '38.1', c_in: '0.879', c_mm: '22.33', r1_in: '0.060', r1_mm: '1.5' },
  'R-92': { p_in: '9.000', p_mm: '228.60', a_in: '0.438', a_mm: '11.13', b_in: '0.690', b_mm: '17.5', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-93': { p_in: '29.500', p_mm: '749.30', a_in: '0.750', a_mm: '19.05', b_in: '—', b_mm: '—', h_in: '0.940', h_mm: '23.9', c_in: '0.485', c_mm: '12.32', r1_in: '0.060', r1_mm: '1.5' },
  'R-94': { p_in: '31.500', p_mm: '800.10', a_in: '0.750', a_mm: '19.05', b_in: '—', b_mm: '—', h_in: '0.940', h_mm: '23.9', c_in: '0.485', c_mm: '12.32', r1_in: '0.060', r1_mm: '1.5' },
  'R-95': { p_in: '33.750', p_mm: '857.25', a_in: '0.750', a_mm: '19.05', b_in: '—', b_mm: '—', h_in: '0.940', h_mm: '23.9', c_in: '0.485', c_mm: '12.32', r1_in: '0.060', r1_mm: '1.5' },
  'R-96': { p_in: '36.000', p_mm: '914.40', a_in: '0.875', a_mm: '22.23', b_in: '—', b_mm: '—', h_in: '1.060', h_mm: '26.9', c_in: '0.583', c_mm: '14.81', r1_in: '0.060', r1_mm: '1.5' },
  'R-97': { p_in: '38.000', p_mm: '965.20', a_in: '0.875', a_mm: '22.23', b_in: '—', b_mm: '—', h_in: '1.060', h_mm: '26.9', c_in: '0.583', c_mm: '14.81', r1_in: '0.060', r1_mm: '1.5' },
  'R-98': { p_in: '40.250', p_mm: '1022.35', a_in: '0.875', a_mm: '22.23', b_in: '—', b_mm: '—', h_in: '1.060', h_mm: '26.9', c_in: '0.583', c_mm: '14.81', r1_in: '0.060', r1_mm: '1.5' },
  'R-99': { p_in: '9.250', p_mm: '234.95', a_in: '0.438', a_mm: '11.13', b_in: '—', b_mm: '—', h_in: '0.630', h_mm: '16.0', c_in: '0.305', c_mm: '7.75', r1_in: '0.060', r1_mm: '1.5' },
  'R-100': { p_in: '29.500', p_mm: '749.30', a_in: '1.125', a_mm: '28.58', b_in: '—', b_mm: '—', h_in: '1.380', h_mm: '35.1', c_in: '0.780', c_mm: '19.81', r1_in: '0.090', r1_mm: '2.3' },
  'R-101': { p_in: '31.500', p_mm: '800.10', a_in: '1.250', a_mm: '31.75', b_in: '—', b_mm: '—', h_in: '1.500', h_mm: '38.1', c_in: '0.879', c_mm: '22.33', r1_in: '0.090', r1_mm: '2.3' },
  'R-102': { p_in: '33.750', p_mm: '857.25', a_in: '1.250', a_mm: '31.75', b_in: '—', b_mm: '—', h_in: '1.500', h_mm: '38.1', c_in: '0.879', c_mm: '22.33', r1_in: '0.090', r1_mm: '2.3' },
  'R-103': { p_in: '36.000', p_mm: '914.40', a_in: '1.250', a_mm: '31.75', b_in: '—', b_mm: '—', h_in: '1.500', h_mm: '38.1', c_in: '0.879', c_mm: '22.33', r1_in: '0.090', r1_mm: '2.3' },
  'R-104': { p_in: '38.000', p_mm: '965.20', a_in: '1.375', a_mm: '34.93', b_in: '—', b_mm: '—', h_in: '1.630', h_mm: '41.4', c_in: '0.977', c_mm: '24.82', r1_in: '0.090', r1_mm: '2.3' },
  'R-105': { p_in: '40.250', p_mm: '1022.35', a_in: '1.375', a_mm: '34.93', b_in: '—', b_mm: '—', h_in: '1.630', h_mm: '41.4', c_in: '0.977', c_mm: '24.82', r1_in: '0.090', r1_mm: '2.3' },
};

export const rxTypeDimensions = {
  'RX-20': { p_in: '3.000', p_mm: '76.20', a_in: '0.344', a_mm: '8.74', c_in: '0.182', c_mm: '4.62', d_in: '0.125', d_mm: '3.18', h_in: '0.750', h_mm: '19.05', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-23': { p_in: '3.672', p_mm: '93.27', a_in: '0.469', a_mm: '11.91', c_in: '0.254', c_mm: '6.45', d_in: '0.167', d_mm: '4.24', h_in: '1.000', h_mm: '25.40', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-24': { p_in: '4.172', p_mm: '105.97', a_in: '0.469', a_mm: '11.91', c_in: '0.254', c_mm: '6.45', d_in: '0.167', d_mm: '4.24', h_in: '1.000', h_mm: '25.40', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-25': { p_in: '4.313', p_mm: '109.55', a_in: '0.344', a_mm: '8.74', c_in: '0.182', c_mm: '4.62', d_in: '0.125', d_mm: '3.18', h_in: '0.750', h_mm: '19.05', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-26': { p_in: '4.406', p_mm: '111.91', a_in: '0.469', a_mm: '11.91', c_in: '0.254', c_mm: '6.45', d_in: '0.167', d_mm: '4.24', h_in: '1.000', h_mm: '25.40', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-27': { p_in: '4.656', p_mm: '118.26', a_in: '0.469', a_mm: '11.91', c_in: '0.254', c_mm: '6.45', d_in: '0.167', d_mm: '4.24', h_in: '1.000', h_mm: '25.40', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-31': { p_in: '5.297', p_mm: '134.54', a_in: '0.469', a_mm: '11.91', c_in: '0.254', c_mm: '6.45', d_in: '0.167', d_mm: '4.24', h_in: '1.000', h_mm: '25.40', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-35': { p_in: '5.797', p_mm: '147.24', a_in: '0.469', a_mm: '11.91', c_in: '0.254', c_mm: '6.45', d_in: '0.167', d_mm: '4.24', h_in: '1.000', h_mm: '25.40', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-37': { p_in: '6.297', p_mm: '159.94', a_in: '0.469', a_mm: '11.91', c_in: '0.254', c_mm: '6.45', d_in: '0.167', d_mm: '4.24', h_in: '1.000', h_mm: '25.40', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-39': { p_in: '6.797', p_mm: '172.64', a_in: '0.469', a_mm: '11.91', c_in: '0.254', c_mm: '6.45', d_in: '0.167', d_mm: '4.24', h_in: '1.000', h_mm: '25.40', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-41': { p_in: '7.547', p_mm: '191.69', a_in: '0.469', a_mm: '11.91', c_in: '0.254', c_mm: '6.45', d_in: '0.167', d_mm: '4.24', h_in: '1.000', h_mm: '25.40', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-44': { p_in: '8.047', p_mm: '204.39', a_in: '0.469', a_mm: '11.91', c_in: '0.254', c_mm: '6.45', d_in: '0.167', d_mm: '4.24', h_in: '1.000', h_mm: '25.40', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-45': { p_in: '8.734', p_mm: '221.84', a_in: '0.469', a_mm: '11.91', c_in: '0.254', c_mm: '6.45', d_in: '0.167', d_mm: '4.24', h_in: '1.000', h_mm: '25.40', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-46': { p_in: '8.750', p_mm: '222.25', a_in: '0.531', a_mm: '13.49', c_in: '0.263', c_mm: '6.68', d_in: '0.188', d_mm: '4.78', h_in: '1.125', h_mm: '28.58', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-47': { p_in: '9.656', p_mm: '245.26', a_in: '0.781', a_mm: '19.84', c_in: '0.407', c_mm: '10.34', d_in: '0.271', d_mm: '6.88', h_in: '1.625', h_mm: '41.28', r1_in: '0.090', r1_mm: '2.3', e_in: '—', e_mm: '—' },
  'RX-49': { p_in: '11.047', p_mm: '280.59', a_in: '0.469', a_mm: '11.91', c_in: '0.254', c_mm: '6.45', d_in: '0.167', d_mm: '4.24', h_in: '1.000', h_mm: '25.40', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-50': { p_in: '11.156', p_mm: '283.36', a_in: '0.656', a_mm: '16.66', c_in: '0.335', c_mm: '8.51', d_in: '0.208', d_mm: '5.28', h_in: '1.250', h_mm: '31.75', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-53': { p_in: '13.172', p_mm: '334.57', a_in: '0.469', a_mm: '11.91', c_in: '0.254', c_mm: '6.45', d_in: '0.167', d_mm: '4.24', h_in: '1.000', h_mm: '25.40', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-54': { p_in: '13.281', p_mm: '337.34', a_in: '0.656', a_mm: '16.66', c_in: '0.335', c_mm: '8.51', d_in: '0.208', d_mm: '5.28', h_in: '1.250', h_mm: '31.75', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-57': { p_in: '15.422', p_mm: '391.72', a_in: '0.469', a_mm: '11.91', c_in: '0.254', c_mm: '6.45', d_in: '0.167', d_mm: '4.24', h_in: '1.000', h_mm: '25.40', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-63': { p_in: '17.391', p_mm: '441.73', a_in: '1.063', a_mm: '27.00', c_in: '0.582', c_mm: '14.78', d_in: '0.333', d_mm: '8.46', h_in: '2.000', h_mm: '50.80', r1_in: '0.090', r1_mm: '2.3', e_in: '—', e_mm: '—' },
  'RX-65': { p_in: '18.922', p_mm: '480.62', a_in: '0.469', a_mm: '11.91', c_in: '0.254', c_mm: '6.45', d_in: '0.167', d_mm: '4.24', h_in: '1.000', h_mm: '25.40', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-66': { p_in: '18.031', p_mm: '457.99', a_in: '0.656', a_mm: '16.66', c_in: '0.335', c_mm: '8.51', d_in: '0.208', d_mm: '5.28', h_in: '1.250', h_mm: '31.75', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-69': { p_in: '21.422', p_mm: '544.12', a_in: '0.469', a_mm: '11.91', c_in: '0.254', c_mm: '6.45', d_in: '0.167', d_mm: '4.24', h_in: '1.000', h_mm: '25.40', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-70': { p_in: '21.656', p_mm: '550.06', a_in: '0.781', a_mm: '19.84', c_in: '0.407', c_mm: '10.34', d_in: '0.271', d_mm: '6.88', h_in: '1.625', h_mm: '41.28', r1_in: '0.090', r1_mm: '2.3', e_in: '—', e_mm: '—' },
  'RX-73': { p_in: '23.469', p_mm: '596.11', a_in: '0.531', a_mm: '13.49', c_in: '0.263', c_mm: '6.68', d_in: '0.208', d_mm: '5.28', h_in: '1.250', h_mm: '31.75', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-74': { p_in: '23.656', p_mm: '600.86', a_in: '0.781', a_mm: '19.84', c_in: '0.407', c_mm: '10.34', d_in: '0.271', d_mm: '6.88', h_in: '1.625', h_mm: '41.28', r1_in: '0.090', r1_mm: '2.3', e_in: '—', e_mm: '—' },
  'RX-82': { p_in: '2.672', p_mm: '67.87', a_in: '0.469', a_mm: '11.91', c_in: '0.254', c_mm: '6.45', d_in: '0.167', d_mm: '4.24', h_in: '1.000', h_mm: '25.40', r1_in: '0.060', r1_mm: '1.5', e_in: '0.060', e_mm: '1.5' },
  'RX-84': { p_in: '2.922', p_mm: '74.22', a_in: '0.469', a_mm: '11.91', c_in: '0.254', c_mm: '6.45', d_in: '0.167', d_mm: '4.24', h_in: '1.000', h_mm: '25.40', r1_in: '0.060', r1_mm: '1.5', e_in: '0.060', e_mm: '1.5' },
  'RX-85': { p_in: '3.547', p_mm: '90.09', a_in: '0.531', a_mm: '13.49', c_in: '0.263', c_mm: '6.68', d_in: '0.167', d_mm: '4.24', h_in: '1.000', h_mm: '25.40', r1_in: '0.060', r1_mm: '1.5', e_in: '0.060', e_mm: '1.5' },
  'RX-86': { p_in: '4.078', p_mm: '103.58', a_in: '0.594', a_mm: '15.09', c_in: '0.335', c_mm: '8.51', d_in: '0.188', d_mm: '4.78', h_in: '1.125', h_mm: '28.58', r1_in: '0.060', r1_mm: '1.5', e_in: '0.090', e_mm: '2.3' },
  'RX-87': { p_in: '4.453', p_mm: '113.11', a_in: '0.594', a_mm: '15.09', c_in: '0.335', c_mm: '8.51', d_in: '0.188', d_mm: '4.78', h_in: '1.125', h_mm: '28.58', r1_in: '0.060', r1_mm: '1.5', e_in: '0.090', e_mm: '2.3' },
  'RX-88': { p_in: '5.484', p_mm: '139.29', a_in: '0.688', a_mm: '17.48', c_in: '0.407', c_mm: '10.34', d_in: '0.208', d_mm: '5.28', h_in: '1.250', h_mm: '31.75', r1_in: '0.060', r1_mm: '1.5', e_in: '0.120', e_mm: '3.0' },
  'RX-89': { p_in: '5.109', p_mm: '129.77', a_in: '0.719', a_mm: '18.26', c_in: '0.407', c_mm: '10.34', d_in: '0.208', d_mm: '5.28', h_in: '1.250', h_mm: '31.75', r1_in: '0.060', r1_mm: '1.5', e_in: '0.120', e_mm: '3.0' },
  'RX-90': { p_in: '6.875', p_mm: '174.63', a_in: '0.781', a_mm: '19.84', c_in: '0.479', c_mm: '12.17', d_in: '0.292', d_mm: '7.42', h_in: '1.750', h_mm: '44.45', r1_in: '0.090', r1_mm: '2.3', e_in: '0.120', e_mm: '3.0' },
  'RX-91': { p_in: '11.297', p_mm: '286.94', a_in: '1.188', a_mm: '30.18', c_in: '0.780', c_mm: '19.81', d_in: '0.297', d_mm: '7.54', h_in: '1.781', h_mm: '45.24', r1_in: '0.090', r1_mm: '2.3', e_in: '0.120', e_mm: '3.0' },
  'RX-99': { p_in: '9.672', p_mm: '245.67', a_in: '0.469', a_mm: '11.91', c_in: '0.254', c_mm: '6.45', d_in: '0.167', d_mm: '4.24', h_in: '1.000', h_mm: '25.40', r1_in: '0.060', r1_mm: '1.5', e_in: '—', e_mm: '—' },
  'RX-201': { p_in: '2.026', p_mm: '51.46', a_in: '0.226', a_mm: '5.74', c_in: '0.126', c_mm: '3.20', d_in: '0.057', d_mm: '1.45', h_in: '0.445', h_mm: '11.30', r1_in: '0.02', r1_mm: '0.5', e_in: '—', e_mm: '—' },
  'RX-205': { p_in: '2.453', p_mm: '62.31', a_in: '0.219', a_mm: '5.56', c_in: '0.12', c_mm: '3.05', d_in: '0.072', d_mm: '1.83', h_in: '0.437', h_mm: '11.10', r1_in: '0.02', r1_mm: '0.5', e_in: '—', e_mm: '—' },
  'RX-210': { p_in: '3.844', p_mm: '97.64', a_in: '0.375', a_mm: '9.53', c_in: '0.231', c_mm: '5.87', d_in: '0.125', d_mm: '3.18', h_in: '0.750', h_mm: '19.05', r1_in: '0.03', r1_mm: '0.8', e_in: '—', e_mm: '—' },
  'RX-215': { p_in: '5.547', p_mm: '140.89', a_in: '0.469', a_mm: '11.91', c_in: '0.21', c_mm: '5.33', d_in: '0.167', d_mm: '4.24', h_in: '1.000', h_mm: '25.40', r1_in: '0.06', r1_mm: '1.5', e_in: '—', e_mm: '—' },
};

export const bxTypeDimensions = {
  'BX-150': { nom_in: '1 11/16"', nom_mm: '43', od_in: '2.842', od_mm: '72.19', h_in: '0.366', h_mm: '9.30', a_in: '0.366', a_mm: '9.30', odt_in: '2.790', odt_mm: '70.87', c_in: '0.314', c_mm: '7.98', d_in: '0.060', d_mm: '1.5' },
  'BX-151': { nom_in: '1 13/16"', nom_mm: '46', od_in: '3.008', od_mm: '76.40', h_in: '0.379', h_mm: '9.63', a_in: '0.379', a_mm: '9.63', odt_in: '2.954', odt_mm: '75.03', c_in: '0.325', c_mm: '8.26', d_in: '0.060', d_mm: '1.5' },
  'BX-152': { nom_in: '2 1/16"', nom_mm: '52', od_in: '3.334', od_mm: '84.68', h_in: '0.403', h_mm: '10.24', a_in: '0.403', a_mm: '10.24', odt_in: '3.277', odt_mm: '83.24', c_in: '0.346', c_mm: '8.79', d_in: '0.060', d_mm: '1.5' },
  'BX-153': { nom_in: '2 9/16"', nom_mm: '65', od_in: '3.974', od_mm: '100.94', h_in: '0.448', h_mm: '11.38', a_in: '0.448', a_mm: '11.38', odt_in: '3.910', odt_mm: '99.31', c_in: '0.385', c_mm: '9.78', d_in: '0.060', d_mm: '1.5' },
  'BX-154': { nom_in: '3 1/16"', nom_mm: '78', od_in: '4.600', od_mm: '116.84', h_in: '0.488', h_mm: '12.40', a_in: '0.488', a_mm: '12.40', odt_in: '4.531', odt_mm: '115.09', c_in: '0.419', c_mm: '10.64', d_in: '0.060', d_mm: '1.5' },
  'BX-155': { nom_in: '4 1/16"', nom_mm: '103', od_in: '5.825', od_mm: '147.96', h_in: '0.560', h_mm: '14.22', a_in: '0.560', a_mm: '14.22', odt_in: '5.746', odt_mm: '145.95', c_in: '0.481', c_mm: '12.22', d_in: '0.060', d_mm: '1.5' },
  'BX-156': { nom_in: '7 1/16"', nom_mm: '179', od_in: '9.367', od_mm: '237.92', h_in: '0.733', h_mm: '18.62', a_in: '0.733', a_mm: '18.62', odt_in: '9.263', odt_mm: '235.28', c_in: '0.629', c_mm: '15.98', d_in: '0.120', d_mm: '3.0' },
  'BX-157': { nom_in: '9"', nom_mm: '229', od_in: '11.593', od_mm: '294.46', h_in: '0.826', h_mm: '20.98', a_in: '0.826', a_mm: '20.98', odt_in: '11.476', odt_mm: '291.49', c_in: '0.709', c_mm: '18.01', d_in: '0.120', d_mm: '3.0' },
  'BX-158': { nom_in: '11"', nom_mm: '279', od_in: '13.860', od_mm: '352.04', h_in: '0.911', h_mm: '23.14', a_in: '0.911', a_mm: '23.14', odt_in: '13.731', odt_mm: '348.77', c_in: '0.782', c_mm: '19.86', d_in: '0.120', d_mm: '3.0' },
  'BX-159': { nom_in: '13 ⅝"', nom_mm: '346', od_in: '16.800', od_mm: '426.72', h_in: '1.012', h_mm: '25.70', a_in: '1.012', a_mm: '25.70', odt_in: '16.657', odt_mm: '423.09', c_in: '0.869', c_mm: '22.07', d_in: '0.120', d_mm: '3.0' },
  'BX-160': { nom_in: '13 ⅝"', nom_mm: '346', od_in: '15.850', od_mm: '402.59', h_in: '0.938', h_mm: '23.83', a_in: '0.541', a_mm: '13.74', odt_in: '15.717', odt_mm: '399.21', c_in: '0.408', c_mm: '10.36', d_in: '0.120', d_mm: '3.0' },
  'BX-161': { nom_in: '16 ¾"', nom_mm: '422', od_in: '19.347', od_mm: '491.41', h_in: '1.105', h_mm: '28.07', a_in: '0.638', a_mm: '16.21', odt_in: '19.191', odt_mm: '487.45', c_in: '0.482', c_mm: '12.24', d_in: '0.120', d_mm: '3.0' },
  'BX-162': { nom_in: '16 ¾"', nom_mm: '422', od_in: '18.720', od_mm: '475.49', h_in: '0.560', h_mm: '14.22', a_in: '0.560', a_mm: '14.22', odt_in: '18.641', odt_mm: '473.48', c_in: '0.481', c_mm: '12.22', d_in: '0.060', d_mm: '1.5' },
  'BX-163': { nom_in: '18 ¾"', nom_mm: '476', od_in: '21.896', od_mm: '556.16', h_in: '1.185', h_mm: '30.10', a_in: '0.684', a_mm: '17.37', odt_in: '21.728', odt_mm: '551.89', c_in: '0.516', c_mm: '13.11', d_in: '0.120', d_mm: '3.0' },
  'BX-164': { nom_in: '18 ¾"', nom_mm: '476', od_in: '22.463', od_mm: '570.56', h_in: '1.185', h_mm: '30.10', a_in: '0.968', a_mm: '24.59', odt_in: '22.295', odt_mm: '566.29', c_in: '0.800', c_mm: '20.32', d_in: '0.120', d_mm: '3.0' },
  'BX-165': { nom_in: '21 ¼"', nom_mm: '540', od_in: '24.595', od_mm: '624.71', h_in: '1.261', h_mm: '32.03', a_in: '0.728', a_mm: '18.49', odt_in: '24.417', odt_mm: '620.19', c_in: '0.550', c_mm: '13.97', d_in: '0.120', d_mm: '3.0' },
  'BX-166': { nom_in: '21 ¼"', nom_mm: '540', od_in: '25.198', od_mm: '640.03', h_in: '1.261', h_mm: '32.03', a_in: '1.029', a_mm: '26.14', odt_in: '25.020', odt_mm: '635.51', c_in: '0.851', c_mm: '21.62', d_in: '0.120', d_mm: '3.0' },
  'BX-167': { nom_in: '26 ¾"', nom_mm: '679', od_in: '29.896', od_mm: '759.36', h_in: '1.412', h_mm: '35.86', a_in: '0.516', a_mm: '13.11', odt_in: '29.696', odt_mm: '754.28', c_in: '0.316', c_mm: '8.03', d_in: '0.060', d_mm: '1.5' },
  'BX-168': { nom_in: '26 ¾"', nom_mm: '679', od_in: '30.128', od_mm: '765.25', h_in: '1.412', h_mm: '35.86', a_in: '0.632', a_mm: '16.05', odt_in: '29.928', odt_mm: '760.17', c_in: '0.432', c_mm: '10.97', d_in: '0.060', d_mm: '1.5' },
  'BX-169': { nom_in: '5 ⅛"', nom_mm: '130', od_in: '6.831', od_mm: '173.51', h_in: '0.624', h_mm: '15.85', a_in: '0.509', a_mm: '12.93', odt_in: '6.743', odt_mm: '171.27', c_in: '0.421', c_mm: '10.69', d_in: '0.060', d_mm: '1.5' },
  'BX-170': { nom_in: '6 ⅝"', nom_mm: '168', od_in: '8.584', od_mm: '218.03', h_in: '0.560', h_mm: '14.22', a_in: '0.560', a_mm: '14.22', odt_in: '8.505', odt_mm: '216.03', c_in: '0.481', c_mm: '12.22', d_in: '0.060', d_mm: '1.5' },
  'BX-171': { nom_in: '8 ⁹/₁₆"', nom_mm: '217', od_in: '10.529', od_mm: '267.44', h_in: '0.560', h_mm: '14.22', a_in: '0.560', a_mm: '14.22', odt_in: '10.450', odt_mm: '265.43', c_in: '0.481', c_mm: '12.22', d_in: '0.060', d_mm: '1.5' },
  'BX-172': { nom_in: '11 ⁵/₃₂"', nom_mm: '283', od_in: '13.113', od_mm: '333.07', h_in: '0.560', h_mm: '14.22', a_in: '0.560', a_mm: '14.22', odt_in: '13.034', odt_mm: '331.06', c_in: '0.481', c_mm: '12.22', d_in: '0.060', d_mm: '1.5' },
  'BX-303': { nom_in: '30"', nom_mm: '762', od_in: '33.573', od_mm: '852.75', h_in: '1.494', h_mm: '37.95', a_in: '0.668', a_mm: '16.97', odt_in: '33.361', odt_mm: '847.37', c_in: '0.457', c_mm: '11.61', d_in: '0.060', d_mm: '1.5' },
};



// Metallurgy and Material Hardness Reference Data (per ASME B16.20 / API Spec 6A & 17D Controlled Hardness Table)
export const metallurgyOptions = [
  { id: 'soft_iron', name: 'Soft Iron', uns: '—', maxBrinell: '90 HB', maxRockwell: '56 HRB', naceCompliant: false, code: 'D' },
  { id: 'low_carbon', name: 'Low Carbon Steel', uns: '—', maxBrinell: '120 HB', maxRockwell: '68 HRB', naceCompliant: false, code: 'S' },
  { id: 'chrome_moly', name: '4-6% Chrome 1/2% Moly', uns: 'K42544', maxBrinell: '130 HB', maxRockwell: '75 HRB', naceCompliant: true, code: 'F5' },
  { id: '304_ss', name: 'Type 304 Stainless Steel', uns: 'S30400', maxBrinell: '160 HB', maxRockwell: '83 HRB', naceCompliant: false, code: 'S304' },
  { id: '316_ss', name: 'Type 316 Stainless Steel', uns: 'S31600', maxBrinell: '160 HB', maxRockwell: '83 HRB', naceCompliant: true, code: 'S316' },
  { id: '347_ss', name: 'Type 347 Stainless Steel', uns: 'S34700', maxBrinell: '160 HB', maxRockwell: '83 HRB', naceCompliant: true, code: 'S347' },
  { id: '410_ss', name: 'Type 410 Stainless Steel', uns: 'S41000', maxBrinell: '170 HB', maxRockwell: '86 HRB', naceCompliant: false, code: 'S410' },
  { id: 'titanium_gr2', name: 'Titanium Grade 2', uns: 'R50400', maxBrinell: '215 HB', maxRockwell: '94 HRB', naceCompliant: true, code: 'Ti Gr.2' },
  { id: 'alloy_600', name: 'Alloy 600', uns: 'N06600', maxBrinell: '200 HB', maxRockwell: '92 HRB', naceCompliant: true, code: 'Inconel 600' },
  { id: 'alloy_625', name: 'Alloy 625', uns: 'N06625', maxBrinell: '200 HB', maxRockwell: '92 HRB', naceCompliant: true, code: 'Inconel 625' },
  { id: 'alloy_800', name: 'Alloy 800', uns: 'N08800', maxBrinell: '200 HB', maxRockwell: '92 HRB', naceCompliant: true, code: 'Incoloy 800' },
  { id: 'alloy_825', name: 'Alloy 825', uns: 'N08825', maxBrinell: '200 HB', maxRockwell: '92 HRB', naceCompliant: true, code: 'Incoloy 825' },
  { id: 'hastelloy', name: 'Hastelloy', uns: 'N10001', maxBrinell: '200 HB', maxRockwell: '—', naceCompliant: true, code: 'Hastelloy' },
  { id: 'alloy_c276', name: 'Alloy C276', uns: 'N10276', maxBrinell: '200 HB', maxRockwell: '92 HRB', naceCompliant: true, code: 'C276' },
  { id: 'smo_254', name: 'SMO 254', uns: 'S32154', maxBrinell: '180 HB', maxRockwell: '89 HRB', naceCompliant: true, code: '254 SMO' },
  { id: 'zeron_100', name: 'Zeron 100', uns: '—', maxBrinell: '200 HB', maxRockwell: '—', naceCompliant: true, code: 'Zeron 100' },
  { id: 'super_duplex', name: 'Super Duplex', uns: 'S31803', maxBrinell: '200 HB', maxRockwell: '92 HRB', naceCompliant: true, code: 'S31803' },
  { id: '321_ss', name: '321 Stainless Steel', uns: '—', maxBrinell: '160 HB', maxRockwell: '83 HRB', naceCompliant: true, code: 'S321' },
  { id: 'monel_400', name: 'MONEL 400', uns: '—', maxBrinell: '130 HB', maxRockwell: '72 HRB', naceCompliant: true, code: 'Monel 400' },
  { id: '309_ss', name: '309 Stainless Steel', uns: '—', maxBrinell: '160 HB', maxRockwell: '83 HRB', naceCompliant: false, code: 'S309' },
  { id: 'alloy_20', name: 'Alloy 20', uns: '—', maxBrinell: '160 HB', maxRockwell: '83 HRB', naceCompliant: true, code: 'Alloy 20' },
];

// Helper to get formatted display size with DN equivalent
export const formatSizeWithDn = (sizeInches) => {
  const clean = sizeInches.trim();
  const map = {
    '½"': '½" (DN 15)',
    '¾"': '¾" (DN 20)',
    '1"': '1" (DN 25)',
    '1¼"': '1¼" (DN 32)',
    '1½"': '1½" (DN 40)',
    '2"': '2" (DN 50)',
    '2½"': '2½" (DN 65)',
    '3"': '3" (DN 80)',
    '3½"': '3½" (DN 90)',
    '4"': '4" (DN 100)',
    '5"': '5" (DN 125)',
    '6"': '6" (DN 150)',
    '8"': '8" (DN 200)',
    '10"': '10" (DN 250)',
    '12"': '12" (DN 300)',
    '14"': '14" (DN 350)',
    '16"': '16" (DN 400)',
    '18"': '18" (DN 450)',
    '20"': '20" (DN 500)',
    '24"': '24" (DN 600)',
    '26"': '26" (DN 650)',
    '28"': '28" (DN 700)',
    '30"': '30" (DN 750)',
    '32"': '32" (DN 800)',
    '34"': '34" (DN 850)',
    '36"': '36" (DN 900)',
    '1 11/16"': '1 11/16" (DN 43)',
    '1 13/16"': '1 13/16" (DN 46)',
    '2 1/16"': '2 1/16" (DN 52)',
    '2 9/16"': '2 9/16" (DN 65)',
    '3 1/16"': '3 1/16" (DN 78)',
    '3⅛"': '3⅛" (DN 80)',
    '4 1/16"': '4 1/16" (DN 103)',
    '5 1/8"': '5 1/8" (DN 130)',
    '6 5/8"': '6 5/8" (DN 168)',
    '7 1/16"': '7 1/16" (DN 179)',
    '8 9/16"': '8 9/16" (DN 217)',
    '9"': '9" (DN 229)',
    '11"': '11" (DN 279)',
    '11 5/32"': '11 5/32" (DN 283)',
    '13 ⅝"': '13 ⅝" (DN 346)',
    '13⅝"': '13⅝" (DN 346)',
    '16 ¾"': '16 ¾" (DN 422)',
    '16¾"': '16¾" (DN 422)',
    '18 ¾"': '18 ¾" (DN 476)',
    '18¾"': '18¾" (DN 476)',
    '21 ¼"': '21 ¼" (DN 540)',
    '21¼"': '21¼" (DN 540)',
    '26 ¾"': '26 ¾" (DN 679)',
    '26¾"': '26¾" (DN 679)',
  };
  return map[clean] || clean;
};

// Stud bolt geometry and recommended preload torque calculator
export const getBoltingAndTorque = (standard, pressureClass, sizeInches) => {
  const s = sizeInches?.replace(/"/g, '')?.trim();
  const cls = (pressureClass || '').toLowerCase();

  // ASME Class 1500# authentic mappings (matches screenshot exactly for 3": 8x 1-1/8"-8 (7.00") and 1180 Nm / 870 ft-lbs)
  if (cls.includes('1500')) {
    if (s === '1') return { stud: '4x 7/8"-8 (5.50")', torque: '430 Nm / 320 ft-lbs' };
    if (s === '1½') return { stud: '4x 1"-8 (6.25")', torque: '650 Nm / 480 ft-lbs' };
    if (s === '2') return { stud: '8x 7/8"-8 (5.75")', torque: '430 Nm / 320 ft-lbs' };
    if (s === '2½') return { stud: '8x 1"-8 (6.50")', torque: '650 Nm / 480 ft-lbs' };
    if (s === '3') return { stud: '8x 1-1/8"-8 (7.00")', torque: '1180 Nm / 870 ft-lbs' };
    if (s === '4') return { stud: '8x 1-1/4"-8 (7.75")', torque: '1650 Nm / 1220 ft-lbs' };
    if (s === '5') return { stud: '8x 1-1/2"-8 (9.75")', torque: '2900 Nm / 2140 ft-lbs' };
    if (s === '6') return { stud: '12x 1-3/8"-8 (10.25")', torque: '2350 Nm / 1730 ft-lbs' };
    if (s === '8') return { stud: '12x 1-5/8"-8 (11.50")', torque: '3800 Nm / 2800 ft-lbs' };
    if (s === '10') return { stud: '12x 1-7/8"-8 (13.25")', torque: '5800 Nm / 4280 ft-lbs' };
    if (s === '12') return { stud: '16x 2"-8 (15.25")', torque: '7300 Nm / 5380 ft-lbs' };
    if (s === '14') return { stud: '16x 2-1/4"-8 (16.75")', torque: '9800 Nm / 7230 ft-lbs' };
    if (s === '16') return { stud: '16x 2-1/2"-8 (18.50")', torque: '12800 Nm / 9440 ft-lbs' };
  }

  // ASME Class 300-600#
  if (cls.includes('300') || cls.includes('600')) {
    if (s === '1') return { stud: '4x 5/8"-11 (3.50")', torque: '160 Nm / 120 ft-lbs' };
    if (s === '1½') return { stud: '4x 3/4"-10 (4.25")', torque: '270 Nm / 200 ft-lbs' };
    if (s === '2') return { stud: '8x 5/8"-11 (4.25")', torque: '160 Nm / 120 ft-lbs' };
    if (s === '3') return { stud: '8x 3/4"-10 (5.00")', torque: '270 Nm / 200 ft-lbs' };
    if (s === '4') return { stud: '8x 7/8"-9 (5.75")', torque: '430 Nm / 320 ft-lbs' };
    if (s === '6') return { stud: '12x 1"-8 (6.75")', torque: '650 Nm / 480 ft-lbs' };
    if (s === '8') return { stud: '12x 1-1/8"-8 (7.75")', torque: '920 Nm / 680 ft-lbs' };
    if (s === '10') return { stud: '16x 1-1/4"-8 (8.50")', torque: '1300 Nm / 960 ft-lbs' };
    if (s === '12') return { stud: '20x 1-1/4"-8 (8.75")', torque: '1300 Nm / 960 ft-lbs' };
  }

  // ASME Class 900#
  if (cls.includes('900')) {
    if (s === '3') return { stud: '8x 7/8"-9 (5.75")', torque: '430 Nm / 320 ft-lbs' };
    if (s === '4') return { stud: '8x 1-1/8"-8 (6.75")', torque: '920 Nm / 680 ft-lbs' };
    if (s === '6') return { stud: '12x 1-1/8"-8 (7.25")', torque: '920 Nm / 680 ft-lbs' };
    if (s === '8') return { stud: '12x 1-3/8"-8 (8.75")', torque: '1750 Nm / 1290 ft-lbs' };
    if (s === '10') return { stud: '16x 1-3/8"-8 (9.25")', torque: '1750 Nm / 1290 ft-lbs' };
    if (s === '12') return { stud: '20x 1-3/8"-8 (10.00")', torque: '1750 Nm / 1290 ft-lbs' };
  }

  // ASME Class 2500#
  if (cls.includes('2500')) {
    if (s === '2') return { stud: '8x 1"-8 (7.00")', torque: '650 Nm / 480 ft-lbs' };
    if (s === '3') return { stud: '8x 1-1/4"-8 (8.75")', torque: '1650 Nm / 1220 ft-lbs' };
    if (s === '4') return { stud: '8x 1-1/2"-8 (10.25")', torque: '2900 Nm / 2140 ft-lbs' };
    if (s === '6') return { stud: '8x 2"-8 (13.50")', torque: '7300 Nm / 5380 ft-lbs' };
    if (s === '8') return { stud: '12x 2"-8 (15.00")', torque: '7300 Nm / 5380 ft-lbs' };
  }

  // API 6BX / API 6B Extreme High Pressure
  if (cls.includes('10000') || cls.includes('15000') || cls.includes('20000') || cls.includes('5000')) {
    return { stud: '8x 1-1/2"-8 (11.00")', torque: '3200 Nm / 2360 ft-lbs' };
  }

  // Default fallback
  return { stud: '8x 3/4"-10 (4.75")', torque: '270 Nm / 200 ft-lbs' };
};
