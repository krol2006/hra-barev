import React, { Component } from 'react';
import Slider from 'react-slick';
import Choose from '../Choose/Choose';
import { NavLink } from 'react-router-dom';

class Details extends Component {
    constructor(){
        super();

        this.state = {
            sliderNavPos: 0
        }
    };

    componentDidMount(){
        window.scrollTo(0, 0);
    };

    render(){
        const settings = {
            customPaging: function () {
                return <a><img src='/img/details_slider_nav_img.jpg' alt="Slide" /></a>
            },
            dots: true,
            dotsClass: 'slick-dots slick-thumb',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            speed: 500,
            beforeChange: (slick, currentSlide) => {
                this.setState({
                    sliderNavPos: currentSlide + 1
                });

                console.log(this.state.sliderNavPos)
            }
        };

        return (
            <div className="details">
                <div className="details__banner">
                    <div className="details__banner__title">
                        <p>Raketová základna Bratonice</p>
                    </div>

                    <div className="details__banner__list">
                        <div className="details__banner__item">
                            <div className="details__banner__item__image">
                                <img src="/img/details_banner_img.png" alt="Details" />
                            </div>

                            <div className="details__banner__item__text">
                                <p>Parametry</p>
                            </div>
                        </div>

                        <div className="details__banner__item">
                            <div className="details__banner__item__image">
                                <img src="/img/details_banner_img2.png" alt="Details" />
                            </div>

                            <div className="details__banner__item__text">
                                <p>Fotogalerie</p>
                            </div>
                        </div>

                        <div className="details__banner__item">
                            <div className="details__banner__item__image">
                                <img src="/img/details_banner_img3.png" alt="Details" />
                            </div>

                            <div className="details__banner__item__text">
                                <p>Kudy na hřiště</p>
                            </div>
                        </div>
                    </div>

                    <div className="details__banner__arrows">
                        <div className="container">
                            <NavLink to="#" className="details__banner__arrow details__banner__arrow--left" />
                            <NavLink to="#" className="details__banner__arrow details__banner__arrow--right" />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="details__box">
                        <div className="details__box__title" data-number={this.props.match.params.gameID}>
                            <p>Parametry</p>
                        </div>

                        <div className="details__box__layout">
                            <div className="details__box__image">
                                <img src="/img/details_box_img.jpg" alt="Details" />
                            </div>

                            <div className="details__box__content">
                                <div className="details__box__content__layout">
                                    <ul className="details__box__list">
                                        <li className="details__box__item">scénářové hry</li>
                                        <li className="details__box__item">motorizovaná technika</li>
                                        <li className="details__box__item">podzemní bunkry a kopcovitý terén</li>
                                    </ul>

                                    <div className="details__box__map">
                                        <NavLink to="#">Ukaž na mapě</NavLink>
                                    </div>
                                </div>

                                <div className="details__box__info">
                                    <div className="details__box__info__item">
                                        <p className="details__box__info__item--size">Rozloha:</p>
                                        <p>120000 m2</p>
                                    </div>

                                    <div className="details__box__info__item">
                                        <p className="details__box__info__item--time">Otvírací doba:</p>
                                        <p>kdykoliv na základě předchozí rezervace</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="details__box__text">
                            <p>Máte větší partu? Zvolte unikátní prostor bývalé raketové základny v působivé divočině CHKO Křivoklátsko. Hrát budete na ploše tří Václaváků - rozloha přesahuje 120 000 m2. Pozice zaujmete v některé z vojenských budov, na  stanovištích raket nebo v jednom z podzemních bunkrů pro pěchotu i vojenskou techniku. Pokud je vás tedy dostatek - areál je primárně určen skupinám o40 a více lidech, tedy hlavně pro větší soukromé a firemní akce</p>
                        </div>

                        <div className="details__box__table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Hřiště</th>
                                        <th>Zázemí a služby</th>
                                        <th>Doprava</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>
                                            <span>Počet budov</span>
                                            <span>5</span>
                                        </td>
                                        <td>
                                            <span>WC</span>
                                            <span>5</span>
                                        </td>
                                        <td>
                                            <span>Parkoviště</span>
                                            <span>Ano</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>Počet bunkrů</span>
                                            <span>7</span>
                                        </td>
                                        <td>
                                            <span>Drobné občerstvení</span>
                                            <span>7</span>
                                        </td>
                                        <td />
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>Lesní terén</span>
                                            <span>Ano</span>
                                        </td>
                                        <td>
                                            <span>Vytápěné zázemí</span>
                                            <span>Po domluvě</span>
                                        </td>
                                        <td />
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>Kopcovitý terén</span>
                                            <span>Ano</span>
                                        </td>
                                        <td>
                                            <span>Grilování</span>
                                            <span>Po domluvě</span>
                                        </td>
                                        <td />
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>Použití pyrotechniky</span>
                                            <span>Ano</span>
                                        </td>
                                        <td>
                                            <span>Profesionální catering</span>
                                            <span>Po domluvě</span>
                                        </td>
                                        <td />
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>Doporučený počet hráčů:</span>
                                            <span>40 a více</span>
                                        </td>
                                        <td />
                                        <td />
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="details__slider">
                        <div className="details__slider__title" data-number={this.props.match.params.gameID}>
                            <p>Fotky z hřiště</p>
                        </div>

                        <Slider className="details__slider" {...settings}>
                            <div className="details__slider__item">
                                <img src="/img/details_slider_img.jpg" alt="Slide" />
                            </div>

                            <div className="details__slider__item">
                                <img src="/img/details_slider_img.jpg" alt="Slide" />
                            </div>

                            <div className="details__slider__item">
                                <img src="/img/details_slider_img.jpg" alt="Slide" />
                            </div>

                            <div className="details__slider__item">
                                <img src="/img/details_slider_img.jpg" alt="Slide" />
                            </div>

                            <div className="details__slider__item">
                                <img src="/img/details_slider_img.jpg" alt="Slide" />
                            </div>

                            <div className="details__slider__item">
                                <img src="/img/details_slider_img.jpg" alt="Slide" />
                            </div>

                            <div className="details__slider__item">
                                <img src="/img/details_slider_img.jpg" alt="Slide" />
                            </div>

                            <div className="details__slider__item">
                                <img src="/img/details_slider_img.jpg" alt="Slide" />
                            </div>

                            <div className="details__slider__item">
                                <img src="/img/details_slider_img.jpg" alt="Slide" />
                            </div>
                        </Slider>

                        <div className="details__slider__arrows">
                            <NavLink to="#" className="details__slider__arrow details__slider__arrow--left" />
                            <NavLink to="#" className="details__slider__arrow details__slider__arrow--right" />
                        </div>
                    </div>

                    <div className="details__place">
                        <div className="details__place__title" data-number={this.props.match.params.gameID}>
                            <p>Kudy na hřiště ?</p>
                        </div>

                        <div className="details__place__layout">
                            <div className="details__place__text">
                                <p className="details__place__text__title">Adresa:</p>
                                <p>Areál nemá přesnou adresu. Nalézá se v lese za obcí Bratronice směr Nižbor ve Středočeském kraji.</p>
                                <p className="details__place__text__title">GPS:</p>
                                <p>50.058758, 14.011036</p>
                            </div>

                            <div className="details__place__map">
                                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d10239.612136820377!2d14.4762!3d50.0881023!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2scz!4v1508318137768" frameBorder="0" />
                            </div>
                        </div>

                        <div className="details__place__table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Auto</th>
                                        <th>MHD</th>
                                        <th>Taxi</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>
                                            <p>Bezplatné parkoviště přímo v areálu (kapacita cca 70 automobilů)</p>
                                            <NavLink to="#">Navigovat</NavLink>
                                        </td>
                                        <td>
                                            <p>Z důvodů delších časových intervalů MHD doporučejeme zajistit si dopravu osobním automobilem.</p>
                                            <NavLink to="#">
                                                <span>Bratronice, obecní úřad</span>
                                                <span>20min (1500m)</span>
                                            </NavLink>
                                        </td>
                                        <td>
                                            <p>Po předchozí domluvě vám zařídíme
                                                dopravu odkudkoli za pevnou, předem určenou cenu.
                                                <span>Orientační garantované ceny z centra Prahy:</span>
                                            </p>

                                            <dl>
                                                <dt>4 osoby</dt>
                                                <dd>900 Kč za jednu cestu</dd>
                                                <dt>8 osob</dt>
                                                <dd>1350 Kč za jednu cestu</dd>
                                            </dl>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <Choose />
            </div>
        )
    }
}

export default Details;