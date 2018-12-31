import React from 'react';
import Navbar from 'components/Navbar';

import './styles.css';

export default class Presentation extends React.Component {
    render() {
        return (
            <div id="lifestyleFirst" className="section navbar-scene">
                <Navbar />
                <img src="/images/lifestyle-familia.png" alt="Lifestyle Familia"/>
                <div className="banner-wrapper">
                    <div className="banner">
                        <div className="header">#LIFESTYLE</div>
                    </div>
                </div>
            </div>
        );
    }
}