import React, { Component } from 'react';
import Choose from '../Choose/Choose';
import { NavLink } from 'react-router-dom';

class ServicesAdditional extends Component {
    render(){
        return (
            <div className="services services--additional">
                <div className="services__welcome">
                    <div className="container">
                        <div className="services__welcome__title">
                            <h1>Doplňkové služby</h1>
                        </div>

                        <div className="services__welcome__subtitle">
                            <p>U nás dostanete nejen výzbroj a výstroj. Poskytneme vám komfortní zázemí, umocníme zážitek <br /> ze hry a v případě zájmu jsme připraveni také přidat něco opravdu speciálního. Neváhejte nám <br /> sdělit, co byste rádi - přijmeme každou výzvu v mezích zákona.</p>
                        </div>

                        <ul className="services__welcome__list">
                            <li className="services__welcome__item">
                                <span className="services__welcome__item__image">
                                    <img src="/img/services-additional_img.png" alt="Pic" />
                                </span>

                                <span className="services__welcome__item__text">Občerstvení a catering</span>
                            </li>

                            <li className="services__welcome__item">
                                <span className="services__welcome__item__image">
                                    <img src="/img/services-additional_img2.png" alt="Pic" />
                                </span>

                                <span className="services__welcome__item__text">Foto/Video</span>
                            </li>

                            <li className="services__welcome__item">
                                <span className="services__welcome__item__image">
                                    <img src="/img/services-additional_img3.png" alt="Pic" />
                                </span>

                                <span className="services__welcome__item__text">Doprava</span>
                            </li>

                            <li className="services__welcome__item">
                                <span className="services__welcome__item__image">
                                    <img src="/img/services-additional_img4.png" alt="Pic" />
                                </span>

                                <span className="services__welcome__item__text">Ubytování</span>
                            </li>

                            <li className="services__welcome__item">
                                <span className="services__welcome__item__image">
                                    <img src="/img/services-additional_img5.png" alt="Pic" />
                                </span>

                                <span className="services__welcome__item__text">Cizojazyční organizátoři</span>
                            </li>

                            <li className="services__welcome__item">
                                <span className="services__welcome__item__image">
                                    <img src="/img/services-additional_img6.png" alt="Pic" />
                                </span>

                                <span className="services__welcome__item__text">Kostýmy</span>
                            </li>

                            <li className="services__welcome__item">
                                <span className="services__welcome__item__image">
                                    <img src="/img/services-additional_img7.png" alt="Pic" />
                                </span>

                                <span className="services__welcome__item__text">Lukostřelba</span>
                            </li>

                            <li className="services__welcome__item">
                                <span className="services__welcome__item__image">
                                    <img src="/img/services-additional_img8.png" alt="Pic" />
                                </span>

                                <span className="services__welcome__item__text">Ostatní</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="services__list">
                    <div className="services__item services__item--left">
                        <div className="container">
                            <div className="services__item__layout">
                                <div className="services__item__image">
                                    <img src="img/services_additional_list_img.png" alt="Service" />
                                </div>

                                <div className="services__item__content">
                                    <div className="services__item__title">
                                        <NavLink to="/private">Občerstvení a catering</NavLink>
                                    </div>

                                    <div className="services__item__text">
                                        <p>V areálech je vždy k dostání drobné občerstvení (pivo a limo, slané a sladké apod.). Na objednávku předem pak zajišťujeme bohatší catering, od grilovaného selátka až po švédské stoly. Pro inspiraci jsme sestavili širokou nabídku osvědčené kuchyně, rádi však připravíme i jakékoli jiné pohoštění. Pokud si chcete pohostění připravit sami, za drobný manipulační poplatek vám rádi půjčíme i náš gril
                                        </p>
                                    </div>

                                    <div className="services__item__links">
                                        <NavLink to="#">Nabídka zde >></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services__item services__item--right">
                        <div className="container">
                            <div className="services__item__layout">
                                <div className="services__item__image">
                                    <img src="img/services_additional_list_img2.png" alt="Service" />
                                </div>

                                <div className="services__item__content">
                                    <div className="services__item__title">
                                        <p>Foto a video</p>
                                    </div>

                                    <div className="services__item__text">
                                        <p>Zdarma pořizujeme skupinové fotky každé výpravy a přidělení instruktoři nic nenamítají proti dalšímu focení a natáčení. Jejich primárním úkolem však je dohlížet na bezpečný a zábavný průběh hry - objektiv musí jít občas stranou. Pro 100% záznam proto nabízíme služby profesionálních fotografů a kameramanů, za které se můžeme zaručit.
                                        </p>
                                    </div>

                                    <div className="services__item__links">
                                        <NavLink to="/prices">Ceník >></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services__item services__item--left">
                        <div className="container">
                            <div className="services__item__layout">
                                <div className="services__item__image">
                                    <img src="img/services_img3.png" alt="Service" />
                                </div>

                                <div className="services__item__content">
                                    <div className="services__item__title">
                                        <NavLink to="/gifts">Doprava</NavLink>
                                    </div>

                                    <div className="services__item__text">
                                        <p>Možnosti dopravy uvádíme na stránce konkrétního areálu
                                            v části KUDY NA HŘIŠTĚ. Obecně platí, že zajistíme odvoz libovolného počtu osob z libovolného místa v ČR, ať už jde o přilehlou zastávku MHD, hotel, letiště či sídlo firmy.
                                            Vždy garantujeme fixní cenu za přepravu, kterou budete znát předem.
                                        </p>
                                    </div>

                                    <div className="services__item__links">
                                        <NavLink to="#">Vyberte hřiště >></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services__item services__item--right">
                        <div className="container">
                            <div className="services__item__layout">
                                <div className="services__item__image">
                                    <img src="img/services_img3.png" alt="Service" />
                                </div>

                                <div className="services__item__content">
                                    <div className="services__item__title">
                                        <NavLink to="/gifts">Doprava</NavLink>
                                    </div>

                                    <div className="services__item__text">
                                        <p>Možnosti dopravy uvádíme na stránce konkrétního areálu
                                            v části KUDY NA HŘIŠTĚ. Obecně platí, že zajistíme odvoz libovolného počtu osob z libovolného místa v ČR, ať už jde o přilehlou zastávku MHD, hotel, letiště či sídlo firmy.
                                            Vždy garantujeme fixní cenu za přepravu, kterou budete znát předem.
                                        </p>
                                    </div>

                                    <div className="services__item__links">
                                        <NavLink to="#">Vyberte hřiště >></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Choose />
            </div>
        )
    }
}

export default ServicesAdditional;