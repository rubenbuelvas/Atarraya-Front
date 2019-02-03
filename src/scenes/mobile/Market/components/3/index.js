import React from 'react';
import ProductPinList from 'components/ProductPinList';
import { data } from 'api';
import './styles.css';

export default class Third extends React.Component {
    render() {
        return (
            <div id="marketThird" className="section">
                <div className="page-header">#FILETES</div>
                <br/>
                <br/>
                <br/>
                <ProductPinList columns={2} products={data} pinSize={36} />
            </div>
        );
    }
}

