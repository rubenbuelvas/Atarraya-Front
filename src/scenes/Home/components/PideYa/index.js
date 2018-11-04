import React from 'react';

import './styles.css';

export default class PideYa extends React.Component {
    render() {
        return (
            <div className="section">
                <div className="huge header" id="pideYaHeader">#PIDEYA</div>
                <img id="domiciliario" src="images/domiciliario.png" alt=""/>
                <div className="header wrapper">
                    <h2 className="big header">
                        Obtén un 15% de descuento en tu primera compra
                    </h2>
                </div>
            </div>
        );
    }
}