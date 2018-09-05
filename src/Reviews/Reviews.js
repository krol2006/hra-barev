import React, { Component } from 'react';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';

class Reviews extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        dots: true
                    }
                }
            ]
        };

        return (
            <div className="reviews">
                <div className="container">
                    <div className="reviews__title">
                        <p><span>10 let</span> spokojenych zakazniku</p>
                    </div>

                    <Slider {...settings}>
                        <div className="reviews__item">
                            <div className="reviews__image">
                                <img src="img/reviews_img.png" alt="Reviewer" />
                            </div>

                            <div className="reviews__name">
                                <p>Jiri Dusek</p>
                            </div>

                            <div className="reviews__place">
                                <p>ZS Stochov</p>
                            </div>

                            <div className="reviews__text">
                                <p>"Vzdy jsme tu nasli skvele pripravene zazemi, ilou a ochotnou obsluhu, profesionalne vedenou hru a ferove jednani..." <NavLink to="#">Zobrazit vice >> </NavLink></p>
                            </div>
                        </div>

                        <div className="reviews__item">
                            <div className="reviews__image">
                                <img src="img/reviews_img.png" alt="Reviewer" />
                            </div>

                            <div className="reviews__name">
                                <p>Jiri Dusek</p>
                            </div>

                            <div className="reviews__place">
                                <p>ZS Stochov</p>
                            </div>

                            <div className="reviews__text">
                                <p>"Vzdy jsme tu nasli skvele pripravene zazemi, ilou a ochotnou obsluhu, profesionalne vedenou hru a ferove jednani..." <NavLink to="#">Zobrazit vice >> </NavLink></p>
                            </div>
                        </div>

                        <div className="reviews__item">
                            <div className="reviews__image">
                                <img src="img/reviews_img.png" alt="Reviewer" />
                            </div>

                            <div className="reviews__name">
                                <p>Jiri Dusek</p>
                            </div>

                            <div className="reviews__place">
                                <p>ZS Stochov</p>
                            </div>

                            <div className="reviews__text">
                                <p>"Vzdy jsme tu nasli skvele pripravene zazemi, ilou a ochotnou obsluhu, profesionalne vedenou hru a ferove jednani..." <NavLink to="#">Zobrazit vice >> </NavLink></p>
                            </div>
                        </div>

                        <div className="reviews__item">
                            <div className="reviews__image">
                                <img src="img/reviews_img.png" alt="Reviewer" />
                            </div>

                            <div className="reviews__name">
                                <p>Jiri Dusek</p>
                            </div>

                            <div className="reviews__place">
                                <p>ZS Stochov</p>
                            </div>

                            <div className="reviews__text">
                                <p>"Vzdy jsme tu nasli skvele pripravene zazemi, ilou a ochotnou obsluhu, profesionalne vedenou hru a ferove jednani..." <NavLink to="#">Zobrazit vice >> </NavLink></p>
                            </div>
                        </div>

                        <div className="reviews__item">
                            <div className="reviews__image">
                                <img src="img/reviews_img.png" alt="Reviewer" />
                            </div>

                            <div className="reviews__name">
                                <p>Jiri Dusek</p>
                            </div>

                            <div className="reviews__place">
                                <p>ZS Stochov</p>
                            </div>

                            <div className="reviews__text">
                                <p>"Vzdy jsme tu nasli skvele pripravene zazemi, ilou a ochotnou obsluhu, profesionalne vedenou hru a ferove jednani..." <NavLink to="#">Zobrazit vice >> </NavLink></p>
                            </div>
                        </div>

                        <div className="reviews__item">
                            <div className="reviews__image">
                                <img src="img/reviews_img.png" alt="Reviewer" />
                            </div>

                            <div className="reviews__name">
                                <p>Jiri Dusek</p>
                            </div>

                            <div className="reviews__place">
                                <p>ZS Stochov</p>
                            </div>

                            <div className="reviews__text">
                                <p>"Vzdy jsme tu nasli skvele pripravene zazemi, ilou a ochotnou obsluhu, profesionalne vedenou hru a ferove jednani..." <NavLink to="#">Zobrazit vice >> </NavLink></p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}

export default Reviews;
