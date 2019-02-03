import React from 'react';
import Footer from 'components/Footer';

import './styles.css';

export default class Third extends React.Component {
    render() {
        return (
            <div id="eighth" className="section">
                <h1 id="PPT" className="header">PESCADO PARA TODOS</h1>
                <div className="pin">
                    <div className="header">¡PIDE YA!</div>
                </div>
                <img id="domiciliario" src="/images/domiciliario.png" alt=""/>
                <Footer />
            </div>
        );
    }
}