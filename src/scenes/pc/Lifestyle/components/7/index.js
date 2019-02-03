import React from 'react';

import './styles.css';

export default class Lifestyle7 extends React.Component {
    render() {
        return (
            <div id="lifestyle7" className="section">
                <h1>#MIRECETAATARRAYA</h1>

                <div className="pic-container">
                    <div style={{backgroundImage: 'url("/stock/tocino.jpg")'}} className="pic"></div>

                    <div className="info">
                        <div className="header">SALMÓN A LA PLANCHA</div>
                        <div className="sub">por @david_abad</div>                    
                    </div>
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