import { PricingTableProps } from '../types';
import { Section } from './Section';
import { formatAttributes, formatStyleProps } from '../utils';

export class PricingTable {
  constructor(public props: PricingTableProps) {}

  render(): string {
    const { 
      plans,
      layout = 'two-tier',
      ...styleProps 
    } = this.props;
    
    const styles = formatStyleProps(styleProps);
    const attributes = formatAttributes(styles);

    if (layout === 'simple') {
      // Single column layout for simple pricing
      return plans.map(plan => 
        new Section({
          backgroundColor: plan.emphasized ? '#f9fafb' : '#ffffff',
          border: plan.emphasized ? '2px solid #3b82f6' : '1px solid #e5e7eb',
          borderRadius: '12px',
          padding: '40px 30px',
          ...styleProps,
          children: `
            <mj-column>
              ${plan.badge ? `
              <mj-text 
                background-color="#3b82f6"
                color="#ffffff"
                font-size="12px"
                font-weight="bold"
                text-transform="uppercase"
                align="center"
                padding="8px 16px"
                border-radius="20px"
                margin="0 0 20px 0"
              >
                ${plan.badge}
              </mj-text>
              ` : ''}
              
              <mj-text 
                font-size="24px"
                font-weight="bold"
                color="#1f2937"
                align="center"
                padding="0 0 15px 0"
              >
                ${plan.name}
              </mj-text>
              
              <mj-text 
                font-size="48px"
                font-weight="bold"
                color="#1f2937"
                align="center"
                padding="0 0 5px 0"
              >
                ${plan.price}
              </mj-text>
              
              ${plan.period ? `
              <mj-text 
                font-size="16px"
                color="#6b7280"
                align="center"
                padding="0 0 30px 0"
              >
                ${plan.period}
              </mj-text>
              ` : ''}
              
              <mj-text 
                font-size="14px"
                color="#374151"
                line-height="24px"
                align="center"
                padding="0 0 30px 0"
              >
                ${plan.features.map(feature => `• ${feature}`).join('<br>')}
              </mj-text>
              
              <mj-button 
                href="${plan.buttonUrl}"
                background-color="${plan.emphasized ? '#3b82f6' : '#1f2937'}"
                color="#ffffff"
                font-size="16px"
                font-weight="bold"
                padding="14px 32px"
                border-radius="8px"
                width="100%"
              >
                ${plan.buttonText}
              </mj-button>
            </mj-column>
          `
        }).render()
      ).join('');
    }

    // Two-tier layout (side by side)
    const columnWidth = plans.length === 2 ? '50%' : `${100 / plans.length}%`;
    
    return new Section({
      backgroundColor: '#f9fafb',
      padding: '40px 20px',
      ...styleProps,
      children: plans.map(plan => `
        <mj-column 
          width="${columnWidth}"
          background-color="${plan.emphasized ? '#ffffff' : '#f8fafc'}"
          border="${plan.emphasized ? '2px solid #3b82f6' : '1px solid #e5e7eb'}"
          border-radius="12px"
          padding="30px 20px"
        >
          ${plan.badge ? `
          <mj-text 
            background-color="#3b82f6"
            color="#ffffff"
            font-size="12px"
            font-weight="bold"
            text-transform="uppercase"
            align="center"
            padding="6px 12px"
            border-radius="16px"
            margin="0 0 20px 0"
          >
            ${plan.badge}
          </mj-text>
          ` : ''}
          
          <mj-text 
            font-size="20px"
            font-weight="bold"
            color="#1f2937"
            align="center"
            padding="0 0 15px 0"
          >
            ${plan.name}
          </mj-text>
          
          <mj-text 
            font-size="36px"
            font-weight="bold"
            color="#1f2937"
            align="center"
            padding="0 0 5px 0"
          >
            ${plan.price}
          </mj-text>
          
          ${plan.period ? `
          <mj-text 
            font-size="14px"
            color="#6b7280"
            align="center"
            padding="0 0 25px 0"
          >
            ${plan.period}
          </mj-text>
          ` : ''}
          
          <mj-text 
            font-size="14px"
            color="#374151"
            line-height="22px"
            align="center"
            padding="0 0 25px 0"
          >
            ${plan.features.map(feature => `• ${feature}`).join('<br>')}
          </mj-text>
          
          <mj-button 
            href="${plan.buttonUrl}"
            background-color="${plan.emphasized ? '#3b82f6' : '#1f2937'}"
            color="#ffffff"
            font-size="14px"
            font-weight="bold"
            padding="12px 24px"
            border-radius="6px"
            width="100%"
          >
            ${plan.buttonText}
          </mj-button>
        </mj-column>
      `).join('')
    }).render();
  }
}