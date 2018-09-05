import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Enter extends Component {
    render() {
        return (
            <div className="enter">
                <div className="container">
                    <div className="enter__layout">
                        <div className="enter__buttons">
                            <NavLink to="/prices">Ceník >></NavLink>
                        </div>

                        <div className="enter__text">
                            <p>Vstupne vcetne vybaveni <span>od 149 Kc</span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Enter;