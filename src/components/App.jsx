import Component from 'react';
import nanoid from 'nanoid';
import Notiflix from 'notiflix';
import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  resetForm = event => {
    event.target.name.value = '';
    event.target.number.value = '';
    this.setState({
      filter: '',
    });
  };

  addContact = evt => {
    evt.preventDefault();
    const valueName = evt.currentTarget.elements.name.value;
    const valueNumber = evt.currentTarget.elements.number.value;
    if (this.state.contacts.some(element => element.name === valueName)) {
      return Notiflix.Notify.warning(`${valueName} is already in contacts`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [
            ...prevState.contacts,
            {
              name: valueName,
              number: valueNumber,
              id: nanoid(),
            },
          ],
        };
      });
    }
    this.resetForm(evt);
  };

  addCurrentValue = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  filterContacts = () => {
    const filteredArray = [];
    this.state.contacts.filter(element => {
      if (element.name.includes(this.state.filter)) {
        filteredArray.push(element);
      }
      return filteredArray;
    });
    return filteredArray;
  };

  deleteContact = event => {
    let contactIndex;
    this.state.contacts.map((element, index) => {
      if (event.target.parentNode.textContent.includes(element.name)) {
        contactIndex = index;
      }
      return contactIndex;
    });
    const array = [...this.state.contacts];
    array.splice(contactIndex, 1);
    this.setState({
      contacts: array,
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Section>
          <ContactForm
            nameTitle={'Name'}
            numberTitle={'Number'}
            addContact={this.addContact}
          />
          <h2>Contacts</h2>
          <Filter
            filterTitle={'Finds contacts by name'}
            inputFilterValue={this.state.filter}
            addCurrentValue={this.addCurrentValue}
          />
          <ContactList
            names={this.filterContacts()}
            btnAction={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;