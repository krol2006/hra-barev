import React, { Component } from 'react';
import Select from 'react-styled-select';
import NumericInput from 'react-numeric-input';
import { NavLink } from 'react-router-dom';

class Steps extends Component {
    constructor(){
        super();

        this.state = {
            step: 1
        };

        this.setStep.bind(this);
    }

    setStep(num){
        this.setState({
            step: num
        });
    }

    render(){
        const classes = {
            selectArrow: 'steps__select__arrow',
            selectPlaceholder: 'steps__select__placeholder',
            selectControl: 'steps__select__control',
            selectArrowZone: 'steps__select__arrow__zone'
        };

        return (
            <div className="steps">
                <div className="container">
                    <div className="steps__layout">
                        <div className="steps__tabs">
                            <ul className="steps__tabs__list">
                                <li className={ this.state.step === 1 ? 'steps__tabs__item steps__tabs__item--active' : 'steps__tabs__item' } >
                                    <NavLink to="#" data-step="1" onClick={ () => this.setStep(1) }>Hřiště, termín a typ hry</NavLink>
                                </li>

                                <li className={ this.state.step === 2 ? 'steps__tabs__item steps__tabs__item--active' : 'steps__tabs__item' }>
                                    <NavLink to="#" data-step="2" onClick={ () => this.setStep(2) }>Počet hráčů</NavLink>
                                </li>

                                <li className={ this.state.step === 3 ? 'steps__tabs__item steps__tabs__item--active' : 'steps__tabs__item' }>
                                    <NavLink to="#" data-step="3" onClick={ () => this.setStep(3) }>Kontaktní údaje</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className={ this.state.step === 1 ? 'steps__content visible' : 'steps__content' } >
                            <div className="steps--left">
                                <div className="steps__checkbox-group">
                                    <div className="steps__checkbox-group__item">
                                        <input type="checkbox" id="reserve" />
                                        <label htmlFor="reserve">Závazná rezervace</label>
                                    </div>

                                    <div className="steps__checkbox-group__item">
                                        <input type="checkbox" id="reserve2" />
                                        <label htmlFor="reserve2">Nezávazná rezervace</label>
                                    </div>
                                </div>

                                <div className="steps__localization">
                                    <p className="steps__title">Lokalita:</p>
                                    <Select
                                        className="steps__select"
                                        options={[
                                        { label: "One", value: "Raketová základna Bratonice"},
                                        { label: "Two", value: "Raketová základna Bratonice"}
                                    ]}
                                        classes={classes}
                                    />
                                </div>

                                <div className="steps__date">
                                    <p className="steps__title">Termín:</p>
                                    <input type="text" id="date" placeholder="dd.mm.rrrr" />
                                </div>

                                <div className="steps__time">
                                    <p className="steps__title">Hodina:</p>
                                    <span>od</span>
                                    <input type="text" id="time" placeholder="hh:mm" />
                                    <span>do</span>
                                    <input type="text" id="time2" placeholder="hh:mm" />
                                    <p className="steps__time__hint">(doporučená délka rezervace <span>3 až 5</span> hodin)</p>
                                </div>

                                <div className="steps__checkbox-list">
                                    <p className="steps__title">Druh hry:</p>

                                    <div className="steps__checkbox-list__item steps__checkbox-list__item--locked">
                                        <input type="checkbox" id="private" />
                                        <label htmlFor="private">soukromá hra<span>(hra pro uzavřený okruh hráčů: kamarády, firemní kolektiv atp.)</span></label>
                                    </div>

                                    <div className="steps__checkbox-list__item steps__checkbox-list__item--unlocked">
                                        <input type="checkbox" id="public" />
                                        <label htmlFor="public">veřejná hra<span>(hra otevřená veřejnosti, do poznámky můžete uvést omezení jako např. věk, pořet hráčů, zda má být hra přístipná jen hráčům bez vlastního vybavení atd...)</span></label>
                                    </div>
                                </div>
                            </div>

                            <div className="steps--right">
                                <div className="steps__image">
                                    <img src="/img/steps_img.jpg" alt="Step" />

                                    <div className="steps__image__text">
                                        <p>Praha - centrum<br />1 000 m<sup>2</sup></p>
                                    </div>

                                    <div className="steps__image__icons">
                                        <i className="steps__image__icon--food" />
                                        <i className="steps__image__icon--wc" />
                                        <i className="steps__image__icon--wifi" />
                                        <i className="steps__image__icon--parking" />
                                        <i className="steps__image__icon--bus reservation__image__icon--inactive" />
                                        <i className="steps__image__icon--temperature" />
                                        <i className="steps__image__icon--light" />
                                    </div>
                                </div>

                                <div className="steps__textfield">
                                    <p className="steps__title">Poznámka:</p>

                                    <textarea placeholder="Zde můžete poznamenat cokoliv k hřišti, termínu či druhu hry." />
                                </div>

                                <div className="steps__buttons">
                                    <NavLink to="#">Pokračovat >></NavLink>
                                </div>
                            </div>
                        </div>

                        <div className={ this.state.step === 2 ? 'steps__content visible' : 'steps__content' } >
                            <div className="steps__panel">
                                <p className="steps__panel__item">Lokalita:<span>Raketová základna Bratonice, Střední Čechy</span></p>
                                <p className="steps__panel__item">Datum:<span>12.5.2017</span></p>
                                <p className="steps__panel__item">Čas:<span>od 12:00 do16:00</span></p>
                                <p className="steps__panel__item">Druh:<span>Soukromá hra</span></p>
                            </div>

                            <div className="steps--left">
                                <div className="steps__count">
                                    <p className="steps__title">Odhadovaný počet hráčů,<br />pro které provádíte rezervaci :</p>

                                    <div className="steps__count__list">
                                        <div className="steps__count__item">
                                            <p>Počet hráčů bez vlastního paintbalového vybavení:</p>

                                            <NumericInput className="steps__count__input" min={0} max={100} value={5} />
                                        </div>

                                        <div className="steps__count__item">
                                            <p>Počet hráčů bez vlastního paintbalového vybavení:</p>

                                            <NumericInput className="steps__count__input" min={0} max={100} value={10} />
                                        </div>

                                        <div className="steps__count__item">
                                            <p>Počet hráčů bez vlastního paintbalového vybavení:</p>

                                            <NumericInput className="steps__count__input steps__count__input--disabled" min={0} max={100} value={15} />
                                        </div>
                                    </div>
                                </div>

                                <div className="steps__buttons">
                                    <NavLink to="#">{"<< Upravit údaje"}</NavLink>
                                </div>
                            </div>

                            <div className="steps--right">
                                <div className="steps__textfield">
                                    <p className="steps__title">Doprava:</p>

                                    <div className="steps__checkbox-list">
                                        <div className="steps__checkbox-list__item">
                                            <input type="checkbox" id="vlastni" />
                                            <label htmlFor="vlastni">vlastní doprava / dopravíme se sami</label>
                                        </div>

                                        <div className="steps__checkbox-list__item">
                                            <input type="checkbox" id="public2" />
                                            <label htmlFor="public2">potřebujem zajistit / využijeme vaši*<span>*v případě zaškrtnutí políčka "potřebujeme zajistit" vás budeme kontaktovat</span></label>
                                        </div>
                                    </div>

                                    <p className="steps__title">Poznámka:</p>

                                    <textarea placeholder="Zde můžete poznamenat cokoliv k hřišti, termínu či druhu hry." />
                                </div>

                                <div className="steps__buttons">
                                    <NavLink to="#">Pokračovat >></NavLink>
                                </div>
                            </div>
                        </div>

                        <div className={ this.state.step === 3 ? 'steps__content visible' : 'steps__content' } >
                            <div className="steps__panel">
                                <p className="steps__panel__item">Lokalita:<span>Raketová základna Bratonice, Střední Čechy</span></p>
                                <p className="steps__panel__item">Datum:<span>12.5.2017</span></p>
                                <p className="steps__panel__item">Čas:<span>od 12:00 do16:00</span></p>
                                <p className="steps__panel__item">Druh:<span>Soukromá hra</span></p>
                                <p className="steps__panel__item">Hráči bez vybavení:<span>10</span></p>
                                <p className="steps__panel__item">Hráči s vybavením:<span>5</span></p>
                                <p className="steps__panel__item">Doprava:<span>vlastní doprava / dopravíme se sami</span></p>
                            </div>

                            <div className="steps--left">
                                <div className="steps__details">
                                    <p className="steps__title">Vaše údaje:</p>
                                    <p className="steps__subtitle">Můžete předvyplnit i tak, že se přihlásíte ke svému <NavLink to="#">uživatelskému účtu >></NavLink></p>

                                    <form method="post" action="#" className="form form--steps">
                                        <div className="form__input">
                                            <label htmlFor="name">Jméno*</label>
                                            <input type="text" id="name" />
                                        </div>

                                        <div className="form__input">
                                            <label htmlFor="surname">Příjmení*</label>
                                            <input type="text" id="surname" />
                                        </div>

                                        <div className="form__input">
                                            <label htmlFor="phone">Telefon*</label>
                                            <input type="tel" id="phone" />
                                        </div>

                                        <div className="form__input">
                                            <label htmlFor="email2">Email*</label>
                                            <input type="email" id="email2" />
                                        </div>

                                        <div className="form__hint">
                                            <p>*Povinná pole</p>
                                        </div>
                                    </form>
                                </div>

                                <div className="steps__buttons">
                                    <NavLink to="#">{"<< Upravit údaje"}</NavLink>
                                </div>
                            </div>

                            <div className="steps--right">
                                <div className="steps__textfield">
                                    <p className="steps__title" style={{ 'marginBottom':'65px' }}>Zadat <NavLink to="#">{"fakturační údaje >>"}</NavLink></p>

                                    <p className="steps__title">Poznámka:</p>

                                    <textarea style={{ 'height':'160px' }} placeholder="Zde můžete poznamenat cokoliv k vaší akci, vyplňte zde slevový kódy, číslo dárkového poukazu či číslo vstupenky, kterou chcete uplatnit. Pokud od nás chcete zajistit jakékoliv nadstandardní / doplňkové služby, dejte nám o tom zde vědět." />

                                    <div className="steps__checkbox-list">
                                        <div className="steps__checkbox-list__item">
                                            <input type="checkbox" id="terms" />
                                            <label htmlFor="terms">Souhlasím s <NavLink to="#">obchodními podmínkami</NavLink></label>
                                        </div>
                                    </div>
                                </div>

                                <div className="steps__buttons">
                                    <NavLink to="#">Odeslat rezervaci >></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Steps;