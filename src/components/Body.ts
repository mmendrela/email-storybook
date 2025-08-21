import { BodyProps } from '../types';
import { formatAttributes, formatStyleProps, renderChildren } from '../utils';

export class Body {
  constructor(public props: BodyProps) {}

  render(): string {
    const { children, ...styleProps } = this.props;
    const styles = formatStyleProps(styleProps);
    const attributes = formatAttributes(styles);
    
    return `<mj-body${attributes ? ' ' + attributes : ''}>
  ${renderChildren(children)}
</mj-body>`;
  }
}