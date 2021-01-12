import { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import linkedin from './linkedin.png';

export default class Header extends Component {



    render() {

        return (
            <div style={{marginBottom: "20px", color: "white", width: "40%", margin: "10px auto 20px auto"}}>
                
                    <Navbar bg="dark" variant="dark" fixed="top">
                        <Navbar.Brand style={{marginLeft: "30%"}} href="#home">Allison's Portfolio</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link  href="#home">Home</Nav.Link>
                                <Nav.Link href="#Projects">Projects</Nav.Link>
                                <Nav.Link href="#Skills">Skills</Nav.Link>
                                <Nav.Link href="#Contact">Contact</Nav.Link>
                                <Nav.Link style={{marginLeft: "30%"}} href="https://www.linkedin.com/in/allison-arnaud/">
                                    <img
                                        src={linkedin}
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-top"
                                        alt="Linkedin logo"
                                    />
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                
                
                <div style={{fontSize: "18px", textAlign: "center", marginTop: "100px"}}>I am an aspiring software developer lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
            </div>
        )
    }

    
}