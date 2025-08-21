"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneProductLeft = void 0;
const Section_1 = require("./Section");
const utils_1 = require("../utils");
class OneProductLeft {
    constructor(props) {
        this.props = props;
    }
    render() {
        const { product, buttonText = 'Buy Now', showDescription = true, imageWidth = '300px', ...styleProps } = this.props;
        const styles = (0, utils_1.formatStyleProps)(styleProps);
        const attributes = (0, utils_1.formatAttributes)(styles);
        const productSection = new Section_1.Section({
            backgroundColor: '#ffffff',
            padding: '40px 30px',
            children: `
        <mj-column width="50%">
          <mj-image 
            src="${product.image}"
            alt="${product.name}"
            width="${imageWidth}"
            border-radius="8px"
            padding="0 15px 0 0"
          />
        </mj-column>
        <mj-column width="50%">
          <mj-text 
            font-size="28px"
            font-weight="bold"
            color="#1f2937"
            padding="0 0 15px 0"
            line-height="36px"
          >
            ${product.name}
          </mj-text>
          ${showDescription && product.description ? `
          <mj-text 
            font-size="16px"
            color="#6b7280"
            padding="0 0 20px 0"
            line-height="24px"
          >
            ${product.description}
          </mj-text>
          ` : ''}
          <mj-text 
            font-size="32px"
            font-weight="bold"
            color="#059669"
            padding="0 0 25px 0"
          >
            ${product.originalPrice ? `
              <span style="text-decoration: line-through; color: #9ca3af; font-size: 20px; margin-right: 12px;">${product.originalPrice}</span>
            ` : ''}
            ${product.price}
          </mj-text>
          <mj-button 
            href="${product.href}"
            background-color="#1f2937"
            color="#ffffff"
            font-size="18px"
            font-weight="bold"
            padding="16px 40px"
            border-radius="8px"
            width="200px"
          >
            ${buttonText}
          </mj-button>
        </mj-column>
      `
        });
        return productSection.render();
    }
}
exports.OneProductLeft = OneProductLeft;
