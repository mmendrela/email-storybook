"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductCatalogEmail = createProductCatalogEmail;
const Html_1 = require("../components/Html");
const Head_1 = require("../components/Head");
const Body_1 = require("../components/Body");
const Title_1 = require("../components/Title");
const Preview_1 = require("../components/Preview");
const Container_1 = require("../components/Container");
const AlternatingProductRow_1 = require("../components/AlternatingProductRow");
function createProductCatalogEmail(config, params = {}) {
    const { customerName = 'Klient', season = 'lato 2024', promoCode = 'KATALOG20', discountPercent = 20 } = params;
    // Create email structure
    const html = new Html_1.Html({ lang: 'pl' });
    const head = new Head_1.Head({
        children: [
            new Title_1.Title({
                children: `${customerName}, odkryj naszą kolekcję ${season}!`
            }),
            new Preview_1.Preview({
                children: `Ekskluzywne produkty z ${discountPercent}% zniżką. Kod: ${promoCode}. Poznaj naszą kolekcję ${season}!`
            })
        ]
    });
    // Prepare all products data
    const products = [
        {
            name: config.product_1_name,
            price: '199 zł',
            originalPrice: '249 zł',
            image: config.product_1_image,
            href: config.product_1_url,
            description: `Elegancki ${config.product_1_name.toLowerCase()} w różowym kolorze, idealny na ${season}. Wykonany z wysokiej jakości materiału, zapewnia komfort noszenia przez cały dzień.`
        },
        {
            name: config.product_2_name,
            price: '149 zł',
            image: config.product_2_image,
            href: config.product_2_url,
            description: `Stylowy ${config.product_2_name.toLowerCase()}, idealny dodatek do letnich stylizacji. Chroni przed słońcem zachowując elegancki wygląd.`
        },
        {
            name: config.product_3_name,
            price: '159 zł',
            image: config.product_3_image,
            href: config.product_3_url,
            description: `Elegancki ${config.product_3_name.toLowerCase()}, dodaje uroku każdej stylizacji. Delikatna ażurowa wstążka to subtelny akcent.`
        },
        {
            name: config.product_1_name + ' (Edycja Limitowana)',
            price: '229 zł',
            originalPrice: '279 zł',
            image: config.product_1_image,
            href: config.product_1_url,
            description: `Limitowana edycja naszego bestselleru z ekskluzywnym wykończeniem. Dostępna tylko dla wybranych klientów i tylko przez ograniczony czas.`
        }
    ];
    const body = new Body_1.Body({
        backgroundColor: config.background_color,
        children: [
            new Container_1.Container({
                maxWidth: '600px',
                children: [
                    new AlternatingProductRow_1.AlternatingProductRow({
                        title: `Kolekcja ${season} • Ekskluzywnie dla ${customerName}`,
                        products: products,
                        buttonText: 'Zobacz szczegóły',
                        showDescription: true,
                        imageWidth: '280px'
                    })
                ]
            })
        ]
    });
    html.props.children = [head, body];
    return html.render();
}
