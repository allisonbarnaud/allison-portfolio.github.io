import { Component } from 'react'

import { Tabs, Tab } from 'react-bootstrap'


export default class Skills extends Component {

    render() {

        return (
            <div id="skills">
                <h1 className="header">SKILLS</h1>
                <Tabs style={{width: "46%", marginLeft: "27%", backgroundColor:"red !important"}} defaultActiveKey="Front-End">
                    <Tab style={{width: "46%", height:"400px", marginLeft: "27%", border:"solid 2px white", backgroundColor:"red !important"}} eventKey="Front-End" title="Front-End">
                        <div style={{color:"white", backgroundColor:"red"}}>REACT <br></br><br></br><br></br><br></br> bootstrap</div>
                    </Tab>
                    <Tab style={{width: "46%", height:"400px", marginLeft: "27%", color: "white"}} eventKey="Back-End" title="Back-End">
                        <div style={{color:"white"}}>RUBYYY</div>
                    </Tab>
                    <Tab style={{width: "46%", height:"400px", marginLeft: "27%", color: "white"}} eventKey="Development Tools" title="Development Tools">
                        <div style={{color:"white"}}>JIRA AND WHATNOT</div>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}