import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Voucher from '../Voucher/Voucher';
import Comments from '../Comments/Comments';

class Action extends Component {
    constructor(){
        super();

        this.state = {
            textExpanded: false
        };

        this.toggleText.bind(this);
    }

    toggleText(){
        this.setState({
            textExpanded: !this.state.textExpanded
        });
    }

    render(){
        return (
            <div className="action">
                <div className="container">
                    <div className="action__layout">
                        <div className="action__title" data-date="3/12/17">
                            <p>Big Game - Kasárna Hájek</p>
                        </div>

                        <div className="action__content">
                            <div className="action--left">
                                <div className="action__block">
                                    <ul className="action__list">
                                        <li className="action__list__item">
                                            <span>Místo:</span>
                                            <span><NavLink to="#">Kasarny Hajek >></NavLink></span>
                                        </li>
                                        <li className="action__list__item">
                                            <span>Čas akce:</span>
                                            <span>od 13:00 do 17:00</span>
                                        </li>
                                        <li className="action__list__item">
                                            <span>Registrace:</span>
                                            <span>od 12:30 do 12:45</span>
                                        </li>
                                        <li className="action__list__item">
                                            <span>Kategorie:</span>
                                            <span>Pro začátečníky</span>
                                        </li>
                                        <li className="action__list__item">
                                            <span>Hru vytvořil / rezervoval:</span>
                                            <span>Jméno Příjmení</span>
                                        </li>
                                        <li className="action__list__item">
                                            <span>Akce rezervována pro:</span>
                                            <span>60</span>
                                        </li>
                                        <li className="action__list__item">
                                            <span>Doprava:</span>
                                            <span>Bus č. 306</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="action__block">
                                    <div className="action__prices">
                                        <div className="action__prices__list">
                                            <div className="action__prices__item action__prices__item--primary">
                                                <p>Cena vstupného na místě:</p>
                                                <p>149 Kč</p>
                                            </div>

                                            <div className="action__prices__item action__prices__item--secondary">
                                                <p>Cena munice:</p>
                                                <p>1 Kč<span>/ks</span></p>
                                            </div>
                                        </div>

                                        <div className="action__prices__info">
                                            <p>Ostatní ceny, dle ceníku (není li uvedeno jinak)</p>
                                            <NavLink to="/prices">Ceník >></NavLink>
                                        </div>

                                        <div className="action__note action__note--dark">
                                            <p>Poznámky k ceníku:</p>
                                            <p>Máte větší partu? Zvolte unikátní prostor bývalé raketové základny v působivé divočině CHKO Křivoklátsko. Hrát budete na ploše tří Václaváků.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="action--right">
                                <div className="action__block">
                                    <div className="action__image">
                                        <img src="/img/action_img.jpg" alt="Action" />
                                        <NavLink to="#">Přihlásit se na akci >></NavLink>
                                    </div>
                                </div>

                                <div className="action__block">
                                    <ul className="action__list">
                                        <li className="action__list__item">
                                            <span>ID akce:</span>
                                            <span><NavLink to="#">2543</NavLink></span>
                                        </li>
                                        <li className="action__list__item">
                                            <span>PIN akce:</span>
                                            <span>veřejná / bez přístupového pinu</span>
                                        </li>
                                        <li className="action__list__item">
                                            <span>Odkaz po sdílení akce:</span>
                                            <span>www....</span>
                                        </li>
                                    </ul>

                                    <div className="action__note">
                                        <p>Poznámka k akci:</p>
                                        <p>Máte větší partu? Zvolte unikátní prostor bývalé raketové základny v působivé divočině CHKO Křivoklátsko. Hrát budete na ploše tří Václaváků.</p>
                                    </div>

                                    <div className="action__links">
                                        <NavLink to="#">Dotaz k akci >></NavLink>
                                        <NavLink to="#">Pozvat přátelé</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="action__text">
                            <div className={ this.state.textExpanded ? 'action__text__layout expanded' : 'action__text__layout'} >
                                <p>Máte větší partu? Zvolte unikátní prostor bývalé raketové základny v působivé divočině CHKO Křivoklátsko. Hrát budete na ploše tří Václaváků - rozloha přesahuje 120 000 m2. Pozice zaujmete v některé z vojenských budov, na odpalovacích stanovištích raket nebo v jednom z podzemních bunkrů pro pěchotu i vojenskou techniku. Pokud je vás tedy dostatek - areál je primárně určen skupinám o 40 a více lidech, tedy hlavně pro větší soukromé a firemní akceMáte větší partu? Zvolte unikátní prostor bývalé raketové základny v působivé divočině CHKO Křivoklátsko. Hrát budete na ploše tří Václaváků - rozloha přesahuje 120 000 m2. Pozice zaujmete v některé z vojenských budov, na odpalovacích stanovištích raket nebo v jednom z podzemních bunkrů pro</p>
                            </div>

                            <NavLink to="#" className="action__text__expand" onClick={() => {this.toggleText()}}/>
                        </div>
                    </div>
                </div>

                <Voucher />

                <Comments />
            </div>
        )
    }
}

export default Action;