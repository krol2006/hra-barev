import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome';
import Choose from '../Choose/Choose';
import AboutList from './components/AboutList';
import AboutText from './components/AboutText';

class About extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    };

    render(){
        return (
            <div>
                <Welcome title="FAQ" text="Na tajné služby si u nás nehrajeme. \n Nejčastěji odpovídáme na tyto otázky." />

                <AboutList />

                <AboutText />
                <AboutText />
                <AboutText />
                <AboutText />

                <Choose />
            </div>
        )
    }
}

export default About;
