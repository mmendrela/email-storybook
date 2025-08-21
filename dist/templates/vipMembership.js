"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVipMembershipEmail = createVipMembershipEmail;
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
const PricingTable_1 = require("../components/PricingTable");
const ImageGallery_1 = require("../components/ImageGallery");
function createVipMembershipEmail(config, params = {}) {
    const { customerName = 'Bella', specialOffer = true, discountPercent = 25, validUntil = '31 sierpnia' } = params;
    const html = new Html_1.Html({
        lang: 'pl',
        children: [
            new Head_1.Head({
                children: [
                    new Title_1.Title({
                        children: `Zostań VIP Member - ekskluzywne korzyści czekają! | ${config.store_name}`
                    }),
                    new Preview_1.Preview({
                        children: `${customerName}, dołącz do grona VIP i otrzymaj dostęp do ekskluzywnych kolekcji, personalnego shoppera i wiele więcej!`
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
                    // Hero sekcja - gradient background
                    new Section_1.Section({
                        backgroundColor: '#000000',
                        padding: '50px 20px',
                        children: `
              <mj-column>
                <mj-text 
                  color="#ffd700" 
                  font-size="16px" 
                  font-weight="bold" 
                  text-align="center" 
                  text-transform="uppercase"
                  letter-spacing="2px"
                  padding="0 0 15px 0"
                >
                  ✨ Ekskluzywne zaproszenie ✨
                </mj-text>
                <mj-text 
                  color="#ffffff" 
                  font-size="36px" 
                  font-weight="bold" 
                  text-align="center" 
                  line-height="1.2"
                  padding="0 0 20px 0"
                >
                  VIP MEMBERSHIP
                </mj-text>
                <mj-text 
                  color="#ffffff" 
                  font-size="20px" 
                  text-align="center" 
                  padding="0 0 10px 0"
                >
                  Ciao ${customerName}! 👑
                </mj-text>
                <mj-text 
                  color="#cccccc" 
                  font-size="16px" 
                  text-align="center" 
                  line-height="24px"
                >
                  Zostałaś wybrana do dołączenia do ekskluzywnego grona VIP Members. Odkryj świat luksusowej włoskiej mody!
                </mj-text>
              </mj-column>
            `
                    }),
                    // Specjalna oferta (jeśli aktywna)
                    ...(specialOffer ? [
                        new Section_1.Section({
                            backgroundColor: '#ffd700',
                            padding: '25px 20px',
                            children: [
                                new Column_1.Column({
                                    children: [
                                        new Text_1.Text({
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            color: '#000000',
                                            textAlign: 'center',
                                            children: `🎉 SPECJALNA OFERTA: ${discountPercent}% zniżki na członkostwo do ${validUntil}!`
                                        })
                                    ]
                                })
                            ]
                        })
                    ] : []),
                    // Korzyści członkostwa
                    new Section_1.Section({
                        backgroundColor: '#ffffff',
                        padding: '50px 30px 30px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Heading_1.Heading({
                                        as: 'h2',
                                        fontSize: '28px',
                                        color: config.text_color,
                                        textAlign: 'center',
                                        padding: '0 0 30px 0',
                                        children: '✨ Korzyści VIP Membership'
                                    }),
                                    new Text_1.Text({
                                        fontSize: '16px',
                                        color: config.text_color,
                                        lineHeight: '28px',
                                        padding: '0 0 30px 0',
                                        children: `
                      🎯 <strong>Wczesny dostęp</strong> do nowych kolekcji (7 dni przed oficjalną premierą)<br><br>
                      👗 <strong>Ekskluzywne produkty</strong> dostępne tylko dla członków VIP<br><br>
                      🛍️ <strong>Personal Shopper</strong> - bezpłatne konsultacje stylizacyjne<br><br>
                      🚚 <strong>Darmowa dostawa</strong> bez minimalnej kwoty zamówienia<br><br>
                      💎 <strong>Specjalne zniżki</strong> na wszystkie produkty przez cały rok<br><br>
                      🎁 <strong>Prezenty urodzinowe</strong> i niespodzianki sezonowe<br><br>
                      📱 <strong>Priorytetowe wsparcie</strong> - dedykowana linia dla VIP
                    `
                                    })
                                ]
                            })
                        ]
                    }),
                    // Galeria ekskluzywnych produktów
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
                                        children: '👑 Ekskluzywne produkty VIP'
                                    }),
                                    new Text_1.Text({
                                        fontSize: '16px',
                                        color: '#666666',
                                        textAlign: 'center',
                                        padding: '10px 0 20px 0',
                                        children: 'Produkty dostępne tylko dla członków VIP'
                                    })
                                ]
                            })
                        ]
                    }),
                    new ImageGallery_1.ImageGallery({
                        backgroundColor: '#f8f9fa',
                        padding: '0 20px 30px',
                        images: [
                            {
                                src: config.product_1_image,
                                alt: `${config.product_1_name} - VIP Exclusive`,
                                href: `${config.product_1_url}?vip=true`
                            },
                            {
                                src: config.product_2_image,
                                alt: `${config.product_2_name} - VIP Exclusive`,
                                href: `${config.product_2_url}?vip=true`
                            },
                            {
                                src: config.product_3_image,
                                alt: `${config.product_3_name} - VIP Exclusive`,
                                href: `${config.product_3_url}?vip=true`
                            },
                            {
                                src: config.product_1_image,
                                alt: 'VIP Collection Preview',
                                href: `${config.store_url}vip`
                            }
                        ],
                        layout: 'grid-2x2',
                        rounded: true
                    }),
                    // Plany członkostwa
                    new Section_1.Section({
                        backgroundColor: '#ffffff',
                        padding: '50px 20px 30px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Heading_1.Heading({
                                        as: 'h2',
                                        fontSize: '28px',
                                        color: config.text_color,
                                        textAlign: 'center',
                                        children: '💎 Wybierz swój plan VIP'
                                    }),
                                    new Text_1.Text({
                                        fontSize: '16px',
                                        color: '#666666',
                                        textAlign: 'center',
                                        padding: '10px 0 30px 0',
                                        children: 'Elastyczne opcje dopasowane do Twoich potrzeb'
                                    })
                                ]
                            })
                        ]
                    }),
                    new PricingTable_1.PricingTable({
                        backgroundColor: '#ffffff',
                        padding: '0 10px 40px',
                        plans: [
                            {
                                name: 'VIP Basic',
                                price: specialOffer ? '127 zł' : '169 zł',
                                period: 'miesięcznie',
                                features: [
                                    'Wczesny dostęp do kolekcji',
                                    'Zniżka 15% na wszystkie produkty',
                                    'Darmowa dostawa',
                                    'Newsletter VIP z ekskluzywną zawartością'
                                ],
                                buttonText: 'Wybierz Basic',
                                buttonUrl: `${config.store_url}vip/basic${specialOffer ? `?discount=${discountPercent}` : ''}`
                            },
                            {
                                name: 'VIP Premium',
                                price: specialOffer ? '187 zł' : '249 zł',
                                period: 'miesięcznie',
                                features: [
                                    'Wszystko z planu Basic',
                                    'Personal Shopper (2 sesje/miesiąc)',
                                    'Zniżka 25% na wszystkie produkty',
                                    'Dostęp do ekskluzywnych produktów VIP',
                                    'Prezenty urodzinowe i sezonowe',
                                    'Priorytetowe wsparcie klienta'
                                ],
                                buttonText: 'Zostań Premium VIP',
                                buttonUrl: `${config.store_url}vip/premium${specialOffer ? `?discount=${discountPercent}` : ''}`,
                                emphasized: true,
                                badge: 'Najpopularniejsze'
                            }
                        ],
                        layout: 'two-tier'
                    }),
                    // Testimonial sekcja
                    new Section_1.Section({
                        backgroundColor: '#f8f9fa',
                        padding: '40px 30px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Text_1.Text({
                                        fontSize: '20px',
                                        fontStyle: 'italic',
                                        color: config.text_color,
                                        textAlign: 'center',
                                        padding: '0 0 15px 0',
                                        children: '"Membership VIP w SoItalian to najlepsza inwestycja w moją garderobę. Personal shopper pomógł mi znaleźć idealne stylizacje!"'
                                    }),
                                    new Text_1.Text({
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        color: '#666666',
                                        textAlign: 'center',
                                        children: '- Anna K., VIP Member od 2023'
                                    })
                                ]
                            })
                        ]
                    }),
                    // Ostateczne CTA
                    new Section_1.Section({
                        backgroundColor: '#000000',
                        padding: '50px 30px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Text_1.Text({
                                        color: '#ffd700',
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        padding: '0 0 15px 0',
                                        children: 'Nie czekaj dłużej!'
                                    }),
                                    new Text_1.Text({
                                        color: '#ffffff',
                                        fontSize: '18px',
                                        textAlign: 'center',
                                        padding: '0 0 25px 0',
                                        children: specialOffer
                                            ? `Specjalna oferta ${discountPercent}% zniżki wygasa ${validUntil}`
                                            : 'Dołącz do ekskluzywnego grona VIP Members już dziś'
                                    }),
                                    new Button_1.Button({
                                        href: `${config.store_url}vip${specialOffer ? `?discount=${discountPercent}` : ''}`,
                                        backgroundColor: '#ffd700',
                                        color: '#000000',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        padding: '18px 36px',
                                        borderRadius: '8px',
                                        children: '👑 Zostań VIP Member'
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
                    // FAQ sekcja
                    new Section_1.Section({
                        backgroundColor: '#ffffff',
                        padding: '40px 30px',
                        children: [
                            new Column_1.Column({
                                children: [
                                    new Heading_1.Heading({
                                        as: 'h3',
                                        fontSize: '20px',
                                        color: config.text_color,
                                        textAlign: 'center',
                                        padding: '0 0 25px 0',
                                        children: '❓ Najczęściej zadawane pytania'
                                    }),
                                    new Text_1.Text({
                                        fontSize: '14px',
                                        color: config.text_color,
                                        lineHeight: '24px',
                                        children: `
                      <strong>Czy mogę anulować członkostwo w każdej chwili?</strong><br>
                      Tak, możesz anulować członkostwo bez podania przyczyny z 30-dniowym wypowiedzeniem.<br><br>
                      
                      <strong>Jak długo trwa dostawa produktów VIP?</strong><br>
                      Produkty VIP są wysyłane ekspresowo w ciągu 24 godzin.<br><br>
                      
                      <strong>Czy Personal Shopper jest dostępny zdalnie?</strong><br>
                      Tak! Konsultacje można prowadzić przez video call lub chat.
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
                                        children: `${config.store_name} VIP - Ekskluzywny włoski styl`
                                    }),
                                    new Text_1.Text({
                                        color: '#cccccc',
                                        fontSize: '14px',
                                        textAlign: 'center',
                                        lineHeight: '20px',
                                        padding: '0 0 20px 0',
                                        children: `📧 vip@${config.contact_email.split('@')[1]} | 📞 ${config.contact_phone}<br>📍 ${config.contact_address}`
                                    }),
                                    new Text_1.Text({
                                        color: '#999999',
                                        fontSize: '12px',
                                        textAlign: 'center',
                                        children: 'Nie chcesz już otrzymywać zaproszeń VIP? <a href="#" style="color: #999999;">Zmień preferencje</a>'
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
