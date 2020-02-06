import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchEmployee } from './components/FetchEmployee';
import { AddEmployee } from './components/AddEmployee';
import { authProvider } from './authProvider';
import { AzureAD, AuthenticationState } from 'react-aad-msal';
import './custom.css'
import { ThemeProvider } from 'styled-components';
import { dayTheme, nightTheme } from './Themes';
import { GlobalStyles } from './globalStyles';
import Sky from './styledComponents/sky';



export default class App extends Component {
    static displayName = App.name;
    constructor(props) {
        super(props);

        this.state = {
            isDay: true,
            theme: dayTheme,
            title:"Click to switch to night"
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // Toggle day / night on click
        const isDay = !this.state.isDay;

        this.setState({
            isDay: isDay,
            theme: isDay ? dayTheme : nightTheme,
            title: isDay ? 'Now click the Sun' : 'Now click the Moon'
        });
    }

    render() {
        return (
            <AzureAD provider={authProvider} forceLogin={true}>
                {
                    ({ authenticationState, accountInfo }) => {
                        return (
                            <Layout>
                                {
                                    authenticationState === AuthenticationState.Authenticated &&
                                    <React.Fragment>

                                        <ThemeProvider theme={this.state.theme}>
                                            <Sky>
                                                <GlobalStyles />
                                                <button onClick = {this.handleClick}>Toggle theme</button>
                                                
                                                <Route exact path='/' render={(props) => <Home {...props} user={accountInfo} />} />
                                                <Route path='/fetchemployee' component={FetchEmployee} />
                                                <Route path='/addemployee' component={AddEmployee} />
                                                <Route path='/employee/edit/:empid' component={AddEmployee} />
                                                <footer>
                                                </footer>
                                            </Sky>
                                        </ThemeProvider>
                                    </React.Fragment>
                                }
                            </Layout>
                        );
                    }
                }
            </AzureAD>
        );
    }
}
