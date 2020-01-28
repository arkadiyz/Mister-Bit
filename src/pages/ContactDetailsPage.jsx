import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router';

import ContactService from '../services/ContactService'
// import img from '../style/img/user-logo.jpg'

class ContactDetailsPage extends Component {

    state = {
        contact: {}
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        
        this.loadContact(id)
    }

    loadContact = async (id) => {
        const newContact = await ContactService.getContactById(id)

        this.setState({ contact: newContact })
    }
    onBack = (ev) =>{
        ev.stopPropagation()
        this.props.history.goBack()

    }

    onEdit=(ev)=>{
        ev.stopPropagation()
        this.props.history.push(`/edit/${this.state.contact._id}`)

    }

    render() {
        console.log('render ->-> this.state.contact', this.state.contact);
        const contact = this.state.contact



        if (!contact) {
            return <div>Loading...</div>
        } else {
            const imgUrl = "https://robohash.org/" + contact.name + ".png"
            return <div >
                <div className="details-controller">
                <span onClick={this.onBack}>⬅️</span>
                <span onClick={this.onEdit}>✏️</span>
                </div>
                <div className="user-detail">
                    <p className="user" > <img src={imgUrl} className="user-img" ></img>{contact.name}</p>
                    <p>Email: {contact.email}</p>
                    <p>Phone: {contact.phone}</p>
                </div>
            </div>
        }
    }
}
export default withRouter(ContactDetailsPage);

