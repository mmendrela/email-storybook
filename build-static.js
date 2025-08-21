const fs = require('fs');
const path = require('path');

// Import the compiled email templates
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
} = require('./dist');

// Template configurations
const emailTemplates = [
  {
    id: 'product-catalog',
    name: 'Katalog Produktów',
    description: 'Prezentacja produktów z komponentem AlternatingProductRow',
    generator: createProductCatalogEmail,
    params: { customerName: 'Anna', season: 'Lato 2024' }
  },
  {
    id: 'bestsellers-showcase',
    name: 'Bestsellery',
    description: 'Promocja bestsellerów z ThreeCardsRow',
    generator: createBestsellersEmail,
    params: { customerName: 'Magdalena', promoCode: 'BESTSELLER20' }
  },
  {
    id: 'grid-layout',
    name: 'Layout Siatki',
    description: 'Układ siatki z FourCardsRow',
    generator: createGridLayoutEmail,
    params: { customerName: 'Karolina', collectionName: 'Letnia Kolekcja' }
  },
  {
    id: 'single-product',
    name: 'Pojedynczy Produkt',
    description: 'Prezentacja pojedynczego produktu z OneProductLeft',
    generator: createSingleProductEmail,
    params: { customerName: 'Agnieszka', stockCount: 3 }
  },
  {
    id: 'product-gallery',
    name: 'Galeria Produktów',
    description: 'Galeria produktów z ProductGrid',
    generator: createProductGalleryEmail,
    params: { customerName: 'Patrycja', showPricing: true }
  },
  {
    id: 'abandoned-cart',
    name: 'Porzucony Koszyk',
    description: 'Email przypominający o koszyku z CartSummary',
    generator: createAbandonedCartEmail,
    params: { customerName: 'Monika', discountPercent: 15 }
  },
  {
    id: 'photo-gallery',
    name: 'Galeria Zdjęć',
    description: 'Galeria zdjęć z sesji z ImageGallery',
    generator: createPhotoGalleryEmail,
    params: { customerName: 'Aleksandra', eventName: 'Letnia Sesja 2024' }
  },
  {
    id: 'pricing-plans',
    name: 'Plany Cenowe',
    description: 'Tabela planów członkowskich z PricingTable',
    generator: createPricingPlansEmail,
    params: { customerName: 'Natalia', specialOffer: true }
  }
];

// Ensure dist directory exists
if (!fs.existsSync('./dist')) {
  console.error('Error: ./dist directory not found. Please run "npm run build" first.');
  process.exit(1);
}

// Create static directory
const staticDir = './static';
if (!fs.existsSync(staticDir)) {
  fs.mkdirSync(staticDir, { recursive: true });
}

// Generate index.html
function generateIndexHTML(templates) {
  return `<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Templates - SoItalian</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 2rem 1rem;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        h1 {
            text-align: center;
            color: white;
            font-size: 2.5rem;
            margin-bottom: 1rem;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .subtitle {
            text-align: center;
            color: rgba(255,255,255,0.9);
            font-size: 1.2rem;
            margin-bottom: 3rem;
        }
        
        .templates-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-bottom: 3rem;
        }
        
        .template-card {
            background: white;
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            border: 1px solid rgba(255,255,255,0.2);
        }
        
        .template-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 35px rgba(0,0,0,0.15);
        }
        
        .template-card h3 {
            color: #1f2937;
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
        }
        
        .template-card p {
            color: #6b7280;
            font-size: 0.9rem;
            margin-bottom: 1rem;
            line-height: 1.5;
        }
        
        .template-actions {
            display: flex;
            gap: 0.5rem;
        }
        
        .btn {
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 6px;
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        .btn-primary:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }
        
        .btn-secondary {
            background: #f3f4f6;
            color: #374151;
            border: 1px solid #d1d5db;
        }
        
        .btn-secondary:hover {
            background: #e5e7eb;
        }
        
        .footer {
            text-align: center;
            color: rgba(255,255,255,0.8);
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 1px solid rgba(255,255,255,0.2);
        }
        
        .stats {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 2rem;
        }
        
        .stat {
            text-align: center;
            color: white;
        }
        
        .stat-number {
            font-size: 2rem;
            font-weight: bold;
            display: block;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .stat-label {
            font-size: 0.9rem;
            opacity: 0.9;
        }
        
        @media (max-width: 768px) {
            .stats {
                flex-direction: column;
                gap: 1rem;
            }
            
            h1 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📧 Email Templates</h1>
        <p class="subtitle">SoItalian - Komponenty MJML</p>
        
        <div class="stats">
            <div class="stat">
                <span class="stat-number">${templates.length}</span>
                <span class="stat-label">Szablonów</span>
            </div>
            <div class="stat">
                <span class="stat-number">8</span>
                <span class="stat-label">Komponentów</span>
            </div>
            <div class="stat">
                <span class="stat-number">100%</span>
                <span class="stat-label">MJML</span>
            </div>
        </div>
        
        <div class="templates-grid">
            ${templates.map(template => `
                <div class="template-card">
                    <h3>${template.name}</h3>
                    <p>${template.description}</p>
                    <div class="template-actions">
                        <a href="/template/${template.id}" class="btn btn-primary">
                            👁️ Podgląd
                        </a>
                        <a href="/template/${template.id}/mjml" class="btn btn-secondary">
                            📄 MJML
                        </a>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div class="footer">
            <p>Wygenerowane przez Email Storybook</p>
            <p>Wszystkie szablony używają komponentów MJML z biblioteki SoItalian</p>
        </div>
    </div>
</body>
</html>`;
}

// Generate individual template pages
function generateTemplateHTML(template, mjmlContent) {
  return `<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.name} - Email Template Preview</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f8fafc;
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1rem 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .header-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .header h1 {
            font-size: 1.5rem;
        }
        
        .back-link {
            color: white;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 6px;
            background: rgba(255,255,255,0.2);
            transition: background 0.2s ease;
        }
        
        .back-link:hover {
            background: rgba(255,255,255,0.3);
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1rem;
        }
        
        .preview-info {
            background: white;
            border-radius: 8px;
            padding: 1.5rem;
            margin-bottom: 2rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            border-left: 4px solid #667eea;
        }
        
        .preview-info h2 {
            color: #1f2937;
            margin-bottom: 0.5rem;
        }
        
        .preview-info p {
            color: #6b7280;
            margin-bottom: 1rem;
        }
        
        .actions {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
        }
        
        .btn {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        .btn-secondary {
            background: #f3f4f6;
            color: #374151;
            border: 1px solid #d1d5db;
        }
        
        .email-preview {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        
        .email-frame {
            width: 100%;
            min-height: 800px;
            border: none;
        }
        
        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                gap: 1rem;
                text-align: center;
            }
            
            .actions {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="header-content">
            <h1>📧 ${template.name}</h1>
            <a href="/" class="back-link">← Powrót do listy</a>
        </div>
    </div>
    
    <div class="container">
        <div class="preview-info">
            <h2>Informacje o szablonie</h2>
            <p>${template.description}</p>
            <strong>ID:</strong> ${template.id}
        </div>
        
        <div class="actions">
            <a href="/template/${template.id}/mjml" class="btn btn-secondary">📄 Zobacz MJML</a>
            <a href="/" class="btn btn-primary">📋 Wszystkie szablony</a>
        </div>
        
        <div class="email-preview">
            <iframe class="email-frame" srcdoc="${mjmlContent.replace(/"/g, '&quot;')}"></iframe>
        </div>
    </div>
</body>
</html>`;
}

// Generate MJML view page
function generateMJMLPage(template, mjmlSource) {
  return `<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.name} - MJML Source</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f8fafc;
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1rem 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .header-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .header h1 {
            font-size: 1.5rem;
        }
        
        .back-link {
            color: white;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 6px;
            background: rgba(255,255,255,0.2);
            transition: background 0.2s ease;
        }
        
        .back-link:hover {
            background: rgba(255,255,255,0.3);
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1rem;
        }
        
        .actions {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
        }
        
        .btn {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        .btn-secondary {
            background: #f3f4f6;
            color: #374151;
            border: 1px solid #d1d5db;
        }
        
        .code-container {
            background: #1f2937;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .code-header {
            background: #374151;
            padding: 1rem 1.5rem;
            border-bottom: 1px solid #4b5563;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .code-title {
            color: #f3f4f6;
            font-weight: 500;
        }
        
        .copy-btn {
            background: #6b7280;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            font-size: 0.9rem;
            cursor: pointer;
            transition: background 0.2s ease;
        }
        
        .copy-btn:hover {
            background: #9ca3af;
        }
        
        pre {
            margin: 0;
            padding: 1.5rem;
            overflow-x: auto;
            background: #1f2937;
            color: #f3f4f6;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-size: 0.9rem;
            line-height: 1.5;
        }
        
        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                gap: 1rem;
                text-align: center;
            }
            
            .actions {
                flex-direction: column;
            }
            
            pre {
                padding: 1rem;
                font-size: 0.8rem;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="header-content">
            <h1>📄 ${template.name} - MJML</h1>
            <a href="/" class="back-link">← Powrót do listy</a>
        </div>
    </div>
    
    <div class="container">
        <div class="actions">
            <a href="/template/${template.id}" class="btn btn-secondary">👁️ Podgląd email</a>
            <a href="/" class="btn btn-primary">📋 Wszystkie szablony</a>
        </div>
        
        <div class="code-container">
            <div class="code-header">
                <span class="code-title">Kod MJML - ${template.name}</span>
                <button class="copy-btn" onclick="copyToClipboard()">📋 Kopiuj</button>
            </div>
            <pre id="mjml-code">${mjmlSource.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
        </div>
    </div>
    
    <script>
        function copyToClipboard() {
            const code = document.getElementById('mjml-code').textContent;
            navigator.clipboard.writeText(code).then(() => {
                const btn = document.querySelector('.copy-btn');
                const originalText = btn.textContent;
                btn.textContent = '✅ Skopiowano!';
                setTimeout(() => {
                    btn.textContent = originalText;
                }, 2000);
            });
        }
    </script>
</body>
</html>`;
}

console.log('🚀 Generating static site...');
console.log(`📧 Found ${emailTemplates.length} email templates`);

// Generate main index page
const indexHTML = generateIndexHTML(emailTemplates);
fs.writeFileSync(path.join(staticDir, 'index.html'), indexHTML);
console.log('✅ Generated index.html');

// Create template directories and generate pages
let successCount = 0;
let errorCount = 0;

for (const template of emailTemplates) {
  try {
    console.log(`📝 Processing template: ${template.name}`);
    
    // Generate MJML content
    const mjmlContent = template.generator(soitalianConfig, template.params);
    
    // Create template directory
    const templateDir = path.join(staticDir, 'template', template.id);
    if (!fs.existsSync(templateDir)) {
      fs.mkdirSync(templateDir, { recursive: true });
    }
    
    // Generate template preview page
    const templateHTML = generateTemplateHTML(template, mjmlContent);
    fs.writeFileSync(path.join(templateDir, 'index.html'), templateHTML);
    
    // Generate MJML source page
    const mjmlHTML = generateMJMLPage(template, mjmlContent);
    fs.writeFileSync(path.join(templateDir, 'mjml.html'), mjmlHTML);
    
    // Save raw MJML for direct access
    fs.writeFileSync(path.join(templateDir, 'template.mjml'), mjmlContent);
    
    successCount++;
    console.log(`  ✅ Generated pages for ${template.name}`);
  } catch (error) {
    errorCount++;
    console.error(`  ❌ Error processing ${template.name}:`, error.message);
  }
}

console.log(`\n🎉 Static site generation complete!`);
console.log(`✅ Successfully generated: ${successCount} templates`);
if (errorCount > 0) {
  console.log(`❌ Errors: ${errorCount} templates`);
}
console.log(`📁 Output directory: ${staticDir}`);
console.log(`🌐 Open ${staticDir}/index.html in your browser to view the site`);