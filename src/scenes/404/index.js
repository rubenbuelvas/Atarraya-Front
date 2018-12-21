import React from 'react';

import './styles.css';

export default class NotFound extends React.Component {
    render() {
        return (
            <div id="p404">
                <div id="p404-container">
                    <div className="header">OOPS...</div>
                    <img src="/icons/esqueleto-azul.png" alt="Ícono 404"/>
                    <div className="container">
                        <div className="sub">Parece que aquí no hay nada</div>
                        <span>Error 404</span>
                    </div>                
                </div>
            </div>
        );
    }
}