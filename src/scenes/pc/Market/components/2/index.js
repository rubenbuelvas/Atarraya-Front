import React from 'react';
import ProductBanner from 'components/ProductBanner';
import { data } from 'api';
import './styles.css';

const bannerStyles = {
    margin: 'auto',
    paddingTop: '10vh'
}

export default class MarketSecond extends React.Component {
    render() {
        return (
            <div id="marketSecond" className="section">
                <div className="page-header">#LOSMÁSVENDIDOS</div>

                <ProductBanner products={data} style={bannerStyles} />
            </div>
        );
    }
}

