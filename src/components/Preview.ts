import { PreviewProps } from '../types';
import { renderChildren } from '../utils';

export class Preview {
  constructor(public props: PreviewProps) {}

  render(): string {
    const { children } = this.props;
    
    return `<mj-preview>${renderChildren(children)}</mj-preview>`;
  }
}