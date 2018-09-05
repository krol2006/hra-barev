import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Select from 'react-styled-select';

class Profile extends Component {
    constructor(){
        super();

        this.state = {
            activeTab: 7
        };

        this.toggleTab.bind(this);
    }

    toggleTab(tab){
        this.setState({
            activeTab: tab
        })
    }

    render(){
        const classes = {
            selectArrow: 'calendar__pagination__select__arrow',
            selectPlaceholder: 'calendar__pagination__select__placeholder',
            selectControl: 'calendar__pagination__select__control',
            selectArrowZone: 'calendar__pagination__select__arrow__zone'
        };

        return (
            <div className="profile">
                <div className="container">
                    <div className="profile__layout">
                        <div className="profile__title" data-id="ID 23235">
                            <p>Tonda Kopic</p>
                        </div>

                        <div className="profile__content">
                            <div className="profile--left">
                                <ul className="profile__tabslist">
                                    <li className={ this.state.activeTab === 1 ? 'profile__tabslist__item active' : 'profile__tabslist__item'}>
                                        <NavLink to="#" className="profile__tabslist__link" onClick={() => this.toggleTab(1)}>1. Vaše hry a fotky</NavLink>
                                    </li>
                                    <li className={ this.state.activeTab === 2 ? 'profile__tabslist__item active' : 'profile__tabslist__item'}>
                                        <NavLink to="#" className="profile__tabslist__link" onClick={() => this.toggleTab(2)}>2. Vstupenky a dárkové poukazy</NavLink>
                                    </li>
                                    <li className={ this.state.activeTab === 3 ? 'profile__tabslist__item active' : 'profile__tabslist__item'}>
                                        <NavLink to="#" className="profile__tabslist__link" onClick={() => this.toggleTab(3)}>3. Rezervace</NavLink>
                                    </li>
                                    <li className={ this.state.activeTab === 4 ? 'profile__tabslist__item active' : 'profile__tabslist__item'}>
                                        <NavLink to="#" className="profile__tabslist__link" onClick={() => this.toggleTab(4)}>4. Přihlášky</NavLink>
                                    </li>
                                    <li className="profile__tabslist__item">
                                        <NavLink to="#" className="profile__tabslist__link">5. Faktury</NavLink>
                                    </li>
                                    <li className={ this.state.activeTab === 6 ? 'profile__tabslist__item active' : 'profile__tabslist__item'}>
                                        <NavLink to="#" className="profile__tabslist__link" onClick={() => this.toggleTab(6)}>6. Osobní údaje</NavLink>
                                    </li>
                                    <li className={ this.state.activeTab === 7 ? 'profile__tabslist__item active' : 'profile__tabslist__item'}>
                                        <NavLink to="#" className="profile__tabslist__link" onClick={() => this.toggleTab(7)}>7. Změna hesla</NavLink>
                                    </li>
                                    <li className="profile__tabslist__item">
                                        <NavLink to="#" className="profile__tabslist__link">8. Košík</NavLink>
                                    </li>
                                </ul>

                                <NavLink to="#">Propojit s Facebookem</NavLink>
                            </div>

                            <div className={ this.state.activeTab === 1 ? 'profile--right active' : 'profile--right'}>
                                <div className="profile__calendar">
                                    <div className="profile__calendar__item">
                                        <div className="profile__calendar__item--left">
                                            <p>3/6/17<span>sobota</span></p>
                                        </div>

                                        <div className="profile__calendar__item--center">
                                            <ul className="profile__calendar__item__list">
                                                <li>
                                                    <span>Název:</span>
                                                    <span>Soukromá hra - Tonda Kopic</span>
                                                </li>
                                                <li>
                                                    <span>Čas hry:</span>
                                                    <span>od 10:00 do 12:00</span>
                                                </li>
                                                <li>
                                                    <span>Druh:</span>
                                                    <span>Soukromá hra</span>
                                                </li>
                                                <li>
                                                    <span>Místo:</span>
                                                    <span>Sportovní Hala Letná</span>
                                                </li>
                                                <li>
                                                    <span>Registrace:</span>
                                                    <span>od 9:30 do 9:45</span>
                                                </li>
                                                <li>
                                                    <span>Stav hry:</span>
                                                    <span>Schválená</span>
                                                </li>
                                            </ul>

                                            <p>
                                                <span>Stav přihlášky / uživatele:</span>
                                                <span>Organizátor</span>
                                            </p>
                                        </div>

                                        <div className="profile__calendar__item--right">
                                            <NavLink to="#">Detail hry/akce >></NavLink>
                                            <NavLink to="#">Foto ze hry/akce >></NavLink>
                                        </div>
                                    </div>

                                    <div className="profile__calendar__item">
                                        <div className="profile__calendar__item--left">
                                            <p>3/6/17<span>sobota</span></p>
                                        </div>

                                        <div className="profile__calendar__item--center">
                                            <ul className="profile__calendar__item__list">
                                                <li>
                                                    <span>Název:</span>
                                                    <span>Soukromá hra - Tonda Kopic</span>
                                                </li>
                                                <li>
                                                    <span>Čas hry:</span>
                                                    <span>od 10:00 do 12:00</span>
                                                </li>
                                                <li>
                                                    <span>Druh:</span>
                                                    <span>Soukromá hra</span>
                                                </li>
                                                <li>
                                                    <span>Místo:</span>
                                                    <span>Sportovní Hala Letná</span>
                                                </li>
                                                <li>
                                                    <span>Registrace:</span>
                                                    <span>od 9:30 do 9:45</span>
                                                </li>
                                                <li>
                                                    <span>Stav hry:</span>
                                                    <span>Schválená</span>
                                                </li>
                                            </ul>

                                            <p>
                                                <span>Stav přihlášky / uživatele:</span>
                                                <span>Organizátor</span>
                                            </p>
                                        </div>

                                        <div className="profile__calendar__item--right">
                                            <NavLink to="#">Detail hry/akce >></NavLink>
                                            <NavLink to="#">Foto ze hry/akce >></NavLink>
                                        </div>
                                    </div>

                                    <div className="profile__calendar__item">
                                        <div className="profile__calendar__item--left">
                                            <p>3/6/17<span>sobota</span></p>
                                        </div>

                                        <div className="profile__calendar__item--center">
                                            <ul className="profile__calendar__item__list">
                                                <li>
                                                    <span>Název:</span>
                                                    <span>Soukromá hra - Tonda Kopic</span>
                                                </li>
                                                <li>
                                                    <span>Čas hry:</span>
                                                    <span>od 10:00 do 12:00</span>
                                                </li>
                                                <li>
                                                    <span>Druh:</span>
                                                    <span>Soukromá hra</span>
                                                </li>
                                                <li>
                                                    <span>Místo:</span>
                                                    <span>Sportovní Hala Letná</span>
                                                </li>
                                                <li>
                                                    <span>Registrace:</span>
                                                    <span>od 9:30 do 9:45</span>
                                                </li>
                                                <li>
                                                    <span>Stav hry:</span>
                                                    <span>Schválená</span>
                                                </li>
                                            </ul>

                                            <p>
                                                <span>Stav přihlášky / uživatele:</span>
                                                <span>Organizátor</span>
                                            </p>
                                        </div>

                                        <div className="profile__calendar__item--right">
                                            <NavLink to="#">Detail hry/akce >></NavLink>
                                            <NavLink to="#">Foto ze hry/akce >></NavLink>
                                        </div>
                                    </div>

                                    <div className="profile__calendar__item">
                                        <div className="profile__calendar__item--left">
                                            <p>3/6/17<span>sobota</span></p>
                                        </div>

                                        <div className="profile__calendar__item--center">
                                            <ul className="profile__calendar__item__list">
                                                <li>
                                                    <span>Název:</span>
                                                    <span>Soukromá hra - Tonda Kopic</span>
                                                </li>
                                                <li>
                                                    <span>Čas hry:</span>
                                                    <span>od 10:00 do 12:00</span>
                                                </li>
                                                <li>
                                                    <span>Druh:</span>
                                                    <span>Soukromá hra</span>
                                                </li>
                                                <li>
                                                    <span>Místo:</span>
                                                    <span>Sportovní Hala Letná</span>
                                                </li>
                                                <li>
                                                    <span>Registrace:</span>
                                                    <span>od 9:30 do 9:45</span>
                                                </li>
                                                <li>
                                                    <span>Stav hry:</span>
                                                    <span>Schválená</span>
                                                </li>
                                            </ul>

                                            <p>
                                                <span>Stav přihlášky / uživatele:</span>
                                                <span>Organizátor</span>
                                            </p>
                                        </div>

                                        <div className="profile__calendar__item--right">
                                            <NavLink to="#">Detail hry/akce >></NavLink>
                                            <NavLink to="#">Foto ze hry/akce >></NavLink>
                                        </div>
                                    </div>
                                </div>

                                <div className="calendar__panel calendar__panel--profile">
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
                            </div>

                            <div className={ this.state.activeTab === 2 ? 'profile--right active' : 'profile--right'}>
                                <div className="profile__options">
                                    <ul className="profile__options__list">
                                        <li className="profile__options__item">
                                            <NavLink to="#" className="profile__options__link profile__options__link--download">Stáhnout</NavLink>
                                        </li>
                                        <li className="profile__options__item">
                                            <NavLink to="#" className="profile__options__link profile__options__link--print">Vytisknout</NavLink>
                                        </li>
                                        <li className="profile__options__item">
                                            <NavLink to="#" className="profile__options__link profile__options__link--send">Poslat dotaz</NavLink>
                                        </li>
                                    </ul>
                                </div>

                                <div className="profile__table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th><input type="checkbox" /></th>
                                                <th>Kód</th>
                                                <th>Popis</th>
                                                <th>Stav</th>
                                                <th>Platnost</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type="checkbox" /></td>
                                                <td><NavLink to="#">465546849321</NavLink></td>
                                                <td>Vstupenka na akci ID 21541 v nominální hodnotě 500Kč</td>
                                                <td><span>Platný</span></td>
                                                <td>14.5.2017 12:00-18:00</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" /></td>
                                                <td><NavLink to="#">465546849321</NavLink></td>
                                                <td>Vstupenka na akci ID 21541 v nominální hodnotě 500Kč</td>
                                                <td><span>Platný</span></td>
                                                <td>14.5.2017 12:00-18:00</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" /></td>
                                                <td><NavLink to="#">465546849321</NavLink></td>
                                                <td>Vstupenka na akci ID 21541 v nominální hodnotě 500Kč</td>
                                                <td><span>Platný</span></td>
                                                <td>14.5.2017 12:00-18:00</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" /></td>
                                                <td><NavLink to="#">465546849321</NavLink></td>
                                                <td>Vstupenka na akci ID 21541 v nominální hodnotě 500Kč</td>
                                                <td><span>Platný</span></td>
                                                <td>14.5.2017 12:00-18:00</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" /></td>
                                                <td><NavLink to="#">465546849321</NavLink></td>
                                                <td>Vstupenka na akci ID 21541 v nominální hodnotě 500Kč</td>
                                                <td><span>Platný</span></td>
                                                <td>14.5.2017 12:00-18:00</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" /></td>
                                                <td><NavLink to="#">465546849321</NavLink></td>
                                                <td>Vstupenka na akci ID 21541 v nominální hodnotě 500Kč</td>
                                                <td><span>Platný</span></td>
                                                <td>14.5.2017 12:00-18:00</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" /></td>
                                                <td><NavLink to="#">465546849321</NavLink></td>
                                                <td>Vstupenka na akci ID 21541 v nominální hodnotě 500Kč</td>
                                                <td><span>Platný</span></td>
                                                <td>14.5.2017 12:00-18:00</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" /></td>
                                                <td><NavLink to="#">465546849321</NavLink></td>
                                                <td>Vstupenka na akci ID 21541 v nominální hodnotě 500Kč</td>
                                                <td><span>Platný</span></td>
                                                <td>14.5.2017 12:00-18:00</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" /></td>
                                                <td><NavLink to="#">465546849321</NavLink></td>
                                                <td>Vstupenka na akci ID 21541 v nominální hodnotě 500Kč</td>
                                                <td><span>Platný</span></td>
                                                <td>14.5.2017 12:00-18:00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="calendar__panel calendar__panel--profile">
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
                            </div>

                            <div className={ this.state.activeTab === 3 ? 'profile--right active' : 'profile--right'}>
                                <div className="profile__calendar">
                                    <div className="profile__calendar__item">
                                        <div className="profile__calendar__item--left">
                                            <p>3/6/17<span>sobota</span></p>
                                        </div>

                                        <div className="profile__calendar__item--center">
                                            <ul className="profile__calendar__item__list">
                                                <li>
                                                    <span>Název:</span>
                                                    <span>Soukromá hra - Tonda Kopic</span>
                                                </li>
                                                <li>
                                                    <span>Čas hry:</span>
                                                    <span>od 10:00 do 12:00</span>
                                                </li>
                                                <li>
                                                    <span>Druh:</span>
                                                    <span>Soukromá hra</span>
                                                </li>
                                                <li>
                                                    <span>Místo:</span>
                                                    <span>Sportovní Hala Letná</span>
                                                </li>
                                                <li>
                                                    <span>Registrace:</span>
                                                    <span>od 9:30 do 9:45</span>
                                                </li>
                                                <li>
                                                    <span>Stav hry:</span>
                                                    <span>Schválená</span>
                                                </li>
                                            </ul>

                                            <p>
                                                <span>Stav přihlášky / uživatele:</span>
                                                <span>Organizátor</span>
                                            </p>
                                        </div>

                                        <div className="profile__calendar__item--right profile__calendar__item--right--filled">
                                            <NavLink to="#">Detail rezervace >></NavLink>
                                        </div>
                                    </div>

                                    <div className="profile__calendar__item">
                                        <div className="profile__calendar__item--left">
                                            <p>3/6/17<span>sobota</span></p>
                                        </div>

                                        <div className="profile__calendar__item--center">
                                            <ul className="profile__calendar__item__list">
                                                <li>
                                                    <span>Název:</span>
                                                    <span>Soukromá hra - Tonda Kopic</span>
                                                </li>
                                                <li>
                                                    <span>Čas hry:</span>
                                                    <span>od 10:00 do 12:00</span>
                                                </li>
                                                <li>
                                                    <span>Druh:</span>
                                                    <span>Soukromá hra</span>
                                                </li>
                                                <li>
                                                    <span>Místo:</span>
                                                    <span>Sportovní Hala Letná</span>
                                                </li>
                                                <li>
                                                    <span>Registrace:</span>
                                                    <span>od 9:30 do 9:45</span>
                                                </li>
                                                <li>
                                                    <span>Stav hry:</span>
                                                    <span>Schválená</span>
                                                </li>
                                            </ul>

                                            <p>
                                                <span>Stav přihlášky / uživatele:</span>
                                                <span>Organizátor</span>
                                            </p>
                                        </div>

                                        <div className="profile__calendar__item--right profile__calendar__item--right--filled">
                                            <NavLink to="#">Detail rezervace >></NavLink>
                                        </div>
                                    </div>

                                    <div className="profile__calendar__item">
                                        <div className="profile__calendar__item--left">
                                            <p>3/6/17<span>sobota</span></p>
                                        </div>

                                        <div className="profile__calendar__item--center">
                                            <ul className="profile__calendar__item__list">
                                                <li>
                                                    <span>Název:</span>
                                                    <span>Soukromá hra - Tonda Kopic</span>
                                                </li>
                                                <li>
                                                    <span>Čas hry:</span>
                                                    <span>od 10:00 do 12:00</span>
                                                </li>
                                                <li>
                                                    <span>Druh:</span>
                                                    <span>Soukromá hra</span>
                                                </li>
                                                <li>
                                                    <span>Místo:</span>
                                                    <span>Sportovní Hala Letná</span>
                                                </li>
                                                <li>
                                                    <span>Registrace:</span>
                                                    <span>od 9:30 do 9:45</span>
                                                </li>
                                                <li>
                                                    <span>Stav hry:</span>
                                                    <span>Schválená</span>
                                                </li>
                                            </ul>

                                            <p>
                                                <span>Stav přihlášky / uživatele:</span>
                                                <span>Organizátor</span>
                                            </p>
                                        </div>

                                        <div className="profile__calendar__item--right profile__calendar__item--right--filled">
                                            <NavLink to="#">Detail rezervace >></NavLink>
                                        </div>
                                    </div>

                                    <div className="profile__calendar__item">
                                        <div className="profile__calendar__item--left">
                                            <p>3/6/17<span>sobota</span></p>
                                        </div>

                                        <div className="profile__calendar__item--center">
                                            <ul className="profile__calendar__item__list">
                                                <li>
                                                    <span>Název:</span>
                                                    <span>Soukromá hra - Tonda Kopic</span>
                                                </li>
                                                <li>
                                                    <span>Čas hry:</span>
                                                    <span>od 10:00 do 12:00</span>
                                                </li>
                                                <li>
                                                    <span>Druh:</span>
                                                    <span>Soukromá hra</span>
                                                </li>
                                                <li>
                                                    <span>Místo:</span>
                                                    <span>Sportovní Hala Letná</span>
                                                </li>
                                                <li>
                                                    <span>Registrace:</span>
                                                    <span>od 9:30 do 9:45</span>
                                                </li>
                                                <li>
                                                    <span>Stav hry:</span>
                                                    <span>Schválená</span>
                                                </li>
                                            </ul>

                                            <p>
                                                <span>Stav přihlášky / uživatele:</span>
                                                <span>Organizátor</span>
                                            </p>
                                        </div>

                                        <div className="profile__calendar__item--right profile__calendar__item--right--filled">
                                            <NavLink to="#">Detail rezervace >></NavLink>
                                        </div>
                                    </div>
                                </div>

                                <div className="calendar__panel calendar__panel--profile">
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
                            </div>

                            <div className={ this.state.activeTab === 4 ? 'profile--right active' : 'profile--right'}>
                                <div className="profile__calendar">
                                    <div className="profile__calendar__item">
                                        <div className="profile__calendar__item--left">
                                            <p>3/6/17<span>sobota</span></p>
                                        </div>

                                        <div className="profile__calendar__item--center">
                                            <ul className="profile__calendar__item__list">
                                                <li>
                                                    <span>Název:</span>
                                                    <span>Soukromá hra - Tonda Kopic</span>
                                                </li>
                                                <li>
                                                    <span>Čas hry:</span>
                                                    <span>od 10:00 do 12:00</span>
                                                </li>
                                                <li>
                                                    <span>Druh:</span>
                                                    <span>Soukromá hra</span>
                                                </li>
                                                <li>
                                                    <span>Místo:</span>
                                                    <span>Sportovní Hala Letná</span>
                                                </li>
                                                <li>
                                                    <span>Registrace:</span>
                                                    <span>od 9:30 do 9:45</span>
                                                </li>
                                                <li>
                                                    <span>Stav hry:</span>
                                                    <span>Schválená</span>
                                                </li>
                                            </ul>

                                            <p>
                                                <span>Stav přihlášky / uživatele:</span>
                                                <span>Organizátor</span>
                                            </p>
                                        </div>

                                        <div className="profile__calendar__item--right profile__calendar__item--right--filled">
                                            <NavLink to="#">Detail přihlášky >></NavLink>
                                        </div>
                                    </div>

                                    <div className="profile__calendar__item">
                                        <div className="profile__calendar__item--left">
                                            <p>3/6/17<span>sobota</span></p>
                                        </div>

                                        <div className="profile__calendar__item--center">
                                            <ul className="profile__calendar__item__list">
                                                <li>
                                                    <span>Název:</span>
                                                    <span>Soukromá hra - Tonda Kopic</span>
                                                </li>
                                                <li>
                                                    <span>Čas hry:</span>
                                                    <span>od 10:00 do 12:00</span>
                                                </li>
                                                <li>
                                                    <span>Druh:</span>
                                                    <span>Soukromá hra</span>
                                                </li>
                                                <li>
                                                    <span>Místo:</span>
                                                    <span>Sportovní Hala Letná</span>
                                                </li>
                                                <li>
                                                    <span>Registrace:</span>
                                                    <span>od 9:30 do 9:45</span>
                                                </li>
                                                <li>
                                                    <span>Stav hry:</span>
                                                    <span>Schválená</span>
                                                </li>
                                            </ul>

                                            <p>
                                                <span>Stav přihlášky / uživatele:</span>
                                                <span>Organizátor</span>
                                            </p>
                                        </div>

                                        <div className="profile__calendar__item--right profile__calendar__item--right--filled">
                                            <NavLink to="#">Detail přihlášky >></NavLink>
                                        </div>
                                    </div>

                                    <div className="profile__calendar__item">
                                        <div className="profile__calendar__item--left">
                                            <p>3/6/17<span>sobota</span></p>
                                        </div>

                                        <div className="profile__calendar__item--center">
                                            <ul className="profile__calendar__item__list">
                                                <li>
                                                    <span>Název:</span>
                                                    <span>Soukromá hra - Tonda Kopic</span>
                                                </li>
                                                <li>
                                                    <span>Čas hry:</span>
                                                    <span>od 10:00 do 12:00</span>
                                                </li>
                                                <li>
                                                    <span>Druh:</span>
                                                    <span>Soukromá hra</span>
                                                </li>
                                                <li>
                                                    <span>Místo:</span>
                                                    <span>Sportovní Hala Letná</span>
                                                </li>
                                                <li>
                                                    <span>Registrace:</span>
                                                    <span>od 9:30 do 9:45</span>
                                                </li>
                                                <li>
                                                    <span>Stav hry:</span>
                                                    <span>Schválená</span>
                                                </li>
                                            </ul>

                                            <p>
                                                <span>Stav přihlášky / uživatele:</span>
                                                <span>Organizátor</span>
                                            </p>
                                        </div>

                                        <div className="profile__calendar__item--right profile__calendar__item--right--filled">
                                            <NavLink to="#">Detail přihlášky >></NavLink>
                                        </div>
                                    </div>

                                    <div className="profile__calendar__item">
                                        <div className="profile__calendar__item--left">
                                            <p>3/6/17<span>sobota</span></p>
                                        </div>

                                        <div className="profile__calendar__item--center">
                                            <ul className="profile__calendar__item__list">
                                                <li>
                                                    <span>Název:</span>
                                                    <span>Soukromá hra - Tonda Kopic</span>
                                                </li>
                                                <li>
                                                    <span>Čas hry:</span>
                                                    <span>od 10:00 do 12:00</span>
                                                </li>
                                                <li>
                                                    <span>Druh:</span>
                                                    <span>Soukromá hra</span>
                                                </li>
                                                <li>
                                                    <span>Místo:</span>
                                                    <span>Sportovní Hala Letná</span>
                                                </li>
                                                <li>
                                                    <span>Registrace:</span>
                                                    <span>od 9:30 do 9:45</span>
                                                </li>
                                                <li>
                                                    <span>Stav hry:</span>
                                                    <span>Schválená</span>
                                                </li>
                                            </ul>

                                            <p>
                                                <span>Stav přihlášky / uživatele:</span>
                                                <span>Organizátor</span>
                                            </p>
                                        </div>

                                        <div className="profile__calendar__item--right profile__calendar__item--right--filled">
                                            <NavLink to="#">Detail přihlášky >></NavLink>
                                        </div>
                                    </div>
                                </div>

                                <div className="calendar__panel calendar__panel--profile">
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
                            </div>

                            <div className={ this.state.activeTab === 6 ? 'profile--right active' : 'profile--right'}>
                                <form method="post" action="#" className="form form--profile">
                                    <div className="form__layout">
                                        <div className="form__avatar">
                                            <div className="form__avatar__image">
                                                <img src="/img/form_avatar_img.png" alt="Avatar" />
                                            </div>

                                            <div className="form__input form__input--avatar">
                                                <input type="file" id="avatar" />
                                                <label htmlFor="avatar">Změnit fotografii</label>
                                            </div>
                                        </div>

                                        <div className="form__content">
                                            <div className="form__layout form__layout--wrap">
                                                <div className="form__input">
                                                    <label htmlFor="name">Jméno:*</label>
                                                    <input type="text" id="name" placeholder="Franta" />
                                                </div>

                                                <div className="form__input">
                                                    <label htmlFor="surname">Příjmení:*</label>
                                                    <input type="text" id="surname" placeholder="Novák" />
                                                </div>

                                                <div className="form__input">
                                                    <label htmlFor="mail">Mail:*</label>
                                                    <input type="email" id="mail" placeholder="email@seznam.cz" />
                                                </div>

                                                <div className="form__input">
                                                    <label htmlFor="phone">Telefon:</label>
                                                    <input type="tel" id="phone" placeholder="+420 777 083 021" />
                                                </div>
                                            </div>

                                            <div className="form__separator">
                                                <p>Fakturační údaje</p>
                                            </div>

                                            <div className="form__layout form__layout--wrap">
                                                <div className="form__input">
                                                    <label htmlFor="ic">IČ:</label>
                                                    <input type="text" id="ic" placeholder="1654351254" />
                                                </div>

                                                <div className="form__input">
                                                    <label htmlFor="dic">DIČ:</label>
                                                    <input type="text" id="dic" placeholder="1654351254" />
                                                </div>

                                                <div className="form__input">
                                                    <label htmlFor="title">Název:</label>
                                                    <input type="text" id="title" placeholder="Název XYZ" />
                                                </div>

                                                <div className="form__input">
                                                    <label htmlFor="address">Adresa / Sídlo:</label>
                                                    <input type="text" id="address" placeholder="U lomu 457, Praha 10 , 10000" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form__submit">
                                        <button type="submit">Uložit změny</button>
                                    </div>
                                </form>
                            </div>

                            <div className={ this.state.activeTab === 7 ? 'profile--right active' : 'profile--right'}>
                                <form method="post" action="#" className="form form--password">
                                    <div className="form__layout">
                                        <div className="form__input">
                                            <label htmlFor="pass">Aktuální heslo:</label>
                                            <input type="password" id="pass" placeholder="********************" />
                                        </div>

                                        <div className="form__input">
                                            <label htmlFor="pass2">Nové heslo</label>
                                            <input type="password" id="pass2" />
                                        </div>

                                        <div className="form__input">
                                            <label htmlFor="pass3">Nové heslo znovu (pro kontrolu)</label>
                                            <input type="password" id="pass3" />
                                        </div>
                                    </div>

                                    <div className="form__submit">
                                        <button type="submit">Změnit heslo</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;