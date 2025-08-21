import { Html } from '../components/Html';
import { Head } from '../components/Head';
import { Body } from '../components/Body';
import { Title } from '../components/Title';
import { Preview } from '../components/Preview';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { CartSummary } from '../components/CartSummary';
import { BrandConfig } from '../config';

export interface AbandonedCartConfig {
  customerName?: string;
  cartId?: string;
  discountPercent?: number;
  discountCode?: string;
  urgencyHours?: number;
  freeShippingThreshold?: number;
}

export function createAbandonedCartEmail(config: BrandConfig, params: AbandonedCartConfig = {}) {
  const {
    customerName = 'Klient',
    cartId = 'CART_' + Date.now().toString().slice(-6),
    discountPercent = 15,
    discountCode = 'POWROT15',
    urgencyHours = 24,
    freeShippingThreshold = 150
  } = params;

  const html = new Html({ lang: 'pl' });
  
  const head = new Head({
    children: [
      new Title({ 
        children: `${customerName}, Twój koszyk czeka na Ciebie!` 
      }),
      new Preview({ 
        children: `Nie zapomnij o swoich ulubionych produktach! Koszyk ${cartId} z ${discountPercent}% zniżką przez następne ${urgencyHours}h.` 
      })
    ]
  });

  // Urgent header
  const urgentSection = new Section({
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
          ⏰ Twój koszyk wkrótce wygaśnie! Zostało tylko ${urgencyHours} godzin
        </mj-text>
      </mj-column>
    `
  });

  // Personal message
  const personalSection = new Section({
    backgroundColor: '#ffffff',
    padding: '40px 30px 20px',
    children: `
      <mj-column>
        <mj-text 
          font-size="28px"
          font-weight="bold"
          color="#1f2937"
          align="center"
          padding="0 0 20px 0"
        >
          Cześć ${customerName}! 👋
        </mj-text>
        <mj-text 
          font-size="18px"
          color="#4b5563"
          align="center"
          line-height="26px"
          padding="0 0 25px 0"
        >
          Zauważyliśmy, że zostwiłaś produkty w koszyku.<br/>
          Nie martw się - zachowaliśmy je dla Ciebie!
        </mj-text>
        <mj-text 
          font-size="20px"
          font-weight="bold"
          color="#dc2626"
          align="center"
          padding="0 0 10px 0"
        >
          🎁 Specjalnie dla Ciebie: ${discountPercent}% zniżki!
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#059669"
          align="center"
          font-weight="bold"
        >
          Kod: ${discountCode}
        </mj-text>
      </mj-column>
    `
  });

  // Cart items
  const cartItems = [
    {
      name: config.product_1_name,
      price: '199 zł',
      quantity: 1,
      image: config.product_1_image
    },
    {
      name: config.product_2_name,
      price: '149 zł',
      quantity: 2,
      image: config.product_2_image
    }
  ];

  const subtotalValue = cartItems.reduce((sum, item) => sum + (parseInt(item.price) * item.quantity), 0);
  const shippingValue = subtotalValue >= freeShippingThreshold ? 0 : 15;
  const discountValue = Math.round(subtotalValue * (discountPercent / 100));
  const totalValue = subtotalValue + shippingValue - discountValue;

  const cartSummary = new CartSummary({
    title: '🛒 Twój zarezerwowany koszyk',
    items: cartItems,
    subtotal: `${subtotalValue} zł`,
    shipping: `${shippingValue} zł`,
    tax: `- ${discountValue} zł`,
    total: `${totalValue} zł`,
    checkoutUrl: `${config.store_url}/cart/${cartId}?utm_source=abandoned_cart&discount=${discountCode}`,
    checkoutText: 'Dokończ zakupy'
  });

  // Incentive section
  const incentiveSection = new Section({
    backgroundColor: '#ecfdf5',
    padding: '30px',
    children: `
      <mj-column>
        <mj-text 
          font-size="22px"
          font-weight="bold"
          color="#065f46"
          align="center"
          padding="0 0 20px 0"
        >
          🎯 Dlaczego warto dokończyć zakupy już teraz?
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#047857"
          align="left"
          padding="0 0 12px 0"
          line-height="24px"
        >
          ✅ <strong>Ekskluzywna zniżka ${discountPercent}%</strong> - tylko dla Ciebie!
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#047857"
          align="left"
          padding="0 0 12px 0"
          line-height="24px"
        >
          ✅ <strong>Darmowa dostawa</strong> przy zamówieniu powyżej ${freeShippingThreshold} zł
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#047857"
          align="left"
          padding="0 0 12px 0"
          line-height="24px"
        >
          ✅ <strong>30 dni na zwrot</strong> bez podania przyczyny
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#047857"
          align="left"
          line-height="24px"
        >
          ✅ <strong>Szybka dostawa</strong> w 1-2 dni robocze
        </mj-text>
      </mj-column>
    `
  });

  // Final urgent CTA
  const finalCtaSection = new Section({
    backgroundColor: '#1f2937',
    padding: '40px 30px',
    children: `
      <mj-column>
        <mj-text 
          font-size="24px"
          font-weight="bold"
          color="#ffffff"
          align="center"
          padding="0 0 15px 0"
        >
          ⏰ Nie czekaj dłużej!
        </mj-text>
        <mj-text 
          font-size="18px"
          color="#f3f4f6"
          align="center"
          padding="0 0 25px 0"
          line-height="26px"
        >
          Koszyk zostanie usunięty za ${urgencyHours} godzin.<br/>
          Kod <strong>${discountCode}</strong> wygasa wraz z koszykiem!
        </mj-text>
        <mj-button 
          href="${config.store_url}/cart/${cartId}?utm_source=abandoned_cart&discount=${discountCode}"
          background-color="#dc2626"
          color="#ffffff"
          font-size="20px"
          font-weight="bold"
          padding="18px 36px"
          border-radius="8px"
        >
          🚀 Dokończ zakupy z ${discountPercent}% zniżką
        </mj-button>
        <mj-text 
          font-size="14px"
          color="#9ca3af"
          align="center"
          padding="20px 0 0 0"
        >
          Masz pytania? <a href="mailto:${config.contact_email}" style="color: #f59e0b;">Napisz do nas</a>
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
          urgentSection,
          personalSection,
          cartSummary,
          incentiveSection,
          finalCtaSection
        ]
      })
    ]
  });

  html.props.children = [head, body];
  return html.render();
}