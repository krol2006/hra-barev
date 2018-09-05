import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome';
import Choose from '../Choose/Choose';
import { NavLink } from 'react-router-dom';

class Services extends Component {
    render() {
        return (
            <div>
                <Welcome title="Služby" text="Uděláme vše co Vám na hledí uvidíme." scroller={true} scrollLink="services"/>

                <div className="services" id="services">
                    <div className="services__list">
                        <div className="services__item services__item--left">
                            <div className="container">
                                <div className="services__item__layout">
                                    <div className="services__item__image">
                                        <img src="img/services_img.png" alt="Service" />
                                    </div>

                                    <div className="services__item__content">
                                        <div className="services__item__title">
                                            <NavLink to="/private">Soukromé hry</NavLink>
                                        </div>

                                        <div className="services__item__text">
                                            <p>Máte za lubem akci, která bude skutečně akční? U nás rozstřílíte nudu na kousíčky. Rádi pro vás připravíme privátní střílečku, na kterou budete dlouho a nadšeně vzpomínat.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="services__item services__item--right">
                            <div className="container">
                                <div className="services__item__layout">
                                    <div className="services__item__image">
                                        <img src="img/services_img2.png" alt="Service" />
                                    </div>

                                    <div className="services__item__content">
                                        <div className="services__item__title">
                                            <p>Veřejné hry hry</p>
                                        </div>

                                        <div className="services__item__text">
                                            <p>Vytáhnout lidi ven je čím dál složitější mise. Opravdový hráč se ale nikdy nevzdává! Nechte shánění hráčů na nás a zůčastněte se některé naší veřejné hry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="services__item services__item--left">
                            <div className="container">
                                <div className="services__item__layout">
                                    <div className="services__item__image">
                                        <img src="img/services_img3.png" alt="Service" />
                                    </div>

                                    <div className="services__item__content">
                                        <div className="services__item__title">
                                            <NavLink to="/gifts">Dárkové poukazy</NavLink>
                                        </div>

                                        <div className="services__item__text">
                                            <p>Chcete někoho potěšit originálním dárkem? Gratulujeme k trefě do černého! Málokterá aktivita totiž baví tak široké spektrum lidí jako paintball.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="services__item services__item--right">
                            <div className="container">
                                <div className="services__item__layout">
                                    <div className="services__item__image">
                                        <img src="img/services_img4.png" alt="Service" />
                                    </div>

                                    <div className="services__item__content">
                                        <div className="services__item__title">
                                            <NavLink to="/services-additional">Doplňkové služby</NavLink>
                                        </div>

                                        <div className="services__item__text">
                                            <p>Prázdným zásobníkem to nekonči! Pokud máte zájem, rádi pro vás zajistíme mnohem víc. Od rautu po kurz první pomoci. Přesvěčte se! Pokud nenajdete to co hledáte, řekněte si. Výzvy milujeme!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Choose />
            </div>
        )
    }
}

export default Services;
