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
      { id: 'about-metallic-gaskets', title: 'ABOUT METALLIC GASKETS', downloadTitle: 'Metallic Gaskets Catalog' },
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
      { id: 'bridge-gaskets', title: 'BRIDGEMAN GASKETS', downloadTitle: 'Bridgeman Gaskets' },
      { id: 'spectacle-blind-gaskets', title: 'SPECTACLE BLIND GASKETS', downloadTitle: 'Spectacle Blinds' },
      { id: 'transition-rtj', title: 'TRANSITION RTJ', downloadTitle: 'Transition RTJ' },
      { id: 'soft-material-seated-rtj', title: 'SOFT-MATERIAL-SEATED RTJ', downloadTitle: 'Soft-Seated RTJ' },
      { id: 'weld-lip-seals', title: 'WELD-LIP SEALS', downloadTitle: 'Weld Ring Gaskets' },
    ],
    productDetails: {
      'about-metallic-gaskets': {
        title: 'METALLIC GASKETS',
        image: '/images/product-detials-images/Ring-Type-Joint-RT-J.avif',
        downloadTitle: 'Metallic Gaskets Catalog',
        sections: [
          {
            heading: 'METALLIC GASKETS',
            paragraphs: [
              'TXCO Sealing Products Private Limited manufactures and supplies metallic gaskets for critical applications in the oil & gas, petrochemical, refining, chemical and power industries.',
              'Our metallic gaskets are designed for demanding services requiring high pressure and temperature resistance, mechanical strength and chemical compatibility.',
              'We manufacture using stainless steel, duplex, super duplex, nickel alloys and other special alloys, selected to suit the application and customer requirements.',
              'Quality is maintained through controlled material selection, dimensional accuracy, hardness, surface finish and traceability. Each gasket is manufactured and inspected in accordance with the applicable standard, drawing and customer specification.',
              'Quality Controlled. Standards Compliant. Reliable Sealing.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'rtj-assembly',
          },
          {
            heading: 'CONTROLLED HARDNESS SPECIFICATIONS & METALLURGY MATRIX',
            table: {
              headers: ['MATERIAL', 'UNS NO.', 'MAX BRINELL HARDNESS', 'MAX ROCKWELL HARDNESS', 'DESCRIPTION / CODE'],
              rows: [
                { code: 'Soft Iron', figureType: 'rtj-material', description: '—', thickness: '90', reweld: '56', radial: 'D' },
                { code: 'Low Carbon Steel', figureType: 'rtj-material', description: '—', thickness: '120', reweld: '68', radial: 'S' },
                { code: '4-6% Chrome 1/2% Moly', figureType: 'rtj-material', description: 'K42544', thickness: '130', reweld: '75', radial: 'F5' },
                { code: 'Type 304 Stainless Steel', figureType: 'rtj-material', description: 'S30400', thickness: '160', reweld: '83', radial: 'S304' },
                { code: 'Type 316 Stainless Steel', figureType: 'rtj-material', description: 'S31600', thickness: '160', reweld: '83', radial: 'S316' },
                { code: 'Type 347 Stainless Steel', figureType: 'rtj-material', description: 'S34700', thickness: '160', reweld: '83', radial: 'S347' },
                { code: 'Type 410 Stainless Steel', figureType: 'rtj-material', description: 'S41000', thickness: '170', reweld: '86', radial: 'S410' },
                { code: 'Titanium Grade 2', figureType: 'rtj-material', description: 'R50400', thickness: '215', reweld: '94', radial: 'Ti Gr.2' },
                { code: 'Alloy 600', figureType: 'rtj-material', description: 'N06600', thickness: '200', reweld: '92', radial: 'Inconel 600' },
                { code: 'Alloy 625', figureType: 'rtj-material', description: 'N06625', thickness: '200', reweld: '92', radial: 'Inconel 625' },
                { code: 'Alloy 800', figureType: 'rtj-material', description: 'N08800', thickness: '200', reweld: '92', radial: 'Incoloy 800' },
                { code: 'Alloy 825', figureType: 'rtj-material', description: 'N08825', thickness: '200', reweld: '92', radial: 'Incoloy 825' },
                { code: 'Hastelloy', figureType: 'rtj-material', description: 'N10001', thickness: '200', reweld: '—', radial: 'Hastelloy B' },
                { code: 'Alloy C276', figureType: 'rtj-material', description: 'N10276', thickness: '200', reweld: '92', radial: 'Hastelloy C276' },
                { code: 'SMO 254', figureType: 'rtj-material', description: 'S32154', thickness: '180', reweld: '89', radial: '254 SMO' },
                { code: 'Zeron 100', figureType: 'rtj-material', description: '—', thickness: '200', reweld: '—', radial: 'Super Duplex Zeron' },
                { code: 'Super Duplex', figureType: 'rtj-material', description: 'S31803', thickness: '200', reweld: '92', radial: 'Duplex 2205' },
                { code: '321 Stainless Steel', figureType: 'rtj-material', description: '—', thickness: '160', reweld: '83', radial: 'S321' },
                { code: 'MONEL 400', figureType: 'rtj-material', description: '—', thickness: '130', reweld: '72', radial: 'Monel 400' },
                { code: '309 Stainless Steel', figureType: 'rtj-material', description: '—', thickness: '160', reweld: '83', radial: 'S309' },
                { code: 'Alloy 20', figureType: 'rtj-material', description: '—', thickness: '160', reweld: '83', radial: 'Carpenter 20' },
              ],
              footnote: 'Other exotic materials available on request.',
            },
          },
        ],
      },

      'ring-type-joint-rtj': {
        title: 'RING TYPE JOINT (RTJ) GASKETS',
        image: '/images/product-detials-images/Ring-Type-Joint-RT-J.avif',
        downloadTitle: 'Ring Type Joint (RTJ)',
        sections: [
          {
            heading: 'RING TYPE JOINT (RTJ) GASKETS',
            paragraphs: [
              'Ring Type Joint (RTJ) Gaskets are metallic sealing solutions designed for high-pressure, high-temperature and demanding flange connections. They provide a reliable metal-to-metal seal and are available in R, RX and BX profiles, selected according to flange design, pressure class and service conditions.',
              'At TXCO Sealing Products Private Limited, RTJ gaskets are a key part of our sealing portfolio for critical oil & gas, petrochemical, refining, chemical and power applications. Our range covers various materials, sizes and pressure ratings, with products aligned to ASME B16.20 and API 6A requirements for dependable sealing performance.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'rtj-assembly',
          },
          {
            heading: 'TYPE R – OVAL',
            bullets: [
              'Oval-shaped cross-section designed for line-contact sealing.',
              'Suitable for compatible oval and octagonal RTJ grooves.',
              'Commonly used in legacy equipment and low-to-medium pressure applications.',
              'Provides reliable sealing for conventional flange connections.',
              'Suitable for a wide range of industrial services where standard RTJ sealing is required.',
            ],
          },
          {
            heading: 'TYPE R – OCTAGONAL',
            bullets: [
              'Features an octagonal cross-section for concentrated point-contact sealing.',
              'Designed specifically for octagonal RTJ grooves.',
              'Provides improved sealing performance compared with the oval profile.',
              'Widely used in oil & gas, petrochemical, refining and industrial applications.',
              'Suitable for demanding pressure and temperature conditions.',
            ],
          },
          {
            heading: 'TYPE RX',
            bullets: [
              'Features a modified octagonal cross-section with pressure-energized sealing.',
              'Internal pressure increases the sealing force against the groove walls.',
              'Designed for compatible API 6A and ASME flange connections.',
              'Commonly used in high-pressure valves, wellheads and pressure vessels.',
              'Suitable for critical services involving pressure and temperature fluctuations.',
              'Must be matched with the correct groove dimensions and is not interchangeable with BX.',
            ],
          },
          {
            heading: 'TYPE BX',
            bullets: [
              'High-pressure, pressure-energized RTJ gasket designed for extreme service conditions.',
              'Incorporates a pressure-equalizing hole to support uniform pressure distribution.',
              'Designed exclusively for compatible API 6A BX flanges.',
              'Suitable for pressures up to 20,000 psi, depending on material and application.',
              'Commonly used in wellheads, Christmas trees, subsea systems and high-pressure manifolds.',
              'Requires proper alignment, groove condition and surface finish for reliable sealing.',
            ],
          },
        ],
      },

      'rubber-coated-rtj': {
        title: 'RUBBER-COATED RING TYPE JOINTS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        downloadTitle: 'Rubber-Coated RTJ Catalog',
        sections: [
          {
            heading: 'RUBBER-COATED RING TYPE JOINTS',
            bullets: [
              'Rubber-Coated Ring Type Joints consist of a metallic RTJ core encapsulated in a nitrile rubber (NBR) coating, with the core typically manufactured from soft iron or low-carbon steel.',
              'Designed primarily for pressure testing applications, where protection of the flange sealing faces and RTJ grooves is important.',
              'The resilient rubber coating provides additional contact with the mating surfaces, supporting enhanced sealing during pressure testing.',
              'The coating helps minimize mechanical damage, surface marking and wear on flange faces during assembly and testing.',
              'By isolating the metallic core from direct metal-to-metal contact with the groove surfaces, the coating also helps reduce the potential for surface corrosion and damage.',
              'Available in standard RTJ sizes, with custom dimensions and configurations available to suit specific flange and testing requirements.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'ptfe-insert-rtj': {
        title: 'PTFE-INSERT RING TYPE JOINT GASKETS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        downloadTitle: 'PTFE-Insert RTJ Catalog',
        sections: [
          {
            heading: 'PTFE-INSERT RING TYPE JOINT GASKETS',
            bullets: [
              'R and RX Ring Type Joint Gaskets can be supplied with PTFE inserts to reduce turbulence within the flow path and minimize erosion of the gasket and flange bore surfaces.',
              'The PTFE insert forms a protective barrier between the process medium and the exposed internal surfaces of the gasket and flange, helping reduce erosion, wear and flow-induced damage.',
              'For RX-type RTJ gaskets, the PTFE insert incorporates strategically positioned radial pressure-passage holes. These allow system pressure to reach the sealing surfaces and preserve the self-energizing characteristics of the RX profile.',
              'The insert is located between the inner diameter of the RTJ gasket and the flange bore, occupying the annular gap between the gasket and flange bore.',
              'During flange assembly, the PTFE insert is securely retained between the mating flange faces, maintaining its position under operating conditions.',
              'The design provides a combination of metallic sealing strength and PTFE chemical resistance, making it suitable for demanding process environments.',
              'PTFE insert configurations can be selected based on gasket profile, flange geometry, operating pressure, temperature and process medium.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'protective-coated-rtj': {
        title: 'PROTECTIVE COATINGS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        downloadTitle: 'Protective-Coated RTJ Catalog',
        sections: [
          {
            heading: 'PROTECTIVE COATINGS',
            bullets: [
              'Protective coatings are applied to metallic Ring Type Joint Gaskets to enhance surface protection and improve suitability for specific service conditions.',
              'As specified by applicable API requirements, RTJ gaskets manufactured from soft iron and low-carbon steel can be electroplated with zinc coating up to a maximum thickness of 13 μm.',
              'TXCO Sealing Products Private Limited has the capability to provide Zinc, Nickel and Silver electroplated coatings for RTJ gaskets.',
              'Zinc coating provides protection against surface oxidation and corrosion, while Nickel and Silver coatings can be selected for specific service, compatibility and sealing requirements.',
              'Coating selection and thickness can be provided in accordance with customer specifications, applicable standards and operating conditions.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'bonnet-rings': {
        title: 'BONNET GASKETS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        downloadTitle: 'Bonnet Rings Catalog',
        sections: [
          {
            heading: 'BONNET GASKETS',
            bullets: [
              'Bonnet Gaskets are sealing components installed between the valve body and bonnet, providing a reliable pressure boundary and preventing leakage of fluids or gases.',
              'They are designed to maintain sealing integrity under pressure, temperature and process-fluid conditions encountered in industrial valve applications.',
              'Bonnet gaskets are commonly used in gate valves and other pressure-containing valve assemblies, particularly in oil & gas, petrochemical, refining and power industries.',
              'Depending on the valve design and service conditions, bonnet gaskets may be supplied in RTJ and other metallic sealing configurations.',
              'Material selection is based on operating temperature, pressure, corrosion environment and process-fluid compatibility.',
              'Common materials include carbon steel, stainless steel 304/316 and other alloy grades, subject to application requirements.',
              'Proper control of gasket dimensions, hardness, surface finish and bonnet-groove compatibility is essential for reliable sealing performance.',
              'Bonnet gaskets support equipment integrity, leak prevention and safe operation in critical valve services.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'lens-rings': {
        title: 'LENS GASKETS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        downloadTitle: 'Lens Rings Catalog',
        sections: [
          {
            heading: 'LENS GASKETS',
            bullets: [
              'Lens Gaskets are metallic sealing elements designed for flanged connections with spherical sealing geometries.',
              'Unlike conventional flat gaskets, the lens profile has a convex sealing surface that mates with the corresponding concave flange seat, creating a concentrated metal-to-metal seal.',
              'The spherical geometry allows controlled deformation under bolt load, producing a narrow, high-integrity sealing contact.',
              'This design provides reliable sealing under high pressure, elevated temperatures and severe thermal cycling.',
              'Lens Gaskets are primarily specified in accordance with DIN 2696, with dimensions and configurations adaptable to other flange standards where required.',
              'The gasket material is selected with appropriate hardness relative to the flange material, allowing deformation to occur preferentially in the gasket and minimizing damage to the flange sealing surface.',
              'Available materials include carbon steel, stainless steel and selected alloy grades, depending on pressure, temperature and process-media requirements.',
              'Common applications include chemical plants, reactors, high-pressure piping systems and other critical process equipment where sealing reliability and resistance to thermal cycling are essential.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'blind-gaskets': {
        title: 'BLIND FLANGE METALLIC GASKETS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        downloadTitle: 'Blind Gaskets Catalog',
        sections: [
          {
            heading: 'BLIND FLANGE METALLIC GASKETS',
            bullets: [
              'Blind Flange Metallic Gaskets are designed for sealing blind flange connections in high-pressure and high-temperature systems.',
              'They provide a secure metal-to-metal sealing interface, maintaining joint integrity under demanding operating conditions.',
              'Suitable for critical pressure-containing applications where reliable sealing is essential.',
              'Manufactured from high-strength metallic materials selected according to pressure, temperature and process-fluid requirements.',
              'Designed to maintain dimensional compatibility with the mating flange, supporting proper fit-up and sealing performance.',
              'Commonly used in oil & gas, petrochemical, refining, chemical and power applications.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'vx-ax-gaskets': {
        title: 'VX–AX GASKETS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        downloadTitle: 'VX-AX Gaskets Catalog',
        sections: [
          {
            heading: 'VX–AX GASKETS',
            bullets: [
              'VX–AX Gaskets are specialized sealing solutions developed for demanding oil & gas, offshore and subsea applications, combining reliable pressure sealing with application-specific performance requirements.',
              'VX gaskets feature a face-to-face, pressure-energized design that supports reliable sealing while allowing direct hub-to-hub contact.',
              'The pressure-energized geometry enhances sealing performance as system pressure increases, helping maintain joint integrity under demanding operating conditions.',
              'VX gaskets are suitable for wellheads, riser connectors and subsea equipment, including services involving aggressive chemicals, elevated temperatures and various process fluids.',
              'AX gaskets incorporate sealing and insulating elements to provide both effective sealing and electrical isolation between mating flange components.',
              'The electrical insulation helps minimize the risk of galvanic corrosion between dissimilar metallic components and supports the integrity of the flange connection.',
              'VX and AX configurations can be selected according to flange design, pressure and temperature conditions, material compatibility and service environment.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'ix-gaskets': {
        title: 'IX RING TYPE JOINT GASKETS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        downloadTitle: 'IX Gaskets Catalog',
        sections: [
          {
            heading: 'IX RING TYPE JOINT GASKETS',
            bullets: [
              'IX Ring Type Joint Gaskets, available from IX 15 to IX 1200, are designed and supplied in accordance with the requirements of NORSOK L-005.',
              'Gasket materials are selected in accordance with applicable NORSOK M-650 and NORSOK M-630 requirements for demanding offshore and subsea service.',
              'PTFE or XYLAN coatings can be applied to provide suitable surface protection and support reliable sealing performance.',
              'Color coding is used to identify the gasket material type in accordance with the applicable specification.',
              'IX gaskets can be supplied in various material grades, sizes and coating configurations based on operating conditions and project requirements.',
              'Silver-coated IX gaskets can also be provided where specified by the customer or project requirements.',
              'Suitable for critical applications where material traceability, corrosion resistance and reliable sealing performance are essential.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'delta-gaskets': {
        title: 'DELTA GASKETS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        downloadTitle: 'Delta Gaskets Catalog',
        sections: [
          {
            heading: 'DELTA GASKETS',
            bullets: [
              'Delta Gaskets are pressure-energized metallic seals designed for compact, high-integrity flange connections, particularly in subsea applications.',
              'Their geometry utilizes system pressure to enhance the sealing force, supporting reliable metal-to-metal sealing under demanding conditions.',
              'Designed for deepwater, high-pressure and high-temperature environments, where conventional sealing solutions may be subject to severe operating conditions.',
              'Commonly used in API 17D subsea equipment, including wellhead and subsea production systems.',
              'The pressure-energized design helps maintain sealing integrity during pressure fluctuations and demanding service conditions.',
              'Manufactured from suitable metallic alloys selected according to pressure, temperature, corrosion environment and material compatibility.',
              'Delta Gaskets are suited to critical applications where leak prevention, mechanical integrity and long-term sealing reliability are essential.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'bridge-gaskets': {
        title: 'BRIDGEMAN GASKETS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        downloadTitle: 'Bridgeman Gaskets Catalog',
        sections: [
          {
            heading: 'BRIDGEMAN GASKETS',
            bullets: [
              'Bridgeman Gaskets are specialized metallic seals designed for ultra-high-pressure and high-vacuum applications where exceptional sealing integrity is required.',
              'The sealing mechanism relies on controlled plastic deformation of the metallic gasket under high compressive loading.',
              'This deformation allows the gasket to conform closely to the mating surfaces, creating a high-integrity metal-to-metal seal.',
              'Suitable for applications involving extreme pressure differentials, vacuum conditions and demanding thermal environments.',
              'Material selection is based on operating pressure, temperature, corrosion resistance and compatibility with the process medium.',
              'Commonly associated with research equipment, nuclear systems, aerospace applications and other specialized high-integrity systems.',
              'Proper control of surface finish, gasket geometry, material hardness and applied load is essential to achieve reliable sealing performance.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'spectacle-blind-gaskets': {
        title: 'SPECTACLE BLINDS',
        image: '/images/product-detials-images/Special-Metal-Gaskets.avif',
        downloadTitle: 'Spectacle Blinds & Spades Catalog',
        sections: [
          {
            heading: 'SPECTACLE BLINDS',
            bullets: [
              'Spectacle Blinds are figure-eight-shaped metallic devices used for positive isolation of pipeline sections during maintenance, inspection and operational activities.',
              'They consist of two integral plates: an open bore for normal flow and a solid blind for complete flow isolation.',
              'The two plates are connected by a web, allowing the blind to be rotated between the open and closed positions without removing it from the pipeline.',
              'In the closed position, the solid plate provides a positive mechanical barrier, offering a higher level of isolation than conventional valves alone.',
              'Spectacle blinds are installed between mating flanges and require suitable gaskets on the sealing faces to achieve a leak-tight flange connection.',
              'Gasket selection depends on the flange facing, pressure class, temperature and process medium and may include spiral wound, RTJ or other suitable gasket configurations.',
              'Serrated sealing surfaces may be provided to improve gasket retention and load distribution under bolting.',
              'Commonly used in oil & gas, petrochemical, refining, chemical and power industries where reliable pipeline isolation is essential.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'spectacle-blind',
          },
        ],
      },

      'transition-rtj': {
        title: 'TRANSITION RING TYPE JOINTS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        downloadTitle: 'Transition RTJ Catalog',
        sections: [
          {
            heading: 'TRANSITION RING TYPE JOINTS',
            bullets: [
              'Transition Ring Type Joints are specialized sealing elements designed to connect mating RTJ flanges with different groove geometries while maintaining the same pitch circle diameter.',
              'They provide an effective sealing solution where the flange groove profiles do not directly match, avoiding the need for flange modification or replacement.',
              'These combination rings are engineered to accommodate different RTJ configurations while maintaining the required sealing integrity and dimensional compatibility.',
              'Available with oval and octagonal sealing profiles, depending on the mating flange configurations.',
              'Transition RTJs are typically application-specific components and are not directly governed by standard API or ASME RTJ specifications.',
              'Dimensions, materials, hardness and profile geometry are established according to the specific flange configuration and service requirements.',
              'Suitable for specialized applications where reliable sealing, dimensional compatibility and operational integrity are critical.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'soft-material-seated-rtj': {
        title: 'SOFT MATERIAL SERRATED RTJ GASKETS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        downloadTitle: 'Soft-Material-Seated RTJ Catalog',
        sections: [
          {
            heading: 'SOFT MATERIAL SERRATED RTJ GASKETS',
            bullets: [
              'Soft Material Serrated RTJ Gaskets combine a serrated metallic core with a soft facing material to provide enhanced sealing in demanding flange connections.',
              'The serrated profile increases the effective contact area and helps the facing material conform to minor surface irregularities in the flange groove.',
              'Soft facing materials such as graphite or PTFE can be selected according to the process medium, temperature and chemical conditions.',
              'The metallic core provides mechanical strength and dimensional stability, while the soft facing improves sealing capability and surface conformity.',
              'Suitable for applications where improved sealing is required against minor flange imperfections or surface irregularities.',
              'Material, serration geometry and facing selection can be customized based on operating pressure, temperature, flange configuration and service conditions.',
              'Common applications include oil & gas, petrochemical, refining, chemical and process industries.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'weld-lip-seals': {
        title: 'TXCO WELD RING GASKETS',
        image: '/images/product-detials-images/Welded-Lip-Seals.avif',
        downloadTitle: 'Weld Ring Gaskets',
        sections: [
          {
            heading: 'TXCO WELD RING GASKETS',
            paragraphs: [
              'Dual-Ring Metallic Sealing for Critical & Semi-Permanent Flange Connections',
              'TXCO Weld Ring Gaskets—also known as lip seal weld rings—utilize a matched pair of precision metallic rings to establish a fused, 100% leak-proof joint. During installation, each individual ring is first welded directly to its respective flange face. Once the flange connection is aligned and bolted, the outer edges of the two mating rings are seal-welded together along their outer periphery to complete the hermetic seal.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
          {
            heading: 'OPERATIONAL FEATURES & ADVANTAGES',
            bullets: [
              'Dual-Weld Hermetic Seal: Combines inner structural flange welds with an outer circumferential seal weld, creating a continuous metal barrier that completely eliminates leakage pathways.',
              'Severe-Service Alternative: Engineered for extreme pressure, thermal cycling, and hazardous media applications where standard elastomeric or soft sheet gaskets risk blowout or degradation.',
              'Decoupled Stress Distribution: Flange bolts handle the mechanical line loads and structural tension, allowing the weld rings to focus purely on zero-leakage fluid containment.',
              'Semi-Detachable Maintenance Profile: Ideal for piping systems requiring infrequent maintenance. When servicing is necessary, the joint is opened by removing the flange bolts and mechanically cutting the outer peripheral weld seam without damaging the underlying flange face.',
            ],
          },
          {
            heading: 'TECHNICAL SUMMARY',
            table: {
              headers: ['FEATURE', 'FIGURE', 'ENGINEERING STANDARD', 'SERVICE PROFILE', 'JOINING METHOD', 'APPLICATIONS'],
              rows: [
                {
                  code: 'Design Type',
                  figureType: 'membrane',
                  description: 'Symmetrical Dual-Ring Metallic Assembly',
                  thickness: 'Semi-Permanent / Semi-Detachable',
                  reweld: 'Outer Edge Seal Welding (GTAW / TIG)',
                  radial: 'High-Temperature Steam, Lethal Media, Infrequent Overhaul Lines',
                },
              ],
              footnote: 'Precision CNC-machined to matching flange metallurgy and pressure ratings.',
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
      { id: 'about-semi-metallic-gaskets', title: 'ABOUT SEMI-METALLIC GASKETS', downloadTitle: 'Semi-Metallic Gaskets Catalog' },
      { id: 'spiral-wound-gaskets', title: 'SPIRAL WOUND GASKETS', downloadTitle: 'Spiral Wound Gaskets' },
      { id: 'kammprofile-gaskets', title: 'KAMMPROFILE GASKETS', downloadTitle: 'Kammprofile Gaskets' },
      { id: 'metal-jacketed-gaskets', title: 'METAL JACKETED GASKETS', downloadTitle: 'Metal Jacketed Gaskets' },
      { id: 'flange-isolation-kits', title: 'FLANGE ISOLATION KITS', downloadTitle: 'Flange Isolation Kits' },
    ],
    productDetails: {
      'about-semi-metallic-gaskets': {
        title: 'SEMI METALLIC GASKETS',
        image: '/images/product-detials-images/Spiral-Wound-Gaskets-Planisteel-SW.avif',
        downloadTitle: 'Semi-Metallic Gaskets Catalog',
        sections: [
          {
            heading: 'SEMI METALLIC GASKETS',
            paragraphs: [
              'Semi-metallic gaskets combine metallic strength with compressible sealing materials to provide reliable performance under demanding pressure, temperature and process conditions.',
              'TXCO Sealing Products Private Limited offers Spiral Wound, Kammprofile and Metal Jacketed Gaskets, along with Flange Isolation Kits for sealing and electrical isolation. Material and construction are selected according to flange design, service conditions and process media.',
              'Designed for critical applications across oil & gas, petrochemical, refining, chemical and power industries, TXCO solutions deliver dependable sealing, mechanical stability and service reliability.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
          {
            heading: 'SPIRAL WOUND GASKETS — OVERVIEW & MATERIALS',
            paragraphs: [
              'Spiral Wound Gaskets are semi-metallic sealing elements designed for reliable performance under demanding pressure, temperature and process conditions. Their alternating metallic winding and filler construction provides flexibility, recovery and resistance to operating fluctuations.',
              'At TXCO Sealing Products Private Limited, Spiral Wound Gaskets are designed and configured in accordance with applicable ASME B16.20, ASME B16.5 and ASME B16.47 requirements, with construction and materials selected based on flange configuration, process medium, pressure, temperature and service conditions.',
            ],
            table: {
              headers: ['COMPONENT', 'FIGURE', 'TYPICAL MATERIALS', 'FUNCTION', 'APPLICABLE STYLES', 'KEY STANDARDS'],
              rows: [
                {
                  code: 'Winding',
                  figureType: 'mat-sw1',
                  description: 'SS 304, SS 316, SS 321, SS 347, Inconel, Monel, Nickel Alloys',
                  thickness: 'Provides strength, resilience and recovery',
                  reweld: 'Style R, Style RIR, Style CG, Style CGI, Style CGI Bolt-Holes',
                  radial: 'ASME B16.20, ASME B16.5, ASME B16.47',
                },
                {
                  code: 'Filler',
                  figureType: 'mat-sw2',
                  description: 'Flexible Graphite, PTFE, Ceramic, Mica',
                  thickness: 'Provides the primary sealing medium',
                  reweld: 'All Styles',
                  radial: 'ASME B16.20',
                },
                {
                  code: 'Inner Ring',
                  figureType: 'mat-sw3',
                  description: 'Carbon Steel, SS 304/316, SS 321/347, Nickel Alloys',
                  thickness: 'Prevents inward buckling and protects the winding',
                  reweld: 'Style RIR, Style CGI, Style CGI Bolt-Holes',
                  radial: 'ASME B16.20',
                },
                {
                  code: 'Outer Ring',
                  figureType: 'mat-sw4',
                  description: 'Carbon Steel, SS 304/316, SS 321/347',
                  thickness: 'Provides centering and compression control',
                  reweld: 'Style CG, Style CGI, Style CGI Bolt-Holes',
                  radial: 'ASME B16.20',
                },
                {
                  code: 'Special Alloys',
                  figureType: 'mat-sw5',
                  description: 'Duplex, Super Duplex, Hastelloy, Inconel',
                  thickness: 'For corrosive and severe service conditions',
                  reweld: 'Custom / All Styles',
                  radial: 'NACE MR0175 / ISO 15156',
                },
              ],
              footnote: 'Winding, filler and ring materials are selected according to pressure, temperature, chemical compatibility and flange requirements.',
            },
          },
          {
            heading: 'KEY CONSTRUCTION ELEMENTS',
            bullets: [
              'Outer Ring: Provides accurate centering, alignment and controlled compression during flange assembly.',
              'Inner Ring: Supports the winding, prevents inward buckling and helps protect against process turbulence and erosion.',
              'Sealing Element: Alternating metal winding and filler layers form the primary sealing barrier.',
              'Material Selection: Winding, filler and ring materials are selected according to pressure, temperature, chemical compatibility and flange requirements.',
            ],
          },
        ],
      },

      'spiral-wound-gaskets': {
        title: 'SPIRAL WOUND GASKETS',
        image: '/images/product-detials-images/Spiral-Wound-Gaskets-Planisteel-SW.avif',
        downloadTitle: 'Spiral Wound Gaskets Catalog',
        sections: [
          {
            heading: 'STYLE R – BASIC SPIRAL WOUND GASKET',
            bullets: [
              'Consists of the spiral wound sealing element without inner or outer guide rings.',
              'Manufactured using alternating layers of metallic winding strip and filler material.',
              'Additional winding at the start and end provides stability and resistance to unwinding.',
              'The V-shaped winding profile provides spring-like recovery during pressure and temperature variations.',
              'Suitable for tongue & groove, male & female and other confined flange configurations.',
              'Useful where the flange design itself provides gasket positioning and compression control.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
          {
            heading: 'STYLE RIR – INNER RING',
            bullets: [
              'Consists of a spiral wound sealing element with an integral inner metal ring.',
              'The inner ring provides radial support and additional structural stability.',
              'Helps prevent inward buckling or collapse of the winding under compression.',
              'Acts as a barrier against process-media turbulence, erosion and debris accumulation.',
              'Provides additional control of the gasket’s inner sealing diameter.',
              'Commonly used with male & female, spigot-and-recess and confined flange configurations.',
            ],
          },
          {
            heading: 'STYLE CG – OUTER RING',
            bullets: [
              'Consists of the spiral wound sealing element with an outer centering and guide ring.',
              'The outer ring ensures accurate gasket positioning relative to the flange bore.',
              'Functions as a compression limiter, helping prevent excessive crushing of the winding.',
              'Supports uniform gasket loading during bolt tightening and flange assembly.',
              'Commonly used with raised face (RF) and flat face (FF) flanges.',
              'Suitable for general process piping and moderate service conditions.',
            ],
          },
          {
            heading: 'STYLE CGI – INNER & OUTER RINGS',
            bullets: [
              'Incorporates the spiral wound sealing element with both inner and outer metallic rings.',
              'The inner ring provides radial reinforcement, compression control and media protection.',
              'Helps minimize inward buckling, turbulence and erosion at the gasket ID.',
              'The outer ring provides centering, alignment and controlled compression.',
              'Provides improved mechanical stability under high pressure and temperature conditions.',
              'Recommended for severe service, aggressive media and critical flange connections.',
              'Suitable for applications requiring enhanced sealing reliability and protection of the winding element.',
            ],
          },
          {
            heading: 'STYLE CGI – BOLT-HOLE TYPE',
            bullets: [
              'Incorporates the CGI construction with bolt holes provided in the outer centering ring.',
              'Bolt holes provide positive gasket location and alignment during flange assembly.',
              'Helps prevent gasket displacement or rotation during installation.',
              'Supports consistent positioning of the sealing element relative to the flange and bolt circle.',
              'The inner ring provides protection against inward buckling, erosion and process-media effects.',
              'The outer ring provides compression control and accurate centering.',
              'Suitable for critical applications where precise gasket positioning and repeatable assembly are required.',
            ],
          },
        ],
      },

      'kammprofile-gaskets': {
        title: 'KAMMPROFILE GASKETS',
        image: '/images/product-detials-images/Planisteel-Camprofile.avif',
        downloadTitle: 'Kammprofile Gaskets Catalog',
        sections: [
          {
            heading: 'KAMMPROFILE GASKETS',
            paragraphs: [
              'Kammprofile Gaskets are semi-metallic sealing elements consisting of a serrated metallic core with a facing material. The controlled serration profile concentrates the sealing load while the facing material fills minor surface irregularities, providing reliable sealing under demanding pressure, temperature and process conditions.',
              'At TXCO Sealing Products Private Limited, Kammprofile Gaskets are configured according to flange design, operating conditions and process media, with materials selected for the required service. Designs can be supplied to applicable ASME B16.20 and project-specific requirements.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
          {
            heading: 'TYPE Z – BASIC KAMMPROFILE',
            bullets: [
              'Consists of a serrated metallic sealing core without an integral guide ring.',
              'The serrations provide controlled contact and support the sealing material under compression.',
              'Can be supplied with suitable facing materials such as flexible graphite or PTFE, depending on service requirements.',
              'Suitable for applications where controlled compression and reliable metal-core support are required.',
              'Material selection is based on pressure, temperature and chemical compatibility.',
            ],
          },
          {
            heading: 'TYPE ZA – KAMMPROFILE WITH OUTER RING',
            bullets: [
              'Incorporates a serrated sealing core with an outer centering ring.',
              'The outer ring provides accurate gasket positioning and alignment during flange assembly.',
              'Helps control compression and protects the sealing element during installation.',
              'Suitable for raised-face and other compatible flange configurations.',
              'Commonly selected for general industrial and demanding process applications.',
            ],
          },
          {
            heading: 'TYPE ZI – KAMMPROFILE WITH INNER & OUTER RINGS',
            bullets: [
              'Features a serrated metallic core with both inner and outer rings.',
              'The inner ring provides additional radial support and protects the sealing element from process turbulence and erosion.',
              'The outer ring provides centering and compression control.',
              'Offers enhanced mechanical stability for high-pressure, high-temperature and aggressive service conditions.',
              'Suitable for critical applications where sealing integrity, stability and long service life are essential.',
            ],
          },
        ],
      },

      'metal-jacketed-gaskets': {
        title: 'METAL JACKETED GASKETS',
        image: '/images/product-detials-images/Metal-jacketed-gaskets-Planisteel MJ.avif',
        downloadTitle: 'Metal Jacketed Gaskets Catalog',
        sections: [
          {
            heading: 'METAL JACKETED GASKETS',
            paragraphs: [
              'Metal Jacketed Gaskets are semi-metallic sealing elements consisting of a soft filler enclosed within a metallic jacket. The metal jacket provides mechanical protection and resistance to pressure and temperature, while the filler accommodates flange irregularities and supports sealing performance.',
              'At TXCO Sealing Products Private Limited, Metal Jacketed Gaskets are configured in different constructions and materials to suit heat exchangers, pressure vessels, piping and other critical process equipment. Material selection is based on the process medium, operating temperature, pressure and flange configuration.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
          {
            heading: '1. CORRUGATED METAL JACKETED GASKETS',
            bullets: [
              'Incorporate a corrugated metallic jacket around the filler material.',
              'Corrugations provide increased flexibility and improved surface conformity.',
              'Suitable for heat exchangers, boilers and high-temperature applications.',
              'Available with suitable metallic jackets and fillers according to service conditions.',
            ],
          },
          {
            heading: '2. FLAT METAL JACKETED GASKETS',
            bullets: [
              'Consist of a flat metallic jacket enclosing a soft filler.',
              'Provide a robust sealing solution for conventional flange and equipment connections.',
              'Suitable for moderate pressure and temperature applications.',
              'Commonly used in piping, covers, heat exchangers and process equipment.',
            ],
          },
          {
            heading: '3. DOUBLE JACKETED GASKETS',
            bullets: [
              'Manufactured with two metallic jackets enclosing the filler material.',
              'The double-jacket construction provides enhanced mechanical protection and sealing stability.',
              'Suitable for demanding pressure and temperature conditions.',
              'Commonly used for heat exchangers, pressure vessels and equipment flanges.',
            ],
          },
          {
            heading: '4. HEAT EXCHANGER GASKETS',
            bullets: [
              'Designed specifically for heat exchanger covers, channels and tube-sheet assemblies.',
              'Available in configurations suited to complex flange geometries and multiple sealing requirements.',
              'Can incorporate different jacket materials, fillers, pass partitions and sealing arrangements.',
              'Designed to withstand thermal cycling, pressure fluctuations and process-fluid exposure.',
              'Material selection is based on the shell-side and tube-side operating conditions.',
            ],
          },
        ],
      },

      'flange-isolation-kits': {
        title: 'FLANGE ISOLATION KITS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        downloadTitle: 'Flange Isolation Kits Catalog',
        sections: [
          {
            heading: 'FLANGE ISOLATION KITS',
            paragraphs: [
              'TXCO Flange Isolation Kits are designed to electrically isolate flanged joints and help prevent galvanic corrosion between dissimilar metals. They also support cathodic protection systems by preventing unwanted electrical continuity across the flange connection.',
              'A typical kit includes an insulating gasket, insulating sleeves, insulating washers and steel backup washers. The insulating components work together to provide effective electrical separation while maintaining the required sealing integrity and mechanical stability of the flange joint.',
              'These kits are widely used in oil & gas, petrochemical, refining, chemical, water and process industries, where corrosion control and reliable flange isolation are essential.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
          {
            heading: 'TX-ISOPRO™',
            paragraphs: [
              'Engineered for critical galvanic corrosion control and Cathodic Protection (CP) integrity, the TX ISOPRO™ series delivers total dielectric isolation and zero-leakage fluid containment across oil & gas, petrochemical, and process piping.',
              'Combining a high-strength Glass Reinforced Epoxy (GRE G10/G11) substrate with an integrated TX-FLEX™ modified ePTFE primary seal, the system eliminates creep relaxation and resists aggressive media (pH 0–14) under thermal cycling. Paired with insulating sleeves and double washers, it creates a complete 360° electrical barrier.',
            ],
            bulletsIntro: 'Available Configurations:',
            bullets: [
              'TX ISOPRO™-F (Type F – Raised Face): Fits inside the bolt circle across the raised face. Simplifies centering and minimizes exposure to external contaminants in RF flange connections.',
              'TX ISOPRO™-E (Type E – Full Face): Extends to the flange outer diameter with precision bolt holes. Delivers full face-to-face coverage to prevent metallic debris from bridging the isolation gap.',
            ],
          },
          {
            heading: 'TX-CERAMPRO™',
            paragraphs: [
              'TX-CERAMPRO™ is a fire-safe flange isolation gasket designed to provide electrical insulation and reliable sealing in critical flange connections. TX-CERAMPRO™ redefines high-temperature pipeline integrity through a revolutionary dual-sheet facing technology, establishing a new standard where absolute thermal endurance meets uncompromised dielectric defense. Engineered around a precision steel core encapsulated within high-strength Glass Reinforced Epoxy (GRE), it integrates proprietary TX-CERAMSHIELD™ and TX-IGNISIL™ facings to create an impenetrable barrier built for the world\'s most punishing process lines.',
            ],
            bulletsIntro: 'Engineering Highlights:',
            bullets: [
              'Revolutionary Dual-Sheet Facing: Fuses specialized ceramic and mineral matrices to deliver continuous thermal management up to 1000°C with zero carbon oxidation or material degradation.',
              'API 6FB Certified Fire Safety: Formulated to preserve joint tightness and structural seal integrity under direct flame exposure and catastrophic thermal shock.',
              'Permanent Dielectric Defense: High-density GRE encapsulation isolates stray electrical currents, halting galvanic corrosion across mating flanges for the lifetime of the connection.',
              'Low-Emission Dual Sealing: Synergized mica and PTFE sealing profiles deliver micro-fine fluid containment, excelling in sour gas (H2S), high-pH media, and volatile hydrocarbons.',
              'Complete System Integration: Fully compatible with Raised Face (RF), Full Face (FF), and Ring Type Joint (RTJ) flanges, supplied with matching high-dielectric sleeves and isolation washers.',
            ],
          },
          {
            heading: 'TX TYPE D – RTJ ISOLATION GASKET',
            bullets: [
              'Designed specifically for Ring Type Joint flange connections where electrical isolation is required.',
              'Installed within the RTJ groove to provide both metallic sealing and electrical separation between the mating flanges.',
              'The insulating sealing element is selected to withstand the required pressure, temperature and process-media conditions.',
              'Particularly suitable for high-integrity systems where cathodic protection and galvanic corrosion prevention are important.',
              'Requires proper compatibility between the gasket, RTJ groove geometry, flange materials and isolation components for reliable performance.',
            ],
          },
          {
            heading: 'TX TYPE -N : FLANGE ISOLATION GASKET',
            paragraphs: [
              'TXCO Type N is a flange isolation system designed to provide electrical isolation and reliable sealing in RF and FF flange connections. The gasket uses modified, bi-directionally oriented PTFE as the primary sealing and insulating element, offering strong chemical resistance and improved resistance to PTFE relaxation and cold flow.',
            ],
            bullets: [
              'The PTFE sealing element provides electrical insulation and fluid sealing within the flange joint.',
              'Suitable for a broad range of chemical services, with compatibility across approximately pH 0–14, subject to specific media compatibility.',
              'Designed for reliable performance under pressure, temperature and chemical exposure.',
              'Suitable for RF and FF flange connections.',
              'Applicable for service temperatures up to 200°C, with pressure ratings selected according to the applicable flange class.',
              'GRE G10 (FR4) insulating sleeves and washers are recommended for enhanced mechanical and electrical performance.',
              'GRE G10 offers low moisture absorption compared with conventional phenolic materials, helping maintain insulation resistance and mechanical stability throughout service.',
              'Suitable for oil & gas, chemical, petrochemical, water and process applications where electrical isolation and chemical resistance are required.',
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
      { id: 'about-non-metallic-gaskets', title: 'ABOUT NON-METALLIC GASKETS', downloadTitle: 'Non-Metallic Gaskets Catalog' },
      { id: 'rubber-gaskets', title: 'RUBBER GASKETS', downloadTitle: 'Rubber Gaskets' },
      { id: 'ptfe-gaskets', title: 'PTFE GASKETS', downloadTitle: 'PTFE Gaskets' },
      { id: 'eptfe-gaskets', title: 'EXPANDED PTFE (ePTFE) GASKETS', downloadTitle: 'Expanded PTFE Gaskets' },
      { id: 'asbestos-free-gaskets', title: 'ASBESTOS-FREE GASKETS (AF SERIES)', downloadTitle: 'Asbestos-Free Gaskets' },
      { id: 'non-asbestos-gaskets', title: 'COMPRESSED NON-ASBESTOS (STYLE SERIES)', downloadTitle: 'Compressed Fiber Gaskets' },
    ],
    productDetails: {
      'about-non-metallic-gaskets': {
        title: 'NON METALLIC GASKETS',
        image: '/images/product-detials-images/PTFE-Jointing-Sheets-Planiflon.avif',
        downloadTitle: 'Non-Metallic Gaskets Catalog',
        sections: [
          {
            heading: 'NON METALLIC GASKETS',
            paragraphs: [
              'Non-metallic gaskets conform to flange surfaces and minor irregularities, creating a reliable barrier against leakage. Their flexibility, chemical resistance and material compatibility make them suitable for varied process conditions.',
              'At TXCO Sealing Products Private Limited, materials such as rubber, PTFE and compressed fibre are selected according to the fluid, pressure, temperature and service environment—because a good seal must remain dependable when the system is under pressure.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },
      'rubber-gaskets': {
        title: 'RUBBER GASKETS',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        downloadTitle: 'Rubber Gaskets Catalog',
        sections: [
          {
            heading: 'RUBBER GASKETS',
            paragraphs: [
              'Rubber Gaskets provide flexible, resilient sealing by conforming to flange surfaces and accommodating minor irregularities. Their ability to maintain contact under compression makes them suitable for sealing liquids and gases across a wide range of industrial applications.',
              'At TXCO Sealing Products Private Limited, rubber compounds are selected according to the medium, temperature, pressure and service environment, with different elastomers available for specific requirements.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
          {
            heading: 'TYPES OF RUBBER GASKETS',
            bullets: [
              'Neoprene: Good resistance to weathering, ozone and oxidation; suitable for outdoor and general industrial applications.',
              'NBR (Nitrile): Excellent resistance to oils, fuels and hydraulic fluids; widely used in oil & gas and industrial service.',
              'EPDM: Strong resistance to water, steam, weathering, UV and many chemicals.',
              'Silicone: Excellent flexibility and temperature stability; suitable for applications requiring cleanliness and electrical insulation.',
              'FKM (Viton®): High resistance to heat, fuels, oils and aggressive chemicals for demanding process conditions.',
              'Natural Rubber: High elasticity, resilience and abrasion resistance; suited to selected water and general service applications.',
              'SBR: Good abrasion resistance and economical performance, particularly for water and general industrial service.',
              'Butyl: Very low gas permeability with excellent resistance to moisture and air, making it suitable for gas-sealing applications.',
            ],
          },
        ],
      },
      'eptfe-gaskets': {
        title: 'EXPANDED PTFE (ePTFE) GASKETS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        downloadTitle: 'Expanded PTFE Gaskets Catalog',
        sections: [
          {
            heading: 'EXPANDED PTFE GASKETS',
            paragraphs: [
              'Expanded PTFE (ePTFE) Gaskets are soft, chemically resistant sealing elements designed to conform closely to flange surfaces and compensate for surface irregularities and flange imperfections. Their low permeability, chemical inertness and low seating stress make them suitable for demanding sealing applications.',
              'At TXCO Sealing Products Private Limited, ePTFE gaskets are selected for applications requiring chemical resistance, reliable sealing and low bolt loads, particularly where conventional gasket materials may be unsuitable.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
          {
            heading: 'KEY FEATURES',
            bullets: [
              'Excellent resistance to acids, alkalis, solvents and aggressive chemicals.',
              'Wide operating temperature capability with good sealing stability.',
              'Highly conformable, helping seal irregular and damaged flange surfaces.',
              'Requires relatively low seating stress, reducing flange loading.',
              'Non-stick surface reduces adhesion and facilitates gasket removal.',
              'Good resistance to creep and long-term compression effects.',
              'Suitable for chemical, pharmaceutical, food, power and process industries.',
              'Available as sheets, tapes, cut gaskets and application-specific shapes.',
            ],
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
      'asbestos-free-gaskets': {
        title: 'ASBESTOS-FREE COMPRESSED FIBER GASKETS (AF SERIES)',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        downloadTitle: 'Asbestos-Free Gaskets Catalog',
        sections: [
          {
            heading: 'TXCO ASBESTOS-FREE (AF) COMPRESSED FIBER GASKET RANGE',
            paragraphs: [
              'TXCO Asbestos-Free compressed fiber gaskets are engineered from high-grade aramid, carbon, glass, and inorganic mineral fibers bound within high-performance elastomeric matrices (NBR and HNBR).',
              'Available in standard Non-Metallic cut gaskets and steel wire-mesh reinforced Metallic variants, delivering exceptional torque retention, blowout resistance, and gas-tight sealing across steam, chemical, oil, and gas duties.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
            bulletsIntro: 'Key Technical Highlights & Formulations:',
            bullets: [
              'TXCO AF-110: General-purpose synthetic fiber & NBR binder for utility lines, water, and low-pressure steam (40-50 Bar, up to 300°C peak)',
              'TXCO AF-120: Advanced aramid-NBR matrix for steam manifolds, process utilities, and pump casings (50-60 Bar, up to 400°C peak)',
              'TXCO AF-139: Premium Grade-X universal aramid-NBR for superheated steam headers and hydrocarbon transport (90-100 Bar, up to 400°C peak)',
              'TXCO AF-154: Ultra-high-performance Grade-X aramid-NBR for extreme thermal stress (150-160 Bar, up to 475°C peak)',
              'TXCO AF-155 GF: Quad-fiber blend (aramid, glass, mineral) in HNBR matrix for severe thermal service (150-160 Bar, 400-500°C, continuous steam up to 425°C)',
              'TXCO AF-159: Heavy-duty NBR matrix engineered for diesel engine blocks, hydraulic pumps, and fuel handling (150-160 Bar, up to 450°C peak)',
              'TXCO AF-160 Acid: Specialized acid- and chemical-resistant NBR binder for acid transfer and fertilizer plants (100 Bar, up to 300°C peak)',
              'TXCO AF-170: Ultra-high-performance carbon-graphite HNBR matrix for power boilers and superheated steam (160-200 Bar, up to 650°C peak)',
              'TXCO AF-190: Severe-service aramid-carbon-graphite HNBR matrix for high-impulse media lines and compressors (150-170 Bar, up to 500°C peak)',
            ],
          },
          {
            heading: 'AF SERIES TECHNICAL SPECIFICATIONS MATRIX',
            paragraphs: [
              'Full compliance with BS 7531 Grade-X and Grade-Y, and IS 17796 standards. Factory-applied anti-stick graphited release coatings prevent flange face pitting and accelerate plant turnaround overhauls.',
            ],
            table: {
              headers: ['GRADE', 'FIGURE', 'GASKET ARCHITECTURE', 'Max Operating Pressure', 'Max Continuous Temp', 'Specification Compliance'],
              rows: [
                {
                  code: 'TXCO AF-110',
                  figureType: 'af-110',
                  description: 'Synthetic Organic Fibers + Elastomeric Binder (Brown)',
                  thickness: '40 Bar (Non-Met) / 50 Bar (Metallic)',
                  reweld: '220°C (280-300°C peak)',
                  radial: 'BS 7531 Grade-Y / IS 17796 Grade-Y',
                },
                {
                  code: 'TXCO AF-120',
                  figureType: 'af-120',
                  description: 'High-Tensile Aramid Fibers + NBR Matrix (Green / Graphited Black)',
                  thickness: '50 Bar (GP) / 60 Bar (Metallic)',
                  reweld: '250°C (400°C peak)',
                  radial: 'BS 7531 Grade-Y / IS 17796 Grade-Y',
                },
                {
                  code: 'TXCO AF-139',
                  figureType: 'af-139',
                  description: 'High-Tensile Aramid + Inorganic Fibers + NBR (Orange / Black)',
                  thickness: '90 Bar (Non-Met) / 100 Bar (Metallic)',
                  reweld: '250°C (400°C peak)',
                  radial: 'BS 7531 Grade-X / IS 17796 Grade-X',
                },
                {
                  code: 'TXCO AF-154',
                  figureType: 'af-154',
                  description: 'Superior Heat-Resistant Aramid + High-Density NBR (Yellow / Black)',
                  thickness: '150 Bar (Non-Met) / 160 Bar (Metallic)',
                  reweld: '300°C (450-475°C peak)',
                  radial: 'BS 7531 Grade-X / IS 17796 Grade-X',
                },
                {
                  code: 'TXCO AF-155 GF',
                  figureType: 'af-155',
                  description: 'Quad-Fiber Blend (Aramid, Glass, Mineral) + HNBR (Purple / Black)',
                  thickness: '150 Bar (Non-Met) / 160 Bar (Metallic)',
                  reweld: '400-450°C (500°C peak)',
                  radial: 'BS 7531 Grade-X (Steam 375-425°C)',
                },
                {
                  code: 'TXCO AF-159',
                  figureType: 'af-159',
                  description: 'Heat-Resistant Aramid + Heavy-Duty NBR (Black / Graphited Black)',
                  thickness: '150 Bar (Non-Met) / 160 Bar (Metallic)',
                  reweld: '300°C (450°C peak)',
                  radial: 'BS 7531 Grade-X / IS 17796 Grade-X',
                },
                {
                  code: 'TXCO AF-160 Acid',
                  figureType: 'af-160',
                  description: 'Aramid Fibers + Chemical-Grade NBR Binder (Off-White)',
                  thickness: '100 Bar (10.0 MPa)',
                  reweld: '250°C (300°C peak)',
                  radial: 'BS 7531 Grade-X (Organic & Mineral Acids)',
                },
                {
                  code: 'TXCO AF-170',
                  figureType: 'af-170',
                  description: 'Aramid + Carbon + Mineral Fibers + Graphite + HNBR (Black)',
                  thickness: '160 Bar (Non-Met) / 200 Bar (Metallic)',
                  reweld: '425-525°C (600-650°C peak)',
                  radial: 'BS 7531 Grade-X (Steam 450-550°C)',
                },
                {
                  code: 'TXCO AF-190',
                  figureType: 'af-190',
                  description: 'Aramid + Carbon + Graphite + HNBR Matrix (Dark Grey / Black)',
                  thickness: '150 Bar (Non-Met) / 170 Bar (Metallic)',
                  reweld: '300°C (500°C peak)',
                  radial: 'BS 7531 Grade-X / IS 17796 Grade-X',
                },
              ],
              footnote: 'All AF-Series gaskets available in sheet thicknesses from 0.5 mm to 5.0 mm and pre-cut standard/custom dimensions.',
            },
          },
        ],
      },
      'non-asbestos-gaskets': {
        title: 'COMPRESSED FIBER GASKETS (STYLE SERIES)',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        downloadTitle: 'Compressed Fiber Gaskets Catalog',
        sections: [
          {
            heading: 'TXCO COMPRESSED FIBER JOINTING SHEETS & GASKETS (STYLE SERIES)',
            paragraphs: [
              'TXCO Compressed Fiber jointing sheets and gaskets are manufactured in strict compliance with IS 2712 and international standards for utility, steam, petrochemical, and acid containment.',
              'Formulated with high-density fiber matrices bound with elastomeric compounds and available in Non-Metallic and wire-mesh reinforced Metallic variants with factory anti-stick coatings.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
            bulletsIntro: 'Style Series Range & Service Duties:',
            bullets: [
              'TXCO Style 11: General-purpose utility jointing for water, low-pressure air, and drainage lines (25-30 Bar, 270-300°C, IS 2712 Grade C / W/3)',
              'TXCO Style 20: Medium-duty jointing for steam headers, water distribution, and gas mains (35-40 Bar, 380-415°C, IS 2712 Grade C / W/3)',
              'TXCO Style 39: High-duty petrochemical & refinery jointing for distillates and hydrocarbon transport (80-100 Bar, 440-480°C, IS 2712 Grade O/2)',
              'TXCO Style 51: High-pressure steam & thermal fluid jointing for catalytic cracking and boiler feed (80-100 Bar, 440-480°C, IS 2712 Grade W/2)',
              'TXCO Style 54 Super: Elite superheated steam jointing with minimum 18 mesh x 30 gauge wire insert (150-160 Bar, 550-600°C)',
              'TXCO Style 55: Extreme mechanical stability for high vibration, engines, and compressors (200-225 Bar, 600°C)',
              'TXCO Style 59 Oil: Premium oil & solvent resistant jointing for solvent extraction and heavy hydrocarbons (150-160 Bar, 550-600°C)',
              'TXCO Style 60 Acid: Specialized acid-resistant jointing for sulfuric, phosphoric, and nitric acid dosing lines (150 Bar, 210°C, IS 2712 Grade A/1)',
            ],
          },
          {
            heading: 'COMPRESSED FIBER STYLE SERIES SPECIFICATIONS',
            paragraphs: [
              'High compressibility profile ensures tight sealing under low bolt torque across cast iron, light-duty, or distorted flange faces.',
            ],
            table: {
              headers: ['STYLE CODE', 'FIGURE', 'CORE ARCHITECTURE', 'Max Operating Pressure', 'Max Continuous Temp', 'Specification Compliance'],
              rows: [
                {
                  code: 'TXCO Style 11',
                  figureType: 'style-11',
                  description: 'Chrysotile Asbestos Fibers + Elastomeric Binder (Graphited)',
                  thickness: '25 Bar (Non-Met) / 30 Bar (Metallic)',
                  reweld: '270°C (300°C peak)',
                  radial: 'IS 2712-1971 Grade C / IS 2712-1998 Grade W/3',
                },
                {
                  code: 'TXCO Style 20',
                  figureType: 'style-20',
                  description: 'Processed Fibers + Quality Elastomeric Binder (Red / Black)',
                  thickness: '35 Bar (Non-Met) / 40 Bar (Metallic)',
                  reweld: '380°C (415°C peak)',
                  radial: 'IS 2712-1971 Grade C / IS 2712-1998 Grade W/3',
                },
                {
                  code: 'TXCO Style 39',
                  figureType: 'style-39',
                  description: 'Select Fibers + Oil-Resistant Matrix (Orange / Grey / Black)',
                  thickness: '80 Bar (Non-Met) / 100 Bar (Metallic)',
                  reweld: '440°C (480°C peak)',
                  radial: 'IS 2712-1998 Grade O/2 (Hydrocarbons & Solvents)',
                },
                {
                  code: 'TXCO Style 51',
                  figureType: 'style-51',
                  description: 'Heat-Resistant Fibers + High-Grade Elastomer (Brown / Grey)',
                  thickness: '80 Bar (Non-Met) / 100 Bar (Metallic)',
                  reweld: '440°C (480°C peak)',
                  radial: 'IS 2712-1998 Grade W/2 (Superheated Steam)',
                },
                {
                  code: 'TXCO Style 54 Super',
                  figureType: 'style-54',
                  description: 'Heavy-Duty Wire Insertion (Min 18 mesh x 30 gauge wire) (Yellow / Black)',
                  thickness: '150 Bar (Non-Met) / 160 Bar (Metallic)',
                  reweld: '550°C (600°C peak)',
                  radial: 'High-Impulse Steam & Boilers',
                },
                {
                  code: 'TXCO Style 55',
                  figureType: 'style-55',
                  description: 'High-Density Matrix + Stainless Wire Mesh (Dark Grey / Black)',
                  thickness: '200 Bar (Non-Met) / 225 Bar (Metallic)',
                  reweld: '600°C (1112°F)',
                  radial: 'Engines, Compressors & Dynamic Vibration',
                },
                {
                  code: 'TXCO Style 59 Oil',
                  figureType: 'style-59',
                  description: 'High-Density Oil-Resistant Binders + Steel Gauze (Dark Grey)',
                  thickness: '150 Bar (Non-Met) / 160 Bar (Metallic)',
                  reweld: '550°C (600°C peak)',
                  radial: 'Petroleum Distillates & Heavy Hydrocarbons',
                },
                {
                  code: 'TXCO Style 60 Acid',
                  figureType: 'style-60',
                  description: 'Acid-Resistant Fibers + Inert Elastomeric Binder (Cream / Light Grey)',
                  thickness: '150 Bar (15.0 MPa)',
                  reweld: '210°C (410°F)',
                  radial: 'IS 2712-1971 Grade A/1 (Aggressive Acids)',
                },
              ],
              footnote: 'Sheet dimensions up to 2000 mm x 4500 mm available with standard and custom cut sizes.',
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
      { id: 'about-steel-inserted-gaskets', title: 'ABOUT STEEL-INSERTED GASKETS', downloadTitle: 'Steel-Inserted Gaskets Catalog' },
      { id: 'rubber-inserted', title: 'STEEL-INSERTED RUBBER GASKETS', downloadTitle: 'Rubber-Inserted Gaskets' },
      { id: 'graphite-inserted', title: 'STEEL-INSERTED GRAPHITE GASKETS', downloadTitle: 'Graphite-Inserted Gaskets' },
    ],
    productDetails: {
      'about-steel-inserted-gaskets': {
        title: 'STEEL-INSERTED GASKETS',
        image: '/images/product-detials-images/Gasketing-sheet-Planix-Megatherm.avif',
        downloadTitle: 'Steel-Inserted Gaskets Catalog',
        sections: [
          {
            heading: 'STEEL-INSERTED GASKETS OVERVIEW',
            paragraphs: [
              'Steel-Inserted Gaskets are reinforced composite sealing elements incorporating an internal metallic reinforcement core (perforated, tanged, or flat metal sheet) encapsulated within high-performance elastomeric or expanded graphite layers.',
              'The internal steel core imparts high rigidity, blow-out resistance, and dimensional stability under pressure and thermal cycling, while the soft outer layers conform to mating flange faces.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
            bulletsIntro: 'Available Steel-Inserted Configurations:',
            bullets: [
              'Steel-Inserted Rubber Gaskets (Lens-shaped elastomeric profile vulcanized over steel core for large-diameter pipelines)',
              'Steel-Inserted Graphite Gaskets (Pure expanded graphite mechanically bonded to 316SS tanged core for steam & thermal fluids)',
            ],
          },
        ],
      },
      'rubber-inserted': {
        title: 'STEEL INSERT - RUBBER GASKETS',
        image: '/images/product-detials-images/Gasketing-sheet-Planix-Megatherm.avif',
        downloadTitle: 'Rubber-Inserted Gaskets',
        sections: [
          {
            heading: 'STEEL INSERT - RUBBER GASKETS',
            paragraphs: [
              'Rubber Gaskets combine a lens-shaped elastomeric sealing body with an internal steel reinforcement ring, creating a robust composite sealing element for demanding flange applications.',
              'The rubber covering is firmly vulcanised to the steel insert, forming an integrated structure with high mechanical stability.',
              'The steel insert improves blow-out resistance and dimensional stability under pressure.',
              'The lens-shaped profile concentrates contact pressure at the sealing area, enhancing sealing performance.',
              'The elastomer provides flexibility and surface conformity, helping accommodate minor flange irregularities.',
              'The composite construction is suitable for applications requiring reliable sealing, mechanical strength and resistance to pressure loading. Rubber compound and steel grade can be selected according to the process medium, pressure, temperature and service environment.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },
      'graphite-inserted': {
        title: 'STEEL INSERT - GRAPHITE GASKETS',
        image: '/images/product-detials-images/Graphite-Gasketing-Sheet.avif',
        downloadTitle: 'Graphite-Inserted Gaskets',
        sections: [
          {
            heading: 'STEEL INSERT - GRAPHITE GASKETS',
            paragraphs: [
              'Steel Insert Graphite Gaskets combine expanded flexible graphite with a metallic reinforcement core, providing a robust sealing element for demanding flange applications. The steel insert improves mechanical strength, rigidity and resistance to blowout, while the graphite conforms to mating surfaces to create an effective seal.',
              'Expanded graphite conforms to mating surfaces and provides excellent sealing, thermal stability and chemical resistance.',
              'The steel insert improves rigidity, dimensional stability and resistance to blowout during pressure and temperature cycling.',
              'Suitable for high-pressure, high-temperature and thermal cycling applications. Offers excellent resistance to steam, hot water, gases and many process fluids.',
              'Free from resins, impregnations, organic binders and fibre fillers.',
              'Suitable for oil & gas, petrochemical, refining, chemical and power industries, where dependable sealing and long service life are required.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },
    },
  },

  // ==========================================
  // PLUG GASKETS (Direct Category)
  // ==========================================
  'plug-gaskets': {
    parentCategoryTitle: 'PRODUCTS',
    parentCategoryHref: '/products',
    subcategoryTitle: 'Plug Gaskets',
    productsList: [
      { id: 'plug-gaskets', title: 'PLUG GASKETS', downloadTitle: 'Plug Gaskets Catalog' },
    ],
    productDetails: {
      'plug-gaskets': {
        title: 'PLUG GASKETS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        downloadTitle: 'Plug Gaskets Catalog',
        sections: [
          {
            heading: 'INDUSTRIAL EQUIPMENT & PIPING PLUG GASKETS',
            paragraphs: [
              'Plug Gaskets are sealing elements designed to provide a reliable seal between a plug and its mating surface, preventing leakage of fluids or gases in industrial equipment and piping systems.',
              'Provide secure sealing under varying pressure and temperature conditions.',
              'Available in suitable metallic and non-metallic materials based on the application. Material selection can be matched to process media, chemical exposure and operating conditions.',
              'Designed for simple installation and replacement, helping reduce maintenance downtime.',
              'Suitable for applications requiring reliable containment and resistance to pressure fluctuations, temperature changes and corrosive environments.',
              'Commonly used across oil & gas, petrochemical, chemical, refining and general process industries.',
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
      { id: 'about-flanges', title: 'ABOUT FLANGES', downloadTitle: 'Flanges Catalog' },
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
      'about-flanges': {
        title: 'TXCO INDUSTRIAL FLANGES',
        image: '/images/product-detials-images/flanges-1.avif',
        downloadTitle: 'Flanges Catalog',
        sections: [
          {
            heading: 'TXCO INDUSTRIAL FLANGES',
            paragraphs: [
              'Precision-engineered flange solutions for demanding industrial applications.',
              'TXCO Sealing Products Private Limited is a manufacturer of industrial sealing products and precision-engineered components serving the oil & gas, petrochemical, refining, chemical, power and process industries.',
              'TXCO manufactures and supplies industrial flanges in stainless steel, duplex, super duplex and nickel-based and special alloys, in accordance with applicable international standards, approved drawings and customer or project specifications.',
              'TXCO operates under certified quality management systems and is committed to manufacturing in accordance with applicable ASME and API requirements. Our quality systems, manufacturing controls and inspection processes are aligned with the requirements of the relevant product and project specifications.',
              'Our flange manufacturing focuses on dimensional accuracy, material integrity, controlled machining, traceability and dependable sealing performance. Our experience in industrial gaskets also gives us a practical understanding of the flange, gasket and bolting interface.',
              'PRECISION ENGINEERED. STANDARDS DRIVEN. QUALITY CONTROLLED.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
          {
            heading: 'WHAT IS A FLANGE?',
            paragraphs: [
              'A flange is a mechanical component used to create a bolted, detachable connection between piping and equipment such as pipes, valves, pumps, pressure vessels, heat exchangers and other process equipment.',
              'A typical flanged joint consists of a flange, gasket, bolting and mating flange. The flanges provide the mechanical connection and transmit the required bolt load, while the gasket is compressed between the mating faces to create a pressure-tight seal.',
              'Reliable flange performance depends on material, dimensions, pressure class, facing, surface finish, bore and bolt-hole accuracy, RTJ groove geometry where applicable, gasket compatibility and operating conditions.',
            ],
          },
          {
            heading: 'FLANGE FACING TYPES',
            table: {
              headers: ['FACING TYPE', 'DESCRIPTION', 'APPLICATIONS'],
              rows: [
                {
                  code: 'Raised Face (RF)',
                  figureType: 'flange-wn-std',
                  description: 'Raised surface area concentrated on gasket contact; smooth or serrated finish.',
                  thickness: 'General industrial, process and chemical piping',
                  reweld: 'ASME B16.5 / B16.47',
                  radial: 'Smooth or spiral/concentric serrated finish',
                },
                {
                  code: 'Flat Face (FF)',
                  figureType: 'flange-wn-large',
                  description: 'Full flat mating surface across entire flange face, used with full-face gaskets.',
                  thickness: 'Cast-iron equipment, FRP and low-pressure systems',
                  reweld: 'ASME B16.5',
                  radial: 'Prevents flange cracking under bolting load',
                },
                {
                  code: 'Ring Type Joint (RTJ)',
                  figureType: 'flange-wn-api',
                  description: 'Machined metallic groove for metallic RTJ ring gaskets (R, RX, BX).',
                  thickness: 'High-pressure, high-temperature and subsea pipelines',
                  reweld: 'ASME B16.5 / API 6A',
                  radial: 'Class 300 to 2500 & API up to 20,000 psi',
                },
              ],
              footnote: 'Supplied in full compliance with ASME B16.5, ASME B16.47, and API 6A specifications.',
            },
          },
          {
            heading: 'STANDARDS WE FOLLOW',
            table: {
              headers: ['STANDARD CODE', 'ORGANIZATION / GOVERNING BODY', 'SCOPE & COVERAGE'],
              rows: [
                { code: 'ASME B16.5', figureType: 'flange-wn-std', description: 'American Society of Mechanical Engineers', thickness: 'Pipe Flanges and Flanged Fittings: NPS 1/2 through NPS 24 Metric/Inch Standard', reweld: 'Class 150 - 2500', radial: 'Global oil & gas standard' },
                { code: 'ASME B16.47', figureType: 'flange-wn-large', description: 'American Society of Mechanical Engineers', thickness: 'Large Diameter Steel Flanges: NPS 26 through NPS 60 (Series A and Series B)', reweld: 'Class 75 - 900', radial: 'Pipelines and pressure vessels' },
                { code: 'ASME B16.48', figureType: 'spec-fig8', description: 'American Society of Mechanical Engineers', thickness: 'Line Blanks (Spectacle Blinds, Spades, and Spacers)', reweld: 'Class 150 - 2500', radial: 'Piping positive isolation' },
                { code: 'API 6A', figureType: 'flange-wn-api', description: 'American Petroleum Institute', thickness: 'Wellhead and Christmas Tree Equipment Flanges', reweld: '2,000 to 20,000 psi', radial: 'Upstream oil & gas and subsea' },
                { code: 'MSS SP-44', figureType: 'flange-wn-std', description: 'Manufacturers Standardization Society', thickness: 'Steel Pipeline Flanges', reweld: 'Class 150 - 900', radial: 'Cross-country transmission pipelines' },
                { code: 'EN Standards', figureType: 'flange-wn-std', description: 'European Standards (EN 1092-1)', thickness: 'Flanges and their joints - Circular flanges for pipes, valves, fittings', reweld: 'PN 2.5 to PN 400', radial: 'European industrial piping' },
                { code: 'DIN Standards', figureType: 'flange-wn-std', description: 'Deutsches Institut für Normung', thickness: 'German industrial flange standards (DIN 2631 to DIN 2638)', reweld: 'PN 6 to PN 400', radial: 'Process and chemical plants' },
                { code: 'JIS Standards', figureType: 'flange-wn-std', description: 'Japanese Industrial Standards', thickness: 'Steel pipe flanges (JIS B2220)', reweld: '5K to 63K', radial: 'Japanese & Asian equipment' },
                { code: 'BS Standards', figureType: 'flange-wn-std', description: 'British Standards Institution', thickness: 'Flanges and bolting for pipes, valves, and fittings (BS 4504, BS 10)', reweld: 'Table D - T / PN ratings', radial: 'UK and Commonwealth systems' },
              ],
              footnote: 'Flanges can also be manufactured according to other international standards and customer drawings.',
            },
          },
          {
            heading: 'FLANGE MATERIALS',
            table: {
              headers: ['MATERIAL GROUP', 'TYPICAL GRADES & SPECIFICATIONS', 'COMMON SERVICE APPLICATIONS'],
              rows: [
                { code: 'Austenitic Stainless Steel', figureType: 'mat-ss316', description: 'ASTM A182 F304/304L, F316/316L, F321, F347', thickness: 'Corrosion resistance across general chemical, food, pharmaceutical and cryogenic service', reweld: 'Cryogenic to +600°C', radial: 'Broad chemical compatibility' },
                { code: 'High-Temperature Stainless', figureType: 'mat-ss316', description: 'ASTM A182 F310, F321H, F347H', thickness: 'Elevated-temperature petrochemical, refining, furnace and thermal fluid applications', reweld: 'Up to +800°C', radial: 'High creep and oxidation resistance' },
                { code: 'Duplex Stainless Steel', figureType: 'mat-duplex', description: 'ASTM A182 F51 / UNS S31803 / S32205 (2205)', thickness: 'High mechanical strength with resistance to stress corrosion cracking and pitting in chloride environments', reweld: '-50°C to +300°C', radial: 'Offshore, marine and chemical' },
                { code: 'Super Duplex Stainless', figureType: 'mat-sduplex', description: 'ASTM A182 F53 / UNS S32750 (2507), F55 / UNS S32760', thickness: 'Severe offshore, subsea, marine and high-chloride services requiring PREN ≥ 42', reweld: '-50°C to +300°C', radial: 'High chloride and sour service' },
                { code: 'Nickel Alloys', figureType: 'mat-inconel', description: 'Inconel 600, 625, 718 / UNS N06600, N06625, N07718', thickness: 'Demanding chemical, offshore, high-temperature, sour gas and severe-service applications', reweld: '-196°C to +980°C', radial: 'Severe sour gas H2S and hot acids' },
                { code: 'Nickel-Iron-Chromium', figureType: 'mat-incoloy', description: 'Incoloy 800, 825 / UNS N08800, N08825', thickness: 'High-temperature, oxidation, carburization and acid-corrosion environments', reweld: '-196°C to +540°C', radial: 'Sulfuric and phosphoric acids' },
                { code: 'Nickel-Copper Alloys', figureType: 'rtj-material', description: 'Monel 400, K-500 / UNS N04400, N05500', thickness: 'Marine environments, seawater systems, chemical processing and hydrofluoric acid service', reweld: '-196°C to +480°C', radial: 'Hydrofluoric acid and marine' },
                { code: 'Special Alloys', figureType: 'mat-hastelloy', description: 'Hastelloy C-276, Alloy 20, Titanium Gr. 2 / UNS N10276, N08020, R50400', thickness: 'Severe chemical, oxidizing acids, bleaching, wet chlorine and aggressive process conditions', reweld: 'Application specific', radial: 'Severe acids and wet chlorine' },
              ],
              footnote: 'Materials supplied with full traceability, Positive Material Identification (PMI), and EN 10204 3.1 Mill Test Certificates.',
            },
          },
        ],
      },
      'weld-neck-flanges': {
        title: 'WELD NECK FLANGES',
        image: '/images/product-detials-images/flanges-1.avif',
        downloadTitle: 'Weld Neck Flanges Catalog',
        sections: [
          {
            heading: 'WELD NECK FLANGES — HIGH-INTEGRITY FLANGES FOR CRITICAL SERVICE',
            paragraphs: [
              'Weld Neck Flanges have a long, tapered hub and are connected to the pipe by butt welding. The tapered hub provides a gradual transition between the flange and pipe and helps distribute stresses at the flange-to-pipe connection.',
              'The bore can be matched to the pipe bore to maintain a smooth flow path and reduce turbulence and localized erosion.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
            bulletsIntro: 'Typical Applications:',
            bullets: [
              'Oil & gas',
              'Refineries and petrochemical plants',
              'Chemical processing',
              'Power generation',
              'Pressure vessels and heat exchangers',
              'High-pressure and high-temperature piping',
            ],
          },
        ],
      },

      'slip-on-flanges': {
        title: 'SLIP-ON FLANGES',
        image: '/images/product-detials-images/flanges-2.avif',
        downloadTitle: 'Slip-On Flanges Catalog',
        sections: [
          {
            heading: 'SLIP-ON FLANGES — PRACTICAL FLANGE CONNECTIONS FOR INDUSTRIAL PIPING',
            paragraphs: [
              'Slip-On Flanges fit over the outside diameter of the pipe and are normally welded internally and externally. They offer a practical and economical connection where the service conditions permit their use. They are commonly selected for general industrial and utility piping.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
            bulletsIntro: 'Typical Applications:',
            bullets: [
              'Process piping',
              'Utility systems',
              'General industrial piping',
              'Equipment connections',
              'Water and utility services',
            ],
          },
        ],
      },

      'blind-flanges': {
        title: 'BLIND FLANGES',
        image: '/images/product-detials-images/flanges-product-detials-place-holder-img.png',
        downloadTitle: 'Blind Flanges Catalog',
        sections: [
          {
            heading: 'BLIND FLANGES — POSITIVE CLOSURE AND MECHANICAL ISOLATION',
            paragraphs: [
              'A Blind Flange is a solid flange with bolt holes but no central bore. It is used to close the end of a piping system, valve, pressure vessel or equipment nozzle. Blind flanges provide positive isolation and allow a connection to be reopened for inspection, maintenance, testing or future expansion.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
            bulletsIntro: 'Typical Applications:',
            bullets: [
              'Pipeline isolation',
              'Pressure vessel nozzles',
              'Equipment connections',
              'Hydrostatic testing',
              'Maintenance and shutdowns',
              'Pipeline termination',
            ],
          },
        ],
      },

      'socket-weld-flanges': {
        title: 'SOCKET WELD FLANGES',
        image: '/images/product-detials-images/flanges-product-detials-place-holder-img.png',
        downloadTitle: 'Socket Weld Flanges Catalog',
        sections: [
          {
            heading: 'SOCKET WELD FLANGES — COMPACT FLANGES FOR SMALL-BORE PIPING',
            paragraphs: [
              'Socket Weld Flanges have a machined socket into which the pipe is inserted before welding. They are primarily used for smaller-diameter piping and are suitable for selected high-pressure applications within the applicable design rating.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
            bulletsIntro: 'Typical Applications:',
            bullets: [
              'Small-bore piping',
              'High-pressure piping',
              'Instrumentation systems',
              'Chemical processing',
              'Hydraulic systems',
              'Process piping',
            ],
          },
        ],
      },

      'lap-joint-flanges': {
        title: 'LAP JOINT FLANGES',
        image: '/images/product-detials-images/flanges-product-detials-place-holder-img.png',
        downloadTitle: 'Lap Joint Flanges Catalog',
        sections: [
          {
            heading: 'LAP JOINT FLANGES — FLEXIBLE ALIGNMENT FOR MAINTENANCE-INTENSIVE SYSTEMS',
            paragraphs: [
              'Lap Joint Flanges are used with a compatible Stub End. The pipe is welded to the stub end while the flange remains free to rotate around it, allowing convenient bolt-hole alignment during assembly. This configuration is useful where frequent dismantling or maintenance is required.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
            bulletsIntro: 'Typical Applications:',
            bullets: [
              'Chemical processing',
              'Corrosive services',
              'Stainless-steel piping',
              'Duplex and special-alloy piping',
              'Process plants',
              'Maintenance-intensive systems',
            ],
          },
        ],
      },

      'threaded-screwed-flanges': {
        title: 'THREADED (SCREWED) FLANGES',
        image: '/images/product-detials-images/flanges-product-detials-place-holder-img.png',
        downloadTitle: 'Threaded Flanges Catalog',
        sections: [
          {
            heading: 'THREADED (SCREWED) FLANGES — FLANGED CONNECTIONS WITHOUT WELDING',
            paragraphs: [
              'Threaded Flanges, also known as Screwed Flanges, have internal threads that engage with the external threads of the pipe. They can be installed without flange-to-pipe welding and are used for selected applications where welding is impractical, undesirable or restricted. They are generally considered for selected low-pressure or utility services, subject to design requirements.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
            bulletsIntro: 'Typical Applications:',
            bullets: [
              'Utility systems',
              'Instrumentation',
              'Small-diameter piping',
              'Selected process applications',
              'Applications where welding is restricted',
            ],
          },
        ],
      },

      'orifice-flanges': {
        title: 'ORIFICE FLANGES',
        image: '/images/product-detials-images/flanges-product-detials-place-holder-img.png',
        downloadTitle: 'Orifice Flanges Catalog',
        sections: [
          {
            heading: 'ORIFICE FLANGES — PRECISION FLANGES FOR FLOW MEASUREMENT',
            paragraphs: [
              'Orifice Flanges are specialized flange assemblies used in differential-pressure flow measurement. They incorporate provisions for pressure tapping on either side of an orifice plate. The pressure differential across the orifice is used to determine the process-fluid flow rate.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
            bulletsIntro: 'Typical Applications:',
            bullets: [
              'Oil & gas',
              'Refineries',
              'Petrochemical plants',
              'Chemical processing',
              'Process plants',
              'Flow measurement systems',
            ],
          },
        ],
      },

      'custom-flanges': {
        title: 'CUSTOM FLANGES',
        image: '/images/product-detials-images/flanges-product-detials-place-holder-img.png',
        downloadTitle: 'Custom Flanges Catalog',
        sections: [
          {
            heading: 'ENGINEERED & CUSTOM FLANGES',
            paragraphs: [
              'TXCO manufactures custom-made flanges to customer drawings and project-specific requirements where standard configurations do not meet the application.',
              'Custom flange solutions can be developed for special dimensions, bore configurations, bolt patterns, thicknesses, facings, RTJ grooves, reducing arrangements, internal bevels and specified stainless, duplex, super duplex or nickel-based alloys.',
              'Each custom requirement is reviewed against the approved drawing, applicable ASME/API or other governing standard, material specification and inspection requirements before manufacture.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },
    },
  },

  // ==========================================
  // ==========================================
  // MONOLITHIC INSULATION JOINTS (Direct Category)
  // ==========================================
  'monolithic-insulation-joints': {
    parentCategoryTitle: 'PRODUCTS',
    parentCategoryHref: '/products',
    subcategoryTitle: 'Monolithic Insulation Joints',
    productsList: [
      { id: 'monolithic-insulation-joints', title: 'MONOLITHIC INSULATION JOINTS', downloadTitle: 'Monolithic Joints Catalog' },
    ],
    productDetails: {
      'monolithic-insulation-joints': {
        title: 'MONOLITHIC INSULATION JOINTS',
        image: '/images/product-detials-images/flanges-product-detials-place-holder-img.png',
        downloadTitle: 'Monolithic Insulation Joints Catalog',
        sections: [
          {
            heading: 'MONOLITHIC INSULATION JOINTS',
            paragraphs: [
              'Monolithic Insulation Joints are pre-fabricated, fully welded, boltless isolating fittings designed to provide electrical isolation between sections of buried, aboveground and submerged pipelines. They prevent the flow of unwanted electrical currents and protect cathodic protection (CP) systems from interference and current loss.',
              'At TXCO Sealing Products Private Limited, monolithic insulation joints are manufactured and tested in accordance with international pipeline standards to ensure dielectric integrity, pressure containment and mechanical strength.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
          {
            heading: 'KEY FEATURES',
            bullets: [
              'Pre-assembled, factory-tested and ready for direct welding into the pipeline.',
              'Provides reliable electrical isolation to maintain cathodic protection efficiency.',
              'High mechanical strength to withstand external bending moments, axial loads and internal pressures.',
              'Eliminates the need for ongoing maintenance, bolt tightening or field insulation kits.',
              'Available in sizes from 1/2" up to 60" and pressure ratings from Class 150 to Class 2500.',
              'Suitable for oil, gas, water, petrochemical and offshore pipeline systems.',
            ],
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
      { id: 'about-valve-components', title: 'ABOUT VALVE COMPONENTS', downloadTitle: 'Valve Components Catalog' },
      { id: 'precision-o-rings', title: 'PRECISION O-RINGS', downloadTitle: 'Precision O-Rings Catalog' },
      { id: 'valve-packing', title: 'LOW-EMISSION GLAND PACKING', downloadTitle: 'Gland Packing Catalog' },
      { id: 'valve-seats-inserts', title: 'VALVE SEATS & INSERTS', downloadTitle: 'Valve Seats Catalog' },
    ],
    productDetails: {
      'about-valve-components': {
        title: 'VALVE COMPONENTS',
        image: '/images/product-detials-images/Ball-for-Ball-Valve.avif',
        downloadTitle: 'Valve Components Catalog',
        sections: [
          {
            heading: 'VALVE COMPONENTS',
            paragraphs: [
              'Valve components are engineered internal and body parts designed to control, direct and regulate the flow of fluids within piping and process systems. They are manufactured to maintain dimensional accuracy, pressure containment and reliable operation across a wide range of industrial applications.',
              'At TXCO Sealing Products Private Limited, valve components are manufactured from quality materials selected to withstand operating pressure, temperature fluctuations, mechanical wear and corrosive service environments.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
          {
            heading: 'TYPES OF VALVE COMPONENTS',
            bullets: [
              'Precision O-Rings: Precision-moulded elastomeric sealing rings providing reliable static and dynamic sealing in valve stems, bodies and actuators.',
              'Low-Emission Gland Packing: Engineered braided packing sets designed to minimize fugitive VOC emissions and provide reliable stem sealing in high-pressure and high-temperature valves.',
              'Valve Seats & Inserts: Precision-machined thermoplastic and metallic valve seats ensuring bubble-tight shut-off and wear resistance in ball, gate and globe valves.',
            ],
          },
        ],
      },
      'precision-o-rings': {
        title: 'PRECISION O-RINGS',
        image: '/images/product-detials-images/O-Ring-for-Ball-Valve.avif',
        downloadTitle: 'Precision O-Rings Catalog',
        sections: [
          {
            heading: 'PRECISION O-RINGS',
            paragraphs: [
              'Precision-moulded elastomeric sealing rings providing reliable static and dynamic sealing in valve stems, bodies and actuators.',
              'TXCO precision O-rings are engineered to withstand extreme pressures and prevent rapid gas decompression in harsh operating environments.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },
      'valve-packing': {
        title: 'LOW-EMISSION GLAND PACKING',
        image: '/images/product-detials-images/Ball-for-Ball-Valve.avif',
        downloadTitle: 'Gland Packing Catalog',
        sections: [
          {
            heading: 'LOW-EMISSION GLAND PACKING',
            paragraphs: [
              'Engineered braided packing sets designed to minimize fugitive VOC emissions and provide reliable stem sealing in high-pressure and high-temperature valves.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },
      'valve-seats-inserts': {
        title: 'VALVE SEATS & INSERTS',
        image: '/images/product-detials-images/Seat-Insert-for-Ball-Valve.avif',
        downloadTitle: 'Valve Seats Catalog',
        sections: [
          {
            heading: 'VALVE SEATS & INSERTS',
            paragraphs: [
              'Precision-machined thermoplastic and metallic valve seats ensuring bubble-tight shut-off and wear resistance in ball, gate and globe valves.',
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
      { id: 'commercial-products-item', title: 'COMMERCIAL PRODUCTS', downloadTitle: 'Commercial Products Catalog' },
    ],
    productDetails: {
      'commercial-products-item': {
        title: 'COMMERCIAL PRODUCTS',
        image: '/images/product-detials-images/Expanding-Gates-and-Through-Conduit-Gates.avif',
        downloadTitle: 'Commercial Products Catalog',
        sections: [
          {
            heading: 'COMMERCIAL SUPPLY & INDUSTRIAL BOLTING',
            paragraphs: [
              'TXCO supplies standardized commercial pipeline hardware, heavy hex stud bolts, nuts, and pipeline accessories compliant with ASTM A193, ASTM A194, and international fastener specifications.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },
    },
  },
};
