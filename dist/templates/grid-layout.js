"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGridLayoutEmail = createGridLayoutEmail;
const Html_1 = require("../components/Html");
const Head_1 = require("../components/Head");
const Body_1 = require("../components/Body");
const Title_1 = require("../components/Title");
const Preview_1 = require("../components/Preview");
const Container_1 = require("../components/Container");
const Section_1 = require("../components/Section");
const FourCardsRow_1 = require("../components/FourCardsRow");
function createGridLayoutEmail(config, params = {}) {
    const { customerName = 'Klient', collectionName = 'Nowości', promoCode = 'GRID25', validUntil = '15 września 2024' } = params;
    const html = new Html_1.Html({ lang: 'pl' });
    const head = new Head_1.Head({
        children: [
            new Title_1.Title({
                children: `${customerName}, sprawdź ${collectionName.toLowerCase()}!`
            }),
            new Preview_1.Preview({
                children: `Nowa kolekcja ${collectionName.toLowerCase()} już dostępna! Kod: ${promoCode} ważny do ${validUntil}.`
            })
        ]
    });
    // Header section
    const headerSection = new Section_1.Section({
        backgroundColor: '#1f2937',
        padding: '30px',
        children: `
      <mj-column>
        <mj-text 
          font-size="32px"
          font-weight="bold"
          color="#ffffff"
          align="center"
          padding="0 0 15px 0"
        >
          ${collectionName} 2024
        </mj-text>
        <mj-text 
          font-size="18px"
          color="#d1d5db"
          align="center"
          line-height="26px"
        >
          Cześć ${customerName}! Odkryj naszą najnowszą kolekcję w wyjątkowych cenach.
        </mj-text>
      </mj-column>
    `
    });
    // Products for grid
    const products = [
        {
            name: config.product_1_name,
            price: '179 zł',
            originalPrice: '229 zł',
            image: config.product_1_image,
            href: config.product_1_url + '?utm_source=newsletter&utm_campaign=grid-layout'
        },
        {
            name: config.product_2_name,
            price: '139 zł',
            originalPrice: '169 zł',
            image: config.product_2_image,
            href: config.product_2_url + '?utm_source=newsletter&utm_campaign=grid-layout'
        },
        {
            name: config.product_3_name,
            price: '149 zł',
            originalPrice: '179 zł',
            image: config.product_3_image,
            href: config.product_3_url + '?utm_source=newsletter&utm_campaign=grid-layout'
        },
        {
            name: config.product_1_name + ' (Biała)',
            price: '189 zł',
            originalPrice: '239 zł',
            image: config.product_1_image,
            href: config.product_1_url + '?utm_source=newsletter&utm_campaign=grid-layout&variant=white'
        }
    ];
    const gridRow = new FourCardsRow_1.FourCardsRow({
        title: '✨ Wybierz swój ulubiony ✨',
        products: products,
        buttonText: 'Dodaj do koszyka'
    });
    // Promotional section
    const promoSection = new Section_1.Section({
        backgroundColor: '#f3f4f6',
        padding: '40px 30px',
        children: `
      <mj-column>
        <mj-text 
          font-size="24px"
          font-weight="bold"
          color="#1f2937"
          align="center"
          padding="0 0 20px 0"
        >
          🎁 Specjalna oferta tylko dla Ciebie!
        </mj-text>
        <mj-text 
          font-size="36px"
          font-weight="bold"
          color="#dc2626"
          align="center"
          padding="0 0 15px 0"
        >
          -25%
        </mj-text>
        <mj-text 
          font-size="18px"
          color="#374151"
          align="center"
          padding="0 0 25px 0"
          line-height="26px"
        >
          Użyj kodu: <strong>${promoCode}</strong><br/>
          Oferta ważna do: ${validUntil}
        </mj-text>
        <mj-button 
          href="${config.store_url}?utm_source=newsletter&utm_campaign=grid-layout&code=${promoCode}"
          background-color="#dc2626"
          color="#ffffff"
          font-size="18px"
          font-weight="bold"
          padding="16px 32px"
          border-radius="8px"
        >
          🛒 Kup teraz z kodem ${promoCode}
        </mj-button>
      </mj-column>
    `
    });
    const body = new Body_1.Body({
        backgroundColor: config.background_color,
        children: [
            new Container_1.Container({
                maxWidth: '600px',
                children: [
                    headerSection,
                    gridRow,
                    promoSection
                ]
            })
        ]
    });
    html.props.children = [head, body];
    return html.render();
}
