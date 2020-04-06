import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Demo</Navbar.Brand>
                    <Nav className="mr-auto">
                        <NavLink to='/home' className="nav-link">Home </NavLink>&nbsp;
                        <NavLink to='/form1' className="nav-link">Form1 </NavLink>&nbsp;
                        <NavLink to='/form2' className="nav-link">Form2</NavLink> &nbsp;
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
