"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSeasonalNewsletterEmail = createSeasonalNewsletterEmail;
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
const PricingTable_1 = require("../components/PricingTable");
function createSeasonalNewsletterEmail(config, params = {}) {
    const { season = 'jesień', seasonEmoji = '🍂', mainMessage = 'Odkryj najnowsze trendy na nadchodzący sezon', featuredProducts = 3, includeSubscriptionOffer = true, galleryStyle = 'three-columns', newsletterMonth = 'wrzesień' } = params;
    const html = new Html_1.Html({
        lang: 'pl',
        children: [
            new Head_1.Head({
                children: [
                    new Title_1.Title({
                        children: `${seasonEmoji} Newsletter ${newsletterMonth} - ${config.store_name}`
                    }),
                    new Preview_1.Preview({
                        children: `${mainMessage}. Zobacz co przygotowaliśmy na ${season} i skorzystaj z ekskluzywnych ofert!`
                    })
                ]
            }),
            new Body_1.Body({
                backgroundColor: config.background_color,
                children: [
                    // Header z logo
                    new Section_1.Section({
                        backgroundColor: '#ffffff',
                        padding: '25px 0',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Image_1.Image({
                                        src: config.logo_url,
                                        alt: config.store_name,
                                        width: '200px'
                                    }),
                                    new Text_1.Text({
                                        fontSize: '14px',
                                        color: '#666666',
                                        textAlign: 'center',
                                        padding: '10px 0 0 0',
                                        children: `Newsletter ${newsletterMonth} 2024`
                                    })
                                ]
                            })
                        ]
                    }),
                    // Hero sekcja z sezonowym komunikatem
                    new Section_1.Section({
                        backgroundColor: '#2c3e50',
                        backgroundUrl: config.hero_background_image,
                        padding: '60px 30px',
                        children: `
              <mj-column>
                <mj-text 
                  background-color="rgba(44, 62, 80, 0.8)"
                  border-radius="15px"
                  color="#ffffff" 
                  font-size="14px" 
                  font-weight="bold"
                  text-transform="uppercase"
                  letter-spacing="1px"
                  text-align="center" 
                  padding="12px 20px 8px"
                >
                  ${seasonEmoji} Sezonowe nowości ${seasonEmoji}
                </mj-text>
                <mj-text 
                  background-color="rgba(44, 62, 80, 0.9)"
                  border-radius="12px"
                  color="#ffffff" 
                  font-size="32px" 
                  font-weight="bold" 
                  text-align="center" 
                  line-height="1.2"
                  padding="25px"
                >
                  Włoska moda na ${season}
                </mj-text>
                <mj-text 
                  background-color="rgba(44, 62, 80, 0.7)"
                  border-radius="10px"
                  color="#ffffff" 
                  font-size="18px" 
                  text-align="center" 
                  padding="20px"
                >
                  ${mainMessage}
                </mj-text>
              </mj-column>
            `
                    }),
                    // Wiadomość od redakcji
                    new Section_1.Section({
                        backgroundColor: '#ffffff',
                        padding: '40px 30px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Heading_1.Heading({
                                        as: 'h2',
                                        fontSize: '26px',
                                        color: config.text_color,
                                        textAlign: 'center',
                                        padding: '0 0 20px 0',
                                        children: `Ciao Bella! ${seasonEmoji}`
                                    }),
                                    new Text_1.Text({
                                        fontSize: '16px',
                                        color: config.text_color,
                                        lineHeight: '26px',
                                        textAlign: 'center',
                                        padding: '0 0 25px 0',
                                        children: `
                      Nowy sezon przynosi ze sobą świeże inspiracje! W tym miesiącu prezentujemy Ci najnowsze trendy prosto z Mediolanu i Rzymu. 
                      <br><br>
                      Nasze najnowsze kolekcje łączą klasyczny włoski styl z nowoczesnymi akcentami - idealne na ${season}. 
                      Odkryj produkty, które pokochały już tysiące kobiet w całej Europie!
                    `
                                    })
                                ]
                            })
                        ]
                    }),
                    // Produkt miesiąca
                    new Section_1.Section({
                        backgroundColor: '#f8f9fa',
                        padding: '40px 20px 20px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Heading_1.Heading({
                                        as: 'h2',
                                        fontSize: '24px',
                                        color: config.text_color,
                                        textAlign: 'center',
                                        children: `${seasonEmoji} Produkt miesiąca ${newsletterMonth}`
                                    }),
                                    new Text_1.Text({
                                        fontSize: '16px',
                                        color: '#666666',
                                        textAlign: 'center',
                                        padding: '8px 0 25px 0',
                                        children: 'Wybrany przez naszych stylistów specjalnie dla Ciebie'
                                    })
                                ]
                            })
                        ]
                    }),
                    new OneProduct_1.OneProduct({
                        backgroundColor: '#f8f9fa',
                        padding: '0 20px 40px',
                        product: {
                            name: config.product_1_name + ' - Edycja Sezonowa',
                            description: `Wyjątkowy model w sezonowych kolorach - idealny na ${season}. Limited edition dostępna tylko w tym miesiącu!`,
                            price: '229 zł',
                            originalPrice: '289 zł',
                            image: config.product_1_image,
                            href: config.product_1_url + '?newsletter=' + newsletterMonth
                        },
                        buttonText: `${seasonEmoji} Zamawiam teraz`,
                        showDescription: true
                    }),
                    // Separator z cytatem
                    new Section_1.Section({
                        backgroundColor: '#e8f4f9',
                        padding: '35px 30px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Text_1.Text({
                                        fontSize: '20px',
                                        fontStyle: 'italic',
                                        color: '#2c5282',
                                        textAlign: 'center',
                                        padding: '0 0 15px 0',
                                        children: `"La moda passa, lo stile resta"`
                                    }),
                                    new Text_1.Text({
                                        fontSize: '14px',
                                        color: '#4299e1',
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        children: '- Coco Chanel'
                                    })
                                ]
                            })
                        ]
                    }),
                    // Galeria trendów sezonowych
                    new Section_1.Section({
                        backgroundColor: '#ffffff',
                        padding: '45px 20px 25px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Heading_1.Heading({
                                        as: 'h2',
                                        fontSize: '24px',
                                        color: config.text_color,
                                        textAlign: 'center',
                                        children: `📸 Trendy na ${season}`
                                    }),
                                    new Text_1.Text({
                                        fontSize: '16px',
                                        color: '#666666',
                                        textAlign: 'center',
                                        padding: '8px 0 25px 0',
                                        children: 'Inspiracje prosto z pokazów mody w Mediolanie'
                                    })
                                ]
                            })
                        ]
                    }),
                    new ImageGallery_1.ImageGallery({
                        backgroundColor: '#ffffff',
                        padding: '0 20px 40px',
                        images: [
                            { src: config.product_1_image, alt: `${season} trend 1`, href: config.product_1_url },
                            { src: config.product_2_image, alt: `${season} trend 2`, href: config.product_2_url },
                            { src: config.product_3_image, alt: `${season} trend 3`, href: config.product_3_url },
                            { src: config.product_1_image, alt: `${season} stylizacja`, href: config.store_url + 'trends' }
                        ],
                        layout: galleryStyle,
                        rounded: true
                    }),
                    // Produkty sezonowe
                    new Section_1.Section({
                        backgroundColor: '#f7f8fc',
                        padding: '45px 20px 25px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Heading_1.Heading({
                                        as: 'h2',
                                        fontSize: '24px',
                                        color: config.text_color,
                                        textAlign: 'center',
                                        children: `${seasonEmoji} Kolekcja sezonowa`
                                    })
                                ]
                            })
                        ]
                    }),
                    new ProductGrid_1.ProductGrid({
                        backgroundColor: '#f7f8fc',
                        padding: '0 20px 45px',
                        products: [
                            {
                                name: config.product_1_name,
                                price: '199 zł',
                                image: config.product_1_image,
                                href: config.product_1_url,
                                description: `Must-have na ${season}`
                            },
                            {
                                name: config.product_2_name,
                                price: '149 zł',
                                image: config.product_2_image,
                                href: config.product_2_url,
                                description: 'Klasyczny włoski styl'
                            },
                            ...(featuredProducts >= 3 ? [{
                                    name: config.product_3_name,
                                    price: '149 zł',
                                    image: config.product_3_image,
                                    href: config.product_3_url,
                                    description: 'Elegancki akcent'
                                }] : [])
                        ],
                        columns: featuredProducts >= 3 ? 3 : 2,
                        showPrices: true
                    }),
                    // Oferta subskrypcji (jeśli włączona)
                    ...(includeSubscriptionOffer ? [
                        new Section_1.Section({
                            backgroundColor: '#ffffff',
                            padding: '50px 20px 30px',
                            children: [
                                new Column_1.Column({
                                    children: [
                                        new Heading_1.Heading({
                                            as: 'h2',
                                            fontSize: '26px',
                                            color: config.text_color,
                                            textAlign: 'center',
                                            children: '💎 SoItalian VIP Newsletter'
                                        }),
                                        new Text_1.Text({
                                            fontSize: '16px',
                                            color: '#666666',
                                            textAlign: 'center',
                                            padding: '10px 0 30px 0',
                                            children: 'Dołącz do grona VIP i otrzymuj ekskluzywne korzyści'
                                        })
                                    ]
                                })
                            ]
                        }),
                        new PricingTable_1.PricingTable({
                            backgroundColor: '#ffffff',
                            padding: '0 10px 45px',
                            plans: [
                                {
                                    name: 'Newsletter VIP',
                                    price: 'Darmowy',
                                    period: 'miesięcznie',
                                    features: [
                                        'Wczesny dostęp do wyprzedaży',
                                        'Ekskluzywne kody rabatowe',
                                        'Pierwsze info o nowościach',
                                        'Stylizacje od ekspertów'
                                    ],
                                    buttonText: `${seasonEmoji} Dołączam do VIP`,
                                    buttonUrl: config.store_url + 'newsletter/vip'
                                }
                            ],
                            layout: 'simple'
                        })
                    ] : []),
                    // Separator
                    new Hr_1.Hr({
                        borderColor: '#e0e0e0',
                        width: '80%',
                        padding: '35px 0'
                    }),
                    // Porady stylistki
                    new Section_1.Section({
                        backgroundColor: '#fff9f0',
                        padding: '40px 30px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Heading_1.Heading({
                                        as: 'h3',
                                        fontSize: '22px',
                                        color: config.text_color,
                                        textAlign: 'center',
                                        padding: '0 0 20px 0',
                                        children: `${seasonEmoji} Porady stylistki na ${season}`
                                    }),
                                    new Text_1.Text({
                                        fontSize: '15px',
                                        color: config.text_color,
                                        lineHeight: '24px',
                                        children: `
                      <strong>🔸 Warstwy to podstawa</strong> - ${season === 'jesień' ? 'Łącz cienkie swetry z topami, aby być gotową na zmienną pogodę' : season === 'wiosna' ? 'Lekkie kardigany i żakiety to idealne uzupełnienie wiosennych stylizacji' : season === 'lato' ? 'Wybierz przewiewne tkaniny i jasne kolory' : 'Postaw na ciepłe, ale stylowe dodatki'}<br><br>
                      
                      <strong>🔸 Akcesoria mają znaczenie</strong> - Jeden dobry kapelusz może całkowicie zmienić look<br><br>
                      
                      <strong>🔸 Kolory sezonu</strong> - ${season === 'jesień' ? 'Ciepłe odcienie brązu, burgundu i złota' : season === 'wiosna' ? 'Pastelowe róże, błękity i żółcie' : season === 'lato' ? 'Biel, róż i naturalne beże' : 'Głębokie granaty, szarości i bordowe'}<br><br>
                      
                      <strong>🔸 Włoski szyk</strong> - Pamiętaj: lepiej mieć mniej, ale najwyższej jakości
                    `
                                    }),
                                    new Text_1.Text({
                                        fontSize: '13px',
                                        fontStyle: 'italic',
                                        color: '#8b6f47',
                                        textAlign: 'center',
                                        padding: '25px 0 0 0',
                                        children: '💡 Masz pytania o stylizacje? Napisz do naszej stylistki: style@soitalian.pl'
                                    })
                                ]
                            })
                        ]
                    }),
                    // Główne CTA
                    new Section_1.Section({
                        backgroundColor: '#2c3e50',
                        padding: '50px 30px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Text_1.Text({
                                        color: '#ecf0f1',
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        padding: '0 0 15px 0',
                                        children: `${seasonEmoji} Cała kolekcja czeka!`
                                    }),
                                    new Text_1.Text({
                                        color: '#bdc3c7',
                                        fontSize: '16px',
                                        textAlign: 'center',
                                        padding: '0 0 30px 0',
                                        children: `Odkryj wszystkie nowości na ${season} w naszym sklepie online`
                                    }),
                                    new Button_1.Button({
                                        href: config.store_url + `?season=${season}&newsletter=${newsletterMonth}`,
                                        backgroundColor: '#e74c3c',
                                        color: '#ffffff',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        padding: '18px 35px',
                                        borderRadius: '8px',
                                        children: `🛍️ Przeglądaj kolekcję ${season}`
                                    })
                                ]
                            })
                        ]
                    }),
                    // Social media i kontakt
                    new Section_1.Section({
                        backgroundColor: '#34495e',
                        padding: '35px 30px 25px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Text_1.Text({
                                        color: '#ecf0f1',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        padding: '0 0 20px 0',
                                        children: 'Śledź nas na social mediach!'
                                    }),
                                    new Text_1.Text({
                                        color: '#bdc3c7',
                                        fontSize: '16px',
                                        textAlign: 'center',
                                        children: `
                      📱 <a href="#" style="color: #3498db;">Instagram</a> | 
                      📘 <a href="#" style="color: #3498db;">Facebook</a> | 
                      📌 <a href="#" style="color: #3498db;">Pinterest</a>
                      <br><br>
                      Codzienne inspiracje i za kulisami SoItalian! ${seasonEmoji}
                    `
                                    })
                                ]
                            })
                        ]
                    }),
                    // Footer
                    new Section_1.Section({
                        backgroundColor: '#2c3e50',
                        padding: '30px 20px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Text_1.Text({
                                        color: '#ecf0f1',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        padding: '0 0 15px 0',
                                        children: `${config.store_name} - Włoski styl na co dzień`
                                    }),
                                    new Text_1.Text({
                                        color: '#95a5a6',
                                        fontSize: '14px',
                                        textAlign: 'center',
                                        lineHeight: '20px',
                                        padding: '0 0 20px 0',
                                        children: `📧 ${config.contact_email} | 📞 ${config.contact_phone}<br>📍 ${config.contact_address}`
                                    }),
                                    new Text_1.Text({
                                        color: '#7f8c8d',
                                        fontSize: '12px',
                                        textAlign: 'center',
                                        children: `Newsletter ${newsletterMonth} 2024 | <a href="#" style="color: #95a5a6;">Zmień preferencje</a> | <a href="#" style="color: #95a5a6;">Wypisz się</a>`
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
