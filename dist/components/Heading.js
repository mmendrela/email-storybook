"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heading = void 0;
const utils_1 = require("../utils");
class Heading {
    constructor(props) {
        this.props = props;
    }
    render() {
        const { children, as = 'h1', ...styleProps } = this.props;
        const styles = (0, utils_1.formatStyleProps)(styleProps);
        // MJML doesn't have heading components, so we use mj-text with appropriate styling
        const headingSizes = {
            h1: '32px',
            h2: '24px',
            h3: '20px',
            h4: '16px',
            h5: '14px',
            h6: '12px'
        };
        if (!styles['font-size']) {
            styles['font-size'] = headingSizes[as];
        }
        if (!styles['font-weight']) {
            styles['font-weight'] = 'bold';
        }
        const attributes = (0, utils_1.formatAttributes)(styles);
        return `<mj-text${attributes ? ' ' + attributes : ''}>${(0, utils_1.renderChildren)(children)}</mj-text>`;
    }
}
exports.Heading = Heading;
