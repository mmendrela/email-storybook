"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWelcomeEmail = void 0;
const __1 = require("../");
const createWelcomeEmail = (config, customerName = 'Kochana klientko') => {
    const html = new __1.Html({ lang: 'pl' });
    // Head section
    const head = new __1.Head({
        children: [
            new __1.Title({ children: `Witaj w ${config.store_name} – Twój włoski styl czeka!` }),
            new __1.Preview({ children: `${customerName}, dziękujemy za rejestrację! Odkryj kolekcję włoskiej mody i otrzymaj 10% zniżki na pierwsze zakupy.` })
        ]
    });
    // Email body
    const body = new __1.Body({
        backgroundColor: config.background_color,
        fontFamily: 'Arial, sans-serif',
        children: [
            // Header with logo
            new __1.Section({
                backgroundColor: '#ffffff',
                padding: '20px 0',
                children: [
                    new __1.Column({
                        children: [
                            new __1.Image({
                                src: config.logo_url,
                                alt: config.store_name,
                                width: '180px',
                                height: 'auto'
                            })
                        ]
                    })
                ]
            }),
            // Main content container
            new __1.Container({
                maxWidth: '600px',
                backgroundColor: '#ffffff',
                children: [
                    // Hero section
                    new __1.Section({
                        backgroundUrl: config.hero_background_image,
                        padding: '60px 20px',
                        children: [
                            new __1.Column({
                                children: [
                                    new __1.Text({
                                        children: `Benvenuta, ${customerName}! 🌸`,
                                        fontSize: '32px',
                                        fontWeight: 'bold',
                                        color: '#ffffff',
                                        textAlign: 'center',
                                        padding: '0 0 20px 0',
                                        backgroundColor: 'rgba(0,0,0,0.3)',
                                        borderRadius: '10px'
                                    }),
                                    new __1.Text({
                                        children: config.hero_title.toUpperCase(),
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        color: '#ffffff',
                                        textAlign: 'center',
                                        padding: '10px 20px',
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                        borderRadius: '8px'
                                    })
                                ]
                            })
                        ]
                    }),
                    // Welcome message
                    new __1.Section({
                        padding: '40px 30px',
                        children: [
                            new __1.Column({
                                children: [
                                    new __1.Text({
                                        children: 'Dziękujemy za dołączenie do rodziny SoItalian! 💚🤍❤️',
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        color: config.text_color,
                                        textAlign: 'center',
                                        padding: '0 0 25px 0'
                                    }),
                                    new __1.Text({
                                        children: config.hero_subtitle,
                                        fontSize: '16px',
                                        color: config.text_color,
                                        lineHeight: '24px',
                                        textAlign: 'center',
                                        padding: '0 0 30px 0'
                                    }),
                                    new __1.Text({
                                        children: 'Jako powitanie, mamy dla Ciebie <strong>10% zniżki</strong> na pierwsze zakupy! Użyj kodu poniżej i odkryj naszą kolekcję włoskich topów i akcesoriów.',
                                        fontSize: '16px',
                                        color: config.text_color,
                                        lineHeight: '24px',
                                        textAlign: 'center',
                                        padding: '0 0 30px 0'
                                    })
                                ]
                            })
                        ]
                    }),
                    // Welcome discount
                    new __1.Section({
                        backgroundColor: config.button_color,
                        padding: '30px 20px',
                        children: [
                            new __1.Column({
                                children: [
                                    new __1.Text({
                                        children: 'TWÓJ KOD POWITALNY',
                                        fontSize: '16px',
                                        color: '#ffffff',
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        padding: '0 0 15px 0'
                                    }),
                                    new __1.Text({
                                        children: 'BENVENUTA10',
                                        fontSize: '32px',
                                        fontWeight: 'bold',
                                        color: '#ffffff',
                                        textAlign: 'center',
                                        padding: '0 0 15px 0',
                                        border: '2px dashed #ffffff',
                                        borderRadius: '8px'
                                    }),
                                    new __1.Text({
                                        children: '10% zniżki na pierwsze zakupy',
                                        fontSize: '14px',
                                        color: '#ffffff',
                                        textAlign: 'center'
                                    })
                                ]
                            })
                        ]
                    }),
                    // CTA Button
                    new __1.Section({
                        padding: '40px 30px',
                        children: [
                            new __1.Column({
                                children: [
                                    new __1.Button({
                                        href: `${config.hero_cta_link}?utm_source=welcome_email&utm_medium=email&utm_campaign=welcome&code=BENVENUTA10`,
                                        backgroundColor: config.button_color,
                                        color: '#ffffff',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        padding: '18px 40px',
                                        borderRadius: '6px',
                                        children: config.hero_cta_text.toUpperCase()
                                    })
                                ]
                            })
                        ]
                    }),
                    // Featured products
                    new __1.Section({
                        backgroundColor: config.background_color,
                        padding: '40px 20px',
                        children: [
                            new __1.Column({
                                children: [
                                    new __1.Text({
                                        children: 'NASZE BESTSELLERY 👑',
                                        fontSize: '22px',
                                        fontWeight: 'bold',
                                        color: config.text_color,
                                        textAlign: 'center',
                                        padding: '0 0 30px 0'
                                    })
                                ]
                            })
                        ]
                    }),
                    // Product row
                    new __1.Section({
                        backgroundColor: config.background_color,
                        padding: '0 20px 40px',
                        children: [
                            // Product 1
                            new __1.Column({
                                width: '33.33%',
                                children: [
                                    new __1.Image({
                                        src: config.product_1_image,
                                        alt: config.product_1_name,
                                        width: '150px',
                                        height: 'auto'
                                    }),
                                    new __1.Text({
                                        children: config.product_1_name,
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        color: config.text_color,
                                        textAlign: 'center',
                                        padding: '10px 5px 0'
                                    })
                                ]
                            }),
                            // Product 2
                            new __1.Column({
                                width: '33.33%',
                                children: [
                                    new __1.Image({
                                        src: config.product_2_image,
                                        alt: config.product_2_name,
                                        width: '150px',
                                        height: 'auto'
                                    }),
                                    new __1.Text({
                                        children: config.product_2_name,
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        color: config.text_color,
                                        textAlign: 'center',
                                        padding: '10px 5px 0'
                                    })
                                ]
                            }),
                            // Product 3
                            new __1.Column({
                                width: '33.33%',
                                children: [
                                    new __1.Image({
                                        src: config.product_3_image,
                                        alt: config.product_3_name,
                                        width: '150px',
                                        height: 'auto'
                                    }),
                                    new __1.Text({
                                        children: config.product_3_name,
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        color: config.text_color,
                                        textAlign: 'center',
                                        padding: '10px 5px 0'
                                    })
                                ]
                            })
                        ]
                    }),
                    // Separator
                    new __1.Hr({
                        borderColor: '#e0e0e0',
                        margin: '30px 0'
                    }),
                    // Additional info
                    new __1.Section({
                        padding: '20px 30px',
                        children: [
                            new __1.Column({
                                children: [
                                    new __1.Text({
                                        children: '✨ <strong>Darmowa dostawa</strong> przy zamówieniu powyżej 200 zł<br>🚚 <strong>Szybka realizacja</strong> zamówień w 1-2 dni robocze<br>💝 <strong>Eleganckie pakowanie</strong> każdego zamówienia',
                                        fontSize: '14px',
                                        color: '#666666',
                                        lineHeight: '22px',
                                        textAlign: 'center'
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            // Footer
            new __1.Section({
                backgroundColor: config.button_color,
                padding: '30px 20px',
                children: [
                    new __1.Column({
                        children: [
                            new __1.Text({
                                children: `${config.store_name} - Włoski styl na co dzień`,
                                fontSize: '18px',
                                fontWeight: 'bold',
                                color: '#ffffff',
                                textAlign: 'center',
                                padding: '0 0 15px 0'
                            }),
                            new __1.Text({
                                children: `📧 ${config.contact_email} | 📞 ${config.contact_phone}<br>📍 ${config.contact_address}`,
                                fontSize: '14px',
                                color: '#cccccc',
                                textAlign: 'center',
                                lineHeight: '20px',
                                padding: '0 0 20px 0'
                            }),
                            new __1.Text({
                                children: 'Nie chcesz już otrzymywać naszych wiadomości? <a href="#" style="color: #999999;">Wypisz się tutaj</a>',
                                fontSize: '12px',
                                color: '#999999',
                                textAlign: 'center'
                            })
                        ]
                    })
                ]
            })
        ]
    });
    html.props.children = [head, body];
    return html.render();
};
exports.createWelcomeEmail = createWelcomeEmail;
