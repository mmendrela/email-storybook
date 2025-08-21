import { TitleProps } from '../types';
import { renderChildren } from '../utils';

export class Title {
  constructor(public props: TitleProps) {}

  render(): string {
    const { children } = this.props;
    
    return `<mj-title>${renderChildren(children)}</mj-title>`;
  }
}