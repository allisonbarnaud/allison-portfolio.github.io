import { Component } from 'react'

import { Tabs, Tab } from 'react-bootstrap'


export default class Skills extends Component {

    render() {

        return (
            <div>
                <h1 className="header">SKILLS</h1>
                <Tabs style={{width: "46%", marginLeft: "27%"}} defaultActiveKey="Front-End">
                    <Tab style={{backgroundColor:"#152238", width: "46%", marginLeft: "27%", color: "white"}} eventKey="Front-End" title="Front-End">
                        <div style={{color:"white"}}>REACT <br></br><br></br><br></br><br></br> bootstrap</div>
                    </Tab>
                    <Tab style={{backgroundColor:"#152238", width: "46%", marginLeft: "27%", color: "white"}} eventKey="Back-End" title="Back-End">
                        <div style={{color:"white"}}>RUBYYY</div>
                    </Tab>
                    <Tab style={{backgroundColor:"#152238", width: "46%", marginLeft: "27%", color: "white"}} eventKey="Development Tools" title="Development Tools">
                        <div style={{color:"white"}}>JIRA AND WHATNOT</div>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}