import React from 'react';

import './styles.css';

export default class Presentation extends React.Component {
    render() {
        return (
            <div id="m-lifestyle1" className="section">
                <img id="home-logo" src="/images/logo-blue-big.png" alt="Logo"/>

                <img id="m-lifestyle-family" src="/images/lifestyle-familia.png" alt="Lifestyle Familia"/>
                <div className="banner-wrapper">
                    <div className="banner">
                        <div className="header">#LIFESTYLE</div>
                    </div>
                </div>
            </div>
        );
    }
}   