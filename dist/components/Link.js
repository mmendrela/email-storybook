"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const utils_1 = require("../utils");
class Link {
    constructor(props) {
        this.props = props;
    }
    render() {
        const { children, href, target = '_blank', ...styleProps } = this.props;
        const styles = (0, utils_1.formatStyleProps)(styleProps);
        // Default link styles
        if (!styles.color)
            styles.color = '#007bff';
        if (!styles['text-decoration'])
            styles['text-decoration'] = 'underline';
        const attributes = (0, utils_1.formatAttributes)(styles);
        const linkAttributes = [
            `href="${href}"`,
            target ? `target="${target}"` : '',
            attributes || ''
        ].filter(Boolean).join(' ');
        return `<mj-text>
<a ${linkAttributes}>${(0, utils_1.renderChildren)(children)}</a>
</mj-text>`;
    }
}
exports.Link = Link;
