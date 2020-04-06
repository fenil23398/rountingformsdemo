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
                        <NavLink to='/home'>Home</NavLink>
                        <NavLink to='/form1'>Form1</NavLink>
                        <NavLink to='/form2'>Form2</NavLink>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
