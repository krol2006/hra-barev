import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PricesServices extends Component {
    render() {
        return (
            <div className="prices__services">
                <div className="container">
                    <div className="prices__services__title">
                        <p>Doplňkové služby</p>
                    </div>

                    <div className="prices__services__text">
                        <p>Ceny vybraných doplňkových služeb zjistíte v detailu dané služby, ostatní ceny vám rádi sdělíme, na základě kalkulace dle vašich přesných požadavků.</p>
                    </div>

                    <div className="prices__services__links">
                        <ul className="prices__services__links__list">
                            <li className="prices__services__links__item">
                                <NavLink className="prices__services__links__link" to="#">Občerstvení >></NavLink>
                            </li>

                            <li className="prices__services__links__item">
                                <NavLink className="prices__services__links__link" to="#">Foto/Video >></NavLink>
                            </li>

                            <li className="prices__services__links__item">
                                <NavLink className="prices__services__links__link" to="#">Doprava >></NavLink>
                            </li>

                            <li className="prices__services__links__item">
                                <NavLink className="prices__services__links__link" to="#">Ubytování >></NavLink>
                            </li>

                            <li className="prices__services__links__item">
                                <NavLink className="prices__services__links__link" to="#">Cizojazyční organizátoři >></NavLink>
                            </li>

                            <li className="prices__services__links__item">
                                <NavLink className="prices__services__links__link" to="#">Kostýmy >></NavLink>
                            </li>

                            <li className="prices__services__links__item">
                                <NavLink className="prices__services__links__link" to="#">Lukostřelba >></NavLink>
                            </li>

                            <li className="prices__services__links__item">
                                <NavLink className="prices__services__links__link" to="#">Ostatní >></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default PricesServices;
