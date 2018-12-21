import React from 'react';

import ProductBanner from 'components/ProductBanner';
import { data } from 'api';

import './styles.css';

const bannerStyles = {
    margin: 'auto', 
    marginTop: '10vh',
    zIndex: '1'
}

export default class FirstProduct extends React.Component {
    render() {
        return (
            <div id="second" className="section">
                <ProductBanner dark products={data} style={bannerStyles}/>
            </div>
        );
    }
}