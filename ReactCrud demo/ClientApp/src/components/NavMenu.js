import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
//import { dayTheme } from '../Themes/dayTheme';
//import { nightTheme } from '../Themes/nightTheme';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        //this.setState = ({ collapsed: true, isDay: true, applyTheme: dayTheme, title: 'Now Click Sun' });
        this.state = {
            collapsed: true,
            //isDay: true,
            //applyTheme: dayTheme,
            //title: 'Now click the Sun'
        };

        //this.state = { isDay: true, applyTheme: dayTheme, title: 'Now click the Sun' };
    }

    //handleClick(e) {
    //    e.preventDefault();
    //    // Toggle day / night on click
    //    const isDay = !this.state.isDay;

    //    this.setState({
    //        isDay: isDay,
    //        applyTheme: isDay ? dayTheme : nightTheme,
    //        title: isDay ? 'Now click the Sun' : 'Now click the Moon'
    //    });
    //}

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">ReactCrud_demo</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/fetchemployee">Fetch Employee</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/addemployee">Add Employee</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
