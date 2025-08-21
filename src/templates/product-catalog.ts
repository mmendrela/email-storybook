import { Html } from '../components/Html';
import { Head } from '../components/Head';
import { Body } from '../components/Body';
import { Title } from '../components/Title';
import { Preview } from '../components/Preview';
import { Container } from '../components/Container';
import { AlternatingProductRow } from '../components/AlternatingProductRow';
import { BrandConfig } from '../config';

export interface ProductCatalogConfig {
  customerName?: string;
  season?: string;
  promoCode?: string;
  discountPercent?: number;
}

export function createProductCatalogEmail(config: BrandConfig, params: ProductCatalogConfig = {}) {
  const {
    customerName = 'Klient',
    season = 'lato 2024',
    promoCode = 'KATALOG20',
    discountPercent = 20
  } = params;

  // Create email structure
  const html = new Html({ lang: 'pl' });
  
  const head = new Head({
    children: [
      new Title({ 
        children: `${customerName}, odkryj naszą kolekcję ${season}!` 
      }),
      new Preview({ 
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

  const body = new Body({
    backgroundColor: config.background_color,
    children: [
      new Container({
        maxWidth: '600px',
        children: [
          new AlternatingProductRow({
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