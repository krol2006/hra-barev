import React, { Component } from 'react';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';

class Carousel extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div className="slider">
                <div className="container">
                    <Slider {...settings}>
                        <div className="slider__item">
                            <NavLink to="#"><img src="img/slider_img.jpg" alt="Slide" /></NavLink>
                        </div>

                        <div className="slider__item">
                            <NavLink to="#"><img src="img/slider_img2.jpg" alt="Slide 2" /></NavLink>
                        </div>

                        <div className="slider__item">
                            <NavLink to="#"><img src="img/slider_img.jpg" alt="Slide" /></NavLink>
                        </div>

                        <div className="slider__item">
                            <NavLink to="#"><img src="img/slider_img2.jpg" alt="Slide 2" /></NavLink>
                        </div>

                        <div className="slider__item">
                            <NavLink to="#"><img src="img/slider_img.jpg" alt="Slide" /></NavLink>
                        </div>

                        <div className="slider__item">
                            <NavLink to="#"><img src="img/slider_img2.jpg" alt="Slide 2" /></NavLink>
                        </div>

                        <div className="slider__item">
                            <NavLink to="#"><img src="img/slider_img.jpg" alt="Slide" /></NavLink>
                        </div>

                        <div className="slider__item">
                            <NavLink to="#"><img src="img/slider_img2.jpg" alt="Slide 2" /></NavLink>
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}

export default Carousel;
