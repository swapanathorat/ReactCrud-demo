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
// importing Employee Data class from FetchEmployee class
var FetchEmployee_1 = require("./FetchEmployee");
var AddEmployee = /** @class */ (function (_super) {
    __extends(AddEmployee, _super);
    function AddEmployee(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { title: "", loading: true, cityList: [], empData: new FetchEmployee_1.EmployeeData };
        // fetching the cities from the SQL table
        fetch('City')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ cityList: data });
        });
        // reading the URL parameter empid to check if need to edit or Add
        var empid = _this.props.match.params["empid"];
        // this will set state for edit employee
        if (empid > 0) {
            fetch('Employees/' + empid)
                .then(function (response) { return response.json(); })
                .then(function (data) { return _this.setState({ title: "Edit", loading: false, empData: data }); });
        }
        else {
            // this will set state for Add employee
            _this.state = { title: "Create", loading: false, cityList: [], empData: new FetchEmployee_1.EmployeeData };
        }
        //this biding is necessary to make "this" work in callback
        _this.handleSave = _this.handleSave.bind(_this);
        _this.handleCancel = _this.handleCancel.bind(_this);
        return _this;
    }
    AddEmployee.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderCreateForm(this.state.cityList);
        return React.createElement("div", null,
            React.createElement("h1", null, this.state.title),
            React.createElement("h3", null, " Employee"),
            React.createElement("hr", null),
            contents);
    };
    //this will handle the submit form event. 
    AddEmployee.prototype.handleSave = function (event) {
        var _this = this;
        event.preventDefault();
        var data = new FormData(event.target);
        //for (var [key, value] of data.getAll()) {
        //    console.log(key, value);
        //PUT request for Edit employee
        if (this.state.empData.employeeId) {
            fetch('Employees', {
                method: 'PUT',
                body: data,
            }).then(function (response) { return response.json(); })
                .then(function (responseJson) {
                _this.props.history.push('/fetchemployee');
            });
        }
        //POST request for Add employee
        else {
            fetch('Employees', {
                method: 'POST',
                body: data,
            }).then(function (response) { return response.json(); })
                .then(function (responseJson) {
                _this.props.history.push('/fetchemployee');
            });
        }
    };
    //this will handle cancel button click event
    AddEmployee.prototype.handleCancel = function (e) {
        e.preventDefault();
        this.props.history.push("/fetchemployee");
    };
    // returns the HTML form to the render() method
    AddEmployee.prototype.renderCreateForm = function (cityList) {
        return (React.createElement("form", { onSubmit: this.handleSave },
            React.createElement("div", { className: "form-group row" },
                React.createElement("input", { type: "hidden", name: "employeeId", value: this.state.empData.employeeId })),
            React.createElement("div", { className: "form-group row" },
                React.createElement("label", { className: " control-label col-md-12", htmlFor: "Name" }, "Name"),
                React.createElement("div", { className: "col-md-4" },
                    React.createElement("input", { className: "form-control", type: "text", name: "name", defaultValue: this.state.empData.name, required: true }))),
            React.createElement("div", { className: "form-group row" },
                React.createElement("label", { className: "control-label col-md-12", htmlFor: "Gender" }, "Gender"),
                React.createElement("div", { className: "col-md-4" },
                    React.createElement("select", { className: "form-control", "data-val": "true", name: "gender", defaultValue: this.state.empData.gender, required: true },
                        React.createElement("option", { value: "" }, "-- Select Gender --"),
                        React.createElement("option", { value: "Male" }, "Male"),
                        React.createElement("option", { value: "Female" }, "Female")))),
            React.createElement("div", { className: "form-group row" },
                React.createElement("label", { className: "control-label col-md-12", htmlFor: "Department" }, "Department"),
                React.createElement("div", { className: "col-md-4" },
                    React.createElement("input", { className: "form-control", type: "text", name: "Department", defaultValue: this.state.empData.department, required: true }))),
            React.createElement("div", { className: "form-group row" },
                React.createElement("label", { className: "control-label col-md-12", htmlFor: "City" }, "City"),
                React.createElement("div", { className: "col-md-4" },
                    React.createElement("select", { className: "form-control", "data-val": "true", name: "city", defaultValue: this.state.empData.city, required: true },
                        React.createElement("option", { value: "" }, "-- Select City --"),
                        cityList.map(function (city) {
                            return React.createElement("option", { key: city.cityId, value: city.cityName }, city.cityName);
                        })))),
            React.createElement("div", { className: "form-group" },
                React.createElement("button", { type: "submit", className: "btn btn-default" }, "Save"),
                React.createElement("button", { className: "btn", onClick: this.handleCancel }, "Cancel"))));
    };
    return AddEmployee;
}(React.Component));
exports.AddEmployee = AddEmployee;
//# sourceMappingURL=AddEmployee.js.map