/**
 * Comprehensive Product Details Catalog
 * Provides verbatim data matching TXCO Industrial Flanges Website Content Revised PDF
 */

export const subcategoryDetailCatalog = {
  // ==========================================
  // 1. GASKETS -> Metallic Gaskets (Pages 4–14)
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
        bannerImage: '/images/product-detials-images/Ring-Type-Joint-(RTJ)-Gaskets-banner-image.avif',
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
              headers: ['MATERIAL', 'UNS NO.', 'MAX. BRINELL HARDNESS', 'MAX. ROCKWELL HARDNESS', 'DESCRIPTION'],
              rows: [
                { code: 'Soft Iron', description: '—', thickness: '90', reweld: '56', radial: 'D' },
                { code: 'Low Carbon Steel', description: '—', thickness: '120', reweld: '68', radial: 'S' },
                { code: '4-6% Chrome 1/2% Moly', description: 'K42544', thickness: '130', reweld: '75', radial: 'F5' },
                { code: 'Type 304 Stainless Steel', description: 'S30400', thickness: '160', reweld: '83', radial: 'S304' },
                { code: 'Type 316 Stainless Steel', description: 'S31600', thickness: '160', reweld: '83', radial: 'S316' },
                { code: 'Type 347 Stainless Steel', description: 'S34700', thickness: '160', reweld: '83', radial: 'S347' },
                { code: 'Type 410 Stainless Steel', description: 'S41000', thickness: '170', reweld: '86', radial: 'S410' },
                { code: 'Titanium Grade 2', description: 'R50400', thickness: '215', reweld: '94', radial: 'Ti Gr.2' },
                { code: 'Alloy 600', description: 'N06600', thickness: '200', reweld: '92', radial: 'Inconel 600' },
                { code: 'Alloy 625', description: 'N06625', thickness: '200', reweld: '92', radial: 'Inconel 625' },
                { code: 'Alloy 800', description: 'N08800', thickness: '200', reweld: '92', radial: 'Incoloy 800' },
                { code: 'Alloy 825', description: 'N08825', thickness: '200', reweld: '92', radial: 'Incoloy 825' },
                { code: 'Hastelloy', description: 'N10001', thickness: '200', reweld: '—', radial: 'Hastelloy B' },
                { code: 'Alloy C276', description: 'N10276', thickness: '200', reweld: '92', radial: 'Hastelloy C276' },
                { code: 'SMO 254', description: 'S32154', thickness: '180', reweld: '89', radial: '254 SMO' },
                { code: 'Zeron 100', description: '—', thickness: '200', reweld: '—', radial: 'Super Duplex Zeron' },
                { code: 'Super Duplex', description: 'S31803', thickness: '200', reweld: '92', radial: 'Duplex 2205' },
                { code: '321 Stainless Steel', description: '—', thickness: '160', reweld: '83', radial: 'S321' },
                { code: 'MONEL 400', description: '—', thickness: '130', reweld: '72', radial: 'Monel 400' },
                { code: '309 Stainless Steel', description: '—', thickness: '160', reweld: '83', radial: 'S309' },
                { code: 'Alloy 20', description: '—', thickness: '160', reweld: '83', radial: 'Carpenter 20' },
              ],
              footnote: 'Other exotic materials available on request.',
            },
          },
        ],
      },

      'ring-type-joint-rtj': {
        title: 'RING TYPE JOINT (RTJ) GASKETS',
        image: '/images/product-detials-images/Ring-Type-Joint-RT-J.avif',
        bannerImage: '/images/product-detials-images/Ring-Type-Joint-(RTJ)-Gaskets-banner-image.avif',
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
              'Oval-shaped cross-section: Designed for line-contact sealing.',
              'Suitable for compatible: Oval and octagonal RTJ grooves.',
              'Commonly used in legacy: Equipment and low-to-medium pressure applications.',
              'Provides reliable sealing: For conventional flange connections.',
              'Suitable for a wide range: Of industrial services where standard RTJ sealing is required.',
            ],
          },
          {
            heading: 'TYPE R – OCTAGONAL',
            bullets: [
              'Features an octagonal cross-section: For concentrated point-contact sealing.',
              'Designed specifically for: Octagonal RTJ grooves.',
              'Provides improved sealing performance: Compared with the oval profile.',
              'Widely used in oil & gas: Petrochemical, refining and industrial applications.',
              'Suitable for demanding pressure: And temperature conditions.',
            ],
          },
          {
            heading: 'TYPE RX',
            bullets: [
              'Features a modified octagonal cross-section: With pressure-energized sealing.',
              'Internal pressure increases: The sealing force against the groove walls.',
              'Designed for compatible API 6A: And ASME flange connections.',
              'Commonly used in high-pressure valves: Wellheads and pressure vessels.',
              'Suitable for critical services involving: Pressure and temperature fluctuations.',
              'Must be matched with correct groove: Dimensions and is not interchangeable with BX.',
            ],
          },
          {
            heading: 'TYPE BX',
            bullets: [
              'High-pressure, pressure-energized RTJ: Gasket designed for extreme service conditions.',
              'Incorporates a pressure-equalizing hole: To support uniform pressure distribution.',
              'Designed exclusively for compatible: API 6A BX flanges.',
              'Suitable for pressures up to: 20,000 psi, depending on material and application.',
              'Commonly used in wellheads: Christmas trees, subsea systems and high-pressure manifolds.',
              'Requires proper alignment: Groove condition and surface finish for reliable sealing.',
            ],
          },
        ],
      },

      'rubber-coated-rtj': {
        title: 'RUBBER-COATED RING TYPE JOINTS',
        image: '/images/products/rubber-coated-rtj-gaskets.png',
        bannerImage: '/images/product-detials-images/Ring-Type-Joint-(RTJ)-Gaskets-banner-image.avif',
        downloadTitle: 'Rubber-Coated RTJ Catalog',
        sections: [
          {
            heading: 'RUBBER-COATED RING TYPE JOINTS',
            bullets: [
              'Rubber-Coated Ring Type Joints consist A metallic RTJ core encapsulated in a nitrile rubber (NBR) coating, with the core typically manufactured from soft iron or low-carbon steel.',
              'Designed primarily for pressure testing applications, Where protection of the flange sealing faces and RTJ grooves is important.',
              'The resilient rubber coating provides Additional contact with the mating surfaces, supporting enhanced sealing during pressure testing.',
              'The coating helps minimize mechanical damage, Surface marking and wear on flange faces during assembly and testing.',
              'By isolating the metallic core From direct metal-to-metal contact with the groove surfaces, the coating also helps reduce the potential for surface corrosion and damage.',
              'Available in standard RTJ sizes, Custom dimensions and configurations available to suit specific flange and testing requirements.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'ptfe-insert-rtj': {
        title: 'PTFE-INSERT RING TYPE JOINT GASKETS',
        image: '/images/products/ptfe-insert-rtj-gaskets.png',
        bannerImage: '/images/product-detials-images/PTFE-Insert-RTJ-Gaskets-banner-image.avif',
        downloadTitle: 'PTFE-Insert RTJ Catalog',
        sections: [
          {
            heading: 'PTFE-INSERT RING TYPE JOINT GASKETS',
            bullets: [
              'R and RX Ring Type Joint Gaskets can be supplied with PTFE inserts to reduce turbulence within the flow path and minimize erosion of the gasket and flange bore surfaces.',
              'The PTFE insert forms : A protective barrier between the process medium and the exposed internal surfaces of the gasket and flange, helping reduce erosion, wear and flow-induced damage.',
              'For RX-type RTJ gaskets, The PTFE insert incorporates strategically positioned radial pressure-passage holes. These allow system pressure to reach the sealing surfaces and preserve the self-energizing characteristics of the RX profile.',
              'The insert is located between The inner diameter of the RTJ gasket and the flange bore, occupying the annular gap between the gasket and flange bore.',
              'During flange assembly, The PTFE insert is securely retained between the mating flange faces, maintaining its position under operating conditions.',
              'The design provides a combination Metallic sealing strength and PTFE chemical resistance, making it suitable for demanding process environments.',
              'PTFE insert configurations can be Selected based on gasket profile, flange geometry, operating pressure, temperature and process medium.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'protective-coated-rtj': {
        title: 'PROTECTIVE COATINGS',
        image: '/images/products/protective-coated-rtj-gaskets.png',
        bannerImage: '/images/product-detials-images/Protective-Coated-RTJ-Gaskets-banner-image.avif',
        downloadTitle: 'Protective-Coated RTJ Catalog',
        sections: [
          {
            heading: 'PROTECTIVE COATINGS',
            bullets: [
              'Protective coatings are applied to Metallic Ring Type Joint Gaskets to enhance surface protection and improve suitability for specific service conditions.',
              'As specified by applicable API requirements, RTJ gaskets manufactured from soft iron and low-carbon steel can be electroplated with zinc coating up to a maximum thickness of 13 μm.',
              'TXCO Sealing Products Private Limited The capability to provide Zinc, Nickel and Silver electroplated coatings for RTJ gaskets.',
              'Zinc coating provides protection against Surface oxidation and corrosion, while Nickel and Silver coatings can be selected for specific service, compatibility and sealing requirements.',
              'Coating selection: Thickness Can be provided in accordance with customer specifications, applicable standards and operating conditions.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'bonnet-rings': {
        title: 'BONNET GASKETS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        bannerImage: '/images/product-detials-images/RX_BX_Pressure_Energized_RTJ_Gaskets_Banner-image.avif',
        downloadTitle: 'Bonnet Rings Catalog',
        sections: [
          {
            heading: 'BONNET GASKETS',
            bullets: [
              'Bonnet Gaskets are sealing components Installed between the valve body and bonnet, providing a reliable pressure boundary and preventing leakage of fluids or gases.',
              'They are designed to maintain Sealing integrity under pressure, temperature and process-fluid conditions encountered in industrial valve applications.',
              'Bonnet gaskets are commonly used: Gate valves and other pressure-containing valve assemblies, particularly in oil & gas, petrochemical, refining and power industries.',
              'Depending on the valve design and service conditions, Bonnet gaskets may be supplied in RTJ and other metallic sealing configurations.',
              'Material selection is based: Operating temperature, pressure, corrosion environment and process-fluid compatibility.',
              'Common materials include: Carbon steel, stainless steel 304/316 and other alloy grades, subject to application requirements.',
              'Proper control of gasket dimensions, Hardness, surface finish and bonnet-groove compatibility is essential for reliable sealing performance.',
              'Bonnet gaskets support equipment: Integrity, leak prevention and safe operation in critical valve services.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'lens-rings': {
        title: 'LENS GASKETS',
        image: '/images/products/lens-rings-din-2696.png',
        bannerImage: '/images/product-detials-images/Lens-Rings-banner-image.avif',
        downloadTitle: 'Lens Rings Catalog',
        sections: [
          {
            heading: 'LENS GASKETS',
            bullets: [
              'Lens Gaskets are metallic sealing elements designed for flanged connections with spherical sealing geometries.',
              'Unlike conventional flat gaskets, The lens profile has a convex sealing surface that mates with the corresponding concave flange seat, creating a concentrated metal-to-metal seal.',
              'The spherical geometry allows: Controlled deformation under bolt load, producing a narrow, high-integrity sealing contact.',
              'This design provides reliable sealing Under high pressure, elevated temperatures and severe thermal cycling.',
              'Lens Gaskets are primarily specified Accordance with DIN 2696, with dimensions and configurations adaptable to other flange standards where required.',
              'The gasket material is selected Appropriate hardness relative to the flange material, allowing deformation to occur preferentially in the gasket and minimizing damage to the flange sealing surface.',
              'Available materials include: Carbon steel, stainless steel and selected alloy grades, depending on pressure, temperature and process-media requirements.',
              'Common applications include: Chemical plants, reactors, high-pressure piping systems and other critical process equipment where sealing reliability and resistance to thermal cycling are essential.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'blind-gaskets': {
        title: 'BLIND FLANGE METALLIC GASKETS',
        image: '/images/products/blind-rtj-gaskets.png',
        bannerImage: '/images/product-detials-images/Blind-RTJ-Gaskets-banner-img.avif',
        downloadTitle: 'Blind Gaskets Catalog',
        sections: [
          {
            heading: 'BLIND FLANGE METALLIC GASKETS',
            bullets: [
              'Blind Flange Metallic Gaskets designed for sealing blind flange connections in high-pressure and high-temperature systems.',
              'They provide a secure metal-to-metal: Sealing interface, maintaining joint integrity under demanding operating conditions.',
              'Suitable for critical pressure: Containing applications where reliable sealing is essential.',
              'Manufactured from high-strength metallic materials Selected according to pressure, temperature and process-fluid requirements.',
              'Designed to maintain dimensional compatibility The mating flange, supporting proper fit-up and sealing performance.',
              'Commonly used: In oil & gas, petrochemical, refining, chemical and power applications.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'vx-ax-gaskets': {
        title: 'VX–AX GASKETS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        bannerImage: '/images/product-detials-images/RX_BX_Pressure_Energized_RTJ_Gaskets_Banner-image.avif',
        downloadTitle: 'VX-AX Gaskets Catalog',
        sections: [
          {
            heading: 'VX–AX GASKETS',
            bullets: [
              'VX–AX Gaskets are specialized sealing Solutions developed for demanding oil & gas, offshore and subsea applications, combining reliable pressure sealing with application-specific performance requirements.',
              'VX gaskets feature a face-to-face, Pressure-energized design that supports reliable sealing while allowing direct hub-to-hub contact.',
              'The pressure-energized geometry enhances sealing Performance as system pressure increases, helping maintain joint integrity under demanding operating conditions.',
              'VX gaskets are suitable for wellheads, Riser connectors and subsea equipment, including services involving aggressive chemicals, elevated temperatures and various process fluids.',
              'AX gaskets incorporate: Sealing and insulating elements to provide both effective sealing and electrical isolation between mating flange components.',
              'The electrical insulation helps minimize The risk of galvanic corrosion between dissimilar metallic components and supports the integrity of the flange connection.',
              'VX and AX configurations: Can be selected according to flange design, pressure and temperature conditions, material compatibility and service environment.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'ix-gaskets': {
        title: 'IX RING TYPE JOINT GASKETS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        bannerImage: '/images/product-detials-images/SRX_SBX_Gaskets_Banner-image.avif',
        downloadTitle: 'IX Gaskets Catalog',
        sections: [
          {
            heading: 'IX RING TYPE JOINT GASKETS',
            bullets: [
              'IX Ring Type Joint Gaskets, Available from IX 15 to IX 1200, are designed and supplied in accordance with the requirements of NORSOK L-005.',
              'Gasket materials are selected: Accordance with applicable NORSOK M-650 and NORSOK M-630 requirements for demanding offshore and subsea service.',
              'PTFE or XYLAN coatings: Can be applied to provide suitable surface protection and support reliable sealing performance.',
              'Color coding is used: Identify the gasket material type in accordance with the applicable specification.',
              'IX gaskets can be supplied: In various material grades, sizes and coating configurations based on operating conditions and project requirements.',
              'Silver-coated IX gaskets: Can also be provided Where specified by the customer or project requirements.',
              'Suitable for critical applications where Material traceability, corrosion resistance and reliable sealing performance are essential.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'delta-gaskets': {
        title: 'DELTA GASKETS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        bannerImage: '/images/product-detials-images/RX_BX_Pressure_Energized_RTJ_Gaskets_Banner-image.avif',
        downloadTitle: 'Delta Gaskets Catalog',
        sections: [
          {
            heading: 'DELTA GASKETS',
            bullets: [
              'Delta Gaskets are pressure-energized metallic seals designed for compact, high-integrity flange connections, particularly in subsea applications.',
              'Their geometry utilizes system: Pressure to enhance the sealing force, supporting reliable metal-to-metal sealing under demanding conditions.',
              'Designed for deepwater, high-pressure: High-temperature environments where conventional sealing solutions may be subject to severe operating conditions.',
              'Commonly used in API 17D: Subsea equipment, including wellhead and subsea production systems.',
              'The pressure-energized design helps: Maintain sealing integrity during pressure fluctuations and demanding service conditions.',
              'Manufactured from suitable metallic alloys Selected according to pressure, temperature, corrosion environment and material compatibility.',
              'Delta Gaskets are suited to critical applications: Where leak prevention, mechanical integrity and long-term sealing reliability are essential.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'bridge-gaskets': {
        title: 'BRIDGEMAN GASKETS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        bannerImage: '/images/product-detials-images/SRX_SBX_Gaskets_Banner-image.avif',
        downloadTitle: 'Bridgeman Gaskets Catalog',
        sections: [
          {
            heading: 'BRIDGEMAN GASKETS',
            bullets: [
              'Bridgeman Gaskets are specialized metallic seals designed for ultra-high-pressure and high-vacuum applications where exceptional sealing integrity is required.',
              'The sealing mechanism relies on Controlled plastic deformation of the metallic gasket under high compressive loading.',
              'This deformation allows the gasket Conform closely to the mating surfaces, creating a high-integrity metal-to-metal seal.',
              'Suitable for applications involving: Extreme pressure differentials, vacuum conditions and demanding thermal environments.',
              'Material selection is based on operating: Pressure, temperature, corrosion resistance and compatibility with the process medium.',
              'Commonly associated with: Research equipment, nuclear systems, aerospace applications and other specialized high-integrity systems.',
              'Proper control of surface finish: Gasket geometry, material hardness and applied load is essential to achieve reliable sealing performance.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'spectacle-blind-gaskets': {
        title: 'SPECTACLE BLINDS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        bannerImage: '/images/product-detials-images/Blind-RTJ-Gaskets-banner-img.avif',
        downloadTitle: 'Spectacle Blinds & Spades Catalog',
        sections: [
          {
            heading: 'SPECTACLE BLINDS',
            bullets: [
              'Spectacle Blinds are figure-eight-shaped metallic Devices used for positive isolation of pipeline sections during maintenance, inspection and operational activities.',
              'They consist of two integral plates: An open bore for normal flow and a solid blind for complete flow isolation.',
              'The two plates are connected by: A web, allowing the blind to be rotated between the open and closed positions without removing it from the pipeline.',
              'In the closed position, the solid plate provides A positive mechanical barrier, offering a higher level of isolation than conventional valves alone.',
              'Spectacle blinds are installed between Mating flanges and require suitable gaskets on the sealing faces to achieve a leak-tight flange connection.',
              'Gasket selection depends: The flange facing, pressure class, temperature and process medium and may include spiral wound, RTJ or other suitable gasket configurations.',
              'Serrated sealing surfaces: May be provided to improve gasket retention and load distribution under bolting.',
              'Commonly used: In oil & gas, petrochemical, refining, chemical and power industries where reliable pipeline isolation is essential.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'spectacle-blind',
          },
        ],
      },

      'transition-rtj': {
        title: 'TRANSITION RING TYPE JOINTS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        bannerImage: '/images/product-detials-images/Ring-Type-Joint-(RTJ)-Gaskets-banner-image.avif',
        downloadTitle: 'Transition RTJ Catalog',
        sections: [
          {
            heading: 'TRANSITION RING TYPE JOINTS',
            bullets: [
              'Transition Ring Type Joints: Specialized sealing elements designed to connect mating RTJ flanges with different groove geometries while maintaining the same pitch circle diameter.',
              'They provide an effective sealing solution: Where the flange groove profiles do not directly match, avoiding the need for flange modification or replacement.',
              'These combination rings: Engineered to accommodate different RTJ configurations while maintaining the required sealing integrity and dimensional compatibility.',
              'Available with oval and octagonal: Sealing profiles, depending on the mating flange configurations.',
              'Transition RTJs are typically application-specific Components and are not directly governed by standard API or ASME RTJ specifications.',
              'Dimensions, materials, hardness and profile Geometry are established according to the specific flange configuration and service requirements.',
              'Suitable for specialized applications: Where reliable sealing, dimensional compatibility and operational integrity are critical.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'soft-material-seated-rtj': {
        title: 'SOFT MATERIAL SERRATED RTJ GASKETS',
        image: '/images/products/soft-material-serrated-rtj-gaskets.png',
        bannerImage: '/images/product-detials-images/Soft_Material_Serrated_RTJ_Gaskets_Banner-image.avif',
        downloadTitle: 'Soft-Material-Seated RTJ Catalog',
        sections: [
          {
            heading: 'SOFT MATERIAL SERRATED RTJ GASKETS',
            bullets: [
              'Soft Material Serrated RTJ Gaskets Combine a serrated metallic core with a soft facing material to provide enhanced sealing in demanding flange connections.',
              'The serrated profile increases: The effective contact area and helps the facing material conform to minor surface irregularities in the flange groove.',
              'Soft facing materials such as Graphite or PTFE can be selected according to the process medium, temperature and chemical conditions.',
              'The metallic core provides Mechanical strength and dimensional stability, while the soft facing improves sealing capability and surface conformity.',
              'Suitable for applications: Where improved sealing is required against minor flange imperfections or surface irregularities.',
              'Material, serration geometry and facing Selection can be customized based on operating pressure, temperature, flange configuration and service conditions.',
              'Common applications include: Oil & gas, petrochemical, refining, chemical and process industries.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
        ],
      },

      'weld-lip-seals': {
        title: 'TXCO WELD RING GASKETS',
        image: '/images/product-detials-images/Welded-Lip-Seals.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
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
              headers: ['Feature', 'Engineering Standard'],
              rows: [
                {
                  code: 'Design Type',
                  description: 'Symmetrical Dual-Ring Metallic Assembly',
                },
                {
                  code: 'Joint Category',
                  description: 'Semi-Permanent / Semi-Detachable',
                },
                {
                  code: 'Primary Joining Method',
                  description: 'Outer Edge Seal Welding (GTAW / TIG)',
                },
                {
                  code: 'Recommended Service',
                  description: 'High-Temperature Steam, Lethal Media, Infrequent Overhaul Lines',
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
  // 2. GASKETS -> Semi-Metallic Gaskets (Pages 14–20)
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
        bannerImage: '/images/product-detials-images/Spiral-Wound-Gaskets-Planisteel-SW.avif',
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
            heading: 'CONSTRUCTION & MATERIALS',
            table: {
              headers: ['Component', 'Typical Materials', 'Function'],
              rows: [
                {
                  code: 'Winding',
                  description: 'SS 304, SS 316, SS 321, SS 347, Inconel, Monel, Nickel Alloys',
                  thickness: 'Provides strength, resilience and recovery',
                },
                {
                  code: 'Filler',
                  description: 'Flexible Graphite, PTFE, Ceramic, Mica',
                  thickness: 'Provides the primary sealing medium',
                },
                {
                  code: 'Inner Ring',
                  description: 'Carbon Steel, SS 304/316, SS 321/347, Nickel Alloys',
                  thickness: 'Prevents inward buckling and protects the winding',
                },
                {
                  code: 'Outer Ring',
                  description: 'Carbon Steel, SS 304/316, SS 321/347',
                  thickness: 'Provides centering and compression control',
                },
                {
                  code: 'Special Alloys',
                  description: 'Duplex, Super Duplex, Hastelloy, Inconel',
                  thickness: 'For corrosive and severe service conditions',
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
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'Spiral Wound Gaskets Catalog',
        sections: [
          {
            heading: 'STYLE R – BASIC SPIRAL WOUND GASKET',
            bullets: [
              'Consists of the spiral wound Sealing element without inner or outer guide rings.',
              'Manufactured using alternating layers: Metallic winding strip and filler material.',
              'Additional winding at the start and end: Provides stability and resistance to unwinding.',
              'The V-shaped winding profile provides Spring-like recovery during pressure and temperature variations.',
              'Suitable for tongue & groove: Male & female and other confined flange configurations.',
              'Useful where the flange design itself provides Gasket positioning and compression control.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
          {
            heading: 'STYLE RIR – INNER RING',
            bullets: [
              'Consists of a spiral wound Sealing element with an integral inner metal ring.',
              'The inner ring provides: Radial support and additional structural stability.',
              'Helps prevent inward: Buckling or collapse of the winding under compression.',
              'Acts as a barrier against: Process-Media turbulence, erosion and debris accumulation.',
              'Provides additional control: The gasket’s inner sealing diameter.',
              'Commonly used with male & female, Spigot-and-recess and confined flange configurations.',
            ],
          },
          {
            heading: 'STYLE CG – OUTER RING',
            bullets: [
              'Consists of the spiral wound Sealing element with an outer centering and guide ring.',
              'The outer ring ensures: Accurate gasket positioning relative to the flange bore.',
              'Functions as a compression limiter: Helping prevent excessive crushing of the winding.',
              'Supports uniform gasket: Loading during bolt tightening and flange assembly.',
              'Commonly used: With raised face (RF) and flat face (FF) flanges.',
              'Suitable for general process: Piping and moderate service conditions.',
            ],
          },
          {
            heading: 'STYLE CGI – INNER & OUTER RINGS',
            bullets: [
              'Incorporates the spiral wound: Sealing element with both inner and outer metallic rings.',
              'The inner ring provides: Radial reinforcement, compression control and media protection.',
              'Helps minimize inward buckling: Turbulence and erosion at the gasket ID.',
              'The outer ring provides: Centering, alignment and controlled compression.',
              'Provides improved mechanical stability: Under high pressure and temperature conditions.',
              'Recommended for severe service: Aggressive media and critical flange connections.',
              'Suitable for applications requiring: Enhanced sealing reliability and protection of the winding element.',
            ],
          },
          {
            heading: 'STYLE CGI – BOLT-HOLE TYPE',
            bullets: [
              'Incorporates the CGI construction: With bolt holes provided in the outer centering ring.',
              'Bolt holes provide: Positive gasket location and alignment during flange assembly.',
              'Helps prevent gasket: Displacement or rotation during installation.',
              'Supports consistent positioning: The sealing element relative to the flange and bolt circle.',
              'The inner ring provides: Protection against inward buckling, erosion and process-media effects.',
              'The outer ring provides: Compression control and accurate centering.',
              'Suitable for critical applications: Where precise gasket positioning and repeatable assembly are required.',
            ],
          },
        ],
      },

      'kammprofile-gaskets': {
        title: 'KAMMPROFILE GASKETS',
        image: '/images/product-detials-images/Planisteel-Camprofile.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
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
              'Consists of the grooved metallic: Core with soft facing layers applied to both sides, without guide rings.',
              'The serrated metallic core concentrates: Bolt load to produce high seating stress at lower bolt loads.',
              'Soft facings conform: Surface imperfections, supporting effective sealing and protecting flange seating faces.',
              'Suitable for tongue & groove, Male & female and confined flange configurations.',
              'Commonly used: In heat exchangers, pressure vessels and specialized equipment connections.',
            ],
          },
          {
            heading: 'TYPE ZA – KAMMPROFILE WITH OUTER RING',
            bullets: [
              'Incorporates a solid outer centering: Ring integral with or attached to the grooved metallic core.',
              'The outer ring provides: Accurate gasket centering within the flange bolt circle.',
              'Helps maintain correct gasket position: During installation and flange bolt tightening.',
              'Commonly used with raised face (RF) and flat face (FF) flanges.',
              'Suitable for process: Piping, heat exchangers and industrial equipment.',
            ],
          },
          {
            heading: 'TYPE ZI – KAMMPROFILE WITH INNER & OUTER RINGS',
            bullets: [
              'Features both inner and outer: Guide rings with the serrated metallic core.',
              'The outer ring provides: Centering and alignment relative to the bolt circle.',
              'The inner ring provides: Additional radial support, reduces turbulence at the flange bore and helps protect the sealing element.',
              'Offers enhanced mechanical stability for high-pressure, High-temperature and aggressive service conditions.',
              'Suitable for critical applications: Where sealing integrity, stability and long service life are essential.',
            ],
          },
        ],
      },

      'metal-jacketed-gaskets': {
        title: 'METAL JACKETED GASKETS',
        image: '/images/product-detials-images/Metal-jacketed-gaskets-Planisteel MJ.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
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
              'Incorporate a corrugated metallic jacket: Around the filler material.',
              'Corrugations provide increased flexibility: And improved surface conformity.',
              'Suitable for heat exchangers, Boilers and high-temperature applications.',
              'Available with suitable metallic jackets: And fillers according to service conditions.',
            ],
          },
          {
            heading: '2. FLAT METAL JACKETED GASKETS',
            bullets: [
              'Consist of a flat metallic: Jacket enclosing a soft filler.',
              'Provide a robust sealing solution: For conventional flange and equipment connections.',
              'Suitable for moderate pressure: And temperature applications.',
              'Commonly used in piping, Covers, heat exchangers and process equipment.',
            ],
          },
          {
            heading: '3. DOUBLE JACKETED GASKETS',
            bullets: [
              'Manufactured with two metallic jackets: Enclosing the filler material.',
              'The double-jacket construction provides: Enhanced mechanical protection and sealing stability.',
              'Suitable for demanding pressure: And temperature conditions.',
              'Commonly used for heat: Exchangers, pressure vessels and equipment flanges.',
            ],
          },
          {
            heading: '4. HEAT EXCHANGER GASKETS',
            bullets: [
              'Designed specifically for heat exchanger: Covers, channels and tube-sheet assemblies.',
              'Available in configurations suited to: Complex flange geometries and multiple sealing requirements.',
              'Can incorporate different jacket materials: Fillers, pass partitions and sealing arrangements.',
              'Designed to withstand thermal cycling: Pressure fluctuations and process-fluid exposure.',
              'Material selection is based on: The shell-side and tube-side operating conditions.',
            ],
          },
        ],
      },

      'flange-isolation-kits': {
        title: 'FLANGE ISOLATION KITS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'Flange Isolation Kits Catalog',
        sections: [
          {
            heading: 'FLANGE ISOLATION KITS',
            paragraphs: [
              'TXCO Flange Isolation Kits are designed to electrically isolate flanged joints and help prevent galvanic corrosion between dissimilar metals. They also support cathodic protection systems by preventing unwanted electrical continuity across the flange connection.',
              'A typical kit includes an insulating gasket, insulating sleeves, insulating washers and steel backup washers. The insulating components work together to provide effective electrical separation while maintaining the required sealing integrity and mechanical stability of the flange joint.',
              'These kits are widely used in oil & gas, petrochemical, refining, chemical, water and process industries, where corrosion control and reliable flange isolation are essential.'
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
            bulletsIntro: 'Available Configurations',
            bullets: [
              'TX ISOPRO™ -F (Type F – Raised Face): Fits inside the bolt circle across the raised face. Simplifies centering and minimizes exposure to external contaminants in RF flange connections.',
              'TX ISOPRO™ -E (Type E – Full Face): Extends to the flange outer diameter with precision bolt holes. Delivers full face-to-face coverage to prevent metallic debris from bridging the isolation gap.',
            ],
          },
          {
            heading: 'TX-CERAMPRO™',
            paragraphs: [
              'TX-CERAMPRO™ is a fire-safe flange isolation gasket designed to provide electrical insulation and reliable sealing in critical flange connections. TX-CERAMPRO™ redefines high-temperature pipeline integrity through a revolutionary dual-sheet facing technology, establishing a new standard where absolute thermal endurance meets uncompromised dielectric defense. Engineered around a precision steel core encapsulated within high-strength Glass Reinforced Epoxy (GRE), it integrates proprietary TX-CERAMSHIELD™ and TX-IGNISIL™ facings to create an impenetrable barrier built for the world\'s most punishing process lines.',
            ],
            bulletsIntro: 'Engineering Highlights',
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
              'Designed specifically for: Ring Type Joint flange connections where electrical isolation is required.',
              'Installed within the RTJ groove: To provide both metallic sealing and electrical separation between the mating flanges.',
              'The insulating sealing element: Is selected to withstand the required pressure, temperature and process-media conditions.',
              'Particularly suitable for high-integrity systems: Where cathodic protection and galvanic corrosion prevention are important.',
              'Requires proper compatibility: Between the gasket, RTJ groove geometry, flange materials and isolation components for reliable performance.',
            ],
          },
          {
            heading: 'TX TYPE -N : FLANGE ISOLATION GASKET',
            paragraphs: [
              'TXCO Type N is a flange isolation system designed to provide electrical isolation and reliable sealing in RF and FF flange connections. The gasket uses modified, bi-directionally oriented PTFE as the primary sealing and insulating element, offering strong chemical resistance and improved resistance to PTFE relaxation and cold flow.',
            ],
            bullets: [
              'The PTFE sealing element provides: Electrical insulation and fluid sealing within the flange joint.',
              'Suitable for a broad range of chemical services: With compatibility across approximately pH 0–14, subject to specific media compatibility.',
              'Designed for reliable performance: Under pressure, temperature and chemical exposure.',
              'Suitable for: RF and FF flange connections.',
              'Applicable for service temperatures up to 200°C: With pressure ratings selected according to the applicable flange class.',
              'GRE G10 (FR4) insulating sleeves and washers: Are recommended for enhanced mechanical and electrical performance.',
              'GRE G10 offers low moisture absorption: Compared with conventional phenolic materials, helping maintain insulation resistance and mechanical stability throughout service.',
              'Suitable for oil & gas: Chemical, petrochemical, water and process applications where electrical isolation and chemical resistance are required.',
            ],
          },
        ],
      },
    },
  },

  // ==========================================
  // 3. GASKETS -> Non-Metallic Gaskets (Pages 21–42)
  // ==========================================
  'non-metallic-gaskets': {
    parentCategoryTitle: 'GASKETS',
    parentCategoryHref: '/products/gaskets',
    subcategoryTitle: 'Non-Metallic Gaskets',
    productsList: [
      { id: 'about-non-metallic-gaskets', title: 'ABOUT NON-METALLIC GASKETS', downloadTitle: 'Non-Metallic Gaskets Catalog' },
      { id: 'rubber-gaskets', title: 'RUBBER GASKETS', downloadTitle: 'Rubber Gaskets' },
      { id: 'ptfe-gaskets', title: 'PTFE GASKETS', downloadTitle: 'PTFE Gaskets' },
      { id: 'eptfe-gaskets', title: 'EXPANDED PTFE (ePTFE) GASKETS', downloadTitle: 'ePTFE Gaskets' },
      { id: 'asbestos-free-gaskets', title: 'ASBESTOS-FREE GASKETS (AF SERIES)', downloadTitle: 'Asbestos-Free Gaskets Range' },
      { id: 'txco-af-110', title: 'TXCO AF-110', downloadTitle: 'TXCO AF-110 Data Sheet' },
      { id: 'txco-af-120', title: 'TXCO AF-120', downloadTitle: 'TXCO AF-120 Data Sheet' },
      { id: 'txco-af-139', title: 'TXCO AF-139', downloadTitle: 'TXCO AF-139 Data Sheet' },
      { id: 'txco-af-154', title: 'TXCO AF-154', downloadTitle: 'TXCO AF-154 Data Sheet' },
      { id: 'txco-af-155-gf', title: 'TXCO AF-155 GF', downloadTitle: 'TXCO AF-155 GF Data Sheet' },
      { id: 'txco-af-159', title: 'TXCO AF-159', downloadTitle: 'TXCO AF-159 Data Sheet' },
      { id: 'txco-af-160', title: 'TXCO AF-160 ACID', downloadTitle: 'TXCO AF-160 Acid Data Sheet' },
      { id: 'txco-af-170', title: 'TXCO AF-170', downloadTitle: 'TXCO AF-170 Data Sheet' },
      { id: 'txco-af-190', title: 'TXCO AF-190', downloadTitle: 'TXCO AF-190 Data Sheet' },
      { id: 'non-asbestos-gaskets', title: 'COMPRESSED NON-ASBESTOS (STYLE SERIES)', downloadTitle: 'Compressed Non-Asbestos Range' },
      { id: 'txco-style-11', title: 'TXCO STYLE 11', downloadTitle: 'TXCO Style 11 Data Sheet' },
      { id: 'txco-style-20', title: 'TXCO STYLE 20', downloadTitle: 'TXCO Style 20 Data Sheet' },
      { id: 'txco-style-39', title: 'TXCO STYLE 39', downloadTitle: 'TXCO Style 39 Data Sheet' },
      { id: 'txco-style-51', title: 'TXCO STYLE 51', downloadTitle: 'TXCO Style 51 Data Sheet' },
      { id: 'txco-style-54', title: 'TXCO STYLE 54 SUPER', downloadTitle: 'TXCO Style 54 Data Sheet' },
      { id: 'txco-style-55', title: 'TXCO STYLE 55 UNIVERSAL', downloadTitle: 'TXCO Style 55 Data Sheet' },
      { id: 'txco-style-59', title: 'TXCO STYLE 59 OIL', downloadTitle: 'TXCO Style 59 Oil Data Sheet' },
      { id: 'txco-style-60', title: 'TXCO STYLE 60 ACID', downloadTitle: 'TXCO Style 60 Acid Data Sheet' },
    ],
    productDetails: {
      'about-non-metallic-gaskets': {
        title: 'NON METALLIC GASKETS',
        image: '/images/product-detials-images/gaskets-product-detials-place-holder-img.png',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
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
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
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
              'Neoprene: Good resistance to oils, weathering and moderate chemicals, suitable for general industrial piping.',
              'Nitrile (NBR): Excellent resistance to petroleum-based oils, fuels and hydraulic fluids, commonly used in automotive and hydrocarbon services.',
              'EPDM: Excellent resistance to water, steam, ozone and weathering, widely used in water distribution and outdoor piping.',
              'Silicone: Wide operating temperature range with good dielectric properties and flexibility, suitable for food and pharmaceutical applications.',
              'Viton® (FKM): High chemical and temperature resistance, designed for aggressive chemicals and high-temperature fuels.',
              'Natural Rubber: High mechanical resilience and abrasion resistance, suitable for water and slurry handling systems.',
              'SBR: Good abrasion resistance and economical performance, particularly for water and general industrial service.',
              'Butyl: Very low gas permeability with excellent resistance to moisture and air, making it suitable for specialized gas and chemical services.',
            ],
          },
        ],
      },

      'ptfe-gaskets': {
        title: 'PTFE GASKETS',
        image: '/images/product-detials-images/PTFE-Jointing-Sheets-Planiflon.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'PTFE Gaskets Catalog',
        sections: [
          {
            heading: 'PTFE GASKETS',
            paragraphs: [
              'PTFE (Polytetrafluoroethylene) Gaskets are premium chemical-resistant sealing solutions designed for aggressive chemical, pharmaceutical and food processing applications. PTFE is chemically inert to almost all industrial chemicals and process fluids.',
              'TXCO supplies Virgin PTFE, Modified PTFE, Filled PTFE (Silica, Barium Sulfate, Glass-Filled), and PTFE Envelope Gaskets to suit diverse pressure, temperature and media requirements.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
          {
            heading: 'AVAILABLE PTFE VARIATIONS',
            bullets: [
              'Virgin PTFE: 100% pure PTFE for maximum chemical purity and non-contaminating sealing in food and pharmaceutical lines.',
              'Modified / Filled PTFE: Formulated with inorganic fillers to reduce creep relaxation and cold flow under continuous bolt load.',
              'PTFE Envelope Gaskets: Combines an outer chemical-resistant PTFE envelope with a resilient elastomer or fiber insert for enhanced compressibility.',
              'PTFE Ring & Full-Face Gaskets: Precision-cut gaskets to ASME B16.21 and EN 1514-1 dimensions for standard industrial flanges.',
            ],
          },
        ],
      },

      'eptfe-gaskets': {
        title: 'EXPANDED PTFE (ePTFE) GASKETS',
        image: '/images/product-detials-images/PTFE-Jointing-Sheets-Planiflon.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'ePTFE Gaskets Catalog',
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
              'Excellent resistance to: Acids, alkalis, solvents and aggressive chemicals.',
              'Wide operating temperature capability: With good sealing stability.',
              'Highly conformable: Helping seal irregular and damaged flange surfaces.',
              'Requires relatively low seating stress: Reducing flange loading.',
              'Non-stick surface: Reduces adhesion and facilitates gasket removal.',
              'Good resistance to creep: And long-term compression effects.',
              'Suitable for: Chemical, pharmaceutical, food, power and process industries.',
              'Available as: Sheets, tapes, cut gaskets and application-specific shapes.',
            ],
          },
        ],
      },

      'asbestos-free-gaskets': {
        title: 'ASBESTOS-FREE COMPRESSED FIBER GASKETS (AF SERIES)',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'AF Series Catalog',
        sections: [
          {
            heading: 'TXCO ASBESTOS-FREE (AF) GASKET RANGE',
            paragraphs: [
              'TXCO AF Series Non-Asbestos Compressed Fiber Gaskets are engineered from high-tensile synthetic aramid, glass, carbon, and mineral fibers bound within advanced elastomeric matrices (NBR, HNBR).',
              'Designed to replace traditional asbestos jointing, the AF Series delivers elite creep-relaxation resistance, superior torque retention, and high blowout resistance across steam, hydrocarbons, acids, and process utilities.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
          {
            heading: 'AF SERIES GRADES SUMMARY',
            bullets: [
              'TXCO AF-110: General-purpose utility gasket for light-to-moderate pressures and general industrial fluids.',
              'TXCO AF-120: BS 7531 Grade-Y aramid/NBR gasket for saturated steam, water, and process utilities up to 60 Bar.',
              'TXCO AF-139: BS 7531 Grade-X high-pressure universal gasket for steam, fuels, and chemical lines up to 100 Bar.',
              'TXCO AF-154: Ultra-high-pressure aramid gasket engineered for 160 Bar containment and temperatures up to 300°C.',
              'TXCO AF-155 GF: Quad-fiber HNBR gasket for extreme steam, power utility, and aggressive chemical duties up to 450°C.',
              'TXCO AF-159: Heavy-duty fuel and oil-resistant aramid/NBR gasket for engines, hydraulics, and hydrocarbons up to 160 Bar.',
              'TXCO AF-160 Acid: Specialized acid-resistant non-asbestos gasket engineered for aggressive organic and mineral acids up to 100 Bar.',
              'TXCO AF-170: Carbon-graphite multi-fiber HNBR gasket for ultra-high pressures up to 200 Bar and continuous temperatures to 525°C.',
              'TXCO AF-190: High-modulus carbon-graphite HNBR gasket with stainless steel wire reinforcement for thermal infrastructure up to 170 Bar.',
            ],
          },
        ],
      },

      'txco-af-110': {
        title: 'TXCO AF-110',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'TXCO AF-110 Data Sheet',
        sections: [
          {
            heading: 'TXCO AF-110',
            paragraphs: [
              'TXCO AF-110 is an economical, general-purpose non-asbestos compressed fiber gasket manufactured from synthetic fibers bonded with a quality elastomeric nitrile rubber (NBR) matrix.',
              'Engineered for light-to-moderate static sealing duties, it provides dependable performance across water, air, industrial gases, and mild utility lines under moderate operating conditions.',
            ],
          },
          {
            heading: 'PRIMARY TARGET APPLICATIONS',
            bullets: [
              'General Industrial Utilities: Plant water loops, low-pressure compressed air lines, inert gas lines, and drainage piping.',
              'Industrial Machinery & OEM: Gearbox covers, pump casings, inspection hatches, and light-duty valve bodies.',
              'Hydrocarbon Infrastructure: Fuel oil transfer networks, lube oil circuits, and industrial gas distribution manifolds.',
            ],
          },
        ],
      },

      'txco-af-120': {
        title: 'TXCO AF-120',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'TXCO AF-120 Data Sheet',
        sections: [
          {
            heading: 'TXCO AF-120',
            paragraphs: [
              'TXCO AF-120 is an advanced non-asbestos compressed fiber gasket manufactured from high-tensile aramid fibers blended with functional inorganic fillers and an elastomeric nitrile rubber (NBR) binder matrix. Engineered to maintain continuous seating stress and resist torque loss under thermal cycling, this flexible gasket delivers dependable static sealing across fluid, gas, steam, and hydrocarbon flange connections. TXCO AF-120 is supplied in both standard General Purpose (GP) cut gaskets and steel wire-mesh reinforced Metallic gasket configurations.',
            ],
          },
          {
            heading: 'KEY TECHNICAL HIGHLIGHTS',
            bullets: [
              'Resilient Aramid-NBR Matrix: Engineered with durable aramid fibers and synthetic elastomers to form a robust gasket structure that resists creep relaxation and bolt torque loss.',
              'Wire-Reinforced Steam Gasket: The Metallic grade incorporates an embedded high-tensile steel wire mesh insert, boosting pressure containment to 60 Bar to prevent blowout in dynamic steam and vapour lines.',
              'Anti-Stick Surface Coating: Coated with a smooth, factory-applied graphited release finish that prevents gasket adhesion to flange faces, enabling fast overhaul turnarounds and protecting seating surfaces from pitting.',
              'Elevated Thermal Endurance: Capable of continuous operation up to 250°C (482°F) with peak thermal surge capabilities reaching 400°C (725°F).',
            ],
          },
          {
            heading: 'TECHNICAL SPECIFICATIONS',
            table: {
              headers: ['Operating Parameter', 'TXCO AF-120 GP Gasket', 'TXCO AF-120 Metallic Gasket'],
              rows: [
                { code: 'Maximum Operating Pressure', description: '50 Bar (5.0 MPa / 725 PSI)', thickness: '60 Bar (6.0 MPa / 870 PSI)' },
                { code: 'Max Continuous Service Temp.', description: '250°C (482°F)', thickness: '250°C (482°F)' },
                { code: 'Peak Short-Term Temperature', description: '400°C (725°F)', thickness: '400°C (725°F)' },
                { code: 'Gasket Architecture', description: 'Aramid Fibers + NBR Matrix', thickness: 'Steel Wire Gauze + Aramid/NBR Matrix' },
                { code: 'Surface Finish & Identity', description: 'Green or Graphited Black (Anti-Stick)', thickness: 'Graphited Black (Anti-Stick)' },
                { code: 'Specification Compliance', description: 'BS 7531:2006 Grade-Y / IS 17796:2022 Grade-Y', thickness: 'BS 7531:2006 Grade-Y / IS 17796:2022 Grade-Y' },
              ],
            },
          },
          {
            heading: 'PRIMARY TARGET APPLICATIONS',
            bullets: [
              'Steam & Vapour Lines: Saturated steam manifolds, condensate recovery piping, and process heating circuits (Metallic gasket recommended).',
              'Process Utilities: High-pressure water distribution, compressed air systems, inert gas headers, and cooling circuits.',
              'Machinery & Valve Flanges: Centrifugal pump casings, valve bonnet joints, heat exchangers, boiler inspection covers, and pipe manifolds.',
            ],
          },
        ],
      },

      'txco-af-139': {
        title: 'TXCO AF-139',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'TXCO AF-139 Data Sheet',
        sections: [
          {
            heading: 'TXCO AF-139',
            paragraphs: [
              'TXCO AF-139 is a premium, universal non-asbestos compressed fiber gasket engineered for high-integrity static sealing across severe thermal and high-pressure duties. Manufactured from high-tensile compressed aramid fibers blended with advanced functional inorganic fibers and bound within a resilient nitrile rubber (NBR) matrix, it delivers exceptional torque retention and structural stability in aggressive steam, oil, and chemical environments. TXCO AF-139 is supplied in both standard Non-Metallic cut gaskets and steel wire-mesh reinforced Metallic gasket configurations.',
            ],
          },
          {
            heading: 'KEY TECHNICAL HIGHLIGHTS',
            bullets: [
              'Grade-X Structural Resilience: Fully compliant with BS 7531 Grade-X standards, delivering maximum resistance to creep relaxation, matrix crushing, and bolt torque loss under dynamic operational loads.',
              'Wire-Reinforced High-Pressure Gasket: The Metallic grade incorporates an embedded steel wire gauze insert, elevating pressure containment up to 100 Bar to prevent gasket blowout in extreme steam lines and pulsation-heavy piping.',
              'Anti-Stick Surface Coating: Coated with a smooth, factory-applied graphited release finish (available in Orange or Graphited Black) that eliminates flange face adhesion, preventing seating surface corrosion and speeding up overhaul turnarounds.',
              'Universal Chemical & Thermal Defense: Superior sealing performance against continuous high-temperature steam, synthetic lubricants, fuels, hydrocarbons, and mild chemical process fluids.',
            ],
          },
          {
            heading: 'TECHNICAL SPECIFICATIONS',
            table: {
              headers: ['Specification Parameter', 'TXCO AF-139 Non-Metallic Gasket', 'TXCO AF-139 Metallic Gasket'],
              rows: [
                { code: 'Maximum Operating Pressure', description: '90 Bar (9.0 MPa / ~1305 PSI)', thickness: '100 Bar (10.0 MPa / ~1450 PSI)' },
                { code: 'Max Continuous Service Temp.', description: '250°C (450°F)', thickness: '250°C (450°F)' },
                { code: 'Peak Short-Term Temperature', description: '400°C (720°F)', thickness: '400°C (720°F)' },
                { code: 'Gasket Architecture', description: 'Aramid Fibers + NBR Matrix', thickness: 'Steel Wire Gauze + Aramid/NBR Matrix' },
                { code: 'Surface Finish & Identity', description: 'Orange or Graphited Black (Anti-Stick)', thickness: 'Orange or Graphited Black (Anti-Stick)' },
                { code: 'Specification Compliance', description: 'BS 7531:2006 Grade-X / IS 17796:2022 Grade-X', thickness: 'BS 7531:2006 Grade-X / IS 17796:2022 Grade-X' },
              ],
            },
          },
          {
            heading: 'PRIMARY TARGET APPLICATIONS',
            bullets: [
              'High-Pressure Steam & Vapour Loops: Superheated steam headers, boiler feed manifolds, and high-duty condensate return lines (Metallic gasket recommended).',
              'Petrochemical & Oil Processing: Hydrocarbon transport lines, fuel handling networks, hot oil circuits, and synthetic lubricant manifolds.',
              'Heavy Equipment & Power Utilities: Boiler doors, turbine casings, shell-and-tube heat exchangers, and high-pressure process valve body joints.',
            ],
          },
        ],
      },

      'txco-af-154': {
        title: 'TXCO AF-154',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'TXCO AF-154 Data Sheet',
        sections: [
          {
            heading: 'TXCO AF-154',
            paragraphs: [
              'TXCO AF-154 is an ultra-high-performance, non-asbestos compressed fiber gasket engineered for extreme mechanical and thermal stresses in critical flanged joints. Manufactured from superior heat-resistant aramid fibers blended with functional inorganic fibers and high-density nitrile elastomeric (NBR) binders, it easily surpasses BS 7531 Grade-X requirements. Available in standard High-Pressure Non-Metallic (Yellow) and steel wire-mesh reinforced Metallic (Graphited Black) configurations, TXCO AF-154 provides unmatched blowout resistance and structural integrity across severe industrial process conditions.',
            ],
          },
          {
            heading: 'KEY TECHNICAL HIGHLIGHTS',
            bullets: [
              'BS 7531 Grade-X Certification: Delivers elite creep-relaxation resistance, superior stress retention, and zero matrix crushing under maximum bolt torque loads.',
              'Wire-Reinforced Ultra-Pressure Barrier: The Metallic variant incorporates a high-tensile steel wire insertion, boosting hydraulic containment up to 160 Bar (2321 PSI) to prevent catastrophic blowout in dynamic steam loops.',
              'Extreme Thermal Endurance: Engineered for continuous operational temperatures up to 300°C (572°F), with short-term thermal surge capabilities reaching 450°C for non-metallic and 475°C for metallic variants.',
              'Anti-Friction Surface Finish: Factory-applied graphited release finish on the metallic grade prevents metal-to-gasket fusion, preserving flange faces and accelerating plant overhaul cycles.',
            ],
          },
          {
            heading: 'TECHNICAL SPECIFICATIONS',
            table: {
              headers: ['Specification Parameter', 'TXCO AF-154 High Pressure (Non-Metallic)', 'TXCO AF-154 Metallic (Wire-Reinforced)'],
              rows: [
                { code: 'Maximum Operating Pressure', description: '150 Bar (15.0 MPa / ~2175 PSI)', thickness: '160 Bar (16.0 MPa / ~2321 PSI)' },
                { code: 'Max Continuous Service Temp.', description: '300°C (572°F)', thickness: '300°C (572°F)' },
                { code: 'Max Short-Term Peak Temp.', description: '450°C (810°F)', thickness: '475°C (887°F)' },
                { code: 'Gasket Architecture', description: 'Superior Heat-Resistant Aramid + NBR Matrix', thickness: 'Steel Wire Gauze + Aramid/NBR Matrix' },
                { code: 'Identity Colour & Finish', description: 'Yellow (Anti-Stick Finish)', thickness: 'Graphited Black with Anti-Stick Finish' },
                { code: 'Specification Compliance', description: 'BS 7531:2006 Grade-X / IS 17796:2022 Grade-X', thickness: 'BS 7531:2006 Grade-X / IS 17796:2022 Grade-X' },
              ],
            },
          },
          {
            heading: 'TARGET APPLICATIONS',
            bullets: [
              'Extreme Steam & Power Generation: Superheated steam headers, high-pressure boiler feed manifolds, steam turbines, and main steam isolation flanges.',
              'Refinery & Chemical Process Units: High-pressure hydrocarbon headers, hot thermal oil circuits, aggressive solvent lines, and gas processing lines.',
              'High-Load Mechanical OEM: Pressure vessel inspection ports, high-pressure heat exchangers, heavy centrifugal pump casings, and autoclave closures.',
            ],
          },
        ],
      },

      'txco-af-155-gf': {
        title: 'TXCO AF-155 GF',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'TXCO AF-155 GF Data Sheet',
        sections: [
          {
            heading: 'TXCO AF-155 GF',
            paragraphs: [
              'TXCO AF-155 GF is an elite, non-asbestos compressed fiber gasket engineered for maximum thermal endurance and structural integrity in severe-service flange connections. Manufactured from an advanced multi-fiber blend—combining high-tensile aramid, glass, and mineral fibers bound within a Hydrogenated Nitrile (HNBR) elastomer matrix—it maintains critical bolt torque retention and superior sealability across aggressive chemical and steam services. Available in standard Non-Metallic and steel wire-mesh reinforced Metallic variants.',
            ],
          },
          {
            heading: 'KEY TECHNICAL HIGHLIGHTS',
            bullets: [
              'Advanced Quad-Fiber HNBR Matrix: Fuses aramid, glass, and inorganic mineral fibers with high-grade HNBR rubber to deliver exceptional tensile strength, zero matrix crushing, and minimal creep relaxation.',
              'Extreme Thermal Operating Envelope: Delivers continuous operating endurance up to 400°C (Non-Metallic) and 450°C (Metallic), with peak short-term thermal surge capabilities reaching 500°C.',
              'High-Pressure Wire Insertion: The Metallic variant incorporates an embedded steel wire gauze insert, raising pressure containment to 160 Bar to prevent blowout under dynamic pressure waves.',
              'BS 7531 Grade-X Certification: Fully meets Grade-X standards, providing resistance to thermal degradation, blowout, and chemical attack from dilute acids, alkalies, and hydrocarbons.',
            ],
          },
          {
            heading: 'TECHNICAL SPECIFICATIONS',
            table: {
              headers: ['Specification Parameter', 'TXCO AF-155 GF Non-Metallic Gasket', 'TXCO AF-155 GF Metallic Gasket'],
              rows: [
                { code: 'Maximum Operating Pressure', description: '150 Bar (15.0 MPa / ~2175 PSI)', thickness: '160 Bar (16.0 MPa / ~2320 PSI)' },
                { code: 'Max Continuous Service Temp.', description: '400°C', thickness: '450°C' },
                { code: 'Max Short-Term Peak Temp.', description: '450°C', thickness: '500°C' },
                { code: 'Max Continuous Steam Temp.', description: '375°C', thickness: '425°C' },
                { code: 'Gasket Composition', description: 'Aramid + Glass + Mineral Fibers + HNBR', thickness: 'Steel Wire Gauze + Multi-Fiber/HNBR' },
                { code: 'Surface Finish & Identity', description: 'Purple (Anti-Stick Finish)', thickness: 'Purple or Graphited Black (Anti-Stick)' },
                { code: 'Specification Compliance', description: 'BS 7531:2006 Grade-X', thickness: 'BS 7531:2006 Grade-X' },
              ],
            },
          },
          {
            heading: 'PRIMARY TARGET APPLICATIONS',
            bullets: [
              'Superheated Steam & Power Utilities: High-pressure steam headers, boiler feed manifolds, power plant piping, and steam turbine flanges.',
              'Petrochemical & Chemical Units: Fertilizer plants, hot hydrocarbon transfer, organic solvents, and dilute acid or alkali chemical lines.',
              'Heavy Industrial & Marine Equipment: Shipbuilding piping manifolds, automotive exhaust/engine joints, and high-duty pressure vessels.',
            ],
          },
        ],
      },

      'txco-af-159': {
        title: 'TXCO AF-159',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'TXCO AF-159 Data Sheet',
        sections: [
          {
            heading: 'TXCO AF-159',
            paragraphs: [
              'TXCO AF-159 is a severe-service non-asbestos compressed aramid fiber gasket engineered for critical fluid, gas, and hydrocarbon containment under demanding mechanical and thermal loads. Manufactured from high-grade heat-resistant aramid fibers blended with functional inorganic fillers and bound in a premium nitrile rubber (NBR) matrix, TXCO AF-159 delivers exceptional torque retention, oil-swell resistance, and gas-tight performance. Offered in both standard Non-Metallic and steel wire-mesh reinforced Metallic configurations, it fully complies with BS 7531 Grade-X standards.',
            ],
          },
          {
            heading: 'PERFORMANCE HIGHLIGHTS',
            bullets: [
              'Heavy-Duty NBR Matrix: Formulated specifically to resist fuel penetration, fluid absorption, and chemical swelling across high-load mechanical drive systems.',
              'Steel-Wire Blowout Protection: The Metallic variant features an embedded high-tensile steel wire mesh insert, boosting pressure containment to 160 Bar (2321 PSI) to prevent gasket blowout under dynamic pressure spikes.',
              'BS 7531 Grade-X Compliance: Delivers superior creep-relaxation resistance and stress retention, ensuring stable seating stress under cyclic thermal operation up to 300°C.',
              'Anti-Stick Surface Finish: Coated with a smooth graphited release layer (in Black or Graphited Black) that prevents metal-to-gasket fusion, preserving flange faces and expediting disassembly during maintenance overhauls.',
            ],
          },
          {
            heading: 'TECHNICAL SPECIFICATIONS',
            table: {
              headers: ['Specification Parameter', 'TXCO AF-159 Non-Metallic Gasket', 'TXCO AF-159 Metallic Gasket'],
              rows: [
                { code: 'Maximum Operating Pressure', description: '150 Bar (15.0 MPa / ~2175 PSI)', thickness: '160 Bar (16.0 MPa / ~2321 PSI)' },
                { code: 'Max Continuous Service Temp.', description: '300°C (540°F)', thickness: '300°C (540°F)' },
                { code: 'Max Short-Term Peak Temp.', description: '450°C (810°F)', thickness: '450°C (810°F)' },
                { code: 'Gasket Architecture', description: 'Heat-Resistant Aramid + NBR Matrix', thickness: 'Steel Wire Gauze + Aramid/NBR Matrix' },
                { code: 'Identity Colour & Finish', description: 'Black or Graphited Black (Anti-Stick)', thickness: 'Black or Graphited Black (Anti-Stick)' },
                { code: 'Specification Compliance', description: 'BS 7531:2006 Grade-X / IS 17796:2022 Grade-X', thickness: 'BS 7531:2006 Grade-X / IS 17796:2022 Grade-X' },
              ],
            },
          },
          {
            heading: 'TARGET APPLICATIONS',
            bullets: [
              'Engines & Power Generation: Diesel engine blocks, power generator sets, fuel injection manifolds, and heavy machinery housings.',
              'Hydraulic & Fluid Machinery: High-pressure hydraulic pumps, fluid power systems, lubricant filtration units, and fuel distribution lines.',
              'Industrial Process Utilities: Fuel oil headers, lubrication circuits, chemical service manifolds, and plant steam loops.',
            ],
          },
        ],
      },

      'txco-af-160': {
        title: 'TXCO AF-160 ACID',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'TXCO AF-160 Acid Data Sheet',
        sections: [
          {
            heading: 'TXCO AF-160 ACID GASKET',
            paragraphs: [
              'TXCO AF-160 Acid is a specialized chemical- and acid-resistant non-asbestos compressed fiber gasket engineered for high-integrity static sealing in aggressive fluid and gas environments. Formulated from premium high-tensile aramid fibers blended with performance-enhancing additives and a chemical-resistant elastomeric binder matrix (including high-grade NBR), it resists degradation, swelling, and embrittlement when exposed to acidic solutions and harsh process chemicals.',
            ],
          },
          {
            heading: 'KEY TECHNICAL HIGHLIGHTS',
            bullets: [
              'Acid & Chemical Defense: Engineered with specialized binders and additives to deliver exceptional chemical resistance against organic and inorganic acids, alkalis, and reactive process fluids.',
              'BS 7531 Grade-X Compliance: Fully meets Grade-X performance requirements, delivering high stress-retention capabilities, low seating torque demands, and superior creep relaxation resistance.',
              '100 Bar Pressure Containment: Handles working pressures up to 100 Bar (1450 PSI), providing a robust safety margin against gasket blowout and fugitive emissions in high-pressure chemical piping.',
              'Distinct Off-White Identification: Clean Off-White color profile ensures instant visual verification on the job site, preventing material misapplication in critical process lines.',
            ],
          },
          {
            heading: 'TECHNICAL SPECIFICATIONS',
            table: {
              headers: ['Specification Parameter', 'TXCO AF-160 Acid Gasket Performance'],
              rows: [
                { code: 'Maximum Operating Pressure', description: '100 Bar (10.0 MPa / ~1450 PSI)' },
                { code: 'Max Continuous Service Temp.', description: '250°C (482°F)' },
                { code: 'Max Short-Term Peak Temp.', description: '300°C (572°F)' },
                { code: 'Gasket Composition', description: 'Aramid Fibers + Specialized Additives + Chemical-Grade NBR Binder' },
                { code: 'Identity Colour', description: 'Off-White' },
                { code: 'Specification Compliance', description: 'BS 7531:2006 Grade-X / IS 17796:2022 Grade-X' },
              ],
            },
          },
          {
            heading: 'PRIMARY TARGET APPLICATIONS',
            bullets: [
              'Chemical & Petrochemical Processing: Transfer lines for dilute/moderate acids, alkaline wash headers, solvent circuits, and aggressive chemical process piping.',
              'Fertilizer & Pickling Operations: Acid dosing pumps, pickling bath piping manifolds, reaction vessels, and chemical storage tanks.',
              'Industrial Water & Effluent Care: Acidic wastewater treatment loops, neutralization systems, and hazardous chemical recovery units.',
            ],
          },
        ],
      },

      'txco-af-170': {
        title: 'TXCO AF-170',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'TXCO AF-170 Data Sheet',
        sections: [
          {
            heading: 'TXCO AF-170',
            paragraphs: [
              'TXCO AF-170 is an ultra-high-performance non-asbestos compressed fiber gasket engineered for the most demanding mechanical and thermal duties across critical industrial flange connections. Manufactured from an advanced multi-fiber matrix—blending high-tensile aramid, mineral, and carbon fibers with expanded graphite bound within a premium Hydrogenated Nitrile (HNBR) elastomer matrix—it delivers unrivaled torque retention, micro-sealability, and oxidation resistance. TXCO AF-170 is supplied in standard High-Pressure Non-Metallic and steel wire-mesh reinforced Metallic gasket configurations.',
            ],
          },
          {
            heading: 'KEY TECHNICAL HIGHLIGHTS',
            bullets: [
              'Advanced Carbon-Graphite Multi-Fiber Matrix: Fuses aramid, carbon, and mineral fibers with expanded graphite and HNBR rubber to provide extreme structural strength and virtually zero creep relaxation.',
              '200 Bar Ultra-Pressure Barrier: The Metallic variant incorporates high-tensile steel wire mesh insertion, raising hydraulic pressure containment up to 200 Bar (~2900 PSI) to prevent blowout under violent shockwaves.',
              'Extreme Thermal Envelope: Operates continuously at temperatures up to 425°C (Non-Metallic) and 525°C (Metallic), with short-term peak thermal surge capabilities reaching 650°C.',
              'BS 7531 Grade-X Certification: Delivers elite resistance against matrix crushing, bolt torque loss, thermal degradation, and chemical attack from oils, aggressive solvents, and volatile gases.',
            ],
          },
          {
            heading: 'TECHNICAL SPECIFICATIONS',
            table: {
              headers: ['Specification Parameter', 'TXCO AF-170 Non-Metallic Gasket', 'TXCO AF-170 Metallic Gasket'],
              rows: [
                { code: 'Maximum Operating Pressure', description: '160 Bar (16.0 MPa / ~2320 PSI)', thickness: '200 Bar (20.0 MPa / ~2900 PSI)' },
                { code: 'Max Continuous Service Temp.', description: '425°C', thickness: '525°C' },
                { code: 'Max Short-Term Peak Temp.', description: '600°C', thickness: '650°C' },
                { code: 'Max Continuous Steam Temp.', description: '450°C', thickness: '550°C' },
                { code: 'Gasket Composition', description: 'Aramid + Mineral + Carbon Fibers + Graphite + HNBR', thickness: 'Steel Wire Gauze + Multi-Fiber/Graphite/HNBR' },
                { code: 'Identity Colour & Finish', description: 'Black (Anti-Stick Finish)', thickness: 'Black with Anti-Stick Finish' },
                { code: 'Specification Compliance', description: 'BS 7531:2006 Grade-X', thickness: 'BS 7531:2006 Grade-X' },
              ],
            },
          },
          {
            heading: 'PRIMARY TARGET APPLICATIONS',
            bullets: [
              'Superheated Steam & Power Utilities: Ultra-high-pressure steam headers, boiler feed manifolds, steam turbines, and power plant main steam lines.',
              'Petrochemical & Chemical Refining: Hot oil circuits, organic solvents, gas processing units, fertilizer plants, and aggressive hydrocarbon headers.',
              'Heavy OEM & Internal Combustion: Heavy IC engine blocks, generator housings, automotive exhaust manifolds, shipbuilding propulsion piping, and high-duty pressure vessels.',
            ],
          },
        ],
      },

      'txco-af-190': {
        title: 'TXCO AF-190',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'TXCO AF-190 Data Sheet',
        sections: [
          {
            heading: 'TXCO AF-190',
            paragraphs: [
              'TXCO AF-190 is a severe-service non-asbestos compressed fiber gasket designed for multi-media sealing across extreme thermal and pressure environments. Engineered from a blend of premium synthetic aramid fibers, high-modulus carbon, and heat-dissipating graphite bound within a high-performance Hydrogenated Nitrile (HNBR) elastomer matrix, TXCO AF-190 delivers exceptional chemical resistance, minimal stress relaxation, and superior torque retention. It is available in standard Non-Metallic (Performance) and stainless steel wire-reinforced Metallic gasket configurations.',
            ],
          },
          {
            heading: 'KEY TECHNICAL HIGHLIGHTS',
            bullets: [
              'Aramid-Carbon-Graphite HNBR Matrix: Synergizes thermal-dissipating graphite, high-modulus carbon, and aramid fibers with an HNBR elastomer binder to prevent binder hardening and matrix degradation under severe thermal stress.',
              'Stainless Steel Wire Blowout Guard: The Metallic grade incorporates an embedded stainless steel wire mesh insertion, raising maximum pressure capability to 170 Bar (2465 PSI) for unmatched blowout security in high-impulse media lines.',
              'BS 7531 Grade-X Compliance: Fully meets BS 7531 Grade-X standards, providing low seating stress requirements and high creep-relaxation resistance across dynamic piping networks.',
              'Anti-Stick Surface Technology: Pre-treated with a factory-applied release coating to prevent gasket-to-flange bonding, simplifying cleanup during routine plant overhauls and preserving flange seating faces.',
            ],
          },
          {
            heading: 'TECHNICAL SPECIFICATIONS',
            table: {
              headers: ['Specification Parameter', 'TXCO AF-190 Performance (Non-Metallic)', 'TXCO AF-190 Metallic (Wire-Reinforced)'],
              rows: [
                { code: 'Maximum Operating Pressure', description: '150 Bar (15.0 MPa / ~2175 PSI)', thickness: '170 Bar (17.0 MPa / ~2465 PSI)' },
                { code: 'Max Continuous Service Temp.', description: '300°C (572°F)', thickness: '300°C (572°F)' },
                { code: 'Max Short-Term Peak Temp.', description: '500°C (932°F)', thickness: '500°C (932°F)' },
                { code: 'Gasket Composition', description: 'Aramid + Carbon + Graphite + HNBR Matrix', thickness: 'Stainless Steel Wire Gauze + Aramid/Carbon/Graphite/HNBR' },
                { code: 'Identity Colour & Finish', description: 'Dark Grey / Black (Anti-Stick Finish)', thickness: 'Graphited Black (Anti-Stick Finish)' },
                { code: 'Specification Compliance', description: 'BS 7531:2006 Grade-X / IS 17796:2022 Grade-X', thickness: 'BS 7531:2006 Grade-X / IS 17796:2022 Grade-X' },
              ],
            },
          },
          {
            heading: 'TARGET APPLICATIONS',
            bullets: [
              'Thermal & Power Infrastructure: Superheated steam headers, high-temperature heat exchangers, condensate recovery lines, and boiler equipment.',
              'Hydrocarbon & Petrochemical Processing: Fuel transport networks, hot oil loops, organic solvents, industrial gases, and synthetic refrigerants.',
              'Universal Industrial Machinery: High-duty centrifugal pumps, valve bonnet flanges, compressors, and severe-service process piping manifolds (except concentrated acids).',
            ],
          },
        ],
      },

      'non-asbestos-gaskets': {
        title: 'COMPRESSED FIBER GASKETS (STYLE SERIES)',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'Style Series Catalog',
        sections: [
          {
            heading: 'TXCO COMPRESSED FIBER (STYLE SERIES) GASKET RANGE',
            paragraphs: [
              'TXCO Style Series compressed jointing sheets and precision-cut gaskets are engineered for dependable static sealing across general utility, steam, oil, chemical and acid processing applications.',
              'Formulated in both non-metallic and wire-reinforced metallic variants to meet strict IS 2712 and international industrial standards.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
          {
            heading: 'STYLE SERIES GRADES SUMMARY',
            bullets: [
              'TXCO Style 11: IS 2712 Grade C utility jointing for water, low-pressure air, and general maintenance.',
              'TXCO Style 20: Medium-duty steam and general-purpose jointing up to 40 Bar and 415°C.',
              'TXCO Style 39: High-duty hydrocarbon and refinery gasket for fuels and distillates up to 100 Bar.',
              'TXCO Style 51: High-pressure steam and chemical gasket engineered for 150 Bar containment up to 550°C.',
              'TXCO Style 54 Super: Premium severe-service jointing handling up to 200 Bar pressure and 600°C temperatures.',
              'TXCO Style 55 Universal: High-density universal jointing for engine heads, high-impulse lines, and steam up to 225 Bar.',
              'TXCO Style 59 Oil: Specialized hydrocarbon, grease and solvent gasket resistant up to 160 Bar and 600°C.',
              'TXCO Style 60 Acid: IS 2712 Grade A/1 specialized acid-resistant jointing for organic and mineral acids up to 150 Bar.',
            ],
          },
        ],
      },

      'txco-style-11': {
        title: 'TXCO STYLE 11',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'TXCO Style 11 Data Sheet',
        sections: [
          {
            heading: 'TXCO STYLE 11',
            paragraphs: [
              'TXCO Style 11 is a versatile compressed asbestos fiber (CAF) gasket engineered for reliable static sealing in medium-duty industrial applications operating under low-to-moderate pressures and temperatures. Manufactured from processed asbestos fibers intimately bound with high-quality rubber compounds, it exhibits excellent conformability and sealing performance under light bolt-load conditions. TXCO Style 11 is available in standard Non-Metallic and steel wire-mesh reinforced Metallic gasket configurations, each finished with a smooth anti-stick graphite surface treatment.',
            ],
          },
          {
            heading: 'KEY TECHNICAL HIGHLIGHTS',
            bullets: [
              'Low Bolt-Load Sealability: High compressibility profile allows the gasket to deform efficiently under low torque, ensuring a tight seal on light-duty, cast iron, or slightly distorted flange surfaces.',
              'Steel-Wire Blowout Defense: The Metallic variant incorporates an embedded steel wire gauze matrix, elevating internal pressure resistance to 30 Bar (435 PSI) to protect against pressure spikes.',
              'Anti-Stick Surface Treatment: Factory-applied graphite release coating prevents gasket fusion to flange faces, protecting seating surfaces and reducing cleanup time during maintenance turnarounds.',
              'Dual-Grade Standard Compliance: Fully meets IS 2712-1971 Grade C and IS 2712-1998 Grade W/3 standards for general-purpose utility jointing.',
            ],
          },
          {
            heading: 'TECHNICAL SPECIFICATIONS',
            table: {
              headers: ['Specification Parameter', 'TXCO Style 11 Non-Metallic Gasket', 'TXCO Style 11 Metallic Gasket'],
              rows: [
                { code: 'Maximum Operating Pressure', description: '25 Bar (2.5 MPa / 362 PSI)', thickness: '30 Bar (3.0 MPa / 435 PSI)' },
                { code: 'Max Continuous Service Temp.', description: '270°C (486°F)', thickness: '300°C (572°F)' },
                { code: 'Gasket Composition', description: 'Chrysotile Asbestos Fibers + Elastomeric Binder', thickness: 'Steel Wire Mesh + Asbestos/Elastomer Matrix' },
                { code: 'Surface Coating & Finish', description: 'Smooth Anti-Stick Graphite Coating', thickness: 'Smooth Anti-Stick Graphite Coating' },
                { code: 'Specification Compliance', description: 'IS 2712-1971 Grade C / IS 2712-1998 Grade W/3', thickness: 'IS 2712-1971 Grade C / IS 2712-1998 Grade W/3' },
              ],
            },
          },
          {
            heading: 'PRIMARY TARGET APPLICATIONS',
            bullets: [
              'Utility & Low-Pressure Piping: Cold/hot water loops, low-pressure air lines, drainage manifolds, and inert gas service.',
              'Light Industrial Equipment: Cast iron valve flanges, pump casings, gearbox inspection hatches, and low-pressure fluid tanks.',
              'Plant Maintenance: Cost-effective general-purpose sealing across utility networks requiring low bolt torque.',
            ],
          },
        ],
      },

      'txco-style-20': {
        title: 'TXCO STYLE 20',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'TXCO Style 20 Data Sheet',
        sections: [
          {
            heading: 'TXCO STYLE 20',
            paragraphs: [
              'TXCO Style 20 is a medium-duty compressed asbestos fiber (CAF) gasket engineered for static sealing across general-purpose liquid, gas, and vapour systems. Formulated from processed chrysotile asbestos fibers bonded within a quality elastomeric binder matrix, it deforms effectively under low-to-moderate bolt torque to seal micro-imperfections on flange surfaces. Available in standard Non-Metallic Red/Graphited Black and steel wire-mesh reinforced Metallic configurations, TXCO Style 20 delivers balanced structural integrity and thermal endurance for plant utility maintenance.',
            ],
          },
          {
            heading: 'KEY TECHNICAL HIGHLIGHTS',
            bullets: [
              'Wire-Reinforced Steam Capability: The Metallic grade incorporates an embedded steel wire gauze insert that raises internal pressure containment to 40 Bar (580 PSI) and continuous thermal tolerance to 415°C, making it ideal for general-purpose steam and vapour manifolds.',
              'Low Bolt-Load Sealing: High compressibility profile achieves gas-tight seating stress under low bolt torque—ideal for cast iron, light-duty, or slightly worn flange faces.',
              'Anti-Stick Surface Coating: Factory-applied graphited release finish prevents gasket-to-metal fusion, preserving seating faces and speeding up cleanup during plant overhaul cycles.',
              'IS 2712 Compliance: Fully conforms to IS 2712-1971 Grade C and IS 2712-1998 Grade W/3 manufacturing specifications for medium-duty jointing.',
            ],
          },
          {
            heading: 'TECHNICAL SPECIFICATIONS',
            table: {
              headers: ['Specification Parameter', 'TXCO Style 20 Red Gasket (Non-Metallic)', 'TXCO Style 20 Metallic Gasket'],
              rows: [
                { code: 'Maximum Operating Pressure', description: '35 Bar (3.5 MPa / ~507 PSI)', thickness: '40 Bar (4.0 MPa / ~580 PSI)' },
                { code: 'Max Continuous Service Temp.', description: '380°C (716°F)', thickness: '415°C (779°F)' },
                { code: 'Gasket Core Architecture', description: 'Chrysotile Asbestos Fibers + Elastomeric Binder', thickness: 'Steel Wire Gauze + Asbestos/Elastomer Matrix' },
                { code: 'Identity Colour & Finish', description: 'Red or Graphited Black (Anti-Stick Finish)', thickness: 'Graphited Black (Anti-Stick Finish)' },
                { code: 'Special Sheet Dimensions', description: 'Up to 2000 mm x 4500 mm', thickness: 'Standard & Custom Cut Sizes' },
                { code: 'Specification Compliance', description: 'IS 2712-1971 Grade C / IS 2712-1998 Grade W/3', thickness: 'IS 2712-1971 Grade C / IS 2712-1998 Grade W/3' },
              ],
            },
          },
          {
            heading: 'PRIMARY TARGET APPLICATIONS',
            bullets: [
              'Steam & Vapour Lines: Medium-pressure steam headers, condensate return piping, and process heating vapour circuits (Metallic gasket recommended).',
              'General Industrial Utilities: Plant water distribution, low-pressure gas mains, compressed air lines, and drainage manifolds.',
              'Equipment Flanges: Cast iron valve bodies, centrifugal pump casings, gearbox covers, and low-pressure fluid storage tanks.',
            ],
          },
        ],
      },

      'txco-style-39': {
        title: 'TXCO STYLE 39',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'TXCO Style 39 Data Sheet',
        sections: [
          {
            heading: 'TXCO STYLE 39',
            paragraphs: [
              'TXCO Style 39 is a high-duty compressed asbestos fiber (CAF) gasket engineered to maintain static sealability under intense pressure and elevated thermal loads across refinery, petrochemical, and distillate processing applications. Formulated from select chrysotile asbestos fibers compounded with oil-resistant elastomeric binders, it delivers superior stress retention, high tensile strength, and resistance to hydrocarbon degradation. TXCO Style 39 is available in standard Non-Metallic and steel wire-mesh reinforced Metallic gasket configurations.',
            ],
          },
          {
            heading: 'KEY TECHNICAL HIGHLIGHTS',
            bullets: [
              'Hydrocarbon & Solvent Resistance: Formulated with high-grade elastomeric binders that prevent fluid penetration, structural breakdown, and gasket swelling in distillate and refinery lines.',
              'Steel-Wire Blowout Security: The Metallic variant incorporates an embedded steel wire mesh gauze, raising pressure containment to 100 Bar (1450 PSI) to guard against dynamic pressure spikes.',
              'Elevated Thermal Capability: Engineered for continuous operational temperatures reaching 440°C in non-metallic and 480°C in metallic variants without significant bolt torque loss.',
              'IS 2712 Grade O/1 Compliance: Fully complies with IS 2712-1971 Grade O/1 and IS 2712-1998 Grade O/1 standards for oil-resistant compressed jointing.',
            ],
          },
          {
            heading: 'TECHNICAL SPECIFICATIONS',
            table: {
              headers: ['Specification Parameter', 'TXCO Style 39 Non-Metallic Gasket', 'TXCO Style 39 Metallic Gasket'],
              rows: [
                { code: 'Maximum Operating Pressure', description: '80 Bar (8.0 MPa / ~1160 PSI)', thickness: '100 Bar (10.0 MPa / ~1450 PSI)' },
                { code: 'Max Continuous Service Temp.', description: '440°C (824°F)', thickness: '480°C (896°F)' },
                { code: 'Gasket Core Architecture', description: 'Chrysotile Asbestos + Oil-Resistant Elastomeric Binder', thickness: 'Steel Wire Gauze + Asbestos/Elastomer Matrix' },
                { code: 'Identity Colour & Finish', description: 'Dark Grey or Graphited Black (Anti-Stick)', thickness: 'Graphited Black with Anti-Stick Finish' },
                { code: 'Specification Compliance', description: 'IS 2712-1971 Grade O/1 / IS 2712-1998 Grade O/1', thickness: 'IS 2712-1971 Grade O/1 / IS 2712-1998 Grade O/1' },
              ],
            },
          },
          {
            heading: 'PRIMARY TARGET APPLICATIONS',
            bullets: [
              'Petrochemical & Refinery Systems: Catalytic cracking units, fuel oil manifolds, distillate transport lines, and heavy hydrocarbon headers.',
              'High-Thermal Process Utilities: Hot thermal fluid loops, superheated transfer circuits, and high-temperature oil pipelines.',
              'Heavy Process Machinery: High-pressure oil pumps, compressor head flanges, heat exchangers, and refinery valves.',
            ],
          },
        ],
      },

      'txco-style-51': {
        title: 'TXCO STYLE 51',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'TXCO Style 51 Data Sheet',
        sections: [
          {
            heading: 'TXCO STYLE 51',
            paragraphs: [
              'TXCO Style 51 is a premium high-pressure, high-temperature compressed asbestos fiber (CAF) jointing sheet engineered for severe industrial services. Formulated from premium grade chrysotile fibers and heat-resistant elastomeric binders, it delivers dependable sealing in superheated steam, petrochemical, and power generation lines. Available in standard Non-Metallic and steel wire-mesh reinforced Metallic variants.',
            ],
          },
          {
            heading: 'KEY TECHNICAL HIGHLIGHTS',
            bullets: [
              'High Pressure Containment: Handles continuous operational pressures up to 130 Bar (Non-Metallic) and 150 Bar (Metallic).',
              'Thermal Endurance: Continuous operating temperature up to 510°C (Non-Metallic) and 550°C (Metallic) with peak surge capabilities.',
              'Anti-Stick Graphited Finish: Factory-treated release layer prevents gasket adhesion to flange seating faces.',
              'IS 2712 Grade W/1 Compliance: Fully complies with IS 2712-1971 Grade W/1 and IS 2712-1998 Grade W/1 standards for high-pressure steam jointing.',
            ],
          },
          {
            heading: 'TECHNICAL SPECIFICATIONS',
            table: {
              headers: ['Specification Parameter', 'TXCO Style 51 Non-Metallic Gasket', 'TXCO Style 51 Metallic Gasket'],
              rows: [
                { code: 'Maximum Operating Pressure', description: '130 Bar (13.0 MPa / ~1885 PSI)', thickness: '150 Bar (15.0 MPa / ~2175 PSI)' },
                { code: 'Max Continuous Service Temp.', description: '510°C (950°F)', thickness: '550°C (1022°F)' },
                { code: 'Gasket Core Architecture', description: 'Grade Chrysotile Asbestos + Heat-Resistant Binder', thickness: 'Steel Wire Gauze + Asbestos/Binder Matrix' },
                { code: 'Identity Colour & Finish', description: 'Dark Grey or Graphited Black (Anti-Stick)', thickness: 'Graphited Black with Anti-Stick Finish' },
                { code: 'Specification Compliance', description: 'IS 2712-1971 Grade W/1 / IS 2712-1998 Grade W/1', thickness: 'IS 2712-1971 Grade W/1 / IS 2712-1998 Grade W/1' },
              ],
            },
          },
          {
            heading: 'PRIMARY TARGET APPLICATIONS',
            bullets: [
              'Superheated Steam & Power Utilities: High-pressure boiler feed lines, main steam headers, and steam turbine flanges.',
              'Petrochemical Processing: High-temperature hydrocarbon transfer, hot thermal fluid loops, and refinery manifolds.',
              'Heavy Process Machinery: High-pressure heat exchangers, reactor flanges, and high-duty valve body joints.',
            ],
          },
        ],
      },

      'txco-style-54': {
        title: 'TXCO STYLE 54 SUPER',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'TXCO Style 54 Data Sheet',
        sections: [
          {
            heading: 'TXCO STYLE 54 SUPER',
            paragraphs: [
              'TXCO Style 54 Super is an ultra-high-pressure and severe-temperature compressed fiber jointing sheet engineered for the most critical industrial services. Manufactured from select high-grade chrysotile fibers and reinforced elastomeric binders, it provides unmatched blowout resistance up to 200 Bar and continuous thermal resistance to 550°C.',
            ],
          },
          {
            heading: 'KEY TECHNICAL HIGHLIGHTS',
            bullets: [
              '200 Bar Pressure Tolerance: Withstands extreme internal hydraulic and pneumatic pressures in dynamic pipelines.',
              'Superior Torque Retention: High-density matrix resists creep relaxation and bolt load loss under cyclic thermal conditions.',
              'Wire-Reinforced Metallic Variant: Reinforced with high-tensile steel wire gauze to eliminate gasket blowout risks.',
              'IS 2712 Grade W/1 Compliance: Meets and exceeds IS 2712 Grade W/1 requirements for severe-duty jointing.',
            ],
          },
          {
            heading: 'TECHNICAL SPECIFICATIONS',
            table: {
              headers: ['Specification Parameter', 'TXCO Style 54 Super Non-Metallic', 'TXCO Style 54 Super Metallic'],
              rows: [
                { code: 'Maximum Operating Pressure', description: '150 Bar (15.0 MPa / ~2175 PSI)', thickness: '200 Bar (20.0 MPa / ~2900 PSI)' },
                { code: 'Max Continuous Service Temp.', description: '550°C (1022°F)', thickness: '550°C (1022°F)' },
                { code: 'Gasket Core Architecture', description: 'High-Density Chrysotile + Engineered Elastomer', thickness: 'Steel Wire Mesh + High-Density Asbestos Matrix' },
                { code: 'Identity Colour & Finish', description: 'Dark Grey (Anti-Stick Finish)', thickness: 'Graphited Black with Anti-Stick Finish' },
                { code: 'Specification Compliance', description: 'IS 2712-1971 Grade W/1 / IS 2712-1998 Grade W/1', thickness: 'IS 2712-1971 Grade W/1 / IS 2712-1998 Grade W/1' },
              ],
            },
          },
          {
            heading: 'PRIMARY TARGET APPLICATIONS',
            bullets: [
              'Extreme Thermal & Steam Headers: Supercritical boiler feed piping, high-pressure steam manifolds, and turbine joints.',
              'Refinery & Chemical Reactors: Severe-service hydrocarbon reactors, high-temperature synthesis columns, and hot gas headers.',
            ],
          },
        ],
      },

      'txco-style-55': {
        title: 'TXCO STYLE 55 UNIVERSAL',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'TXCO Style 55 Data Sheet',
        sections: [
          {
            heading: 'TXCO STYLE 55 UNIVERSAL',
            paragraphs: [
              'TXCO Style 55 Universal is a premium compressed fiber gasket engineered for universal static sealing across engine heads, heavy machinery, high-vibration piping, and superheated steam lines. Reinforced with stainless steel wire mesh in the metallic grade, it withstands working pressures up to 225 Bar and continuous temperatures to 600°C.',
            ],
          },
          {
            heading: 'KEY TECHNICAL HIGHLIGHTS',
            bullets: [
              'Stainless Steel Gauze Core (Metallic Variant): Reinforced with a stainless steel wire mesh insertion (minimum 18 mesh x 30 gauge), elevating working pressure tolerance to 225 Bar (3260 PSI) to eliminate blowout risks.',
              'Extreme Thermal Envelope: Continuous service capability reaches up to 600°C (1112°F) without binder degradation or torque loss.',
              'Anti-Friction Graphited Coating: Pre-treated with a factory-applied anti-stick graphited release layer that prevents metal-to-gasket fusion.',
            ],
          },
          {
            heading: 'TECHNICAL SPECIFICATIONS',
            table: {
              headers: ['Operating Parameter', 'TXCO Style 55 Universal (Non-Metallic)', 'TXCO Style 55 Metallic (Reinforced)'],
              rows: [
                { code: 'Maximum Operating Pressure', description: '200 Bar (20.0 MPa / 2900 PSI)', thickness: '225 Bar (22.5 MPa / 3260 PSI)' },
                { code: 'Max Continuous Service Temp.', description: '600°C (1112°F)', thickness: '600°C (1112°F)' },
                { code: 'Internal Reinforcement', description: 'Standard High-Density Matrix', thickness: 'Min. 18 Mesh x 30 Gauge Stainless Steel Wire' },
                { code: 'Identity Colour & Finish', description: 'Dark Grey', thickness: 'Graphited Black with Anti-Stick Finish' },
                { code: 'Media Suitability', description: 'Steam, Vapour, Industrial Gases, Hydrocarbons', thickness: 'High-Temp Steam, Vapour, Oil Loops (Excl. Acids)' },
              ],
            },
          },
          {
            heading: 'PRIMARY TARGET APPLICATIONS',
            bullets: [
              'Engine & Compressor Systems: Engine cylinder head joints, heavy-duty diesel generators, and high-vibration gas compressor headers.',
              'Steam & Power Equipment: High-pressure steam boilers, superheated steam manifolds, turbine housing flanges, and main steam lines.',
              'High-Impulse Machinery: Industrial oil distribution circuits, vibration-prone process piping, and narrow-profile valve flanges.',
            ],
          },
        ],
      },

      'txco-style-59': {
        title: 'TXCO STYLE 59 OIL',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'TXCO Style 59 Oil Data Sheet',
        sections: [
          {
            heading: 'TXCO STYLE 59 OIL',
            paragraphs: [
              'TXCO Style 59 Oil is a high-performance compressed fiber jointing sheet engineered specifically for demanding, elevated-temperature, and high-pressure fluid applications. Formulated to withstand aggressive industrial fluids—including fuel oils, synthetic lubricants, greases, refined petrochemicals, and organic solvents—it maintains high torque retention and dimensional stability under severe mechanical loads. TXCO Style 59 Oil Premium is available in standard Non-Metallic and steel wire-mesh reinforced Metallic gasket configurations.',
            ],
          },
          {
            heading: 'KEY TECHNICAL HIGHLIGHTS',
            bullets: [
              'Hydrocarbon & Solvent Resistance: Formulated with high-density oil-resistant binders that guard against structural degradation, binder leaching, and volumetric swelling in solvent and petroleum loops.',
              'Steel-Wire Blowout Security: The Metallic variant features an embedded high-tensile steel wire mesh insertion, boosting pressure containment capability to 160 Bar (2320 PSI) to mitigate risk during pressure surges.',
              'High Thermal Endurance: Continuous service rating reaches up to 550°C (1022°F) in non-metallic variants and 600°C (1112°F) in wire-reinforced metallic variants without thermal matrix breakdown.',
              'Anti-Stick Graphite Finish: Pre-treated with a smooth factory-applied graphited release coating to prevent gasket-to-flange adhesion, protecting flange faces and speeding up overhaul schedules.',
            ],
          },
          {
            heading: 'TECHNICAL SPECIFICATIONS',
            table: {
              headers: ['Specification Parameter', 'TXCO Style 59 Oil Premium (Non-Metallic)', 'TXCO Style 59 Oil Premium Metallic'],
              rows: [
                { code: 'Maximum Operating Pressure', description: '150 Bar (15.0 MPa / 2175 PSI)', thickness: '160 Bar (16.0 MPa / 2320 PSI)' },
                { code: 'Max Continuous Service Temp.', description: '550°C (1022°F)', thickness: '600°C (1112°F)' },
                { code: 'Internal Reinforcement', description: 'Standard High-Density Matrix', thickness: 'Steel Wire Gauze Insertion' },
                { code: 'Identity Colour & Finish', description: 'Dark Grey', thickness: 'Dark Grey / Graphited Black (Anti-Stick)' },
                { code: 'Media Compatibility', description: 'Oils, Greases, Lubricants, Solvents, Petrochemicals', thickness: 'Heavy Hydrocarbons, High-Temp Solvents, Lube Lines' },
              ],
            },
          },
          {
            heading: 'PRIMARY TARGET APPLICATIONS',
            bullets: [
              'Petrochemical & Oil Refining: Solvent extraction plants, high-temperature fuel oil headers, lube oil loops, and refined hydrocarbon piping.',
              'Industrial Chemical Processing: Organic solvent transport, thermal fluid heating loops, grease delivery manifolds, and distillate process lines.',
              'Heavy Industrial Machinery: High-pressure hydraulic systems, gearbox housings, turbine lubrication circuits, and industrial oil pumps.',
            ],
          },
        ],
      },

      'txco-style-60': {
        title: 'TXCO STYLE 60 ACID',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'TXCO Style 60 Acid Data Sheet',
        sections: [
          {
            heading: 'TXCO STYLE 60 ACID',
            paragraphs: [
              'TXCO Style 60 Acid is a specialized compressed jointing sheet engineered specifically to handle aggressive acid streams and highly corrosive chemical media in chemical processing industries. Formulated from acid-resistant chrysotile fibers combined with chemically inert elastomeric binders, it maintains dependable bolt loading and structural integrity without suffering binder attack or micro-porosity leaks over extended service life.',
            ],
          },
          {
            heading: 'KEY TECHNICAL HIGHLIGHTS',
            bullets: [
              'Aggressive Acid Resistance: Specially compounded matrix resists chemical breakdown when exposed to mineral acids, organic acids, and acidic process reagents.',
              'High-Pressure Reliability: Sustains continuous operational pressures up to 150 Bar (2175 PSI) without suffering radial deformation or edge extrusion under flange torque.',
              'IS 2712 Grade A/1 Compliance: Manufactured in strict compliance with IS 2712-1971 Grade A/1 standards for acid-resistant compressed asbestos jointing sheets.',
              'Visual Line Verification: Supplied in a distinct Cream/Light Grey color scheme to enable rapid visual identification by maintenance crews, preventing accidental misapplication in chemical piping networks.',
            ],
          },
          {
            heading: 'TECHNICAL SPECIFICATIONS',
            table: {
              headers: ['Specification Parameter', 'TXCO Style 60 Acid Gasket'],
              rows: [
                { code: 'Maximum Operating Pressure', description: '150 Bar (15.0 MPa / 2175 PSI)' },
                { code: 'Max Continuous Service Temp.', description: '210°C (410°F)' },
                { code: 'Gasket Core Architecture', description: 'Acid-Resistant Fibers + Inert Elastomeric Binder' },
                { code: 'Identity Colour', description: 'Cream / Light Grey' },
                { code: 'Specification Compliance', description: 'IS 2712-1971 Grade A/1' },
                { code: 'Media Suitability', description: 'Organic Acids, Mineral Acids, Corrosive Chemicals, Acidic Gases' },
              ],
            },
          },
          {
            heading: 'PRIMARY TARGET APPLICATIONS',
            bullets: [
              'Chemical Processing Plants (CPI): Acid transfer lines, chemical reactor flanges, acid recycling loops, and neutralization manifolds.',
              'Fertilizer & Petrochemical Facilities: Sulfuric acid, phosphoric acid, and nitric acid dosing systems and acid byproduct transport piping.',
              'Industrial Processing Equipment: Acid storage tank hatches, chemical metering pumps, pickling line piping, and glass-lined equipment flanges.',
            ],
          },
        ],
      },
    },
  },

  // ==========================================
  // 4. GASKETS -> Steel-Inserted Gaskets (Page 3 & 23)
  // ==========================================
  'steel-inserted-gaskets': {
    parentCategoryTitle: 'GASKETS',
    parentCategoryHref: '/products/gaskets',
    subcategoryTitle: 'Steel-Inserted Gaskets',
    productsList: [
      { id: 'about-steel-inserted-gaskets', title: 'STEEL-INSERTED GASKETS OVERVIEW', downloadTitle: 'Steel-Inserted Gaskets Catalog' },
      { id: 'rubber-inserted', title: 'STEEL INSERT - RUBBER GASKETS', downloadTitle: 'Steel-Inserted Rubber Gaskets' },
      { id: 'graphite-inserted', title: 'STEEL INSERT - GRAPHITE GASKETS', downloadTitle: 'Steel-Inserted Graphite Gaskets' },
    ],
    productDetails: {
      'about-steel-inserted-gaskets': {
        title: 'STEEL-INSERTED GASKETS',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'Steel-Inserted Gaskets Catalog',
        sections: [
          {
            heading: 'STEEL-INSERTED GASKETS OVERVIEW',
            paragraphs: [
              'Steel-Inserted Gaskets combine the compressibility and surface conformity of soft sealing materials with the structural rigidity and blowout resistance of an internal metallic reinforcement core.',
              'The embedded steel core (tanged, solid, or wire mesh) provides dimensional stability, facilitates easy handling and installation, and prevents gasket blowout under high internal pressure surges.',
            ],
            bullets: [
              'Rubber-Inserted Gaskets: Incorporate an internal steel core encapsulated in elastomeric rubber (NBR, EPDM, Neoprene, FKM) for utility and water lines.',
              'Graphite-Inserted Gaskets: Feature flexible exfoliated graphite mechanically clinched or bonded to a 316 stainless steel tanged/flat core for high-temperature steam and hydrocarbon duties.',
            ],
          },
        ],
      },
      'rubber-inserted': {
        title: 'STEEL INSERT - RUBBER GASKETS',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'Steel-Inserted Rubber Gaskets',
        sections: [
          {
            heading: 'STEEL INSERT - RUBBER GASKETS',
            paragraphs: [
              'Rubber Gaskets combine a lens-shaped elastomeric sealing body with an internal steel reinforcement ring, creating a robust composite sealing element for demanding flange applications.',
            ],
            bullets: [
              'The rubber covering is firmly vulcanised: To the steel insert, forming an integrated structure with high mechanical stability.',
              'The steel insert improves: Blow-out resistance and dimensional stability under pressure.',
              'The lens-shaped profile concentrates: Contact pressure at the sealing area, enhancing sealing performance.',
              'The elastomer provides flexibility: And surface conformity, helping accommodate minor flange irregularities.',
              'The composite construction is suitable: For applications requiring reliable sealing, mechanical strength and resistance to pressure loading.',
              'Rubber compound and steel grade: Can be selected according to the process medium, pressure, temperature and service environment.',
            ],
          },
        ],
      },
      'graphite-inserted': {
        title: 'STEEL INSERT - GRAPHITE GASKETS',
        image: '/images/product-detials-images/Graphite-Gasketing-Sheet.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'Steel-Inserted Graphite Gaskets',
        sections: [
          {
            heading: 'STEEL INSERT - GRAPHITE GASKETS',
            paragraphs: [
              'Steel Insert Graphite Gaskets combine expanded flexible graphite with a metallic reinforcement core, providing a robust sealing element for demanding flange applications. The steel insert improves mechanical strength, rigidity and resistance to blowout, while the graphite conforms to mating surfaces to create an effective seal.',
            ],
            bullets: [
              'Expanded graphite conforms to mating surfaces: And provides excellent sealing, thermal stability and chemical resistance.',
              'The steel insert improves rigidity: Dimensional stability and resistance to blowout during pressure and temperature cycling.',
              'Suitable for high-pressure: High-temperature and thermal cycling applications.',
              'Offers excellent resistance to: Steam, hot water, gases and many process fluids.',
              'Free from resins: Impregnations, organic binders and fibre fillers.',
              'Suitable for: Oil & gas, petrochemical, refining, chemical and power industries, where dependable sealing and long service life are required.',
            ],
          },
        ],
      },
    },
  },

  // ==========================================
  // 5. PLUG GASKETS (Page 3)
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
        image: '/images/product-detials-images/Special-Metal-Gaskets.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'Plug Gaskets Catalog',
        sections: [
          {
            heading: 'PLUG GASKETS',
            paragraphs: [
              'Plug Gaskets are sealing elements designed to provide a reliable seal between a plug and its mating surface, preventing leakage of fluids or gases in industrial equipment and piping systems.',
            ],
            bullets: [
              'Provide secure sealing: Under varying pressure and temperature conditions.',
              'Available in suitable: Metallic and non-metallic materials based on the application.',
              'Material selection can be matched to: Process media, chemical exposure and operating conditions.',
              'Designed for simple installation: And replacement, helping reduce maintenance downtime.',
              'Suitable for applications requiring: Reliable containment and resistance to pressure fluctuations, temperature changes and corrosive environments.',
              'Commonly used across: Oil & gas, petrochemical, chemical, refining and general process industries.',
            ],
          },
        ],
      },
    },
  },

  // ==========================================
  // 6. FLANGES (Pages 43–48)
  // ==========================================
  'flanges': {
    parentCategoryTitle: 'PRODUCTS',
    parentCategoryHref: '/products',
    subcategoryTitle: 'Flanges',
    productsList: [
      { id: 'about-flanges', title: 'ABOUT INDUSTRIAL FLANGES', downloadTitle: 'Industrial Flanges Catalog' },
      { id: 'weld-neck-flanges', title: 'WELD NECK FLANGES', downloadTitle: 'Weld Neck Flanges' },
      { id: 'slip-on-flanges', title: 'SLIP-ON FLANGES', downloadTitle: 'Slip-On Flanges' },
      { id: 'blind-flanges', title: 'BLIND FLANGES', downloadTitle: 'Blind Flanges' },
      { id: 'socket-weld-flanges', title: 'SOCKET WELD FLANGES', downloadTitle: 'Socket Weld Flanges' },
      { id: 'lap-joint-flanges', title: 'LAP JOINT FLANGES', downloadTitle: 'Lap Joint Flanges' },
      { id: 'threaded-screwed-flanges', title: 'THREADED (SCREWED) FLANGES', downloadTitle: 'Threaded Flanges' },
      { id: 'orifice-flanges', title: 'ORIFICE FLANGES', downloadTitle: 'Orifice Flanges' },
      { id: 'custom-flanges', title: 'CUSTOM FLANGES', downloadTitle: 'Custom Flanges' },
    ],
    productDetails: {
      'about-flanges': {
        title: 'TXCO INDUSTRIAL FLANGES',
        image: '/images/product-detials-images/flanges-1.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'Industrial Flanges Catalog',
        sections: [
          {
            heading: 'TXCO INDUSTRIAL FLANGES',
            paragraphs: [
              'A flange is a mechanical component used to create a bolted, detachable connection between piping and equipment such as pipes, valves, pumps, pressure vessels, heat exchangers and other process equipment.',
              'A typical flanged joint consists of a flange, gasket, bolting and mating flange. The flanges provide the mechanical connection and transmit the required bolt load, while the gasket is compressed between the mating faces to create a pressure-tight seal.',
              'Reliable flange performance depends on material, dimensions, pressure class, facing, surface finish, bore and bolt-hole accuracy, RTJ groove geometry where applicable, gasket compatibility and operating conditions.',
            ],
          },
          {
            heading: 'FLANGE FACING TYPES',
            table: {
              headers: ['Face Type', 'Description', 'Typical Application'],
              rows: [
                { code: 'RF', description: 'Raised Face', thickness: 'General industrial and process applications' },
                { code: 'FF', description: 'Flat Face', thickness: 'Selected equipment and piping applications' },
                { code: 'RTJ', description: 'Ring Type Joint', thickness: 'High-pressure and high-temperature applications' },
              ],
            },
          },
          {
            heading: 'STANDARDS WE FOLLOW',
            table: {
              headers: ['Standard', 'Application'],
              rows: [
                { code: 'ASME B16.5', description: 'Pipe Flanges and Flanged Fittings (NPS 1/2" through NPS 24)' },
                { code: 'ASME B16.47', description: 'Large-Diameter Steel Flanges (NPS 26 through NPS 60)' },
                { code: 'ASME B16.48', description: 'Line Blanks (Spectacle Blinds, Spades and Spacers)' },
                { code: 'API 6A', description: 'Wellhead and Christmas Tree Equipment Flanges' },
                { code: 'MSS SP-44', description: 'Steel Pipeline Flanges' },
                { code: 'EN Standards', description: 'Applicable European requirements (EN 1092-1)' },
                { code: 'DIN Standards', description: 'Applicable German industrial flange requirements' },
                { code: 'JIS Standards', description: 'Applicable Japanese industrial standards' },
                { code: 'BS Standards', description: 'Applicable British flange standards' },
              ],
            },
          },
          {
            heading: 'FLANGE MATERIALS',
            table: {
              headers: ['Material Group', 'Typical Grades / Materials'],
              rows: [
                { code: 'Austenitic Stainless Steel', description: 'F304, F304L, F316, F316L' },
                { code: 'High-Temperature Stainless Steel', description: 'F321, F347, F347H' },
                { code: 'Duplex Stainless Steel', description: 'UNS S31803, UNS S32205 / 2205' },
                { code: 'Super Duplex Stainless Steel', description: 'UNS S32750, UNS S32760 / 2507' },
                { code: 'Nickel Alloys', description: 'Inconel 600, 625, 718' },
                { code: 'Nickel-Iron-Chromium Alloys', description: 'Incoloy 800, 800H, 800HT, 825' },
                { code: 'Nickel-Copper Alloys', description: 'Monel grades' },
                { code: 'Special Alloys', description: 'Alloy 20 and other specified alloys' },
              ],
              footnote: 'Carbon steel flange manufacturing is not part of TXCO standard flange range. TXCO focuses on corrosion-resistant and high-performance alloys.',
            },
          },
        ],
      },

      'weld-neck-flanges': {
        title: 'WELD NECK FLANGES',
        image: '/images/product-detials-images/flanges-1.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'Weld Neck Flanges Catalog',
        sections: [
          {
            heading: 'WELD NECK FLANGES — HIGH-INTEGRITY FLANGES FOR CRITICAL SERVICE',
            paragraphs: [
              'Weld Neck Flanges have a long, tapered hub and are connected to the pipe by butt welding. The tapered hub provides a gradual transition between the flange and pipe and helps distribute stresses at the flange-to-pipe connection. The bore can be matched to the pipe bore to maintain a smooth flow path and reduce turbulence and localized erosion.',
            ],
          },
          {
            heading: 'TYPICAL APPLICATIONS',
            bulletsAsHeadings: true,
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
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'Slip-On Flanges Catalog',
        sections: [
          {
            heading: 'SLIP-ON FLANGES — PRACTICAL FLANGE CONNECTIONS FOR INDUSTRIAL PIPING',
            paragraphs: [
              'Slip-On Flanges fit over the outside diameter of the pipe and are normally welded internally and externally. They offer a practical and economical connection where the service conditions permit their use. They are commonly selected for general industrial and utility piping.',
            ],
          },
          {
            heading: 'TYPICAL APPLICATIONS',
            bulletsAsHeadings: true,
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
        image: '/images/product-detials-images/flanges-1.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'Blind Flanges Catalog',
        sections: [
          {
            heading: 'BLIND FLANGES — POSITIVE CLOSURE AND MECHANICAL ISOLATION',
            paragraphs: [
              'A Blind Flange is a solid flange with bolt holes but no central bore. It is used to close the end of a piping system, valve, pressure vessel or equipment nozzle. Blind flanges provide positive isolation and allow a connection to be reopened for inspection, maintenance, testing or future expansion.',
            ],
          },
          {
            heading: 'TYPICAL APPLICATIONS',
            bulletsAsHeadings: true,
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
        image: '/images/product-detials-images/flanges-2.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'Socket Weld Flanges Catalog',
        sections: [
          {
            heading: 'SOCKET WELD FLANGES — COMPACT FLANGES FOR SMALL-BORE PIPING',
            paragraphs: [
              'Socket Weld Flanges have a machined socket into which the pipe is inserted before welding. They are primarily used for smaller-diameter piping and are suitable for selected high-pressure applications within the applicable design rating.',
            ],
          },
          {
            heading: 'TYPICAL APPLICATIONS',
            bulletsAsHeadings: true,
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
        image: '/images/product-detials-images/flanges-1.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'Lap Joint Flanges Catalog',
        sections: [
          {
            heading: 'LAP JOINT FLANGES — FLEXIBLE ALIGNMENT FOR MAINTENANCE-INTENSIVE SYSTEMS',
            paragraphs: [
              'Lap Joint Flanges are used with a compatible Stub End. The pipe is welded to the stub end while the flange remains free to rotate around it, allowing convenient bolt-hole alignment during assembly. This configuration is useful where frequent dismantling or maintenance is required.',
            ],
          },
          {
            heading: 'TYPICAL APPLICATIONS',
            bulletsAsHeadings: true,
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
        image: '/images/product-detials-images/flanges-2.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'Threaded Flanges Catalog',
        sections: [
          {
            heading: 'THREADED (SCREWED) FLANGES — FLANGED CONNECTIONS WITHOUT WELDING',
            paragraphs: [
              'Threaded Flanges, also known as Screwed Flanges, have internal threads that engage with the external threads of the pipe. They can be installed without flange-to-pipe welding and are used for selected applications where welding is impractical, undesirable or restricted. They are generally considered for selected low-pressure or utility services, subject to design requirements.',
            ],
          },
          {
            heading: 'TYPICAL APPLICATIONS',
            bulletsAsHeadings: true,
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
        image: '/images/product-detials-images/flanges-1.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'Orifice Flanges Catalog',
        sections: [
          {
            heading: 'ORIFICE FLANGES — PRECISION FLANGES FOR FLOW MEASUREMENT',
            paragraphs: [
              'Orifice Flanges are specialized flange assemblies used in differential-pressure flow measurement. They incorporate provisions for pressure tapping on either side of an orifice plate. The pressure differential across the orifice is used to determine the process-fluid flow rate.',
            ],
          },
          {
            heading: 'TYPICAL APPLICATIONS',
            bulletsAsHeadings: true,
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
        title: 'ENGINEERED & CUSTOM FLANGES',
        image: '/images/product-detials-images/flanges-2.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'Custom Flanges Catalog',
        sections: [
          {
            heading: 'ENGINEERED & CUSTOM FLANGES',
            paragraphs: [
              'TXCO manufactures custom-made flanges to customer drawings and project-specific requirements where standard configurations do not meet the application.',
              'Custom flange solutions can be developed for special dimensions, bore configurations, bolt patterns, thicknesses, facings, RTJ grooves, reducing arrangements, internal bevels and specified stainless, duplex, super duplex or nickel-based alloys.',
              'Each custom requirement is reviewed against the approved drawing, applicable ASME/API or other governing standard, material specification and inspection requirements before manufacture.',
            ],
          },
        ],
      },
    },
  },

  // ==========================================
  // 7. MONOLITHIC INSULATION JOINTS (Pages 48–50)
  // ==========================================
  'monolithic-insulation-joints': {
    parentCategoryTitle: 'PRODUCTS',
    parentCategoryHref: '/products',
    subcategoryTitle: 'Monolithic Insulation Joints',
    productsList: [
      { id: 'monolithic-insulation-joints', title: 'MONOLITHIC INSULATION JOINTS', downloadTitle: 'Monolithic Insulation Joints Catalog' },
    ],
    productDetails: {
      'monolithic-insulation-joints': {
        title: 'MONOLITHIC INSULATION JOINTS',
        image: '/images/product-detials-images/product-details-page-banner.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'Monolithic Insulation Joints Catalog',
        sections: [
          {
            heading: 'MONOLITHIC INSULATION JOINTS',
            paragraphs: [
              'Definitive Dielectric Isolation & Structural Integrity for Buried and Aboveground Pipelines.',
              'Engineered as solid-state, fully welded structural forgings, TXCO Monolithic Insulation Joints deliver permanent Cathodic Protection (CP) isolation and zero-leakage fluid containment across critical pipeline networks. By integrating high-strength forged steel components with advanced dielectric insulation into a single boltless unit, TXCO monolithic joints eliminate field maintenance, withstand aggressive soil loading, and outlast the pipeline itself.',
            ],
            showAssemblyDiagram: true,
            diagramType: 'weld-lip',
          },
          {
            heading: 'ENGINEERING HIGHLIGHTS',
            bullets: [
              'Direct-Burial & Maintenance-Free: Encased in factory-applied 100% solids polyurethane or liquid epoxy coatings, eliminating concrete inspection vaults and bolt retorquing.',
              'Encapsulated Dual-Seal System: Twin primary seals (FKM, HNBR, or spring-energized ePTFE) housed inside a void-free dielectric cavity protect sealing elements from fluid erosion and explosive decompression.',
              'Full Bending Moment Resistance: High-strength forged bodies (ASTM A694 / A350 LF2) match or exceed line-pipe yield strength, easily handling ground settlement, thermal growth, and soil overburden.',
              'Guaranteed Dielectric Barrier: High-density G10/G11 insulating rings ensure ≥ 100 MΩ electrical resistance and ≥ 5 kV dielectric breakdown strength.',
            ],
          },
          {
            heading: 'ENGINEERING SPECIFICATIONS & STANDARDS',
            table: {
              headers: ['Performance Parameter', 'Technical Specification'],
              rows: [
                {
                  code: 'Applicable Design Standards',
                  description: 'ASME B31.4, ASME B31.8, ASME Sec VIII Div 1/2, API 6D, NACE SP0169, ISO 15589-1',
                },
                {
                  code: 'Nominal Sizes & Ratings',
                  description: 'NPS 2" to 60" (DN50 – DN1500) | ASME Class 150 to 2500 / API 2,000 to 10,000 PSI',
                },
                {
                  code: 'Forging Metallurgy',
                  description: 'ASTM A694 (F42 through F70), ASTM A105, ASTM A350 LF2, Duplex S31803 / Super Duplex S32750',
                },
                {
                  code: 'Dielectric Performance',
                  description: 'Electrical Resistance ≥ 100 MΩ at 1,000V DC; Dielectric Breakdown Strength ≥ 5 kV (50 Hz)',
                },
                {
                  code: 'Protective Coatings',
                  description: 'Internal: Solvent-free epoxy lining | External: Heavy-duty 100% solids polyurethane / epoxy coating',
                },
                {
                  code: 'Quality Verification & NDE',
                  description: '100% Radiographic (RT), Ultrasonic (UT), Hydrostatic (1.5x Design Pressure), and High-Voltage Spark Testing',
                },
              ],
            },
          },
          {
            heading: 'STRATEGIC FIELD DEPLOYMENTS',
            bullets: [
              'Subterranean Mainline Insulation: Directly buried into cross-country oil, gas, NGL, and slurry pipelines to establish precise Cathodic Protection (CP) zones without underground maintenance infrastructure.',
              'Facility & Plant Boundaries: Installed at refinery battery limits, compressor/pump stations, city gates, and tank farms to block stray electrical currents from entering plant grounding networks.',
              'Offshore Risers & Shore Approaches: Deployed at landfall tie-ins and subsea riser bases to isolate offshore platform galvanic systems from onshore pipeline networks.',
            ],
          },
        ],
      },
    },
  },

  // ==========================================
  // 8. VALVE COMPONENTS (Pages 48–50)
  // ==========================================
  'valve-components': {
    parentCategoryTitle: 'PRODUCTS',
    parentCategoryHref: '/products',
    subcategoryTitle: 'Valve Components',
    productsList: [
      { id: 'about-valve-components', title: 'ABOUT VALVE COMPONENTS', downloadTitle: 'Valve Components Catalog' },
      { id: 'precision-o-rings', title: 'PRECISION O-RINGS & BACKUP RINGS', downloadTitle: 'Precision O-Rings Catalog' },
      { id: 'valve-packing', title: 'LOW-EMISSION GLAND PACKING', downloadTitle: 'Low-Emission Packing Catalog' },
      { id: 'valve-seats-inserts', title: 'VALVE SEATS & INSERTS', downloadTitle: 'Valve Seats & Inserts Catalog' },
    ],
    productDetails: {
      'about-valve-components': {
        title: 'VALVE COMPONENTS',
        image: '/images/product-detials-images/Seat-for-Ball-and-Gate-Valve.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'Valve Components Catalog',
        sections: [
          {
            heading: 'TXCO VALVE COMPONENTS',
            paragraphs: [
              'Precision Sealing Technology for Critical Flow Control & Zero-Emissions Integrity.',
              'A valve\'s operational integrity relies entirely on the reliability of its internal sealing interfaces. Under extreme pressure dynamics, severe thermal shock, and aggressive chemical exposure, substandard seals lead to stem leaks, seat blowouts, and non-compliant fugitive emissions. TXCO Valve Components are engineered to provide low-friction, high-integrity static and dynamic barriers within critical flow control equipment. Precision-manufactured to exacting tolerances, our components ensure bubble-tight shut-off, smooth actuator torque, and maximum operational lifespan across severe-service isolation and control valves.',
            ],
          },

          {
            heading: 'COMPONENT SPECIFICATIONS & PERFORMANCE MATRIX',
            table: {
              headers: ['Component', 'Primary Materials', 'Temperature Range', 'Pressure Rating', 'Key Industry Standards'],
              rows: [
                {
                  code: 'Precision O-Rings',
                  description: 'FFKM, FKM, HNBR, EPDM',
                  thickness: '-50°C to +315°C',
                  reweld: 'Up to 10,000 PSI',
                  radial: 'NORSOK M-710, ISO 23936-2',
                },
                {
                  code: 'Gland Packing',
                  description: 'ePTFE, Graphite, Inconel Wire',
                  thickness: '-200°C to +650°C',
                  reweld: 'Class 150 – 2500',
                  radial: 'API 622, ISO 15848-1, TA-Luft',
                },
                {
                  code: 'Seat Rings & Inserts',
                  description: 'PEEK, PCTFE, Devlon V, PTFE',
                  thickness: '-196°C to +260°C',
                  reweld: 'Class 150 – 2500',
                  radial: 'API 6D, ASME B16.34',
                },
              ],
            },
          },
        ],
      },
      'precision-o-rings': {
        title: 'PRECISION O-RINGS & BACKUP RINGS',
        image: '/images/product-detials-images/O-Ring-for-Ball-Valve.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'Precision O-Rings Catalog',
        sections: [
          {
            heading: 'PRECISION O-RINGS & ANTI-EXTRUSION BACKUP RINGS',
            paragraphs: [
              'Molded from high-performance elastomers (FKM, HNBR, EPDM) and chemically inert Perfluoroelastomers (FFKM), TXCO O-rings provide primary static and dynamic sealing for valve stems, body joints, and internal cartridges. Certified for Rapid Gas Decompression (RGD / AED) under NORSOK M-710, they resist micro-blistering during rapid depressurization up to 10,000 PSI. Paired with PEEK or PTFE backup rings, they eliminate seal extrusion under severe differential pressures.',
            ],
            table: {
              headers: ['Component', 'Primary Materials', 'Temperature Range', 'Pressure Rating', 'Key Industry Standards'],
              rows: [
                {
                  code: 'Precision O-Rings',
                  description: 'FFKM, FKM, HNBR, EPDM',
                  thickness: '-50°C to +315°C',
                  reweld: 'Up to 10,000 PSI',
                  radial: 'NORSOK M-710, ISO 23936-2',
                },
              ],
            },
          },
        ],
      },
      'valve-packing': {
        title: 'LOW-EMISSION GLAND PACKING',
        image: '/images/product-detials-images/Compressed-fiber-gaskets-Planiflex.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'Low-Emission Packing Catalog',
        sections: [
          {
            heading: 'API 622 / ISO 15848-1 LOW-EMISSION GLAND PACKING',
            paragraphs: [
              'Functioning as the dynamic stem seal for rotating and reciprocating valves, TXCO gland packings are precision-braided from expanded flexible graphite, Inconel-wire reinforcement, carbon yarn, and modified ePTFE. Their self-lubricating, high-density construction maintains continuous radial contact against stuffing box walls, minimizing actuator breakout torque while exceeding strict fugitive emissions standards (API 622, TA-Luft, ISO 15848-1 Class A).',
            ],
            table: {
              headers: ['Component', 'Primary Materials', 'Temperature Range', 'Pressure Rating', 'Key Industry Standards'],
              rows: [
                {
                  code: 'Gland Packing',
                  description: 'ePTFE, Graphite, Inconel Wire',
                  thickness: '-200°C to +650°C',
                  reweld: 'Class 150 – 2500',
                  radial: 'API 622, ISO 15848-1, TA-Luft',
                },
              ],
            },
          },
        ],
      },
      'valve-seats-inserts': {
        title: 'VALVE SEATS & INSERTS',
        image: '/images/product-detials-images/Seat-for-Ball-and-Gate-Valve.avif',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'Valve Seats & Inserts Catalog',
        sections: [
          {
            heading: 'VALVE SEATS & METALLIC / SOFT SEAT INSERTS',
            paragraphs: [
              'CNC-machined for bubble-tight shut-off in ball, butterfly, gate, and globe valves, TXCO seat rings deliver mechanical strength and thermal memory. Manufactured from engineering thermoplastics—including Virgin/Filled PTFE, PEEK, PCTFE, Devlon V, and Nylon—or solid metallic base rings, these seats resist creep deformation under heavy line loads, maintaining sealing integrity from cryogenic LNG conditions (-196°C) to elevated process temperatures (+260°C).',
            ],
            table: {
              headers: ['Component', 'Primary Materials', 'Temperature Range', 'Pressure Rating', 'Key Industry Standards'],
              rows: [
                {
                  code: 'Seat Rings & Inserts',
                  description: 'PEEK, PCTFE, Devlon V, PTFE',
                  thickness: '-196°C to +260°C',
                  reweld: 'Class 150 – 2500',
                  radial: 'API 6D, ASME B16.34',
                },
              ],
            },
          },
        ],
      },
    },
  },

  // ==========================================
  // 9. COMMERCIAL PRODUCTS (Page 3)
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
        image: '/images/product-detials-images/flanges-product-detials-place-holder-img.png',
        bannerImage: '/images/product-detials-images/product-details-page-banner.avif',
        downloadTitle: 'Commercial Products Catalog',
        sections: [
          {
            heading: 'COMMERCIAL SUPPLY & INDUSTRIAL BOLTING',
            paragraphs: [
              'TXCO provides a comprehensive range of commercial supply items and industrial fasteners designed to complement our sealing and piping products.',
              'Products include high-tensile ASTM stud bolts, heavy hex nuts, flange protectors, and specialized pipeline installation accessories, manufactured and coated in accordance with ASTM, ASME and project specifications.',
            ],
          },
        ],
      },
    },
  },
};
