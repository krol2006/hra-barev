import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Choose extends Component {
    render() {
        return (
            <div className="choose">
                <div className="container">
                    <div className="choose__layout">
                        <ul className="choose__list">
                            <li className="choose__item"><NavLink to="/login" className="choose__link">Prihlasit se na verejnou hru >></NavLink></li>
                            <li className="choose__item"><NavLink to="/private" className="choose__link">Objednat soukromou hru >></NavLink></li>
                            <li className="choose__item"><NavLink to="/gifts" className="choose__link">Vybrat darkovy poukaz >></NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Choose;