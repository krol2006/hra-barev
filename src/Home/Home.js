import React, { Component } from 'react';
import Banner from './components/Banner/Banner';
import Types from '../Types/Types';
import Places from './components/Places/Places';
import Carousel from './components/Carousel/Carousel';
import Reviews from '../Reviews/Reviews';
import Enter from '../Enter/Enter';
import Choose from '../Choose/Choose';

class Home extends Component {
    render(){
        return (
            <div className="home">
                <Banner />
                <Types />
                <Places />
                <Carousel />
                <Reviews />
                <Types slider={true}/>
                <Enter />
                <Choose />
            </div>
        )
    }
}

export default Home;