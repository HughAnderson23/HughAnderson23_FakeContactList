import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Contacts = () => {
  // State to hold the list of contacts
  const{ store, actions} = useContext(Context)

  // Function to add a new contact
  

  return (
    <div>
    
      <Link to="/Add-Contact"><button>Add Contact</button></Link>

      
      <ol>
        {store.contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Contacts;
