const getState = ({ getStore, getActions, setStore }) => {
	const apiUrl = "https://playground.4geeks.com/apis/fake/contact/"
	return {
		store: {
			contacts: [],
			currentContact: {},
			contactId: 0,
		},
		
		actions: {
			getContacts: () => {
				fetch(apiUrl + "agenda/peeps").then(async res => {
					const response = await res.json();
					setStore({ contacts: [...getStore().contacts, ...response] });
				});
			},
			currentContact: (contactInfo) =>{
				setStore ({currentContact: contactInfo})
			},

			AddContact: async input => {
				setStore({ contacts: [...getStore().contacts, input] });
				let response = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify({
						full_name: input.name,
						email: input.email,
						agenda_slug: "peeps",
						address: input.address,
						phone: input.phone
					}),
					headers: new Headers({
						"Content-Type": "application/json"
					})
				});
				response = await response.json();
			},

			editContact: async (input, contact) => {
				let response = await fetch("https://playground.4geeks.com/apis/fake/contact/" + contact, {
					method: "PUT",
					body: JSON.stringify({
						full_name: input.name,
						// console.log(full_name);
						email: input.email,
						agenda_slug: "peeps",
						address: input.address,
						phone: input.phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				});
				response = await response.json();
			},
			uploadId: (id) => {
				setStore ({ contactId: id})
			}, 

			deleteContact: async contact => {
				setStore({ contacts: getStore().contacts.filter(index => index !== contact) });
				let response = await fetch("https://playground.4geeks.com/apis/fake/contact/" + contact.id, {
					method: "DELETE"
				});
				response = await response.json();
			}
		}
	};
};

export default getState;
