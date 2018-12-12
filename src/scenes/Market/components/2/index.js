import React from 'react';

import ProductPinList from 'components/ProductPinList';
import { data } from 'api';

import './styles.css';

export default class FirstProduct extends React.Component {
    render() {
        return (
            <div id="marketSecond" className="section">
                <div className="market lists">
                    <ProductPinList products={data} />
                    <ProductPinList products={data} />
                </div>
            </div>
        );
    }
}