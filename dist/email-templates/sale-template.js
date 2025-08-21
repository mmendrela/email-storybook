"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSaleEmail = void 0;
const __1 = require("../");
const createSaleEmail = (config, saleConfig) => {
    const html = new __1.Html({ lang: 'pl' });
    // Head section
    const head = new __1.Head({
        children: [
            new __1.Title({ children: `${saleConfig.saleTitle} -${saleConfig.discountPercent}% | ${config.store_name}` }),
            new __1.Preview({ children: `${saleConfig.urgencyMessage || 'Nie przegap!'} Ekskluzywna wyprzedaż -${saleConfig.discountPercent}% w ${config.store_name}. Oferta ważna ${saleConfig.validUntil}!` })
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
                    // Hero section with discount
                    new __1.Section({
                        backgroundColor: config.button_color,
                        padding: '50px 20px',
                        children: [
                            new __1.Column({
                                children: [
                                    new __1.Text({
                                        children: saleConfig.saleTitle.toUpperCase(),
                                        fontSize: '28px',
                                        fontWeight: 'bold',
                                        color: '#ffffff',
                                        textAlign: 'center',
                                        padding: '0 0 20px 0'
                                    }),
                                    new __1.Text({
                                        children: `-${saleConfig.discountPercent}%`,
                                        fontSize: '72px',
                                        fontWeight: 'bold',
                                        color: '#ffffff',
                                        textAlign: 'center',
                                        lineHeight: '1.1',
                                        padding: '0 0 15px 0'
                                    }),
                                    new __1.Text({
                                        children: 'NA CAŁĄ KOLEKCJĘ',
                                        fontSize: '22px',
                                        fontWeight: 'bold',
                                        color: '#ffffff',
                                        textAlign: 'center',
                                        padding: '0 0 25px 0'
                                    }),
                                    new __1.Text({
                                        children: `Oferta ważna ${saleConfig.validUntil}`,
                                        fontSize: '16px',
                                        color: '#ffffff',
                                        textAlign: 'center',
                                        fontWeight: 'normal'
                                    })
                                ]
                            })
                        ]
                    }),
                    // Urgency message
                    ...(saleConfig.urgencyMessage ? [
                        new __1.Section({
                            backgroundColor: '#ff6b6b',
                            padding: '20px 30px',
                            children: [
                                new __1.Column({
                                    children: [
                                        new __1.Text({
                                            children: `⏰ ${saleConfig.urgencyMessage}`,
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                            color: '#ffffff',
                                            textAlign: 'center'
                                        })
                                    ]
                                })
                            ]
                        })
                    ] : []),
                    // Main message
                    new __1.Section({
                        padding: '40px 30px 20px',
                        children: [
                            new __1.Column({
                                children: [
                                    new __1.Text({
                                        children: 'Bella! 👗✨',
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        color: config.text_color,
                                        padding: '0 0 20px 0'
                                    }),
                                    new __1.Text({
                                        children: `Przygotowaliśmy dla Ciebie wyjątkową okazję! Teraz możesz zaoszczędzić aż <strong>${saleConfig.discountPercent}% na wszystkich naszych włoskich topach i akcesoriach</strong>.`,
                                        fontSize: '16px',
                                        color: config.text_color,
                                        lineHeight: '24px',
                                        padding: '0 0 20px 0'
                                    }),
                                    new __1.Text({
                                        children: config.hero_subtitle,
                                        fontSize: '16px',
                                        color: config.text_color,
                                        lineHeight: '24px',
                                        padding: '0 0 30px 0',
                                        fontStyle: 'italic'
                                    })
                                ]
                            })
                        ]
                    }),
                    // Promo code section
                    ...(saleConfig.promoCode ? [
                        new __1.Section({
                            backgroundColor: config.background_color,
                            padding: '30px 20px',
                            border: `2px dashed ${config.button_color}`,
                            children: [
                                new __1.Column({
                                    children: [
                                        new __1.Text({
                                            children: 'TWÓJ KOD ZNIŻKOWY',
                                            fontSize: '14px',
                                            color: config.text_color,
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            padding: '0 0 10px 0'
                                        }),
                                        new __1.Text({
                                            children: saleConfig.promoCode,
                                            fontSize: '28px',
                                            fontWeight: 'bold',
                                            color: config.button_color,
                                            textAlign: 'center',
                                            padding: '0 0 10px 0'
                                        }),
                                        new __1.Text({
                                            children: `Zniżka ${saleConfig.discountPercent}% na wszystko`,
                                            fontSize: '12px',
                                            color: '#666666',
                                            textAlign: 'center'
                                        })
                                    ]
                                })
                            ]
                        })
                    ] : []),
                    // CTA Button
                    new __1.Section({
                        padding: '40px 30px',
                        children: [
                            new __1.Column({
                                children: [
                                    new __1.Button({
                                        href: `${config.store_url}?utm_source=sale_email&utm_medium=email&utm_campaign=sale_${saleConfig.discountPercent}${saleConfig.promoCode ? `&code=${saleConfig.promoCode}` : ''}`,
                                        backgroundColor: config.button_color,
                                        color: '#ffffff',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        padding: '18px 40px',
                                        borderRadius: '6px',
                                        children: '🛍️ SKORZYSTAJ Z OFERTY'
                                    })
                                ]
                            })
                        ]
                    }),
                    // Featured products on sale
                    new __1.Section({
                        backgroundColor: config.background_color,
                        padding: '40px 20px 20px',
                        children: [
                            new __1.Column({
                                children: [
                                    new __1.Text({
                                        children: '💎 WYBRANE PRODUKTY W PROMOCJI',
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        color: config.text_color,
                                        textAlign: 'center',
                                        padding: '0 0 30px 0'
                                    })
                                ]
                            })
                        ]
                    }),
                    // Product showcase
                    new __1.Section({
                        backgroundColor: config.background_color,
                        padding: '0 20px 40px',
                        children: [
                            // Product 1
                            new __1.Column({
                                width: '50%',
                                children: [
                                    new __1.Image({
                                        src: config.product_1_image,
                                        alt: config.product_1_name,
                                        width: '200px',
                                        height: 'auto'
                                    }),
                                    new __1.Text({
                                        children: config.product_1_name,
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        color: config.text_color,
                                        textAlign: 'center',
                                        padding: '15px 10px 5px'
                                    }),
                                    new __1.Text({
                                        children: `Teraz -${saleConfig.discountPercent}%!`,
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        color: '#ff6b6b',
                                        textAlign: 'center'
                                    }),
                                    new __1.Button({
                                        href: `${config.product_1_url}?utm_source=sale_email&utm_medium=email`,
                                        backgroundColor: 'transparent',
                                        color: config.button_color,
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        padding: '10px 20px',
                                        border: `1px solid ${config.button_color}`,
                                        borderRadius: '4px',
                                        children: 'Zobacz'
                                    })
                                ]
                            }),
                            // Product 2
                            new __1.Column({
                                width: '50%',
                                children: [
                                    new __1.Image({
                                        src: config.product_2_image,
                                        alt: config.product_2_name,
                                        width: '200px',
                                        height: 'auto'
                                    }),
                                    new __1.Text({
                                        children: config.product_2_name,
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        color: config.text_color,
                                        textAlign: 'center',
                                        padding: '15px 10px 5px'
                                    }),
                                    new __1.Text({
                                        children: `Teraz -${saleConfig.discountPercent}%!`,
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        color: '#ff6b6b',
                                        textAlign: 'center'
                                    }),
                                    new __1.Button({
                                        href: `${config.product_2_url}?utm_source=sale_email&utm_medium=email`,
                                        backgroundColor: 'transparent',
                                        color: config.button_color,
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        padding: '10px 20px',
                                        border: `1px solid ${config.button_color}`,
                                        borderRadius: '4px',
                                        children: 'Zobacz'
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
                    // Benefits
                    new __1.Section({
                        padding: '20px 30px',
                        children: [
                            new __1.Column({
                                children: [
                                    new __1.Text({
                                        children: '✨ <strong>Darmowa dostawa</strong> przy zamówieniu powyżej 200 zł<br>🚚 <strong>Szybka realizacja</strong> zamówień w 1-2 dni<br>💝 <strong>Możliwość zwrotu</strong> w ciągu 14 dni',
                                        fontSize: '14px',
                                        color: '#666666',
                                        lineHeight: '22px',
                                        textAlign: 'center'
                                    })
                                ]
                            })
                        ]
                    }),
                    // Second CTA
                    new __1.Section({
                        padding: '20px 30px 40px',
                        children: [
                            new __1.Column({
                                children: [
                                    new __1.Button({
                                        href: `${config.store_url}sale?utm_source=sale_email&utm_medium=email`,
                                        backgroundColor: 'transparent',
                                        color: config.button_color,
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        padding: '15px 30px',
                                        border: `2px solid ${config.button_color}`,
                                        borderRadius: '6px',
                                        children: 'ZOBACZ WSZYSTKIE PROMOCJE'
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
exports.createSaleEmail = createSaleEmail;
