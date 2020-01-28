import React from 'react';
// import { Component } from 'react';
// import { Router, Switch, Route } from 'react-router-dom';
import ContactPreview from './ContactPreview'


export default function ContactList(props) {

    
    return (
        <div>
            {props.contacts &&  props.contacts.map((contact,idx) => {
                return <ContactPreview className="contact-list" key={idx} contact ={contact}></ContactPreview>
            })}
          </div>
      );
    }