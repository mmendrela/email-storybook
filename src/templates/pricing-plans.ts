import { Html } from '../components/Html';
import { Head } from '../components/Head';
import { Body } from '../components/Body';
import { Title } from '../components/Title';
import { Preview } from '../components/Preview';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { PricingTable } from '../components/PricingTable';
import { BrandConfig } from '../config';

export interface PricingPlansConfig {
  customerName?: string;
  programName?: string;
  launchDiscount?: number;
  earlyBirdCode?: string;
  validUntil?: string;
  specialOffer?: boolean;
}

export function createPricingPlansEmail(config: BrandConfig, params: PricingPlansConfig = {}) {
  const {
    customerName = 'Klient',
    programName = 'SoItalian VIP Club',
    launchDiscount = 30,
    earlyBirdCode = 'VIP30',
    validUntil = '31 sierpnia 2024',
    specialOffer = true
  } = params;

  const html = new Html({ lang: 'pl' });
  
  const head = new Head({
    children: [
      new Title({ 
        children: `${customerName}, dołącz do ${programName}!` 
      }),
      new Preview({ 
        children: `Ekskluzywny program członkowski ${programName}. Tylko do ${validUntil} - ${launchDiscount}% zniżki z kodem ${earlyBirdCode}!` 
      })
    ]
  });

  // Hero launch section
  const launchSection = new Section({
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
          🌟 ${programName} 🌟
        </mj-text>
        <mj-text 
          font-size="20px"
          color="#f59e0b"
          align="center"
          padding="0 0 15px 0"
          font-weight="bold"
        >
          PREMIERA PROGRAMU CZŁONKOWSKIEGO
        </mj-text>
        <mj-text 
          font-size="18px"
          color="#d1d5db"
          align="center"
          line-height="26px"
        >
          Cześć ${customerName}! Zapraszamy Cię do ekskluzywnego klubu<br/>
          z wyjątkowymi korzyściami i priorytetowym dostępem do nowości.
        </mj-text>
      </mj-column>
    `
  });

  // Special offer banner
  const offerBannerSection = specialOffer ? new Section({
    backgroundColor: '#dc2626',
    padding: '20px 30px',
    children: `
      <mj-column>
        <mj-text 
          font-size="22px"
          font-weight="bold"
          color="#ffffff"
          align="center"
          padding="0 0 10px 0"
        >
          🔥 OFERTA STARTOWA - ${launchDiscount}% ZNIŻKI!
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#fecaca"
          align="center"
        >
          Kod: <strong>${earlyBirdCode}</strong> • Ważne do: ${validUntil}
        </mj-text>
      </mj-column>
    `
  }) : null;

  // Pricing plans data
  const pricingPlans = [
    {
      name: 'SoItalian Basic',
      price: specialOffer ? '49 zł' : '70 zł',
      period: 'miesięcznie',
      features: [
        '5% zniżki na wszystkie produkty',
        'Dostęp do wyprzedaży 24h wcześniej',
        'Bezpłatna dostawa od 100 zł',
        'Newsletter z nowościami',
        'Program punktów lojalnościowych'
      ],
      buttonText: 'Wybierz Basic',
      buttonUrl: `${config.store_url}/membership/basic?utm_source=newsletter&code=${earlyBirdCode}`,
      emphasized: false
    },
    {
      name: 'SoItalian Premium',
      price: specialOffer ? '89 zł' : '127 zł',
      period: 'miesięcznie',
      features: [
        'Wszystko z pakietu Basic',
        '10% zniżki na wszystkie produkty',
        'Darmowa dostawa zawsze',
        'Ekskluzywne produkty tylko dla Premium',
        'Priorytetowy dostęp do nowości',
        'Personalna stylistka online',
        'Specjalne prezenty urodzinowe'
      ],
      buttonText: 'Wybierz Premium',
      buttonUrl: `${config.store_url}/membership/premium?utm_source=newsletter&code=${earlyBirdCode}`,
      emphasized: true,
      badge: 'NAJPOPULARNIEJSZY'
    },
    {
      name: 'SoItalian VIP',
      price: specialOffer ? '139 zł' : '199 zł',
      period: 'miesięcznie',
      features: [
        'Wszystko z pakietu Premium',
        '15% zniżki na wszystkie produkty',
        'Ekskluzywna kolekcja VIP',
        'Osobista stylistka w sklepie',
        'Bezpłatne alteracje i dopasowania',
        'VIP events i pokazy mody',
        'Concierge shopping service',
        'Prezenty sezonowe'
      ],
      buttonText: 'Zostań VIP',
      buttonUrl: `${config.store_url}/membership/vip?utm_source=newsletter&code=${earlyBirdCode}`,
      emphasized: false,
      badge: 'EKSKLUZYWNY'
    }
  ];

  const pricingTable = new PricingTable({
    plans: pricingPlans
  });

  // Benefits section
  const benefitsSection = new Section({
    backgroundColor: '#f3f4f6',
    padding: '40px 30px',
    children: `
      <mj-column>
        <mj-text 
          font-size="26px"
          font-weight="bold"
          color="#1f2937"
          align="center"
          padding="0 0 30px 0"
        >
          ✨ Dlaczego ${programName}?
        </mj-text>
      </mj-column>
    `
  });

  const benefitsDetailsSection = new Section({
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
          <strong>🎯 Ekskluzywność</strong><br/>
          Dostęp do limitowanych kolekcji i produktów niedostępnych publicznie
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#374151"
          padding="0 15px 20px 0"
          line-height="24px"
        >
          <strong>👗 Styling</strong><br/>
          Profesjonalne doradztwo stylistyczne dopasowane do Twoich potrzeb
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#374151"
          padding="0 15px 0 0"
          line-height="24px"
        >
          <strong>🎊 Wydarzenia</strong><br/>
          Zaproszenia na ekskluzywne pokazy mody i wydarzenia VIP
        </mj-text>
      </mj-column>
      <mj-column width="50%">
        <mj-text 
          font-size="16px"
          color="#374151"
          padding="0 0 20px 15px"
          line-height="24px"
        >
          <strong>💰 Oszczędności</strong><br/>
          Stałe zniżki od 5% do 15% na wszystkie zakupy przez cały rok
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#374151"
          padding="0 0 20px 15px"
          line-height="24px"
        >
          <strong>🚚 Wygoda</strong><br/>
          Darmowe dostawy, szybkie zwroty i priorytetowa obsługa
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#374151"
          padding="0 0 0 15px"
          line-height="24px"
        >
          <strong>🎁 Prezenty</strong><br/>
          Regularne niespodzianki, prezenty urodzinowe i sezonowe
        </mj-text>
      </mj-column>
    `
  });

  // Testimonial section
  const testimonialSection = new Section({
    backgroundColor: '#ffffff',
    padding: '40px 30px',
    children: `
      <mj-column>
        <mj-text 
          font-size="22px"
          font-weight="bold"
          color="#1f2937"
          align="center"
          padding="0 0 25px 0"
        >
          💬 Co mówią nasze VIP członkinie:
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#374151"
          align="center"
          padding="0 0 15px 0"
          line-height="24px"
          font-style="italic"
        >
          "Program VIP to najlepsza inwestycja! Oszczędzam setki złotych rocznie, a stylistka zawsze doradzi mi idealne produkty."
        </mj-text>
        <mj-text 
          font-size="14px"
          color="#6b7280"
          align="center"
          padding="0 0 25px 0"
        >
          ⭐⭐⭐⭐⭐ - Karolina W., członkini VIP od 2 lat
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#374151"
          align="center"
          padding="0 0 15px 0"
          line-height="24px"
          font-style="italic"
        >
          "Uwielbiam mieć dostęp do nowości przed wszystkimi! Często kupuję rzeczy, które szybko się wyprzedają."
        </mj-text>
        <mj-text 
          font-size="14px"
          color="#6b7280"
          align="center"
        >
          ⭐⭐⭐⭐⭐ - Magdalena K., członkini Premium
        </mj-text>
      </mj-column>
    `
  });

  // Urgency CTA
  const urgencySection = new Section({
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
          ⏰ Oferta startowa kończy się ${validUntil}!
        </mj-text>
        <mj-text 
          font-size="20px"
          color="#d1fae5"
          align="center"
          padding="0 0 30px 0"
          line-height="28px"
        >
          Nie przegap ${launchDiscount}% zniżki na pierwszy miesiąc<br/>
          w dowolnym planie członkowskim!
        </mj-text>
        <mj-button 
          href="${config.store_url}/membership?utm_source=newsletter&campaign=vip-launch&code=${earlyBirdCode}"
          background-color="#ffffff"
          color="#059669"
          font-size="20px"
          font-weight="bold"
          padding="18px 36px"
          border-radius="8px"
        >
          🌟 Dołącz z kodem ${earlyBirdCode}
        </mj-button>
        <mj-text 
          font-size="14px"
          color="#a7f3d0"
          align="center"
          padding="25px 0 0 0"
        >
          Możesz anulować członkostwo w każdej chwili • Bez zobowiązań długoterminowych
        </mj-text>
      </mj-column>
    `
  });

  // Build children array, filtering out null values
  const containerChildren = [
    launchSection,
    offerBannerSection,
    pricingTable,
    benefitsSection,
    benefitsDetailsSection,
    testimonialSection,
    urgencySection
  ].filter(Boolean);

  const body = new Body({
    backgroundColor: config.background_color,
    children: [
      new Container({
        maxWidth: '600px',
        children: containerChildren
      })
    ]
  });

  html.props.children = [head, body];
  return html.render();
}