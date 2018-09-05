import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome';
import ContactBoxes from './components/ContactBoxes';
import Reservation from '../Reservation/Reservation';
import Map from '../Map/Map';
import ContactPeople from './components/ContactPeople';
import ContactImages from './components/ContactImages';
import ContactTable from './components/ContactTable';

class Contact extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    };

    render() {
        return (
            <div>
                <Welcome title="Kontakty" text="Spojte se s operečním oddělením i generálním štábem." scroller={true} scrollLink="contact"/>
                <ContactBoxes />
                <Reservation />
                <Map />
                <ContactPeople />
                <ContactImages />
                <ContactTable />
            </div>
        )
    }
}

export default Contact;