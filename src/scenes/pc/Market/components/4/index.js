import React from 'react';
import ProductPinList from 'components/ProductPinList';
import { data } from 'api';
import './styles.css';

export default class Third extends React.Component {
    render() {
        return (
            <div id="marketFourth" className="section">
                <h2 className="header">#MARISCOS</h2>
                <ProductPinList columns={3} products={data.concat(data)} pinSize={16} />
            </div>
        );
    }
}

