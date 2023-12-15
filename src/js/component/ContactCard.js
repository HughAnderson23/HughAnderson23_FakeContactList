import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Context } from '../store/appContext';

const ContactCard = ({ contactId }) => {
  const{ store, actions} = useContext(Context)
  
  return (
    <ol>
        {store.contacts.map((contact) => (
          <li key={contact.id}>
            <div className="contact-card">
                <h3>{contact.name}</h3>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
                <p>Address: {contact.address}</p>
                {/* Add more details as needed */}
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

