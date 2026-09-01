const fs = require('fs');
const path = require('path');

const pdfText = fs.readFileSync('/Users/bhanuprakash/.gemini/antigravity-ide/brain/62d8f915-2973-4d42-8529-a0d608445507/scratch/all_pdf_text.txt', 'utf8');

// Split by pages
const pages = pdfText.split(/--- PAGE \d+ ---/);

console.log('Total pages extracted:', pages.length - 1);

// Print page headings
pages.forEach((p, idx) => {
  if (idx === 0) return;
  const lines = p.trim().split('\n').filter(l => l.trim().length > 0);
  const topLines = lines.slice(0, 3).join(' | ');
  console.log(`Page ${idx}: ${topLines}`);
});
