import React, { Component } from 'react';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import Links from './components/Links/Links';
import Langs from './components/Langs/Langs';
import Contacts from './components/Contacts/Contacts';
import Game from './components/Game/Game';

class Header extends Component {
    render(){
        return (
            <div className="header">
                <div className="header--top">
                    <div className="container">
                        <div className="header__layout">
                            <Logo />

                            <Links />

                            <div className="header__options">
                                <Langs />

                                <Contacts />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header--bottom">
                    <div className="container">
                        <div className="header__layout">
                            <Menu />

                            <Game />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
