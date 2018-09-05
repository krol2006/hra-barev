import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome';
import Slider from 'react-slick';
import Reviews from '../Reviews/Reviews';
import { NavLink } from 'react-router-dom';

class Corporate extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    };

    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        dots: true
                    }
                }
            ]
        };

        return (
            <div className="corporate">
                <Welcome title="Firemní akce" text="Spolupráce a zábava pro všechny členy týmu od recepce, \n až po management."/>

                <div className="corporate__types">
                    <div className="container">
                        <div className="corporate__types__list">
                            <div className="corporate__types__item">
                                <div className="corporate__types__title">
                                    <p>Akci přizpůsobíme budgetu</p>
                                </div>

                                <div className="corporate__types__image">
                                    <img src="img/corporate_types_img.png" alt="Pic" />
                                </div>

                                <div className="corporate__types__text">
                                    <p>S financemi bojovat nemusíte. Program sestavíme dle vašich možností či rozpočtu.</p>
                                </div>
                            </div>

                            <div className="corporate__types__item">
                                <div className="corporate__types__title">
                                    <p>Nadchneme celou firmu</p>
                                </div>

                                <div className="corporate__types__image">
                                    <img src="img/corporate_types_img2.png" alt="Pic" />
                                </div>

                                <div className="corporate__types__text">
                                    <p>Opušťák nikdo nepotřebuje. Hru vymyslíme tak, aby se mohli zapojit všichni.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="corporate__slider">
                    <div className="container">
                        <Slider {...settings} >
                            <div className="corporate__slider__item">
                                <div className="corporate__slider__title">
                                    <p>Catering</p>
                                </div>

                                <div className="corporate__slider__image">
                                    <img src="img/corporate_slider_img.png" alt="Corporate" />
                                </div>

                                <div className="corporate__slider__text">
                                    <p>Navaříme pro celý regiment.
                                        Stačí nám dát instrukce, na co máte chuť.</p>
                                </div>
                            </div>

                            <div className="corporate__slider__item">
                                <div className="corporate__slider__title">
                                    <p>Fotograf</p>
                                </div>

                                <div className="corporate__slider__image">
                                    <img src="img/corporate_slider_img2.png" alt="Corporate" />
                                </div>

                                <div className="corporate__slider__text">
                                    <p>Ukažte se světu ve skvělém světle. Na profi fotkách a videu.</p>
                                </div>
                            </div>

                            <div className="corporate__slider__item">
                                <div className="corporate__slider__title">
                                    <p>Doprava</p>
                                </div>

                                <div className="corporate__slider__image">
                                    <img src="img/corporate_slider_img3.png" alt="Corporate" />
                                </div>

                                <div className="corporate__slider__text">
                                    <p>Na místo určení vás přepravíme klidně i ze sídla společnosti.</p>
                                </div>
                            </div>

                            <div className="corporate__slider__item">
                                <div className="corporate__slider__title">
                                    <p>Catering</p>
                                </div>

                                <div className="corporate__slider__image">
                                    <img src="img/corporate_slider_img.png" alt="Corporate" />
                                </div>

                                <div className="corporate__slider__text">
                                    <p>Navaříme pro celý regiment.
                                        Stačí nám dát instrukce, na co máte chuť.</p>
                                </div>
                            </div>

                            <div className="corporate__slider__item">
                                <div className="corporate__slider__title">
                                    <p>Fotograf</p>
                                </div>

                                <div className="corporate__slider__image">
                                    <img src="img/corporate_slider_img2.png" alt="Corporate" />
                                </div>

                                <div className="corporate__slider__text">
                                    <p>Ukažte se světu ve skvělém světle. Na profi fotkách a videu.</p>
                                </div>
                            </div>

                            <div className="corporate__slider__item">
                                <div className="corporate__slider__title">
                                    <p>Doprava</p>
                                </div>

                                <div className="corporate__slider__image">
                                    <img src="img/corporate_slider_img3.png" alt="Corporate" />
                                </div>

                                <div className="corporate__slider__text">
                                    <p>Na místo určení vás přepravíme klidně i ze sídla společnosti.</p>
                                </div>
                            </div>

                            <div className="corporate__slider__item">
                                <div className="corporate__slider__title">
                                    <p>Catering</p>
                                </div>

                                <div className="corporate__slider__image">
                                    <img src="img/corporate_slider_img.png" alt="Corporate" />
                                </div>

                                <div className="corporate__slider__text">
                                    <p>Navaříme pro celý regiment.
                                        Stačí nám dát instrukce, na co máte chuť.</p>
                                </div>
                            </div>

                            <div className="corporate__slider__item">
                                <div className="corporate__slider__title">
                                    <p>Fotograf</p>
                                </div>

                                <div className="corporate__slider__image">
                                    <img src="img/corporate_slider_img2.png" alt="Corporate" />
                                </div>

                                <div className="corporate__slider__text">
                                    <p>Ukažte se světu ve skvělém světle. Na profi fotkách a videu.</p>
                                </div>
                            </div>

                            <div className="corporate__slider__item">
                                <div className="corporate__slider__title">
                                    <p>Doprava</p>
                                </div>

                                <div className="corporate__slider__image">
                                    <img src="img/corporate_slider_img3.png" alt="Corporate" />
                                </div>

                                <div className="corporate__slider__text">
                                    <p>Na místo určení vás přepravíme klidně i ze sídla společnosti.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

                <div className="corporate__content">
                    <div className="container">
                        <div className="corporate__content__title">
                            <p>Na co často odpovídáme</p>
                        </div>

                        <div className="corporate__content__text">
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

                <div className="corporate__info">
                    <p>Máte nějaké další otázky? Napište, zavolejte či prostudujte <NavLink to="/about">FAQ >></NavLink></p>
                </div>

                <div className="corporate__history">
                    <div className="container">
                        <div className="corporate__history__title">
                            <p>Hráli u nás</p>
                        </div>

                        <div className="corporate__history__images">
                            <img src="img/corporate_history_img.jpg" alt="History" />
                        </div>
                    </div>
                </div>

                <Reviews />

                <div className="corporate__buttons">
                    <NavLink to="#">Rezervujte si firemní akci >></NavLink>
                </div>
            </div>
        )
    }
}

export default Corporate;