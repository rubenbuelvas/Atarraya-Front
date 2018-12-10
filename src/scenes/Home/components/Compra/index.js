import React from 'react';
import ProductBanner from 'components/ProductBanner';

import { data } from 'api';

import './styles.css';

export default class Compra extends React.Component {
    render() {
        return (
            <div className="section">
                    <div id="toMarket">
                        <span>MARKET</span>
                    </div>
                <ProductBanner products={data}/>
                <div className="huge header" id="compraHeader">#COMPRA</div>
            </div>
        );
    }
}