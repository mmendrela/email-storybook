const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const mjml2html = require('mjml');
const path = require('path');
const fs = require('fs');

// Import our components and templates
const { 
  soitalianConfig,
  createProductCatalogEmail,
  createBestsellersEmail,
  createGridLayoutEmail,
  createSingleProductEmail,
  createProductGalleryEmail,
  createAbandonedCartEmail,
  createPhotoGalleryEmail,
  createPricingPlansEmail
} = require('../dist');

const app = express();
const port = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(ejsLayouts);
app.set('layout', 'layout');

// Static files
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email templates configuration
const emailTemplates = [
  {
    id: 'product-catalog',
    name: 'Product Catalog',
    description: 'Katalog produktów z naprzemiennym układem i opisami',
    category: 'E-commerce',
    generator: (params = {}) => createProductCatalogEmail(soitalianConfig, {
      customerName: params.customerName || 'Klient',
      season: params.season || 'lato 2024',
      promoCode: params.promoCode || 'KATALOG20',
      discountPercent: parseInt(params.discountPercent) || 20
    }),
    params: [
      { name: 'customerName', type: 'text', default: 'Anna', label: 'Imię klienta' },
      { name: 'season', type: 'text', default: 'lato 2024', label: 'Sezon kolekcji' },
      { name: 'promoCode', type: 'text', default: 'KATALOG20', label: 'Kod promocyjny' },
      { name: 'discountPercent', type: 'number', default: 20, label: '% zniżki' }
    ]
  },
  {
    id: 'bestsellers-showcase',
    name: 'Bestsellers Showcase',
    description: 'Prezentacja bestsellerów w układzie trzech kart z pilnością',
    category: 'Marketing',
    generator: (params = {}) => createBestsellersEmail(soitalianConfig, {
      customerName: params.customerName || 'Klient',
      urgencyText: params.urgencyText || 'Ostatnie sztuki!',
      promoCode: params.promoCode || 'BESTSELLER15',
      validUntil: params.validUntil || '31 sierpnia 2024'
    }),
    params: [
      { name: 'customerName', type: 'text', default: 'Anna', label: 'Imię klienta' },
      { name: 'urgencyText', type: 'text', default: 'Ostatnie sztuki!', label: 'Komunikat pilności' },
      { name: 'promoCode', type: 'text', default: 'BESTSELLER15', label: 'Kod promocyjny' },
      { name: 'validUntil', type: 'text', default: '31 sierpnia 2024', label: 'Data ważności' }
    ]
  },
  {
    id: 'grid-layout',
    name: 'Grid Layout',
    description: 'Nowości w układzie siatki 2x2 z ofertą specjalną',
    category: 'E-commerce',
    generator: (params = {}) => createGridLayoutEmail(soitalianConfig, {
      customerName: params.customerName || 'Klient',
      collectionName: params.collectionName || 'Nowości',
      promoCode: params.promoCode || 'GRID25',
      validUntil: params.validUntil || '15 września 2024'
    }),
    params: [
      { name: 'customerName', type: 'text', default: 'Anna', label: 'Imię klienta' },
      { name: 'collectionName', type: 'text', default: 'Nowości', label: 'Nazwa kolekcji' },
      { name: 'promoCode', type: 'text', default: 'GRID25', label: 'Kod promocyjny' },
      { name: 'validUntil', type: 'text', default: '15 września 2024', label: 'Data ważności' }
    ]
  },
  {
    id: 'single-product',
    name: 'Single Product Focus',
    description: 'Skupienie na pojedynczym produkcie z opiniami i pilnością',
    category: 'E-commerce',
    generator: (params = {}) => createSingleProductEmail(soitalianConfig, {
      customerName: params.customerName || 'Klient',
      productType: params.productType || 'hit sezonu',
      urgencyMessage: params.urgencyMessage || 'Ostatnie sztuki w magazynie!',
      stockCount: parseInt(params.stockCount) || 3,
      reviewCount: parseInt(params.reviewCount) || 127,
      rating: parseFloat(params.rating) || 4.8
    }),
    params: [
      { name: 'customerName', type: 'text', default: 'Anna', label: 'Imię klienta' },
      { name: 'productType', type: 'text', default: 'hit sezonu', label: 'Typ produktu' },
      { name: 'urgencyMessage', type: 'text', default: 'Ostatnie sztuki w magazynie!', label: 'Komunikat pilności' },
      { name: 'stockCount', type: 'number', default: 3, label: 'Ilość na stanie' },
      { name: 'reviewCount', type: 'number', default: 127, label: 'Liczba opinii' },
      { name: 'rating', type: 'number', default: 4.8, label: 'Ocena (1-5)', step: 0.1, min: 1, max: 5 }
    ]
  },
  {
    id: 'product-gallery',
    name: 'Product Gallery',
    description: 'Galeria wszystkich produktów z kolekcji z opisem korzyści',
    category: 'E-commerce',
    generator: (params = {}) => createProductGalleryEmail(soitalianConfig, {
      customerName: params.customerName || 'Klient',
      galleryTitle: params.galleryTitle || 'Kompletna Kolekcja',
      seasonTheme: params.seasonTheme || 'Lato 2024',
      showPricing: params.showPricing === 'true',
      ctaText: params.ctaText || 'Odkryj całą kolekcję'
    }),
    params: [
      { name: 'customerName', type: 'text', default: 'Anna', label: 'Imię klienta' },
      { name: 'galleryTitle', type: 'text', default: 'Kompletna Kolekcja', label: 'Tytuł galerii' },
      { name: 'seasonTheme', type: 'text', default: 'Lato 2024', label: 'Temat sezonu' },
      { 
        name: 'showPricing', 
        type: 'select',
        options: [
          { value: 'true', label: 'Tak' },
          { value: 'false', label: 'Nie' }
        ],
        default: 'true', 
        label: 'Pokaż ceny?' 
      },
      { name: 'ctaText', type: 'text', default: 'Odkryj całą kolekcję', label: 'Tekst przycisku' }
    ]
  },
  {
    id: 'abandoned-cart',
    name: 'Abandoned Cart',
    description: 'Email o porzuconym koszyku z podsumowaniem i zachętami',
    category: 'E-commerce',
    generator: (params = {}) => createAbandonedCartEmail(soitalianConfig, {
      customerName: params.customerName || 'Klient',
      cartId: params.cartId || 'CART_' + Date.now().toString().slice(-6),
      discountPercent: parseInt(params.discountPercent) || 15,
      discountCode: params.discountCode || 'POWROT15',
      urgencyHours: parseInt(params.urgencyHours) || 24,
      freeShippingThreshold: parseInt(params.freeShippingThreshold) || 150
    }),
    params: [
      { name: 'customerName', type: 'text', default: 'Anna', label: 'Imię klienta' },
      { name: 'cartId', type: 'text', default: 'CART_123456', label: 'ID koszyka' },
      { name: 'discountPercent', type: 'number', default: 15, label: '% zniżki' },
      { name: 'discountCode', type: 'text', default: 'POWROT15', label: 'Kod zniżkowy' },
      { name: 'urgencyHours', type: 'number', default: 24, label: 'Czas ważności (godz.)' },
      { name: 'freeShippingThreshold', type: 'number', default: 150, label: 'Próg darmowej dostawy (zł)' }
    ]
  },
  {
    id: 'photo-gallery',
    name: 'Photo Gallery',
    description: 'Galeria zdjęć z sesji fotograficznej z engagement społecznym',
    category: 'Marketing',
    generator: (params = {}) => createPhotoGalleryEmail(soitalianConfig, {
      customerName: params.customerName || 'Klient',
      galleryTheme: params.galleryTheme || 'Stylizacje SoItalian',
      eventName: params.eventName || 'Letnia Sesja 2024',
      photographerName: params.photographerName || 'Studio Fashion',
      socialHashtag: params.socialHashtag || '#SoItalianStyle'
    }),
    params: [
      { name: 'customerName', type: 'text', default: 'Anna', label: 'Imię klienta' },
      { name: 'galleryTheme', type: 'text', default: 'Stylizacje SoItalian', label: 'Temat galerii' },
      { name: 'eventName', type: 'text', default: 'Letnia Sesja 2024', label: 'Nazwa wydarzenia' },
      { name: 'photographerName', type: 'text', default: 'Studio Fashion', label: 'Nazwa fotografa' },
      { name: 'socialHashtag', type: 'text', default: '#SoItalianStyle', label: 'Hashtag społecznościowy' }
    ]
  },
  {
    id: 'pricing-plans',
    name: 'Pricing Plans',
    description: 'Program członkowski VIP Club z planami cenowymi i opiniami',
    category: 'Membership',
    generator: (params = {}) => createPricingPlansEmail(soitalianConfig, {
      customerName: params.customerName || 'Klient',
      programName: params.programName || 'SoItalian VIP Club',
      launchDiscount: parseInt(params.launchDiscount) || 30,
      earlyBirdCode: params.earlyBirdCode || 'VIP30',
      validUntil: params.validUntil || '31 sierpnia 2024',
      specialOffer: params.specialOffer === 'true'
    }),
    params: [
      { name: 'customerName', type: 'text', default: 'Anna', label: 'Imię klienta' },
      { name: 'programName', type: 'text', default: 'SoItalian VIP Club', label: 'Nazwa programu' },
      { name: 'launchDiscount', type: 'number', default: 30, label: '% zniżki startowej' },
      { name: 'earlyBirdCode', type: 'text', default: 'VIP30', label: 'Kod early bird' },
      { name: 'validUntil', type: 'text', default: '31 sierpnia 2024', label: 'Data ważności' },
      { 
        name: 'specialOffer', 
        type: 'select',
        options: [
          { value: 'true', label: 'Tak' },
          { value: 'false', label: 'Nie' }
        ],
        default: 'true', 
        label: 'Oferta specjalna?' 
      }
    ]
  }
];

// Routes
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'MJML Email Storybook - SoItalian',
    templates: emailTemplates,
    config: soitalianConfig 
  });
});

app.get('/template/:id', (req, res) => {
  const template = emailTemplates.find(t => t.id === req.params.id);
  if (!template) {
    return res.status(404).send('Template not found');
  }

  // Generate default MJML
  const mjmlCode = template.generator();
  const htmlResult = mjml2html(mjmlCode);
  
  res.render('template', {
    title: `${template.name} - MJML Email Storybook`,
    template,
    mjmlCode,
    htmlCode: htmlResult.html,
    config: soitalianConfig,
    errors: htmlResult.errors || []
  });
});

app.post('/template/:id/generate', (req, res) => {
  const template = emailTemplates.find(t => t.id === req.params.id);
  if (!template) {
    return res.status(404).json({ error: 'Template not found' });
  }

  try {
    // Generate MJML with custom parameters
    const mjmlCode = template.generator(req.body);
    const htmlResult = mjml2html(mjmlCode);
    
    res.json({
      success: true,
      mjml: mjmlCode,
      html: htmlResult.html,
      errors: htmlResult.errors || []
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.get('/preview/:id', (req, res) => {
  const template = emailTemplates.find(t => t.id === req.params.id);
  if (!template) {
    return res.status(404).send('Template not found');
  }

  // Generate HTML for preview
  const params = req.query;
  const mjmlCode = template.generator(params);
  const htmlResult = mjml2html(mjmlCode);
  
  // Return clean HTML for iframe preview
  res.send(htmlResult.html);
});

app.get('/components', (req, res) => {
  // Import actual components for preview generation
  const { 
    Html, Head, Body, Title, Preview, Container,
    Section, Column, Text, Button, Image, Hr, Heading,
    Font, Link, Markdown, Row,
    OneProduct, ProductGrid, CartSummary, ImageGallery, PricingTable,
    ThreeCardsRow, OneProductLeft, FourCardsRow, AlternatingProductRow
  } = require('../dist');

  // Component showcase with real examples
  const components = [
    {
      name: 'Html',
      description: 'Element główny dokumentu MJML - opakowuje całą zawartość emaila',
      category: 'Structure',
      example: {
        code: `new Html({ 
  lang: 'pl',
  children: [head, body] 
})`,
        mjml: '<mjml lang="pl">\n  <!-- zawartość -->\n</mjml>',
        generator: () => new Html({ lang: 'pl', children: 'Przykład HTML' }),
        props: ['lang', 'children']
      }
    },
    {
      name: 'Head',
      description: 'Sekcja head zawierająca metadane, tytuł i ustawienia emaila',
      category: 'Structure', 
      example: {
        code: `new Head({
  children: [title, preview]
})`,
        mjml: '<mj-head>\n  <mj-title>Tytuł</mj-title>\n  <mj-preview>Podgląd</mj-preview>\n</mj-head>',
        generator: () => new Head({ children: 'Head content' }),
        props: ['children']
      }
    },
    {
      name: 'Body', 
      description: 'Główna zawartość emaila z możliwością stylizacji tła',
      category: 'Structure',
      example: {
        code: `new Body({
  backgroundColor: '#f7f4f2',
  children: [sections...]
})`,
        mjml: '<mj-body background-color="#f7f4f2">\n  <!-- sekcje -->\n</mj-body>',
        generator: () => new Body({ backgroundColor: soitalianConfig.background_color, children: 'Zawartość body' }),
        props: ['backgroundColor', 'fontFamily', 'children']
      }
    },
    {
      name: 'Title',
      description: 'Tytuł emaila wyświetlany w zakładce przeglądarki',
      category: 'Head',
      example: {
        code: `new Title({
  children: 'Tytuł emaila'
})`,
        mjml: '<mj-title>Newsletter SoItalian</mj-title>',
        generator: () => new Title({ children: 'Newsletter SoItalian - Włoski styl' }),
        props: ['children']
      }
    },
    {
      name: 'Preview',
      description: 'Tekst podglądu widoczny w skrzynce odbiorczej',
      category: 'Head',
      example: {
        code: `new Preview({
  children: 'Tekst podglądu...'
})`,
        mjml: '<mj-preview>Odkryj nowe produkty w SoItalian...</mj-preview>',
        generator: () => new Preview({ children: 'Odkryj najnowsze trendy włoskiej mody w SoItalian!' }),
        props: ['children']
      }
    },
    {
      name: 'Container',
      description: 'Wrapper ograniczający szerokość zawartości emaila',
      category: 'Layout',
      example: {
        code: `new Container({
  maxWidth: '600px',
  backgroundColor: '#ffffff'
})`,
        mjml: '<mj-wrapper max-width="600px" background-color="#ffffff">\n  <!-- zawartość -->\n</mj-wrapper>',
        generator: () => new Container({ maxWidth: '600px', backgroundColor: '#ffffff', children: 'Zawartość kontenera' }),
        props: ['maxWidth', 'backgroundColor', 'padding', 'children']
      }
    },
    {
      name: 'Section',
      description: 'Sekcja pozioma - podstawowy blok layoutu emaila',
      category: 'Layout',
      example: {
        code: `new Section({
  backgroundColor: '#f7f4f2',
  padding: '40px 20px'
})`,
        mjml: '<mj-section background-color="#f7f4f2" padding="40px 20px">\n  <mj-column>...</mj-column>\n</mj-section>',
        generator: () => new Section({ 
          backgroundColor: soitalianConfig.background_color, 
          padding: '20px',
          children: 'Zawartość sekcji'
        }),
        props: ['backgroundColor', 'padding', 'fullWidth', 'backgroundUrl', 'children']
      }
    },
    {
      name: 'Column',
      description: 'Kolumna wewnątrz sekcji - umożliwia tworzenie layoutów wielokolumnowych',
      category: 'Layout',
      example: {
        code: `new Column({
  width: '50%',
  padding: '10px'
})`,
        mjml: '<mj-column width="50%" padding="10px">\n  <!-- elementy -->\n</mj-column>',
        generator: () => new Column({ width: '100%', children: 'Zawartość kolumny' }),
        props: ['width', 'backgroundColor', 'padding', 'children']
      }
    },
    {
      name: 'Text',
      description: 'Komponent tekstowy z pełnym wsparciem HTML i stylizacji',
      category: 'Content',
      example: {
        code: `new Text({
  fontSize: '16px',
  color: '#333333',
  children: 'Tekst z <strong>formatowaniem</strong>'
})`,
        mjml: '<mj-text font-size="16px" color="#333333">Witaj w świecie włoskiej mody!</mj-text>',
        generator: () => new Text({ 
          fontSize: '16px', 
          color: soitalianConfig.text_color,
          children: 'Witaj w świecie <strong>włoskiej mody</strong>! Odkryj nasze ekskluzywne kolekcje.'
        }),
        props: ['fontSize', 'color', 'fontWeight', 'lineHeight', 'textAlign', 'padding', 'fontStyle', 'children']
      }
    },
    {
      name: 'Button',
      description: 'Przycisk call-to-action z pełną konfigurowalność stylów',
      category: 'Content',
      example: {
        code: `new Button({
  href: 'https://soitalian.pl',
  backgroundColor: '#000000',
  color: '#ffffff',
  children: 'Zobacz kolekcję'
})`,
        mjml: '<mj-button href="https://soitalian.pl" background-color="#000000" color="#ffffff">Zobacz kolekcję</mj-button>',
        generator: () => new Button({
          href: soitalianConfig.store_url,
          backgroundColor: soitalianConfig.button_color,
          color: '#ffffff',
          padding: '15px 30px',
          borderRadius: '6px',
          children: '🛍️ Zobacz kolekcję'
        }),
        props: ['href', 'backgroundColor', 'color', 'padding', 'borderRadius', 'fontSize', 'fontWeight', 'target', 'children']
      }
    },
    {
      name: 'Image',
      description: 'Responsywny obrazek z automatyczną optymalizacją',
      category: 'Content',
      example: {
        code: `new Image({
  src: 'https://example.com/image.jpg',
  alt: 'Opis obrazka',
  width: '300px'
})`,
        mjml: '<mj-image src="https://soitalian.pl/image.jpg" alt="SoItalian Product" width="200px" />',
        generator: () => new Image({
          src: soitalianConfig.product_1_image,
          alt: soitalianConfig.product_1_name,
          width: '200px'
        }),
        props: ['src', 'alt', 'width', 'height', 'title']
      }
    },
    {
      name: 'Hr',
      description: 'Linia pozioma - separator wizualny między sekcjami',
      category: 'Content',
      example: {
        code: `new Hr({
  borderColor: '#e0e0e0',
  width: '100%'
})`,
        mjml: '<mj-divider border-color="#e0e0e0" width="100%" />',
        generator: () => new Hr({
          borderColor: '#e0e0e0',
          width: '80%'
        }),
        props: ['borderColor', 'width', 'padding', 'margin']
      }
    },
    {
      name: 'Heading',
      description: 'Nagłówki H1-H6 z automatycznym doborem wielkości czcionki',
      category: 'Content',
      example: {
        code: `new Heading({
  as: 'h2',
  color: '#333333',
  children: 'Nagłówek sekcji'
})`,
        mjml: '<mj-text font-size="24px" font-weight="bold" color="#333333">Najnowsza kolekcja</mj-text>',
        generator: () => new Heading({
          as: 'h2',
          color: soitalianConfig.text_color,
          textAlign: 'center',
          children: '🌟 Najnowsza kolekcja'
        }),
        props: ['as', 'fontSize', 'color', 'fontWeight', 'textAlign', 'padding', 'children']
      }
    },
    {
      name: 'Font',
      description: 'Definicja czcionek dla emaila z obsługą web fontów',
      category: 'Head',
      example: {
        code: `new Font({
  fontFamily: 'Inter',
  fallbackFontFamily: ['Arial', 'sans-serif'],
  webFont: {
    url: '/fonts/inter.woff2',
    format: 'woff2'
  }
})`,
        mjml: '<mj-style>\\n@font-face { font-family: "Inter"; src: url("/fonts/inter.woff2") format("woff2"); }\\n</mj-style>',
        generator: () => new Font({
          fontFamily: 'Playfair Display',
          fallbackFontFamily: ['Georgia', 'serif'],
          fontWeight: '400'
        }),
        props: ['fontFamily', 'fallbackFontFamily', 'webFont', 'fontWeight', 'fontStyle']
      }
    },
    {
      name: 'Link',
      description: 'Link z pełną kontrolą stylizacji',
      category: 'Content',
      example: {
        code: `new Link({
  href: 'https://soitalian.pl',
  target: '_blank',
  children: 'Odwiedź nasz sklep'
})`,
        mjml: '<mj-text>\\n<a href="https://soitalian.pl" target="_blank" style="color: #007bff;">Odwiedź nasz sklep</a>\\n</mj-text>',
        generator: () => new Link({
          href: soitalianConfig.store_url,
          target: '_blank',
          color: soitalianConfig.button_color,
          fontSize: '16px',
          fontWeight: 'bold',
          children: '🛍️ Odkryj włoską kolekcję'
        }),
        props: ['href', 'target', 'color', 'fontSize', 'fontWeight', 'textDecoration', 'children']
      }
    },
    {
      name: 'Markdown',
      description: 'Renderowanie treści Markdown w emailach',
      category: 'Content',
      example: {
        code: `new Markdown({
  children: '# Witaj!\\n\\nTo jest **pogrubiony** tekst z [linkiem](https://example.com).'
})`,
        mjml: '<mj-text>\\n<h1>Witaj!</h1>\\n<br>To jest <strong>pogrubiony</strong> tekst z <a href="#">linkiem</a>.\\n</mj-text>',
        generator: () => new Markdown({
          children: '# 🌟 SoItalian Collection\\n\\nOdkryj **najnowsze trendy** włoskiej mody.\\n\\n- Eleganckie *topy*\\n- Stylowe *akcesoria*\\n- Unikalne *kapelusze*\\n\\nZobacz więcej na [SoItalian.pl](https://www.soitalian.pl).',
          color: soitalianConfig.text_color
        }),
        props: ['markdownCustomStyles', 'markdownContainerStyles', 'color', 'fontSize', 'children']
      }
    },
    {
      name: 'Row',
      description: 'Rząd - alias dla Section, kompatybilny z react-email',
      category: 'Layout',
      example: {
        code: `new Row({
  backgroundColor: '#f7f4f2',
  padding: '20px 0'
})`,
        mjml: '<mj-section background-color="#f7f4f2" padding="20px 0">\\n  <!-- zawartość -->\\n</mj-section>',
        generator: () => new Row({
          backgroundColor: soitalianConfig.background_color,
          padding: '30px 20px',
          children: 'Zawartość rzędu'
        }),
        props: ['backgroundColor', 'padding', 'fullWidth', 'backgroundUrl', 'children']
      }
    },
    {
      name: 'OneProduct',
      description: 'Karta pojedynczego produktu z obrazkiem, ceną i przyciskiem zakupu',
      category: 'E-commerce',
      example: {
        code: `new OneProduct({
  product: {
    name: 'Top Rieti Pink',
    price: '199 zł',
    originalPrice: '249 zł',
    image: 'product.jpg',
    href: '/product',
    description: 'Elegancki różowy top'
  }
})`,
        mjml: '<mj-section background-color="#ffffff" padding="40px 30px">\\n  <!-- Product card -->\\n</mj-section>',
        generator: () => new OneProduct({
          product: {
            name: soitalianConfig.product_1_name,
            description: 'Elegancki top w różowym kolorze, idealny na letnie dni.',
            price: '199 zł',
            originalPrice: '249 zł',
            image: soitalianConfig.product_1_image,
            href: soitalianConfig.product_1_url
          },
          buttonText: 'Kup teraz'
        }),
        props: ['product', 'buttonText', 'showDescription']
      }
    },
    {
      name: 'ProductGrid',
      description: 'Siatka produktów w układzie 2, 3 lub 4 kolumn',
      category: 'E-commerce',
      example: {
        code: `new ProductGrid({
  title: 'Nasze Produkty',
  products: [...],
  columns: 3,
  showPrices: true
})`,
        mjml: '<mj-section background-color="#f7f4f2">\\n  <!-- Product grid -->\\n</mj-section>',
        generator: () => new ProductGrid({
          title: 'Najpopularniejsze produkty',
          products: [
            {
              name: soitalianConfig.product_1_name,
              price: '199 zł',
              originalPrice: '249 zł',
              image: soitalianConfig.product_1_image,
              href: soitalianConfig.product_1_url,
              description: 'Elegancki różowy top na lato'
            },
            {
              name: soitalianConfig.product_2_name,
              price: '149 zł',
              image: soitalianConfig.product_2_image,
              href: soitalianConfig.product_2_url,
              description: 'Stylowy kapelusz z czarną wstążką'
            },
            {
              name: soitalianConfig.product_3_name,
              price: '159 zł',
              image: soitalianConfig.product_3_image,
              href: soitalianConfig.product_3_url,
              description: 'Elegancki kapelusz z ażurową wstążką'
            }
          ],
          columns: 3,
          showPrices: true
        }),
        props: ['title', 'products', 'columns', 'showPrices']
      }
    },
    {
      name: 'CartSummary',
      description: 'Podsumowanie koszyka z produktami, cenami i przyciskiem checkout',
      category: 'E-commerce',
      example: {
        code: `new CartSummary({
  title: 'Podsumowanie zamówienia',
  items: [...],
  subtotal: '348 zł',
  total: '437 zł',
  checkoutUrl: '/checkout'
})`,
        mjml: '<mj-section>\\n  <!-- Cart summary -->\\n</mj-section>',
        generator: () => new CartSummary({
          title: 'Podsumowanie zamówienia',
          items: [
            {
              name: soitalianConfig.product_1_name,
              image: soitalianConfig.product_1_image,
              quantity: 1,
              price: '199 zł'
            },
            {
              name: soitalianConfig.product_2_name,
              image: soitalianConfig.product_2_image,
              quantity: 1,
              price: '149 zł'
            }
          ],
          subtotal: '348 zł',
          shipping: '15 zł',
          tax: '74 zł',
          total: '437 zł',
          checkoutUrl: soitalianConfig.store_url + '/checkout',
          checkoutText: 'Dokończ zakup'
        }),
        props: ['title', 'items', 'subtotal', 'shipping', 'tax', 'total', 'checkoutUrl', 'checkoutText']
      }
    },
    {
      name: 'ImageGallery',
      description: 'Galeria obrazków w różnych układach - siatka, poziomo, pionowo',
      category: 'Gallery',
      example: {
        code: `new ImageGallery({
  images: [{src: '...', alt: '...'}],
  layout: 'grid-2x2',
  rounded: true
})`,
        mjml: '<mj-section>\\n  <!-- Image gallery -->\\n</mj-section>',
        generator: () => new ImageGallery({
          images: [
            { src: soitalianConfig.product_1_image, alt: soitalianConfig.product_1_name },
            { src: soitalianConfig.product_2_image, alt: soitalianConfig.product_2_name },
            { src: soitalianConfig.product_3_image, alt: soitalianConfig.product_3_name },
            { src: soitalianConfig.product_1_image, alt: soitalianConfig.product_1_name }
          ],
          layout: 'grid-2x2',
          rounded: true
        }),
        props: ['images', 'layout', 'rounded']
      }
    },
    {
      name: 'PricingTable',
      description: 'Tabela cenowa z planami, funkcjami i przyciskami',
      category: 'Pricing',
      example: {
        code: `new PricingTable({
  plans: [{
    name: 'Plan Basic',
    price: '99 zł',
    features: ['...'],
    buttonText: 'Wybierz',
    buttonUrl: '/plan'
  }]
})`,
        mjml: '<mj-section>\\n  <!-- Pricing table -->\\n</mj-section>',
        generator: () => new PricingTable({
          plans: [
            {
              name: 'Plan Basic',
              price: '99 zł',
              period: 'miesięcznie',
              features: [
                'Dostęp do wszystkich topów',
                'Bezpłatne zwroty',
                'Newsletter z promocjami'
              ],
              buttonText: 'Wybierz plan',
              buttonUrl: soitalianConfig.store_url + '/plans/basic'
            },
            {
              name: 'Plan Premium',
              price: '199 zł',
              period: 'miesięcznie',
              features: [
                'Wszystko z planu Basic',
                'Dostęp do kolekcji VIP',
                'Darmowa dostawa',
                'Personal shopper'
              ],
              buttonText: 'Wybierz plan',
              buttonUrl: soitalianConfig.store_url + '/plans/premium',
              emphasized: true,
              badge: 'Popularne'
            }
          ]
        }),
        props: ['plans', 'layout']
      }
    },
    {
      name: 'ThreeCardsRow',
      description: 'Trzy karty produktów w rzędzie z tytułem',
      category: 'E-commerce',
      example: {
        code: `new ThreeCardsRow({
  title: 'Nasze bestsellery',
  products: [
    {
      name: 'Top Rieti Pink',
      price: '199 zł',
      originalPrice: '249 zł',
      image: 'product1.jpg',
      href: '/product/1'
    }
  ],
  buttonText: 'Kup teraz'
})`,
        mjml: '<mj-section>\\n  <!-- Three cards row -->\\n</mj-section>',
        generator: () => new ThreeCardsRow({
          title: 'Nasze bestsellery',
          products: [
            {
              name: soitalianConfig.product_1_name,
              price: '199 zł',
              originalPrice: '249 zł',
              image: soitalianConfig.product_1_image,
              href: soitalianConfig.product_1_url,
              description: 'Elegancki top w różowym kolorze'
            },
            {
              name: soitalianConfig.product_2_name,
              price: '149 zł',
              image: soitalianConfig.product_2_image,
              href: soitalianConfig.product_2_url,
              description: 'Stylowy kapelusz z czarną wstążką'
            },
            {
              name: soitalianConfig.product_3_name,
              price: '159 zł',
              image: soitalianConfig.product_3_image,
              href: soitalianConfig.product_3_url,
              description: 'Elegancki kapelusz z ażurową wstążką'
            }
          ],
          buttonText: 'Zobacz więcej'
        }),
        props: ['title', 'products', 'buttonText']
      }
    },
    {
      name: 'OneProductLeft',
      description: 'Pojedynczy produkt z obrazkiem po lewej stronie',
      category: 'E-commerce',
      example: {
        code: `new OneProductLeft({
  product: {
    name: 'Top Rieti Pink',
    description: 'Elegancki top...',
    price: '199 zł',
    originalPrice: '249 zł',
    image: 'product.jpg',
    href: '/product/1'
  },
  buttonText: 'Kup teraz',
  showDescription: true,
  imageWidth: '300px'
})`,
        mjml: '<mj-section>\\n  <!-- One product left layout -->\\n</mj-section>',
        generator: () => new OneProductLeft({
          product: {
            name: soitalianConfig.product_1_name,
            description: 'Elegancki top w różowym kolorze, idealny na letnie dni. Wykonany z wysokiej jakości materiału, zapewnia komfort noszenia przez cały dzień.',
            price: '199 zł',
            originalPrice: '249 zł',
            image: soitalianConfig.product_1_image,
            href: soitalianConfig.product_1_url
          },
          buttonText: 'Dodaj do koszyka',
          showDescription: true,
          imageWidth: '280px'
        }),
        props: ['product', 'buttonText', 'showDescription', 'imageWidth']
      }
    },
    {
      name: 'FourCardsRow',
      description: 'Cztery karty produktów w rzędzie z opcjonalnym trybem kompaktowym',
      category: 'E-commerce',
      example: {
        code: `new FourCardsRow({
  title: 'Kolekcja letnia',
  products: [
    {
      name: 'Top Rieti Pink',
      price: '199 zł',
      image: 'product1.jpg',
      href: '/product/1'
    }
  ],
  buttonText: 'Kup',
  compactMode: false
})`,
        mjml: '<mj-section>\\n  <!-- Four cards row -->\\n</mj-section>',
        generator: () => new FourCardsRow({
          title: 'Kolekcja letnia 2024',
          products: [
            {
              name: soitalianConfig.product_1_name,
              price: '199 zł',
              originalPrice: '249 zł',
              image: soitalianConfig.product_1_image,
              href: soitalianConfig.product_1_url,
              description: 'Elegancki różowy top'
            },
            {
              name: soitalianConfig.product_2_name,
              price: '149 zł',
              image: soitalianConfig.product_2_image,
              href: soitalianConfig.product_2_url,
              description: 'Kapelusz z czarną wstążką'
            },
            {
              name: soitalianConfig.product_3_name,
              price: '159 zł',
              image: soitalianConfig.product_3_image,
              href: soitalianConfig.product_3_url,
              description: 'Kapelusz z ażurową wstążką'
            },
            {
              name: soitalianConfig.product_1_name + ' (edycja limitowana)',
              price: '229 zł',
              originalPrice: '279 zł',
              image: soitalianConfig.product_1_image,
              href: soitalianConfig.product_1_url,
              description: 'Limitowana edycja różowego topu'
            }
          ],
          buttonText: 'Zobacz',
          compactMode: false
        }),
        props: ['title', 'products', 'buttonText', 'compactMode']
      }
    },
    {
      name: 'AlternatingProductRow',
      description: 'Produkty jeden pod drugim z obrazkiem naprzemiennie po lewej/prawej',
      category: 'E-commerce',
      example: {
        code: `new AlternatingProductRow({
  title: 'Nasze produkty',
  products: [
    {
      name: 'Top Rieti Pink',
      price: '199 zł',
      originalPrice: '249 zł',
      image: 'product.jpg',
      href: '/product/1',
      description: 'Elegancki top...'
    }
  ],
  buttonText: 'Zobacz więcej',
  showDescription: true
})`,
        mjml: '<mj-section>\\n  <!-- Alternating product row -->\\n</mj-section>',
        generator: () => new AlternatingProductRow({
          title: 'Nasze produkty',
          products: [
            {
              name: soitalianConfig.product_1_name,
              price: '199 zł',
              originalPrice: '249 zł',
              image: soitalianConfig.product_1_image,
              href: soitalianConfig.product_1_url,
              description: 'Elegancki top w różowym kolorze, idealny na letnie dni. Wykonany z wysokiej jakości materiału.'
            },
            {
              name: soitalianConfig.product_2_name,
              price: '149 zł',
              image: soitalianConfig.product_2_image,
              href: soitalianConfig.product_2_url,
              description: 'Stylowy kapelusz z czarną wstążką, idealny dodatek do letnich stylizacji.'
            },
            {
              name: soitalianConfig.product_3_name,
              price: '159 zł',
              image: soitalianConfig.product_3_image,
              href: soitalianConfig.product_3_url,
              description: 'Elegancki kapelusz z delikatną ażurową wstążką, dodaje uroku każdej stylizacji.'
            },
            {
              name: soitalianConfig.product_1_name + ' (limitowana)',
              price: '229 zł',
              originalPrice: '279 zł',
              image: soitalianConfig.product_1_image,
              href: soitalianConfig.product_1_url,
              description: 'Limitowana edycja różowego topu w ekskluzywnej wersji z dodatkowymi detalami.'
            }
          ],
          buttonText: 'Zobacz więcej',
          showDescription: true,
          imageWidth: '280px'
        }),
        props: ['title', 'products', 'buttonText', 'showDescription', 'imageWidth']
      }
    }
  ];

  // Sort components - image components first, then others
  const componentsWithImages = ['Image', 'OneProduct', 'ProductGrid', 'CartSummary', 'ImageGallery', 'PricingTable', 'ThreeCardsRow', 'OneProductLeft', 'FourCardsRow', 'AlternatingProductRow'];
  
  const sortedComponents = components.sort((a, b) => {
    const aHasImages = componentsWithImages.includes(a.name);
    const bHasImages = componentsWithImages.includes(b.name);
    
    if (aHasImages && !bHasImages) return -1;
    if (!aHasImages && bHasImages) return 1;
    return 0;
  });

  res.render('components', { 
    title: 'Komponenty - MJML Email Storybook',
    components: sortedComponents, 
    config: soitalianConfig 
  });
});

app.get('/component-preview/:componentName', (req, res) => {
  // Import components
  const { 
    Html, Head, Body, Title, Preview, Container,
    Section, Column, Text, Button, Image, Hr, Heading,
    Font, Link, Markdown, Row,
    OneProduct, ProductGrid, CartSummary, ImageGallery, PricingTable,
    ThreeCardsRow, OneProductLeft, FourCardsRow, AlternatingProductRow
  } = require('../dist');
  
  const componentName = req.params.componentName;
  
  // Find component definition
  const componentDef = [
    {
      name: 'Html',
      generator: () => new Html({ lang: 'pl', children: 'Przykład HTML' })
    },
    {
      name: 'Head',
      generator: () => new Head({ children: 'Head content' })
    },
    {
      name: 'Body',
      generator: () => new Body({ backgroundColor: soitalianConfig.background_color, children: 'Zawartość body' })
    },
    {
      name: 'Title',
      generator: () => new Title({ children: 'Newsletter SoItalian - Włoski styl' })
    },
    {
      name: 'Preview',
      generator: () => new Preview({ children: 'Odkryj najnowsze trendy włoskiej mody w SoItalian!' })
    },
    {
      name: 'Container',
      generator: () => new Container({ maxWidth: '600px', backgroundColor: '#ffffff', children: 'Zawartość kontenera' })
    },
    {
      name: 'Section',
      generator: () => new Section({ 
        backgroundColor: soitalianConfig.background_color, 
        padding: '20px',
        children: 'Zawartość sekcji'
      })
    },
    {
      name: 'Column',
      generator: () => new Column({ width: '100%', children: 'Zawartość kolumny' })
    },
    {
      name: 'Text',
      generator: () => new Text({ 
        fontSize: '16px', 
        color: soitalianConfig.text_color,
        children: 'Witaj w świecie <strong>włoskiej mody</strong>! Odkryj nasze ekskluzywne kolekcje.'
      })
    },
    {
      name: 'Button',
      generator: () => new Button({
        href: soitalianConfig.store_url,
        backgroundColor: soitalianConfig.button_color,
        color: '#ffffff',
        padding: '15px 30px',
        borderRadius: '6px',
        children: '🛍️ Zobacz kolekcję'
      })
    },
    {
      name: 'Image',
      generator: () => new Image({
        src: soitalianConfig.product_1_image,
        alt: soitalianConfig.product_1_name,
        width: '200px'
      })
    },
    {
      name: 'Hr',
      generator: () => new Hr({
        borderColor: '#e0e0e0',
        width: '80%'
      })
    },
    {
      name: 'Heading',
      generator: () => new Heading({
        as: 'h2',
        color: soitalianConfig.text_color,
        textAlign: 'center',
        children: '🌟 Najnowsza kolekcja'
      })
    },
    {
      name: 'Font',
      generator: () => new Font({
        fontFamily: 'Playfair Display',
        fallbackFontFamily: ['Georgia', 'serif']
      })
    },
    {
      name: 'Link',
      generator: () => new Link({
        href: soitalianConfig.store_url,
        target: '_blank',
        color: soitalianConfig.button_color,
        fontSize: '16px',
        fontWeight: 'bold',
        children: '🛍️ Odkryj włoską kolekcję'
      })
    },
    {
      name: 'Markdown',
      generator: () => new Markdown({
        children: '# 🌟 SoItalian Collection\\n\\nOdkryj **najnowsze trendy** włoskiej mody.\\n\\n- Eleganckie *topy*\\n- Stylowe *akcesoria*\\n- Unikalne *kapelusze*\\n\\nZobacz więcej na [SoItalian.pl](https://www.soitalian.pl).',
        color: soitalianConfig.text_color
      })
    },
    {
      name: 'Row',
      generator: () => new Row({
        backgroundColor: soitalianConfig.background_color,
        padding: '30px 20px',
        children: 'Zawartość rzędu'
      })
    },
    {
      name: 'OneProduct',
      generator: () => new OneProduct({
        product: {
          name: soitalianConfig.product_1_name,
          description: 'Elegancki top w różowym kolorze, idealny na letnie dni.',
          price: '199 zł',
          originalPrice: '249 zł',
          image: soitalianConfig.product_1_image,
          href: soitalianConfig.product_1_url
        },
        buttonText: 'Kup teraz'
      })
    },
    {
      name: 'ProductGrid',
      generator: () => new ProductGrid({
        title: 'Najpopularniejsze produkty',
        products: [
          {
            name: soitalianConfig.product_1_name,
            price: '199 zł',
            originalPrice: '249 zł',
            image: soitalianConfig.product_1_image,
            href: soitalianConfig.product_1_url,
            description: 'Elegancki różowy top na lato'
          },
          {
            name: soitalianConfig.product_2_name,
            price: '149 zł',
            image: soitalianConfig.product_2_image,
            href: soitalianConfig.product_2_url,
            description: 'Stylowy kapelusz z czarną wstążką'
          },
          {
            name: soitalianConfig.product_3_name,
            price: '159 zł',
            image: soitalianConfig.product_3_image,
            href: soitalianConfig.product_3_url,
            description: 'Elegancki kapelusz z ażurową wstążką'
          }
        ],
        columns: 3,
        showPrices: true
      })
    },
    {
      name: 'CartSummary',
      generator: () => new CartSummary({
        title: 'Podsumowanie zamówienia',
        items: [
          {
            name: soitalianConfig.product_1_name,
            image: soitalianConfig.product_1_image,
            quantity: 1,
            price: '199 zł'
          },
          {
            name: soitalianConfig.product_2_name,
            image: soitalianConfig.product_2_image,
            quantity: 1,
            price: '149 zł'
          }
        ],
        subtotal: '348 zł',
        shipping: '15 zł',
        tax: '74 zł',
        total: '437 zł',
        checkoutUrl: soitalianConfig.store_url + '/checkout',
        checkoutText: 'Dokończ zakup'
      })
    },
    {
      name: 'ImageGallery',
      generator: () => new ImageGallery({
        images: [
          { src: soitalianConfig.product_1_image, alt: soitalianConfig.product_1_name },
          { src: soitalianConfig.product_2_image, alt: soitalianConfig.product_2_name },
          { src: soitalianConfig.product_3_image, alt: soitalianConfig.product_3_name },
          { src: soitalianConfig.product_1_image, alt: soitalianConfig.product_1_name }
        ],
        layout: 'grid-2x2',
        rounded: true
      })
    },
    {
      name: 'PricingTable',
      generator: () => new PricingTable({
        plans: [
          {
            name: 'Plan Basic',
            price: '99 zł',
            period: 'miesięcznie',
            features: [
              'Dostęp do wszystkich topów',
              'Bezpłatne zwroty',
              'Newsletter z promocjami'
            ],
            buttonText: 'Wybierz plan',
            buttonUrl: soitalianConfig.store_url + '/plans/basic'
          },
          {
            name: 'Plan Premium',
            price: '199 zł',
            period: 'miesięcznie',
            features: [
              'Wszystko z planu Basic',
              'Dostęp do kolekcji VIP',
              'Darmowa dostawa',
              'Personal shopper'
            ],
            buttonText: 'Wybierz plan',
            buttonUrl: soitalianConfig.store_url + '/plans/premium',
            emphasized: true,
            badge: 'Popularne'
          }
        ]
      })
    },
    {
      name: 'ThreeCardsRow',
      generator: () => new ThreeCardsRow({
        title: 'Nasze bestsellery',
        products: [
          {
            name: soitalianConfig.product_1_name,
            price: '199 zł',
            originalPrice: '249 zł',
            image: soitalianConfig.product_1_image,
            href: soitalianConfig.product_1_url,
            description: 'Elegancki top w różowym kolorze'
          },
          {
            name: soitalianConfig.product_2_name,
            price: '149 zł',
            image: soitalianConfig.product_2_image,
            href: soitalianConfig.product_2_url,
            description: 'Stylowy kapelusz z czarną wstążką'
          },
          {
            name: soitalianConfig.product_3_name,
            price: '159 zł',
            image: soitalianConfig.product_3_image,
            href: soitalianConfig.product_3_url,
            description: 'Elegancki kapelusz z ażurową wstążką'
          }
        ],
        buttonText: 'Zobacz więcej'
      })
    },
    {
      name: 'OneProductLeft',
      generator: () => new OneProductLeft({
        product: {
          name: soitalianConfig.product_1_name,
          description: 'Elegancki top w różowym kolorze, idealny na letnie dni. Wykonany z wysokiej jakości materiału, zapewnia komfort noszenia przez cały dzień.',
          price: '199 zł',
          originalPrice: '249 zł',
          image: soitalianConfig.product_1_image,
          href: soitalianConfig.product_1_url
        },
        buttonText: 'Dodaj do koszyka',
        showDescription: true,
        imageWidth: '280px'
      })
    },
    {
      name: 'FourCardsRow',
      generator: () => new FourCardsRow({
        title: 'Kolekcja letnia 2024',
        products: [
          {
            name: soitalianConfig.product_1_name,
            price: '199 zł',
            originalPrice: '249 zł',
            image: soitalianConfig.product_1_image,
            href: soitalianConfig.product_1_url,
            description: 'Elegancki różowy top'
          },
          {
            name: soitalianConfig.product_2_name,
            price: '149 zł',
            image: soitalianConfig.product_2_image,
            href: soitalianConfig.product_2_url,
            description: 'Kapelusz z czarną wstążką'
          },
          {
            name: soitalianConfig.product_3_name,
            price: '159 zł',
            image: soitalianConfig.product_3_image,
            href: soitalianConfig.product_3_url,
            description: 'Kapelusz z ażurową wstążką'
          },
          {
            name: soitalianConfig.product_1_name + ' (edycja limitowana)',
            price: '229 zł',
            originalPrice: '279 zł',
            image: soitalianConfig.product_1_image,
            href: soitalianConfig.product_1_url,
            description: 'Limitowana edycja różowego topu'
          }
        ],
        buttonText: 'Zobacz',
        compactMode: false
      })
    },
    {
      name: 'AlternatingProductRow',
      generator: () => new AlternatingProductRow({
        title: 'Nasze produkty',
        products: [
          {
            name: soitalianConfig.product_1_name,
            price: '199 zł',
            originalPrice: '249 zł',
            image: soitalianConfig.product_1_image,
            href: soitalianConfig.product_1_url,
            description: 'Elegancki top w różowym kolorze, idealny na letnie dni. Wykonany z wysokiej jakości materiału.'
          },
          {
            name: soitalianConfig.product_2_name,
            price: '149 zł',
            image: soitalianConfig.product_2_image,
            href: soitalianConfig.product_2_url,
            description: 'Stylowy kapelusz z czarną wstążką, idealny dodatek do letnich stylizacji.'
          },
          {
            name: soitalianConfig.product_3_name,
            price: '159 zł',
            image: soitalianConfig.product_3_image,
            href: soitalianConfig.product_3_url,
            description: 'Elegancki kapelusz z delikatną ażurową wstążką, dodaje uroku każdej stylizacji.'
          },
          {
            name: soitalianConfig.product_1_name + ' (limitowana)',
            price: '229 zł',
            originalPrice: '279 zł',
            image: soitalianConfig.product_1_image,
            href: soitalianConfig.product_1_url,
            description: 'Limitowana edycja różowego topu w ekskluzywnej wersji z dodatkowymi detalami.'
          }
        ],
        buttonText: 'Zobacz więcej',
        showDescription: true,
        imageWidth: '280px'
      })
    }
  ].find(comp => comp.name === componentName);
  
  if (!componentDef) {
    return res.status(404).send('Component not found');
  }
  
  try {
    // Generate component
    const component = componentDef.generator();
    
    // Create a simple email wrapper for preview
    const previewHtml = new Html({
      lang: 'pl',
      children: [
        new Head({
          children: [
            new Title({ children: `Preview: ${componentName}` })
          ]
        }),
        new Body({
          backgroundColor: '#f8f9fa',
          padding: '20px',
          children: [
            new Section({
              backgroundColor: '#ffffff',
              padding: '20px',
              children: [
                new Column({
                  children: component
                })
              ]
            })
          ]
        })
      ]
    });
    
    // Convert to HTML
    const mjmlCode = previewHtml.render();
    const htmlResult = mjml2html(mjmlCode);
    
    // Return preview HTML
    res.send(htmlResult.html);
  } catch (error) {
    res.status(500).send(`Error generating preview: ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`🚀 MJML Email Storybook running at http://localhost:${port}`);
  console.log(`📧 Templates: ${emailTemplates.length}`);
  console.log(`🏪 Store: ${soitalianConfig.store_name}`);
});