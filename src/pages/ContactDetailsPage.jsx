import React from 'react';
import { Component } from 'react';
import ContactService from '../services/ContactService'
import img from '../style/img/user-logo.jpg'


export default class ContactDetailsPage extends Component {

    state={
        contact:{}
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        debugger
        this.loadContact(id)
    }

    loadContact = async (id) => {
        const newContact = await ContactService.getContactById(id)
        
        this.setState({ contact: newContact })
    }

    render() {
        console.log('render ->-> this.state.contact',this.state.contact);
        const contact = this.state.contact
 
        

        if(!contact){ 
            return <div>Loading...</div>
        }else{
            return <div className="user-detail">
            
            <p className="user" > <img className="user-img" src={img}></img>{contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
        </div>
        }
    }
}