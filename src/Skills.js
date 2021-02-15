import { Component } from 'react'

import './skills.css';

export default class Skills extends Component {

    render() {

        return (
            <div id="skills" style={{marginBottom:"100px"}}>
                <h1 className="header">SKILLS</h1>
                <div className="skillsContainer">
                    <div className="skills" style={{backgroundColor:"#C5EBFE"}}><h4>Front-End</h4>Javascript <br/> HTML <br/> CSS <br/> React <br/> Bootstrap</div>
                    <div className="skills" style={{backgroundColor:"white"}}><h4>Back-End</h4>Ruby <br/> Express <br/> PostgreSQL </div>
                    <div className="skills" style={{backgroundColor:"#F197C0"}}><h4>Development Tools</h4>Git/Github <br/> Trello <br/> Heroku <br/> Netlify <br/> Linux/Ubuntu <br/> JIRA <br/> </div>

                </div>
            </div>
        )
    }
}