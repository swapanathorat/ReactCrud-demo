import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

// importing Employee Data class from FetchEmployee class
import { EmployeeData } from './FetchEmployee';

//interface with properties
interface AddEmployeeDataState {
    title: string;
    loading: boolean;
    cityList: Array<any>;
    empData: EmployeeData;
}

export class AddEmployee extends React.Component<RouteComponentProps<{}>, AddEmployeeDataState> {
    constructor(props) {
        super(props);

        this.state = { title: "", loading: true, cityList: [], empData: new EmployeeData };

        // fetching the cities from the SQL table
        fetch('City')
            .then(response => response.json() as Promise<Array<any>>)
            .then(data => {
                this.setState({ cityList: data });
            });

        // reading the URL parameter empid to check if need to edit or Add
        var empid = this.props.match.params["empid"];

        // this will set state for edit employee

        if (empid > 0) {
            fetch('Employees/' + empid)
                .then(response => response.json() as Promise<EmployeeData>)
                .then(data => this.setState({ title: "Edit", loading: false, empData: data }));
        }
        else {
            // this will set state for Add employee
            this.state = { title: "Create", loading: false, cityList: [], empData: new EmployeeData };
        }

        //this biding is necessary to make "this" work in callback

        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm(this.state.cityList);

        return <div>
            <h1>{this.state.title}</h1>
            <h3> Employee</h3>
            <hr />
            {contents}
        </div>;
    }

    //this will handle the submit form event. 
    private handleSave(event) {
        event.preventDefault();

        var data = new FormData(event.target);
       
        //for (var [key, value] of data.getAll()) {
        //    console.log(key, value);

        //PUT request for Edit employee
        if (this.state.empData.employeeId) {
            fetch('Employees', {
                method: 'PUT',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push('/fetchemployee');
                })
        }

        //POST request for Add employee
        else {
            fetch('Employees', {
                method: 'POST',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push('/fetchemployee');
                })
        }

    }

    //this will handle cancel button click event
    private handleCancel(e) {
        e.preventDefault();
        this.props.history.push("/fetchemployee");
    }

    // returns the HTML form to the render() method
    private renderCreateForm(cityList: Array<any>) {
        return (
            <form onSubmit={this.handleSave} >
                <div className="form-group row">
                    <input type="hidden" name="employeeId" value={this.state.empData.employeeId} />
                </div>
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="Name">Name</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="name" defaultValue={this.state.empData.name} required />
                    </div>
                </div >
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="Gender">Gender</label>
                    <div className="col-md-4">
                        <select className="form-control" data-val="true" name="gender" defaultValue={this.state.empData.gender} required>
                            <option value="">-- Select Gender --</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div >
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="Department" >Department</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Department" defaultValue={this.state.empData.department} required />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="City">City</label>
                    <div className="col-md-4">
                        <select className="form-control" data-val="true" name="city" defaultValue={this.state.empData.city} required>
                            <option value="">-- Select City --</option>
                            {cityList.map(city =>
                                <option key={city.cityId} value={city.cityName}>{city.cityName}</option>
                            )}
                        </select>
                    </div>
                </div >
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Save</button>
                    <button className="btn" onClick={this.handleCancel}>Cancel</button>
                </div > 

            </form>
        )
    }
}