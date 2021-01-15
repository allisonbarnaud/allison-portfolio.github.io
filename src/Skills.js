import { Component } from 'react'

import { Tabs, Tab } from 'react-bootstrap'


export default class Skills extends Component {

    render() {

        return (
            <div>
                <h1 className="header">SKILLS</h1>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="Front-End" title="Front-End">
                        <div>bla bla bla</div>
                    </Tab>
                    <Tab eventKey="Back-End" title="Back-End">
                        <div>bla bla bla</div>
                    </Tab>
                    <Tab eventKey="Others" title="Others">
                        <div>bla bla bla</div>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}