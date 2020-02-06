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
var react_router_dom_1 = require("react-router-dom");
// component class inherits abstract class React.Component and implementing the interface
var FetchEmployee = /** @class */ (function (_super) {
    __extends(FetchEmployee, _super);
    // this will be called when the Page loads
    function FetchEmployee(props) {
        var _this = 
        //caling the base class constructor
        _super.call(this, props) || this;
        // initializing the properties of interface
        _this.state = { empList: [], loading: true };
        // calling api with the fetch method
        fetch('Employees')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ empList: data, loading: false });
        });
        // defining handlers for button click 
        _this.handleDelete = _this.handleDelete.bind(_this);
        _this.handleEdit = _this.handleEdit.bind(_this);
        return _this;
    }
    // render method will render our HTML elemets onto the DOM 
    FetchEmployee.prototype.render = function () {
        // check if loading is done then render HTML
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading ... "))
            : this.renderEmployeeTable(this.state.empList);
        return React.createElement("div", null,
            React.createElement("h1", null, " Employee Data "),
            React.createElement("p", null, " Demo for fetching employee data from server "),
            React.createElement("p", null,
                React.createElement(react_router_dom_1.Link, { to: "/addemployee" }, " Create New")),
            contents);
    };
    // method to detlete on button click
    FetchEmployee.prototype.handleDelete = function (id) {
        var _this = this;
        // confirmation box to delete
        if (!window.confirm("Do you want to delete the employee with Id:" + id))
            return;
        else {
            fetch('Employees/' + id, {
                method: 'delete'
            }).then(function (data) {
                _this.setState({
                    empList: _this.state.empList.filter(function (rec) {
                        return (rec.employeeId != id);
                    })
                });
            });
        }
    };
    // invoke an edit request on the employee record by passing the employee id in the URL parameter and redirects it to the AddEmployee component
    FetchEmployee.prototype.handleEdit = function (id) {
        this.props.history.push("/employee/edit/" + id);
    };
    FetchEmployee.prototype.renderEmployeeTable = function (empList) {
        var _this = this;
        return React.createElement("table", { className: 'table' },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null),
                    React.createElement("th", null, "EmployeeId"),
                    React.createElement("th", null, "Name"),
                    React.createElement("th", null, "Gender"),
                    React.createElement("th", null, "Department"),
                    React.createElement("th", null, "City"))),
            React.createElement("tbody", null, empList.map(function (emp) {
                return React.createElement("tr", { key: emp.employeeId },
                    React.createElement("td", null),
                    React.createElement("td", null, emp.employeeId),
                    React.createElement("td", null, emp.name),
                    React.createElement("td", null, emp.gender),
                    React.createElement("td", null, emp.department),
                    React.createElement("td", null, emp.city),
                    React.createElement("td", null,
                        React.createElement("a", { className: "", onClick: function (id) { return _this.handleEdit(emp.employeeId); } }, "Edit")),
                    React.createElement("td", null,
                        React.createElement("a", { className: "", onClick: function (id) { return _this.handleDelete(emp.employeeId); } }, "Delete")));
            })));
    };
    return FetchEmployee;
}(React.Component));
exports.FetchEmployee = FetchEmployee;
var EmployeeData = /** @class */ (function () {
    function EmployeeData() {
        this.employeeId = 0;
        this.name = "";
        this.gender = "";
        this.city = "";
        this.department = "";
    }
    return EmployeeData;
}());
exports.EmployeeData = EmployeeData;
//# sourceMappingURL=FetchEmployee.js.map