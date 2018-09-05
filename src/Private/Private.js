import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome';
import Types from '../Types/Types';
import Enter from '../Enter/Enter';
import Choose from '../Choose/Choose';
import { NavLink } from 'react-router-dom';

class Private extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    };

    render(){
        return (
            <div className="private">
                <Welcome title="Skutečně soukromé hry" text="Rádi pro vás připravíme privátní střílečku, na kterou budete \n dlouho a nadšeně vzpomínat."/>

                <Types />

                <Enter />

                <Types />

                <div className="private__plan">
                    <div className="container">
                        <div className="private__plan__title">
                            <p>Máme pro vás plán</p>
                        </div>

                        <div className="private__plan__text">
                            <p>Čím podrobnější je plán mise, tím větší je naděje na její úspěch.<br/> Dodržte náš harmonogram a vyjde vám to na 100 %.</p>
                        </div>

                        <div className="private__plan__table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            <p>
                                                <span>Před akcí</span>
                                                <span>(30 minut)</span>
                                            </p>
                                        </th>
                                        <th>
                                            <p>
                                                <span>Během akce</span>
                                                <span>(1-5 hodin)</span>
                                            </p>
                                        </th>
                                        <th>
                                            <p>
                                                <span>Po akci</span>
                                                <span>(15 minut)</span>
                                            </p>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>
                                            <ul>
                                                <li>vniknutí do areálu (příjezd nebo bezplatná
                                                    doprava z nejbližší zastávky MHD)</li>
                                                <li>přivítání na baru a nutné formality (registrační </li>
                                                <li>výstroj (převlečení, výběr a nastavení masky)</li>
                                                <li>bezpečnostní instruktáž (10-15 minut)</li>
                                                <li>výzbroj (fasování zbraně a založení herního účtu)</li>
                                                <li>instruktáž zacházení se zbraní</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Jednotlivé hry trvají 10-20 minut
                                                    a odvíjí se od konkrétních scénářů. </li>
                                                <li>Ty sestavuje organizátor na základě
                                                    preferencí i zkušenosti a výkonnosti
                                                    jednotlivých hráčů.</li>
                                                <li>Mezi jednotlivými hrami je prostor pro
                                                    načerpání sil v komfortním zázemí hřiště.</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>odevzdání zapůjčeného vybavení,
                                                    převlečení zpět do civilu</li>
                                                <li>vyúčtování a úhrada herního účtu</li>
                                                <li>odvoz či odjezd z areálu
                                                    (domluvit všk lze i grilovačku, táborák atd.)</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="private__content">
                    <div className="container">
                        <div className="private__content__title">
                            <p>Máte otázky?</p>
                        </div>

                        <div className="private__content__text">
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

                <div className="private__info">
                    <p>Máte nějaké další otázky? Napište, zavolejte či prostudujte <NavLink to="/about">FAQ >></NavLink></p>
                </div>

                <Choose />
            </div>
        )
    }
}

export default Private;