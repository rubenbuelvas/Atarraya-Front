import React from 'react';
import ProductBanner from 'components/ProductBanner';

import { data } from 'api';

import './styles.css';

export default class MobileHome extends React.Component {
    render() {
        return (
            <div id="homeFirst" className="section">
                <img id="home-logo" src="/images/logo-blue-big.png" alt="Logo"/>
                <h1>#Bienvenidos</h1>
                <div className="ui input">
                    <input type="text" placeholder="INGRESA TU DIRECCIÓN"/>
                </div>
                <ProductBanner products={data} style={{margin: 'auto', marginTop: '4vh'}} />            
            </div>
        );
    }
}