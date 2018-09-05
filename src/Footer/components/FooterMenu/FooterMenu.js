import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class FooterMenu extends Component {
    render() {
        return (
            <div className="footer__menu">
                <ul className="footer__menu__list">
                    <li className="footer__menu__item"><NavLink to="/about" className="footer__menu__link">O nas</NavLink></li>
                    <li className="footer__menu__item"><NavLink to="#" className="footer__menu__link">Pujconva vybaveni</NavLink></li>
                    <li className="footer__menu__item"><NavLink to="#" className="footer__menu__link">O paintballu</NavLink></li>
                    <li className="footer__menu__item"><NavLink to="#" className="footer__menu__link">Obchodni podminky</NavLink></li>
                    <li className="footer__menu__item"><NavLink to="#" className="footer__menu__link">Kariera</NavLink></li>
                    <li className="footer__menu__item"><NavLink to="#" className="footer__menu__link">Partneri</NavLink></li>
                </ul>

                <ul className="footer__menu__buttons">
                    <li className="footer__menu__button"><NavLink to="#" className="footer__menu__buttons__link">ID hry</NavLink></li>
                    <li className="footer__menu__button"><NavLink to="#" className="footer__menu__buttons__link">Zobrazit hru >></NavLink></li>
                </ul>
            </div>
        )
    }
}

export default FooterMenu;
