import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ContactUs extends Component {
    render() {
        return (
            <div className="contact-us">
                <div className="container">
                    <div className="contact-us__layout">
                        <div className="contact-us__text">
                            <p>Máte své vlastní místo,<br />kde byste si chtěli zahrát?</p>
                        </div>

                        <div className="contact-us__buttons">
                            <NavLink to='/contact'>Kontaktujte nás >></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs;