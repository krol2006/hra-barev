import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ContactBoxes extends Component {
    render() {
        return (
            <div className="contact" id="contact">
                <div className="container">
                    <div className="contact__layout">
                        <div className="contact__box">
                            <div className="contact__box__title contact__box__title--fire">
                                <p>Hoří to?</p>
                            </div>

                            <div className="contact__box__layout">
                                <div className="contact__box__connect">
                                    <div className="contact__box__connect__title">
                                        <p>Vyřešíme to hned:</p>
                                    </div>

                                    <div className="contact__box__connect__image">
                                        <img src="img/contact_box_phone_img.png" alt="Phone" />
                                    </div>

                                    <div className="contact__box__connect__text">
                                        <p>+420 725 805 738</p>
                                    </div>
                                </div>

                                <div className="contact__box__info">
                                    <div className="contact__box__info__text">
                                        <p>Pokud to lze, volejte nám od 8:00 do 18:00, ale snažíme se být dostupní i mimo tyto pracovní hodiny. V případě nutnosti a nedostupnosti rezervačního oddělení neváhejte kontaktovat kohokoli z <NavLink to="#">vedení projektu >></NavLink></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact__box">
                            <div className="contact__box__title contact__box__title--cup">
                                <p>Nehoří to?</p>
                            </div>

                            <div className="contact__box__layout">
                                <div className="contact__box__connect">
                                    <div className="contact__box__connect__title">
                                        <p>Vyřešíme to v klidu:</p>
                                    </div>

                                    <div className="contact__box__connect__image">
                                        <img src="img/contact_box_email_img.png" alt="Email" />
                                    </div>

                                    <div className="contact__box__connect__text">
                                        <p>paintball@hrabarev.cz</p>
                                    </div>
                                </div>

                                <div className="contact__box__info">
                                    <div className="contact__box__info__buttons">
                                        <NavLink to="#">Objednat hru >></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact__box">
                            <div className="contact__box__title contact__box__title--form">
                                <p>Kontaktní formulář</p>
                            </div>

                            <div className="contact__box__layout">
                                <form method="post" action="#" className="form form--contact">
                                    <div className="form__input">
                                        <input type="email" placeholder="Email*" />
                                    </div>

                                    <div className="form__input">
                                        <input type="tel" placeholder="Telefon*" />
                                    </div>

                                    <div className="form__input form__input--textarea">
                                        <textarea placeholder="Zpráva:" />
                                    </div>

                                    <div className="form__submit">
                                        <input type="submit" value="Odeslat >>" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="contact__subtitle">
                        <p>Adresy našich hřišť</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactBoxes;