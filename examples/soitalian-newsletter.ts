import { 
  Html, Head, Body, Title, Preview, Container, 
  Section, Column, Text, Button, Image, Hr 
} from '../src';

export const createSoitalianNewsletter = () => {
  const html = new Html({ lang: 'pl' });
  
  // Head section
  const head = new Head({
    children: [
      new Title({ children: 'WYPRZEDAŻ -20% na cały asortyment | Soitalian.pl' }),
      new Preview({ children: 'Nie przegap! Ekskluzywna wyprzedaż -20% na wszystkie produkty włoskie w Soitalian.pl. Oferta ważna tylko do końca tygodnia!' })
    ]
  });
  
  // Email body
  const body = new Body({
    backgroundColor: '#f8f9fa',
    fontFamily: 'Arial, sans-serif',
    children: [
      // Header with logo
      new Section({
        backgroundColor: '#ffffff',
        padding: '20px 0',
        children: [
          new Column({
            children: [
              new Image({
                src: 'https://soitalian.pl/logo.png',
                alt: 'Soitalian.pl - Prawdziwie włoskie produkty',
                width: '200px',
                height: 'auto'
              })
            ]
          })
        ]
      }),
      
      // Main content container
      new Container({
        maxWidth: '600px',
        backgroundColor: '#ffffff',
        children: [
          // Hero section with discount
          new Section({
            backgroundColor: '#c41e3a',
            padding: '40px 20px',
            children: [
              new Column({
                children: [
                  new Text({
                    children: '🇮🇹 WIELKA WYPRZEDAŻ 🇮🇹',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    textAlign: 'center',
                    padding: '0 0 15px 0'
                  }),
                  new Text({
                    children: '-20%',
                    fontSize: '72px',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    textAlign: 'center',
                    lineHeight: '1.2',
                    padding: '0 0 10px 0'
                  }),
                  new Text({
                    children: 'NA CAŁY ASORTYMENT',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    textAlign: 'center',
                    padding: '0 0 20px 0'
                  }),
                  new Text({
                    children: 'Oferta ważna do 31 sierpnia 2025',
                    fontSize: '16px',
                    color: '#ffffff',
                    textAlign: 'center',
                    fontWeight: 'normal'
                  })
                ]
              })
            ]
          }),
          
          // Welcome message
          new Section({
            padding: '40px 30px 20px',
            children: [
              new Column({
                children: [
                  new Text({
                    children: 'Ciao! 👋',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#2c3e50',
                    padding: '0 0 20px 0'
                  }),
                  new Text({
                    children: 'Mamy dla Ciebie wyjątkową ofertę! Przez ograniczony czas otrzymasz <strong>20% zniżki</strong> na wszystkie nasze autentyczne włoskie produkty.',
                    fontSize: '16px',
                    color: '#555555',
                    lineHeight: '24px',
                    padding: '0 0 20px 0'
                  }),
                  new Text({
                    children: 'Od prawdziwego parmezanu Parmigiano-Reggiano, przez tradycyjne makaron z Gragnano, po ekskluzywne oliwy z oliwek extra vergine - wszystko w promocyjnej cenie!',
                    fontSize: '16px',
                    color: '#555555',
                    lineHeight: '24px',
                    padding: '0 0 30px 0'
                  })
                ]
              })
            ]
          }),
          
          // CTA Button
          new Section({
            padding: '0 30px 40px',
            children: [
              new Column({
                children: [
                  new Button({
                    href: 'https://soitalian.pl?utm_source=newsletter&utm_medium=email&utm_campaign=wyprzedaz_20',
                    backgroundColor: '#c41e3a',
                    color: '#ffffff',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    padding: '18px 40px',
                    borderRadius: '30px',
                    textAlign: 'center',
                    children: '🛒 SKORZYSTAJ Z OFERTY'
                  }),
                  new Text({
                    children: 'Kod: <strong>WYPRZEDAZ20</strong>',
                    fontSize: '14px',
                    color: '#c41e3a',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    padding: '15px 0 0 0'
                  })
                ]
              })
            ]
          }),
          
          // Product highlights
          new Section({
            backgroundColor: '#f8f9fa',
            padding: '30px',
            children: [
              new Column({
                children: [
                  new Text({
                    children: '🌟 NASZE BESTSELLERY W PROMOCJI:',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#2c3e50',
                    textAlign: 'center',
                    padding: '0 0 25px 0'
                  }),
                  new Text({
                    children: '• Parmigiano-Reggiano DOP 24 miesiące<br>• Prosciutto di Parma DOP<br>• Oliwa Extra Vergine z Toskanii<br>• Pasta Gragnano IGP<br>• Mozzarella di Bufala Campana DOP<br>• Aceto Balsamico di Modena IGP',
                    fontSize: '16px',
                    color: '#555555',
                    lineHeight: '26px'
                  })
                ]
              })
            ]
          }),
          
          // Separator
          new Hr({
            borderColor: '#e0e0e0',
            margin: '30px 0'
          }),
          
          // Additional info
          new Section({
            padding: '20px 30px',
            children: [
              new Column({
                children: [
                  new Text({
                    children: '📦 <strong>Darmowa dostawa</strong> przy zamówieniu powyżej 200 zł<br>🚚 <strong>Ekspresowa dostawa</strong> w 24h do głównych miast<br>💯 <strong>Gwarancja świeżości</strong> i autentyczności produktów',
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
          new Section({
            padding: '20px 30px 40px',
            children: [
              new Column({
                children: [
                  new Button({
                    href: 'https://soitalian.pl/wyprzedaz?utm_source=newsletter&utm_medium=email&utm_campaign=wyprzedaz_20',
                    backgroundColor: '#ffffff',
                    color: '#c41e3a',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    padding: '15px 30px',
                    border: '2px solid #c41e3a',
                    borderRadius: '25px',
                    children: 'ZOBACZ WSZYSTKIE PROMOCJE'
                  })
                ]
              })
            ]
          })
        ]
      }),
      
      // Footer
      new Section({
        backgroundColor: '#2c3e50',
        padding: '30px 20px',
        children: [
          new Column({
            children: [
              new Text({
                children: 'Soitalian.pl - Prawdziwie włoskie smaki',
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#ffffff',
                textAlign: 'center',
                padding: '0 0 15px 0'
              }),
              new Text({
                children: '📧 kontakt@soitalian.pl | 📞 +48 123 456 789<br>📍 ul. Włoska 1, 00-001 Warszawa',
                fontSize: '14px',
                color: '#bdc3c7',
                textAlign: 'center',
                lineHeight: '20px',
                padding: '0 0 20px 0'
              }),
              new Text({
                children: 'Nie chcesz już otrzymywać naszych wiadomości? <a href="#" style="color: #3498db;">Wypisz się tutaj</a>',
                fontSize: '12px',
                color: '#95a5a6',
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

// Export as default for easy import
export default createSoitalianNewsletter;