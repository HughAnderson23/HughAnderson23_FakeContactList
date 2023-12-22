const getState = ({ getStore, getActions, setStore }) => {
	const apiUrl = "https://playground.4geeks.com/apis/fake/contact/"
	return {
		store: {
			contacts: [],
			currentContact: {},
			contactId: 0,
		},
		
		actions: {
			getContacts: async () => {
				try {
					const response = await fetch(apiUrl + "agenda/peeps");
					const contacts = await response.json();
					// const sortedContacts = contacts.sort((a, b) => a.full_name.localeCompare(b.full_name, 'en', { sensitivity: 'base' }));
					setStore({ contacts });
				} catch (error) {
					console.error("Error fetching contacts:", error);
				}
			},
			
			
			currentContact: (contactInfo) =>{
				setStore ({currentContact: contactInfo})
			},

			AddContact: async (input) => {
				// setStore((prevStore) => {
				// 	const isContactExist = prevStore.contacts.some((contact) => contact.id === input.id);
				// 	if (!isContactExist) {
				// 		return { contacts: [...prevStore.contacts, input] };
				// 	}
				// 	return prevStore;
				// });
			
				let response = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify({
						full_name: input.full_name,
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
				// setStore([ contacts ]);
				// if (response.success) {
				// 	actions.getContacts(); // Fetch contacts after adding a new one
				// }
			},
			

			editContact: async (input, id) => {
				// let store = getStore();
				let userInfo = {
					full_name: input.name,
					email: input.email,
					agenda_slug: "peeps",
					address: input.address,
					phone: input.phone,
					id: input.id
				}
				let response = await fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
					method: "PUT",
					body: JSON.stringify(userInfo),
					headers: {
						"Content-Type": "application/json"
					}
				});
				response = await response.json();
				// let newArray = store.contacts.filter((item)=> {
				// 	item.id !== input.id;
				// });
				// newArray.push(userInfo);
				// setStore ({contacts: newArray });
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
