"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Row = void 0;
const utils_1 = require("../utils");
class Row {
    constructor(props) {
        this.props = props;
    }
    render() {
        const { children, ...styleProps } = this.props;
        const styles = (0, utils_1.formatStyleProps)(styleProps);
        const attributes = (0, utils_1.formatAttributes)(styles);
        // Row is essentially the same as Section in MJML
        return `<mj-section${attributes ? ' ' + attributes : ''}>
  ${(0, utils_1.renderChildren)(children)}
</mj-section>`;
    }
}
exports.Row = Row;
