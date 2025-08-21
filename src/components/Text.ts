import { TextProps } from '../types';
import { formatAttributes, formatStyleProps, renderChildren } from '../utils';

export class Text {
  constructor(public props: TextProps) {}

  render(): string {
    const { children, ...styleProps } = this.props;
    const styles = formatStyleProps(styleProps);
    const attributes = formatAttributes(styles);
    
    return `<mj-text${attributes ? ' ' + attributes : ''}>${renderChildren(children)}</mj-text>`;
  }
}