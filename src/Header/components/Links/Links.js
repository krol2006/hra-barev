import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Links extends Component {
    render() {
        return (
            <div className="header__links">
                <ul className="header__links__list">
                    <li className="header__links__item"><NavLink className="header__links__link" to="/steps">Cart</NavLink></li>
                    <li className="header__links__item"><NavLink className="header__links__link" to="/profile">Profile</NavLink></li>
                    <li className="header__links__item"><NavLink className="header__links__link" to="/calendar">Calendar</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Links;