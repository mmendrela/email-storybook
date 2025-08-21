"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Head = void 0;
const utils_1 = require("../utils");
class Head {
    constructor(props) {
        this.props = props;
    }
    render() {
        const { children } = this.props;
        return `<mj-head>
  ${(0, utils_1.renderChildren)(children)}
</mj-head>`;
    }
}
exports.Head = Head;
