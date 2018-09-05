import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome';
import PricesIntro from './components/PricesIntro';
import PricesEnter from './components/PricesEnter';
import Conveniences from './components/Conveniences';
import PricesServices from './components/PricesServices';
import PricesBonuses from './components/PricesBonuses';
import PricesGames from './components/PricesGames';
import PricesTerms from './components/PricesTerms';
import Choose from '../Choose/Choose';

class Prices extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render(){
        return (
            <div>
                <Welcome title="Ceník" text="Nebude to zadarmo, ale bude to stát za to." scroller={true} scrollLink="prices-intro" />

                <PricesIntro />

                <PricesEnter />

                <Conveniences />

                <PricesServices />

                <PricesBonuses />

                <PricesGames />

                <PricesTerms />

                <Choose />
            </div>
        )
    }
}

export default Prices;