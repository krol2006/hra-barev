import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
    constructor(){
        super();

        this.state = {
            menuOpened: false
        };

        this.toggleMenu.bind(this);
    }

    toggleMenu(){
        this.setState({
            menuOpened: !this.state.menuOpened
        });
    }

    render(){
        return (
            <div className="header__menu">
                <button type="button" className="header__menu__expand" onClick={() => this.toggleMenu() }><i />Menu</button>

                <ul className={ this.state.menuOpened ? 'header__menu__list opened' : 'header__menu__list'} >
                    <li className="header__menu__item"><NavLink className="header__menu__link header__menu__link--home" to="/" onClick={() => this.toggleMenu() }>Home</NavLink></li>
                    <li className="header__menu__item"><NavLink className="header__menu__link" activeClassName="header__menu__link--active" to="/games" onClick={() => this.toggleMenu() }>Hřiště</NavLink></li>
                    <li className="header__menu__item"><NavLink className="header__menu__link" activeClassName="header__menu__link--active" to="/services" onClick={() => this.toggleMenu() }>Služby</NavLink></li>
                    <li className="header__menu__item"><NavLink className="header__menu__link" activeClassName="header__menu__link--active" to="/prices" onClick={() => this.toggleMenu() }>Ceník</NavLink></li>
                    <li className="header__menu__item"><NavLink className="header__menu__link" activeClassName="header__menu__link--active" to="/gallery" onClick={() => this.toggleMenu() }>Galerie</NavLink></li>
                    <li className="header__menu__item"><NavLink className="header__menu__link" activeClassName="header__menu__link--active" to="/about" onClick={() => this.toggleMenu() }>FAQ</NavLink></li>
                    <li className="header__menu__item"><NavLink className="header__menu__link" activeClassName="header__menu__link--active" to="/contact" onClick={() => this.toggleMenu() }>Kontakty</NavLink></li>

                    <button type="button" className="header__menu__close" onClick={() => this.toggleMenu() } />
                </ul>
            </div>
        )
    }
}

export default Menu;
