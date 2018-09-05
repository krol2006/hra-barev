import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PricesTerms extends Component {
    render(){
        return (
            <div className="prices__terms">
                <div className="container">
                    <div className="prices__terms__title">
                        <p>Základní platební podmínky</p>
                    </div>

                    <div className="prices__terms__text">
                        <p>Ceny uvedené v tomto ceníku jsou uvedeny vč. DPH. Individuální cenovou nabídku jsme schopni vypracovat na základě konkrétních požadavků či konkrétního rozpočtu. Eura přijímáme do odvolání v pevném kurzu 25 Kč / 1 EUR. Dobrovolníkům, podporovatelům a ostatním řadovým členům Občanského sdružení Alternativa II, z.s. (dále jen "Spolku" či "Provozovatele") s příslušným členským statusem poskytujeme členské slevy nad rámec běžných komerčních slev, které vycházejí z výše uhrazených členských příspěvků (dle § 235 NOZ) ve prospěch Spolku. Hřiště ve Sportovní hale Letná je provozováno výhradně za účelem efektivního interního fundraisingu Spolku na spolkové, neziskové a nespotřebitelské bázi dle interních pravidel a stanov Spolku, a proto jsou veškeré platby na tomto hřišti přijímány Spolkem výhradně formou příspěvků stanovených Spolkem na základě § 235 zákona NOZ dle stanov Spolku, přičemž uvedené ceny jsou v tomto případě považovány pouze za doporučené / základní příspěvky ve smyslu stanov Spolku a interních předpisů Spolku, přičemž takto vybrané příspěvky budou Spolkem použity na záchranu přilehlé dřevěné klubovny od architekta Bohumíra Kozáka z roku 1926 - kulturní památky, na krytí provozních nákladů Spolku spojených s příslušným hřištěm a na realizaci vybraných oblastí poslán spolku, viz www.Alternativa2.info. Více informací o platebních podmínkách, viz <NavLink to="#">obchodní podmínky >></NavLink></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PricesTerms;