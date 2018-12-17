import React from 'react';

import './styles.css';

export default class Third extends React.Component {
    render() {
        return (
            <div id="lifestyle4" className="section">
                <div className="header">
                    <img src="/images/logo-white-no-caption.png" alt=""/>
                    <h1>BLOG</h1>
                </div>

                <div className="pic-container">
                    <div style={{backgroundImage: 'url("/stock/tocino.jpg")'}} className="pic"></div>
                </div>

                <div className="banner">
                    <h1>Conoce el detrás de escenas</h1>

                    <p>Queremos que nos conozcas. Nuestro equipo Atarraya está conformado por chefs y fotógrafos que se dedican a
crear las mejores recetas para ti. Queremos que nos conozcas. Nuestro equipo Atarraya está conformado por chefs y fotógrafos que se dedican a
crear las mejores recetas para ti. Queremos que nos conozcas. Nuestro equipo Atarraya está conformado por chefs y fotógrafos que se dedican a
crear las mejores recetas para ti. Queremos que nos conozcas. Nuestro equipo Atarraya está conformado por chefs y fotógrafos que se dedican a
crear las mejores recetas para ti. Queremos que nos conozcas. Nuestro equipo Atarraya está conformado por...</p>

                    <h2>Continuar leyendo <i className="angle right icon"></i></h2>
                </div>
            </div>
        );
    }
}