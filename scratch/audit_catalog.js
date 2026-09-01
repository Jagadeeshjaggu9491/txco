const fs = require('fs');
const path = require('path');

const fullPdf = fs.readFileSync(path.join(__dirname, 'full_pdf_pages_1_to_50.txt'), 'utf8');

// Load productsDetailCatalog.js
let catalogContent = fs.readFileSync(path.join(__dirname, '../src/data/productsDetailCatalog.js'), 'utf8');
catalogContent = catalogContent.replace(/export const subcategoryDetailCatalog\s*=\s*/, 'global.catalog = ');
eval(catalogContent);
const catalogData = global.catalog;

console.log('Subcategories in catalog:', Object.keys(catalogData));

// For each subcategory, list all products and check their tables and sections
for (const [subcatKey, subcat] of Object.entries(catalogData)) {
  console.log(`\n------------------ [SUBCATEGORY] ${subcatKey} (${subcat.subcategoryTitle}) ------------------`);
  console.log(`Total Products: ${subcat.productsList ? subcat.productsList.length : 0}`);
  
  if (subcat.productDetails) {
    for (const [prodId, prod] of Object.entries(subcat.productDetails)) {
      const sectionHeadings = prod.sections ? prod.sections.map(s => s.heading + (s.table ? ' [TABLE: ' + s.table.headers.join(', ') + ']' : '') + (s.bullets ? ` [BULLETS: ${s.bullets.length}]` : '')) : [];
      console.log(`  - Product: ${prodId} ("${prod.title}") => Sections: ${sectionHeadings.join(' | ')}`);
    }
  }
}
