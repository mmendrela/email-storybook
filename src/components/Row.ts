import { RowProps } from '../types';
import { formatAttributes, formatStyleProps, renderChildren } from '../utils';

export class Row {
  constructor(public props: RowProps) {}

  render(): string {
    const { children, ...styleProps } = this.props;
    const styles = formatStyleProps(styleProps);
    const attributes = formatAttributes(styles);
    
    // Row is essentially the same as Section in MJML
    return `<mj-section${attributes ? ' ' + attributes : ''}>
  ${renderChildren(children)}
</mj-section>`;
  }
}