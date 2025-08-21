"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductShowcaseEmail = createProductShowcaseEmail;
const Html_1 = require("../components/Html");
const Head_1 = require("../components/Head");
const Body_1 = require("../components/Body");
const Title_1 = require("../components/Title");
const Preview_1 = require("../components/Preview");
const Section_1 = require("../components/Section");
const Column_1 = require("../components/Column");
const Image_1 = require("../components/Image");
const Text_1 = require("../components/Text");
const Button_1 = require("../components/Button");
const Heading_1 = require("../components/Heading");
const Hr_1 = require("../components/Hr");
const OneProduct_1 = require("../components/OneProduct");
const ProductGrid_1 = require("../components/ProductGrid");
const ImageGallery_1 = require("../components/ImageGallery");
function createProductShowcaseEmail(config, params = {}) {
    const { featuredProduct = config.product_1_name, collectionTitle = 'Najnowsza Kolekcja', galleryLayout = 'grid-2x2' } = params;
    const html = new Html_1.Html({
        lang: 'pl',
        children: [
            new Head_1.Head({
                children: [
                    new Title_1.Title({
                        children: `${collectionTitle} - ${config.store_name}`
                    }),
                    new Preview_1.Preview({
                        children: `Odkryj ${featuredProduct} i inne produkty z naszej najnowszej kolekcji. Włoski styl na każdy dzień!`
                    })
                ]
            }),
            new Body_1.Body({
                backgroundColor: config.background_color,
                children: [
                    // Header z logo
                    new Section_1.Section({
                        backgroundColor: '#ffffff',
                        padding: '20px 0',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Image_1.Image({
                                        src: config.logo_url,
                                        alt: config.store_name,
                                        width: '180px'
                                    })
                                ]
                            })
                        ]
                    }),
                    // Hero sekcja
                    new Section_1.Section({
                        backgroundUrl: config.hero_background_image,
                        padding: '60px 20px',
                        children: `
              <mj-column>
                <mj-text 
                  background-color="rgba(0,0,0,0.6)"
                  border-radius="10px"
                  color="#ffffff" 
                  font-size="32px" 
                  font-weight="bold" 
                  text-align="center" 
                  padding="20px"
                >
                  ${collectionTitle} ✨
                </mj-text>
                <mj-text 
                  background-color="rgba(0,0,0,0.4)"
                  border-radius="8px"
                  color="#ffffff" 
                  font-size="18px" 
                  text-align="center" 
                  padding="15px"
                >
                  ${config.hero_subtitle}
                </mj-text>
              </mj-column>
            `
                    }),
                    // Produkt główny (featured)
                    new Section_1.Section({
                        backgroundColor: '#ffffff',
                        padding: '40px 20px 20px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Heading_1.Heading({
                                        as: 'h2',
                                        fontSize: '28px',
                                        color: config.text_color,
                                        textAlign: 'center',
                                        padding: '0 0 30px 0',
                                        children: '⭐ Produkt Miesiąca'
                                    })
                                ]
                            })
                        ]
                    }),
                    // OneProduct component
                    new OneProduct_1.OneProduct({
                        backgroundColor: '#ffffff',
                        padding: '0 20px 40px',
                        product: {
                            name: config.product_1_name,
                            description: 'Wyjątkowy top w kolorze różowym - must-have w każdej garderobie. Wykonany z najwyższej jakości materiałów, zapewniający komfort i styl.',
                            price: '199 zł',
                            originalPrice: '269 zł',
                            image: config.product_1_image,
                            href: config.product_1_url
                        },
                        buttonText: '🛍️ Dodaj do koszyka',
                        showDescription: true
                    }),
                    // Separator
                    new Hr_1.Hr({
                        borderColor: '#e0e0e0',
                        width: '80%',
                        padding: '30px 0'
                    }),
                    // Galeria produktów
                    new Section_1.Section({
                        backgroundColor: '#f9f9f9',
                        padding: '40px 20px 20px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Heading_1.Heading({
                                        as: 'h2',
                                        fontSize: '24px',
                                        color: config.text_color,
                                        textAlign: 'center',
                                        children: '📸 Zobacz w akcji'
                                    })
                                ]
                            })
                        ]
                    }),
                    new ImageGallery_1.ImageGallery({
                        backgroundColor: '#f9f9f9',
                        padding: '0 20px 40px',
                        images: [
                            { src: config.product_1_image, alt: config.product_1_name, href: config.product_1_url },
                            { src: config.product_2_image, alt: config.product_2_name, href: config.product_2_url },
                            { src: config.product_3_image, alt: config.product_3_name, href: config.product_3_url },
                            { src: config.product_1_image, alt: `${config.product_1_name} - stylizacja 2`, href: config.product_1_url }
                        ],
                        layout: galleryLayout,
                        rounded: true
                    }),
                    // Produkty powiązane
                    new Section_1.Section({
                        backgroundColor: '#ffffff',
                        padding: '40px 20px 20px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Heading_1.Heading({
                                        as: 'h2',
                                        fontSize: '24px',
                                        color: config.text_color,
                                        textAlign: 'center',
                                        children: '🌟 Może Ci się również spodobać'
                                    })
                                ]
                            })
                        ]
                    }),
                    new ProductGrid_1.ProductGrid({
                        backgroundColor: '#ffffff',
                        padding: '0 20px 40px',
                        products: [
                            {
                                name: config.product_2_name,
                                price: '149 zł',
                                image: config.product_2_image,
                                href: config.product_2_url,
                                description: 'Elegancki kapelusz z czarną wstążką'
                            },
                            {
                                name: config.product_3_name,
                                price: '149 zł',
                                image: config.product_3_image,
                                href: config.product_3_url,
                                description: 'Kapelusz z delikatną koronkową wstążką'
                            }
                        ],
                        columns: 2,
                        showPrices: true
                    }),
                    // CTA sekcja
                    new Section_1.Section({
                        backgroundColor: config.button_color,
                        padding: '40px 30px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Text_1.Text({
                                        color: '#ffffff',
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        padding: '0 0 20px 0',
                                        children: 'Nie czekaj! Odkryj całą kolekcję'
                                    }),
                                    new Button_1.Button({
                                        href: config.store_url,
                                        backgroundColor: '#ffffff',
                                        color: config.button_color,
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        padding: '15px 30px',
                                        borderRadius: '8px',
                                        children: '👗 Zobacz wszystkie produkty'
                                    })
                                ]
                            })
                        ]
                    }),
                    // Footer
                    new Section_1.Section({
                        backgroundColor: '#333333',
                        padding: '30px 20px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Text_1.Text({
                                        color: '#ffffff',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        padding: '0 0 15px 0',
                                        children: `${config.store_name} - Włoski styl na co dzień`
                                    }),
                                    new Text_1.Text({
                                        color: '#cccccc',
                                        fontSize: '14px',
                                        textAlign: 'center',
                                        lineHeight: '20px',
                                        padding: '0 0 20px 0',
                                        children: `📧 ${config.contact_email} | 📞 ${config.contact_phone}<br>📍 ${config.contact_address}`
                                    }),
                                    new Text_1.Text({
                                        color: '#999999',
                                        fontSize: '12px',
                                        textAlign: 'center',
                                        children: 'Nie chcesz już otrzymywać naszych wiadomości? <a href="#" style="color: #999999;">Wypisz się tutaj</a>'
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
    return html.render();
}
