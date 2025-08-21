import { Html } from '../components/Html';
import { Head } from '../components/Head';
import { Body } from '../components/Body';
import { Title } from '../components/Title';
import { Preview } from '../components/Preview';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Column } from '../components/Column';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { ThreeCardsRow } from '../components/ThreeCardsRow';
import { BrandConfig } from '../config';

export interface BestsellersConfig {
  customerName?: string;
  urgencyText?: string;
  promoCode?: string;
  validUntil?: string;
}

export function createBestsellersEmail(config: BrandConfig, params: BestsellersConfig = {}) {
  const {
    customerName = 'Klient',
    urgencyText = 'Ostatnie sztuki!',
    promoCode = 'BESTSELLER15',
    validUntil = '31 sierpnia 2024'
  } = params;

  const html = new Html({ lang: 'pl' });
  
  const head = new Head({
    children: [
      new Title({ 
        children: `${customerName}, nasze bestsellery czekają!` 
      }),
      new Preview({ 
        children: `${urgencyText} Sprawdź nasze najpopularniejsze produkty z kodem ${promoCode}. Ważne do ${validUntil}.` 
      })
    ]
  });

  // Header with urgency message
  const headerSection = new Section({
    backgroundColor: '#f59e0b',
    padding: '20px 30px',
    children: `
      <mj-column>
        <mj-text 
          font-size="18px"
          font-weight="bold"
          color="#ffffff"
          align="center"
          padding="0"
        >
          🔥 ${urgencyText} • Kod: ${promoCode} • Do ${validUntil}
        </mj-text>
      </mj-column>
    `
  });

  // Welcome message
  const welcomeSection = new Section({
    backgroundColor: '#ffffff',
    padding: '40px 30px 20px',
    children: `
      <mj-column>
        <mj-text 
          font-size="24px"
          font-weight="bold"
          color="#1f2937"
          align="center"
          padding="0 0 15px 0"
        >
          Cześć ${customerName}! 👋
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#6b7280"
          align="center"
          line-height="24px"
        >
          Te produkty pokochały setki naszych klientek. Teraz Ty też możesz je odkryć z ekskluzywną zniżką!
        </mj-text>
      </mj-column>
    `
  });

  // Bestsellers products
  const products = [
    {
      name: config.product_1_name,
      price: '169 zł',
      originalPrice: '199 zł',
      image: config.product_1_image,
      href: config.product_1_url + '?utm_source=newsletter&utm_campaign=bestsellers',
      description: 'Nasz absolutny bestseller!'
    },
    {
      name: config.product_2_name,
      price: '127 zł',
      originalPrice: '149 zł',
      image: config.product_2_image,
      href: config.product_2_url + '?utm_source=newsletter&utm_campaign=bestsellers',
      description: 'Idealny na każdą okazję'
    },
    {
      name: config.product_3_name,
      price: '135 zł',
      originalPrice: '159 zł',
      image: config.product_3_image,
      href: config.product_3_url + '?utm_source=newsletter&utm_campaign=bestsellers',
      description: 'Subtelna elegancja'
    }
  ];

  const bestsellersRow = new ThreeCardsRow({
    title: '⭐ Nasze Bestsellery ⭐',
    products: products,
    buttonText: 'Kup teraz'
  });

  // CTA Section
  const ctaSection = new Section({
    backgroundColor: '#1f2937',
    padding: '40px 30px',
    children: `
      <mj-column>
        <mj-text 
          font-size="20px"
          font-weight="bold"
          color="#ffffff"
          align="center"
          padding="0 0 20px 0"
        >
          Nie zwlekaj! Oferta ważna tylko do ${validUntil}
        </mj-text>
        <mj-button 
          href="${config.store_url}?utm_source=newsletter&utm_campaign=bestsellers&code=${promoCode}"
          background-color="#f59e0b"
          color="#000000"
          font-size="18px"
          font-weight="bold"
          padding="16px 32px"
          border-radius="8px"
        >
          🛍️ Zobacz wszystkie bestsellery
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
          headerSection,
          welcomeSection,
          bestsellersRow,
          ctaSection
        ]
      })
    ]
  });

  html.props.children = [head, body];
  return html.render();
}