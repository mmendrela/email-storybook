"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhotoGalleryEmail = createPhotoGalleryEmail;
const Html_1 = require("../components/Html");
const Head_1 = require("../components/Head");
const Body_1 = require("../components/Body");
const Title_1 = require("../components/Title");
const Preview_1 = require("../components/Preview");
const Container_1 = require("../components/Container");
const Section_1 = require("../components/Section");
const ImageGallery_1 = require("../components/ImageGallery");
function createPhotoGalleryEmail(config, params = {}) {
    const { customerName = 'Klient', galleryTheme = 'Stylizacje SoItalian', eventName = 'Letnia Sesja 2024', photographerName = 'Studio Fashion', socialHashtag = '#SoItalianStyle' } = params;
    const html = new Html_1.Html({ lang: 'pl' });
    const head = new Head_1.Head({
        children: [
            new Title_1.Title({
                children: `${customerName}, zobacz ${galleryTheme}!`
            }),
            new Preview_1.Preview({
                children: `${eventName} - ekskluzywne zdjęcia z sesji. Poznaj nasze produkty w akcji! ${socialHashtag}`
            })
        ]
    });
    // Hero section
    const heroSection = new Section_1.Section({
        backgroundColor: '#1f2937',
        padding: '50px 30px',
        children: `
      <mj-column>
        <mj-text 
          font-size="34px"
          font-weight="bold"
          color="#ffffff"
          align="center"
          padding="0 0 20px 0"
          line-height="42px"
        >
          ${galleryTheme} ✨
        </mj-text>
        <mj-text 
          font-size="20px"
          color="#d1d5db"
          align="center"
          padding="0 0 15px 0"
        >
          ${eventName}
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#9ca3af"
          align="center"
          line-height="24px"
        >
          Cześć ${customerName}! Zobacz jak pięknie wyglądają nasze produkty<br/>
          w profesjonalnej sesji zdjęciowej ${photographerName}.
        </mj-text>
      </mj-column>
    `
    });
    // Intro text
    const introSection = new Section_1.Section({
        backgroundColor: '#ffffff',
        padding: '40px 30px 20px',
        children: `
      <mj-column>
        <mj-text 
          font-size="22px"
          font-weight="bold"
          color="#1f2937"
          align="center"
          padding="0 0 20px 0"
        >
          📸 Ekskluzywne kadry z sesji
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#4b5563"
          align="center"
          line-height="24px"
          padding="0 0 25px 0"
        >
          Każdy kadr opowiada historię o stylu, elegancji i wyjątkowej jakości naszych produktów.
          Zobacz jak pięknie prezentują się nasze bestsellery w prawdziwym życiu!
        </mj-text>
      </mj-column>
    `
    });
    // Gallery images
    const galleryImages = [
        {
            src: config.product_1_image,
            alt: `${config.product_1_name} w sesji ${eventName}`,
            caption: `${config.product_1_name} - idealna na letnie spacery`,
            href: config.product_1_url + '?utm_source=newsletter&utm_campaign=photo-gallery'
        },
        {
            src: config.product_2_image,
            alt: `${config.product_2_name} w sesji ${eventName}`,
            caption: `${config.product_2_name} - stylowy akcent do każdej stylizacji`,
            href: config.product_2_url + '?utm_source=newsletter&utm_campaign=photo-gallery'
        },
        {
            src: config.product_3_image,
            alt: `${config.product_3_name} w sesji ${eventName}`,
            caption: `${config.product_3_name} - delikatność w każdym szczególe`,
            href: config.product_3_url + '?utm_source=newsletter&utm_campaign=photo-gallery'
        },
        {
            src: config.product_1_image,
            alt: 'Kompletna stylizacja SoItalian',
            caption: 'Kompletna stylizacja - zobacz jak komponować nasze produkty',
            href: config.store_url + '?utm_source=newsletter&utm_campaign=photo-gallery'
        },
        {
            src: config.product_2_image,
            alt: 'Behind the scenes - sesja fotograficzna',
            caption: 'Kulisy sesji - z pasją tworzymy dla Was najpiękniejsze kadry',
            href: config.store_url + '/behind-scenes?utm_source=newsletter'
        },
        {
            src: config.product_3_image,
            alt: 'Model prezentuje kolekcję SoItalian',
            caption: 'Profesjonalny model prezentuje naszą najnowszą kolekcję',
            href: config.store_url + '/new-collection?utm_source=newsletter'
        }
    ];
    const imageGallery = new ImageGallery_1.ImageGallery({
        images: galleryImages,
        layout: 'grid-2x2',
        rounded: true
    });
    // Social engagement section
    const socialSection = new Section_1.Section({
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
          📱 Podziel się swoim stylem!
        </mj-text>
        <mj-text 
          font-size="18px"
          color="#4b5563"
          align="center"
          padding="0 0 25px 0"
          line-height="26px"
        >
          Masz nasze produkty? Pokaż jak je nosisz!<br/>
          Oznacz nas w swoich zdjęciach używając hashtagu:
        </mj-text>
        <mj-text 
          font-size="28px"
          font-weight="bold"
          color="#059669"
          align="center"
          padding="0 0 25px 0"
        >
          ${socialHashtag}
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#6b7280"
          align="center"
          line-height="24px"
        >
          Najpiękniejsze zdjęcia udostępnimy w naszych mediach społecznościowych!<br/>
          <strong>Instagram:</strong> @soitalian_official | <strong>Facebook:</strong> SoItalian
        </mj-text>
      </mj-column>
    `
    });
    // Behind the scenes info
    const behindScenesSection = new Section_1.Section({
        backgroundColor: '#ffffff',
        padding: '40px 30px',
        children: `
      <mj-column>
        <mj-text 
          font-size="22px"
          font-weight="bold"
          color="#1f2937"
          align="center"
          padding="0 0 20px 0"
        >
          🎬 Kulisy sesji fotograficznej
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#4b5563"
          align="left"
          padding="0 0 15px 0"
          line-height="24px"
        >
          <strong>📅 Data sesji:</strong> Lato 2024, słoneczny dzień w Warszawie
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#4b5563"
          align="left"
          padding="0 0 15px 0"
          line-height="24px"
        >
          <strong>📸 Fotograf:</strong> ${photographerName} - specjaliści od fotografii fashion
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#4b5563"
          align="left"
          padding="0 0 15px 0"
          line-height="24px"
        >
          <strong>👗 Stylizacja:</strong> Kompletne looky z najnowszej kolekcji SoItalian
        </mj-text>
        <mj-text 
          font-size="16px"
          color="#4b5563"
          align="left"
          line-height="24px"
        >
          <strong>💫 Klimat:</strong> Elegancja spotyka casualowy szyk - idealnie na lato!
        </mj-text>
      </mj-column>
    `
    });
    // Final CTA
    const finalCtaSection = new Section_1.Section({
        backgroundColor: '#059669',
        padding: '45px 30px',
        children: `
      <mj-column>
        <mj-text 
          font-size="26px"
          font-weight="bold"
          color="#ffffff"
          align="center"
          padding="0 0 20px 0"
        >
          Zachwycona sesją, ${customerName}? 
        </mj-text>
        <mj-text 
          font-size="18px"
          color="#d1fae5"
          align="center"
          padding="0 0 30px 0"
          line-height="26px"
        >
          Wszystkie produkty z sesji dostępne są w naszym sklepie online.<br/>
          Stwórz swoją własną stylizację inspirowaną profesjonalnymi zdjęciami!
        </mj-text>
        <mj-button 
          href="${config.store_url}?utm_source=newsletter&utm_campaign=photo-gallery&ref=session"
          background-color="#ffffff"
          color="#059669"
          font-size="20px"
          font-weight="bold"
          padding="18px 36px"
          border-radius="8px"
        >
          📸 Kup produkty z sesji
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
                    heroSection,
                    introSection,
                    imageGallery,
                    socialSection,
                    behindScenesSection,
                    finalCtaSection
                ]
            })
        ]
    });
    html.props.children = [head, body];
    return html.render();
}
