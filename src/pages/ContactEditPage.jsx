import React from 'react';
import { Component } from 'react';
// import { Router, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import ContactList from '../cmps/ContactList'
import ContactService from '../services/ContactService'
import ContactFilter from '../cmps/ContactFilter'

class ContactEditPage extends Component {
    state = {
        contact:{
            _id:null,
            name: null,
            phone: null,
            email: null
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {

            this.loadContact(id)
        }
    }

    loadContact = async (id) => {
        const contact = await ContactService.getContactById(id)

        this.setState({  contact })
    }

    changeInput = (ev) => {
        let field = ev.target.name;
        console.log("field ", field);

        let value = ev.target.value;
        // this.setState(...prevState,{ [field]: value })

        this.setState(prevState => ({
            contact: {                       // object that we want to update
                ...prevState.contact,       // keep all other key-value pairs
                [field]: value                // update the value of specific key
            }
        }))
    }

    onSave = async(ev) => {
        ev.stopPropagation()
        let {contact} = {...this.state} 
        if (this.props.match.params.id) {
            contact._id = this.props.match.params.id
        }else{
            delete contact._id
        }
        await ContactService.saveContact(contact)
        this.props.history.goBack()
    }

    onBack = (ev) => {
        ev.stopPropagation()
        this.props.history.goBack()

    }
    onDelete = async(ev) =>{
        ev.stopPropagation()
       await ContactService.deleteContact(this.state.contact._id)
       this.props.history.goBack()

    }

    render() {
        console.log(this.state);
        const id = this.state.contact._id
        return <div className="edit-container" >
            <div className="details-controller">

            <span onClick={this.onBack}>⬅️</span>
            {id && <span onClick={this.onDelete}>🗑️</span>}
            </div>
            <input type="text" placeholder="name" value={this.state.contact.name}
                onChange={this.changeInput} name="name"></input>

            <input type="text" placeholder="phone" value={this.state.contact.phone}
                onChange={this.changeInput} name="phone"></input>

            <input type="text" placeholder="email" value={this.state.contact.email}
                onChange={this.changeInput} name="email"></input>
            <button onClick={this.onSave}>SAVE</button>
        </div>
    }
}

export default withRouter(ContactEditPage);
