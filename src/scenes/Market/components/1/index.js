import React from 'react';
import ProductPinList from 'components/ProductPinList';
import { data } from 'api';
import './styles.css';

export default class Presentation extends React.Component {

    render() {
        return (
            <div id="marketFirst" className="section">
                <div className="header">#MARKET</div>
                <div className="market lists">
                    <ProductPinList products={data} />
                    <ProductPinList products={data} />
                </div>
            </div>
        );
    }
}