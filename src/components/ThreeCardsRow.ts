import { ThreeCardsRowProps } from '../types';
import { Section } from './Section';
import { Column } from './Column';
import { Text } from './Text';
import { Button } from './Button';
import { Image } from './Image';
import { formatAttributes, formatStyleProps } from '../utils';

export class ThreeCardsRow {
  constructor(public props: ThreeCardsRowProps) {}

  render(): string {
    const { 
      title,
      products,
      buttonText = 'Shop Now',
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

    // Products section with 3 columns
    const productsSection = new Section({
      backgroundColor: '#ffffff',
      padding: '20px 15px 40px',
      children: products.slice(0, 3).map(product => `
        <mj-column width="33.33%" padding="0 10px">
          <mj-image 
            src="${product.image}"
            alt="${product.name}"
            width="160px"
            border-radius="8px"
            padding="0 0 15px 0"
            align="center"
          />
          <mj-text 
            font-size="18px"
            font-weight="bold"
            color="#1f2937"
            align="center"
            padding="0 0 8px 0"
            height="50px"
            line-height="22px"
          >
            ${product.name}
          </mj-text>
          <mj-text 
            font-size="14px"
            color="#6b7280"
            align="center"
            padding="0 0 12px 0"
            line-height="18px"
            height="40px"
          >
            ${product.description || ''}
          </mj-text>
          <mj-text 
            font-size="20px"
            font-weight="bold"
            color="#059669"
            align="center"
            padding="0 0 15px 0"
          >
            ${product.originalPrice ? `
              <span style="text-decoration: line-through; color: #9ca3af; font-size: 16px; margin-right: 8px;">${product.originalPrice}</span>
            ` : ''}
            ${product.price}
          </mj-text>
          <mj-button 
            href="${product.href}"
            background-color="#1f2937"
            color="#ffffff"
            font-size="14px"
            font-weight="bold"
            padding="12px 20px"
            border-radius="6px"
            width="140px"
          >
            ${buttonText}
          </mj-button>
        </mj-column>
      `).join('')
    });

    content += productsSection.render();
    return content;
  }
}