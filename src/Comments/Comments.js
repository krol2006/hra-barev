import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Comments extends Component {
    render(){
        return (
            <div className="comments">
                <div className="container">
                    <div className="comments__layout">
                        <div className="comments__title">
                            <p>Diskuze</p>
                        </div>

                        <div className="comments__list">
                            <div className="comments__item">
                                <div className="comments__item--left">
                                    <div className="comments__item__avatar">
                                        <img src="/img/comments_avatar_img.png" alt="Avatar" />
                                    </div>

                                    <div className="comments__item__name">
                                        <p>Admin</p>
                                    </div>
                                </div>

                                <div className="comments__item--right">
                                    <div className="comments__item__text">
                                        <p>Dobrý den, tuto diskusi využijte pokud se chcete na cokoliv v souvyslosti s touto akcí zeptat či pokud chcete ostatním účastníkům akce cokoliv vzkázat. Chcete-li aktivovat podporu čtečky obrazovky, stiskněte Ctrl+Alt+Z. Chcete-li zjistit další informace o klávesových zkratkách, stiskněte Ctrl+lomítko.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="comments__item">
                                <div className="comments__item--left">
                                    <div className="comments__item__avatar">
                                        <img src="/img/comments_avatar_img.png" alt="Avatar" />
                                    </div>

                                    <div className="comments__item__name">
                                        <p>Jarda Trávník</p>
                                    </div>
                                </div>

                                <div className="comments__item--right">
                                    <div className="comments__item__text">
                                        <p>Dobrý den, můžu si vzít vlastní zbraň  ?</p>
                                    </div>
                                </div>
                            </div>

                            <div className="comments__item comments__item--new">
                                <div className="comments__item--left">
                                    <div className="comments__item__avatar">
                                        <img src="/img/comments_avatar_img.png" alt="Avatar" />
                                    </div>

                                    <div className="comments__item__name">
                                        <p>Registrovaný uživatel</p>
                                    </div>
                                </div>

                                <div className="comments__item--right">
                                    <div className="comments__item__textarea">
                                        <textarea placeholder="Začít psát..." />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="comments__save">
                            <NavLink to="#">Vložit >></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comments;