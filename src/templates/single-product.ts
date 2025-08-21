import { Html } from '../components/Html';
import { Head } from '../components/Head';
import { Body } from '../components/Body';
import { Title } from '../components/Title';
import { Preview } from '../components/Preview';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { OneProductLeft } from '../components/OneProductLeft';
import { BrandConfig } from '../config';

export interface SingleProductConfig {
  customerName?: string;
  productType?: string;
  urgencyMessage?: string;
  stockCount?: number;
  reviewCount?: number;
  rating?: number;
}

export function createSingleProductEmail(config: BrandConfig, params: SingleProductConfig = {}) {
  const {
    customerName = 'Klient',
    productType = 'hit sezonu',
    urgencyMessage = 'Ostatnie sztuki w magazynie!',
    stockCount = 3,
    reviewCount = 127,
    rating = 4.8
  } = params;

  const html = new Html({ lang: 'pl' });
  
  const head = new Head({
    children: [
      new Title({ 
        children: `${customerName}, ${productType} czeka na Ciebie!` 
      }),
      new Preview({ 
        children: `${urgencyMessage} ${config.product_1_name} - tylko ${stockCount} szt. w magazynie. Ocena ${rating}/5 od ${reviewCount} klientek.` 
      })
    ]
  });

  // Urgency header
  const urgencySection = new Section({
    backgroundColor: '#dc2626',
    padding: '15px 30px',
    children: `
      <mj-column>
        <mj-text 
          font-size="16px"
          font-weight="bold"
          color="#ffffff"
          align="center"
          padding="0"
        >
          ⚡ ${urgencyMessage} Tylko ${stockCount} sztuki pozostały!
        </mj-text>
      </mj-column>
    `
  });

  // Welcome message
  const welcomeSection = new Section({
    backgroundColor: '#ffffff',
    padding: '30px 30px 20px',
    children: `
      <mj-column>
        <mj-text 
          font-size="26px"
          font-weight="bold"
          color="#1f2937"
          align="center"
          padding="0 0 15px 0"
        >
          Cześć ${customerName}! 👋
        </mj-text>
        <mj-text 
          font-size="18px"
          color="#4b5563"
          align="center"
          line-height="26px"
          padding="0 0 20px 0"
        >
          Ten ${productType} pokochały już setki naszych klientek.<br/>
          <strong>⭐ ${rating}/5</strong> z ${reviewCount} opinii!
        </mj-text>
      </mj-column>
    `
  });

  // Main product showcase
  const productLeft = new OneProductLeft({
    product: {
      name: config.product_1_name,
      price: '189 zł',
      originalPrice: '249 zł',
      image: config.product_1_image,
      href: config.product_1_url + '?utm_source=newsletter&utm_campaign=single-product',
      description: `Elegancki ${config.product_1_name.toLowerCase()} w różowym kolorze to absolutny hit tego sezonu! Wykonany z najwyższej jakości materiałów, zapewnia komfort noszenia przez cały dzień. Idealny na lato i wczesną jesień.\n\n✅ Wysokiej jakości materiał\n✅ Wygodny krój\n✅ Idealny na każdą okazję\n✅ Dostępny w kilku rozmiarach`
    },
    buttonText: 'Kup teraz',
    imageWidth: '300px'
  });

  // Social proof section
  const socialSection = new Section({
    backgroundColor: '#f9fafb',
    padding: '30px',
    children: `
      <mj-column>
        <mj-text 
          font-size="20px"
          font-weight="bold"
          color="#1f2937"
          align="center"
          padding="0 0 20px 0"
        >
          💬 Co mówią nasze klientki:
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#374151"
          align="center"
          padding="0 0 15px 0"
          line-height="24px"
          font-style="italic"
        >
          "Absolutnie uwielbiam ten ${config.product_1_name.toLowerCase()}! Jakość materiału jest niesamowita."
        </mj-text>
        <mj-text 
          font-size="14px"
          color="#6b7280"
          align="center"
          padding="0 0 25px 0"
        >
          ⭐⭐⭐⭐⭐ - Małgorzata K.
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#374151"
          align="center"
          padding="0 0 15px 0"
          line-height="24px"
          font-style="italic"
        >
          "Szybka dostawa, piękne opakowanie. Polecam!"
        </mj-text>
        <mj-text 
          font-size="14px"
          color="#6b7280"
          align="center"
        >
          ⭐⭐⭐⭐⭐ - Anna M.
        </mj-text>
      </mj-column>
    `
  });

  // Final CTA section
  const ctaSection = new Section({
    backgroundColor: '#1f2937',
    padding: '40px 30px',
    children: `
      <mj-column>
        <mj-text 
          font-size="24px"
          font-weight="bold"
          color="#ffffff"
          align="center"
          padding="0 0 20px 0"
        >
          🚨 Nie zwlekaj - zostało tylko ${stockCount} sztuk!
        </mj-text>
        <mj-button 
          href="${config.product_1_url}?utm_source=newsletter&utm_campaign=single-product&urgency=true"
          background-color="#dc2626"
          color="#ffffff"
          font-size="20px"
          font-weight="bold"
          padding="18px 36px"
          border-radius="8px"
        >
          🛍️ Zamawiam ${config.product_1_name}
        </mj-button>
        <mj-text 
          font-size="14px"
          color="#d1d5db"
          align="center"
          padding="20px 0 0 0"
        >
          ✅ Darmowa dostawa przy zamówieniu powyżej 150 zł<br/>
          ✅ 30 dni na zwrot bez podania przyczyny
        </mj-text>
      </mj-column>
    `
  });

  const body = new Body({
    backgroundColor: config.background_color,
    children: [
      new Container({
        maxWidth: '600px',
        children: [
          urgencySection,
          welcomeSection,
          productLeft,
          socialSection,
          ctaSection
        ]
      })
    ]
  });

  html.props.children = [head, body];
  return html.render();
}