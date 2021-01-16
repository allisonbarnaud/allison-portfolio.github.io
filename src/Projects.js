import { Component } from 'react'

import './Projects.css'

import { Card, Button } from 'react-bootstrap'

export default class Projects extends Component {

    render() {

        return (
            <div>
                <h1 className="header" style={{marginTop:"200px"}}>PROJECTS</h1>
                <div className="container2">
                    <Card style={{width:"420px", height: "300px"}}>
                        <Card.Header>Budget-mate</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Source code</Button>
                            <Button variant="primary">Prototype</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width:"420px", height: "300px"}}>
                        <Card.Header>Tic-Tac-toe</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Source code</Button>
                            <Button variant="primary">Prototype</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width:"420px", height: "300px"}}>
                        <Card.Header>Gamer News</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Source code</Button>
                            <Button variant="primary">Prototype</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width:"420px", height: "300px"}}>
                        <Card.Header>Tech Tracker</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Source code</Button>
                            <Button variant="primary">Prototype</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width:"420px", height: "300px"}}>
                        <Card.Header>Discord Bot</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Source code</Button>
                            <Button variant="primary">Prototype</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width:"420px", height: "300px"}}>
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <div className="container3">
                                <Button variant="primary" style={{margin: ""}}>Source code</Button>
                                <Button variant="primary">Prototype</Button>
                            </div>
                            
                        </Card.Body>
                    </Card>
                </div>
                
            </div>
        )
    }
}