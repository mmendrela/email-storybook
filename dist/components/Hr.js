"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hr = void 0;
const utils_1 = require("../utils");
class Hr {
    constructor(props) {
        this.props = props;
    }
    render() {
        const { borderColor, ...styleProps } = this.props;
        const styles = (0, utils_1.formatStyleProps)(styleProps);
        if (borderColor) {
            styles['border-color'] = borderColor;
        }
        const attributes = (0, utils_1.formatAttributes)(styles);
        return `<mj-divider${attributes ? ' ' + attributes : ''} />`;
    }
}
exports.Hr = Hr;
