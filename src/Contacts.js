import { Component } from 'react'


export default class Contacts extends Component {

    render() {

        return (
            <div id="contact">
                <h1 className="header">CONTACTS</h1>
                <div style={{width: "46%", height:"80px", margin: "0 auto", backgroundColor: "white", textAlign:"center", borderRadius:"5px", paddingTop:"8px"}}>
                    <h4>arnaudallisonb@gmail.com</h4>
                    <h4>+61401668427</h4>
                    <br/><br/><br/><br/><br/>
                    <div style={{color:"grey"}}>Made by Allison with React and a lot of CSS</div>
                    <br/>
                </div>
                
            </div>
        )
    }
}