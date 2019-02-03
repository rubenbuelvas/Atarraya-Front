import React from 'react';

import './styles.css';

export default class MarketFirst extends React.Component {
    render() {
        return (
            <div id="marketFirst" className="section">
                <img id="home-logo" src="/images/logo-blue-big.png" alt="Logo"/>

                <div className="pin">Filetes</div>
                <div className="pin">Mariscos</div>
            </div>
        );
    }
}