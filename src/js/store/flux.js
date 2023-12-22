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
				let store= getStore();
				fetch(apiUrl + "agenda/peeps").then(async res => {
					const response = await res.json();
					const newContactList=[...store.contacts, ...response];
					let sortedList = newContactList.sort(
						(a,b) => b.full_name.toLowerCase() - a.full_name.toLowerCase()
					)
					console.log(newContactList, "new contact list")
					console.log(sortedList, "sorted list")
					setStore({ contacts: sortedList });
				});
			},
			currentContact: (contactInfo) =>{
				setStore ({currentContact: contactInfo})
			},

			addContact: async (input) => {
				setStore((prevStore) => {
					const isContactExist = prevStore.contacts.some((contact) => contact.id === input.id);
					if (!isContactExist) {
						return { contacts: [...prevStore.contacts, input] };
					}
					return prevStore;
				});
			
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
			},
			

			editContact: async (input, id) => {
				let store = getStore();
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
				let data = await response.json();
				let newArray = store.contacts.filter((item)=> {
					item.id !== input.id;
				});
				newArray.push(userInfo);
				setStore ({contacts: newArray });
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
