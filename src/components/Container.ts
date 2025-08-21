import { ContainerProps } from '../types';
import { formatAttributes, formatStyleProps, renderChildren } from '../utils';

export class Container {
  constructor(public props: ContainerProps) {}

  render(): string {
    const { children, maxWidth, ...styleProps } = this.props;
    const styles = formatStyleProps(styleProps);
    
    if (maxWidth) {
      styles['max-width'] = maxWidth;
    }
    
    const attributes = formatAttributes(styles);
    
    return `<mj-wrapper${attributes ? ' ' + attributes : ''}>
  ${renderChildren(children)}
</mj-wrapper>`;
  }
}