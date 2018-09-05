import React, { Component } from 'react';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';

class Types extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                }
            ]
        };

        return (
            <div className="types" id="types">
                <div className="container">
                    {this.props.slider &&
                    <Slider {...settings}>
                        <div className="types__item">
                            <div className="types__title">
                                <p>Firemní akce</p>
                            </div>

                            <div className="types__image">
                                <img src="img/types_img4.png" alt="Type"/>
                            </div>

                            <div className="types__text">
                                <p>Spolupráce, strategie a hlavně zábava pro všechny od recepce po velín. To je teambuilding u nás!</p>
                            </div>

                            <div className="types__links">
                                <NavLink to="/corporate">Zobrazit vice >></NavLink>
                            </div>
                        </div>

                        <div className="types__item">
                            <div className="types__title">
                                <p>Školní akce</p>
                            </div>

                            <div className="types__image">
                                <img src="img/types_img5.png" alt="Type"/>
                            </div>

                            <div className="types__text">
                                <p>Říkají vám učitelé, že jste střelení? Mají to mít. Paintball pro školy za akčních 99,- Kč / osoba.</p>
                            </div>

                            <div className="types__links">
                                <NavLink to="/school">Zobrazit vice >></NavLink>
                            </div>
                        </div>

                        <div className="types__item">
                            <div className="types__title">
                                <p>Rozlučky se svobodou</p>
                            </div>

                            <div className="types__image">
                                <img src="img/types_img6.png" alt="Type"/>
                            </div>

                            <div className="types__text">
                                <p>Rozlučka se svobodou by měla být jen jedna. Tak ať je neopakovatelná!</p>
                            </div>

                            <div className="types__links">
                                <NavLink to="#">Zobrazit vice >></NavLink>
                            </div>
                        </div>

                        <div className="types__item">
                            <div className="types__title">
                                <p>Firemní akce</p>
                            </div>

                            <div className="types__image">
                                <img src="img/types_img4.png" alt="Type"/>
                            </div>

                            <div className="types__text">
                                <p>Spolupráce, strategie a hlavně zábava pro všechny od recepce po velín. To je teambuilding u nás!</p>
                            </div>

                            <div className="types__links">
                                <NavLink to="/corporate">Zobrazit vice >></NavLink>
                            </div>
                        </div>

                        <div className="types__item">
                            <div className="types__title">
                                <p>Školní akce</p>
                            </div>

                            <div className="types__image">
                                <img src="img/types_img5.png" alt="Type"/>
                            </div>

                            <div className="types__text">
                                <p>Říkají vám učitelé, že jste střelení? Mají to mít. Paintball pro školy za akčních 99,- Kč / osoba.</p>
                            </div>

                            <div className="types__links">
                                <NavLink to="/school">Zobrazit vice >></NavLink>
                            </div>
                        </div>

                        <div className="types__item">
                            <div className="types__title">
                                <p>Rozlučky se svobodou</p>
                            </div>

                            <div className="types__image">
                                <img src="img/types_img6.png" alt="Type"/>
                            </div>

                            <div className="types__text">
                                <p>Rozlučka se svobodou by měla být jen jedna. Tak ať je neopakovatelná!</p>
                            </div>

                            <div className="types__links">
                                <NavLink to="#">Zobrazit vice >></NavLink>
                            </div>
                        </div>

                        <div className="types__item">
                            <div className="types__title">
                                <p>Firemní akce</p>
                            </div>

                            <div className="types__image">
                                <img src="img/types_img4.png" alt="Type"/>
                            </div>

                            <div className="types__text">
                                <p>Spolupráce, strategie a hlavně zábava pro všechny od recepce po velín. To je teambuilding u nás!</p>
                            </div>

                            <div className="types__links">
                                <NavLink to="/corporate">Zobrazit vice >></NavLink>
                            </div>
                        </div>

                        <div className="types__item">
                            <div className="types__title">
                                <p>Školní akce</p>
                            </div>

                            <div className="types__image">
                                <img src="img/types_img5.png" alt="Type"/>
                            </div>

                            <div className="types__text">
                                <p>Říkají vám učitelé, že jste střelení? Mají to mít. Paintball pro školy za akčních 99,- Kč / osoba.</p>
                            </div>

                            <div className="types__links">
                                <NavLink to="/school">Zobrazit vice >></NavLink>
                            </div>
                        </div>

                        <div className="types__item">
                            <div className="types__title">
                                <p>Rozlučky se svobodou</p>
                            </div>

                            <div className="types__image">
                                <img src="img/types_img6.png" alt="Type"/>
                            </div>

                            <div className="types__text">
                                <p>Rozlučka se svobodou by měla být jen jedna. Tak ať je neopakovatelná!</p>
                            </div>

                            <div className="types__links">
                                <NavLink to="#">Zobrazit vice >></NavLink>
                            </div>
                        </div>

                        <div className="types__item">
                            <div className="types__title">
                                <p>Firemní akce</p>
                            </div>

                            <div className="types__image">
                                <img src="img/types_img4.png" alt="Type"/>
                            </div>

                            <div className="types__text">
                                <p>Spolupráce, strategie a hlavně zábava pro všechny od recepce po velín. To je teambuilding u nás!</p>
                            </div>

                            <div className="types__links">
                                <NavLink to="/corporate">Zobrazit vice >></NavLink>
                            </div>
                        </div>

                        <div className="types__item">
                            <div className="types__title">
                                <p>Školní akce</p>
                            </div>

                            <div className="types__image">
                                <img src="img/types_img5.png" alt="Type"/>
                            </div>

                            <div className="types__text">
                                <p>Říkají vám učitelé, že jste střelení? Mají to mít. Paintball pro školy za akčních 99,- Kč / osoba.</p>
                            </div>

                            <div className="types__links">
                                <NavLink to="/school">Zobrazit vice >></NavLink>
                            </div>
                        </div>

                        <div className="types__item">
                            <div className="types__title">
                                <p>Rozlučky se svobodou</p>
                            </div>

                            <div className="types__image">
                                <img src="img/types_img6.png" alt="Type"/>
                            </div>

                            <div className="types__text">
                                <p>Rozlučka se svobodou by měla být jen jedna. Tak ať je neopakovatelná!</p>
                            </div>

                            <div className="types__links">
                                <NavLink to="#">Zobrazit vice >></NavLink>
                            </div>
                        </div>
                    </Slider>
                    }

                    { !this.props.slider &&
                    <div className="types__list">
                        <div className="types__item">
                            <div className="types__title">
                                <p>Varejne hry</p>
                            </div>

                            <div className="types__image">
                                <img src="img/types_img.png" alt="Type"/>
                            </div>

                            <div className="types__text">
                                <p>Klidne prihedte sami a shaneni spoluhracu nechte na nas.</p>
                            </div>

                            <div className="types__links">
                                <NavLink to="/public">Zobrazit vice >></NavLink>
                            </div>
                        </div>

                        <div className="types__item">
                            <div className="types__title">
                                <p>Soukromé hry</p>
                            </div>

                            <div className="types__image">
                                <img src="img/types_img2.png" alt="Type"/>
                            </div>

                            <div className="types__text">
                                <p>Vaše akce zůstane jen vaše, aneb cizáky k vám nevpustíme.</p>
                            </div>

                            <div className="types__links">
                                <NavLink to="/private">Zobrazit vice >></NavLink>
                            </div>
                        </div>

                        <div className="types__item">
                            <div className="types__title">
                                <p>Dárkové poukazy</p>
                            </div>

                            <div className="types__image">
                                <img src="img/types_img3.png" alt="Type"/>
                            </div>

                            <div className="types__text">
                                <p>Dárek, kterým
                                    potěšíte každého kdo má
                                    rád nevšední zážitky.</p>
                            </div>

                            <div className="types__links">
                                <NavLink to="/gifts">Zobrazit vice >></NavLink>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default Types;
