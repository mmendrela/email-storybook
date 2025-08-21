import { MarkdownProps } from '../types';
import { formatAttributes, formatStyleProps, renderChildren } from '../utils';

export class Markdown {
  constructor(public props: MarkdownProps) {}

  render(): string {
    const { children, markdownCustomStyles = {}, markdownContainerStyles = {}, ...styleProps } = this.props;
    
    const styles = formatStyleProps(styleProps);
    Object.assign(styles, markdownContainerStyles);
    
    const attributes = formatAttributes(styles);
    
    // Simple markdown parsing (basic implementation)
    let markdownText = renderChildren(children);
    
    // Convert markdown to HTML
    markdownText = markdownText
      // Headers
      .replace(/^### (.*$)/gim, '<h3 style="font-size: 18px; font-weight: bold; margin: 16px 0 8px 0;">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 style="font-size: 20px; font-weight: bold; margin: 20px 0 10px 0;">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 style="font-size: 24px; font-weight: bold; margin: 24px 0 12px 0;">$1</h1>')
      
      // Bold and italic
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      
      // Links
      .replace(/\[([^\]]*)\]\(([^\)]*)\)/gim, '<a href="$2" style="color: #007bff; text-decoration: underline;">$1</a>')
      
      // Code inline
      .replace(/`([^`]*)`/gim, '<code style="background-color: #f1f5f9; color: #e11d48; padding: 2px 6px; border-radius: 4px; font-family: Monaco, Consolas, monospace;">$1</code>')
      
      // Line breaks
      .replace(/\n/gim, '<br>');

    // Apply custom styles to specific elements
    Object.entries(markdownCustomStyles).forEach(([selector, styles]) => {
      const styleString = Object.entries(styles as Record<string, string>)
        .map(([prop, value]) => `${prop.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value}`)
        .join('; ');
      
      // Simple style injection (basic implementation)
      if (selector === 'h1') {
        markdownText = markdownText.replace(/<h1 style="([^"]*)">/gim, `<h1 style="$1; ${styleString}">`);
      }
      // Add more selectors as needed
    });
    
    return `<mj-text${attributes ? ' ' + attributes : ''}>${markdownText}</mj-text>`;
  }
}