import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../store/appContext';
import imageNames from '/workspaces/HughAnderson23_FakeContactList/src/img/imagePack.jsx';


const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * imageNames.length);
  return `/workspaces/HughAnderson23_FakeContactList/src/img/${imageNames[randomIndex]}`;
};

const ContactCard = ({ contactId }) => {
  const{ store, actions} = useContext(Context)
  const handleDelete = (contact) => {
    
    actions.deleteContact(contact);
  };  
  return (
    <ol>
        {store.contacts.map((contact) => (
          <li key={contact.id}>
            <div className="contact-card">
            <img  src={getRandomImage()}
                  style={{ width: '100px', height: '100px' }} 
                />
                <h3>{contact.name}</h3>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
                <p>Address: {contact.address}</p>
                {/* Add more details as needed */}
                <button onClick={() => handleDelete(contact)}>Delete Contact</button>
            </div>
          </li>
        ))}
      </ol>
  );
};

ContactCard.propTypes = {
  contactId: PropTypes.number.isRequired,
};

export default ContactCard;

