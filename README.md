# MJML Email Components

Biblioteka komponentów MJML inspirowana przez react-email. Pozwala na tworzenie responsywnych emaili używając komponentów podobnych do tych z react-email, ale generujących kod MJML.

## Instalacja

```bash
npm install mjml-email-components
```

## Podstawowe użycie

```typescript
import { Html, Head, Body, Title, Preview, Container, Section, Column, Text, Button, OneProduct, ProductGrid, CartSummary } from 'mjml-email-components';

const email = new Html({ lang: 'pl' });
const head = new Head({});
const title = new Title({ children: 'Witaj w naszym newsletterze!' });
const preview = new Preview({ children: 'To jest podgląd emaila...' });
const body = new Body({});
const container = new Container({ maxWidth: '600px' });
const section = new Section({});
const column = new Column({});
const text = new Text({ 
  children: 'Dziękujemy za subskrypcję!',
  fontSize: '16px',
  color: '#333333'
});
const button = new Button({
  href: 'https://example.com',
  backgroundColor: '#007bff',
  color: '#ffffff',
  children: 'Kliknij tutaj'
});

// Budowanie struktury emaila
head.props.children = [title, preview];
column.props.children = [text, button];
section.props.children = [column];
container.props.children = [section];
body.props.children = [container];
email.props.children = [head, body];

// Generowanie MJML
const mjmlOutput = email.render();
console.log(mjmlOutput);
```

## Dostępne komponenty

### Struktura dokumentu
- `Html` - Element główny (`<mjml>`)
- `Head` - Sekcja head (`<mj-head>`)
- `Body` - Ciało emaila (`<mj-body>`)
- `Title` - Tytuł dokumentu (`<mj-title>`)
- `Preview` - Tekst podglądu (`<mj-preview>`)

### Layout
- `Container` - Kontener (`<mj-wrapper>`)
- `Section` - Sekcja (`<mj-section>`)
- `Column` - Kolumna (`<mj-column>`)

### Zawartość
- `Text` - Tekst (`<mj-text>`)
- `Button` - Przycisk (`<mj-button>`)
- `Image` - Obrazek (`<mj-image>`)
- `Hr` - Linia pozioma (`<mj-divider>`)
- `Heading` - Nagłówek (`<mj-text>` ze stylami)

## Właściwości stylów

Wszystkie komponenty obsługują standardowe właściwości CSS:
- `backgroundColor`
- `border`
- `borderRadius`
- `color`
- `fontFamily`
- `fontSize`
- `fontWeight`
- `height`
- `lineHeight`
- `margin`
- `padding`
- `textAlign`
- `width`

## Przykład kompletnego emaila

```typescript
import { 
  Html, Head, Body, Title, Preview, Container, 
  Section, Column, Text, Button, Image, Hr 
} from 'mjml-email-components';

const createWelcomeEmail = () => {
  const html = new Html({ lang: 'pl' });
  
  // Head
  const head = new Head({
    children: [
      new Title({ children: 'Witaj w naszej społeczności!' }),
      new Preview({ children: 'Dziękujemy za rejestrację. Oto twój przewodnik...' })
    ]
  });
  
  // Body content
  const body = new Body({
    backgroundColor: '#f6f9fc',
    children: [
      new Container({
        maxWidth: '600px',
        children: [
          new Section({
            backgroundColor: '#ffffff',
            padding: '40px 30px',
            children: [
              new Column({
                children: [
                  new Image({
                    src: 'https://example.com/logo.png',
                    alt: 'Logo firmy',
                    width: '150px'
                  }),
                  new Text({
                    children: 'Witaj John!',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#333333',
                    textAlign: 'center',
                    padding: '20px 0'
                  }),
                  new Text({
                    children: 'Dziękujemy za dołączenie do naszej społeczności. Jesteśmy podekscytowani, że możemy Cię powitać!',
                    fontSize: '16px',
                    color: '#555555',
                    lineHeight: '24px',
                    textAlign: 'center'
                  }),
                  new Hr({
                    borderColor: '#e0e0e0',
                    margin: '30px 0'
                  }),
                  new Button({
                    href: 'https://example.com/get-started',
                    backgroundColor: '#007bff',
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    padding: '15px 25px',
                    borderRadius: '5px',
                    children: 'Rozpocznij teraz'
                  })
                ]
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

const mjmlCode = createWelcomeEmail();
console.log(mjmlCode);
```

## Kompilacja do HTML

Po wygenerowaniu kodu MJML, możesz go skompilować do HTML używając biblioteki MJML:

```typescript
import mjml2html from 'mjml';

const mjmlCode = createWelcomeEmail();
const { html } = mjml2html(mjmlCode);
console.log(html);
```

## Development

```bash
# Instalacja zależności
npm install

# Kompilacja
npm run build

# Tryb watch
npm run dev

# Testy
npm test

# Linting
npm run lint
```