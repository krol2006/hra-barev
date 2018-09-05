import React, { Component } from 'react';
import Action from './Action/Action';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Prices from './Prices/Prices';
import Games from './Games/Games';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Calendar from './Calendar/Calendar';
import Details from './Details/Details';
import Private from './Private/Private';
import Gifts from './Gifts/Gifts';
import GiftApproved from './GiftApproved/GiftApproved';
import Corporate from './Corporate/Corporate';
import School from './School/School';
import Profile from './Profile/Profile';
import Public from './Public/Public';
import ServicesAdditional from './ServicesAdditional/ServicesAdditional';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import Steps from './Steps/Steps';
import Voucher from './Voucher/Voucher';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <Header />

          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/games" component={Games} />
            <Route path="/services" component={Services} />
            <Route path="/prices" component={Prices} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/game/:gameID" component={Details} />
            <Route path="/private" component={Private} />
            <Route path="/gifts" component={Gifts} />
            <Route path="/gift-approved" component={GiftApproved} />
            <Route path="/corporate" component={Corporate} />
            <Route path="/school" component={School} />
            <Route path="/profile" component={Profile} />
            <Route path="/public" component={Public} />
            <Route path="/services-additional" component={ServicesAdditional} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/steps" component={Steps} />
            <Route path="/action" component={Action} />
            <Route path="/voucher" component={Voucher} />
          </div>

          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
