import { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import linkedin from './linkedin.png';

import github from './github.png';

export default class Header extends Component {



    render() {

        return (
            <div style={{color: "white", margin: "10px auto 20px auto"}}>
                
                    <Navbar bg="dark" variant="dark" fixed="top">
                        <Navbar.Brand style={{marginLeft: "26.5%", color:"#ffce00", fontFamily: "'Oswald', sans-serif", fontSize: "30px",padding: "0"}} href="#home">ALLISON B ARNAUD</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav style={{marginLeft: "9%", fontFamily: "'Oswald', sans-serif"}} className="mr-auto">
                                <Nav.Link  href="#home">HOME</Nav.Link>
                                <Nav.Link href="#Projects">PROJECTS</Nav.Link>
                                <Nav.Link href="#Skills">SKILLS</Nav.Link>
                                <Nav.Link href="#Contact">CONTACT</Nav.Link>
                                <Nav.Link style={{marginLeft: "30%"}} href="https://www.linkedin.com/in/allison-arnaud/">
                                    <img
                                        src={linkedin}
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-top"
                                        alt="Linkedin logo"
                                    />
                                </Nav.Link>
                                <Nav.Link href="https://github.com/allisonbarnaud">
                                    <img
                                        src={github}
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-top"
                                        alt="Linkedin logo"
                                    />
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                
                
                <div style={{fontSize: "18px", width: "47%", margin: "80px auto 0 27%", fontFamily: "'oxygen', sans-serif"}}>Welcome to my webpage! <br></br><br></br> I am an enthusiastic software developer, former electrical engineer and Future Technologies enthusiast. I believe in using technology to create a brighter, more sustainable future for the planet. <br></br><br></br> -Allison </div> 
            </div>
        )
    }

    
}