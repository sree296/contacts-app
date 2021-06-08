import React, {useState, useEffect} from "react";
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import {uuid} from 'uuidv4';
import api from '../api/contacts';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App(){

  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  //Retrieve Contacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const searchHandler = (searchTerm) => {
      setSearchTerm(searchTerm);
      if(searchTerm !== ''){
        const newContactList = contacts.filter( (contact) => {
          return Object.values(contact)
                  .join(" ")
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());
        })
        setSearchResults(newContactList);
      }else{
        setSearchResults(contacts);
      }
  };
  const addContactHandler = async (contact) => {
    console.log(contact);

    const request = {
      id : uuid(),
      ...contact
    };
    const response = await api.post("/contacts", request)
    setContacts([...contacts, response.data]);
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactsList = contacts.filter( (contact) => {
      return contact.id != id;
    });
    setContacts(newContactsList);
  };

  useEffect( () => {
    const getAllContacts = async () => {
        const allContacts = await retrieveContacts();
        if(allContacts){
          setContacts(allContacts);
        }
    }
    getAllContacts();
  }, []);

  return(
    <div className="ui container App">
      <Header />
      <Router>
        <Switch>
        <Route 
          exact
          path="/add" 
          render = { (props) =>(
            <AddContact
            {...props}
            addContactHandler = {addContactHandler}
            />
          ) }
          />
        <Route 
          exact
          path="/" 
          render = { (props) => (
            <ContactList 
            {...props}
            getContactId={removeContactHandler}
            contacts={searchTerm.length < 1 ? contacts : searchResults}
            term = {searchTerm}
            searchKeyword = { searchHandler }
            />
          )}
          />

          <Route
            exact
            path="/contact/:id"
            component={ContactDetail}
            />
        </Switch>
      
      </Router>
      
    </div>
)
}
export default App;
