import { Component } from 'react'

import { Card, Button } from 'react-bootstrap'

export default class Projects extends Component {

    render() {

        return (
            <div>
                <h1 className="header">PROJECTS</h1>
                <Card style={{width:"25%"}}>
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Source code</Button>
                        <Button variant="primary">Prototype</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}