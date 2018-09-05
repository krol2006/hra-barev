import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Login extends Component {
    render(){
        return (
            <div className="login">
                <div className="login__layout">
                    <div className="login__title">
                        <p>Přihlášení</p>
                    </div>

                    <div className="login__social">
                        <NavLink to="#">Přihlásit přes facebook</NavLink>
                    </div>

                    <form method="post" action="#" className="form form--login">
                        <div className="form__input">
                            <label htmlFor="email">Email / telefon:</label>
                            <input type="text" id="email" />
                        </div>

                        <div className="form__input">
                            <label htmlFor="password">Heslo</label>
                            <input id="password" type="password" />
                        </div>

                        <div className="form__submit">
                            <button type="submit">Přihlásit se >></button>
                        </div>
                    </form>

                    <div className="login__links">
                        <NavLink to="/registration">Registrace >></NavLink>
                        <NavLink to="/password">Zapomenuté heslo >></NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;