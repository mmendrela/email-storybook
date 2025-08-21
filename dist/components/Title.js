"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
const utils_1 = require("../utils");
class Title {
    constructor(props) {
        this.props = props;
    }
    render() {
        const { children } = this.props;
        return `<mj-title>${(0, utils_1.renderChildren)(children)}</mj-title>`;
    }
}
exports.Title = Title;
