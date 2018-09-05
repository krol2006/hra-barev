import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Reservation extends Component {
    render() {
        return (
            <div className="reservation" id="reservation">
                <div className="container">
                    <div className="reservation__list">
                        <div className="reservation__item">
                            <div className="reservation__title" data-number="1">
                                <p>Kasarna Hajek</p>
                            </div>

                            <div className="reservation__image">
                                <img src="img/reservation_img.jpg" alt="pic" />

                                <div className="reservation__image__text">
                                    <p>Praha - centrum<br/> 32 000 m<sup>2</sup></p>
                                </div>

                                <div className="reservation__image__icons">
                                    <i className="reservation__image__icon--food" />
                                    <i className="reservation__image__icon--wc" />
                                    <i className="reservation__image__icon--wifi" />
                                    <i className="reservation__image__icon--parking" />
                                    <i className="reservation__image__icon--bus" />
                                    <i className="reservation__image__icon--temperature" />
                                    <i className="reservation__image__icon--light" />
                                </div>
                            </div>

                            <div className="reservation__gallery">
                                <div className="reservation__gallery__item">
                                    <img src="img/reservation_small_img.jpg" alt="pic" />
                                </div>

                                <div className="reservation__gallery__item">
                                    <img src="img/reservation_small_img2.jpg" alt="pic" />
                                </div>

                                <div className="reservation__gallery__item">
                                    <img src="img/reservation_small_img3.jpg" alt="pic" />
                                </div>
                            </div>

                            <div className="reservation__content">
                                <div className="reservation__content--primary">
                                    <p>Hostivicky areal je pro hrace paintballu tim, cim je Petrin pro zamilovane pary. Prijedte a pochopite.</p>
                                </div>

                                <div className="reservation__content--secondary">
                                    <ul>
                                        <li>nejvetsi hala na sportovni paintball v CR</li>
                                        <li>vstupne s neomezenym pocren munice</li>
                                        <li>turnaje a treninky</li>
                                    </ul>

                                    <p>Ukaz na mape</p>
                                </div>

                                <div className="reservation__content__buttons">
                                    <NavLink to="/game/1">Reservovat soukromou hru >><span>Detail >></span></NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="reservation__item">
                            <div className="reservation__title" data-number="2">
                                <p>Sportovni hala Letna</p>
                            </div>

                            <div className="reservation__image">
                                <img src="img/reservation_img2.jpg" alt="pic" />

                                <div className="reservation__image__text">
                                    <p>Praha - centrum<br/> 1 000 m<sup>2</sup></p>
                                </div>

                                <div className="reservation__image__icons">
                                    <i className="reservation__image__icon--food" />
                                    <i className="reservation__image__icon--wc" />
                                    <i className="reservation__image__icon--wifi" />
                                    <i className="reservation__image__icon--parking" />
                                    <i className="reservation__image__icon--bus reservation__image__icon--inactive" />
                                    <i className="reservation__image__icon--temperature" />
                                    <i className="reservation__image__icon--light" />
                                </div>
                            </div>

                            <div className="reservation__gallery">
                                <div className="reservation__gallery__item">
                                    <img src="img/reservation_small_img.jpg" alt="pic" />
                                </div>

                                <div className="reservation__gallery__item">
                                    <img src="img/reservation_small_img2.jpg" alt="pic" />
                                </div>

                                <div className="reservation__gallery__item">
                                    <img src="img/reservation_small_img3.jpg" alt="pic" />
                                </div>
                            </div>

                            <div className="reservation__content">
                                <div className="reservation__content--primary">
                                    <p>Hostivicky areal je pro hrace paintballu tim, cim je Petrin pro zamilovane pary. Prijedte a pochopite.</p>
                                </div>

                                <div className="reservation__content--secondary">
                                    <ul>
                                        <li>nejvetsi hala na sportovni paintball v CR</li>
                                        <li>vstupne s neomezenym pocren munice</li>
                                        <li>turnaje a treninky</li>
                                    </ul>

                                    <p>Ukaz na mape</p>
                                </div>

                                <div className="reservation__content__buttons">
                                    <a href="/game/2">Reservovat soukromou hru >><span>Detail >></span></a>
                                </div>
                            </div>
                        </div>

                        <div className="reservation__item">
                            <div className="reservation__title" data-number="3">
                                <p>Raketova zakladna Bratovice</p>
                            </div>

                            <div className="reservation__image">
                                <img src="img/reservation_img3.jpg" alt="pic" />

                                <div className="reservation__image__text">
                                    <p>Praha - centrum<br/> 32 000 m<sup>2</sup></p>
                                </div>

                                <div className="reservation__image__icons">
                                    <i className="reservation__image__icon--food" />
                                    <i className="reservation__image__icon--wc" />
                                    <i className="reservation__image__icon--wifi reservation__image__icon--inactive" />
                                    <i className="reservation__image__icon--parking" />
                                    <i className="reservation__image__icon--bus reservation__image__icon--inactive" />
                                    <i className="reservation__image__icon--temperature reservation__image__icon--inactive" />
                                    <i className="reservation__image__icon--light reservation__image__icon--inactive" />
                                </div>
                            </div>

                            <div className="reservation__gallery">
                                <div className="reservation__gallery__item">
                                    <img src="img/reservation_small_img.jpg" alt="pic" />
                                </div>

                                <div className="reservation__gallery__item">
                                    <img src="img/reservation_small_img2.jpg" alt="pic" />
                                </div>

                                <div className="reservation__gallery__item">
                                    <img src="img/reservation_small_img3.jpg" alt="pic" />
                                </div>
                            </div>

                            <div className="reservation__content">
                                <div className="reservation__content--primary">
                                    <p>Hostivicky areal je pro hrace paintballu tim, cim je Petrin pro zamilovane pary. Prijedte a pochopite.</p>
                                </div>

                                <div className="reservation__content--secondary">
                                    <ul>
                                        <li>nejvetsi hala na sportovni paintball v CR</li>
                                        <li>vstupne s neomezenym pocren munice</li>
                                        <li>turnaje a treninky</li>
                                    </ul>

                                    <p>Ukaz na mape</p>
                                </div>

                                <div className="reservation__content__buttons">
                                    <NavLink to="#">Reservovat soukromou hru >><span>Detail >></span></NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="reservation__item">
                            <div className="reservation__title" data-number="4">
                                <p>Kasarna Klecany</p>
                            </div>

                            <div className="reservation__image">
                                <img src="img/reservation_img4.jpg" alt="pic" />

                                <div className="reservation__image__text">
                                    <p>Praha - centrum<br/>32 000 m<sup>2</sup></p>
                                </div>

                                <div className="reservation__image__icons">
                                    <i className="reservation__image__icon--food" />
                                    <i className="reservation__image__icon--wc" />
                                    <i className="reservation__image__icon--wifi" />
                                    <i className="reservation__image__icon--parking" />
                                    <i className="reservation__image__icon--bus" />
                                    <i className="reservation__image__icon--temperature reservation__image__icon--inactive" />
                                    <i className="reservation__image__icon--light reservation__image__icon--inactive" />
                                </div>
                            </div>

                            <div className="reservation__gallery">
                                <div className="reservation__gallery__item">
                                    <img src="img/reservation_small_img.jpg" alt="pic" />
                                </div>

                                <div className="reservation__gallery__item">
                                    <img src="img/reservation_small_img2.jpg" alt="pic" />
                                </div>

                                <div className="reservation__gallery__item">
                                    <img src="img/reservation_small_img3.jpg" alt="pic" />
                                </div>
                            </div>

                            <div className="reservation__content">
                                <div className="reservation__content--primary">
                                    <p>Hostivicky areal je pro hrace paintballu tim, cim je Petrin pro zamilovane pary. Prijedte a pochopite.</p>
                                </div>

                                <div className="reservation__content--secondary">
                                    <ul>
                                        <li>nejvetsi hala na sportovni paintball v CR</li>
                                        <li>vstupne s neomezenym pocren munice</li>
                                        <li>turnaje a treninky</li>
                                    </ul>

                                    <p>Ukaz na mape</p>
                                </div>

                                <div className="reservation__content__buttons">
                                    <NavLink to="#">Reservovat soukromou hru >><span>Detail >></span></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="reservation__icons">
                        <ul className="reservation__icons__list">
                            <li className="reservation__icons__item reservation__icons__item--food">Obcerstveni <br/>Restaurace</li>
                            <li className="reservation__icons__item reservation__icons__item--wc">Toalety</li>
                            <li className="reservation__icons__item reservation__icons__item--wifi">WI FI</li>
                            <li className="reservation__icons__item reservation__icons__item--parking">Bezplatne parkoviste</li>
                            <li className="reservation__icons__item reservation__icons__item--bus">MHD</li>
                            <li className="reservation__icons__item reservation__icons__item--temperature">Vytapene zazemi</li>
                            <li className="reservation__icons__item reservation__icons__item--light">Umele osvetleni</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reservation;
