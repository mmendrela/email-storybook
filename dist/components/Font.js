"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Font = void 0;
class Font {
    constructor(props) {
        this.props = props;
    }
    render() {
        const { fontFamily, fallbackFontFamily = ['Arial', 'sans-serif'], webFont, fontWeight = 'normal', fontStyle = 'normal' } = this.props;
        let fontFaceRule = '';
        if (webFont) {
            fontFaceRule = `
        @font-face {
          font-family: '${fontFamily}';
          src: url('${webFont.url}') format('${webFont.format}');
          font-weight: ${fontWeight};
          font-style: ${fontStyle};
          font-display: swap;
        }
      `;
        }
        const fontStackRule = `
      * {
        font-family: '${fontFamily}', ${fallbackFontFamily.join(', ')};
      }
    `;
        return `<mj-style>
${fontFaceRule}
${fontStackRule}
</mj-style>`;
    }
}
exports.Font = Font;
