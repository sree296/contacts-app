import React from "react";
import {Link} from "react-router-dom";

const ContactCard = (props) => {
    const{id, name, email} = props.contact;
    return(
        <div className="item" key={id}>
            <i className="icon user circle"></i>
            <div className="content">
                <Link to={ {pathname: `/contact/${id}`, state: {contact: props.contact}}}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <i onClick= { ()=> props.clickHandler(id)} className="trash outline alternate icon"></i>
        </div>
    )
}
export default ContactCard;