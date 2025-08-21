import { StyleProps } from './types';

export function formatAttributes(props: Record<string, any>): string {
  return Object.entries(props)
    .filter(([_, value]) => value !== undefined)
    .map(([key, value]) => `${kebabCase(key)}="${value}"`)
    .join(' ');
}

export function kebabCase(str: string): string {
  return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
}

export function formatStyleProps(styles: any = {}): Record<string, string> {
  const mjmlStyles: Record<string, string> = {};
  
  if (styles.backgroundColor) mjmlStyles['background-color'] = styles.backgroundColor;
  if (styles.border) mjmlStyles.border = styles.border;
  if (styles.borderRadius) mjmlStyles['border-radius'] = styles.borderRadius;
  if (styles.color) mjmlStyles.color = styles.color;
  if (styles.fontFamily) mjmlStyles['font-family'] = styles.fontFamily;
  if (styles.fontSize) mjmlStyles['font-size'] = styles.fontSize;
  if (styles.fontWeight) mjmlStyles['font-weight'] = styles.fontWeight;
  if (styles.fontStyle) mjmlStyles['font-style'] = styles.fontStyle;
  if (styles.height) mjmlStyles.height = styles.height;
  if (styles.lineHeight) mjmlStyles['line-height'] = styles.lineHeight;
  if (styles.margin) mjmlStyles.margin = styles.margin;
  if (styles.padding) mjmlStyles.padding = styles.padding;
  if (styles.textAlign) mjmlStyles['text-align'] = styles.textAlign;
  if (styles.width) mjmlStyles.width = styles.width;
  
  return mjmlStyles;
}

export function renderChildren(children: any): string {
  if (!children) return '';
  
  if (typeof children === 'string') {
    return children;
  }
  
  if (Array.isArray(children)) {
    return children.map(child => 
      typeof child === 'string' ? child : child.render?.() || ''
    ).join('');
  }
  
  return children.render?.() || String(children);
}