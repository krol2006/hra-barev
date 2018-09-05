import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Check from '../Check/Check';

class Registration extends Component {
    render(){
        return (
            <div>
                <div className="registration">
                    <div className="registration__layout">
                        <div className="registration__title">
                            <p>Registrace</p>
                        </div>

                        <div className="registration__socials">
                            <NavLink to="#">Zaregistrovat přes facebook</NavLink>
                        </div>

                        <form method="post" action="#" className="form form--register">
                            <div className="form__layout">
                                <div className="form__col">
                                    <div className="form__input">
                                        <label htmlFor="email">Mail:*</label>
                                        <input type="email" id="email" />
                                    </div>

                                    <div className="form__input">
                                        <label htmlFor="name">Jméno:*</label>
                                        <input type="text" id="name" />
                                    </div>

                                    <div className="form__input">
                                        <label htmlFor="password">Heslo:*</label>
                                        <input type="password" id="password" />
                                    </div>
                                </div>

                                <div className="form__col">
                                    <div className="form__input">
                                        <label htmlFor="phone">Telefon:</label>
                                        <input type="tel" id="phone" />
                                    </div>

                                    <div className="form__input">
                                        <label htmlFor="surname">Příjmení:*</label>
                                        <input type="text" id="surname" />
                                    </div>

                                    <div className="form__input">
                                        <label htmlFor="control">Heslo (kontrola):*</label>
                                        <input type="password" id="control" />
                                    </div>
                                </div>
                            </div>

                            <div className="form__checkbox">
                                <input type="checkbox" id="terms" />
                                <label htmlFor="terms">Souhlasím s <NavLink to="#">obchodními podmínkami</NavLink></label>
                            </div>

                            <div className="form__submit">
                                <button type="submit">Zaregistrovat se >></button>
                            </div>
                        </form>
                    </div>
                </div>

                <Check />
            </div>
        );
    }
}

export default Registration;