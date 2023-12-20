import React from "react";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({
		full_name: "",
		email: "",
		address: "",
		phone: ""
	});


	const createContact = event => {
		setContact({ ...contact, [event.target.name]: event.target.value });
	};

	console.log(store.currentContact);

	const handleSave = () => {
		actions.AddContact(contact);
	};

	return (
		<div className="container">
			<div style={styles.formContainer}>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="full_name"
							onChange={createContact}
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
							onChange={createContact}
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
							onChange={createContact}
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
							onChange={createContact}
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

export default AddContact;