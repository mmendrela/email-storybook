import { Html } from '../components/Html';
import { Head } from '../components/Head';
import { Body } from '../components/Body';
import { Title } from '../components/Title';
import { Preview } from '../components/Preview';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { ProductGrid } from '../components/ProductGrid';
import { BrandConfig } from '../config';

export interface ProductGalleryConfig {
  customerName?: string;
  galleryTitle?: string;
  seasonTheme?: string;
  showPricing?: boolean;
  ctaText?: string;
}

export function createProductGalleryEmail(config: BrandConfig, params: ProductGalleryConfig = {}) {
  const {
    customerName = 'Klient',
    galleryTitle = 'Kompletna Kolekcja',
    seasonTheme = 'Lato 2024',
    showPricing = true,
    ctaText = 'Odkryj całą kolekcję'
  } = params;

  const html = new Html({ lang: 'pl' });
  
  const head = new Head({
    children: [
      new Title({ 
        children: `${customerName}, ${galleryTitle} ${seasonTheme}` 
      }),
      new Preview({ 
        children: `${galleryTitle} ${seasonTheme} - wszystkie produkty w jednym miejscu. Znajdź swój idealny look!` 
      })
    ]
  });

  // Hero section
  const heroSection = new Section({
    backgroundColor: '#1f2937',
    padding: '50px 30px',
    children: `
      <mj-column>
        <mj-text 
          font-size="36px"
          font-weight="bold"
          color="#ffffff"
          align="center"
          padding="0 0 20px 0"
          line-height="44px"
        >
          ${galleryTitle}
        </mj-text>
        <mj-text 
          font-size="20px"
          color="#d1d5db"
          align="center"
          padding="0 0 15px 0"
          line-height="28px"
        >
          ${seasonTheme}
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#9ca3af"
          align="center"
          line-height="24px"
        >
          Cześć ${customerName}! Poznaj wszystkie produkty z naszej najnowszej kolekcji.<br/>
          Każdy element został starannie dobrany z myślą o Tobie.
        </mj-text>
      </mj-column>
    `
  });

  // Extended products array for gallery
  const products = [
    {
      name: config.product_1_name,
      price: showPricing ? '199 zł' : 'Zobacz cenę',
      image: config.product_1_image,
      href: config.product_1_url + '?utm_source=newsletter&utm_campaign=product-gallery'
    },
    {
      name: config.product_2_name,
      price: showPricing ? '149 zł' : 'Zobacz cenę',
      image: config.product_2_image,
      href: config.product_2_url + '?utm_source=newsletter&utm_campaign=product-gallery'
    },
    {
      name: config.product_3_name,
      price: showPricing ? '159 zł' : 'Zobacz cenę',
      image: config.product_3_image,
      href: config.product_3_url + '?utm_source=newsletter&utm_campaign=product-gallery'
    },
    {
      name: config.product_1_name + ' (Biała)',
      price: showPricing ? '209 zł' : 'Zobacz cenę',
      image: config.product_1_image,
      href: config.product_1_url + '?utm_source=newsletter&utm_campaign=product-gallery&variant=white'
    },
    {
      name: config.product_2_name + ' (Czarny)',
      price: showPricing ? '149 zł' : 'Zobacz cenę',
      image: config.product_2_image,
      href: config.product_2_url + '?utm_source=newsletter&utm_campaign=product-gallery&variant=black'
    },
    {
      name: config.product_3_name + ' (Beżowy)',
      price: showPricing ? '169 zł' : 'Zobacz cenę',
      image: config.product_3_image,
      href: config.product_3_url + '?utm_source=newsletter&utm_campaign=product-gallery&variant=beige'
    }
  ];

  // Main gallery
  const productGallery = new ProductGrid({
    title: '🌟 Wszystkie produkty kolekcji 🌟',
    products: products,
    columns: 2
  });

  // Collection highlights section
  const highlightsSection = new Section({
    backgroundColor: '#f3f4f6',
    padding: '40px 30px',
    children: `
      <mj-column>
        <mj-text 
          font-size="24px"
          font-weight="bold"
          color="#1f2937"
          align="center"
          padding="0 0 25px 0"
        >
          ✨ Dlaczego pokochasz naszą kolekcję?
        </mj-text>
      </mj-column>
    `
  });

  const featuresSection = new Section({
    backgroundColor: '#f3f4f6',
    padding: '0 30px 40px',
    children: `
      <mj-column width="50%">
        <mj-text 
          font-size="16px"
          color="#374151"
          padding="0 15px 20px 0"
          line-height="24px"
        >
          <strong>🎨 Unikalne wzory</strong><br/>
          Każdy element został zaprojektowany z dbałością o szczegóły
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#374151"
          padding="0 15px 0 0"
          line-height="24px"
        >
          <strong>🌱 Ekologiczne materiały</strong><br/>
          Dbamy o środowisko wybierając najlepsze materiały
        </mj-text>
      </mj-column>
      <mj-column width="50%">
        <mj-text 
          font-size="16px"
          color="#374151"
          padding="0 0 20px 15px"
          line-height="24px"
        >
          <strong>👗 Uniwersalny styl</strong><br/>
          Produkty pasują do różnych okazji i stylizacji
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#374151"
          padding="0 0 0 15px"
          line-height="24px"
        >
          <strong>💎 Najwyższa jakość</strong><br/>
          Testowane przez setki zadowolonych klientek
        </mj-text>
      </mj-column>
    `
  });

  // Final CTA
  const finalCtaSection = new Section({
    backgroundColor: '#059669',
    padding: '45px 30px',
    children: `
      <mj-column>
        <mj-text 
          font-size="28px"
          font-weight="bold"
          color="#ffffff"
          align="center"
          padding="0 0 20px 0"
        >
          Gotowa na shopping, ${customerName}?
        </mj-text>
        <mj-text 
          font-size="18px"
          color="#d1fae5"
          align="center"
          padding="0 0 30px 0"
          line-height="26px"
        >
          Wszystkie produkty czekają w naszym sklepie online.<br/>
          Dostawa gratis przy zamówieniu powyżej 150 zł!
        </mj-text>
        <mj-button 
          href="${config.store_url}?utm_source=newsletter&utm_campaign=product-gallery"
          background-color="#ffffff"
          color="#059669"
          font-size="20px"
          font-weight="bold"
          padding="18px 36px"
          border-radius="8px"
        >
          🛍️ ${ctaText}
        </mj-button>
      </mj-column>
    `
  });

  const body = new Body({
    backgroundColor: config.background_color,
    children: [
      new Container({
        maxWidth: '600px',
        children: [
          heroSection,
          productGallery,
          highlightsSection,
          featuresSection,
          finalCtaSection
        ]
      })
    ]
  });

  html.props.children = [head, body];
  return html.render();
}