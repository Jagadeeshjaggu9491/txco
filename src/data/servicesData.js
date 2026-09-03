/**
 * TXCO Specialized Engineering & Field Services Data
 * Exact content provided by client from engineering documentation
 */

export const servicesOverview = {
  title: 'Specialized Engineering & Field Services',
  company: 'TXCO Sealing Products Private Limited',
  lead:
    'We back our manufacturing with high-level metallurgical and mechanical engineering support. Designed around our core portfolio of industrial gaskets, forged flanges, and valve components, our engineering services optimize joint integrity, prevent fugitive emissions, and eliminate premature failure in critical piping systems.',
};

export const servicesList = [
  {
    id: 'flange-joint-integrity',
    slug: 'flange-joint-integrity',
    num: '01',
    title: 'Engineering Services & Flange Joint Integrity Calculations',
    shortTitle: 'Joint Integrity Calculations',
    // 3-line concise excerpt for card
    cardDesc:
      'We calculate targeted bolt loads, minimum gasket seating stress (y factor), and operational maintenance factors (m factor) to prevent yield under thermal cycling and pressure surges.',
    // Full content for service details page
    items: [
      {
        title: 'ASME PCC-1 Compliant Torque & Tension Analysis',
        desc: 'We calculate targeted bolt loads, minimum gasket seating stress (y factor), and operational maintenance factors (m factor) to prevent yield under thermal cycling and pressure surges.',
      },
      {
        title: 'Fugitive Emission Control',
        desc: 'Sealing system optimization engineered to meet strict EPA and ISO 15848-1 leak rate thresholds.',
      },
    ],
    image: '/images/services-img.avif',
  },
  {
    id: 'reverse-engineering',
    slug: 'reverse-engineering',
    num: '02',
    title: 'Precision Reverse Engineering',
    shortTitle: 'Precision Reverse Engineering',
    // 3-line concise excerpt for card
    cardDesc:
      'Utilizing precision manual metrology, profile gauges, and micrometers to map non-standard, obsolete, or worn gaskets and valve trim components without CAD drawings.',
    // Full content for service details page
    items: [
      {
        title: 'Dimensional Synthesis & Profiling',
        desc: 'Utilizing precision manual metrology, profile gauges, and micrometers to map non-standard, obsolete, or worn gaskets and valve trim components (balls, seats, stems) without CAD drawings.',
      },
      {
        title: 'Metallurgical & Hardness Mapping',
        desc: 'On-site Positive Material Identification (PMI via portable XRF/OES spectro-analysis) and Brinell/Rockwell hardness testing. We ensure replacement RTJ rings maintain lower hardness than mating flange grooves (e.g., Soft Iron < 90 HB, SS 316 < 160 HB) to prevent expensive face galling.',
      },
    ],
    image: '/images/quality-policy-inspection.jpg',
  },
  {
    id: 'custom-engineering',
    slug: 'custom-engineering',
    num: '03',
    title: 'Custom Gasket & Component Engineering',
    shortTitle: 'Custom Gasket & Component Engineering',
    // 3-line concise excerpt for card
    cardDesc:
      'Engineering non-standard gasket geometries, special serration pitches for Kammprofile cores, and composite layer arrangements for extreme media.',
    // Full content for service details page
    items: [
      {
        title: 'Bespoke Sealing Profiles',
        desc: 'Engineering non-standard gasket geometries, special serration pitches for Kammprofile cores, and composite layer arrangements (expanded graphite, virgin/modified PTFE, mica) for extreme media.',
      },
      {
        title: 'Metallurgical Selection for Severe Service',
        desc: 'Material specification matching UNS alloy designations (Inconel 625/825, Hastelloy C276, Super Duplex S31803, Monel 400) to operating media, compliant with NACE MR0175 / ISO 15156 sour gas requirements.',
      },
    ],
    image: '/images/service-1.avif',
  },
  {
    id: 'field-support',
    slug: 'field-support',
    num: '04',
    title: 'Field Support & On-Site Flange Measurement',
    shortTitle: 'Field Support & Measurement',
    // 3-line concise excerpt for card
    cardDesc:
      'On-site verification of flange surface finishes (Ra / AARH ratings), phonographic serration depths, flange parallelism, and RTJ ring groove wear.',
    // Full content for service details page
    items: [
      {
        title: 'Flange Face & Serration Audits',
        desc: 'On-site verification of flange surface finishes (Ra / AARH ratings), phonographic serration depths, flange parallelism, and RTJ ring groove wear.',
      },
      {
        title: 'Leak Triage & Troubleshooting',
        desc: 'Rapid root-cause diagnosis of active joint leaks, seal blowout, or seat degradation to provide real-time field corrective actions during turnarounds and shutdowns.',
      },
    ],
    image: '/images/hse-policy-safety.jpg',
  },
  {
    id: 'technical-training',
    slug: 'technical-training',
    num: '05',
    title: 'Technical Training & Flange Management Workshops',
    shortTitle: 'Technical Training & Workshops',
    // 3-line concise excerpt for card
    cardDesc:
      'Practical maintenance training covering flange alignment tolerances, targeted bolt-stress selection, star-pattern torque sequencing, and nut-factor (µ) friction variables.',
    // Full content for service details page
    items: [
      {
        title: 'ASME PCC-1 Bolting & Joint Assembly Procedures',
        desc: 'Practical maintenance training covering flange alignment tolerances, targeted bolt-stress selection, star-pattern torque sequencing, and nut-factor (µ) friction variables to ensure uniform gasket seating.',
      },
      {
        title: 'Flange-to-Pipe Fitment & Structural Alignment',
        desc: 'Specialized instruction on pipe-to-flange fitment, joint gap spacing, angular/axial offset correction, and stress-free bolt hole orientation during piping fabrication.',
      },
      {
        title: 'Root-Cause Failure Analysis (RCFA)',
        desc: 'Technical diagnostic seminars for engineering teams to evaluate joint failure mechanisms, including inner-ring buckling, gasket crushing, chemical degradation, thermal stress relaxation, and flange face wire-drawing.',
      },
    ],
    image: '/images/home-services.png',
  },
];
