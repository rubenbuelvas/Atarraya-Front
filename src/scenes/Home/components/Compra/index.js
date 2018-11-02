import React from 'react';
import ProductBanner from 'components/ProductBanner';

import './styles.css';

export default class Compra extends React.Component {
    render() {
        return (
            <div className="section">
                <ProductBanner />
                <div id="compraHeader">#COMPRA</div>
            </div>
        );
    }
}