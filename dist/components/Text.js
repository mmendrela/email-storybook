"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const utils_1 = require("../utils");
class Text {
    constructor(props) {
        this.props = props;
    }
    render() {
        const { children, ...styleProps } = this.props;
        const styles = (0, utils_1.formatStyleProps)(styleProps);
        const attributes = (0, utils_1.formatAttributes)(styles);
        return `<mj-text${attributes ? ' ' + attributes : ''}>${(0, utils_1.renderChildren)(children)}</mj-text>`;
    }
}
exports.Text = Text;
