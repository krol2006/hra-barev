import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NumericInput from 'react-numeric-input';

class Voucher extends Component {
    render(){
        return (
            <div className="voucher">
                <div className="container">
                    <div className="voucher__layout">
                        <div className="voucher__content">
                            <div className="voucher--left" data-percentage="-22 %">
                                <div className="voucher__image">
                                    <img src="/img/voucher_img.png" alt="Voucher" />
                                </div>

                                <div className="voucher__name">
                                    <p>Pořiďte si v předprodeji zvýhodněné vstupné
                                        na hřiště pouze za:</p>
                                </div>

                                <div className="voucher__price">
                                    <p>99 Kč</p>
                                </div>

                                <div className="voucher__subprice">
                                    <p>cena na místě:<span>149 Kč</span></p>
                                </div>
                            </div>

                            <div className="voucher--right">
                                <div className="voucher__buy">
                                    <NumericInput min={0} max={100} value={5} />

                                    <NavLink to="#">Koupit >></NavLink>

                                    <p>Už jen <span>5ks</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="voucher__info">
                            <p>*Zvýhodněné vstupné platí pouze na tuto akci a je provozovatelem poskytováno v omezené množství. Pokud se na vás <br /> nedostalo, můžete požáfat o uvolnění dalších zvýhodněných vstupů <NavLink to="#">zde >></NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Voucher;