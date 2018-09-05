import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Logo extends Component {
    render(){
        return (
            <div className="header__logo">
                <NavLink className="header__logo__link" to="/">
                    <img src="./img/logo_img.png" alt="Logo" />
                </NavLink>
            </div>
        )
    }
}

export default Logo;
