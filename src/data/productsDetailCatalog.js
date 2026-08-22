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
              'Membrane weld ring gaskets',
              'Profiled weld ring gaskets',
              'Hollow-lip weld ring gaskets',
            ],
          },
          {
            heading: 'MEMBRANE WELDING RING GASKETS',
            paragraphs: [
              'Membrane weld ring gaskets and weld ring gaskets are not suitable for accommodating significant radial differential expansion between the connected components. Depending on the specific design of the gasket, the allowable radial movement can be as low as 0.1 mm (0.004 inches) and should not exceed 0.5 mm (0.02 inches).',
              'A membrane weld ring gasket typically consists of two matching metal rings, each with a thickness of approximately 4 mm (0.16 inches). These rings are made from materials that are either identical or compatible with the flange materials, in order to ensure:',
            ],
            bullets: [
              'chemical and weld compatibility,',
              'thermal conductivity alignment,',
              'and minimization of radial differential stresses.',
            ],
            subParagraphs: [
              'Each ring is individually welded to its corresponding flange using an internal joint weld. After both rings are secured, a second welding step is performed along the outer diameter, creating a fully welded, sealed joint.',
              'The welds used in this configuration are classified as seal welds, meaning they are intended to ensure leak-tightness, rather than to provide structural strength.',
              'The width of the weld ring gasket must be engineered to withstand internal pressure, particularly acting in the circumferential (hoop) direction, ensuring mechanical stability and integrity under operating conditions.',
            ],
            table: {
              headers: ['CODE', 'FIGURE', 'DESCRIPTION', 'Typical thickness', 'Re-weld times', 'Radial compensation'],
              rows: [
                {
                  code: 'W16-M',
                  figureType: 'membrane',
                  description: 'Basic solution for application where the space between flanges is limited, or data not as per DIN 2695 standard (even for CS rings) (*)',
                  thickness: '4mm',
                  reweld: 'up to 2',
                  radial: '0.2mm',
                },
              ],
              footnote: 'All welded rings can be executed according to customer drawings.\n(*) In accordance with DIN 2695 2002 for C22 flanges.',
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
                  description: 'Similar to type W16-M but with both outside and inside lip, manufactured from solid section (others available which welded on their flat bladed execution) (*)',
                  thickness: '15mm',
                  reweld: 'up to 3',
                  radial: '0.4mm',
                },
              ],
              footnote: 'All welded rings can be executed according to customer drawings.\n(*) In accordance with DIN 2695 2002 for C22 flanges.',
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
                  description: 'Advanced execution recommended especially for large diameter joints. Flexible to compensate axial and radial differential expansions, extremely resistant to thermal and pressure shocks. The hollow execution allows to take full advantage of movements from narrow convex surfaces compared to outside seam execution.',
                  thickness: '15mm',
                  reweld: 'up to 4',
                  radial: '3mm',
                },
                {
                  code: 'W16-L2',
                  figureType: 'hollow-2',
                  description: 'Most advanced construction recommended especially for large diameter joints. Excellent to compensate axial and extreme radial differential expansions, extremely resistant to thermal and pressure shocks.',
                  thickness: '20mm',
                  reweld: 'from 3 to 6',
                  radial: '5mm',
                },
              ],
              footnote: 'All welded rings can be executed according to customer drawings.\n(*) In accordance with DIN 2695 2002 for C22 flanges.',
            },
          },
        ],
      },

      'ring-type-joint-rtj': {
        title: 'RING TYPE JOINT (RTJ)',
        downloadTitle: 'Ring Type Joint (RTJ)',
        sections: [
          {
            heading: 'RING TYPE JOINT (RTJ) GASKETS',
            paragraphs: [
              'Ring Type Joint (RTJ) gaskets are heavy-duty, high-pressure metallic sealing rings precision CNC-machined from solid forged metal alloys. Designed specifically for API Spec 6A, API 17D subsea, and ASME B16.20 flange grooves, RTJ gaskets provide an impermeable metal-to-metal seal under operating pressures up to 20,000 psi (138 MPa).',
              'Under initial bolt load, the small initial contact line between the gasket angle and the flange groove yields plastically, burnishing into the metal groove face to form an absolute hermetic seal impervious to explosive decompression, sour gas (H2S), and extreme thermal cycling.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'rtj-assembly',
            bulletsIntro: 'Standard RTJ Configurations Available:',
            bullets: [
              'Style R Oval Cross-Section (ASME B16.20 / API 6A)',
              'Style R Octagonal Cross-Section (ASME B16.20 / API 6A)',
              'Style RX Pressure-Energized Ring (API 6A / Class 720 to 5000)',
              'Style BX Pressure-Energized Subsea (API 6A / API 17D up to 20,000 psi)',
            ],
          },
          {
            heading: 'STYLE R (OVAL & OCTAGONAL)',
            paragraphs: [
              'Style R ring joint gaskets are manufactured in both Oval and Octagonal cross-sections. Both styles are fully interchangeable on modern flat-bottom groove flanges, while the Oval cross-section can also be used in legacy round-bottom groove flanges.',
              'Style R Octagonal gaskets deliver a higher initial sealing contact efficiency due to the 23° angle match with modern ASME B16.5 and API 6B flanges.',
            ],
            table: {
              headers: ['STYLE', 'FIGURE', 'DESCRIPTION', 'Max Pressure', 'Standard Flanges', 'Hardness (HBW)'],
              rows: [
                {
                  code: 'Style R (Oval)',
                  figureType: 'rtj-oval',
                  description: 'Curved radius seating geometry for round and flat bottom grooves in refinery and pipeline connections.',
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
        title: 'SPIRAL WOUND GASKETS',
        downloadTitle: 'Spiral Wound Gaskets',
        sections: [
          {
            heading: 'SPIRAL WOUND GASKETS (STYLE R, RIR, CG, CGI)',
            paragraphs: [
              'Spiral Wound Gaskets are precision engineered from V-shaped metal windings combined with high-purity flexible graphite, PTFE, or mica filler. Manufactured to ASME B16.20 specifications to handle severe pressure cycles, thermal shock, and critical pipe stresses.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
            bulletsIntro: 'Standard Styles Available:',
            bullets: [
              'Style R: Basic sealing element without rings for tongue-and-groove flanges',
              'Style RIR: Sealing element with solid internal guide ring for turbulence protection',
              'Style CG: Sealing element with solid outer centering ring for standard raised-face flanges',
              'Style CGI: Sealing element with both inner and outer guide rings for high-pressure Class 900 to 2500 services',
            ],
          },
        ],
      },
      'kammprofile-gaskets': {
        title: 'KAMMPROFILE GASKETS',
        downloadTitle: 'Kammprofile Gaskets',
        sections: [
          {
            heading: 'KAMMPROFILE GROOVED METALLIC GASKETS',
            paragraphs: [
              'Kammprofile Gaskets consist of a serrated solid metal core with soft sealing layers (Graphite, PTFE, or Mica) applied to both faces. Engineered in accordance with DIN 2697, EN 1514-6, and ASME B16.20 standards.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
            bullets: [
              'Style R (Basic grooved core)',
              'Style CG (Grooved core with integral outer guide ring)',
              'Style CGI (Grooved core with loose outer guide ring for thermal cycling)',
            ],
          },
        ],
      },
      'metal-jacketed-gaskets': {
        title: 'METAL JACKETED GASKETS',
        downloadTitle: 'Metal Jacketed Gaskets',
        sections: [
          {
            heading: 'HEAT EXCHANGER METAL JACKETED GASKETS',
            paragraphs: [
              'Metal Jacketed Gaskets feature a metallic outer shell encapsulating a compressible non-asbestos, graphite, or ceramic filler core. Primarily designed for shell and tube heat exchanger pass partition bars and narrow flange configurations.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
            bullets: [
              'Single Jacketed for narrow flanges',
              'Double Jacketed for high-temperature heat exchangers',
              'Corrugated Metal Jacketed for cyclic pressure applications',
            ],
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
        title: 'PTFE GASKETS',
        downloadTitle: 'PTFE Gaskets',
        sections: [
          {
            heading: 'VIRGIN & FILLED PTFE GASKETS',
            paragraphs: [
              '100% Virgin PTFE and modified filled PTFE sheet gaskets offering universal chemical inertness across pH 0–14, high dielectric strength, and FDA compliance.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
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
};
