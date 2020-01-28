import React from 'react';
import { Component } from 'react';
// import { Router, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import ContactList from '../cmps/ContactList'
import ContactService from '../services/ContactService'
import ContactFilter from '../cmps/ContactFilter'

 class ContactPage extends Component {

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
    onAddContact=()=>{
        this.props.history.push(`/edit/`)

    }
    render() {
        if (!this.state.contacts) return <div>Loading ....</div>
        else {
            return <div className="contact-list" >
                <button onClick={this.onAddContact}>➕</button>
                <ContactFilter onFilter={this.onFilter}></ContactFilter>

                <ContactList contacts={this.state.contacts}></ContactList>
            </div>
        }
    }
}
export default withRouter(ContactPage);
