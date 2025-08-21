"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const utils_1 = require("../utils");
class Button {
    constructor(props) {
        this.props = props;
    }
    render() {
        const { children, href, target, ...styleProps } = this.props;
        const styles = (0, utils_1.formatStyleProps)(styleProps);
        const attributes = { ...styles };
        if (href)
            attributes.href = href;
        if (target)
            attributes.target = target;
        const attributeString = (0, utils_1.formatAttributes)(attributes);
        return `<mj-button${attributeString ? ' ' + attributeString : ''}>${(0, utils_1.renderChildren)(children)}</mj-button>`;
    }
}
exports.Button = Button;
