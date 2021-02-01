import { Component } from 'react'
import './Timeline.css';

import { Accordion, Card, Button } from 'react-bootstrap';

export default class Timeline extends Component {



    render() {

        return (
            <div id='example' style={{paddingTop:"50px", paddingBottom:"100px"}}>
                <h1  className="header">TIMELINE</h1>
                <div className="container">
                    
                    {/* pre-line */}
                    
                    <div className="filler"></div>
                    
                    <Accordion  className="timelineHeader">
                        <Card>
                            <Card.Header style={{ height:"50px", padding:"0", backgroundColor:"#C5EBFE"}}>
                                <Accordion.Toggle style={{color:"black", width:"100%", height:"100%"}} as={Button} variant="link" eventKey="1">
                                    START
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body style={{backgroundColor:"#C5EBFE", textAlign:"justify"}}>I grew up in Jakarta, Indonesia and went to a French School. I had a multicultural upbringing, which has given me a broad perspective in life, and made me fluent in 4 languages.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <div className="filler"></div>
                    
                    {/* first line */}
                    <div className="filler">
                    </div>
                    <div className="item">
                    </div>
                    <div style={{borderRight:"solid 3px #C5EBFE"}}>
                    </div>
                    <div style={{borderLeft:"solid 3px #C5EBFE", color: "#C5EBFE", fontSize:"20px", textAlign:"center"}}> 1994
                    </div>
                    <div className="item">
                    </div>
                    <div className="filler">
                    </div>
                    {/* second line */}
                    <div className="filler">
                    </div>
                    <Accordion  className="item-a">
                        <Card>
                            <Card.Header style={{ height:"50px", padding:"0", backgroundColor:"#C5EBFE"}}>
                                <Accordion.Toggle style={{color:"black", width:"100%", height:"100%"}} as={Button} variant="link" eventKey="1">
                                    Childhood
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body style={{backgroundColor:"#C5EBFE"}}>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <div style={{borderBottom:"solid 6px #C5EBFE", borderRight:"solid 3px #C5EBFE"}}> 
                    </div>
                    <div style={{borderLeft:"solid 3px #C5EBFE"}}>
                    </div>
                    <div className="item">
                    </div>
                    <div className="filler">
                    </div>
                    {/* third line */}
                    <div className="filler">
                    </div>
                    <div style={{borderRight:"solid 3px #C5EBFE"}}>
                    </div>
                    <div style={{borderLeft:"solid 3px #C5EBFE"}}>
                    </div>
                    <div className="item">
                    </div>
                    <div className="filler">
                    </div>
                    {/* fourth line */}
                    <div className="filler">
                    </div>
                    <div className="item">
                    </div>
                    <div style={{borderRight:"solid 3px #FEC9A7", color:"#FEC9A7", fontSize:"20px", textAlign:"center"}}>2012
                    </div>
                    <div style={{borderLeft:"solid 3px #FEC9A7"}}>
                    </div>
                    <div className="item">
                    </div>
                    <div className="filler">
                    </div>
                    {/* fifth line */}
                    <div className="filler">
                    </div>
                    <div className="item"></div>
                    <div style={{borderRight:"solid 3px #FEC9A7"}}>
                    </div>
                    <div style={{borderLeft:"solid 3px #FEC9A7", borderBottom:"solid 6px #FEC9A7"}}>
                    </div>
                    <Accordion  className="item-b">
                        <Card>
                            <Card.Header style={{ height:"50px", padding:"0", backgroundColor:"#FEC9A7"}}>
                                <Accordion.Toggle style={{color:"black", width:"100%", height:"100%"}} as={Button} variant="link" eventKey="1">
                                    Studied Electrical Engineering
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body style={{backgroundColor:"#FEC9A7"}}>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <div className="filler">
                    </div>
                    {/* sixth line */}
                    <div className="filler">
                    </div>
                    <div className="item">
                    </div>
                    <div style={{borderRight:"solid 3px #FEC9A7"}}>
                    </div>
                    <div style={{borderLeft:"solid 3px #FEC9A7"}}>
                    </div>
                    <div className="filler">
                    </div>


                    {/* seventh line */}
                    <div className="filler">
                    </div>
                    <div className="item">
                    </div>
                    <div style={{borderRight:"solid 3px #A5F8CE"}}>
                    </div>
                    <div style={{borderLeft:"solid 3px #A5F8CE", color:"#A5F8CE", fontSize:"20px", textAlign:"center"}}>2017
                    </div>
                    <div className="item">
                    </div>
                    <div className="filler">
                    </div>
                    {/* eighth line */}
                    <div className="filler">
                    </div>
                    <Accordion  className="item-c">
                        <Card>
                            <Card.Header style={{ height:"50px", padding:"0", backgroundColor:"#A5F8CE"}}>
                                <Accordion.Toggle style={{color:"black", width:"100%", height:"100%"}} as={Button} variant="link" eventKey="1">
                                    Worked as an Electrical Engineer
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body style={{backgroundColor:"#A5F8CE"}}>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <div style={{borderBottom:"solid 6px #A5F8CE", borderRight:"solid 3px #A5F8CE"}}>
                    </div>
                    <div style={{borderLeft:"solid 3px #A5F8CE"}}>
                    </div>
                    <div className="item">
                    </div>
                    <div className="filler">
                    </div>
                    {/* nineth line */}
                    <div className="filler">
                    </div>
                    <div style={{borderRight:"solid 3px #A5F8CE"}}>
                    </div>
                    <div style={{borderLeft:"solid 3px #A5F8CE"}}>
                    </div>
                    <div className="item">
                    </div>
                    <div className="filler">
                    </div>
                    {/* tenth line */}
                    <div className="filler">
                    </div>
                    <div className="item"></div>
                    <div style={{borderRight:"solid 3px #FEFD97", color:"#FEFD97", fontSize:"20px", textAlign:"center"}}> 2020
                    </div>
                    <div style={{borderLeft:"solid 3px #FEFD97"}}>
                    </div>
                    <div className="item">
                    </div>
                    <div className="filler">
                    </div>
                    {/* eleventh */}
                    <div className="filler">
                    </div>
                    <div className="item"></div>
                    <div style={{borderRight:"solid 3px #FEFD97"}}>
                    </div>
                    <div style={{borderLeft:"solid 3px #FEFD97", borderBottom:"solid 6px #FEFD97"}}>
                    </div>
                    <Accordion  className="item-d">
                        <Card>
                            <Card.Header style={{ height:"50px", padding:"0", backgroundColor:"#FEFD97"}}>
                                <Accordion.Toggle style={{color:"black", width:"100%", height:"100%"}} as={Button} variant="link" eventKey="1">
                                    Studied Software Engineering
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body style={{backgroundColor:"#FEFD97"}}>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <div className="filler">
                    </div>
                    {/* twelth line */}
                    <div className="filler">
                    </div>
                    <div className="item">
                    </div>
                    <div style={{borderRight:"solid 3px #FEFD97"}}>
                    </div>
                    <div style={{borderLeft:"solid 3px #FEFD97"}}>
                    </div>
                    <div className="filler">
                    </div>
                    {/* thirteenth line */}
                    <div className="filler">
                    </div>
                    <div className="item">
                    </div>
                    <div style={{borderRight:"solid 3px #F197C0"}}>
                    </div>
                    <div style={{borderLeft:"solid 3px #F197C0", color:"#F197C0", fontSize:"20px", textAlign:"center"}}>2021
                    </div>
                    <div className="item">
                    </div>
                    <div className="filler">
                    </div>
                    {/* fourteenth line */}
                    <Accordion  className="item-e">
                        <Card>
                            <Card.Header style={{ height:"50px", padding:"0", backgroundColor:"#F197C0"}}>
                                <Accordion.Toggle style={{color:"black", width:"100%", height:"100%"}} as={Button} variant="link" eventKey="1">
                                    Looking for my next great opportunity!
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body style={{backgroundColor:"#F197C0"}}>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
            
            
            
        )
    }

    
}