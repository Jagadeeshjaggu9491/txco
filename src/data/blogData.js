export const blogHeroData = {
  title: 'TXCO BLOG & INSIGHTS',
  subtitle:
    'Expert engineering perspectives, technical whitepapers, and industry trends on high-performance industrial sealing, bolting integrity, and sustainable energy transitions.',
};

export const blogCategories = [
  'All Articles',
  'Engineering & Technology',
  'Oil & Gas / Energy',
  'Industry Standards & Safety',
  'Maintenance & Turnaround',
  'Sustainability',
];

export const blogPostsList = [
  {
    id: 1,
    slug: 'optimizing-ring-type-joint-gaskets-high-pressure',
    title: 'Optimizing Ring Type Joint (RTJ) Gaskets for High-Pressure Subsea Operations',
    excerpt:
      'A deep dive into API 6A and 17D standards for R, RX, and BX metallic ring joint gaskets under extreme hydrostatic pressure and corrosive subsea environments.',
    category: 'Engineering & Technology',
    author: {
      name: 'Dr. Rajesh Sharma',
      role: 'Chief Metallurgical Engineer',
      avatar: '/images/logo/logo.png',
    },
    publishedDate: 'August 14, 2026',
    readTime: '6 min read',
    featured: true,
    image: '/images/products/industrial-gaskets/ring-type-joint.png',
    tags: ['RTJ', 'API 6A', 'Subsea', 'High Pressure', 'Metallic Gaskets'],
    content: [
      {
        type: 'heading',
        text: 'The Challenge of Extreme Hydrostatic Sealing',
      },
      {
        type: 'paragraph',
        text: 'In high-pressure subsea exploration and upstream oil and gas production, joint integrity is paramount. Operating conditions frequently exceed 15,000 to 20,000 psi in deepwater environments where temperatures cycle rapidly. Standard non-metallic or semi-metallic gaskets cannot withstand these load dynamics without significant risk of blowout or stress relaxation.',
      },
      {
        type: 'callout',
        text: 'API Spec 6A and 17D mandate stringent hardness differentials between the ring joint gasket and flange groove to ensure controlled metal deformation without damaging expensive forged flange faces.',
      },
      {
        type: 'heading',
        text: 'Key Differences: R, RX, and BX Profiles',
      },
      {
        type: 'paragraph',
        text: 'Selecting the correct RTJ profile is critical to achieving reliable metal-to-metal sealing:',
      },
      {
        type: 'list',
        items: [
          'Style R (Oval & Octagonal): Standard interchangeable designs for ASME B16.5 and API 6B flanges up to 5,000 psi rating.',
          'Style RX: Pressure-energized design featuring an asymmetric cross-section that utilizes internal system pressure to increase sealing force.',
          'Style BX: Specially engineered for API 6BX flanges operating up to 20,000 psi, featuring pressure equalization boreholes to prevent hydrostatic lock.',
        ],
      },
      {
        type: 'heading',
        text: 'Material Hardness and Galvanic Compatibility',
      },
      {
        type: 'paragraph',
        text: 'To avoid galling or indentation of the flange groove, the gasket material must be significantly softer than the flange material (typically at least 30 HB lower). For sour service applications (H2S and CO2), Inconel 625 or 825 cladding is employed to eliminate stress corrosion cracking risks.',
      },
      {
        type: 'heading',
        text: 'Conclusion and Best Practices',
      },
      {
        type: 'paragraph',
        text: 'Always ensure strict torque sequencing, inspect ring grooves with optical gauges before installation, and never reuse metallic RTJ gaskets after unbolting.',
      },
    ],
  },
  {
    id: 2,
    slug: 'preventing-fugitive-emissions-spiral-wound-gaskets',
    title: 'Preventing Fugitive Emissions with Next-Gen Low-Emission Spiral Wound Gaskets',
    excerpt:
      'How innovative winding density, inner retaining rings, and high-density flexible graphite fillers achieve ISO 15848-1 and Clean Air Act fugitive emission compliance.',
    category: 'Industry Standards & Safety',
    author: {
      name: 'Michael Vance',
      role: 'Senior Applications Specialist',
      avatar: '/images/logo/logo.png',
    },
    publishedDate: 'August 02, 2026',
    readTime: '5 min read',
    featured: false,
    image: '/images/products/industrial-gaskets/sprial-wound-gaskets.png',
    tags: ['Fugitive Emissions', 'Spiral Wound', 'ASME B16.20', 'Low Emission'],
    content: [
      {
        type: 'heading',
        text: 'The Rising Mandate for Clean Air Compliance',
      },
      {
        type: 'paragraph',
        text: 'Refineries and chemical processing plants are facing increasingly strict environmental standards worldwide. Fugitive emissions from flanged connections account for a significant portion of volatile organic compound (VOC) releases, making gasket selection a top environmental priority.',
      },
      {
        type: 'paragraph',
        text: 'Modern ASME B16.20 compliant Spiral Wound Gaskets (SWG) with inner rings (Style CGI) eliminate radial inward buckling, ensuring consistent winding compression under high bolt stress.',
      },
      {
        type: 'callout',
        text: 'Inner rings are no longer optional on ASME B16.20 Class 900+ and PTFE-filled spiral wound gaskets; they are a standard safety mandate to prevent hazardous core collapse.',
      },
      {
        type: 'heading',
        text: 'Optimized Winding Density and High-Purity Graphite',
      },
      {
        type: 'paragraph',
        text: 'By utilizing nuclear-grade flexible graphite (min. 99.8% carbon purity) and tighter wind counts per radial inch, TXCO Low-E gaskets reduce micro-porosity permeation by over 80% compared to standard industrial windings.',
      },
    ],
  },
  {
    id: 3,
    slug: 'kammprofile-vs-metal-jacketed-heat-exchangers',
    title: 'Kammprofile vs. Metal Jacketed: Selecting the Optimal Gasket for Heat Exchangers',
    excerpt:
      'Comparing sealing stress requirements, thermal cycling resilience, and flange reusability between grooved Kammprofile gaskets and traditional metal jacketed solutions.',
    category: 'Engineering & Technology',
    author: {
      name: 'Kavita Menon',
      role: 'Thermal Systems Lead',
      avatar: '/images/logo/logo.png',
    },
    publishedDate: 'July 28, 2026',
    readTime: '7 min read',
    featured: false,
    image: '/images/products/industrial-gaskets/kammprofile-gaskets.png',
    tags: ['Heat Exchangers', 'Kammprofile', 'Metal Jacketed', 'Thermal Cycling'],
    content: [
      {
        type: 'heading',
        text: 'Heat Exchanger Sealing Challenges',
      },
      {
        type: 'paragraph',
        text: 'Shell and tube heat exchangers represent one of the toughest sealing duties in industrial facilities due to differential thermal expansion between the shell, tubesheet, and channel head.',
      },
      {
        type: 'heading',
        text: 'Why Facilities are Upgrading to Kammprofile',
      },
      {
        type: 'paragraph',
        text: 'While metal jacketed gaskets have historically been popular for heat exchanger pass partitions, they require very high bolt loads (high seating factor m and y values). In contrast, serrated metallic Kammprofile gaskets with soft facing layers seal at a fraction of the seating stress and offer superior elastic recovery during thermal cycles.',
      },
      {
        type: 'list',
        items: [
          'Lower required bolt torque prevents flange rotation and bowing.',
          'Solid metal core eliminates radial blowout risks.',
          'Metallic cores can be cleaned and refaced for multiple turnaround cycles.',
        ],
      },
    ],
  },
  {
    id: 4,
    slug: 'hydrogen-service-sealing-materials-safeguards',
    title: 'Hydrogen Ready: Sealing Materials and Permeation Safeguards for Clean Energy',
    excerpt:
      'Understanding H2 embrittlement risks, microscopic molecular permeation, and testing protocols required for hydrogen generation, transport, and storage pipelines.',
    category: 'Sustainability',
    author: {
      name: 'Dr. Rajesh Sharma',
      role: 'Chief Metallurgical Engineer',
      avatar: '/images/logo/logo.png',
    },
    publishedDate: 'July 15, 2026',
    readTime: '8 min read',
    featured: false,
    image: '/images/resources/trusted-partner-blue.png',
    tags: ['Hydrogen', 'Clean Energy', 'Embrittlement', 'Permeation', 'Decarbonization'],
    content: [
      {
        type: 'heading',
        text: 'The Unique Physics of Hydrogen Sealing',
      },
      {
        type: 'paragraph',
        text: 'Hydrogen is the smallest and lightest diatomic molecule in the universe (H2). When pressurized in pipelines and fueling systems, it can permeate conventional elastomers and cause severe hydrogen-induced cracking (HIC) and embrittlement in susceptible steels.',
      },
      {
        type: 'callout',
        text: 'Designing for pure hydrogen and hydrogen-natural gas blends requires selecting 316L with controlled nickel equivalency or austenitic superalloys to mitigate embrittlement.',
      },
      {
        type: 'heading',
        text: 'Helium Leak Testing as a Hydrogen Surrogate',
      },
      {
        type: 'paragraph',
        text: 'Because hydrogen and helium exhibit closely matching molecular mass and kinetic diameters, high-sensitivity helium mass spectrometer testing is essential to qualify gasket configurations for hydrogen readiness.',
      },
    ],
  },
  {
    id: 5,
    slug: 'flange-isolation-kits-cathodic-protection',
    title: 'Flange Isolation Kits: Crucial Cathodic Protection for Cross-Country Pipelines',
    excerpt:
      'Preventing galvanic corrosion and Stray Current interference in buried pipelines using GRE G10/G11 isolation gaskets, dielectric sleeves, and isolating washers.',
    category: 'Maintenance & Turnaround',
    author: {
      name: 'David O’Connor',
      role: 'Corrosion Control Specialist',
      avatar: '/images/logo/logo.png',
    },
    publishedDate: 'June 30, 2026',
    readTime: '5 min read',
    featured: false,
    image: '/images/products/industrial-gaskets/flange-insulation-kits.png',
    tags: ['Flange Isolation', 'Cathodic Protection', 'G10', 'Corrosion Prevention'],
    content: [
      {
        type: 'heading',
        text: 'Why Pipeline Flange Isolation Matters',
      },
      {
        type: 'paragraph',
        text: 'Galvanic corrosion occurs rapidly whenever two dissimilar metals are electrically connected in an electrolyte such as moist soil or seawater. Flange Isolation Kits (FIKs) break this electrical circuit, dividing long pipelines into discrete cathodic protection zones.',
      },
      {
        type: 'heading',
        text: 'Key Elements of a Reliable Isolation Kit',
      },
      {
        type: 'list',
        items: [
          'High dielectric strength retainer gasket (Glass Reinforced Epoxy NEMA G10/G11).',
          'Spring-energized PTFE or Viton primary seal for dual containment.',
          'Mylar or Nomex bolt insulating sleeves.',
          'Double steel-backed G10 insulating washers per bolt.',
        ],
      },
    ],
  },
  {
    id: 6,
    slug: 'mastering-bolt-torque-turnaround-success',
    title: 'Mastering Bolt Torque Sequencing for Zero-Leak Plant Turnaround Success',
    excerpt:
      'Step-by-step ASME PCC-1 guidelines for bolt lubrication, cross-pattern torquing, hydraulic tensioning, and legacy flange maintenance during major shutdowns.',
    category: 'Maintenance & Turnaround',
    author: {
      name: 'Michael Vance',
      role: 'Senior Applications Specialist',
      avatar: '/images/logo/logo.png',
    },
    publishedDate: 'June 18, 2026',
    readTime: '6 min read',
    featured: false,
    image: '/images/resources/trusted-partner-red.png',
    tags: ['Bolt Torquing', 'ASME PCC-1', 'Plant Turnaround', 'Maintenance'],
    content: [
      {
        type: 'heading',
        text: 'The Hidden Cause of 80% of Gasket Leaks',
      },
      {
        type: 'paragraph',
        text: 'Field studies demonstrate that the vast majority of flange leaks during plant startups are not caused by defective gasket manufacturing, but rather by uneven bolt loading, inadequate lubrication, or incorrect torquing patterns.',
      },
      {
        type: 'callout',
        text: 'Applying anti-seize lubricant with a known, consistent friction factor (K factor) to bolt threads and nut bearing surfaces is mandatory for accurate bolt tensioning.',
      },
      {
        type: 'heading',
        text: 'ASME PCC-1 Four-Pass Torquing Method',
      },
      {
        type: 'paragraph',
        text: 'Always follow the standard 30% -> 60% -> 100% cross-pattern passes, followed by a final circular rotational pass at 100% torque to eliminate relaxation.',
      },
    ],
  },
];
