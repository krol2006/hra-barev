import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Breadcrumbs extends Component {
    render() {
        return (
            <div className="breadcrumbs">
                <div className="container">
                    <ul className="breadcrumbs__list">
                        <li className="breadcrumbs__item"><NavLink to="/" className="breadcrumbs__link" /></li>
                        <li className="breadcrumbs__item"><NavLink to="/" className="breadcrumbs__link">Eshop</NavLink></li>
                        <li className="breadcrumbs__item"><NavLink to="/" className="breadcrumbs__link">Dárkové poukazy</NavLink></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Breadcrumbs;