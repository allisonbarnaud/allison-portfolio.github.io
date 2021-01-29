import { Component } from 'react'

import './Projects.css'

import { Card, Button } from 'react-bootstrap'

export default class Projects extends Component {

    render() {

        return (
            <div id="projects" style={{paddingTop:"50px"}}>
                <h1 className="header">PROJECTS</h1>
                <div className="container2">
                    <Card bg="light" style={{width:"420px", height: "300px"}}>
                        <Card.Header><strong>Budget-mate</strong></Card.Header>
                        <Card.Body>
                            <Card.Text>
                            A <strong>Full-stack</strong> financial tracker/budgetting application written in <strong>Javascript, HTML and CSS</strong>. Made with <strong>ReactJS, ExpressJS.</strong>
                            </Card.Text>
                            <div className="container3">
                                <Button href="" variant="warning" disabled>Live website</Button>
                                <Button href="https://github.com/allisonbarnaud/budget-mate" variant="warning">Source code</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{width:"420px", height: "300px"}}>
                        <Card.Header><strong>Tic-Tac-toe</strong></Card.Header>
                        <Card.Body>
                            <Card.Text>
                            A <strong>Front-end</strong> application written in <strong>Javascript, HTML and CSS</strong>. A web-based recreation of the classic 2-player game.
                            </Card.Text>
                            <div className="container3">
                                <Button href="https://allisonbarnaud.github.io/Tic-Tac-Toe-Game/" variant="warning">Live website</Button>
                                <Button href="https://github.com/allisonbarnaud/Tic-Tac-Toe-Game/" variant="warning">Source code</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{width:"420px", height: "300px"}}>
                        <Card.Header><strong>Gamer News</strong></Card.Header>
                        <Card.Body>
                            <Card.Text>
                            A <strong>Full-stack</strong> CRUD application written in <strong>Ruby</strong>. This application uses the News Api to create a gaming news platform. Made with <strong>Sinatra, PostgreSQL, BCrypt.</strong> 
                            </Card.Text>
                            <div className="container3">
                                <Button href="https://g-news.herokuapp.com/" variant="warning">Live website</Button>
                                <Button href="https://github.com/allisonbarnaud/gamer-news" variant="warning">Source code</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{width:"420px", height: "300px"}}>
                        <Card.Header><strong>Tech Tracker</strong></Card.Header>
                        <Card.Body>
                            <Card.Text>
                            A <strong>Full-stack</strong> price compare application written in <strong>Javascript, HTML and CSS</strong>. A web scraper was built to parse data from websites to obtain and compare prices. Made with <strong>Puppeteer, ExpressJS, NodeJS, BodyParser, PostgreSQL.</strong>
                            </Card.Text>
                            <div className="container3">
                                <Button href="" variant="warning" disabled>Live website</Button>
                                <Button href="https://github.com/allisonbarnaud/web_scraper_price_compare" variant="warning">Source code</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{width:"420px", height: "300px"}}>
                        <Card.Header><strong>All-in-one Discord Bot</strong></Card.Header>
                        <Card.Body>
                            <Card.Text>
                            A <strong>Back-end</strong> application written in <strong>Javascript</strong>. An automated helper for Discord servers, that can answer basic questions and play music on request within voice channels. Made with <strong>NodeJS, UnderscoreJS, Discord API</strong>.
                            </Card.Text>
                            <div className="container3">
                                <Button href="https://github.com/allisonbarnaud/all_in_one_discord_bot" variant="warning">Source code</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{width:"420px", height: "300px"}}>
                        <Card.Header><strong>Godot Game #1</strong></Card.Header>
                        <Card.Body>
                            <Card.Text>
                            My first project with the Godot game engine. Work In Progress..
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                
            </div>
        )
    }
}