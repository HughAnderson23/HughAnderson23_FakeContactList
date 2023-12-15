import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/add-contact">
				<span className="navbar-brand mb-0 h1">HAHAHAHA, join my list if you dare!</span>
			</Link>
			<div className="ml-auto">
				<Link to="/">
					<button className="btn btn-primary">Home is Where the Contact List Is</button>
				</Link>
			</div>
		</nav>
	);
};
