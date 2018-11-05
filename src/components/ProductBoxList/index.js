import React from 'react';

import ProductBox from '../ProductBox';

export default class ProductBoxList extends React.Component {
    render() {
        return (
            <div style={this.props.style}>
                <ProductBox />
                <ProductBox />
                <ProductBox />
            </div>
        );
    }
}