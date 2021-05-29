import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="">COVID-19 DashBoard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto menu">
                    <Link className="nav-link" to="/india">India</Link>
                    <Link className="nav-link" to="/world">World</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
