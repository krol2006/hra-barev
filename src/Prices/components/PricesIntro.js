import React, { Component } from 'react';

class PricesIntro extends Component {
    render() {
        return (
            <div className="prices__intro" id="prices-intro">
                <div className="container">
                    <div className="prices__title">
                        <p>Vstupné a munice</p>
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
                                    <td data-label="TARIF A - pro venkovní hřiště">Zaplatíš vstup a hraješ, tak dlouho jak je libo</td>
                                    <td data-label="název">výhody tarifu</td>
                                    <td data-label="TARIF B - pro indorová hřiště">Vstup platíš hodinově, ale střílíš zadarmo</td>
                                </tr>
                                <tr>
                                    <td data-label="TARIF A - pro venkovní hřiště">
                                        <span>249Kč / celá akce</span>
                                        <span>3 až 5 hodin</span>
                                    </td>
                                    <td data-label="název">
                                        <span>cena vstupu na osobu</span>
                                        <span>obvyklá délka rezervace</span>
                                    </td>
                                    <td data-label="TARIF B - pro indorová hřiště">
                                        <span>249Kč / hodina hry</span>
                                        <span>1 až 2 hodiny</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="TARIF A - pro venkovní hřiště">1 Kč / ks</td>
                                    <td data-label="název">cena munice</td>
                                    <td data-label="TARIF B - pro indorová hřiště">zdarma</td>
                                </tr>
                                <tr>
                                    <td data-label="TARIF A - pro venkovní hřiště">
                                        Lze uplatnit na všech hřištích a lze kombinovat se všemi slevami, poukazy a výhodami, není-li uvedeno jinak.
                                    </td>
                                    <td data-label="název">podmínky využití</td>
                                    <td data-label="TARIF B - pro indorová hřiště">Lze uplatnit pouze na indoorových hřištích
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
        )
    }
}

export default PricesIntro;
