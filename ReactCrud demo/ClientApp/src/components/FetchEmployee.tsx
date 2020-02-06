import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

//const token = await authProvider.getIdToken();
//const idToken = token.idToken.rawIdToken;

//const request = async url => {
//    const token = await authProvider.getAccessToken();

//interface
interface FetchEmployeeDataState {

    //properties
    empList: EmployeeData[];
    loading: boolean;
}

// component class inherits abstract class React.Component and implementing the interface
export class FetchEmployee extends React.Component<RouteComponentProps<{}>, FetchEmployeeDataState> {
    // this will be called when the Page loads
    constructor(props) {
        //caling the base class constructor
        super(props);

        // initializing the properties of interface
        this.state = { empList: [], loading: true };

        // calling api with the fetch method
        fetch('Employees')
            .then(response => response.json() as Promise<EmployeeData[]>)
            .then(data => {
                this.setState({ empList: data, loading: false });
            });

        // defining handlers for button click 
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    // render method will render our HTML elemets onto the DOM 
    public render() {
        // check if loading is done then render HTML
        let contents = this.state.loading
            ? <p><em>Loading ... </em></p>
            : this.renderEmployeeTable(this.state.empList);

        return <div>
            <h1> Employee Data </h1>
            <p> Demo for fetching employee data from server </p>
            <p>
                <Link to="/addemployee"> Create New</Link>
            </p>
            {contents}
        </div>;
    }

    // method to detlete on button click
    private handleDelete(id: number) {

        // confirmation box to delete
        if (!window.confirm("Do you want to delete the employee with Id:" + id))
            return;
        else {
            fetch('Employees/' + id, {
                method: 'delete'
            }).then(data => {
                this.setState(
                    {
                        empList: this.state.empList.filter((rec) => {
                            return (rec.employeeId != id);
                        })
                    });
            });
        }
    }

    // invoke an edit request on the employee record by passing the employee id in the URL parameter and redirects it to the AddEmployee component
    private handleEdit(id: number) {
        this.props.history.push("/employee/edit/" + id); 
    }

    private renderEmployeeTable(empList: EmployeeData[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th></th>
                    <th>EmployeeId</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {empList.map(emp =>
                    <tr key={emp.employeeId}>
                        <td></td>
                        <td>{emp.employeeId}</td>
                        <td>{emp.name}</td>
                        <td>{emp.gender}</td>
                        <td>{emp.department}</td>
                        <td>{emp.city}</td>
                        <td>
                            <a className="" onClick={(id) => this.handleEdit(emp.employeeId)}>Edit</a>
                        </td>
                        <td>
                            <a className="" onClick={(id) => this.handleDelete(emp.employeeId)}>Delete</a>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>;

    }
}

export class EmployeeData {
    employeeId: number = 0;
    name: string = "";
    gender: string = "";
    city: string = "";
    department: string = "";
}