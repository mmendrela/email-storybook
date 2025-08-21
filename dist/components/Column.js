"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = void 0;
const utils_1 = require("../utils");
class Column {
    constructor(props) {
        this.props = props;
    }
    render() {
        const { children, ...styleProps } = this.props;
        const styles = (0, utils_1.formatStyleProps)(styleProps);
        const attributes = (0, utils_1.formatAttributes)(styles);
        return `<mj-column${attributes ? ' ' + attributes : ''}>
  ${(0, utils_1.renderChildren)(children)}
</mj-column>`;
    }
}
exports.Column = Column;
