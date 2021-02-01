import { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import linkedin from './linkedin.png';

import ScrollIntoView from 'react-scroll-into-view'

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
                                <ScrollIntoView selector="#home" smooth={true} alignTop={true}>
                                    <Nav.Link>HOME</Nav.Link>
                                </ScrollIntoView>

                                
                                <ScrollIntoView selector="#projects" smooth={true} alignToTop={true}>
                                    <Nav.Link>PROJECTS</Nav.Link>
                                </ScrollIntoView>
                                <ScrollIntoView selector="#skills" smooth={true} alignToTop={true}>
                                <Nav.Link>SKILLS</Nav.Link>
                                </ScrollIntoView>
                                <ScrollIntoView selector="#contact" smooth={true} alignToTop={true}>
                                <Nav.Link>CONTACT</Nav.Link>
                                </ScrollIntoView>
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
                {/* anchor point for home button scrolling */}
                <div id="home">easter egg</div> 

                <div style={{fontSize: "18px", width: "47%", margin: "35px auto 0 27%", fontFamily: "'oxygen', sans-serif", textAlign:"justify"}}>Welcome to my webpage! <br></br><br></br> I am French-Indonesian, enthusiastic software developer, former electrical engineer and Future Technologies enthusiast. I believe that technology can create a better, more sustainable future for the planet. <br/> <br/> In my personal time I enjoy exercising, cooking, videogames, 3D printing and all things pop culture (ask me about my pokemon card collection). <br></br><br></br> -Allison </div> 
            </div>
        )
    }

    
}