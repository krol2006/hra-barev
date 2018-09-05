import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PricesGames extends Component {
    constructor(){
        super();

        this.state = {
            popupOpened: true
        }
    }

    togglePopup(e){
        e.preventDefault();

        this.setState({
            popupOpened: !this.state.popupOpened
        });
    }

    render() {

        return (
            <div className="prices__games">
                <div className="container">
                    <div className="prices__games__title">
                        <p>Hráči s vlastním vybavením</p>
                    </div>

                    <div className="prices__games__text">
                        <p>Hráči s vlastním vybavením mohou na našich hřištích hrát za stejnou cenu vstupního tarifu, jakou účtujeme hráčům bez vlastního vybavení (zbraň + maska). Na rozdíl od hráčů bez vlastního vybavení si však mohou na hřiště přinést vlastní povolené a řádně certifikované kuličky, přičemž výslovně není povoleno používat kuličky prachové, kuličky na olejové bázi a kuličky bez platného certifikátu. Pokud o to hráči s vlastním vybavením mají zájem, po předchozí rezervaci u nás mohou v místě hry zakoupit kuličky za zvýhodněnou cenu. Pozor! Pro hráče s vlastním vybavením není v ceně vstupu zahrnuto doplňování pohonného média, které bude v případě využití zpoplatněno na místě. Na našich hřištích je standardně doplňováno jak CO2, tak i vzduch, a to za <NavLink to="#">předem stanovené ceny</NavLink>. Doporučujeme však při rezervaci hry uvést, zda a jaké pohonné médium budete potřebovat.</p>
                    </div>
                </div>

                <div className={ this.state.popupOpened ? 'prices__popup visible' : 'prices__popup' }>
                    <div className="prices__popup__title">
                        <p>Předem stanovené ceny</p>

                        <NavLink to="#" className="prices__popup__close" onClick={(e) => this.togglePopup(e)}/>
                    </div>

                    <div className="prices__popup__table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Vzduch:</td>
                                    <td>
                                        <p>jednorázové plnění</p>
                                        <p>neomezené plnění</p>
                                    </td>
                                    <td>
                                        <p>50,-</p>
                                        <p>100,-</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>CO2:</td>
                                    <td>
                                        <p>jednorázové plnění</p>
                                    </td>
                                    <td>
                                        <p>35,-</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default PricesGames;