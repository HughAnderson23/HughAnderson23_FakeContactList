import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../store/appContext';
import IconKid_1 from '/src/img/Icon Kid_1.jpg';
import { Link } from 'react-router-dom';

const ContactCard = ( {contact} ) => {
  console.log(contact);
  const { store, actions } = useContext(Context);
  const handleDelete = (contact) => {
    actions.deleteContact(contact);
  };
  
  return (
    <ol style={styles.contactList}>
        <li key={contact.id} style={styles.listItem} >
          <div className="contact-card" style={styles.cardContainer}>
            <img
              src={IconKid_1}
              style={{ width: '100px', height: '100px', marginBottom: '10px' }}
              // alt={`Contact ${contactId}`}
            />
            <h3 style={styles.cardText}>{contact.full_name}</h3>
            <p style={styles.cardText}>Email: {contact.email}</p>
            <p style={styles.cardText}>Phone: {contact.phone}</p>
            <p style={styles.cardText}>Address: {contact.address}</p>
            {/* Add more details as needed */}
            <Link to="/Edit-Contact">
              <button onClick={() => {
                actions.uploadId(contact.id)
                actions.currentContact(contact)
              }

              } style={styles.editButton}>
                ✏️
              </button>
            </Link>

            <button onClick={() => handleDelete(contact)} style={styles.deleteButton}>
              🗑️
            </button>

          </div>
        </li>
      
    </ol>
  );
};



const styles = {
  contactList: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  cardContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  cardText: {
    margin: '5px 0',
  },
  editButton: {
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '8px',
    marginRight: '5px',
    cursor: 'pointer',
  },
  deleteButton: {
    backgroundColor: '#ff6347',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '8px',
    cursor: 'pointer',
  },
};

export default ContactCard;