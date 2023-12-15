import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../store/appContext';
import getRandomImage from '/workspaces/HughAnderson23_FakeContactList/src/img/imagePack.jsx';

const ContactCard = ({ contactId }) => {
  const { store, actions } = useContext(Context);

  const handleDelete = (contact) => {
    actions.deleteContact(contact);
  };

  return (
    <ol style={styles.contactList}>
      {store.contacts.map((contact) => (
        <li key={contact.id} style={styles.listItem}>
          <div className="contact-card" style={styles.cardContainer}>
            <img
              src={getRandomImage(contactId)}
              style={{ width: '100px', height: '100px', marginBottom: '10px' }}
              alt={`Contact ${contactId}`}
            />
            <h3 style={styles.cardText}>{contact.name}</h3>
            <p style={styles.cardText}>Email: {contact.email}</p>
            <p style={styles.cardText}>Phone: {contact.phone}</p>
            <p style={styles.cardText}>Address: {contact.address}</p>
            {/* Add more details as needed */}
            <button onClick={() => handleDelete(contact)} style={styles.deleteButton}>
              Delete Contact
            </button>
          </div>
        </li>
      ))}
    </ol>
  );
};

ContactCard.propTypes = {
  contactId: PropTypes.number.isRequired,
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


