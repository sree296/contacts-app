import React, {useRef} from "react";
import ContactCard from "./ContactCard";
import {Link} from 'react-router-dom';

const ContactList = (props) => {
    const inputEl = useRef("");    
    const renderContactList = props.contacts.map((contact) => {
        const deleteContactHandler = (id) => {
            props.getContactId(id);
        };
        return(
            <ContactCard contact={contact} clickHandler = {deleteContactHandler}></ContactCard>
            
        );

    });

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
    };
    return(
        <div className="ui celled list">
            <div className="ui search">
                <div className="ui icon input">
                    <input ref={inputEl} type="text" placeholder="search contact" value={props.term} onChange={getSearchTerm} className="prompt"/>
                    <i className="search icon"></i>
                </div>
            </div>
            <Link to="/add">
                    <button className="ui button blue add-new-contact">Add New Contact</button>
                </Link>
            {renderContactList}
        </div>
    )
}
export default ContactList;