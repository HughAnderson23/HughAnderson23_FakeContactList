import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import  {Context}  from '../store/appContext';
import ContactCard from '../component/ContactCard';



const Contacts = () => {

  const { store, actions } = useContext(Context);

  return (
    <div style={styles.container}>
      <Link to="/Add-Contact">
        <button style={styles.addButton}>Add Contact</button>
      </Link>
      <div style={styles.contactCardContainer}>
        <ContactCard />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    paddingTop: '20px',
    backgroundColor: '#f5f5f5', // Darkish white background color
  },
  addButton: {
    marginBottom: '20px', // Added margin to the bottom of the button
    padding: '10px',
    backgroundColor: '#6b3eff', // Purple background color
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  contactCardContainer: {
    marginTop: '20px', // Added margin to the top of the contact card
    backgroundColor: 'white', // Off-white background color
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Added a subtle box shadow
  },
};

export default Contacts;


