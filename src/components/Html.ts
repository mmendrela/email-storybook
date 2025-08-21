import { HtmlProps } from '../types';
import { renderChildren } from '../utils';

export class Html {
  constructor(public props: HtmlProps) {}

  render(): string {
    const { children, lang = 'en' } = this.props;
    
    return `<mjml lang="${lang}">
  ${renderChildren(children)}
</mjml>`;
  }
}