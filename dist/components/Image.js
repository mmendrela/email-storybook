"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const utils_1 = require("../utils");
class Image {
    constructor(props) {
        this.props = props;
    }
    render() {
        const { src, alt, title, ...styleProps } = this.props;
        const styles = (0, utils_1.formatStyleProps)(styleProps);
        const attributes = { ...styles, src };
        if (alt)
            attributes.alt = alt;
        if (title)
            attributes.title = title;
        const attributeString = (0, utils_1.formatAttributes)(attributes);
        return `<mj-image${attributeString ? ' ' + attributeString : ''} />`;
    }
}
exports.Image = Image;
