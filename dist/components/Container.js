"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const utils_1 = require("../utils");
class Container {
    constructor(props) {
        this.props = props;
    }
    render() {
        const { children, maxWidth, ...styleProps } = this.props;
        const styles = (0, utils_1.formatStyleProps)(styleProps);
        if (maxWidth) {
            styles['max-width'] = maxWidth;
        }
        const attributes = (0, utils_1.formatAttributes)(styles);
        return `<mj-wrapper${attributes ? ' ' + attributes : ''}>
  ${(0, utils_1.renderChildren)(children)}
</mj-wrapper>`;
    }
}
exports.Container = Container;
