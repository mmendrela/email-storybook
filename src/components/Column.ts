import { ColumnProps } from '../types';
import { formatAttributes, formatStyleProps, renderChildren } from '../utils';

export class Column {
  constructor(public props: ColumnProps) {}

  render(): string {
    const { children, ...styleProps } = this.props;
    const styles = formatStyleProps(styleProps);
    const attributes = formatAttributes(styles);
    
    return `<mj-column${attributes ? ' ' + attributes : ''}>
  ${renderChildren(children)}
</mj-column>`;
  }
}