import React from 'react';
import { Component } from 'react';
// import { Router, Switch, Route } from 'react-router-dom';

import ContactList from '../cmps/ContactList'
import ContactService from '../services/ContactService'
import ContactFilter from '../cmps/ContactFilter'

export default class ContactPage extends Component {

    state = {
        contacts: [],
        filterBy: {
            term: ''
        }
    }
    componentDidMount() {
        this.loadContact()
    }
    loadContact = async () => {
        const newContacts = await ContactService.getContacts(this.state.filterBy)
        console.log("this.state.filterBy -> ",this.state.filterBy);

        this.setState({ contacts: newContacts })
    }

    onFilter = (filter) => {
        this.setState({ filterBy : {term :filter}}, this.loadContact);
        console.log(this.state.filterBy);

    }

    render() {
        if (!this.state.contacts) return <div>Loading ....</div>
        else {
            return <div className="contact-list" >
                <ContactFilter onFilter={this.onFilter}></ContactFilter>

                <ContactList contacts={this.state.contacts}></ContactList>
            </div>
        }
    }
}