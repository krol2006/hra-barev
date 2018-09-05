import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';

class Welcome extends Component {

    render() {
        return (
            <div className="welcome">
                <div className="welcome__layout">
                    <div className="welcome__title">
                        <p>{this.props.title}</p>
                    </div>

                    <div className="welcome__text">
                        {this.props.text && this.props.text.split('\\n').map((item, key) => {
                            return <p key={key}>{item}<br/></p>
                        })}
                    </div>

                    { this.props.scroller &&
                    <div className="welcome__scroller">
                        <Scrollchor to={this.props.scrollLink}>Scroll</Scrollchor>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default Welcome;
