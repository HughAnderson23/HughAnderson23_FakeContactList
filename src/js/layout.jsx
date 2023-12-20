import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacts from './views/Contacts.jsx';
import {AddContact} from './views/AddContact.jsx';
import injectContext from './store/appContext';
import EditContactPage from '/src/js/views/EditContact.jsx';

import { Navbar } from './component/navbar.js';
import {Footer} from './component/footer.js';
import ScrollToTop from './component/scrollToTop.js';

const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Contacts />} />
						<Route path="/Add-Contact" element={<AddContact />} />
                        <Route path="/Edit-Contact" element={<EditContactPage/>}/>
						
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);