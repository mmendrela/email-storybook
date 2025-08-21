import { FontProps } from '../types';

export class Font {
  constructor(public props: FontProps) {}

  render(): string {
    const { 
      fontFamily, 
      fallbackFontFamily = ['Arial', 'sans-serif'], 
      webFont,
      fontWeight = 'normal',
      fontStyle = 'normal'
    } = this.props;
    
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