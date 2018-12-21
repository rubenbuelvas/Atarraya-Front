import React from 'react';

import ProductBanner from 'components/ProductBanner';
import { data } from 'api';

import './styles.css';

const bannerStyles = {
    margin: 'auto', 
    zIndex: '1'
}

export default class Seventh extends React.Component {
    render() {
        return (
            <div id="home7" className="section">
                <ProductBanner products={data} style={bannerStyles}/>
            </div>
        );
    }
}