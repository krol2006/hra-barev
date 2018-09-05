import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import { NavLink } from 'react-router-dom';

class Banner extends Component {
    render() {
        return (
            <div className="banner banner--home">
                <div className="container">
                    <div className="banner__layout">
                        <div className="banner__title">
                            <p>paintball<span>ve velkem</span>stylu!</p>
                        </div>

                        <div className="banner__links">
                            <NavLink to="/">Pres <span>150 000 m<sup>2</sup></span> adrenalinu a zabavy</NavLink>
                        </div>

                        <div className="banner__list">
                            <div className="banner__list__item">
                                <div className="banner__list__result">
                                    <p>24</p>
                                </div>

                                <div className="banner__list__title">
                                    <p>realnych budov</p>
                                </div>
                            </div>

                            <div className="banner__list__item">
                                <div className="banner__list__result">
                                    <p>8</p>
                                </div>

                                <div className="banner__list__title">
                                    <p>podzemnich bunkru</p>
                                </div>
                            </div>

                            <div className="banner__list__item">
                                <div className="banner__list__result">
                                    <p>3</p>
                                </div>

                                <div className="banner__list__title">
                                    <p>armadni zakladny</p>
                                </div>


                            </div>

                            <div className="banner__list__item">
                                <div className="banner__list__result">
                                    <p>1</p>
                                </div>

                                <div className="banner__list__title">
                                    <p>hala v centru Prahy</p>
                                </div>
                            </div>
                        </div>

                        <div className="banner__scroller">
                            <Scrollchor to="#types">fff</Scrollchor>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;
