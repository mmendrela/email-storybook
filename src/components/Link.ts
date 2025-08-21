import { LinkProps } from '../types';
import { formatAttributes, formatStyleProps, renderChildren } from '../utils';

export class Link {
  constructor(public props: LinkProps) {}

  render(): string {
    const { children, href, target = '_blank', ...styleProps } = this.props;
    const styles = formatStyleProps(styleProps);
    
    // Default link styles
    if (!styles.color) styles.color = '#007bff';
    if (!styles['text-decoration']) styles['text-decoration'] = 'underline';
    
    const attributes = formatAttributes(styles);
    
    const linkAttributes = [
      `href="${href}"`,
      target ? `target="${target}"` : '',
      attributes || ''
    ].filter(Boolean).join(' ');
    
    return `<mj-text>
<a ${linkAttributes}>${renderChildren(children)}</a>
</mj-text>`;
  }
}