import { HeadingProps } from '../types';
import { formatAttributes, formatStyleProps, renderChildren } from '../utils';

export class Heading {
  constructor(public props: HeadingProps) {}

  render(): string {
    const { children, as = 'h1', ...styleProps } = this.props;
    const styles = formatStyleProps(styleProps);
    
    // MJML doesn't have heading components, so we use mj-text with appropriate styling
    const headingSizes = {
      h1: '32px',
      h2: '24px',
      h3: '20px',
      h4: '16px',
      h5: '14px',
      h6: '12px'
    };
    
    if (!styles['font-size']) {
      styles['font-size'] = headingSizes[as];
    }
    
    if (!styles['font-weight']) {
      styles['font-weight'] = 'bold';
    }
    
    const attributes = formatAttributes(styles);
    
    return `<mj-text${attributes ? ' ' + attributes : ''}>${renderChildren(children)}</mj-text>`;
  }
}