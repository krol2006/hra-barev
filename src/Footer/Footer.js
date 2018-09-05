import React, { Component } from 'react';
import FooterMenu from './components/FooterMenu/FooterMenu';
import FooterContacts from './components/FooterContacts/FooterContacts';
import FooterSocials from './components/FooterSocials/FooterSocials';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="footer__layout">
                        <div className="footer--left">
                            <FooterMenu />
                        </div>

                        <div className="footer--right">
                            <FooterContacts />
                            <FooterSocials />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
