/**
 * Comprehensive TXCO Industries Data
 * Detailed engineering solutions, sub-segments, and product recommendations
 * Content strictly aligned with client engineering specifications.
 */

export const industriesList = [
  {
    id: 'chemical',
    slug: 'chemical',
    title: 'Chemical Industries',
    shortName: 'Chemical',
    heroTitle: 'CHEMICAL INDUSTRY SOLUTIONS',
    subtitle:
      'High-integrity sealing solutions, PTFE composites, and exotic alloy gaskets engineered for aggressive media, toxic chemicals, and stringent emission standards.',
    bannerImage: '/images/industry-page-banner-img.avif',
    segments: [
      {
        id: 'pharmaceutical-fda',
        name: 'Pharmaceutical & FDA',
        title: 'Pharmaceutical & FDA',
        intro:
          'Sanitary processing requires non-contaminating, zero-extractable sealing systems that endure aggressive Clean-In-Place (CIP) and Steam-In-Place (SIP) sterilization cycles. Gaskets and flanges must maintain structural integrity under thermal shock without leeching compounds into pure media. Compliance with FDA 21 CFR 177.1550, USP Class VI, ASME BPE, and 3-A Sanitary Standards is mandatory.',
        primaryApplications:
          'Water for Injection (WFI) loops, API synthesis reactors, fermentation vessels, sterile fluid transfer lines, bio-reactors, and high-pressure utility steam lines.',
        commonFlanges: [
          {
            name: 'Weld Neck Flanges (ASME B16.5 WN Class 150/300)',
            desc: 'Deployed on high-pressure clean steam boilers, WFI thermal loops, and plant utility headers (with internally polished bores).',
          },
          {
            name: 'Slip-On Flanges (ASME B16.5 SO)',
            desc: 'Restricted to non-critical utility lines, chilled water loops, and plant HVAC infrastructure.',
          },
        ],
        engineeredGaskets: [
          {
            name: 'Sanitary Tri-Clamp Gaskets',
            desc: 'Precision-molded in Virgin PTFE, USP Class VI EPDM, FKM, or Platinum-Cured Silicone for sanitary quick-disconnect unions.',
          },
          {
            name: 'Virgin & Expanded PTFE (ePTFE) Gaskets',
            desc: 'Inert, zero-extractable sheet seals for high-purity process and chemical feed lines.',
          },
          {
            name: 'PTFE Envelope Gaskets',
            desc: 'Elastomeric core encased in a seamless virgin PTFE shield for combined compressibility and chemical purity.',
          },
          {
            name: 'Stainless Steel RTJ Gaskets (ASME B16.20 R Octagonal)',
            desc: 'Precision 316L SS RTJs deployed in high-pressure plant utility boilers and extreme-pressure clean-steam generation headers.',
          },
          {
            name: 'Flange Isolation Kits (FIK – TX-ISOPRO)',
            desc: 'Full-face phenolic or G10 GRE isolation kits installed on utility boundary lines and raw water intake headers to block stray electrical currents.',
          },
        ],
      },
      {
        id: 'plastics-polymers',
        name: 'Plastics & Polymers',
        title: 'Plastics & Polymers',
        intro:
          'Polymerization infrastructure operates under severe mechanical pressures, extreme thermal loading, and continuous exposure to molten resins, synthetic monomers, and heat transfer fluids (HTFs/Dowtherm). Sealing solutions must endure operating temperatures exceeding 500°C–900°C and pressures over 1,000 bar without thermal degradation, graphite oxidation, or joint relaxation under intense thermal expansion cycles.',
        primaryApplications:
          'High-Pressure Polyethylene (LDPE) hyper-compressors, polymerization reactors, monomer recovery units, extruder die heads, polymer melt pumps, and synthetic resin transfer lines.',
        commonFlanges: [
          {
            name: 'High-Pressure Weld Neck Flanges (ASME B16.5 WN Class 600 to 2500)',
            desc: 'Essential for hyper-compressor discharge lines, polymer melt piping, and high-pressure polymerization loops.',
          },
          {
            name: 'RTJ Weld Neck Flanges',
            desc: 'Machined with API/ASME ring grooves for high-temperature, high-pressure polymer melt piping.',
          },
        ],
        engineeredGaskets: [
          {
            name: 'API 6A / ASME B16.20 Ring Type Joint (RTJ) Gaskets',
            desc: 'Heavy-duty machined RX and BX profiles in Soft Iron (Code D), Low Carbon Steel (Code S), or SS 316/304 engineered to contain extreme hydraulic pressures in hyper-compressors and melt pumps.',
          },
          {
            name: 'High-Temperature Mica-Graphite Composite Gaskets',
            desc: 'Layered mica-graphite construction engineered for severe thermal oxidation environments up to 1000°C.',
          },
          {
            name: 'Corrugated / Kammprofile Metal Gaskets with Graphite Facings',
            desc: 'High-recovery seals built for heat-transfer fluid loops and reactor shell joints.',
          },
          {
            name: 'High-Temperature Flange Isolation Kits (FIK – TX-ISOPRO)',
            desc: 'High-temp G11 GRE retainers with spring-energized PTFE or mica seals installed on electric heater flanges and HTF loops to prevent galvanic reaction.',
          },
        ],
      },
      {
        id: 'petrochemical-refining',
        name: 'Petrochemical & Refining',
        title: 'Petrochemical & Refining',
        intro:
          'Refinery infrastructure deals with high-pressure, high-temperature (HPHT) hydrocarbons, volatile hydrogen gas, and sour gas (H2S) service governed by NACE MR0175 / ISO 15156. Sealing systems must provide fire-safe blowout protection (API 6FB / ISO 10497) and comply with stringent low-emission mandates (ISO 15848-1 / TA-Luft) under severe pipeline vibration and pressure surges up to 20,000 PSI.',
        primaryApplications:
          'API 6A high-pressure wellhead Christmas trees, Hydrocracker units, Crude Distillation Units (CDU/VDU), Fluid Catalytic Cracking Units (FCCU), high-pressure flare manifolds, and submarine risers.',
        commonFlanges: [
          {
            name: 'Weld Neck Flanges (ASME B16.5 / B16.47 WN - RF & RTJ Facings)',
            desc: 'Standard across all high-pressure, severe-service refinery process piping.',
          },
          {
            name: 'Long Weld Neck Flanges (LWN)',
            desc: 'Preferred for vessel nozzles, reactor headers, and column connections to eliminate girth weld stress concentration.',
          },
          {
            name: 'API 6A Flanges (Type 6B & 6BX)',
            desc: 'Heavy-duty 2,000 to 20,000 PSI rated flanges used on wellheads, blowout preventers (BOPs), and high-pressure manifolds.',
          },
          {
            name: 'Orifice Flanges (ASME B16.36)',
            desc: 'Specialized WN flanged unions equipped with differential pressure tapping holes for refinery flow metering.',
          },
          {
            name: 'Blind Flanges (ASME B16.5 BL)',
            desc: 'Used for line blinding during turnarounds, hydrotesting, and manifold capping.',
          },
        ],
        engineeredGaskets: [
          {
            name: 'API Spec 6A & ASME B16.20 Ring Type Joint (RTJ) Gaskets',
            desc: 'Flagship solid metal R (Oval & Octagonal), RX, and BX rings manufactured in 316L, Super Duplex, Inconel 625, or Alloy 825 with strict Brinell hardness controls.',
          },
          {
            name: 'ASME B16.20 Spiral Wound Gaskets (SWG)',
            desc: 'Built with internal/external guide rings in 316L or exotic alloys with high-density flexible graphite filler to prevent inner-ring buckling.',
          },
          {
            name: 'Kammprofile Gaskets with Inner Rings',
            desc: 'Heavy-duty serrated metal cores engineered for refinery heat-exchanger main shell-to-tube joints.',
          },
          {
            name: 'API 6FB Fire-Safe Flange Isolation Kits (FIK – TX-ISOPRO)',
            desc: 'Critical Cathodic Protection (CP) isolation kits featuring G10/G11 GRE retainers, spring-energized PTFE seals, and full-length insulating sleeves for pipelines, tank batteries, and subsea risers.',
          },
        ],
      },
      {
        id: 'chemical-processing',
        name: 'Chemical Processing',
        title: 'Chemical Processing',
        intro:
          'General and specialty chemical plants utilize continuous and batch-processing systems cycling between full vacuum, high pressures, and wide temperature swings. Gaskets must withstand broad chemical exposure, prevent joint relaxation on non-rigid or glass-lined flanges, and maintain low bolt-load sealing performance while providing blowout protection on high-pressure headers.',
        primaryApplications:
          'High-pressure reaction loops, gasification units, distillation columns, acid feed manifolds, scrubbers, evaporators, flanged pump housings, and plant-wide high-pressure utility headers.',
        commonFlanges: [
          {
            name: 'Weld Neck Flanges (ASME B16.5 WN)',
            desc: 'Used for main chemical process headers, high-pressure utility steam, and hazardous media transfer.',
          },
          {
            name: 'Slip-On Flanges (ASME B16.5 SO)',
            desc: 'Deployed on low-pressure, non-hazardous process lines and utility water loops.',
          },
          {
            name: 'Socket Weld Flanges (ASME B16.5 SW)',
            desc: 'Utilized on small-bore high-pressure chemical dosing and instrument piping lines.',
          },
          {
            name: 'Threaded Flanges (ASME B16.5 TH)',
            desc: 'Restricted to low-pressure utility lines where welding is prohibited.',
          },
        ],
        engineeredGaskets: [
          {
            name: 'Ring Type Joint (RTJ) Gaskets',
            desc: 'Deployed in high-pressure reaction loops, high-temperature gasifiers, and extreme-pressure chemical transport manifolds.',
          },
          {
            name: 'Tanged Metal-Reinforced Graphite Gaskets',
            desc: 'High-strength flexible graphite sheets bonded to a 316L tanged steel core for blowout protection on standard RF flanges.',
          },
          {
            name: 'Low-Emission (Low-E) Spiral Wound Gaskets',
            desc: 'Formulated with high-density filler matrices to meet ISO 15848-1 Class A leak rates.',
          },
          {
            name: 'Modified PTFE Sheet Gaskets',
            desc: 'Biaxially oriented PTFE filled with silica, barium sulfate, or hollow glass microspheres for low bolt-load and glass-lined steel applications.',
          },
          {
            name: 'Flange Isolation Kits (FIK – TX-ISOPRO)',
            desc: 'G10 GRE retainers with dual elastomeric (FKM/NBR) or ePTFE seal elements, installed at plant battery limits, tank connections, and underground entries.',
          },
        ],
      },
    ],
    productSpotlight: [
      {
        id: 'swg-cgi',
        title: 'SPIRAL WOUND GASKETS',
        specs: 'Style R • RIR • CG • CGI',
        image: '/images/products/industrial-gaskets/sprial-wound-gaskets.png',
        href: '/products/gaskets/semi-metallic-gaskets/details?product=spiral-wound-gaskets',
      },
      {
        id: 'rtj-all',
        title: 'RING TYPE JOINT (RTJ)',
        specs: 'Style R • RX • BX Precision Rings',
        image: '/images/products/industrial-gaskets/ring-type-joint.png',
        href: '/products/gaskets/metallic-gaskets/details?product=ring-type-joint-rtj',
      },
      {
        id: 'kammprofile-all',
        title: 'KAMMPROFILE GASKETS',
        specs: 'High Pressure / High Temp Heat Exchangers',
        image: '/images/products/industrial-gaskets/kammprofile-gaskets.png',
        href: '/products/gaskets/semi-metallic-gaskets/details?product=kammprofile-gaskets',
      },
      {
        id: 'fik-all',
        title: 'FLANGE ISOLATION KITS',
        specs: 'TX-ISOPRO • Fire-Safe API 6FB',
        image: '/images/products/industrial-gaskets/flange-insulation-kits.png',
        href: '/products/gaskets/semi-metallic-gaskets/details?product=flange-isolation-kits',
      },
    ],
  },

  {
    id: 'energy',
    slug: 'energy',
    title: 'Energy & Oil & Gas',
    shortName: 'Energy',
    heroTitle: 'ENERGY & OIL & GAS SOLUTIONS',
    subtitle:
      'API 6A, API 17D, and ASME certified high-pressure gaskets, compact flange rings, and fire-safe flange insulation kits engineered for extreme subsea, transmission, and downstream refining.',
    bannerImage: '/images/industry-page-banner-img.avif',
    segments: [
      {
        id: 'upstream-offshore',
        name: 'Upstream & Offshore',
        title: 'Upstream & Offshore (HPHT & Subsea)',
        intro:
          'Operating in harsh marine environments, subsea depths, and High-Pressure High-Temperature (HPHT) wellhead zones demands ultimate mechanical reliability. Equipment is subjected to hydrostatic ocean pressures, intense structural flexure, dynamic topside vibration, sour gas (H2S) exposure under NACE MR0175 / ISO 15156, and wellhead working pressures reaching up to 20,000 PSI.',
        whoWeServe: [
          'Exploration & Production (E&P) operators',
          'Offshore drilling contractors',
          'FPSO operators',
          'Subsea tree and Blowout Preventer (BOP) OEMs',
          'Subsea piping EPCs',
          'Naval marine infrastructure contractors',
        ],
        primaryApplications:
          'API 6A wellhead Christmas trees, subsea BOP stack connections, offshore production risers, subsea manifolds, choke-and-kill manifolds, high-pressure mud pumps, and topside separation units.',
        commonFlanges: [
          {
            name: 'API 6A Type 6B & 6BX Flanges',
            desc: 'Heavy-duty, extreme-pressure flanges engineered for wellhead, BOP, and Christmas tree assemblies.',
          },
          {
            name: 'ASME B16.5 / B16.47 Weld Neck Flanges (WN - RTJ Facing)',
            desc: 'Standard high-pressure connections for topside process manifolds and riser piping.',
          },
        ],
        engineeredGaskets: [
          {
            name: 'API Spec 6A & 17D Ring Type Joint (RTJ) Gaskets',
            desc: 'Solid metal RX, BX, and pressure-balanced SRX / SBX subsea profiles machined in Inconel 718, Super Duplex S32750, and 316L SS with strict hardness verification to force plastic seal deformation without damaging expensive groove faces.',
          },
          {
            name: 'API 6FB Fire-Safe Flange Isolation Kits (FIK - TX-ISOPRO)',
            desc: 'High-dielectric G10/G11 Glass-Reinforced Epoxy (GRE) retainers with spring-energized PTFE seal elements engineered for splash-zone atmospheric protection and subsea Cathodic Protection (CP) isolation.',
          },
          {
            name: 'Compact Flange IX Metallic Seals',
            desc: 'Machined metallic seal rings engineered for NORSOK L-005 compact flanges to provide dual-cone seating under severe dynamic bending moments.',
          },
          {
            name: 'Severe-Service Spiral Wound Gaskets (ASME B16.20)',
            desc: 'Winding metallurgy in Inconel 625 or 316L with high-density flexible graphite or ePTFE fillers for topside gas compression and separation units.',
          },
        ],
      },
      {
        id: 'midstream-pipeline',
        name: 'Midstream & Pipeline',
        title: 'Midstream & Pipeline (Transmission)',
        intro:
          'Transporting crude oil, natural gas, NGLs, and refined products across thousands of miles of cross-country and subsea pipelines requires long-term joint integrity. Pipeline infrastructure must withstand continuous ground movement, severe thermal expansion, soil load stresses, pigging impact forces, and electrochemical corrosion—all while complying with strict environmental leakage regulations.',
        whoWeServe: [
          'Interstate crude and gas pipeline operators',
          'Compressor and pump station EPC contractors',
          'Metering skid manufacturers',
          'Gas processing plant operators',
          'Underground storage facility managers',
          'Pipeline maintenance providers',
        ],
        primaryApplications:
          'Cross-country transmission pipelines, gas compressor stations, liquid pump stations, pig launchers and receivers, metering/custody transfer skids, underground valve vaults, and tank farm battery limits.',
        commonFlanges: [
          {
            name: 'High-Yield Weld Neck Flanges (MSS SP-44 / CSA Z245.12 / ASME B16.47)',
            desc: 'High-strength forged flanges matched to high-yield line pipe grades (API 5L X52 through X80).',
          },
          {
            name: 'ASME B16.36 Orifice Flanges',
            desc: 'Flanged unions equipped with integrated pressure tapings for custody transfer flow measurement.',
          },
          {
            name: 'Blind Flanges (ASME B16.5 BL)',
            desc: 'Deployed on pig trap quick-actuating closures and maintenance bypass lines.',
          },
        ],
        engineeredGaskets: [
          {
            name: 'Cathodic Protection Flange Isolation Kits (FIK - TX-ISOPRO)',
            desc: 'Dielectric isolation sets installed to maintain cathodic protection currents and block pipeline galvanic corrosion cells.',
          },
          {
            name: 'Low-Emission Spiral Wound Gaskets (ASME B16.20 Low-E)',
            desc: 'Specially engineered filler density SWGs designed to maintain tightness under remote compressor station vibration, achieving ISO 15848-1 Class A fugitive emission compliance.',
          },
          {
            name: 'Kammprofile Gaskets with Inner & Outer Rings',
            desc: 'Heavy-duty serrated metal cores faced with expanded flexible graphite for high-vibration pump station discharge flanges.',
          },
          {
            name: 'API Spec 6A Ring Type Joint (RTJ) Gaskets',
            desc: 'Solid metal R Octagonal and RX rings used on high-pressure gas gathering manifolds and pig trap doors.',
          },
        ],
      },
      {
        id: 'downstream-refining',
        name: 'Downstream Refining',
        title: 'Downstream Refining (Thermal Shock)',
        intro:
          'Refining operations represent one of the most demanding thermal and chemical environments in heavy industry. Fluid containment systems must endure high thermal shock, continuous operating temperatures exceeding 650°C, High-Temperature Hydrogen Attack (HTHA), toxic Hydrofluoric (HF) acid alkylation, and sour hydrocarbon media while adhering to strict EPA Method 21 and TA-Luft / ISO 15848-1 zero-leakage mandates.',
        whoWeServe: [
          'Integrated petroleum refineries',
          'Petrochemical complexes',
          'Independent fuel processors',
          'Refinery turnaround and maintenance contractors',
          'Heat exchanger OEMs',
          'Industrial overhaul service teams',
        ],
        primaryApplications:
          'Crude Distillation Units (CDU/VDU), Fluid Catalytic Cracking Units (FCCU), Hydrocrackers, Hydrotreaters, HF/Sulfuric Acid Alkylation units, Delayed Cokers, Flare Headers, and Shell-and-Tube Heat Exchangers.',
        commonFlanges: [
          {
            name: 'Weld Neck Flanges (ASME B16.5 / B16.47 WN - RF & RTJ)',
            desc: 'Standard across all high-pressure, high-temperature refinery units to ensure smooth stress transition from flange to pipe.',
          },
          {
            name: 'Long Weld Neck Flanges (LWN)',
            desc: 'Preferred for heavy vessel nozzles, column manways, and reactor nozzles to eliminate girth-weld fatigue.',
          },
          {
            name: 'Orifice Flanges (ASME B16.36)',
            desc: 'Used for precise flow monitoring across refinery processing units.',
          },
        ],
        engineeredGaskets: [
          {
            name: 'ASME B16.20 Spiral Wound Gaskets (SWG)',
            desc: 'Constructed with 316L, Inconel 625, or Monel 400 windings and high-density flexible graphite fillers. Features mandatory solid inner rings to prevent radial inner-ring buckling under severe thermal shock.',
          },
          {
            name: 'Kammprofile Gaskets for Heat Exchangers',
            desc: 'Serrated metallic cores faced with expanded flexible graphite or mica, custom-engineered for floating heads, channel covers, and shell-to-tubesheet joints subject to differential thermal expansion.',
          },
          {
            name: 'API Spec 6A & ASME B16.20 Ring Type Joint (RTJ) Gaskets',
            desc: 'Precision-machined R, RX, and BX rings with strict Brinell hardness caps (e.g., Soft Iron < 90 HB, SS 316 < 160 HB) to protect expensive flange grooves from galling during cyclic operation.',
          },
          {
            name: 'Monel-Wound & ePTFE Gaskets for HF Alkylation',
            desc: 'Specially designed seals using Monel 400 cores/windings and virgin ePTFE to resist lethal hydrofluoric acid corrosion and prevent crevice attack.',
          },
          {
            name: 'API 6FB Fire-Safe Flange Isolation Kits (FIK – TX-CERAMPRO)',
            desc: 'Installed at tank battery limits, offsite transfer lines, and dissimilar metal vessel connections for CP isolation and fire-safe joint integrity.',
          },
        ],
      },
    ],
    productSpotlight: [
      {
        id: 'rtj-all',
        title: 'API 6A / 17D RTJ GASKETS',
        specs: 'Solid Metal R • RX • BX • SRX • SBX',
        image: '/images/products/industrial-gaskets/ring-type-joint.png',
        href: '/products/gaskets/metallic-gaskets/details?product=ring-type-joint-rtj',
      },
      {
        id: 'swg-inconel',
        title: 'SPIRAL WOUND GASKETS',
        specs: 'Inconel 625 / Monel 400 Windings',
        image: '/images/products/industrial-gaskets/sprial-wound-gaskets.png',
        href: '/products/gaskets/semi-metallic-gaskets/details?product=spiral-wound-gaskets',
      },
      {
        id: 'fik-cp',
        title: 'CATHODIC ISOLATION KITS',
        specs: 'TX-ISOPRO • TX-CERAMPRO High Dielectric',
        image: '/images/products/industrial-gaskets/flange-insulation-kits.png',
        href: '/products/gaskets/semi-metallic-gaskets/details?product=flange-isolation-kits',
      },
      {
        id: 'flanges-wn',
        title: 'HIGH-YIELD WELD NECK FLANGES',
        specs: 'API 5L X52-X80 • ASME B16.47 / MSS SP-44',
        image: '/images/products/flanges/weld-neck-flanges.png',
        href: '/products/flanges/details?product=weld-neck-flanges',
      },
    ],
  },

  {
    id: 'manufacturing',
    slug: 'manufacturing',
    title: 'Manufacturing & Heavy Industry',
    shortName: 'Manufacturing',
    heroTitle: 'MANUFACTURING & HEAVY INDUSTRY SOLUTIONS',
    subtitle:
      'Durable sealing materials, sanitary fluoropolymers, and heavy hydraulic gaskets engineered for food & beverage processing, blast furnaces, rolling mills, and extreme hydraulic power units.',
    bannerImage: '/images/industry-page-banner-img.avif',
    segments: [
      {
        id: 'food-beverage',
        name: 'Food & Beverage (Sanitary & FDA)',
        title: 'Food & Beverage (FDA)',
        intro:
          'Food and beverage processing requires sanitary, non-contaminating, and zero-extractable fluid containment systems that withstand high-temperature processing, organic fats, acidic flavorings, and aggressive Clean-In-Place (CIP) and Steam-In-Place (SIP) chemical sterilization cycles. Sealing materials must endure continuous thermal shock without leeching plasticizers, degrading, or creating internal crevices that encourage bacterial growth. Strict compliance with FDA 21 CFR 177.1550 / 177.2600, USP Class VI, ASME BPE, and 3-A Sanitary Standards is mandatory.',
        whoWeServe: [
          'Industrial food processors',
          'Commercial beverage & bottling complexes',
          'Dairy & milk processing plants',
          'Breweries and distilleries',
          'Sanitary equipment OEMs (mixers, homogenizers, pasteurizers)',
          'Bioprocess piping contractors',
        ],
        primaryApplications:
          'High-temperature short-time (HTST) pasteurization loops, aseptic filling lines, CIP/SIP utility distribution headers, mixing kettles, high-pressure homogenizers, evaporation vessels, and steam sterilization headers.',
        commonFlanges: [
          {
            name: 'Weld Neck Flanges (ASME B16.5 WN Class 150/300)',
            desc: 'Deployed on high-pressure utility steam lines, thermal fluid loops, and boiler feed systems (with internally ground and polished welds).',
          },
          {
            name: 'Slip-On & Threaded Flanges (ASME B16.5 SO/TH)',
            desc: 'Restricted strictly to non-process utility lines, raw water intake, and facility HVAC cooling networks.',
          },
        ],
        engineeredGaskets: [
          {
            name: 'Restructured Virgin & Expanded PTFE (ePTFE) Sheets',
            desc: 'Inert, non-contaminating sheet seals designed for flanged product transfer lines, offering zero creep relaxation under thermal cycling.',
          },
          {
            name: 'PTFE Envelope Gaskets',
            desc: 'Combining an elastomeric core (EPDM/FKM) with a seamless virgin PTFE outer sheath for enhanced compressibility on low-bolt-load sanitary vessel flanges.',
          },
          {
            name: 'Stainless Steel RTJ Gaskets (ASME B16.20 R Octagonal)',
            desc: 'Precision 316L SS Ring Type Joints deployed in high-pressure clean-steam generation boilers and thermal sterilization utility headers.',
          },
          {
            name: 'Flange Isolation Kits (FIK – TX-ISOPRO)',
            desc: 'Full-face phenolic or G10 GRE isolation kits installed on facility boundary water mains and utility supply piping to isolate stray electrical currents and protect plant grounding systems.',
          },
        ],
      },
      {
        id: 'heavy-machinery-steel',
        name: 'Heavy Machinery & Steel',
        title: 'Heavy Machinery & Steel',
        intro:
          'Heavy machinery and steel manufacturing represent an environment of extreme mechanical stress, intense radiant heat, shock loading, and massive hydraulic pressures. Equipment must endure continuous exposure to molten metal proximity, abrasive furnace scale, aggressive cooling water, and hydraulic working pressures often exceeding 350 bar (5,000 PSI). Sealing integrity depends on robust metallurgy, high-recovery gasket geometries, and exceptional resistance to thermal oxidation up to 1,000°C.',
        whoWeServe: [
          'Integrated steel mills (Blast Furnace, BOF, EAF)',
          'Hot/cold rolling mills',
          'Heavy hydraulic press OEMs',
          'Metal forging facilities',
          'Smelting operations',
          'Mining equipment builders',
          'Heavy industrial maintenance teams',
        ],
        primaryApplications:
          'Blast furnace cooling plates, oxygen steelmaking lances, continuous casting machines, hot rolling mill hydraulic power units (HPUs), heavy forging presses, slag granulators, and high-pressure steam descaling headers.',
        commonFlanges: [
          {
            name: 'High-Pressure Weld Neck Flanges (ASME B16.5 / B16.47 WN Class 300 to 2500)',
            desc: 'Essential for high-pressure cooling water mains, oxygen supply lines, and descaling spray headers.',
          },
          {
            name: 'Custom Large-Diameter Vessel Flanges',
            desc: 'Non-standard square, rectangular, or circular flanged joints built into furnace doors, gear drives, and heat treatment shells.',
          },
          {
            name: 'Threaded & Socket Weld Flanges (ASME B16.5 SW/TH)',
            desc: 'Utilized on small-bore high-pressure grease lines, hydraulic control lines, and sensor wells.',
          },
        ],
        engineeredGaskets: [
          {
            name: 'High-Temperature Flange Isolation Kits (FIK – TX-CERAMPRO)',
            desc: 'Engineered for high-temperature and fire-safe electrical isolation in intense radiant heat zones.',
          },
          {
            name: 'API Spec 6A & ASME B16.20 Ring Type Joint (RTJ) Gaskets',
            desc: 'Heavy-duty solid metal R (Oval/Octagonal) and RX profiles in Soft Iron (Code D) or SS 304/316 engineered for extreme-pressure hydraulic systems, oxygen lances, and forge press manifolds.',
          },
          {
            name: 'Heavy-Duty Spiral Wound & Kammprofile Gaskets',
            desc: 'Metal-cored seals with tanged graphite facings engineered to survive heavy structural vibration on rolling mill cooling water piping and high-pressure steam headers.',
          },
          {
            name: 'Heavy-Duty Flange Isolation Kits (FIK – TX ISOPRO)',
            desc: 'High-strength G10/G11 GRE isolation sets installed on electric furnace transformers, electrolysis cells, and underground cooling water mains to block massive stray electrical currents and prevent rapid galvanic destruction.',
          },
        ],
      },
    ],
    productSpotlight: [
      {
        id: 'kammprofile-all',
        title: 'KAMMPROFILE GASKETS',
        specs: 'High Mechanical Shock & Vibration',
        image: '/images/products/industrial-gaskets/kammprofile-gaskets.png',
        href: '/products/gaskets/semi-metallic-gaskets/details?product=kammprofile-gaskets',
      },
      {
        id: 'rtj-all',
        title: 'HEAVY-DUTY RTJ GASKETS',
        specs: 'Soft Iron • SS 304/316 Extreme Hydraulic',
        image: '/images/products/industrial-gaskets/ring-type-joint.png',
        href: '/products/gaskets/metallic-gaskets/details?product=ring-type-joint-rtj',
      },
      {
        id: 'swg-heavy',
        title: 'SPIRAL WOUND GASKETS',
        specs: 'High-Pressure Steam & Cooling Headers',
        image: '/images/products/industrial-gaskets/sprial-wound-gaskets.png',
        href: '/products/gaskets/semi-metallic-gaskets/details?product=spiral-wound-gaskets',
      },
      {
        id: 'fik-cerampro',
        title: 'HIGH-TEMP ISOLATION KITS',
        specs: 'TX-CERAMPRO Up to 1000°C Thermal Zones',
        image: '/images/products/industrial-gaskets/flange-insulation-kits.png',
        href: '/products/gaskets/semi-metallic-gaskets/details?product=flange-isolation-kits',
      },
    ],
  },

  {
    id: 'metals-mining',
    slug: 'metals-mining',
    title: 'Metals & Mining',
    shortName: 'Metals and Mining',
    heroTitle: 'METALS & MINING INDUSTRY SOLUTIONS',
    subtitle:
      'High-Pressure Acid Leach (HPAL) titanium autoclave seals, slurry transmission pipeline isolation, and erosion-resistant metallurgy engineered for extreme abrasive hydrometallurgical extraction.',
    bannerImage: '/images/industry-page-banner-img.avif',
    segments: [
      {
        id: 'hpal-slurry',
        name: 'HPAL & Slurry Pipelines',
        title: 'High-Pressure Acid Leach (HPAL) & Slurry Pipelines',
        intro:
          'Hydrometallurgical mineral extraction and long-distance ore transport represent two of the most aggressive mechanical and chemical processing environments in heavy industry. Fluid containment systems must concurrently survive extreme erosion-corrosion from high-velocity mineral slurries (silica, nickel laterite, copper tailings), concentrated hot sulfuric acid (H2SO4), continuous hydraulic shock, thermal expansion up to 270°C, and system pressures exceeding 200 bar (3,000 PSI).',
        whoWeServe: [
          'Nickel, cobalt, gold, and lithium hydrometallurgical processing complexes',
          'Long-distance slurry transmission pipeline operators',
          'Mineral tailings management facilities (TMF)',
          'Autoclave vessel OEMs',
          'Slurry pump manufacturers',
          'Global mining EPC contractors',
        ],
        primaryApplications:
          'HPAL titanium autoclave reactors, high-pressure slurry feed pumps, acid injection lines, flash vessel discharge headers, choke manifold assemblies, long-distance iron ore/copper slurry transmission pipelines, and tailings disposal lines.',
        commonFlanges: [
          {
            name: 'Weld Neck Flanges (ASME B16.5 / B16.47 WN Class 600 to 2500)',
            desc: 'Primary choice for severe-service, high-pressure slurry discharge lines to ensure smooth bore alignment and eliminate turbulence-induced wall erosion.',
          },
          {
            name: 'Titanium & Exotic Alloy Lap Joint Flanges (ASME B16.5 LJ)',
            desc: 'Titanium Grade 2, Grade 7, or Hastelloy C276 stub ends paired with carbon steel backup flanges to safely handle hot acid lines at optimized material costs.',
          },
          {
            name: 'Custom Lined Pipe Flanges',
            desc: 'Specialized flanged joints engineered to accommodate internal rubber, polyurethane, or basalt erosion-resistant linings without pinching or shearing the internal barrier.',
          },
        ],
        engineeredGaskets: [
          {
            name: 'Exotic Alloy Ring Type Joint (RTJ) Gaskets (ASME B16.20)',
            desc: 'Precision-machined R, RX, and BX rings in Titanium Grade 2/7, Hastelloy C276, or Super Duplex S32750 engineered for HPAL titanium autoclaves, acid injection nozzles, and high-pressure slurry isolation valves.',
          },
          {
            name: 'Erosion-Resistant Kammprofile Gaskets',
            desc: 'Titanium or Hastelloy serrated metallic cores faced with expanded ePTFE or flexible graphite, engineered to resist internal fluid scouring and maintain joint tightness across high-vibration slurry pump manifolds.',
          },
          {
            name: 'Restructured ePTFE Sheet & Envelope Seals',
            desc: 'Biaxially oriented ePTFE sheets resistant to full pH 0–14 acid exposure, formulated to eliminate cold-flow under cyclic thermal loading on low-to-medium pressure acid feed piping.',
          },
          {
            name: 'Heavy-Duty Cathodic Protection Flange Isolation Kits (FIK - TX ISOPRO)',
            desc: 'High-dielectric G10/G11 Glass-Reinforced Epoxy with TX-FLEX seals to block galvanic corrosion cells between titanium/exotic vessel interfaces and steel piping, while maintaining Cathodic Protection (CP) integrity on cross-country slurry pipelines.',
          },
        ],
      },
    ],
    productSpotlight: [
      {
        id: 'rtj-titanium',
        title: 'TITANIUM & EXOTIC ALLOY RTJ',
        specs: 'Titanium Gr. 2/7 • Hastelloy C276 • S32750',
        image: '/images/products/industrial-gaskets/ring-type-joint.png',
        href: '/products/gaskets/metallic-gaskets/details?product=ring-type-joint-rtj',
      },
      {
        id: 'kammprofile-erosion',
        title: 'EROSION-RESISTANT KAMMPROFILE',
        specs: 'Titanium / Hastelloy Serrated Cores',
        image: '/images/products/industrial-gaskets/kammprofile-gaskets.png',
        href: '/products/gaskets/semi-metallic-gaskets/details?product=kammprofile-gaskets',
      },
      {
        id: 'eptfe-hpal',
        title: 'RESTRUCTURED ePTFE SEALS',
        specs: 'Full pH 0-14 Universal Acid Resistance',
        image: '/images/products/industrial-gaskets/non-metallic-gaskets.png',
        href: '/products/gaskets/non-metallic-gaskets',
      },
      {
        id: 'fik-slurry',
        title: 'HEAVY-DUTY CP ISOLATION KITS',
        specs: 'TX ISOPRO • High-Dielectric Glass Epoxy',
        image: '/images/products/industrial-gaskets/flange-insulation-kits.png',
        href: '/products/gaskets/semi-metallic-gaskets/details?product=flange-isolation-kits',
      },
    ],
  },
];

