const fs = require('fs');
const path = require('path');

const pdfText = fs.readFileSync('/Users/bhanuprakash/.gemini/antigravity-ide/brain/62d8f915-2973-4d42-8529-a0d608445507/scratch/all_pdf_text.txt', 'utf8');
const pages = pdfText.split(/--- PAGE \d+ ---/);

// Let's print out Pages 1 to 50 content structured by page number
for (let i = 1; i <= 50; i++) {
  if (pages[i]) {
    console.log(`\n==================== PAGE ${i} ====================`);
    console.log(pages[i].trim());
  }
}
