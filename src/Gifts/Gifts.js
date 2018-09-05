import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Filter from '../Filter/Filter';
import { NavLink } from 'react-router-dom';

class Gifts extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    };

    render(){
        return (
            <div className="gifts">
                <Welcome title="E-shop" text="Knihu nebo lahev umí darovat každý. Adrenalinový zážitek ve vzrušujícím \n prostředí a vybrané společnosti přátel - ten darujete vy."/>

                <Breadcrumbs />

                <div className="container">
                    <Filter />

                    <div className="gifts__list">
                        <div className="gifts__item">
                            <div className="gifts__item__title">
                                <p>Dárkový poukaz HraBarev.cz:<br />
                                    „Vystačí se základem“
                                    <span>Poukaz - vstup, 200ks munice</span>
                                </p>
                            </div>

                            <div className="gifts__item__image">
                                <img src="img/gifts_item_img.jpg" alt="Pic" />
                            </div>

                            <div className="gifts__item__voting">
                                <ul className="gifts__item__voting__list">
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                </ul>
                            </div>

                            <div className="gifts__item__buy">
                                <div className="gifts__item__price">
                                    <p>449 Kč<span>bez DPH 413,-</span></p>
                                </div>

                                <NavLink to="/gift-approved">Koupit</NavLink>
                            </div>
                        </div>

                        <div className="gifts__item">
                            <div className="gifts__item__title">
                                <p>Dárkový poukaz HraBarev.cz:<br />
                                    „Vystačí se základem“
                                    <span>Poukaz - vstup, 200ks munice</span>
                                </p>
                            </div>

                            <div className="gifts__item__image">
                                <img src="img/gifts_item_img.jpg" alt="Pic" />
                            </div>

                            <div className="gifts__item__voting">
                                <ul className="gifts__item__voting__list">
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                </ul>
                            </div>

                            <div className="gifts__item__buy">
                                <div className="gifts__item__price">
                                    <p>449 Kč<span>bez DPH 413,-</span></p>
                                </div>

                                <NavLink to="/gift-approved">Koupit</NavLink>
                            </div>
                        </div>

                        <div className="gifts__item">
                            <div className="gifts__item__title">
                                <p>Dárkový poukaz HraBarev.cz:<br />
                                    „Vystačí se základem“
                                    <span>Poukaz - vstup, 200ks munice</span>
                                </p>
                            </div>

                            <div className="gifts__item__image">
                                <img src="img/gifts_item_img.jpg" alt="Pic" />
                            </div>

                            <div className="gifts__item__voting">
                                <ul className="gifts__item__voting__list">
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                </ul>
                            </div>

                            <div className="gifts__item__buy">
                                <div className="gifts__item__price">
                                    <p>449 Kč<span>bez DPH 413,-</span></p>
                                </div>

                                <NavLink to="/gift-approved">Koupit</NavLink>
                            </div>
                        </div>

                        <div className="gifts__item">
                            <div className="gifts__item__title">
                                <p>Dárkový poukaz HraBarev.cz:<br />
                                    „Vystačí se základem“
                                    <span>Poukaz - vstup, 200ks munice</span>
                                </p>
                            </div>

                            <div className="gifts__item__image">
                                <img src="img/gifts_item_img.jpg" alt="Pic" />
                            </div>

                            <div className="gifts__item__voting">
                                <ul className="gifts__item__voting__list">
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                </ul>
                            </div>

                            <div className="gifts__item__buy">
                                <div className="gifts__item__price">
                                    <p>449 Kč<span>bez DPH 413,-</span></p>
                                </div>

                                <NavLink to="/gift-approved">Koupit</NavLink>
                            </div>
                        </div>

                        <div className="gifts__item">
                            <div className="gifts__item__title">
                                <p>Dárkový poukaz HraBarev.cz:<br />
                                    „Vystačí se základem“
                                    <span>Poukaz - vstup, 200ks munice</span>
                                </p>
                            </div>

                            <div className="gifts__item__image">
                                <img src="img/gifts_item_img.jpg" alt="Pic" />
                            </div>

                            <div className="gifts__item__voting">
                                <ul className="gifts__item__voting__list">
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                </ul>
                            </div>

                            <div className="gifts__item__buy">
                                <div className="gifts__item__price">
                                    <p>449 Kč<span>bez DPH 413,-</span></p>
                                </div>

                                <NavLink to="/gift-approved">Koupit</NavLink>
                            </div>
                        </div>

                        <div className="gifts__item">
                            <div className="gifts__item__title">
                                <p>Dárkový poukaz HraBarev.cz:<br />
                                    „Vystačí se základem“
                                    <span>Poukaz - vstup, 200ks munice</span>
                                </p>
                            </div>

                            <div className="gifts__item__image">
                                <img src="img/gifts_item_img.jpg" alt="Pic" />
                            </div>

                            <div className="gifts__item__voting">
                                <ul className="gifts__item__voting__list">
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                </ul>
                            </div>

                            <div className="gifts__item__buy">
                                <div className="gifts__item__price">
                                    <p>449 Kč<span>bez DPH 413,-</span></p>
                                </div>

                                <NavLink to="/gift-approved">Koupit</NavLink>
                            </div>
                        </div>

                        <div className="gifts__item">
                            <div className="gifts__item__title">
                                <p>Dárkový poukaz HraBarev.cz:<br />
                                    „Vystačí se základem“
                                    <span>Poukaz - vstup, 200ks munice</span>
                                </p>
                            </div>

                            <div className="gifts__item__image">
                                <img src="img/gifts_item_img.jpg" alt="Pic" />
                            </div>

                            <div className="gifts__item__voting">
                                <ul className="gifts__item__voting__list">
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                    <li className="gifts__item__voting__item"/>
                                </ul>
                            </div>

                            <div className="gifts__item__buy">
                                <div className="gifts__item__price">
                                    <p>449 Kč<span>bez DPH 413,-</span></p>
                                </div>

                                <NavLink to="/gift-approved">Koupit</NavLink>
                            </div>
                        </div>

                        <div className="gifts__item" />
                        <div className="gifts__item" />
                    </div>
                </div>

                <div className="gifts__content">
                    <div className="container">
                        <div className="gifts__content__title">
                            <p>Co vás nejvíc zajímá</p>
                        </div>

                        <div className="gifts__content__text">
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
            </div>
        )
    };
}

export default Gifts;