import React from 'react';
import { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
// import img from '../style/img/user-logo.jpg'
class ContactPreview extends Component {

    state = {
        contact: {}
    }

    componentDidMount() {

        this.loadContact()
    }
    loadContact = () => {
        const newContact = this.props.contact
        this.setState({ contact: newContact })
    }

    getContact = () => {
        console.log("id", this.state.contact._id);

        this.props.history.push(`/contacts/${this.state.contact._id}`)
    }
    render() {
        const contact = this.state.contact
        if (!this.state.contact) {
            return <div>Loading ...</div>
        } else {
            const imgUrl = "https://robohash.org/"+contact.name+".png"

            return <div className="contact-details" onClick={this.getContact}>
                <p className ="user"><img className="user-img" src={imgUrl}>
                    </img>Name: {contact.name}</p>

            </div>
        }

    }
}
export default withRouter(ContactPreview);
