const { createSoitalianNewsletter } = require('./examples/soitalian-newsletter');

// Generate MJML code
const mjmlCode = createSoitalianNewsletter();

console.log('=== GENERATED MJML CODE ===');
console.log(mjmlCode);
console.log('\n=== END OF MJML CODE ===');

// Save to file
const fs = require('fs');
fs.writeFileSync('./soitalian-newsletter.mjml', mjmlCode);
console.log('\n✅ Email saved to soitalian-newsletter.mjml');