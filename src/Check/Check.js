import React, { Component } from 'react';

class Check extends Component {
    render(){
        return (
            <div className="check">
                <div className="check__layout">
                    <div className="check__title">
                        <p>Kontrola údajů</p>
                    </div>

                    <form method="post" action="#" className="form form--check">
                        <div className="form__input">
                            <label htmlFor="email">Email:</label>
                            <input type="email" placeholder="email@seznam.cz" />
                        </div>

                        <div className="form__input">
                            <label htmlFor="name">Jméno:*</label>
                            <input type="text" placeholder="Franta" />
                        </div>

                        <div className="form__input">
                            <label htmlFor="surname">Příjmení:*</label>
                            <input type="text" placeholder="Novák" />
                        </div>

                        <div className="form__submit">
                            <button type="submit">Zkontrolováno / Opraveno >></button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Check;