import React from 'react';

import './styles.css';

export default class ProductBanner extends React.Component {
    constructor() {
        super();

        this.state = {
            i: 0
        }

        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
    }

    moveLeft() {
        const { i } = this.state;

        if(i-1 >= 0) {
            this.setState({ i: i-1 });
        }
    }

    moveRight() {
        const { i } = this.state;
        const { products } = this.props;

        if(i+1 <= products.length) {
            this.setState({ i: i+1 });
        }
    }

    render() {
        const { i } = this.state
        const { products } = this.props;
        const product = products[i];

        return (
            <div className="product banner" style={this.props.style}>
                <div className="wrapper">
                    <img src={product.image_url} alt=""/>
                </div>

                <div className="description">
                    <i className="angle left icon" onClick={this.moveLeft}></i>
                    <p>
                    <span style={{textTransform: 'uppercase'}}>{product.name}</span> <br/> ({product.weight}) <br/> ${product.price}
                    </p>
                    <i className="angle right icon" onClick={this.moveRight}></i>
                </div>
            </div>
        );
    }
}