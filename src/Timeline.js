import { Component } from 'react'
import './Timeline.css';

import { Accordion, Card, Button } from 'react-bootstrap';

export default class Timeline extends Component {



    render() {

        return (
            <div>
                <h1 className="header">TIMELINE</h1>
                <div className="container">
                    
                    {/* pre-line */}
                    
                    <div className="filler"></div>
                    <div className="timelineHeader">START</div>
                    <div className="locationDate">Jakarta, 1994</div>
                    
                    {/* first line */}
                    <div className="filler">
                    </div>
                    <div className="item">
                    </div>
                    <div className="straightLineLeft">
                    </div>
                    <div className="straightLineRight">
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
                            <Card.Header style={{ height:"50px", padding:"0"}}>
                                <Accordion.Toggle style={{color:"black", width:"100%", height:"100%"}} as={Button} variant="link" eventKey="1">
                                    Childhood in Jakarta, Indonesia.
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <div className="lineLeft">
                    </div>
                    <div className="straightLineRight">
                    </div>
                    <div className="item">
                    </div>
                    <div className="filler">
                    </div>
                    {/* third line */}
                    <div className="filler">
                    </div>
                    <div className="straightLineLeft">
                    </div>
                    <div className="straightLineRight">
                    </div>
                    <div className="item">
                    </div>
                    <div className="filler">
                    </div>
                    {/* fourth line */}
                    <div className="filler">
                    </div>
                    <div className="item"></div>
                    <div className="straightLineLeft">
                    </div>
                    <div className="lineRight">
                    </div>
                    <Accordion  className="item-b">
                        <Card>
                            <Card.Header style={{ height:"50px", padding:"0"}}>
                                <Accordion.Toggle style={{color:"black", width:"100%", height:"100%"}} as={Button} variant="link" eventKey="1">
                                    Childhood in Jakarta, Indonesia.
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <div className="filler">
                    </div>
                    {/* fifth line */}
                    <div className="filler">
                    </div>
                    <div className="item">
                    </div>
                    <div className="straightLineLeft">
                    </div>
                    <div className="straightLineRight">
                    </div>
                    <div className="filler">
                    </div>


                    {/* sixth line */}
                    <div className="filler">
                    </div>
                    <div className="item">
                    </div>
                    <div className="straightLineLeft">
                    </div>
                    <div className="straightLineRight">
                    </div>
                    <div className="item">
                    </div>
                    <div className="filler">
                    </div>
                    {/* seventh line */}
                    <div className="filler">
                    </div>
                    <Accordion  className="item-c">
                        <Card>
                            <Card.Header style={{ height:"50px", padding:"0"}}>
                                <Accordion.Toggle style={{color:"black", width:"100%", height:"100%"}} as={Button} variant="link" eventKey="1">
                                    Childhood in Jakarta, Indonesia.
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <div className="lineLeft">
                    </div>
                    <div className="straightLineRight">
                    </div>
                    <div className="item">
                    </div>
                    <div className="filler">
                    </div>
                    {/* eighth line */}
                    <div className="filler">
                    </div>
                    <div className="straightLineLeft">
                    </div>
                    <div className="straightLineRight">
                    </div>
                    <div className="item">
                    </div>
                    <div className="filler">
                    </div>
                    {/* nineth line */}
                    <div className="filler">
                    </div>
                    <div className="item"></div>
                    <div className="straightLineLeft">
                    </div>
                    <div className="lineRight">
                    </div>
                    <Accordion  className="item-d">
                        <Card>
                            <Card.Header style={{ height:"50px", padding:"0"}}>
                                <Accordion.Toggle style={{color:"black", width:"100%", height:"100%"}} as={Button} variant="link" eventKey="1">
                                    Childhood in Jakarta, Indonesia.
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <div className="filler">
                    </div>
                    {/* tenth line */}
                    <div className="filler">
                    </div>
                    <div className="item">
                    </div>
                    <div className="straightLineLeft">
                    </div>
                    <div className="straightLineRight">
                    </div>
                    <div className="filler">
                    </div>
                </div>
            </div>
            
            
            
        )
    }

    
}