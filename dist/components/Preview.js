"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = void 0;
const utils_1 = require("../utils");
class Preview {
    constructor(props) {
        this.props = props;
    }
    render() {
        const { children } = this.props;
        return `<mj-preview>${(0, utils_1.renderChildren)(children)}</mj-preview>`;
    }
}
exports.Preview = Preview;
