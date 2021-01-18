import { Component } from 'react'


export default class Contacts extends Component {

    render() {

        return (
            <div id="contact">
                <h1 className="header">CONTACTS</h1>
                <div style={{width: "800px", height:"150px", margin: "0 auto", backgroundColor: "white"}}>
                    <h2>E-mail: arnaudallisonb@gmail.com</h2>
                    <h2>Telephone: +61401668427</h2>
                </div>
                
            </div>
        )
    }
}