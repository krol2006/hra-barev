import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Langs extends Component {
    render() {
        return (
            <div className="header__langs">
                <ul className="header__langs__list">
                    <li className="header__langs__item"><NavLink to="#" className="header__langs__link header__langs__link--active">cz</NavLink></li>
                    <li className="header__langs__item"><NavLink to="#" className="header__langs__link">en</NavLink></li>
                    <li className="header__langs__item"><NavLink to="#" className="header__langs__link">de</NavLink></li>
                    <li className="header__langs__item"><NavLink to="#" className="header__langs__link">ru</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Langs;
