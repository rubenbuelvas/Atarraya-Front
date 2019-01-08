import React from 'react';

import { connect } from 'react-redux';
import { addToCart } from 'services/session/actions';
import { tags } from 'api';
import { formatPrice } from 'ui';
import Tag from './components/Tag';

import './styles.css';

class BuyFirst extends React.Component {
    constructor() {
        super();

        this.add = this.add.bind(this);
    }
    
    add() {
        this.props.dispatch(addToCart(this.props.product, 1));  // TODO: amount
    }

    render() {
        const { product } = this.props;
        console.log(product);

        if(!product)
            return <div>Loading...</div>

        return (
            <div id="buy1" className="section">
                <div className="header">{product.name}</div>

                <div className="carrousel"> 
                    <img src="/images/pescado.png" alt=""/>
                </div>

                <div className="buy-info">
                    <div className="tags">
                        <Tag tag={tags[0]}/>
                        <Tag tag={tags[1]}/>
                    </div>

                    <br/>
                    <br/>

                    <p>Filete de salmón chileno congelado sin espinas, con piel.</p>

                    <br/>
                    <br/>
                    
                    <div className="price">{formatPrice(product.price)} PESOS</div>

                    <div className="info-wrapper">
                        <div className="ui input">
                            <input type="number" min="250" step="50"/>
                        </div>
                        <span onClick={this.add} className="button">Comprar</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((store) => {
    return {};
})(BuyFirst);