import { ButtonProps } from '../types';
import { formatAttributes, formatStyleProps, renderChildren } from '../utils';

export class Button {
  constructor(public props: ButtonProps) {}

  render(): string {
    const { children, href, target, ...styleProps } = this.props;
    const styles = formatStyleProps(styleProps);
    const attributes: Record<string, string> = { ...styles };
    
    if (href) attributes.href = href;
    if (target) attributes.target = target;
    
    const attributeString = formatAttributes(attributes);
    
    return `<mj-button${attributeString ? ' ' + attributeString : ''}>${renderChildren(children)}</mj-button>`;
  }
}