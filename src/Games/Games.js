import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome'
import Reservation from '../Reservation/Reservation';
import Choose from '../Choose/Choose';
import Map from '../Map/Map';
import ContactUs from '../ContactUs/ContactUs';

class Games extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    };

    render(){
        return (
            <div>
                <Welcome title="Nase hriste" text="Vojenske arealy a hala v centru Prahy, kazdy si u nas prijde na sve." scroller={true} scrollLink="reservation" />
                <Reservation />
                <Map />
                <ContactUs />
                <Choose />
            </div>
        )
    }
}

export default Games;