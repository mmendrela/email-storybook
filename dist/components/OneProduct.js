"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneProduct = void 0;
const Section_1 = require("./Section");
const utils_1 = require("../utils");
class OneProduct {
    constructor(props) {
        this.props = props;
    }
    render() {
        const { product, buttonText = 'Buy now', showDescription = true, ...styleProps } = this.props;
        const styles = (0, utils_1.formatStyleProps)(styleProps);
        const attributes = (0, utils_1.formatAttributes)(styles);
        // Product section
        const productSection = new Section_1.Section({
            backgroundColor: '#ffffff',
            padding: '40px 30px',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            ...styleProps,
            children: `
        <mj-column width="100%">
          <mj-image 
            src="${product.image}"
            alt="${product.name}"
            width="300px"
            border-radius="8px"
          />
        </mj-column>
        
        <mj-column width="100%" padding="20px 0 0 0">
          <mj-text 
            font-size="24px"
            font-weight="bold"
            color="#1f2937"
            align="center"
            padding="0 0 12px 0"
          >
            ${product.name}
          </mj-text>
          
          ${showDescription && product.description ? `
          <mj-text 
            font-size="16px"
            color="#6b7280"
            line-height="24px"
            align="center"
            padding="0 0 20px 0"
          >
            ${product.description}
          </mj-text>
          ` : ''}
          
          <mj-text align="center" padding="0 0 25px 0">
            ${product.originalPrice
                ? `<span style="font-size: 20px; color: #dc2626; font-weight: bold;">${product.price}</span> <span style="font-size: 16px; color: #9ca3af; text-decoration: line-through;">${product.originalPrice}</span>`
                : `<span style="font-size: 20px; color: #1f2937; font-weight: bold;">${product.price}</span>`}
          </mj-text>
          
          <mj-button 
            href="${product.href}"
            background-color="#1f2937"
            color="#ffffff"
            font-size="16px"
            font-weight="bold"
            padding="14px 28px"
            border-radius="8px"
          >
            ${buttonText}
          </mj-button>
        </mj-column>
      `
        });
        return productSection.render();
    }
}
exports.OneProduct = OneProduct;
