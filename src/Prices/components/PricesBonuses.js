import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PricesBonuses extends Component {
    render(){
        return (
            <div className="prices__bonuses">
                <div className="container">
                    <div className="prices__title">
                        <p>Slevy a bonusy</p>
                    </div>

                    <div className="prices__bonuses__list">
                        <div className="prices__bonuses__item">
                            <div className="prices__bonuses__item__layout">
                                <div className="prices__bonuses__item__image">
                                    <img src="img/prices_bonuses_img.png" alt="Prices bonus" />
                                </div>

                                <div className="prices__bonuses__item__content">
                                    <div className="prices__bonuses__item__title">
                                        <p>Veřejné hry</p>
                                    </div>

                                    <div className="prices__bonuses__item__text">
                                        <p>Veřejné hry pravidelně vypisujeme do kalendáře veřejných her, který naleznete <NavLink to="#">zde >></NavLink></p>
                                    </div>
                                </div>
                            </div>

                            <div className="prices__bonuses__item__price">
                                <p>od <span>149 Kč</span> / osoba</p>
                            </div>
                        </div>

                        <div className="prices__bonuses__item">
                            <div className="prices__bonuses__item__layout">
                                <div className="prices__bonuses__item__image">
                                    <img src="img/prices_bonuses_img2.png" alt="Prices bonus" />
                                </div>

                                <div className="prices__bonuses__item__content">
                                    <div className="prices__bonuses__item__title">
                                        <p>Školní akce</p>
                                    </div>

                                    <div className="prices__bonuses__item__text">
                                        <p>Slevu na školní akce lze uplatnit na tarif A i B. Podrobnosti o školních akcích a podmínkách, za kterých přijímáme školní
                                            akce naleznete <NavLink to="#">zde >></NavLink></p>
                                    </div>
                                </div>
                            </div>

                            <div className="prices__bonuses__item__price">
                                <p>od <span>99 Kč</span> / osoba</p>
                            </div>
                        </div>

                        <div className="prices__bonuses__item">
                            <div className="prices__bonuses__item__layout">
                                <div className="prices__bonuses__item__image">
                                    <img src="img/prices_bonuses_img3.png" alt="Prices bonus" />
                                </div>

                                <div className="prices__bonuses__item__content">
                                    <div className="prices__bonuses__item__title">
                                        <p>Organizátorská sleva</p>
                                    </div>

                                    <div className="prices__bonuses__item__text">
                                        <p>Pokud si u nás jako fyzická osoba
                                            uspořádáte hru, můžete si říci o bonus,
                                            který vám rádi poskytneme. Výši
                                            bonusu naleznete <NavLink to="#">zde >></NavLink></p>
                                    </div>
                                </div>
                            </div>

                            <div className="prices__bonuses__item__price">
                                <p>Až <span>2x vstup</span> a 1000 ks munice</p>
                            </div>
                        </div>

                        <div className="prices__bonuses__item">
                            <div className="prices__bonuses__item__layout">
                                <div className="prices__bonuses__item__image">
                                    <img src="img/prices_bonuses_img4.png" alt="Prices bonus" />
                                </div>

                                <div className="prices__bonuses__item__content">
                                    <div className="prices__bonuses__item__title">
                                        <p>Studentská sleva</p>
                                    </div>

                                    <div className="prices__bonuses__item__text">
                                        <p>Při předložení platného studentského dokladu (ISIC, index studenta) máte nárok na slevu 30 % z ceny vstupu na soukromé hry. Např. při ceně vstupu 249,- Kč bude student s platným průkazem platit 175,- Kč.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="prices__bonuses__item__price">
                                <p><span>-30 %</span> ze vstupu</p>
                            </div>
                        </div>

                        <div className="prices__bonuses__item">
                            <div className="prices__bonuses__item__layout">
                                <div className="prices__bonuses__item__image">
                                    <img src="img/prices_bonuses_img5.png" alt="Prices bonus" />
                                </div>

                                <div className="prices__bonuses__item__content">
                                    <div className="prices__bonuses__item__title">
                                        <p>Agenturní a firemní slevy</p>
                                    </div>

                                    <div className="prices__bonuses__item__text">
                                        <p>Vítáme dlouhodobou spolupráci a jsme
                                            otevřeni smluvním cenách odrážející rozsah a intenzitu případné spolupráce. V případě zájmu nás <NavLink to="#">kontaktujte >></NavLink></p>
                                    </div>
                                </div>
                            </div>

                            <div className="prices__bonuses__item__price">
                                <p><span>Sleva</span> na vyžádání</p>
                            </div>
                        </div>

                        <div className="prices__bonuses__item prices__bonuses__item--text">
                            <p>Pokud máte nárok na jakoukoliv slevu, ohlaste její uplatnění vždy před zaplacením u pokladny. Komerční slevy, které poskytujeme, nejsou nikdy zákazníkům udělovány automaticky, ale pouze na požádání. Po zaplacení útraty již není možno o slevu zpětně žádat. Pokud není výslovně uvedeno jinak, poskytované slevy nelze nikdy navzájem sčítat či poskytovat dohromady, vždy proto lze uplatnit pouze jednu slevu, pouze jednu slevovou akci, pouze jeden voucher atd.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PricesBonuses;
