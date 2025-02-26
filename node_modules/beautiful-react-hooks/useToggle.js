"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * A quick and simple utility for toggle states
 */
var useToggle = function (initialState) {
    if (initialState === void 0) { initialState = false; }
    var _a = (0, react_1.useState)(initialState), value = _a[0], setValue = _a[1];
    var toggleState = (0, react_1.useCallback)(function () {
        setValue(!value);
    }, [value]);
    return [value, toggleState];
};
exports.default = useToggle;
