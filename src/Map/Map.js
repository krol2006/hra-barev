import React, { Component } from 'react';

class Map extends Component {
    render(){
        return (
            <div className="map">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d10239.612136820377!2d14.4762!3d50.0881023!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2scz!4v1508318137768" frameBorder="0" />
            </div>
        )
    }
}

export default Map;

