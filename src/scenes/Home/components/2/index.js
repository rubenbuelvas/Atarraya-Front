import React from 'react';

import ProductBanner from 'components/ProductBanner';
import { data } from 'api';

import './styles.css';

const bannerStyles = {
    // position: 'absolute', 
    margin: 'auto', 
    marginTop: '10vh',
    // left: 'calc(50% - 15vw)',
    zIndex: '1'
}

export default class FirstProduct extends React.Component {
    render() {
        return (
            <div id="second" className="section">
                <ProductBanner products={data} style={bannerStyles}/>
            </div>
        );
    }
}