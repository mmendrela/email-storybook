import { SectionProps } from '../types';
import { formatAttributes, formatStyleProps, renderChildren } from '../utils';

export class Section {
  constructor(public props: SectionProps) {}

  render(): string {
    const { children, fullWidth, backgroundUrl, ...styleProps } = this.props;
    const styles = formatStyleProps(styleProps);
    
    if (fullWidth) {
      styles['full-width'] = 'full-width';
    }
    
    if (backgroundUrl) {
      styles['background-url'] = backgroundUrl;
    }
    
    const attributes = formatAttributes(styles);
    
    return `<mj-section${attributes ? ' ' + attributes : ''}>
  ${renderChildren(children)}
</mj-section>`;
  }
}