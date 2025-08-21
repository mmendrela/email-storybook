"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Html = void 0;
const utils_1 = require("../utils");
class Html {
    constructor(props) {
        this.props = props;
    }
    render() {
        const { children, lang = 'en' } = this.props;
        return `<mjml lang="${lang}">
  ${(0, utils_1.renderChildren)(children)}
</mjml>`;
    }
}
exports.Html = Html;
