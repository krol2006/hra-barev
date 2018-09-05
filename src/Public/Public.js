import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome';
import Choose from '../Choose/Choose';
import { NavLink } from 'react-router-dom';

class Public extends Component {
    render(){
        return (
            <div className="public">
                <Welcome title="Veřejné akce" text="Nedaří se vám sehnat dostatek hráčů? \n Přijďte na veřejnou hru, kde to obvikle rachotí desítkami zbraní!" />

                <div className="public__types">
                    <div className="container">
                        <div className="public__types__list">
                            <div className="public__types__item">
                                <div className="public__types__title">
                                    <p>Pro začátečníky</p>
                                </div>

                                <div className="public__types__image">
                                    <img src="/img/public_types_img.png" alt="Type" />
                                </div>

                                <div className="public__types__text">
                                    <p>Nechcete se stat tercem mazáků</p>
                                </div>
                            </div>

                            <div className="public__types__item">
                                <div className="public__types__title">
                                    <p>Pro všechny</p>
                                </div>

                                <div className="public__types__image">
                                    <img src="/img/public_types_img2.png" alt="Type" />
                                </div>

                                <div className="public__types__text">
                                    <p>Zadny souper pro vas neni neprekonatelnou prekazkou</p>
                                </div>
                            </div>

                            <div className="public__types__item">
                                <div className="public__types__title">
                                    <p>Ostatní akce</p>
                                </div>

                                <div className="public__types__image">
                                    <img src="/img/public_types_img3.png" alt="Type" />
                                </div>

                                <div className="public__types__text">
                                    <p>Tréninky, kurzy, scénářové hry, akce pro pokročilé</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="public__box">
                    <div className="container">
                        <div className="public__box__layout">
                            <div className="public__box--left">
                                <div className="public__box__image">
                                    <img src="/img/public_box_img.png" alt="Public" />
                                </div>

                                <div className="public__box__content">
                                    <div className="public__box__title">
                                        <p>Pro začátečníky</p>
                                    </div>

                                    <div className="public__box__text">
                                        <p>Hry pro začátečníky jsou určeny prvohráčům a občasným rekreačním hráčům bez vlastního paintbalového vybavení - paintballové zbraně.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="public__box--right" />
                        </div>
                    </div>
                </div>

                <div className="container">
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
                </div>

                <div className="public__more">
                    <NavLink to="#">Zobrazit více akcí pro začátečníky >></NavLink>
                </div>

                <div className="public__box">
                    <div className="container">
                        <div className="public__box__layout">
                            <div className="public__box--left">
                                <div className="public__box__image">
                                    <img src="/img/public_box_img2.png" alt="Public" />
                                </div>

                                <div className="public__box__content">
                                    <div className="public__box__title">
                                        <p>Pro všechny</p>
                                    </div>

                                    <div className="public__box__text">
                                        <p>Hry pro začátečníky jsou určeny prvohráčům a občasným rekreačním hráčům bez vlastního paintbalového vybavení - paintballové zbraně.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="public__box--right" />
                        </div>
                    </div>
                </div>

                <div className="container">
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
                </div>

                <div className="public__more public__more--yellow">
                    <NavLink to="#">Zobrazit více akcí pro začátečníky >></NavLink>
                </div>

                <div className="public__box">
                    <div className="container">
                        <div className="public__box__layout">
                            <div className="public__box--left">
                                <div className="public__box__image">
                                    <img src="/img/public_box_img3.png" alt="Public" />
                                </div>

                                <div className="public__box__content">
                                    <div className="public__box__title">
                                        <p>Ostatní akce</p>
                                    </div>

                                    <div className="public__box__text">
                                        <p>Hry pro začátečníky jsou určeny prvohráčům a občasným rekreačním hráčům bez vlastního paintbalového vybavení - paintballové zbraně.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="public__box--right" />
                        </div>
                    </div>
                </div>

                <div className="container">
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

                <div className="public__more public__more--red">
                    <NavLink to="#">Zobrazit více akcí pro začátečníky >></NavLink>
                </div>

                <div className="public__content">
                    <div className="container">
                        <div className="public__content__title">
                            <p>Máte otázky?</p>
                        </div>

                        <div className="public__content__text">
                            <p>Kolik nás na soukromou hru musí být?</p>
                            <p>Vzhledem ke koncepci našich hřišť a k nákladům na zajištění personálu přijímáme soukromé rezervace běžně od šesti či osmi hráčů, v závislosti na tom o jaké hřiště se jedná. Rezervaci soukromé hry, jsme však po předchozí domluvě schopni přijmout i od dvou hráčů, ale v takovém případě je potřeba se domluvit na čase, který nám bude vyhovovat či doplatit vstupné za hráče, kteří budou chbět do doporučeného minimálního počtu hráčů pro dané hřiště. Pokud je vás málo, ale nevyžadujete hrát privátně, doporučujeme zúčastnit se např. některé z našich pravidelných veřejných akcí, nebo si založit vlastní otevřenou hru v termínu, který vám bude vyhovovat a mi se vám pokusíme sehnat vhodné spoluhráče dle vašich požadavků: od naprostých začátečníků až po pokročilé hráče s vlastním vybavením.</p>

                            <p>Kdy být na místě?  S předstihem, nebo na čas rezervace?</p>
                            <p>Nejlépe uděláte, když na hřišti budete 30 minut před začátkem hry. Něco vám zabere registrace na baru, něco převlečení a převzetí vybavení. Ve zbylém čase se můžete "rozkoukat" a občerstvit se před hrou.</p>

                            <p>Bude s námi hrát někdo jiný?</p>
                            <p>NE, pokud si zarezervujete soukromou hru, nikdo cizí s vámi hrát nebude. Tedy pokud si to nebudete výslovně přát.</p>
                            <p>Bude s námi hrát někdo jiný?</p>
                            <p>NE, pokud si zarezervujete soukromou hru, nikdo cizí s vámi hrát nebude. Tedy pokud si to nebudete výslovně přát.</p>
                            <p>Kolik nás na soukromou hru musí být?</p>
                            <p>Vzhledem ke koncepci našich hřišť a k nákladům na zajištění personálu přijímáme soukromé rezervace běžně od šesti či osmi hráčů, v závislosti na tom o jaké hřiště se jedná. Rezervaci soukromé hry, jsme však po předchozí domluvě schopni přijmout i od dvou hráčů, ale v takovém případě je potřeba se domluvit na čase, který nám bude vyhovovat či doplatit vstupné za hráče, kteří budou chbět do doporučeného minimálního počtu hráčů pro dané hřiště. Pokud je vás málo, ale nevyžadujete hrát privátně, doporučujeme zúčastnit se např. některé z našich pravidelných veřejných akcí, nebo si založit vlastní otevřenou hru v termínu, který vám bude vyhovovat a mi se vám pokusíme sehnat vhodné spoluhráče dle vašich požadavků: od naprostých začátečníků až po pokročilé hráče s vlastním vybavením.</p>
                        </div>
                    </div>
                </div>

                <div className="public__info">
                    <p>Máte nějaké další otázky? Napište, zavolejte či prostudujte <NavLink to="/about">FAQ >></NavLink></p>
                </div>

                <Choose />
            </div>
        )
    }
}

export default Public;