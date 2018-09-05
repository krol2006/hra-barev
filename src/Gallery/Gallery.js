import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome';
import Choose from '../Choose/Choose';
import ImageMasonry from 'react-image-masonry';
import { NavLink } from 'react-router-dom';

class Gallery extends Component {
    constructor(){
        super();

        this.state = {
            cols: window.innerWidth < 769 ? 3 : 5,
            pictures: [
                {
                    url: 'gallery_img.jpg'
                },
                {
                    url: 'gallery_img.jpg'
                },
                {
                    url: 'gallery_img.jpg'
                },
                {
                    url: 'gallery_img.jpg'
                },
                {
                    url: 'gallery_img.jpg'
                },
                {
                    url: 'gallery_img.jpg'
                },
                {
                    url: 'gallery_img.jpg'
                },
                {
                    url: 'gallery_img.jpg'
                },
                {
                    url: 'gallery_img.jpg'
                },
                {
                    url: 'gallery_img.jpg'
                },
                {
                    url: 'gallery_img.jpg'
                },
                {
                    url: 'gallery_img.jpg'
                },
                {
                    url: 'gallery_img.jpg'
                },
                {
                    url: 'gallery_img.jpg'
                },
                {
                    url: 'gallery_img.jpg'
                }
            ]
        };

        this.checkGallery.bind(this);
        this.onResize.bind(this);
    }

    componentDidMount(){
        this.onResize();
    }

    checkGallery(){
        if (window.innerWidth < 769){
            this.setState({
                cols: 3
            });
        } else {
            this.setState({
                cols: 5
            });
        }
    }

    onResize(){
        let that = this;

        window.addEventListener('resize', function () {
            that.checkGallery();
        });
    }

    render() {
        const childElements = this.state.pictures.map((pic, index) => {
            return (
                <div key={index} className="gallery__item">
                    <img src={'/img/' + pic.url} alt="Pic"/>
                </div>
            )
        });

        return (
            <div>
                <Welcome title="Galerie" text="Preneste se s nami na hriste. Prozitek hry vam to nenahrady, ale alespon uvidite, do ceho jdete."/>

                <div className="gallery">
                    <ImageMasonry numCols={this.state.cols} animate={false} className="gallery__list">
                        { childElements }
                    </ImageMasonry>

                    <div className="gallery__more">
                        <NavLink to="#">další fotografie</NavLink>
                    </div>
                </div>

                <Choose />
            </div>
        )
    }
}

export default Gallery;
