import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Game extends Component {
    constructor(){
        super();

        this.state = {
            popupOpened: false
        }
    };

    togglePopup(e){
        e.preventDefault();

        this.setState({
            popupOpened: !this.state.popupOpened
        });
    };

    render(){
        return (
            <div className="header__game">
                <NavLink to="#" className="header__game__link" onClick={ (e) => this.togglePopup(e) }>Objednat hru >></NavLink>

                <div className={ this.state.popupOpened ? 'popup popup--login opened' : 'popup popup--login'}>
                    <NavLink to="#" className="popup__close" onClick={ (e) => this.togglePopup(e) }/>

                    <div className="popup__title">
                        <p>Nejste přihlášen</p>
                    </div>

                    <div className="popup__layout">
                        <form className="form form--popup" method="post" action="#">
                            <div className="form__input">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" />
                            </div>

                            <div className="form__input">
                                <label htmlFor="password">Heslo:</label>
                                <input type="password" id="password" />
                            </div>

                            <div className="form__hint">
                                <p>Zapomněl jsem <NavLink to="/password">heslo >></NavLink></p>
                            </div>

                            <div className="form__submit">
                                <input type="submit" value="Přihlásit se >>" />
                            </div>

                            <div className="form__social">
                                <p>Přihlásit se přes:</p>
                                <NavLink to="#">Facebook</NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;
