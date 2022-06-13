import React from "react";
import PropTypes from 'prop-types';
import "./ContactList.css"

export  const ContactList = ({
  contacts, onDeleteContact
}) => {
  return <>
    {contacts.map(data =>
      <ul className="" key={data.id} >
            <ContactListItem name={data.name} number={data.number} />
            <button onClick={()=>onDeleteContact(data.id)}>Delete</button>
      </ul> )}     
    </>
}

const ContactListItem = ({
  name,
  number,
}) => {
  return <>
    <li className="item_contact">
        {name}:{number}
    </li>
    </>
}

ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
};