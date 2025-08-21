"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductGrid = void 0;
const Section_1 = require("./Section");
const utils_1 = require("../utils");
class ProductGrid {
    constructor(props) {
        this.props = props;
    }
    render() {
        const { title = 'Our Products', products, columns = 3, showPrices = true, ...styleProps } = this.props;
        const styles = (0, utils_1.formatStyleProps)(styleProps);
        const attributes = (0, utils_1.formatAttributes)(styles);
        // Calculate column width based on number of columns
        const columnWidth = columns === 2 ? '50%' : columns === 3 ? '33.33%' : '25%';
        // Split products into rows
        const productRows = [];
        for (let i = 0; i < products.length; i += columns) {
            productRows.push(products.slice(i, i + columns));
        }
        const titleSection = title ? new Section_1.Section({
            padding: '40px 30px 20px',
            backgroundColor: '#f7f4f2',
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
        }) : null;
        const gridSections = productRows.map(row => {
            const rowProducts = row.map(product => `
        <mj-column width="${columnWidth}">
          <mj-image 
            src="${product.image}"
            alt="${product.name}"
            width="180px"
            border-radius="8px"
            padding="0 10px 15px"
          />
          <mj-text 
            font-size="16px"
            font-weight="bold"
            color="#1f2937"
            align="center"
            padding="0 10px 8px"
            height="45px"
            line-height="20px"
          >
            ${product.name}
          </mj-text>
          <mj-text 
            font-size="14px"
            color="#6b7280"
            align="center"
            padding="0 10px 8px"
            line-height="18px"
            height="38px"
          >
            ${product.description || ''}
          </mj-text>
          ${showPrices ? `
          <mj-text 
            font-size="18px"
            font-weight="bold"
            color="#1f2937"
            align="center"
            padding="0 10px 15px"
          >
            ${product.price}
          </mj-text>
          ` : ''}
          <mj-button 
            href="${product.href}"
            background-color="#1f2937"
            color="#ffffff"
            font-size="14px"
            font-weight="bold"
            padding="12px 24px"
            border-radius="6px"
          >
            View Product
          </mj-button>
        </mj-column>
      `).join('');
            return new Section_1.Section({
                backgroundColor: '#f7f4f2',
                padding: '20px 30px',
                ...styleProps,
                children: rowProducts
            });
        });
        const allSections = [
            ...(titleSection ? [titleSection] : []),
            ...gridSections
        ];
        return allSections.map(section => section.render()).join('');
    }
}
exports.ProductGrid = ProductGrid;
