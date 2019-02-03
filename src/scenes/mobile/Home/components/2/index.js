import React from 'react';

import ProductPinList from 'components/ProductPinList';

import { data } from 'api';

import './styles.css';

export default class Mobile2 extends React.Component { 
    render() {
        return (
            <div id="homeSecond" className="section">
                <h1>#LOSMÁSVENDIDOS</h1>

                <ProductPinList columns={2} products={data} pinSize={36} />            
            </div>
        );
    }
}