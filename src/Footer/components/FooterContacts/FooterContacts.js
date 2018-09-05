import React, { Component } from 'react';

class FooterContacts extends Component {
    render() {
        return (
            <div className="footer__contacts">
                <div className="footer__contacts__item">
                    <a href="tel:420725805738" className="footer__contacts__link">
                        <img src="img/phone_img.png" alt="phone" />
                        <span>+420 725 805 738</span>
                    </a>
                </div>

                <div className="footer__contacts__item">
                    <a href="mailto:paintball@hrabarev.cz" className="footer__contacts__link">
                        <img src="img/email_img.png" alt="phone" />
                        <span>paintball@hrabarev.cz</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default FooterContacts;