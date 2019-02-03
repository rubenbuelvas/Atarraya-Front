import React from 'react';

import ProductBanner from 'components/ProductBanner';

import { data } from 'api';
import './styles.css';

export default class Third extends React.Component {
    render() {
        return (
            <div id="homeThird" className="section">
                <ProductBanner products={data} style={{margin: 'auto'}}/>
            </div>
        );
    }
}

