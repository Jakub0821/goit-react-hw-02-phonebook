import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  loginInputId = nanoid();

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  
    const isDuplicate = this.state.contacts.some(
      (contact) =>
        contact.name.toLowerCase() === this.state.name.toLowerCase() ||
        contact.number === this.state.number
    );
  
    if (isDuplicate === true) {

      alert('Contact with the same name or number already exists!');
      return;
    }
  };
  

  handleSubmit = evt => {
    evt.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              value={this.state.name}
              required
            />
          </label>
          <label>
            Number
            <input
              onChange={this.handleChange}
              value={this.state.number}
              type="tel"
              name="number"
              required
            />
          </label>
      
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}