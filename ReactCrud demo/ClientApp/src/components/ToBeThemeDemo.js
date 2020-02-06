"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nfont-size: 1em;\nmargin: 1em;\npadding: 0.25em 1em;\nborder-radius:3px;\n\n/*color the border and text with teme.main */\ncolor: $(props) => props.theme.main;\nborder : 2px solid $(props => props.theme.main);\n"], ["\nfont-size: 1em;\nmargin: 1em;\npadding: 0.25em 1em;\nborder-radius:3px;\n\n/*color the border and text with teme.main */\ncolor: $(props) => props.theme.main;\nborder : 2px solid $(props => props.theme.main);\n"])));
var Wrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject([" \ndisplay: flex:\npadding: 1em;\n"], [" \ndisplay: flex:\npadding: 1em;\n"])));
var ToBeThemeDemo = /** @class */ (function (_super) {
    __extends(ToBeThemeDemo, _super);
    function ToBeThemeDemo(props) {
        return _super.call(this, props) || this;
    }
    return ToBeThemeDemo;
}(React.Component));
exports.ToBeThemeDemo = ToBeThemeDemo;
var templateObject_1, templateObject_2;
//# sourceMappingURL=ToBeThemeDemo.js.map