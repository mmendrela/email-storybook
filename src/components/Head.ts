import { HeadProps } from '../types';
import { renderChildren } from '../utils';

export class Head {
  constructor(public props: HeadProps) {}

  render(): string {
    const { children } = this.props;
    
    return `<mj-head>
  ${renderChildren(children)}
</mj-head>`;
  }
}