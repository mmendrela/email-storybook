import { FourCardsRowProps } from '../types';
import { Section } from './Section';
import { formatAttributes, formatStyleProps } from '../utils';

export class FourCardsRow {
  constructor(public props: FourCardsRowProps) {}

  render(): string {
    const { 
      title,
      products,
      buttonText = 'Shop Now',
      compactMode = false,
      ...styleProps 
    } = this.props;
    
    const styles = formatStyleProps(styleProps);
    const attributes = formatAttributes(styles);

    let content = '';

    // Title section if provided
    if (title) {
      const titleSection = new Section({
        padding: '40px 30px 20px',
        backgroundColor: '#ffffff',
        children: `
          <mj-column>
            <mj-text 
              font-size="28px"
              font-weight="bold"
              color="#1f2937"
              align="center"
              padding="0 0 20px 0"
            >
              ${title}
            </mj-text>
          </mj-column>
        `
      });
      content += titleSection.render();
    }

    // Products grid in 2x2 layout (like ImageGallery)
    const productRows = [];
    for (let i = 0; i < products.length; i += 2) {
      productRows.push(products.slice(i, i + 2));
    }

    const gridContent = productRows.map((row, rowIndex) => {
      const isLastRow = rowIndex === productRows.length - 1;
      const rowProducts = row.map(product => `
        <mj-column width="50%">
          <mj-image 
            src="${product.image}"
            alt="${product.name}"
            width="${compactMode ? '160px' : '180px'}"
            border-radius="8px"
            padding="0 0 15px 0"
            align="center"
          />
          <mj-text 
            font-size="${compactMode ? '16px' : '18px'}"
            font-weight="bold"
            color="#1f2937"
            align="center"
            padding="0 0 8px 0"
            line-height="${compactMode ? '20px' : '24px'}"
            height="${compactMode ? '45px' : '50px'}"
          >
            ${product.name}
          </mj-text>
          <mj-text 
            font-size="14px"
            color="#6b7280"
            align="center"
            padding="0 0 12px 0"
            line-height="18px"
            height="${compactMode ? '25px' : '35px'}"
          >
            ${!compactMode && product.description ? product.description : ''}
          </mj-text>
          <mj-text 
            font-size="${compactMode ? '18px' : '20px'}"
            font-weight="bold"
            color="#059669"
            align="center"
            padding="0 0 15px 0"
          >
            ${product.originalPrice ? `
              <span style="text-decoration: line-through; color: #9ca3af; font-size: ${compactMode ? '14px' : '16px'}; margin-right: 8px;">${product.originalPrice}</span>
            ` : ''}
            ${product.price}
          </mj-text>
          <mj-button 
            href="${product.href}"
            background-color="#1f2937"
            color="#ffffff"
            font-size="${compactMode ? '14px' : '16px'}"
            font-weight="bold"
            padding="${compactMode ? '12px 24px' : '14px 28px'}"
            border-radius="6px"
            width="${compactMode ? '160px' : '180px'}"
          >
            ${buttonText}
          </mj-button>
        </mj-column>
      `).join('');

      return new Section({
        backgroundColor: '#ffffff',
        padding: isLastRow ? '15px 20px 40px' : '15px 20px',
        children: rowProducts
      }).render();
    }).join('');

    content += gridContent;
    return content;
  }
}