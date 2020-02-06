import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { ThemeProvider } from 'styled-components';
import Sky from '../styledComponents/sky';
import Title from '../styledComponents/tittle'
import { dayTheme } from '../Themes/dayTheme';
import { nightTheme } from '../Themes/nightTheme';

//const token = await authProvider.getIdToken();
//const idToken = token.idToken.rawIdToken;

//const request = async url => {
//    const token = await authProvider.getAccessToken();

//interface
interface SettingsState {

    //properties
    isDay: boolean,
    applyTheme: {},
    title:string
}

// component class inherits abstract class React.Component and implementing the interface
export class Settings extends React.Component<RouteComponentProps<{}>, SettingsState> {
    // this will be called when the Page loads
    constructor(props) {
        //caling the base class constructor
        super(props);

        // initializing the properties of interface
        this.state = { isDay: true, applyTheme: dayTheme, title: 'Now click the Sun' };

        // calling api with the fetch method
        //fetch('Employees')
        //    .then(response => response.json() as Promise<EmployeeData[]>)
        //    .then(data => {
        //        this.setState({ empList: data, loading: false });
        //    });

        // defining handlers for button click 
        this.handleClick = this.handleClick.bind(this);
    }

    // render method will render our HTML elemets onto the DOM 
    public render() {
        
        return  <ThemeProvider theme={this.state.applyTheme}>
            <Sky>
                <Title>{this.state.title}</Title>
                <button
                    onClick={() => this.handleClick()}>
                </button>
            </Sky>
        </ThemeProvider>
    }

    // method to detlete on button click
    private handleClick() {

        // Toggle day / night on click
        const isDay = !this.state.isDay;

        this.setState({
            isDay: isDay,
            applyTheme: isDay ? dayTheme : nightTheme,
            title: isDay ? 'Now click the Sun' : 'Now click the Moon'
        });
    }

}