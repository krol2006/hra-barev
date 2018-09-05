import React, { Component } from 'react';

class ContactTable extends Component {
    render() {
        return (
            <div className="contact__table">
                <div className="contact__table__title">
                    <p>Fakturační a ostatní údaje</p>
                </div>

                <div className="contact__table__layout">
                    <div className="contact__table__col">
                        <ul className="contact__table__list">
                            <li className="contact__table__item">
                                <span className="contact__table__term">Název spolku / organizace:</span>
                                <span className="contact__table__definition">Občanské sdružení Alternativa II, z.s.</span>
                            </li>
                            <li className="contact__table__item">
                                <span className="contact__table__term">Organizační složka:</span>
                                <span className="contact__table__definition">projekt Paint-Ball</span>
                            </li>
                            <li className="contact__table__item">
                                <span className="contact__table__term">Sídlo spolku:</span>
                                <span className="contact__table__definition">Terronská 894/56, 160 00, Praha 6</span>
                            </li>
                            <li className="contact__table__item">
                                <span className="contact__table__term">IČ:</span>
                                <span className="contact__table__definition">270 26 345</span>
                            </li>
                            <li className="contact__table__item">
                                <span className="contact__table__term">DIČ:</span>
                                <span className="contact__table__definition">CZ 270 26 345</span>
                            </li>
                            <li className="contact__table__item">
                                <span className="contact__table__term">Zápis v rejstříku:</span>
                                <span className="contact__table__definition">u Městského soudu v Praze pod spisovou značkou L 16540</span>
                            </li>
                        </ul>
                    </div>

                    <div className="contact__table__col">
                        <ul className="contact__table__list">
                            <li className="contact__table__item">
                                <span className="contact__table__term">Plátce DPH:</span>
                                <span className="contact__table__definition">Ano</span>
                            </li>
                            <li className="contact__table__item">
                                <span className="contact__table__term">Stanovy:</span>
                                <span className="contact__table__definition">Zveřejněny ve spolkovém rejstříku</span>
                            </li>
                            <li className="contact__table__item">
                                <span className="contact__table__term">Oficiální web spolku:</span>
                                <span className="contact__table__definition">www.Alternativa2.info</span>
                            </li>
                            <li className="contact__table__item">
                                <span className="contact__table__term">Oficiální web projektu:</span>
                                <span className="contact__table__definition">www.HraBarev.cz</span>
                            </li>
                            <li className="contact__table__item">
                                <span className="contact__table__term">Bankovní spojení <span>(primárně určeno pro příjem komerčních plateb)</span></span>
                                <span className="contact__table__definition">272281678/0300</span>
                            </li>
                            <li className="contact__table__item">
                                <span className="contact__table__term">Bankovní spojení <span>(primárně určeno pro příjem členských příspěvků)</span></span>
                                <span className="contact__table__definition">277567886/0300</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactTable;