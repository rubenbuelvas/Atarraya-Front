import React from 'react';

import ProductPinList from 'components/ProductPinList';
import { data } from 'api';
import './styles.css';

export default class Third extends React.Component {
    render() {
        return (
            <div id="third" className="section">
                <h2 className="header">#LOSMÁSVENDIDOS</h2>

                <ProductPinList products={data}/>
            </div>
        );
    }
}

