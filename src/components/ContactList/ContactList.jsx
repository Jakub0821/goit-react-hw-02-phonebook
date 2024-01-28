import React, { Component } from 'react';

export default class ContactList extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.contacts.map(contact => (
            <li key={contact.id}>{`${contact.name}: ${contact.number}`}</li>
          ))}
        </ul>
      </div>
    );
  }
}