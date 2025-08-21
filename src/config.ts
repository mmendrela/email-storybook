export interface BrandConfig {
  store_name: string;
  store_url: string;
  logo_url: string;
  
  // Products
  product_1_name: string;
  product_1_url: string;
  product_1_image: string;
  product_2_name: string;
  product_2_url: string;
  product_2_image: string;
  product_3_name: string;
  product_3_url: string;
  product_3_image: string;
  
  // Hero section
  hero_background_image: string;
  hero_title: string;
  hero_subtitle: string;
  hero_cta_text: string;
  hero_cta_link: string;
  
  // Styling
  background_color: string;
  button_color: string;
  text_color: string;
  
  // Contact
  contact_email: string;
  contact_phone: string;
  contact_address: string;
}

export const soitalianConfig: BrandConfig = {
  store_name: 'SoItalian',
  store_url: 'https://www.soitalian.pl/',
  logo_url: 'https://www.soitalian.pl/img/logo-1643198138.jpg',
  
  // Products
  product_1_name: 'Top Rieti Pink',
  product_1_url: 'https://www.soitalian.pl/pl/topy/604660-532220-top-rieti-pink.html',
  product_1_image: 'https://www.soitalian.pl/85583-small_default/top-rieti-pink.jpg',
  
  product_2_name: 'Lovaria Hat – black ribbon',
  product_2_url: 'https://www.soitalian.pl/pl/akcesoria/604671-kapelusz-lovaria-beige-z-czarna-wstazka.html',
  product_2_image: 'https://www.soitalian.pl/85586-small_default/kapelusz-lovaria-beige-z-czarna-wstazka.jpg',
  
  product_3_name: 'Lovaria Hat – lace ribbon',
  product_3_url: 'https://www.soitalian.pl/pl/akcesoria/604670-kapelusz-lovaria-beige-z-azurowa-wstazka.html',
  product_3_image: 'https://www.soitalian.pl/85585-small_default/kapelusz-lovaria-beige-z-azurowa-wstazka.jpg',
  
  // Hero section
  hero_background_image: 'https://www.soitalian.pl/85583-large_default/top-rieti-pink.jpg',
  hero_title: 'Style you\'ll love',
  hero_subtitle: 'Tops and accessories for summer – feminine, light, and fashionable.',
  hero_cta_text: 'Shop now',
  hero_cta_link: 'https://www.soitalian.pl/pl/',
  
  // Styling
  background_color: '#f7f4f2',
  button_color: '#000000',
  text_color: '#333333',
  
  // Contact
  contact_email: 'sklep@soitalian.pl',
  contact_phone: '+48 577 555 555',
  contact_address: 'ul. Przykładowa 1, Warsaw'
};