import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import {IconFacebook, IconTwitter, IconInstagram} from '../../containers/Icons';

const CustomNavbar = () => {
    return(
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Navbar.Brand href="/">At Altitude</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/#about">About</Nav.Link>
                    <Nav.Link href="/#coaching">Coaching</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav>
                
                <Nav className="ml-auto">
                    <Nav.Link href="#home"><IconFacebook/></Nav.Link>
                    <Nav.Link href="#features"><IconTwitter/></Nav.Link>
                    <Nav.Link href="#pricing"><IconInstagram/></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

export default CustomNavbar;