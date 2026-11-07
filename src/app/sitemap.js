export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://txco.co';
  const currentDate = new Date().toISOString();

  // Core Landing Pages
  const corePages = [
    { url: `${baseUrl}/`, priority: 1.0, changeFrequency: 'daily' },
    { url: `${baseUrl}/products/`, priority: 0.95, changeFrequency: 'daily' },
    { url: `${baseUrl}/industries/`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/services/`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/catalogues/`, priority: 0.85, changeFrequency: 'weekly' },
    { url: `${baseUrl}/downloads/`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/stock-list/`, priority: 0.85, changeFrequency: 'daily' },
    { url: `${baseUrl}/resources/`, priority: 0.85, changeFrequency: 'weekly' },
    { url: `${baseUrl}/resources/blog/`, priority: 0.85, changeFrequency: 'daily' },
    { url: `${baseUrl}/resources/faqs/`, priority: 0.75, changeFrequency: 'weekly' },
    { url: `${baseUrl}/resources/news/`, priority: 0.75, changeFrequency: 'weekly' },
    { url: `${baseUrl}/about/`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/about-us/`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/certifications/`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/quality-policy/`, priority: 0.75, changeFrequency: 'monthly' },
    { url: `${baseUrl}/hse-policy/`, priority: 0.75, changeFrequency: 'monthly' },
    { url: `${baseUrl}/careers/`, priority: 0.75, changeFrequency: 'monthly' },
    { url: `${baseUrl}/contact/`, priority: 0.9, changeFrequency: 'monthly' },
  ];

  // Industries
  const industryPages = [
    '/industries/chemical/',
    '/industries/energy/',
    '/industries/manufacturing/',
    '/industries/metals-mining/',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    priority: 0.85,
    changeFrequency: 'weekly',
  }));

  // Services
  const servicePages = [
    '/services/flange-joint-integrity/',
    '/services/reverse-engineering/',
    '/services/custom-engineering/',
    '/services/field-support/',
    '/services/technical-training/',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    priority: 0.85,
    changeFrequency: 'weekly',
  }));

  // Technical Blog Articles
  const blogPages = [
    '/blog/optimizing-ring-type-joint-gaskets-high-pressure/',
    '/blog/preventing-fugitive-emissions-spiral-wound-gaskets/',
    '/blog/kammprofile-vs-metal-jacketed-heat-exchangers/',
    '/blog/flange-isolation-kits-cathodic-protection/',
    '/blog/hydrogen-service-sealing-materials-safeguards/',
    '/blog/mastering-bolt-torque-turnaround-success/',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    priority: 0.8,
    changeFrequency: 'monthly',
  }));

  // Stock List Categories
  const stockPages = [
    '/stock-list/ring-joints-rtj/',
    '/stock-list/spiral-wound-gaskets/',
    '/stock-list/kammprofile-jacketed/',
    '/stock-list/gasket-sheets/',
    '/stock-list/flanges-valve-trims/',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    priority: 0.8,
    changeFrequency: 'daily',
  }));

  // Product Categories & Subcategories
  const productPages = [
    '/products/gaskets/',
    '/products/gaskets/metallic-gaskets/',
    '/products/gaskets/metallic-gaskets/details/',
    '/products/gaskets/semi-metallic-gaskets/',
    '/products/gaskets/semi-metallic-gaskets/details/',
    '/products/gaskets/non-metallic-gaskets/',
    '/products/gaskets/non-metallic-gaskets/details/',
    '/products/gaskets/steel-inserted-gaskets/',
    '/products/gaskets/steel-inserted-gaskets/details/',
    '/products/plug-gaskets/',
    '/products/plug-gaskets/details/',
    '/products/flanges/',
    '/products/flanges/details/',
    '/products/flanges/flange-types/',
    '/products/flanges/flange-types/details/',
    '/products/flanges/weld-neck-flanges/',
    '/products/flanges/slip-on-flanges/',
    '/products/flanges/blind-flanges/',
    '/products/flanges/socket-weld-flanges/',
    '/products/flanges/lap-joint-flanges/',
    '/products/flanges/threaded-screwed-flanges/',
    '/products/flanges/orifice-flanges/',
    '/products/flanges/custom-flanges/',
    '/products/monolithic-insulation-joints/',
    '/products/monolithic-insulation-joints/details/',
    '/products/valve-components/',
    '/products/valve-components/details/',
    '/products/valve-components/valve-sealing-components/',
    '/products/valve-components/valve-sealing-components/details/',
    '/products/valve-components/precision-o-rings/',
    '/products/valve-components/valve-packing/',
    '/products/valve-components/valve-seats-inserts/',
    '/products/commercial-products/',
    '/products/commercial-products/details/',
    '/products/commercial-products/commercial-supply/',
    '/products/commercial-products/commercial-supply/details/',
    '/products/commercial-products/expanding-gates/',
    '/products/commercial-products/through-conduit-gates/',
    '/products/commercial-products/gate-valves/',
    '/products/commercial-products/ball-valves/',
    '/products/commercial-products/globe-valves/',
    '/products/commercial-products/check-valves/',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    priority: 0.85,
    changeFrequency: 'weekly',
  }));

  // Catalogues
  const cataloguePages = [
    '/catalogues/browse/metallic-gaskets-catalogue/',
    '/catalogues/browse/spiral-wound-catalogue/',
    '/catalogues/browse/kammprofile-jacketed-catalogue/',
    '/catalogues/browse/flange-isolation-catalogue/',
    '/catalogues/browse/non-metallic-sheet-catalogue/',
    '/catalogues/browse/flanges-piping-catalogue/',
    '/catalogues/browse/valve-trims-packing-catalogue/',
    '/catalogues/browse/bolting-hardware-catalogue/',
    '/catalogues/browse/subsea-specialty-seals-catalogue/',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    priority: 0.75,
    changeFrequency: 'monthly',
  }));

  const allEntries = [
    ...corePages,
    ...industryPages,
    ...servicePages,
    ...productPages,
    ...blogPages,
    ...stockPages,
    ...cataloguePages,
  ];

  return allEntries.map((entry) => ({
    ...entry,
    lastModified: currentDate,
  }));
}

