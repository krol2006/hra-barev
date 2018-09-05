import React, { Component } from 'react';

class AboutList extends Component {
    render(){
        return (
            <div className="about__list">
                <div className="container">
                    <div className="about__list__layout">
                        <div className="about__list__item">
                            <div className="about__list__item--left">
                                <img src="img/about_img.png" alt="pic" />
                                <p>Vybavení</p>
                            </div>

                            <div className="about__list__item--right">
                                <p>Dají se zásahy kuličkou vyprat?</p>
                                <p>Je možné si přinést vlastní vybavení nebo kuličky?</p>
                                <p>Co všechno si vzít s sebou a co na sebe?</p>
                                <p>Jaké kuličky u vás používáte?</p>
                            </div>
                        </div>

                        <div className="about__list__item">
                            <div className="about__list__item--left">
                                <img src="img/about_img4.png" alt="pic" />
                                <p>Bezpečnost</p>
                            </div>

                            <div className="about__list__item--right">
                                <p>Mohou se hry účastnit nezletilí a děti?</p>
                                <p>Je zásah kuličkou bolestivý?</p>
                                <p>Je paintball nebezpečný?</p>
                                <p>Hrají paintball i ženy?</p>
                            </div>
                        </div>

                        <div className="about__list__item">
                            <div className="about__list__item--left">
                                <img src="img/about_img2.png" alt="pic" />
                                <p>Dárkové poukazy</p>
                            </div>

                            <div className="about__list__item--right">
                                <p>Hrají paintball i ženy?</p>
                                <p>Kde všude lze poukaz uplatnit?</p>
                                <p>Do kdy bude poukaz platný?</p>
                                <p>Jak za poukaz zaplatím?</p>
                                <p>Jakým způsobem mi poukaz doručíte?</p>
                                <p>Za jak dlouho budu poukaz mít?</p>
                            </div>
                        </div>

                        <div className="about__list__item">
                            <div className="about__list__item--left">
                                <img src="img/about_img5.png" alt="pic" />
                                <p>Doprava</p>
                            </div>

                            <div className="about__list__item--right">
                                <p>Je možné dostat se k vám i jinak než autem?</p>
                                <p>Jste schopni s dopravou nějak pomoci?</p>
                                <p>Je kde u vás zaparkovat?</p>
                            </div>
                        </div>

                        <div className="about__list__item">
                            <div className="about__list__item--left">
                                <img src="img/about_img3.png" alt="pic" />
                                <p>Průběh hry</p>
                            </div>

                            <div className="about__list__item--right">
                                <p>Je kde u vás zaparkovat?</p>
                                <p>Budeme hrát i přesto, že bude pršet?</p>
                                <p>Jak dlouho trvá jedna hra?</p>
                                <p>Jak dlouho můžeme hrát celkově?</p>
                                <p>Kdy máme dorazit na hřiště?</p>
                                <p>Děláte během hry přestávky?</p>
                                <p>Co když někdo nezvládne hrát celé 4 hodiny?</p>
                                <p>Je možné hru protáhnout nad rezervovanou dobu?</p>
                            </div>
                        </div>

                        <div className="about__list__item">
                            <div className="about__list__item--left">
                                <img src="img/about_img6.png" alt="pic" />
                                <p>Ostatní</p>
                            </div>

                            <div className="about__list__item--right">
                                <p>Co když je nás na soukromou hru málo?</p>
                                <p>Kolik nás musí být, aby se hra uskutečnila?</p>
                                <p>Můžeme si u vás zahrát paintball i v zimě?</p>
                                <p>Z čeho se paintballové kuličky vyrábí?</p>
                                <p>Je nutné opustit areál hned poté, co hra skončí?</p>
                                <p>Budeme mít při soukromé hře hřiště jen pro sebe?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutList;
