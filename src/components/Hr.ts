import { HrProps } from '../types';
import { formatAttributes, formatStyleProps } from '../utils';

export class Hr {
  constructor(public props: HrProps) {}

  render(): string {
    const { borderColor, ...styleProps } = this.props;
    const styles = formatStyleProps(styleProps);
    
    if (borderColor) {
      styles['border-color'] = borderColor;
    }
    
    const attributes = formatAttributes(styles);
    
    return `<mj-divider${attributes ? ' ' + attributes : ''} />`;
  }
}