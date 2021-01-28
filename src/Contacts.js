import { Component } from 'react'


export default class Contacts extends Component {

    render() {

        return (
            <div id="contact">
                <h1 className="header">CONTACTS</h1>
                <div style={{width: "800px", height:"80px", margin: "0 auto", backgroundColor: "white"}}>
                    <h3>E-mail: arnaudallisonb@gmail.com</h3>
                    <h3>Telephone: +61401668427</h3>
                </div>
                
            </div>
        )
    }
}