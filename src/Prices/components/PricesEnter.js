import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PricesEnter extends Component {
    render() {
        return (
            <div className="prices__enter">
                <div className="container">
                    <div className="prices__enter__layout">
                        <div className="prices__enter__text">
                            <p>Vstup na veřejné hry<span>od 149 Kč</span></p>
                        </div>

                        <div className="prices__enter__buttons">
                            <NavLink to="/calendar">Kalendař veřejných her >></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PricesEnter;