# Komponenty MJML - Bezpośrednie szablony

Ten folder zawiera wszystkie komponenty z biblioteki w postaci bezpośrednich plików MJML, gotowych do użycia w edytorach MJML lub kopiowania fragmentów.

## 📁 Struktura foldera

### 🧩 Komponenty podstawowe
- **Html.mjml** - Struktura główna dokumentu MJML
- **Head.mjml** - Sekcja head z meta danymi
- **Body.mjml** - Ciało emaila
- **Title.mjml** - Tytuł emaila
- **Preview.mjml** - Tekst podglądu

### 📐 Komponenty layoutu
- **Container.mjml** - Wrapper ograniczający szerokość
- **Section.mjml** - Sekcja pozioma
- **Column.mjml** - Kolumna w sekcji
- **Row.mjml** - Rząd (alias dla Section)

### 📄 Komponenty zawartości
- **Text.mjml** - Tekst z formatowaniem
- **Button.mjml** - Przycisk CTA
- **Image.mjml** - Responsywny obrazek
- **Hr.mjml** - Linia pozioma
- **Heading.mjml** - Nagłówki H1-H6
- **Link.mjml** - Stylizowane linki

### 💻 Komponenty specjalne
- **Font.mjml** - Definicja czcionek
- **Markdown.mjml** - Renderowany markdown

## 📧 Gotowe szablony
W folderze `templates/`:
- **welcome-email.mjml** - Email powitalny z kodem BENVENUTA10
- **sale-email.mjml** - Email promocyjny WEEKEND30

## 🚀 Jak używać

### 1. Kopiowanie komponentów
Skopiuj zawartość dowolnego pliku `.mjml` i wklej do swojego szablonu:

```mjml
<!-- Z Button.mjml -->
<mj-button 
  href="https://www.soitalian.pl/" 
  background-color="#000000" 
  color="#ffffff" 
  font-size="18px" 
  font-weight="bold" 
  padding="18px 40px" 
  border-radius="6px"
>
  🛍️ Zobacz kolekcję
</mj-button>
```

### 2. Używanie gotowych szablonów
Otwórz plik z folderu `templates/` w edytorze MJML lub skopiuj całą zawartość:

```bash
# Przykład z MJML CLI
mjml templates/welcome-email.mjml -o welcome-email.html
```

### 3. Miksowanie komponentów
Łącz różne komponenty aby stworzyć własny email:

```mjml
<mjml>
  <!-- Head.mjml -->
  <mj-head>
    <mj-title>Mój email</mj-title>
  </mj-head>
  
  <!-- Body.mjml -->
  <mj-body background-color="#f7f4f2">
    <!-- Section.mjml -->
    <mj-section padding="40px 20px">
      <mj-column>
        <!-- Text.mjml -->
        <mj-text color="#333">Witaj!</mj-text>
        <!-- Button.mjml -->
        <mj-button href="#" background-color="#000">Kliknij</mj-button>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

## 🎨 Branding SoItalian

Wszystkie komponenty są skonfigurowane z brandingiem SoItalian:
- **Kolory**: `#000000` (przyciski), `#f7f4f2` (tło), `#333333` (tekst)
- **Logo**: `https://www.soitalian.pl/img/logo-1643198138.jpg`
- **Produkty**: Top Rieti Pink, kapelusze Lovaria
- **Czcionki**: Inter, Playfair Display

## 🔧 Narzędzia

### MJML CLI
```bash
npm install mjml -g
mjml component.mjml -o component.html
```

### Online edytor
- https://mjml.io/try-it-live
- Wklej kod i zobacz podgląd

### VS Code
- Zainstaluj rozszerzenie "MJML"
- Podgląd na żywo z `Ctrl+Shift+P` > "MJML: Open Preview"

## 📱 Responsywność

Wszystkie komponenty są responsywne i działają na:
- 📧 Gmail, Outlook, Apple Mail
- 📱 iOS Mail, Android Gmail
- 🌐 Webmail (Yahoo, Hotmail)

## ✨ Wskazówki

1. **Zawsze testuj** w różnych klientach email
2. **Używaj inline styles** dla lepszej kompatybilności  
3. **Optymalizuj obrazki** - kompresja i CDN
4. **Zachowaj prostotę** - mniej znaczy więcej w emailach
5. **Testuj na urządzeniach mobilnych** - 60%+ użytkowników czyta email na telefonie