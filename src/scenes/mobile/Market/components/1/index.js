import React from 'react';

import './styles.css';

export default class MarketFirst extends React.Component {
    render() {
        return (
            <div id="marketFirst" className="section">
                <img id="home-logo" src="/images/logo-blue-big.png" alt="Logo"/>

                <div onClick={() => this.props.click1()} className="pin">Filetes</div>
                <div onClick={() => this.props.click2()} className="pin">Mariscos</div>
            </div>
        );
    }
}