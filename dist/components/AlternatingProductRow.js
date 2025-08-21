"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlternatingProductRow = void 0;
const Section_1 = require("./Section");
const utils_1 = require("../utils");
class AlternatingProductRow {
    constructor(props) {
        this.props = props;
    }
    render() {
        const { title, products, buttonText = 'Zobacz więcej', imageWidth = '280px', showDescription = true, ...styleProps } = this.props;
        const styles = (0, utils_1.formatStyleProps)(styleProps);
        const attributes = (0, utils_1.formatAttributes)(styles);
        let content = '';
        // Title section if provided
        if (title) {
            const titleSection = new Section_1.Section({
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
        // Generate alternating product rows
        const productSections = products.map((product, index) => {
            const isEven = index % 2 === 0;
            const isLast = index === products.length - 1;
            // Left image layout (even indices: 0, 2, 4...)
            if (isEven) {
                return new Section_1.Section({
                    backgroundColor: '#ffffff',
                    padding: isLast ? '20px 30px 40px' : '20px 30px',
                    children: `
            <mj-column width="45%">
              <mj-image 
                src="${product.image}"
                alt="${product.name}"
                width="${imageWidth}"
                border-radius="8px"
                align="center"
                padding="0 15px 0 0"
              />
            </mj-column>
            <mj-column width="55%">
              <mj-text 
                font-size="24px"
                font-weight="bold"
                color="#1f2937"
                padding="0 0 12px 0"
                line-height="32px"
              >
                ${product.name}
              </mj-text>
              ${showDescription && product.description ? `
              <mj-text 
                font-size="16px"
                color="#6b7280"
                padding="0 0 16px 0"
                line-height="24px"
              >
                ${product.description}
              </mj-text>
              ` : ''}
              <mj-text 
                font-size="28px"
                font-weight="bold"
                color="#059669"
                padding="0 0 20px 0"
              >
                ${product.originalPrice ? `
                  <span style="text-decoration: line-through; color: #9ca3af; font-size: 18px; margin-right: 12px;">${product.originalPrice}</span>
                ` : ''}
                ${product.price}
              </mj-text>
              <mj-button 
                href="${product.href}"
                background-color="#1f2937"
                color="#ffffff"
                font-size="16px"
                font-weight="bold"
                padding="14px 28px"
                border-radius="8px"
                align="left"
              >
                ${buttonText}
              </mj-button>
            </mj-column>
          `
                });
            }
            // Right image layout (odd indices: 1, 3, 5...)
            else {
                return new Section_1.Section({
                    backgroundColor: '#ffffff',
                    padding: isLast ? '20px 30px 40px' : '20px 30px',
                    children: `
            <mj-column width="55%">
              <mj-text 
                font-size="24px"
                font-weight="bold"
                color="#1f2937"
                padding="0 0 12px 0"
                line-height="32px"
                align="right"
              >
                ${product.name}
              </mj-text>
              ${showDescription && product.description ? `
              <mj-text 
                font-size="16px"
                color="#6b7280"
                padding="0 0 16px 0"
                line-height="24px"
                align="right"
              >
                ${product.description}
              </mj-text>
              ` : ''}
              <mj-text 
                font-size="28px"
                font-weight="bold"
                color="#059669"
                padding="0 0 20px 0"
                align="right"
              >
                ${product.originalPrice ? `
                  <span style="text-decoration: line-through; color: #9ca3af; font-size: 18px; margin-right: 12px;">${product.originalPrice}</span>
                ` : ''}
                ${product.price}
              </mj-text>
              <mj-button 
                href="${product.href}"
                background-color="#1f2937"
                color="#ffffff"
                font-size="16px"
                font-weight="bold"
                padding="14px 28px"
                border-radius="8px"
                align="right"
              >
                ${buttonText}
              </mj-button>
            </mj-column>
            <mj-column width="45%">
              <mj-image 
                src="${product.image}"
                alt="${product.name}"
                width="${imageWidth}"
                border-radius="8px"
                align="center"
                padding="0 0 0 15px"
              />
            </mj-column>
          `
                });
            }
        });
        // Render all product sections
        content += productSections.map(section => section.render()).join('');
        return content;
    }
}
exports.AlternatingProductRow = AlternatingProductRow;
