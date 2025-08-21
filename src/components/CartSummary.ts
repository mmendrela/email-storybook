
import { CartSummaryProps } from '../types';
import { Section } from './Section';
import { Heading } from './Heading';
import { formatAttributes, formatStyleProps } from '../utils';

export class CartSummary {
  constructor(public props: CartSummaryProps) {}

  render(): string {
    const { 
      title = 'Your Order Summary',
      items,
      subtotal,
      shipping,
      tax,
      total,
      checkoutUrl,
      checkoutText = 'Complete Purchase',
      ...styleProps 
    } = this.props;
    
    const styles = formatStyleProps(styleProps);
    const attributes = formatAttributes(styles);

    const titleSection = new Section({
      padding: '30px 30px 20px',
      backgroundColor: '#ffffff',
      children: `
        <mj-column>
          <mj-text 
            font-size="24px"
            font-weight="bold"
            color="#1f2937"
            align="center"
          >
            ${title}
          </mj-text>
        </mj-column>
      `
    });

    const itemsSection = new Section({
      backgroundColor: '#ffffff',
      padding: '20px 30px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      children: items.map(item => `
        <mj-column width="25%">
          <mj-image 
            src="${item.image}"
            alt="${item.name}"
            width="80px"
            border-radius="6px"
          />
        </mj-column>
        <mj-column width="50%">
          <mj-text 
            font-size="16px"
            font-weight="bold"
            color="#1f2937"
            align="center"
            padding="0 0 5px 0"
          >
            ${item.name}
          </mj-text>
          <mj-text 
            font-size="14px"
            color="#6b7280"
            align="center"
          >
            Quantity: ${item.quantity}
          </mj-text>
        </mj-column>
        <mj-column width="25%">
          <mj-text 
            font-size="16px"
            font-weight="bold"
            color="#1f2937"
            align="right"
          >
            ${item.price}
          </mj-text>
        </mj-column>
      `).join('')
    });

    const summarySection = new Section({
      backgroundColor: '#f9fafb',
      padding: '30px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      children: `
        <mj-column>
          <mj-table>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 0; font-size: 16px; color: #374151;">Subtotal</td>
              <td style="padding: 12px 0; font-size: 16px; color: #374151; text-align: right; font-weight: 600;">${subtotal}</td>
            </tr>
            ${shipping ? `
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 0; font-size: 16px; color: #374151;">Shipping</td>
              <td style="padding: 12px 0; font-size: 16px; color: #374151; text-align: right; font-weight: 600;">${shipping}</td>
            </tr>
            ` : ''}
            ${tax ? `
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 0; font-size: 16px; color: #374151;">Tax</td>
              <td style="padding: 12px 0; font-size: 16px; color: #374151; text-align: right; font-weight: 600;">${tax}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 20px 0 12px 0; font-size: 20px; color: #111827; font-weight: bold;">Total</td>
              <td style="padding: 20px 0 12px 0; font-size: 20px; color: #111827; text-align: right; font-weight: bold;">${total}</td>
            </tr>
          </mj-table>
        </mj-column>
      `
    });

    const checkoutSection = new Section({
      padding: '30px',
      children: `
        <mj-column>
          <mj-button 
            href="${checkoutUrl}"
            background-color="#059669"
            color="#ffffff"
            font-size="18px"
            font-weight="bold"
            padding="16px 40px"
            border-radius="8px"
            width="100%"
          >
            ${checkoutText}
          </mj-button>
        </mj-column>
      `
    });

    const allSections = [titleSection, itemsSection, summarySection, checkoutSection];
    return allSections.map(section => section.render()).join('');
  }
}