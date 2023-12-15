import React, { useContext, useState } from "react";
import "../../styles/home.css";

import { Context } from "../store/appContext";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";


import ContactCard from "../component/ContactCard";
import Modal from "../component/Modal";


export default class Contacts extends Flux.View {
    constructor(){
        super();
        this.state = {
            showModal: false  
        };
    }
    render() {
        return (
            <div className="container">
                <div>
                    <p className="text-right my-3">
                        <Link className="btn btn-success" to="/add">Add new contact</Link>
                    </p>
                    <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                        <ul className="list-group pull-down" id="contact-list">
                            <ContactCard onDelete={() => this.setState({ showModal: true})} />
                            <ContactCard />
                            <ContactCard />
                            <ContactCard />
                        </ul>
                    </div>
                </div>
                <Modal show={this.state.showModal} onClose={() => this.setState({showModal: false})} />
            </div>
        );
    }
}
