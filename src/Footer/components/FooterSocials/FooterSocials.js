import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class FooterSocials extends Component {
    render() {
        return (
            <div className="footer__socials">
                <div className="footer__socials__title">
                    <p>Sledujte nas:</p>
                </div>

                <ul className="footer__socials__list">
                    <li className="footer__socials__item"><NavLink to="#" className="footer__socials__link" /></li>
                    <li className="footer__socials__item"><NavLink to="#" className="footer__socials__link" /></li>
                    <li className="footer__socials__item"><NavLink to="#" className="footer__socials__link" /></li>
                </ul>
            </div>
        )
    }
}

export default FooterSocials;
