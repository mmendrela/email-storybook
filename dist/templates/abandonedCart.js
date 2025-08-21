"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAbandonedCartEmail = createAbandonedCartEmail;
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
const CartSummary_1 = require("../components/CartSummary");
const ProductGrid_1 = require("../components/ProductGrid");
function createAbandonedCartEmail(config, params = {}) {
    const { customerName = 'Klient', discountPercent = 10, promoCode = 'COMEBACK10', cartValue = '348 zł', urgencyHours = 24 } = params;
    const html = new Html_1.Html({
        lang: 'pl',
        children: [
            new Head_1.Head({
                children: [
                    new Title_1.Title({
                        children: `${customerName}, zostało Ci coś w koszyku - ${config.store_name}`
                    }),
                    new Preview_1.Preview({
                        children: `Dokończ zakupy i otrzymaj ${discountPercent}% zniżki! Twój koszyk o wartości ${cartValue} czeka na Ciebie.`
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
                    // Hero sekcja z komunikatem
                    new Section_1.Section({
                        backgroundColor: '#fff3cd',
                        border: '1px solid #ffeaa7',
                        padding: '30px 20px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Text_1.Text({
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        color: '#856404',
                                        textAlign: 'center',
                                        padding: '0 0 15px 0',
                                        children: `Cześć ${customerName}! 👋`
                                    }),
                                    new Text_1.Text({
                                        fontSize: '18px',
                                        color: '#856404',
                                        textAlign: 'center',
                                        lineHeight: '26px',
                                        children: `Zauważyliśmy, że zostały Ci produkty w koszyku. Nie trać tej okazji - dokończ zakupy w ciągu najbliższych <strong>${urgencyHours} godzin</strong> i otrzymaj <strong>${discountPercent}% zniżki</strong>!`
                                    })
                                ]
                            })
                        ]
                    }),
                    // Kod zniżkowy
                    new Section_1.Section({
                        backgroundColor: '#d4edda',
                        border: '1px solid #c3e6cb',
                        padding: '25px 20px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Text_1.Text({
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        color: '#155724',
                                        textAlign: 'center',
                                        padding: '0 0 10px 0',
                                        children: 'TWÓJ KOD ZNIŻKOWY'
                                    }),
                                    new Text_1.Text({
                                        backgroundColor: '#ffffff',
                                        border: '2px dashed #155724',
                                        borderRadius: '8px',
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        color: '#155724',
                                        textAlign: 'center',
                                        padding: '15px',
                                        children: promoCode
                                    }),
                                    new Text_1.Text({
                                        fontSize: '12px',
                                        color: '#155724',
                                        textAlign: 'center',
                                        padding: '10px 0 0 0',
                                        children: `${discountPercent}% zniżki na całe zamówienie`
                                    })
                                ]
                            })
                        ]
                    }),
                    // Tytuł koszyka
                    new Section_1.Section({
                        backgroundColor: '#ffffff',
                        padding: '40px 30px 20px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Heading_1.Heading({
                                        as: 'h2',
                                        fontSize: '26px',
                                        color: config.text_color,
                                        textAlign: 'center',
                                        children: '🛒 Twój koszyk'
                                    })
                                ]
                            })
                        ]
                    }),
                    // CartSummary component
                    new CartSummary_1.CartSummary({
                        backgroundColor: '#ffffff',
                        padding: '0 20px',
                        title: '',
                        items: [
                            {
                                name: config.product_1_name,
                                image: config.product_1_image,
                                quantity: 1,
                                price: '199 zł'
                            },
                            {
                                name: config.product_2_name,
                                image: config.product_2_image,
                                quantity: 1,
                                price: '149 zł'
                            }
                        ],
                        subtotal: '348 zł',
                        shipping: 'Darmowa',
                        tax: '74 zł',
                        total: '422 zł',
                        checkoutUrl: `${config.store_url}checkout?promo=${promoCode}`,
                        checkoutText: '💳 Dokończ zakupy z kodem'
                    }),
                    // Pilność
                    new Section_1.Section({
                        backgroundColor: '#f8d7da',
                        border: '1px solid #f5c6cb',
                        padding: '20px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Text_1.Text({
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        color: '#721c24',
                                        textAlign: 'center',
                                        children: `⏰ Kod ${promoCode} wygasa za ${urgencyHours} godzin!`
                                    })
                                ]
                            })
                        ]
                    }),
                    // Separator
                    new Hr_1.Hr({
                        borderColor: '#e0e0e0',
                        width: '80%',
                        padding: '30px 0'
                    }),
                    // Polecane produkty
                    new Section_1.Section({
                        backgroundColor: '#f8f9fa',
                        padding: '40px 20px 20px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Heading_1.Heading({
                                        as: 'h2',
                                        fontSize: '22px',
                                        color: config.text_color,
                                        textAlign: 'center',
                                        children: '💡 Może również Ci się spodobają'
                                    })
                                ]
                            })
                        ]
                    }),
                    new ProductGrid_1.ProductGrid({
                        backgroundColor: '#f8f9fa',
                        padding: '0 20px 40px',
                        products: [
                            {
                                name: config.product_3_name,
                                price: '149 zł',
                                image: config.product_3_image,
                                href: `${config.product_3_url}?promo=${promoCode}`,
                                description: 'Idealny dodatek do Twojej kolekcji'
                            },
                            {
                                name: config.product_1_name + ' - Stylizacja 2',
                                price: '199 zł',
                                image: config.product_1_image,
                                href: `${config.product_1_url}?promo=${promoCode}`,
                                description: 'Ten sam top w innej kolorystyce'
                            }
                        ],
                        columns: 2,
                        showPrices: true
                    }),
                    // Ostateczne CTA
                    new Section_1.Section({
                        backgroundColor: '#dc3545',
                        padding: '40px 30px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Text_1.Text({
                                        color: '#ffffff',
                                        fontSize: '22px',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        padding: '0 0 10px 0',
                                        children: 'Nie przegap okazji!'
                                    }),
                                    new Text_1.Text({
                                        color: '#ffffff',
                                        fontSize: '16px',
                                        textAlign: 'center',
                                        padding: '0 0 25px 0',
                                        children: `Twoja zniżka ${discountPercent}% zostanie utracona za ${urgencyHours} godzin`
                                    }),
                                    new Button_1.Button({
                                        href: `${config.store_url}checkout?promo=${promoCode}`,
                                        backgroundColor: '#ffffff',
                                        color: '#dc3545',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        padding: '16px 32px',
                                        borderRadius: '8px',
                                        children: `🚀 Dokończ zakupy z ${promoCode}`
                                    })
                                ]
                            })
                        ]
                    }),
                    // Dlaczego warto
                    new Section_1.Section({
                        backgroundColor: '#ffffff',
                        padding: '40px 30px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Text_1.Text({
                                        color: config.text_color,
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        padding: '0 0 20px 0',
                                        children: 'Dlaczego warto wybrać SoItalian?'
                                    }),
                                    new Text_1.Text({
                                        color: '#666666',
                                        fontSize: '14px',
                                        lineHeight: '22px',
                                        textAlign: 'center',
                                        children: `
                      ✨ <strong>Najwyższa jakość</strong> - produkty prosto z Włoch<br>
                      🚚 <strong>Darmowa dostawa</strong> przy zamówieniu powyżej 200 zł<br>
                      🔄 <strong>Łatwy zwrot</strong> w ciągu 14 dni<br>
                      💝 <strong>Eleganckie pakowanie</strong> każdego zamówienia<br>
                      📞 <strong>Wsparcie klienta</strong> 7 dni w tygodniu
                    `
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
