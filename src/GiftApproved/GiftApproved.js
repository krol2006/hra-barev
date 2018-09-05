import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome';
import { NavLink } from 'react-router-dom';

class GiftApproved extends Component {
    render(){
        return (
            <div className="gift-approved">
                <Welcome title="E-shop" text="Knihu nebo lahev umí darovat každý. Adrenalinový zážitek ve vzrušujícím \n prostředí a vybrané společnosti přátel - ten darujete vy." />

                <div className="gift-approved__layout">
                    <div className="container">
                        <div className="gift-approved__title">
                            <p>Zboží bylo přidáno do košíku</p>
                        </div>

                        <div className="gift-approved__list">
                            <div className="gift-approved__item">
                                <div className="gift-approved__image">
                                    <img src="/img/gift_approved_img.jpg" alt="Gift approved" />
                                </div>

                                <div className="gift-approved__text">
                                    <p>Dárkový poukaz HraBarev.cz:<br />„Vystačí se základem“</p>
                                </div>
                            </div>
                        </div>

                        <div className="gift-approved__links">
                            <NavLink to="/gifts">{"<< Zpět ke zboží"}</NavLink>
                            <NavLink to="/steps">Pokračovat do košíku >></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GiftApproved;

