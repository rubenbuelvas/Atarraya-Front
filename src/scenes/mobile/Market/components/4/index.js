import React from 'react';
import ProductPinList from 'components/ProductPinList';
import { data } from 'api';
import './styles.css';

export default class MobileMarketFourth extends React.Component {
    render() {
        return (
            <div id="marketFourth" className="section">
                <div className="page-header">#MARISCOS</div>
                <br/>
                <br/>
                <br/>
                <ProductPinList dark color="#2C4663" columns={2} products={data} pinSize={36} />
            </div>
        );
    }
}

