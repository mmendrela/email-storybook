"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
const utils_1 = require("../utils");
class Section {
    constructor(props) {
        this.props = props;
    }
    render() {
        const { children, fullWidth, backgroundUrl, ...styleProps } = this.props;
        const styles = (0, utils_1.formatStyleProps)(styleProps);
        if (fullWidth) {
            styles['full-width'] = 'full-width';
        }
        if (backgroundUrl) {
            styles['background-url'] = backgroundUrl;
        }
        const attributes = (0, utils_1.formatAttributes)(styles);
        return `<mj-section${attributes ? ' ' + attributes : ''}>
  ${(0, utils_1.renderChildren)(children)}
</mj-section>`;
    }
}
exports.Section = Section;
