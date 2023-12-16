import React from "react";
import { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const EditContactPage = () => {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({
		name: store.currentContact.full_name,
		email: store.currentContact.email,
		address: store.currentContact.address,
		phone: store.currentContact.phone
	});

	const editContact = event => {
		setContact({ ...contact, [event.target.name]: event.target.value });
	};

	console.log(store.currentContact);

	const handleSave = () => {
		actions.editContact(contact, store.contactId );
		window.reload()
	};



	return (
		<div className="container">
			<div style={styles.formContainer}>
				<h1 className="text-center mt-5">Edit contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="name"
							onChange={editContact}
							defaultValue={store.currentContact ? store.currentContact.full_name : ""}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email and finish with .com please and dont repeat the email please"
							name="email"
							onChange={editContact}
							defaultValue={store.currentContact ? store.currentContact.email : ""}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							name="phone"
							onChange={editContact}
							defaultValue={store.currentContact ? store.currentContact.phone : ""}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							name="address"
							onChange={editContact}
							defaultValue={store.currentContact ? store.currentContact.address : ""}
						/>
					</div>
					<Link to="/">
						<button
							onClick={() => handleSave() }
							type="button"
							className="btn btn-primary form-control"
						>
							save
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

const styles = {
	formContainer: {
		maxWidth: '400px', // Set your desired width
		margin: '0 auto', // Center the form horizontally
	},
};

export default EditContactPage;