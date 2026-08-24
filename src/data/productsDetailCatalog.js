/**
 * Comprehensive Product Details Catalog
 * Provides data for the exact Product Details Page layout
 */

export const subcategoryDetailCatalog = {
  // ==========================================
  // GASKETS -> Metallic Gaskets
  // ==========================================
  'metallic-gaskets': {
    parentCategoryTitle: 'GASKETS',
    parentCategoryHref: '/products/gaskets',
    subcategoryTitle: 'Metallic Gaskets',
    productsList: [
      { id: 'weld-lip-seals', title: 'WELD-LIP SEALS', downloadTitle: 'Weld Ring Gaskets' },
      { id: 'ring-type-joint-rtj', title: 'RING TYPE JOINT (RTJ)', downloadTitle: 'Ring Type Joint (RTJ)' },
      { id: 'rubber-coated-rtj', title: 'RUBBER-COATED RTJ', downloadTitle: 'Rubber-Coated RTJ' },
      { id: 'ptfe-insert-rtj', title: 'PTFE-INSERT RTJ', downloadTitle: 'PTFE-Insert RTJ' },
      { id: 'protective-coated-rtj', title: 'PROTECTIVE-COATED RTJ', downloadTitle: 'Protective-Coated RTJ' },
      { id: 'bonnet-rings', title: 'BONNET RINGS', downloadTitle: 'Bonnet Rings' },
      { id: 'lens-rings', title: 'LENS RINGS', downloadTitle: 'Lens Rings' },
      { id: 'blind-gaskets', title: 'BLIND GASKETS', downloadTitle: 'Blind Gaskets' },
      { id: 'vx-ax-gaskets', title: 'VX–AX GASKETS', downloadTitle: 'VX-AX Gaskets' },
      { id: 'ix-gaskets', title: 'IX GASKETS', downloadTitle: 'IX Gaskets' },
      { id: 'delta-gaskets', title: 'DELTA GASKETS', downloadTitle: 'Delta Gaskets' },
      { id: 'bridge-gaskets', title: 'BRIDGE GASKETS', downloadTitle: 'Bridge Gaskets' },
      { id: 'spectacle-blind-gaskets', title: 'SPECTACLE BLIND GASKETS', downloadTitle: 'Spectacle Blinds' },
      { id: 'transition-rtj', title: 'TRANSITION RTJ', downloadTitle: 'Transition RTJ' },
      { id: 'soft-material-seated-rtj', title: 'SOFT-MATERIAL-SEATED RTJ', downloadTitle: 'Soft-Seated RTJ' },
    ],
    productDetails: {
      'weld-lip-seals': {
        title: 'WELD LIP SEALS',
        image: '/images/product-detials-images/Welded-Lip-Seals.avif',
        downloadTitle: 'Weld Ring Gaskets',
        sections: [
          {
            heading: 'WELD LIP SEALS',
            paragraphs: [
              'A weld ring gasket, also commonly referred to as a lip seal weld ring, consists of a pair of metallic rings. Each individual ring is first welded to its respective flange face. Upon assembly of the joint, the two rings are then welded together at their outer periphery to complete the seal.',
              'The use of weld ring gaskets is recommended when conventional gasket types are considered unsuitable and when joint disassembly is infrequent. These gaskets are generally classified as semi-detachable, since the welded connection between the sealing rings must be cut in addition to removing the flange bolts to open the joint.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
            bulletsIntro: 'Several designs of weld ring gaskets are available, including:',
            bullets: [
              'Membrane weld ring gaskets (DIN 2695)',
              'Profiled weld ring gaskets with internal and external lips',
              'Hollow-lip weld ring gaskets for large diameter and high thermal expansion',
            ],
          },
          {
            heading: 'MEMBRANE WELDING RING GASKETS',
            paragraphs: [
              'Membrane weld ring gaskets and weld ring gaskets are not suitable for accommodating significant radial differential expansion between the connected components. Depending on the specific design of the gasket, the allowable radial movement can be as low as 0.1 mm (0.004 inches) and should not exceed 0.5 mm (0.02 inches).',
              'A membrane weld ring gasket typically consists of two matching metal rings, each with a thickness of approximately 4 mm (0.16 inches). These rings are made from materials that are either identical or compatible with the flange materials, in order to ensure:',
            ],
            bullets: [
              'Chemical and metallurgical weld compatibility',
              'Thermal conductivity and expansion coefficient alignment',
              'Minimization of radial differential stresses across the sealing zone',
            ],
            subParagraphs: [
              'Each ring is individually welded to its corresponding flange using an internal joint weld. After both rings are secured, a second welding step is performed along the outer diameter, creating a fully welded, sealed joint.',
              'The welds used in this configuration are classified as seal welds, meaning they are intended strictly to ensure leak-tightness, rather than to provide structural mechanical strength.',
              'The width of the weld ring gasket must be engineered to withstand internal pressure, particularly acting in the circumferential (hoop) direction, ensuring mechanical stability and integrity under operating conditions.',
            ],
            table: {
              headers: ['CODE', 'FIGURE', 'DESCRIPTION', 'Typical thickness', 'Re-weld times', 'Radial compensation'],
              rows: [
                {
                  code: 'W16-M',
                  figureType: 'membrane',
                  description: 'Basic solution for applications where the space between flanges is limited, or data in accordance with DIN 2695 standard (even for Carbon Steel rings) (*)',
                  thickness: '4 mm',
                  reweld: 'up to 2',
                  radial: '0.2 mm',
                },
              ],
              footnote: 'All welded rings can be executed according to customer drawings.\n(*) In accordance with DIN 2695:2002 for C22 / Carbon Steel flanges.',
            },
          },
          {
            heading: 'WELD RING GASKETS',
            paragraphs: [
              'Weld ring gaskets, also known as lip seals or weld ring seals, represent a permanent metallic sealing solution used in applications where sealing reliability is essential and joint disassembly is limited. The welds associated with this type of gasket are seal welds, not structural welds, as their purpose is solely to ensure the continuity of the sealing barrier rather than to contribute to the mechanical strength of the connection.',
              'The width of the ring must be designed to withstand the internal pressure acting in the circumferential (hoop) direction.',
              'The most common configurations — solid-body and hollow-lip types — generally feature a sealing body thickness of about 15 mm. Hollow-lip gaskets provide more favorable stress conditions in the sealing weld area and a greater ability to absorb joint movements or deformations, making them particularly suitable where radial thermal expansion differences between flanges may occur. Depending on their geometry, these gaskets can compensate for radial expansion differences of up to approximately 5 mm.',
              'Under critical operating conditions, it is recommended to perform a Finite Element Analysis (FEA) or Finite Difference Analysis (FDA) on the flanges associated with the joint to determine the relative radial movement and its effect on weld stress in the gasket area. Such verification is especially necessary when the flange and gasket materials have significantly different coefficients of thermal expansion, when flanges have non-uniform thermal masses with operating temperatures above 93 °C, or when the service temperature exceeds 176 °C.',
            ],
            table: {
              headers: ['CODE', 'FIGURE', 'DESCRIPTION', 'Typical thickness', 'Re-weld times', 'Radial compensation'],
              rows: [
                {
                  code: 'W16-S1',
                  figureType: 'profiled',
                  description: 'Similar to type W16-M but with both outside and inside lip, manufactured from solid section (others available which weld on flat bladed execution) (*)',
                  thickness: '15 mm',
                  reweld: 'up to 3',
                  radial: '0.4 mm',
                },
              ],
              footnote: 'All welded rings can be executed according to customer drawings.\n(*) In accordance with DIN 2695:2002 for C22 flanges.',
            },
          },
          {
            heading: 'HOLLOW-LIP WELD RING GASKETS',
            paragraphs: [
              'It is also important to ensure that there is sufficient space for executing the seal weld along the outer edge of the gasket. If the available space does not allow it, special flanges with a bevel between the mating surfaces can be adopted, in order to provide access to the weld area without compromising the strength of the joint.',
              'When weld ring gaskets are used as a replacement for conventional gaskets in existing joints, it must be considered that they are self-energizing seals and therefore do not require compression loads to maintain sealing. The tightening of the flange bolts serves only to counteract hydrostatic thrust and external axial or bending loads. It is therefore necessary to verify the suitability of the existing flanges and bolting in accordance with the applicable design code.',
              'From a geometrical standpoint, the sealing body is normally aligned with, or slightly protruding beyond, the outer edge of the flange mating surface, while the welding lips extend beyond the main body. It is therefore essential to ensure sufficient clearance between the gasket and the flange bolts; if this is not possible, the gasket body may be positioned within the outer diameter of the mating surface — a solution not applicable to membrane-type versions.',
              'Finally, a slight bevel on the flanges may be required to provide adequate working space for welding the lips. The joint configuration must be verified considering both the position of the gasket and any beveling, to ensure that the strength and integrity of the flanges remain compliant with the design requirements.',
            ],
            table: {
              headers: ['CODE', 'FIGURE', 'DESCRIPTION', 'Typical thickness', 'Re-weld times', 'Radial compensation'],
              rows: [
                {
                  code: 'W16-L1',
                  figureType: 'hollow-1',
                  description: 'Advanced execution recommended especially for large diameter joints. Flexible to compensate axial and radial differential expansions, extremely resistant to thermal and pressure shocks. The hollow execution allows taking full advantage of movements from narrow convex surfaces compared to outside seam execution.',
                  thickness: '15 mm',
                  reweld: 'up to 4',
                  radial: '3.0 mm',
                },
                {
                  code: 'W16-L2',
                  figureType: 'hollow-2',
                  description: 'Most advanced construction recommended especially for large diameter joints. Excellent to compensate axial and extreme radial differential expansions, extremely resistant to thermal and pressure shocks.',
                  thickness: '20 mm',
                  reweld: 'from 3 to 6',
                  radial: '5.0 mm',
                },
              ],
              footnote: 'All welded rings can be executed according to customer drawings.\n(*) In accordance with DIN 2695:2002 for C22 flanges.',
            },
          },
        ],
      },

      'ring-type-joint-rtj': {
        title: 'RING TYPE JOINT (RTJ)',
        image: '/images/product-detials-images/Ring-Type-Joint-RT-J.avif',
        downloadTitle: 'Ring Type Joint (RTJ)',
        sections: [
          {
            heading: 'RING TYPE JOINT (RTJ) GASKETS',
            paragraphs: [
              'Ring Type Joint (RTJ) gaskets are heavy-duty metallic sealing rings precision CNC-machined from solid forged metal alloys. Designed specifically for high-pressure and high-temperature environments, RTJ gaskets are widely used in the Oil & Gas industry, refineries, petrochemical plants, valves, and pipeline flange connections.',
              'Manufactured in full compliance with ASME B16.20, API Spec 6A, and API 17D (subsea) specifications, RTJ gaskets provide an impermeable metal-to-metal seal under operating pressures up to 20,000 psi (138 MPa).',
              'Under initial bolt load, the small initial contact line between the gasket angle and the 23° flange groove yields plastically, burnishing into the metal groove face to form an absolute hermetic seal impervious to explosive decompression, sour gas (H2S), and severe thermal cycling.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'rtj-assembly',
            bulletsIntro: 'Core RTJ Styles Available:',
            bullets: [
              'Style R Oval Cross-Section (ASME B16.20 / API 6A up to 5,000 psi)',
              'Style R Octagonal Cross-Section (ASME B16.20 / API 6A up to 5,000 psi)',
              'Style RX Pressure-Energized Cross-Section (API 6A / Class 720 to 5000)',
              'Style BX Pressure-Energized Subsea (API 6A / API 17D up to 20,000 psi)',
            ],
          },
          {
            heading: 'STYLE R (OVAL & OCTAGONAL CONFIGURATIONS)',
            paragraphs: [
              'Style R ring joint gaskets are manufactured in both Oval and Octagonal cross-sections in accordance with ASME B16.20 and API 6A. Both styles are fully interchangeable on modern flat-bottom groove flanges (ASME B16.5 and API 6B). The Oval cross-section can also be used in legacy round-bottom groove flanges.',
              'Style R Octagonal gaskets deliver a higher initial sealing contact efficiency due to the flat 23° angle match with modern flange grooves, providing maximum contact stress concentration and reliable sealing performance up to 5,000 psi (Class 150 to Class 2500).',
            ],
            table: {
              headers: ['STYLE', 'FIGURE', 'DESCRIPTION', 'Max Pressure', 'Standard Flanges', 'Hardness (HBW)'],
              rows: [
                {
                  code: 'Style R (Oval)',
                  figureType: 'rtj-oval',
                  description: 'Curved radius seating geometry for round and flat bottom grooves in refinery, petrochemical, and pipeline connections.',
                  thickness: 'Up to 5,000 psi',
                  reweld: 'ASME B16.5 / API 6B',
                  radial: 'Soft Iron: Max 90 HB',
                },
                {
                  code: 'Style R (Octagonal)',
                  figureType: 'rtj-octagonal',
                  description: 'Flat 23° chamfered sealing faces offering superior contact stress concentration on flat-bottom grooves.',
                  thickness: 'Up to 5,000 psi',
                  reweld: 'ASME B16.5 / API 6B',
                  radial: '316SS: Max 160 HB',
                },
              ],
              footnote: 'Manufactured in full compliance with ASME B16.20 and API 6A specifications. Material hardness strictly controlled below flange hardness.',
            },
          },
          {
            heading: 'STYLE RX (PRESSURE-ENERGIZED RING GASKETS)',
            paragraphs: [
              'Style RX is a pressure-energized adaptation of the standard Style R gasket, designed for higher pressures (up to 5,000 psi / Class 720 to 5000 API 6B flanges). The gasket geometry features an asymmetric cross-section with an increased height, allowing internal system fluid pressure to force the outer sealing faces harder against the flange groove walls.',
              'Style RX gaskets are dimensionally interchangeable with standard Style R grooves (sharing the same R-number designation, e.g., RX24 fits an R24 groove), making them ideal for retrofitting existing joints subject to pressure fluctuations and mechanical vibration.',
            ],
            table: {
              headers: ['STYLE', 'FIGURE', 'DESCRIPTION', 'Max Pressure', 'Standard Flanges', 'Characteristics'],
              rows: [
                {
                  code: 'Style RX',
                  figureType: 'rtj-rx',
                  description: 'Asymmetric pressure-energized ring with taller profile. Internal line pressure enhances seal tightness against the groove.',
                  thickness: 'Up to 5,000 psi',
                  reweld: 'ASME B16.20 / API 6A',
                  radial: 'Pressure-energized, interchangeable with Style R grooves',
                },
              ],
              footnote: 'Style RX gaskets feature an increased standoff between flanges when assembled compared to Style R.',
            },
          },
          {
            heading: 'STYLE BX (HIGH PRESSURE & SUBSEA API 6BX / API 17D)',
            paragraphs: [
              'Style BX gaskets are designed exclusively for API Spec 6BX flanges and API 17D subsea wellhead / Christmas tree applications, rated for extreme working pressures up to 20,000 psi (138 MPa).',
              'The gasket features a square cross-section with pitch diameter slightly larger than the groove pitch diameter. Upon tightening, the gasket seats along its outer diameter, and the flanges achieve complete face-to-face contact.',
              'All Style BX gaskets incorporate an axial pressure balance through-hole to equalize fluid pressure across the sealing surfaces and ensure trapped fluid does not impede complete joint make-up.',
            ],
            table: {
              headers: ['STYLE', 'FIGURE', 'DESCRIPTION', 'Max Pressure', 'Standard Flanges', 'Characteristics'],
              rows: [
                {
                  code: 'Style BX',
                  figureType: 'rtj-bx',
                  description: 'Square profile with axial pressure balance hole. Engineered for API 6BX and API 17D subsea drilling and wellheads.',
                  thickness: 'Up to 20,000 psi',
                  reweld: 'API Spec 6A / 17D',
                  radial: 'Flange face-to-face contact, through-hole pressure equalization',
                },
              ],
              footnote: 'Style BX gaskets are not interchangeable with Style R or RX grooves and must only be installed in API 6BX grooves.',
            },
          },
          {
            heading: 'MATERIALS, HARDNESS SPECIFICATIONS & SURFACE COATINGS',
            paragraphs: [
              'To ensure proper sealing and avoid damaging the flange grooves, the gasket material must always be softer than the flange material. TXCO strictly controls material hardness and surface finish (maximum 1.6 μm Ra / 63 μin RMS) in accordance with ASME B16.20 and API 6A.',
              'For Soft Iron and Low Carbon Steel gaskets, an electroplated zinc coating (up to 8 μm) or protective passivation is applied to protect against atmospheric corrosion and oxidation during storage and transport.',
            ],
            table: {
              headers: ['MATERIAL', 'MATERIAL CODE', 'MAX HARDNESS (HBW)', 'MAX HARDNESS (HRB)', 'MAX SERVICE TEMP', 'SURFACE PROTECTION'],
              rows: [
                {
                  code: 'Soft Iron',
                  figureType: 'rtj-material',
                  description: 'D',
                  thickness: '90 HBW',
                  reweld: '56 HRB',
                  radial: 'Electroplated Zinc (up to 8 μm)',
                },
                {
                  code: 'Low Carbon Steel',
                  figureType: 'rtj-material',
                  description: 'S',
                  thickness: '120 HBW',
                  reweld: '68 HRB',
                  radial: 'Electroplated Zinc (up to 8 μm)',
                },
                {
                  code: 'Stainless Steel 304 / 304L',
                  figureType: 'rtj-material',
                  description: 'S304 / S304L',
                  thickness: '160 HBW',
                  reweld: '83 HRB',
                  radial: 'Passivated / Bare metal',
                },
                {
                  code: 'Stainless Steel 316 / 316L',
                  figureType: 'rtj-material',
                  description: 'S316 / S316L',
                  thickness: '160 HBW',
                  reweld: '83 HRB',
                  radial: 'Passivated / Bare metal',
                },
                {
                  code: 'Duplex UNS S31803',
                  figureType: 'rtj-material',
                  description: 'F51',
                  thickness: '230 HBW',
                  reweld: '21 HRC',
                  radial: 'Passivated / NACE MR0175',
                },
                {
                  code: 'Inconel 625 / Alloy 625',
                  figureType: 'rtj-material',
                  description: 'N06625',
                  thickness: '220 HBW',
                  reweld: '97 HRB',
                  radial: 'High-Nickel Acid Resistant',
                },
                {
                  code: 'Incoloy 825 / Alloy 825',
                  figureType: 'rtj-material',
                  description: 'N08825',
                  thickness: '200 HBW',
                  reweld: '93 HRB',
                  radial: 'Sour Gas H2S / High Chloride',
                },
              ],
              footnote: 'Hardness testing is performed in accordance with ASTM E10 / ASTM E18. Additional materials including Monel 400, Hastelloy C276, and Titanium Gr. 2 available upon request.',
            },
          },
        ],
      },

      'spectacle-blind-gaskets': {
        title: 'SPECTACLE BLIND GASKETS & LINE BLANKS',
        image: '/images/product-detials-images/Special-Metal-Gaskets.avif',
        downloadTitle: 'Spectacle Blinds & Spades Catalog',
        sections: [
          {
            heading: 'SPECTACLE BLIND FLANGES (FIGURE-8 BLINDS), SPADES & SPACERS',
            paragraphs: [
              'Spectacle Blinds (also known as Figure-8 Blinds), Paddle Blinds (Spades), and Paddle Spacers are critical line blanking devices engineered in accordance with ASME B16.48 to provide absolute physical and visual positive isolation in piping systems.',
              'Manufactured for installation between standard ASME B16.5, ASME B16.47 Series A & B, and DIN/EN flanges across all pressure classes from Class 150 to Class 2500 and API 2000 to 10,000 psi.',
              'During normal operating conditions, the open spacer element remains inline to maintain unrestricted fluid flow. For scheduled maintenance, turnarounds, vessel entry, or pressure testing, the joint is loosened, and the blind disc is rotated or inserted inline to form a leak-tight positive shutoff.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'spectacle-blind',
            bulletsIntro: 'Core Line Blank Configurations Available:',
            bullets: [
              'Spectacle Blind (Figure-8): Combined blind and spacer joined by a solid bridge (ASME B16.48)',
              'Paddle Blind (Spade / Blank): Solid blocking disc with extended handle for larger sizes',
              'Paddle Spacer (Ring Spacer): Open bore ring with extended handle for normal operation',
              'RTJ Spectacle Blind: Machined with octagonal/oval ring joint sealing profile on both faces',
            ],
          },
          {
            heading: 'FACING PROFILES & SEALING CONFIGURATIONS',
            paragraphs: [
              'Spectacle blinds and spades can be manufactured with a wide variety of sealing face configurations to match adjacent piping flanges:',
              '1. Raised Face (RF): Standard concentric serrated or spiral serrated finish (125–250 μin Ra / 3.2–6.3 μm Ra).',
              '2. Ring Type Joint (RTJ): Features precision-machined female groove recesses or integral male octagonal ring profiles on both sides in accordance with ASME B16.5 Appendix D and API 6A, delivering positive metal-to-metal shutoff in high-pressure hydrocarbon service.',
              '3. Flat Face (FF): Precision smooth face for mating with cast iron or low-pressure flanges.',
              '4. Lens Sealing Face: Spherical radius sealing geometry conforming to DIN 2696 for extreme pressure synthesis lines.',
            ],
            table: {
              headers: ['CONFIGURATION', 'FIGURE', 'DESCRIPTION', 'Standard Specs', 'Pressure Rating', 'Application'],
              rows: [
                {
                  code: 'Spectacle Blind (Fig-8)',
                  figureType: 'spec-fig8',
                  description: 'Figure-8 one-piece unit with solid blind and open spacer joined by a central web. Instant visual confirmation of open/closed status.',
                  thickness: 'ASME B16.48',
                  reweld: 'Class 150 - 2500',
                  radial: 'Piping up to 24" (DN600)',
                },
                {
                  code: 'Paddle Blind (Spade)',
                  figureType: 'spec-spade',
                  description: 'Solid circular blank with extended solid handle. Preferred for large diameter and heavy piping lines (above 24").',
                  thickness: 'ASME B16.48',
                  reweld: 'Class 150 - 2500',
                  radial: 'Piping up to 60" (DN1500)',
                },
                {
                  code: 'Paddle Spacer (Ring)',
                  figureType: 'spec-spacer',
                  description: 'Open annular ring matching pipe inside diameter with drilled handle. Installed during normal service to maintain spool spacing.',
                  thickness: 'ASME B16.48',
                  reweld: 'Class 150 - 2500',
                  radial: 'Piping up to 60" (DN1500)',
                },
                {
                  code: 'RTJ Spectacle Blank',
                  figureType: 'spec-rtj',
                  description: 'Spectacle blind or spade with integrated Ring Type Joint octagonal/oval seating faces for high-pressure API/ASME flanges.',
                  thickness: 'ASME B16.48 / API 6A',
                  reweld: 'Class 600 - 2500 / API 10K',
                  radial: 'High-pressure oil & gas',
                },
              ],
              footnote: 'All blanks are 100% PMI verified, ultrasonic tested (UT), and stamped with size, class, material grade, and melt heat number.',
            },
          },
          {
            heading: 'MATERIAL GRADES & SOUR GAS (NACE MR0175 / ISO 15156) COMPLIANCE',
            paragraphs: [
              'TXCO spectacle blinds, spades, and spacers are precision manufactured from high-integrity forged plate and rolled forgings with full traceability and 3.1 material test certificates (MTC).',
              'For sour service (H2S), offshore, and severe cryogenic/high-temperature applications, materials are supplied in full compliance with NACE MR0175 / ISO 15156 and NORSOK M-650 specifications.',
            ],
            table: {
              headers: ['MATERIAL FAMILY', 'STANDARD GRADE', 'UNS NUMBER', 'TYPICAL APPLICATIONS', 'TEMP RANGE', 'CORROSION RESISTANCE'],
              rows: [
                {
                  code: 'Carbon Steel',
                  figureType: 'mat-cs',
                  description: 'ASTM A516 Gr. 70 / A105N',
                  thickness: 'K02700 / K03504',
                  reweld: 'General Hydrocarbons & Steam',
                  radial: '-29°C to +425°C',
                },
                {
                  code: 'Low-Temp Carbon Steel',
                  figureType: 'mat-ltcs',
                  description: 'ASTM A350 LF2 Class 1',
                  thickness: 'K03011',
                  reweld: 'Low-Temperature & Cryogenic',
                  radial: '-46°C to +400°C',
                },
                {
                  code: 'Stainless Steel 316/316L',
                  figureType: 'mat-ss316',
                  description: 'ASTM A240 / A182 F316L',
                  thickness: 'S31603',
                  reweld: 'Chemical, Marine & Acid Process',
                  radial: '-196°C to +600°C',
                },
                {
                  code: 'Duplex 2205',
                  figureType: 'mat-duplex',
                  description: 'ASTM A240 / A182 F51',
                  thickness: 'S31803 / S32205',
                  reweld: 'Offshore, Seawater & High Cl-',
                  radial: '-50°C to +300°C',
                },
                {
                  code: 'Super Duplex 2507',
                  figureType: 'mat-sduplex',
                  description: 'ASTM A240 / A182 F53',
                  thickness: 'S32750',
                  reweld: 'Subsea, High Salinity & PREN ≥ 42',
                  radial: '-50°C to +300°C',
                },
                {
                  code: 'Nickel Alloy 625',
                  figureType: 'mat-inconel',
                  description: 'Inconel 625 / ASTM B443',
                  thickness: 'N06625',
                  reweld: 'Sour Gas H2S, Severe Acid & Cl-',
                  radial: '-196°C to +980°C',
                },
                {
                  code: 'Nickel Alloy 825',
                  figureType: 'mat-incoloy',
                  description: 'Incoloy 825 / ASTM B424',
                  thickness: 'N08825',
                  reweld: 'Sulfuric & Phosphoric Acid',
                  radial: '-196°C to +540°C',
                },
                {
                  code: 'Hastelloy C-276',
                  figureType: 'mat-hastelloy',
                  description: 'Alloy C276 / ASTM B575',
                  thickness: 'N10276',
                  reweld: 'Wet Chlorine, Hypochlorite & Acid',
                  radial: '-196°C to +650°C',
                },
              ],
              footnote: 'Custom thicknesses, handle configurations, lifting lugs, and special tapings manufactured to customer engineering drawings.',
            },
          },
        ],
      },

      'rubber-coated-rtj': {
        title: 'RUBBER-COATED RING TYPE JOINT (RTJ)',
        image: '/images/product-detials-images/Ring-Type-Joint-RT-J.avif',
        downloadTitle: 'Rubber-Coated RTJ Catalog',
        sections: [
          {
            heading: 'RUBBER-COATED RTJ GASKETS (TEST & PRESERVATION SEALS)',
            paragraphs: [
              'Rubber-Coated Ring Type Joint gaskets feature a precision-machined solid metallic core (Soft Iron or Stainless Steel) completely encapsulated in a vulcanized NBR (Nitrile), HNBR, or Viton® elastomeric outer layer (typically 0.5 mm to 1.0 mm thick).',
              'Engineered specifically for hydrostatic testing, offshore flange groove preservation, and low-pressure testing where repeated metal-to-metal contact could score or damage costly API 6A/17D flange grooves.',
              'The resilient rubber coating flows into minor scratches and pitting on the flange face, establishing an immediate low-torque seal without requiring plastic deformation of the metal core.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'ptfe-insert-rtj': {
        title: 'PTFE-INSERT RING TYPE JOINT (RTJ)',
        image: '/images/product-detials-images/Ring-Type-Joint-RT-J.avif',
        downloadTitle: 'PTFE-Insert RTJ Catalog',
        sections: [
          {
            heading: 'PTFE-INSERTED METALLIC RING JOINTS',
            paragraphs: [
              'PTFE-Insert RTJ gaskets incorporate precision-machined virgin or modified PTFE inserts embedded along both 23° sealing contact angles of the metallic ring.',
              'This hybrid construction delivers positive low-torque sealing capability while maintaining the full mechanical strength and blowout safety of a solid metal ring. Ideal for aggressive chemical pipelines, sour gas (H2S), and low-bolt-load applications.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'protective-coated-rtj': {
        title: 'PROTECTIVE-COATED RING TYPE JOINT (RTJ)',
        image: '/images/product-detials-images/Ring-Type-Joint-RT-J.avif',
        downloadTitle: 'Protective-Coated RTJ Catalog',
        sections: [
          {
            heading: 'SURFACE PROTECTED & CORROSION RESISTANT RTJ GASKETS',
            paragraphs: [
              'TXCO offers protective-coated RTJ gaskets treated with specialized electroplated zinc (up to 8 μm), cadmium plating, silver plating, or fluoropolymer coatings (Xylan® / PTFE).',
              'These coatings prevent atmospheric oxidation during transit and storage, reduce thread galling during make-up, and eliminate galvanic corrosion between dissimilar flange and gasket metals.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'bonnet-rings': {
        title: 'BONNET RINGS & PRESSURE SEALS',
        image: '/images/product-detials-images/Special-Metal-Gaskets.avif',
        downloadTitle: 'Bonnet Rings Catalog',
        sections: [
          {
            heading: 'VALVE BONNET RINGS & PRESSURE SEAL GASKETS',
            paragraphs: [
              'Bonnet Rings are heavy-duty metallic sealing rings manufactured to ASME B16.34 and API 6D specifications for sealing valve body-to-bonnet cavities and high-pressure reactor headers.',
              'Available in oval, octagonal, flat, and triangular pressure-seal profiles engineered to leverage internal valve cavity pressure to increase sealing contact stress.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'lens-rings': {
        title: 'LENS RINGS (DIN 2696 / LENTICOLARI)',
        image: '/images/product-detials-images/Special-Metal-Gaskets.avif',
        downloadTitle: 'Lens Rings Catalog',
        sections: [
          {
            heading: 'LENS RING GASKETS (DIN 2696)',
            paragraphs: [
              'Lens Rings (Lenticolari) are precision-machined spherical metallic sealing rings designed in accordance with DIN 2696 for extreme high-pressure synthesis gas, ammonia, urea, and petrochemical reactors.',
              'The convex spherical sealing surface contacts the 20° conical flange face along a narrow circular line of contact, yielding high elastic/plastic seating stress under moderate bolt loading.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'blind-gaskets': {
        title: 'BLIND GASKETS & PADDLE BLANKS',
        image: '/images/product-detials-images/Special-Metal-Gaskets.avif',
        downloadTitle: 'Blind Gaskets Catalog',
        sections: [
          {
            heading: 'SOLID METALLIC BLIND GASKETS (ASME B16.48)',
            paragraphs: [
              'Blind Gaskets and Paddle Spades are solid metallic blanking plates machined from forged plate stock for positive isolation and shut-off of process lines during turnaround, inspection, and maintenance.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'vx-ax-gaskets': {
        title: 'VX–AX SUBSEA WELLHEAD GASKETS',
        image: '/images/product-detials-images/Ring-Type-Joint-RT-J.avif',
        downloadTitle: 'VX-AX Gaskets Catalog',
        sections: [
          {
            heading: 'VX & AX PRESSURE-ENERGIZED SUBSEA GASKETS (API 16A / 17D)',
            paragraphs: [
              'VX and AX gaskets are specialized pressure-energized metallic sealing rings designed for subsea wellheads, blowout preventers (BOPs), and offshore drilling riser connections conforming to API Spec 16A and API Spec 17D.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'ix-gaskets': {
        title: 'IX COMPACT FLANGE GASKETS (NORSOK L-005)',
        image: '/images/product-detials-images/Special-Metal-Gaskets.avif',
        downloadTitle: 'IX Gaskets Catalog',
        sections: [
          {
            heading: 'IX METALLIC SEAL RINGS FOR NORSOK L-005 COMPACT FLANGES',
            paragraphs: [
              'IX Gaskets are precision engineered metallic seal rings designed exclusively for NORSOK L-005 compact flanges used in offshore platforms, FPSOs, and weight-sensitive marine installations.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'delta-gaskets': {
        title: 'DELTA GASKETS',
        image: '/images/product-detials-images/Special-Metal-Gaskets.avif',
        downloadTitle: 'Delta Gaskets Catalog',
        sections: [
          {
            heading: 'DELTA PRESSURE-ACTUATED METALLIC GASKETS',
            paragraphs: [
              'Delta Gaskets feature a triangular cross-section engineered to seat within a matching triangular or trapezoidal flange groove. As internal vessel pressure rises, the internal fluid forces the triangular apex outward, increasing seal tightness.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'bridge-gaskets': {
        title: 'BRIDGE GASKETS (BRIDGMAN CLOSURES)',
        image: '/images/product-detials-images/Special-Metal-Gaskets.avif',
        downloadTitle: 'Bridge Gaskets Catalog',
        sections: [
          {
            heading: 'BRIDGMAN UNSUPPORTED AREA HIGH-PRESSURE CLOSURES',
            paragraphs: [
              'Bridge Gaskets are specialized metallic seals engineered based on the Bridgman unsupported-area principle for extreme pressure autoclaves, chemical reactors, and synthesis vessels operating at pressures exceeding 5,000 bar.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'transition-rtj': {
        title: 'TRANSITION RING TYPE JOINTS (RTJ)',
        image: '/images/product-detials-images/Ring-Type-Joint-RT-J.avif',
        downloadTitle: 'Transition RTJ Catalog',
        sections: [
          {
            heading: 'COMBINATION & TRANSITION RTJ GASKETS',
            paragraphs: [
              'Transition RTJ gaskets are custom combination rings engineered with different ring profiles or different pitch diameters on top and bottom faces, allowing dissimilar flange sizes or mismatched API/ASME grooves to be connected securely.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'soft-material-seated-rtj': {
        title: 'SOFT-MATERIAL-SEATED RTJ GASKETS',
        image: '/images/product-detials-images/Ring-Type-Joint-RT-J.avif',
        downloadTitle: 'Soft-Material-Seated RTJ Catalog',
        sections: [
          {
            heading: 'SOFT-MATERIAL-SEATED METALLIC GASKETS',
            paragraphs: [
              'Soft-Material-Seated RTJ gaskets combine a solid metallic core with high-density expanded graphite or virgin PTFE seating faces, providing micro-sealing capabilities for pitted or weathered flange grooves.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },
    },
  },

  // ==========================================
  // GASKETS -> Semi-Metallic Gaskets
  // ==========================================
  'semi-metallic-gaskets': {
    parentCategoryTitle: 'GASKETS',
    parentCategoryHref: '/products/gaskets',
    subcategoryTitle: 'Semi-Metallic Gaskets',
    productsList: [
      { id: 'spiral-wound-gaskets', title: 'SPIRAL WOUND GASKETS', downloadTitle: 'Spiral Wound Gaskets' },
      { id: 'kammprofile-gaskets', title: 'KAMMPROFILE GASKETS', downloadTitle: 'Kammprofile Gaskets' },
      { id: 'metal-jacketed-gaskets', title: 'METAL JACKETED GASKETS', downloadTitle: 'Metal Jacketed Gaskets' },
    ],
    productDetails: {
      'spiral-wound-gaskets': {
        title: 'SPIRAL WOUND GASKETS (PLANISTEEL SW)',
        image: '/images/product-detials-images/Spiral-Wound-Gaskets-Planisteel-SW.avif',
        downloadTitle: 'Spiral Wound Gaskets Catalog',
        sections: [
          {
            heading: 'SPIRAL WOUND GASKETS (ASME B16.20 / EN 1514-2)',
            paragraphs: [
              'Spiral Wound Gaskets (Planisteel SW series) are precision engineered semi-metallic seals manufactured by spirally co-winding a preformed V-shaped metal strip together with a compressible soft sealing filler material (flexible graphite, virgin PTFE, or high-temperature mica).',
              'Manufactured in full accordance with ASME B16.20 and EN 1514-2 (EN 12560-2) standards for ASME B16.5, ASME B16.47 Series A & B, and DIN/EN PN-designated flanges from Class 150 to Class 2500.',
              'The continuous chevron-shaped metallic profile acts as a micro-spring under bolt loading, imparting exceptional elastic resilience and mechanical recovery. This unique spring-like behavior allows spiral wound gaskets to maintain an absolute hermetic seal under severe thermal fluctuations, pressure cycling, pipe deflection, and hydraulic shock.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
            bulletsIntro: 'Core Construction Styles Available:',
            bullets: [
              'Style SW (Style R): Basic winding element without rings for tongue-and-groove and male/female flanges',
              'Style SWI (Style RIR): Winding with solid internal ring to prevent inward buckling and media erosion',
              'Style SWC (Style CG): Winding with solid outer centering ring for Raised Face (RF) flanges',
              'Style SWCI (Style CGI): Winding with both inner and outer guide rings for high-pressure & critical service',
              'Style LSSW (Low Stress SW): Low-torque winding design for Class 150 & 300 flanges with limited bolt load',
            ],
          },
          {
            heading: 'STYLES, GUIDE RINGS & FLANGE COMPATIBILITY',
            paragraphs: [
              'The selection of guide rings is critical to optimizing sealing performance and protecting against gasket blowout or radial deformation:',
              '1. Outer Centering Ring (Style SWC / CG): Accurately centers the sealing element on the flange bolts, protects against radial blowout, and acts as a mechanical compression stop preventing over-compression.',
              '2. Inner Retaining Ring (Style SWI / RIR & SWCI / CGI): Prevents inward radial buckling of windings into the pipe bore, shields the sealing element from turbulent fluid flow, and minimizes corrosive fluid buildup in the flange crevice. Mandatory for Class 900, 1500, 2500 flanges and all PTFE-filled configurations.',
            ],
            table: {
              headers: ['STYLE CODE', 'FIGURE', 'DESCRIPTION', 'Standard Specs', 'Pressure Rating', 'Flange Seating Face'],
              rows: [
                {
                  code: 'Style SW (R)',
                  figureType: 'sw-r',
                  description: 'Sealing element only without guide rings. Used in tongue-and-groove (LTG), male-and-female (LMF), and recessed groove joints.',
                  thickness: 'ASME B16.20 / EN 1514-2',
                  reweld: 'Class 150 - 2500',
                  radial: 'Tongue & Groove / Male & Female',
                },
                {
                  code: 'Style SWI (RIR)',
                  figureType: 'sw-rir',
                  description: 'Sealing element with solid internal ring. Shields windings from erosive media and prevents turbulent flow in recessed flanges.',
                  thickness: 'ASME B16.20 / EN 1514-2',
                  reweld: 'Class 150 - 2500',
                  radial: 'Male & Female / Recessed Grooves',
                },
                {
                  code: 'Style SWC (CG)',
                  figureType: 'sw-cg',
                  description: 'Sealing element with solid outer centering ring. Standard configuration for Raised Face (RF) and Flat Face (FF) flanges.',
                  thickness: 'ASME B16.20 / EN 1514-2',
                  reweld: 'Class 150 - 600',
                  radial: 'Raised Face (RF) / Flat Face (FF)',
                },
                {
                  code: 'Style SWCI (CGI)',
                  figureType: 'sw-cgi',
                  description: 'Sealing element with solid inner and outer guide rings. Recommended for critical hydrocarbon service and all Class 900 - 2500 lines.',
                  thickness: 'ASME B16.20 / EN 1514-2',
                  reweld: 'Class 150 - 2500',
                  radial: 'Raised Face (RF) Critical Service',
                },
              ],
              footnote: 'Standard nominal thickness: 4.5 mm (winding) with 3.2 mm guide rings. Special 3.2 mm, 6.4 mm, and 7.2 mm thicknesses available.',
            },
          },
          {
            heading: 'MATERIAL COMBINATIONS & TEMPERATURE LIMITS',
            paragraphs: [
              'TXCO spiral wound gaskets are manufactured with exact metallic alloy strip and soft filler pairings engineered to suit operating chemistry and thermal parameters.',
            ],
            table: {
              headers: ['WINDING METAL', 'FILLER MATERIAL', 'RECOMMENDED GUIDE RINGS', 'MAX OPERATING TEMP', 'APPLICATION ENVIRONMENT'],
              rows: [
                {
                  code: 'SS 316L',
                  figureType: 'mat-sw1',
                  description: 'High-Purity Flexible Graphite (99.85% C)',
                  thickness: 'Carbon Steel / SS 316L',
                  reweld: '-200°C to +550°C',
                  radial: 'Steam, Hydrocarbons, Refineries',
                },
                {
                  code: 'SS 316L',
                  figureType: 'mat-sw2',
                  description: 'Virgin Expanded PTFE',
                  thickness: 'SS 316L (Inner & Outer)',
                  reweld: '-200°C to +260°C',
                  radial: 'Aggressive Acids, Chemical Processing',
                },
                {
                  code: 'SS 321 / 347',
                  figureType: 'mat-sw3',
                  description: 'High-Purity Flexible Graphite',
                  thickness: 'SS 321 / SS 347',
                  reweld: '-200°C to +600°C',
                  radial: 'High-Temperature Exhaust & Power',
                },
                {
                  code: 'Inconel 625',
                  figureType: 'mat-sw4',
                  description: 'Flexible Graphite / Mica',
                  thickness: 'Inconel 625',
                  reweld: '-200°C to +1000°C',
                  radial: 'Sour Gas H2S, Severe Thermal Cycling',
                },
                {
                  code: 'Duplex UNS S31803',
                  figureType: 'mat-sw5',
                  description: 'Flexible Graphite',
                  thickness: 'Duplex S31803',
                  reweld: '-50°C to +300°C',
                  radial: 'Offshore, Seawater & High Chlorides',
                },
                {
                  code: 'Monel 400',
                  figureType: 'mat-sw6',
                  description: 'Expanded PTFE / Graphite',
                  thickness: 'Monel 400',
                  reweld: '-200°C to +400°C',
                  radial: 'Hydrofluoric Acid (HF Alkylation)',
                },
              ],
              footnote: 'All materials certified to EN 10204 3.1. Color coded in full accordance with ASME B16.20 identification guidelines.',
            },
          },
        ],
      },

      'kammprofile-gaskets': {
        title: 'KAMMPROFILE GASKETS (PLANISTEEL CAMPROFILE)',
        image: '/images/product-detials-images/Planisteel-Camprofile.avif',
        downloadTitle: 'Kammprofile Gaskets Catalog',
        sections: [
          {
            heading: 'KAMMPROFILE SERRATED METALLIC GASKETS (EN 1514-6 / ASME B16.20)',
            paragraphs: [
              'Kammprofile Gaskets (Planisteel Camprofile series, also known as grooved metallic gaskets) consist of a solid precision-machined metallic core featuring concentric serrated V-grooves covered on both contact faces with a soft, compressible sealing layer (flexible graphite, expanded PTFE, or high-temp mica).',
              'Manufactured in strict accordance with EN 1514-6, EN 12560-6, DIN 2697, and ASME B16.20 standards for application in refinery piping, power stations, chemical processing, heat exchangers, and vessel closures.',
              'Kammprofile gaskets combine the mechanical integrity, blowout resistance, and radial stiffness of a solid metallic gasket with the low bolt-seating stress and micro-surface conformability of soft gasketing. The concentric serration crests generate localized high compressive stress lines, ensuring an impermeable seal under high pressure (up to 400 bar / Class 2500) and elevated temperatures (up to 1000°C).',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
            bulletsIntro: 'Core Kammprofile Configurations:',
            bullets: [
              'Style RJ / Type NR: Basic serrated core without outer guide ring for tongue & groove and male/female joints',
              'Style CR / Type IR: Serrated core with integral solid outer centering ring for Raised Face (RF) flanges',
              'Style CRI / Type LR: Serrated core with loose (floating) outer guide ring to accommodate extreme thermal cycling',
              'Convex Camprofile: Cambered convex core profile providing optimal stress distribution across rotating flanges',
            ],
          },
          {
            heading: 'DESIGN CONFIGURATIONS & THERMAL CYCLING ADVANTAGES',
            paragraphs: [
              'Kammprofile gaskets offer several distinct engineering advantages over conventional spiral wound and sheet gaskets:',
              '1. Blowout Resistance: The solid metallic core cannot be extruded or blown out under high internal pressure spikes.',
              '2. Reusable Solid Core: In turnaround and maintenance environments, undamaged metallic cores can be cleaned, inspected, and refaced with new soft graphite or PTFE layers, significantly reducing operational downtime and replacement costs.',
              '3. Floating Loose Ring (Style CRI / LR): Minimizes radial shear stresses between the sealing core and outer ring under rapid heating/cooling cycles, preventing gasket warpage.',
            ],
            table: {
              headers: ['STYLE CODE', 'EN 1514-6 TYPE', 'DESCRIPTION', 'Typical Core Thickness', 'Layer Thickness', 'Recommended Application'],
              rows: [
                {
                  code: 'Style RJ',
                  figureType: 'kamm-rj',
                  description: 'Basic serrated core without guide ring. For tongue-and-groove, male/female, and heat exchanger channel grooves.',
                  thickness: '3.0 mm / 4.0 mm',
                  reweld: '0.5 mm each face',
                  radial: 'Recessed & Tongue/Groove Joints',
                },
                {
                  code: 'Style CR',
                  figureType: 'kamm-cr',
                  description: 'Serrated core with integrated solid outer centering ring machined from one-piece forged plate.',
                  thickness: '3.0 mm / 4.0 mm',
                  reweld: '0.5 mm each face',
                  radial: 'Standard Raised Face (RF) Flanges',
                },
                {
                  code: 'Style CRI',
                  figureType: 'kamm-cri',
                  description: 'Serrated core with detached loose outer centering ring. Eliminates thermal expansion stresses during thermal shock.',
                  thickness: '3.0 mm / 4.0 mm',
                  reweld: '0.5 mm each face',
                  radial: 'Thermal Cycling & Steam Headers',
                },
                {
                  code: 'Convex Camprofile',
                  figureType: 'kamm-convex',
                  description: 'Convex-profiled core thickness engineered for flanges subject to bolt rotation and angular deflection.',
                  thickness: '4.0 mm convex',
                  reweld: '0.5 mm each face',
                  radial: 'Flanges prone to flange rotation',
                },
              ],
              footnote: 'Standard core materials: SS 316L, SS 304, SS 321, Duplex, Super Duplex, Inconel 625, Hastelloy C276. Facing materials: 99.85% Graphite, ePTFE, Mica.',
            },
          },
        ],
      },

      'metal-jacketed-gaskets': {
        title: 'METAL JACKETED GASKETS (PLANISTEEL MJ)',
        image: '/images/product-detials-images/Metal-jacketed-gaskets-Planisteel MJ.avif',
        downloadTitle: 'Metal Jacketed Gaskets Catalog',
        sections: [
          {
            heading: 'HEAT EXCHANGER METAL JACKETED GASKETS (ASME B16.20 / TEMA / EN 1514-4)',
            paragraphs: [
              'Metal Jacketed Gaskets (Planisteel MJ series) are semi-metallic seals consisting of a thin metallic outer shell (0.4–0.5 mm sheet metal) completely encapsulating a soft, highly compressible inner core (flexible graphite, compressed non-asbestos fiber, or ceramic paper).',
              'Engineered specifically in accordance with ASME B16.20, EN 1514-4, and TEMA (Tubular Exchanger Manufacturers Association) standards for shell-and-tube heat exchangers, reactor vessels, boilers, autoclaves, and narrow flange connections.',
              'The metal jacket provides high mechanical resistance to blowout, chemical erosion, and high operating pressures, while the soft inner core delivers excellent resilience and compressibility under moderate bolt loads.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
            bulletsIntro: 'Core Jacket Styles Available:',
            bullets: [
              'Style MJ10 (Double Jacketed): Fully enclosed two-piece metal jacket with overlapping seams (Industry Standard)',
              'Style MJ00 (Single Jacketed Open): Single metal sheet wrapping bottom and edges for narrow low-pressure flanges',
              'Style MJ11 (Double Jacketed Corrugated): Double jacket enclosing a corrugated metal core for lower seating stress',
              'Style MJ14 (Double Shell Corrugated): Corrugated metallic exterior for improved micro-conformability',
              'Style MJ20 (Solid Metal Profiled / French Style): Heavy-duty solid metal construction for high-pressure autoclaves',
            ],
          },
          {
            heading: 'PASS PARTITION CONFIGURATIONS FOR HEAT EXCHANGERS',
            paragraphs: [
              'For shell-and-tube heat exchangers, metal jacketed gaskets are custom-fabricated with integral or precision seal-welded pass partition bars in accordance with the exchanger tube bundle arrangement:',
              '1. Integral One-Piece Construction: Outer ring and partition bars laser-cut from a single piece to prevent leak paths at joints.',
              '2. Precision Welded Bars: TIG-welded pass partition bars with smooth radius transitions at intersections to prevent stress cracks and ensure uniform gasket thickness throughout.',
              '3. Bar Layouts Available: Single-pass, two-pass, three-pass, four-pass, six-pass, and complex multi-pass branch designs built to exact OEM drawings.',
            ],
            table: {
              headers: ['STYLE CODE', 'FIGURE', 'CONSTRUCTION', 'Typical Thickness', 'Pressure Class', 'Recommended Applications'],
              rows: [
                {
                  code: 'Style MJ10',
                  figureType: 'mj-10',
                  description: 'Double Jacketed. Two-piece metal jacket fully enclosing flexible graphite or non-asbestos filler core.',
                  thickness: '3.0 mm / 3.2 mm',
                  reweld: 'Class 150 - 600',
                  radial: 'Shell & Tube Heat Exchangers (TEMA)',
                },
                {
                  code: 'Style MJ00',
                  figureType: 'mj-00',
                  description: 'Single Jacketed Open. Metallic shell covering one face and both side rims with exposed top filler.',
                  thickness: '2.0 mm / 2.5 mm',
                  reweld: 'Class 150 - 300',
                  radial: 'Narrow Flange Widths (< 10 mm)',
                },
                {
                  code: 'Style MJ11',
                  figureType: 'mj-11',
                  description: 'Double Jacketed Corrugated. Double jacket enclosing a corrugated metal core for enhanced recovery.',
                  thickness: '3.2 mm / 4.0 mm',
                  reweld: 'Class 150 - 600',
                  radial: 'Fluctuating Temperature Exchangers',
                },
                {
                  code: 'Style MJ14',
                  figureType: 'mj-14',
                  description: 'Double Shell Corrugated. Both top and bottom outer metallic faces are corrugated.',
                  thickness: '3.2 mm',
                  reweld: 'Class 150 - 600',
                  radial: 'Low Seating Stress Exchangers',
                },
              ],
              footnote: 'Available in circular, oval, rectangular, and custom shapes up to 4000 mm diameter. Jacket materials: Soft Iron, SS 304, SS 316L, Copper, Monel, Inconel.',
            },
          },
        ],
      },
    },
  },

  // ==========================================
  // GASKETS -> Non-Metallic Gaskets
  // ==========================================
  'non-metallic-gaskets': {
    parentCategoryTitle: 'GASKETS',
    parentCategoryHref: '/products/gaskets',
    subcategoryTitle: 'Non-Metallic Gaskets',
    productsList: [
      { id: 'rubber-gaskets', title: 'RUBBER GASKETS', downloadTitle: 'Rubber Gaskets' },
      { id: 'ptfe-gaskets', title: 'PTFE GASKETS', downloadTitle: 'PTFE Gaskets' },
      { id: 'eptfe-gaskets', title: 'ePTFE GASKETS', downloadTitle: 'ePTFE Gaskets' },
      { id: 'non-asbestos-gaskets', title: 'NON-ASBESTOS GASKETS', downloadTitle: 'Non-Asbestos Gaskets' },
      { id: 'asbestos-free-gaskets', title: 'ASBESTOS-FREE GASKETS', downloadTitle: 'Asbestos-Free Gaskets' },
    ],
    productDetails: {
      'rubber-gaskets': {
        title: 'RUBBER & ELASTOMERIC GASKETS',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        downloadTitle: 'Rubber Gaskets',
        sections: [
          {
            heading: 'FULL-FACE & RING ELASTOMERIC GASKETS',
            paragraphs: [
              'Engineered elastomeric gaskets fabricated from premium EPDM, Nitrile (NBR), Neoprene, FKM (Viton®), and Silicone for potable water, low-pressure hydrocarbons, and general utility services.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },
      'ptfe-gaskets': {
        title: 'PTFE JOINTING SHEETS & GASKETS (PLANIFLON™)',
        image: '/images/product-detials-images/PTFE-Jointing-Sheets-Planiflon.avif',
        downloadTitle: 'Planiflon™ PTFE Gaskets Catalog',
        sections: [
          {
            heading: 'PLANIFLON™ HIGH-PERFORMANCE PTFE GASKETING SHEETS & SEALS',
            paragraphs: [
              'Planiflon™ is a comprehensive range of premium PTFE (Polytetrafluoroethylene) gasketing sheets and precision-cut flange gaskets engineered for critical industrial applications demanding total chemical inertness, high mechanical reliability, and ultra-low fugitive emissions.',
              'Operating across a wide temperature envelope from cryogenic levels (-200°C / -328°F) up to +260°C (+500°F), Planiflon™ PTFE gaskets resist virtually all chemical media across the full pH 0–14 spectrum (with the exception of molten alkali metals and elemental fluorine at high temperature/pressure).',
              'Manufactured using advanced skiving, calendering, and biaxial orientation technologies, Planiflon™ materials overcome the traditional cold-flow (creep relaxation) limitations of conventional virgin PTFE while delivering superior sealability under moderate to high bolt loads.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
            bulletsIntro: 'Key Product Range & Formulations:',
            bullets: [
              'Planiflon™ B01: 100% Pure Virgin PTFE for pharmaceutical, food, and high-dielectric service',
              'Planiflon™ B02: Glass-Filled PTFE for improved mechanical resistance and reduced creep',
              'Planiflon™ B13: Silica-Filled Biaxially Oriented PTFE for strong mineral acids, steam, and chlorine',
              'Planiflon™ B15: Barium Sulphate Filled Biaxially Oriented PTFE for strong alkalis, caustics, and food/pharma',
              'Planiflon™ E12: 100% Multidirectional Expanded ePTFE for fragile glass-lined, FRP, and uneven flanges',
            ],
          },
          {
            heading: 'MATERIAL SELECTION & FILLER TECHNOLOGIES',
            paragraphs: [
              'The Planiflon™ series incorporates tailored micro-fillers and biaxially oriented molecular structures to optimize mechanical integrity and eliminate creep relaxation in challenging chemical environments:',
              '1. Silica-Filled Biaxial PTFE (Planiflon™ B13): Features a dense, multi-directional fibrous structure filled with high-purity silica. Engineered specifically for strong acids (sulfuric, nitric, hydrochloric, phosphoric), solvents, hydrocarbons, water, steam, and chlorine.',
              '2. Barium Sulphate Biaxial PTFE (Planiflon™ B15): Formulated with food-grade barium sulphate to withstand aggressive alkalis, caustic soda, potassium hydroxide, bleach, and general chemicals where silica-filled grades may experience caustic etching.',
              '3. Multidirectional Expanded ePTFE (Planiflon™ E12): Fabricated from 100% pure PTFE expanded into a multi-directional fibrillated network. Provides exceptional elasticity, zero creep, and ultra-low minimum seating stress (y-value), making it the ideal solution for fragile glass-lined, enamel, plastic, or distorted flanges.',
            ],
            table: {
              headers: ['GRADE CODE', 'FIGURE', 'FILLER TYPE', 'COLOR', 'TEMP RANGE', 'MAX PRESSURE', 'COMPATIBLE MEDIA & APPLICATIONS'],
              rows: [
                {
                  code: 'Planiflon™ B01',
                  figureType: 'ptfe-b01',
                  description: '100% Virgin PTFE (Unfilled)',
                  thickness: 'White',
                  reweld: '-200°C to +260°C',
                  radial: '40 bar (Class 150/300) | Universal pH 0-14, High Dielectric, Food/Pharma',
                },
                {
                  code: 'Planiflon™ B02',
                  figureType: 'ptfe-b02',
                  description: 'Glass-Filled PTFE',
                  thickness: 'White / Off-White',
                  reweld: '-200°C to +260°C',
                  radial: '60 bar (Class 300) | Solvents, Fuels, Refrigerants, Moderate Acids',
                },
                {
                  code: 'Planiflon™ B13',
                  figureType: 'ptfe-b13',
                  description: 'Silica-Filled Biaxial PTFE',
                  thickness: 'Fawn / Light Brown',
                  reweld: '-200°C to +260°C',
                  radial: '83 bar (Class 150-600) | Strong Mineral Acids, Steam, Chlorine, Solvents',
                },
                {
                  code: 'Planiflon™ B15',
                  figureType: 'ptfe-b15',
                  description: 'Barium Sulphate Biaxial PTFE',
                  thickness: 'Off-White',
                  reweld: '-200°C to +260°C',
                  radial: '83 bar (Class 150-600) | Strong Alkalis, Caustic Soda, Food & Pharma',
                },
                {
                  code: 'Planiflon™ E12',
                  figureType: 'ptfe-e12',
                  description: '100% Multidirectional Expanded ePTFE',
                  thickness: 'Pure White',
                  reweld: '-240°C to +270°C (315°C peak)',
                  radial: '100 bar (Class 150-600) | Enamel, Glass-Lined, FRP & Distorted Flanges',
                },
              ],
              footnote: 'Available in sheets (1500 x 1500 mm) and custom-cut gaskets in thicknesses: 0.5 mm, 1.0 mm, 1.5 mm, 2.0 mm, 3.0 mm, 6.0 mm. Compliant with FDA 21 CFR 177.1550, TA-Luft (VDI 2440), BAM (Oxygen), DVGW, and EC 1935/2004.',
            },
          },
        ],
      },
    },
  },

  // ==========================================
  // GASKETS -> Steel-Inserted Gaskets
  // ==========================================
  'steel-inserted-gaskets': {
    parentCategoryTitle: 'GASKETS',
    parentCategoryHref: '/products/gaskets',
    subcategoryTitle: 'Steel-Inserted Gaskets',
    productsList: [
      { id: 'rubber-inserted', title: 'RUBBER-INSERTED GASKETS', downloadTitle: 'Rubber-Inserted Gaskets' },
      { id: 'graphite-inserted', title: 'GRAPHITE-INSERTED GASKETS', downloadTitle: 'Graphite-Inserted Gaskets' },
    ],
    productDetails: {
      'rubber-inserted': {
        title: 'STEEL-INSERTED RUBBER GASKETS',
        image: '/images/product-detials-images/Gasketing-sheet-Planix-Megatherm.avif',
        downloadTitle: 'Rubber-Inserted Gaskets',
        sections: [
          {
            heading: 'STEEL-INSERTED REINFORCED ELASTOMER GASKETS',
            paragraphs: [
              'High-grade elastomer vulcanized over a perforated steel core, delivering exceptional structural stiffness and blowout protection for large diameter water and gas pipelines.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },
      'graphite-inserted': {
        title: 'STEEL-INSERTED GRAPHITE GASKETS',
        image: '/images/product-detials-images/Graphite-Gasketing-Sheet.avif',
        downloadTitle: 'Graphite-Inserted Gaskets',
        sections: [
          {
            heading: 'TANGED STAINLESS STEEL REINFORCED GRAPHITE',
            paragraphs: [
              'High-purity expanded graphite mechanically locked to a 316 stainless steel tanged metal core for high-temperature steam lines, exhaust manifolds, and thermal fluids.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },
    },
  },

  // ==========================================
  // FLANGES (Direct Category)
  // ==========================================
  'flanges': {
    parentCategoryTitle: 'PRODUCTS',
    parentCategoryHref: '/products',
    subcategoryTitle: 'Flanges',
    productsList: [
      { id: 'weld-neck-flanges', title: 'WELD NECK FLANGES', downloadTitle: 'Weld Neck Flanges Catalog' },
      { id: 'slip-on-flanges', title: 'SLIP-ON FLANGES', downloadTitle: 'Slip-On Flanges Catalog' },
      { id: 'blind-flanges', title: 'BLIND FLANGES', downloadTitle: 'Blind Flanges Catalog' },
      { id: 'socket-weld-flanges', title: 'SOCKET WELD FLANGES', downloadTitle: 'Socket Weld Flanges Catalog' },
      { id: 'lap-joint-flanges', title: 'LAP JOINT FLANGES', downloadTitle: 'Lap Joint Flanges Catalog' },
      { id: 'threaded-screwed-flanges', title: 'THREADED / SCREWED FLANGES', downloadTitle: 'Threaded Flanges Catalog' },
      { id: 'orifice-flanges', title: 'ORIFICE FLANGES', downloadTitle: 'Orifice Flanges Catalog' },
      { id: 'custom-flanges', title: 'CUSTOM FLANGES', downloadTitle: 'Custom & Subsea Flanges Catalog' },
    ],
    productDetails: {
      'weld-neck-flanges': {
        title: 'WELD NECK FLANGES (WN)',
        downloadTitle: 'Weld Neck Flanges Catalog',
        sections: [
          {
            heading: 'WELD NECK FLANGES (ASME B16.5 / ASME B16.47 / API 6A)',
            paragraphs: [
              'Weld Neck Flanges (WN) are heavy-duty connection flanges distinguished by a long tapered hub that transitions gradually from the flange ring thickness down to the mating pipe wall thickness.',
              'Manufactured in full compliance with ASME B16.5 (sizes 1/2" to 24"), ASME B16.47 Series A & B (sizes 26" to 60"), and API 6A specifications across all pressure classes (Class 150 to Class 2500 and API 2000 to 10,000 psi).',
              'The tapered hub provides essential structural reinforcement under severe bending moments, high internal pressure spikes, external pipe stresses, and cyclic thermal shock. The butt-weld connection allows full volumetric Radiographic (RT) or Ultrasonic (UT) non-destructive examination.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
            bulletsIntro: 'Standard Facing Configurations Available:',
            bullets: [
              'Raised Face (RF): 125–250 μin Ra spiral/concentric serrations for standard gaskets',
              'Ring Type Joint (RTJ): Precision CNC groove matching Style R, RX, and BX metallic rings',
              'Flat Face (FF): Precision smooth face for low-pressure and cast equipment flanges',
            ],
          },
          {
            heading: 'ENGINEERING SPECIFICATIONS & MATERIAL MATRIX',
            paragraphs: [
              'TXCO weld neck flanges are precision CNC machined from solid closed-die forgings and ring-rolled forgings, fully certified with EN 10204 3.1 MTCs and 100% PMI verification.',
            ],
            table: {
              headers: ['SPECIFICATION / CLASS', 'FIGURE', 'SIZE RANGE', 'WALL SCHEDULES', 'MATERIAL GRADES', 'KEY APPLICATIONS'],
              rows: [
                {
                  code: 'ASME B16.5 Class 150 - 2500',
                  figureType: 'flange-wn',
                  description: '1/2" to 24" (DN15 - DN600)',
                  thickness: 'Sch 10 to Sch XXS',
                  reweld: 'ASTM A105N, A350 LF2, A182 F316L, F51, F53',
                  radial: 'High-Pressure Steam, Refineries, Process Piping',
                },
                {
                  code: 'ASME B16.47 Ser. A & B',
                  figureType: 'flange-wn-large',
                  description: '26" to 60" (DN650 - DN1500)',
                  thickness: 'Standard & Custom Heavy Wall',
                  reweld: 'ASTM A105, A350 LF2, A694 F52/F65',
                  radial: 'Large Bore Pipeline Headers, Storage Terminals',
                },
                {
                  code: 'API Spec 6A 2K - 10K',
                  figureType: 'flange-wn-api',
                  description: '1-13/16" to 11" Bore',
                  thickness: 'API Rated Wall',
                  reweld: 'AISI 4130, 410SS, Inconel 625 Clad',
                  radial: 'Wellhead, Christmas Trees, High-Pressure Sour Gas',
                },
              ],
              footnote: 'Supplied with bevel end preparation conforming to ASME B16.25. Custom bores and heavy hub taper angles available on request.',
            },
          },
        ],
      },

      'slip-on-flanges': {
        title: 'SLIP-ON FLANGES (SO)',
        downloadTitle: 'Slip-On Flanges Catalog',
        sections: [
          {
            heading: 'SLIP-ON FLANGES (ASME B16.5 / DIN EN 1092-1)',
            paragraphs: [
              'Slip-On Flanges (SO) are designed to slide over the outer diameter of the process pipe, positioned so that the end of the pipe is set back approximately 1/8" (3 mm) from the flange face.',
              'Secured with dual fillet welds (one external weld at the hub and one internal seal weld inside the flange bore), slip-on flanges offer cost-effective installation, compact face-to-face dimensions, and simplified pipe alignment.',
              'Manufactured in accordance with ASME B16.5 Class 150, 300, 600, 900, and 1500 for low to medium pressure cooling water, utilities, fuel oil, and general chemical pipelines.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
            bullets: [
              'Lower initial material and fabrication cost compared to weld neck flanges',
              'Easy alignment of bolt holes during spool fabrication',
              'Available in Raised Face (RF), Flat Face (FF), and RTJ configurations',
            ],
          },
        ],
      },

      'blind-flanges': {
        title: 'BLIND FLANGES (BL)',
        downloadTitle: 'Blind Flanges Catalog',
        sections: [
          {
            heading: 'BLIND FLANGES (ASME B16.5 / ASME B16.47 / API 6B)',
            paragraphs: [
              'Blind Flanges (BL) are solid forged circular discs engineered without a central bore, used to blank off and positively terminate piping lines, pump nozzles, valve ends, and pressure vessel manway openings.',
              'Subjected to high bending stresses at the center disc under internal pressure, TXCO blind flanges are manufactured from thick, high-integrity forgings certified to withstand full hydrostatic test pressures.',
              'Manufactured in all standard pressure classes from Class 150 to Class 2500 and API 2000 to 20,000 psi in sizes from 1/2" up to 60".',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
            bullets: [
              'Provides complete positive closure for piping maintenance and vessel entry',
              'Can be supplied with NPT tapped drain or pressure gauge ports',
              'Available in carbon steel, cryogenic LF2, stainless 316L, duplex, and nickel alloys',
            ],
          },
        ],
      },

      'socket-weld-flanges': {
        title: 'SOCKET WELD FLANGES (SW)',
        downloadTitle: 'Socket Weld Flanges Catalog',
        sections: [
          {
            heading: 'SOCKET WELD FLANGES (ASME B16.5)',
            paragraphs: [
              'Socket Weld Flanges (SW) feature an internal recessed shoulder bore that accepts the mating pipe end. The pipe is bottomed out and backed off by approximately 1/16" (1.6 mm) before applying an external fillet weld.',
              'Engineered specifically for small diameter, high-pressure piping systems (typically NPS 1/2" to NPS 3", Class 150 to Class 1500) where smooth internal fluid bore and leak-tight joint integrity are paramount.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'lap-joint-flanges': {
        title: 'LAP JOINT FLANGES (LJ)',
        downloadTitle: 'Lap Joint Flanges Catalog',
        sections: [
          {
            heading: 'LAP JOINT FLANGES & STUB END ASSEMBLIES',
            paragraphs: [
              'Lap Joint Flanges (LJ) are loose backing flanges paired with matching Lap Joint Stub Ends (MSS SP-43 / ASME B16.9). The flange slides freely over the pipe while the stub end is butt-welded to the pipe spool.',
              'Because the flange ring does not contact the process fluid, economical carbon steel backing flanges can be paired with expensive stainless steel, duplex, or titanium stub ends, significantly reducing material costs.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'threaded-screwed-flanges': {
        title: 'THREADED / SCREWED FLANGES (TH)',
        downloadTitle: 'Threaded Flanges Catalog',
        sections: [
          {
            heading: 'THREADED / SCREWED FLANGES (ASME B16.5)',
            paragraphs: [
              'Threaded Flanges (TH) feature internal female tapered pipe threads conforming to ASME B1.20.1 NPT or API Line Pipe standards, allowing them to be screwed directly onto male-threaded pipes without hot welding.',
              'Ideal for hazardous plant environments, gas distribution networks, and explosive fuel depots where open-flame hot welding is strictly prohibited.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'orifice-flanges': {
        title: 'ORIFICE FLANGES (ASME B16.36)',
        downloadTitle: 'Orifice Flanges Catalog',
        sections: [
          {
            heading: 'ORIFICE METERING FLANGES (ASME B16.36)',
            paragraphs: [
              'Orifice Flanges are specialized flange pairs manufactured in strict compliance with ASME B16.36, equipped with radial tapped differential pressure sensing ports (1/2" NPT) and jacking screws.',
              'Installed in pipeline metering runs to hold orifice flow plates, allowing precise measurement of volumetric flow rate in natural gas, steam, and liquid hydrocarbon lines.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'custom-flanges': {
        title: 'CUSTOM & SUBSEA SWIVEL FLANGES',
        downloadTitle: 'Custom Flanges Catalog',
        sections: [
          {
            heading: 'CUSTOM, BESPOKE & SUBSEA SWIVEL-RING FLANGES',
            paragraphs: [
              'TXCO engineers and manufactures custom-dimension flanges, high-pressure compact flanges, heat exchanger flanges (TEMA), and subsea Swivel-Ring Flanges conforming to API 17D.',
              'Swivel-ring flanges feature an independent 360° rotating outer bolt ring around a heavy-duty forged hub, allowing deepwater ROVs and divers to achieve instant bolt hole alignment on subsea pipelines.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },
    },
  },

  // ==========================================
  // VALVE COMPONENTS (Direct Category)
  // ==========================================
  'valve-components': {
    parentCategoryTitle: 'PRODUCTS',
    parentCategoryHref: '/products',
    subcategoryTitle: 'Valve Components',
    productsList: [
      { id: 'valve-components-trim', title: 'VALVE COMPONENTS & TRIMS', downloadTitle: 'Valve Trims Catalog' },
      { id: 'valve-packing', title: 'VALVE PACKING (LOW-E)', downloadTitle: 'Valve Packing Catalog' },
      { id: 'valve-gaskets', title: 'VALVE BODY-TO-BONNET GASKETS', downloadTitle: 'Valve Gaskets Catalog' },
      { id: 'sealing-components', title: 'SEALING COMPONENTS & LIP SEALS', downloadTitle: 'Sealing Components Catalog' },
    ],
    productDetails: {
      'valve-components-trim': {
        title: 'VALVE COMPONENTS & PRECISION TRIMS',
        image: '/images/product-detials-images/Ball-for-Ball-Valve.avif',
        downloadTitle: 'Valve Trims Catalog',
        sections: [
          {
            heading: 'PRECISION CNC VALVE TRIMS (API 6D / API 600 / ASME B16.34)',
            paragraphs: [
              'TXCO manufactures high-precision internal valve trims including stems, balls, seat rings, discs, wedges, and lantern rings in corrosion-resistant alloys (Inconel 625/718, Monel K500, Hastelloy C276, Stellite 6 hardfaced, and Super Duplex).',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },
      'valve-packing': {
        title: 'VALVE STEM PACKING (API 622 / API 624 LOW-E)',
        image: '/images/product-detials-images/O-Ring-for-Ball-Valve.avif',
        downloadTitle: 'Valve Packing Catalog',
        sections: [
          {
            heading: 'LOW-EMISSION VALVE STEM PACKING SETS',
            paragraphs: [
              'Certified low-emission (Low-E) die-formed flexible graphite rings and braided carbon yarn packing engineered to meet API 622, API 624, and ISO 15848-1 fugitive VOC emission standards (< 100 ppmv).',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },
      'valve-gaskets': {
        title: 'VALVE BODY-TO-BONNET GASKETS & PRESSURE SEALS',
        image: '/images/product-detials-images/Bodies-and-Closures-for-Ball-Valve.avif',
        downloadTitle: 'Valve Gaskets Catalog',
        sections: [
          {
            heading: 'BODY-TO-BONNET GASKETS & PRESSURE-SEAL RINGS',
            paragraphs: [
              'High-pressure bonnet gaskets, pressure-seal rings, and metallic lens rings for power plant gate, globe, and check valves operating up to Class 4500 and 650°C steam service.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },
      'sealing-components': {
        title: 'SPRING-ENERGIZED SEALS & BACKUP RINGS',
        image: '/images/product-detials-images/Seat-for-Ball-and-Gate-Valve.avif',
        downloadTitle: 'Sealing Components Catalog',
        sections: [
          {
            heading: 'SPRING-ENERGIZED PTFE LIP SEALS & PEEK BACKUPS',
            paragraphs: [
              'Engineered spring-energized PTFE / polymer seals and virgin PEEK backup rings for severe ball valve seat sealing, cryogenic LNG valves, and high-pressure subsea actuators.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },
    },
  },

  // ==========================================
  // COMMERCIAL PRODUCTS (Direct Category)
  // ==========================================
  'commercial-products': {
    parentCategoryTitle: 'PRODUCTS',
    parentCategoryHref: '/products',
    subcategoryTitle: 'Commercial Products',
    productsList: [
      { id: 'commercial-products-item', title: 'COMMERCIAL SUPPLY & FASTENERS', downloadTitle: 'Commercial Supply Catalog' },
      { id: 'stud-bolts-fasteners', title: 'STUD BOLTS & HEAVY HEX NUTS', downloadTitle: 'Stud Bolts Catalog' },
      { id: 'pipe-fittings', title: 'FORGED PIPE FITTINGS (ASME B16.11)', downloadTitle: 'Pipe Fittings Catalog' },
      { id: 'industrial-hardware', title: 'FLANGE PROTECTORS & ACCESSORIES', downloadTitle: 'Industrial Hardware Catalog' },
    ],
    productDetails: {
      'commercial-products-item': {
        title: 'COMMERCIAL PIPELINE SUPPLY & BOLTING',
        image: '/images/product-detials-images/Expanding-Gates-and-Through-Conduit-Gates.avif',
        downloadTitle: 'Commercial Supply Catalog',
        sections: [
          {
            heading: 'COMMERCIAL SUPPLY & INDUSTRIAL HARDWARE',
            paragraphs: [
              'Comprehensive supply of standardized industrial bolting, heavy hex stud bolts (ASTM A193 B7/B16, A320 L7), PTFE-coated studs, anti-seize torque lubricants, and flange insulation sets.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },
      'stud-bolts-fasteners': {
        title: 'STUD BOLTS & HEAVY HEX NUTS',
        image: '/images/product-detials-images/Expanding-Gates-and-Through-Conduit-Gates.avif',
        downloadTitle: 'Stud Bolts Catalog',
        sections: [
          {
            heading: 'ALLOY & STAINLESS HEAVY HEX STUD BOLTS (ASTM A193 / A194)',
            paragraphs: [
              'High-tensile continuous threaded stud bolts with heavy hex nuts in ASTM A193 Gr. B7, B7M, B8, B8M, B16, and ASTM A320 Gr. L7 with Xylan / PTFE fluoropolymer anti-corrosion coatings.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },
      'pipe-fittings': {
        title: 'FORGED PIPE FITTINGS (ASME B16.11)',
        image: '/images/product-detials-images/Expanding-Gates-and-Through-Conduit-Gates.avif',
        downloadTitle: 'Pipe Fittings Catalog',
        sections: [
          {
            heading: 'FORGED STEEL PIPE FITTINGS (CLASS 3000 / 6000 / 9000)',
            paragraphs: [
              'Socket weld and threaded elbows, tees, couplings, unions, caps, and hex nipples manufactured to ASME B16.11 and MSS SP-83 in A105N, LF2, 316L, and duplex stainless.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },
      'industrial-hardware': {
        title: 'FLANGE PROTECTORS & LUBRICANTS',
        image: '/images/product-detials-images/Expanding-Gates-and-Through-Conduit-Gates.avif',
        downloadTitle: 'Industrial Hardware Catalog',
        sections: [
          {
            heading: 'FLANGE ISOLATION GASKETS & FLANGE PROTECTORS',
            paragraphs: [
              'Dielectric flange insulation kits (G10/FR4, Neoprene, Phenolic), heavy-duty plastic flange face protectors, and high-temperature nickel anti-seize compound.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },
    },
  },
};
