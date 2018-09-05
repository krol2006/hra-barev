import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Places extends Component {
    render() {
        return (
            <div className="places">
                <div className="container">
                    <div className="places__layout">
                        <div className="places__text">
                            <p>Navstivte nejvetsi <span>paintballove</span> arealy Evropy</p>
                        </div>

                        <div className="places__buttons">
                            <NavLink to='/games'>Naše hřiště >></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Places;

