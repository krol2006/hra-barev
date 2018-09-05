import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome';
import Filter from '../Filter/Filter';
import Select from 'react-styled-select';
import { NavLink } from 'react-router-dom';

class Calendar extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    };

    render() {
        const classes = {
            selectArrow: 'calendar__pagination__select__arrow',
            selectPlaceholder: 'calendar__pagination__select__placeholder',
            selectControl: 'calendar__pagination__select__control',
            selectArrowZone: 'calendar__pagination__select__arrow__zone'
        };

        return (
            <div>
                <Welcome title="Kalendář veřejných akcí" text="Nedaří se vám sehnat dostatek hráčů? Přijďte na veřejnou hru, a ostatní už nechte na nás!"/>

                <div className="calendar">
                    <div className="container">
                        <Filter />

                        <div className="calendar__list">
                            <div className="calendar__item">
                                <div className="calendar__item__title">
                                    <p>Big Game - Kasárna Hájek</p>
                                </div>

                                <div className="calendar__item__layout">
                                    <div className="calendar__item__date">
                                        <p>3/6/17<span>sobota</span></p>
                                    </div>

                                    <ul className="calendar__item__list">
                                        <li className="calendar__item__list__item">
                                            <span>Místo:</span>
                                            <span>Kasarny Hajek</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Čas akce:</span>
                                            <span>od 13:00 do 17:00</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Registrace:</span>
                                            <span>od 12:30 do 12:45</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Vstupné:</span>
                                            <span>249 Kč / osoba</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Munice:</span>
                                            <span>1 Kč / ks</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Kategorie:</span>
                                            <span>Pro začátečníky</span>
                                        </li>
                                    </ul>

                                    <div className="calendar__item__buttons">
                                        <NavLink to="#">Více informací >></NavLink>
                                        <NavLink to="#">Přihlásit se >></NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="calendar__item">
                                <div className="calendar__item__title">
                                    <p>Big Game - Kasárna Hájek</p>
                                </div>

                                <div className="calendar__item__layout">
                                    <div className="calendar__item__date">
                                        <p>3/6/17<span>sobota</span></p>
                                    </div>

                                    <ul className="calendar__item__list">
                                        <li className="calendar__item__list__item">
                                            <span>Místo:</span>
                                            <span>Kasarny Hajek</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Čas akce:</span>
                                            <span>od 13:00 do 17:00</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Registrace:</span>
                                            <span>od 12:30 do 12:45</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Vstupné:</span>
                                            <span>249 Kč / osoba</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Munice:</span>
                                            <span>1 Kč / ks</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Kategorie:</span>
                                            <span>Pro začátečníky</span>
                                        </li>
                                    </ul>

                                    <div className="calendar__item__buttons">
                                        <NavLink to="#">Více informací >></NavLink>
                                        <NavLink to="#">Přihlásit se >></NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="calendar__item">
                                <div className="calendar__item__title calendar__item__title--yellow">
                                    <p>Big Game - Kasárna Hájek</p>
                                </div>

                                <div className="calendar__item__layout">
                                    <div className="calendar__item__date">
                                        <p>3/6/17<span>sobota</span></p>
                                    </div>

                                    <ul className="calendar__item__list">
                                        <li className="calendar__item__list__item">
                                            <span>Místo:</span>
                                            <span>Kasarny Hajek</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Čas akce:</span>
                                            <span>od 13:00 do 17:00</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Registrace:</span>
                                            <span>od 12:30 do 12:45</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Vstupné:</span>
                                            <span>249 Kč / osoba</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Munice:</span>
                                            <span>1 Kč / ks</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Kategorie:</span>
                                            <span>Pro začátečníky</span>
                                        </li>
                                    </ul>

                                    <div className="calendar__item__buttons">
                                        <NavLink to="#">Více informací >></NavLink>
                                        <NavLink to="#">Přihlásit se >></NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="calendar__item">
                                <div className="calendar__item__title calendar__item__title--red">
                                    <p>Big Game - Kasárna Hájek</p>
                                </div>

                                <div className="calendar__item__layout">
                                    <div className="calendar__item__date">
                                        <p>3/6/17<span>sobota</span></p>
                                    </div>

                                    <ul className="calendar__item__list">
                                        <li className="calendar__item__list__item">
                                            <span>Místo:</span>
                                            <span>Kasarny Hajek</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Čas akce:</span>
                                            <span>od 13:00 do 17:00</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Registrace:</span>
                                            <span>od 12:30 do 12:45</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Vstupné:</span>
                                            <span>249 Kč / osoba</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Munice:</span>
                                            <span>1 Kč / ks</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Kategorie:</span>
                                            <span>Pro začátečníky</span>
                                        </li>
                                    </ul>

                                    <div className="calendar__item__buttons">
                                        <NavLink to="#">Více informací >></NavLink>
                                        <NavLink to="#">Přihlásit se >></NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="calendar__item">
                                <div className="calendar__item__title calendar__item__title--yellow">
                                    <p>Big Game - Kasárna Hájek</p>
                                </div>

                                <div className="calendar__item__layout">
                                    <div className="calendar__item__date">
                                        <p>3/6/17<span>sobota</span></p>
                                    </div>

                                    <ul className="calendar__item__list">
                                        <li className="calendar__item__list__item">
                                            <span>Místo:</span>
                                            <span>Kasarny Hajek</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Čas akce:</span>
                                            <span>od 13:00 do 17:00</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Registrace:</span>
                                            <span>od 12:30 do 12:45</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Vstupné:</span>
                                            <span>249 Kč / osoba</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Munice:</span>
                                            <span>1 Kč / ks</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Kategorie:</span>
                                            <span>Pro začátečníky</span>
                                        </li>
                                    </ul>

                                    <div className="calendar__item__buttons">
                                        <NavLink to="#">Více informací >></NavLink>
                                        <NavLink to="#">Přihlásit se >></NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="calendar__item">
                                <div className="calendar__item__title calendar__item__title--red">
                                    <p>Big Game - Kasárna Hájek</p>
                                </div>

                                <div className="calendar__item__layout">
                                    <div className="calendar__item__date">
                                        <p>3/6/17<span>sobota</span></p>
                                    </div>

                                    <ul className="calendar__item__list">
                                        <li className="calendar__item__list__item">
                                            <span>Místo:</span>
                                            <span>Kasarny Hajek</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Čas akce:</span>
                                            <span>od 13:00 do 17:00</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Registrace:</span>
                                            <span>od 12:30 do 12:45</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Vstupné:</span>
                                            <span>249 Kč / osoba</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Munice:</span>
                                            <span>1 Kč / ks</span>
                                        </li>

                                        <li className="calendar__item__list__item">
                                            <span>Kategorie:</span>
                                            <span>Pro začátečníky</span>
                                        </li>
                                    </ul>

                                    <div className="calendar__item__buttons">
                                        <NavLink to="#">Více informací >></NavLink>
                                        <NavLink to="#">Přihlásit se >></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="calendar__panel">
                            <div className='calendar__pages'>
                                <p>1-10 ze 100 položek</p>
                            </div>

                            <div className="calendar__pagination">
                                <p className="calendar__pagination__text">Počet položek na stránku</p>

                                <Select
                                    className="calendar__pagination__select"
                                    placeholder="10"
                                    classes={ classes }
                                />

                                <ul className="calendar__pagination__list">
                                    <li className="calendar__pagination__item calendar__pagination__item--first">
                                        <NavLink to="#" />
                                    </li>
                                    <li className="calendar__pagination__item calendar__pagination__item--prev">
                                        <NavLink to="#" />
                                    </li>
                                    <li className="calendar__pagination__item">
                                        <NavLink to="#">1</NavLink>
                                    </li>
                                    <li className="calendar__pagination__item calendar__pagination__item--active">
                                        <NavLink to="#">2</NavLink>
                                    </li>
                                    <li className="calendar__pagination__item">
                                        <NavLink to="#">3</NavLink>
                                    </li>
                                    <li className="calendar__pagination__item calendar__pagination__item--next">
                                        <NavLink to="#" />
                                    </li>
                                    <li className="calendar__pagination__item calendar__pagination__item--last">
                                        <NavLink to="#" />
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="calendar__text">
                            <p>VEŘEJNÉ AKCE AKTUALIZUJEME A PŘIDÁVÁME PRŮBĚŽNĚ</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calendar;
