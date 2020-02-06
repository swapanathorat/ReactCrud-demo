"use strict";
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
var sky_1 = require("../styledComponents/sky");
var tittle_1 = require("../styledComponents/tittle");
var dayTheme_1 = require("../Themes/dayTheme");
var nightTheme_1 = require("../Themes/nightTheme");
// component class inherits abstract class React.Component and implementing the interface
var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    // this will be called when the Page loads
    function Settings(props) {
        var _this = 
        //caling the base class constructor
        _super.call(this, props) || this;
        // initializing the properties of interface
        _this.state = { isDay: true, applyTheme: dayTheme_1.dayTheme, title: 'Now click the Sun' };
        // calling api with the fetch method
        //fetch('Employees')
        //    .then(response => response.json() as Promise<EmployeeData[]>)
        //    .then(data => {
        //        this.setState({ empList: data, loading: false });
        //    });
        // defining handlers for button click 
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    // render method will render our HTML elemets onto the DOM 
    Settings.prototype.render = function () {
        var _this = this;
        return React.createElement(styled_components_1.ThemeProvider, { theme: this.state.applyTheme },
            React.createElement(sky_1.default, null,
                React.createElement(tittle_1.default, null, this.state.title),
                React.createElement("button", { onClick: function () { return _this.handleClick(); } })));
    };
    // method to detlete on button click
    Settings.prototype.handleClick = function () {
        // Toggle day / night on click
        var isDay = !this.state.isDay;
        this.setState({
            isDay: isDay,
            applyTheme: isDay ? dayTheme_1.dayTheme : nightTheme_1.nightTheme,
            title: isDay ? 'Now click the Sun' : 'Now click the Moon'
        });
    };
    return Settings;
}(React.Component));
exports.Settings = Settings;
//# sourceMappingURL=Settings.js.map