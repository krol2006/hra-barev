import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome';
import Reviews from '../Reviews/Reviews';
import { NavLink } from 'react-router-dom';

class School extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    };

    render(){
        return (
            <div className="school">
                <Welcome title="Školní akce" text="Ukažte, že jste opravdu třída. Vydejte se k nám na školní výlet \n
nebo na netradiční hodinu tělocviku."/>

                <div className="prices__intro" id="prices-intro">
                    <div className="container">
                        <div className="prices__title">
                            <p>Zvýhodněné vstupní tarify
                                pro školní akce</p>
                        </div>

                        <div className="prices__subtitle">
                            <p>Pro oficiální školní výpravy s doprovodem učitele máme ostře akční vstupné:
                                V době běžné výuky, tedy ve všedních dnech do 15:00, dáte za vstup a zapůjčení základního
                                vybavení pouze 99 Kč na osobu! Slevu nelze kombinovat s žádnou jinou další - ale upřímně,
                                je při téhle ceně další sleva třeba?
                            </p>
                        </div>

                        <div className="prices__table">
                            <table>
                                <thead>
                                <tr>
                                    <th>TARIF A - pro venkovní hřiště</th>
                                    <th>název</th>
                                    <th>TARIF B - pro indorová hřiště</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <td>Zaplatíš vstup a hraješ, tak dlouho jak je libo</td>
                                    <td>výhody tarifu</td>
                                    <td>Vstup platíš hodinově, ale střílíš zadarmo</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>249Kč / celá akce</span>
                                        <span>3 až 5 hodin</span>
                                    </td>
                                    <td>
                                        <span>cena vstupu na osobu</span>
                                        <span>obvyklá délka rezervace</span>
                                    </td>
                                    <td>
                                        <span>249Kč / hodina hry</span>
                                        <span>1 až 2 hodiny</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1 Kč / ks</td>
                                    <td>cena munice</td>
                                    <td>zdarma</td>
                                </tr>
                                <tr>
                                    <td>
                                        Lze uplatnit na všech hřištích a lze kombinovat se všemi slevami, poukazy a výhodami, není-li uvedeno jinak.
                                    </td>
                                    <td>podmínky využití</td>
                                    <td>Lze uplatnit pouze na indoorových hřištích
                                        a nelze kombinovat s žádnou slevou, pukazem či výhodou, není-li uvedeno jinak.
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="prices__info">
                            <div className="prices__info__list">
                                <div className="prices__info__item">
                                    <p>V ceně vstupu je<br/>vše potřebné ke hře</p>
                                </div>

                                <div className="prices__info__item">
                                    <img src="img/prices_info_img.png" alt="Price info" />
                                    <span>Zbraň</span>
                                </div>

                                <div className="prices__info__item">
                                    <img src="img/prices_info_img2.png" alt="Price info" />
                                    <span>Maska</span>
                                </div>

                                <div className="prices__info__item">
                                    <img src="img/prices_info_img3.svg" alt="Price info" />
                                    <span>Bezpečnostní instruktáž</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Reviews/>

                <div className="school__content">
                    <div className="container">
                        <div className="school__content__title">
                            <p>Na co často odpovídáme</p>
                        </div>

                        <div className="school__content__text">
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

                <div className="school__info">
                    <p>Máte nějaké další otázky? Napište, zavolejte či prostudujte <NavLink to="/about">FAQ >></NavLink></p>
                </div>

                <div className="school__buttons">
                    <NavLink to="#">Rezervujte si školní akci >></NavLink>
                </div>
            </div>
        );
    }
}

export default School;