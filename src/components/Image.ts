import { ImageProps } from '../types';
import { formatAttributes, formatStyleProps } from '../utils';

export class Image {
  constructor(public props: ImageProps) {}

  render(): string {
    const { src, alt, title, ...styleProps } = this.props;
    const styles = formatStyleProps(styleProps);
    const attributes: Record<string, string> = { ...styles, src };
    
    if (alt) attributes.alt = alt;
    if (title) attributes.title = title;
    
    const attributeString = formatAttributes(attributes);
    
    return `<mj-image${attributeString ? ' ' + attributeString : ''} />`;
  }
}