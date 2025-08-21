const { soitalianConfig, createWelcomeEmail, createSaleEmail } = require('../dist');
const fs = require('fs');

// Generate welcome email
const welcomeEmail = createWelcomeEmail(soitalianConfig, 'Anna');
fs.writeFileSync('./soitalian-welcome.mjml', welcomeEmail);
console.log('✅ Welcome email generated: soitalian-welcome.mjml');

// Generate sale email
const saleConfig = {
  discountPercent: 30,
  saleTitle: 'WEEKEND SALE',
  promoCode: 'WEEKEND30',
  validUntil: 'do niedzieli 24.08',
  urgencyMessage: 'Zostały tylko 2 dni!'
};

const saleEmail = createSaleEmail(soitalianConfig, saleConfig);
fs.writeFileSync('./soitalian-sale.mjml', saleEmail);
console.log('✅ Sale email generated: soitalian-sale.mjml');

console.log('\n🎯 Emails generated using brand configuration:');
console.log(`- Store: ${soitalianConfig.store_name}`);
console.log(`- Colors: ${soitalianConfig.button_color}, ${soitalianConfig.background_color}`);
console.log(`- Products: ${soitalianConfig.product_1_name}, ${soitalianConfig.product_2_name}, ${soitalianConfig.product_3_name}`);