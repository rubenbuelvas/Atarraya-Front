import React from 'react';

import { connect } from 'react-redux';
import { addToCart } from 'services/session/actions';
import { tags } from 'api';
import { formatPrice } from 'ui';
import Tag from './components/Tag';

import './styles.css';

class MobileProductFirst extends React.Component {
    constructor() {
        super();

        this.add = this.add.bind(this);
    }
    
    add() {
        this.props.dispatch(addToCart(this.props.product, 1));  // TODO: amount
    }

    render() {
        const { product } = this.props;
        
        if(!product)
            return <div>Loading...</div>

        return (
            <div id="buy1" className="section">
                <img id="home-logo" src="/images/logo-blue-big.png" alt="Logo"/>
                <div className="header">{product.name}</div>

                <div className="carrousel"> 
                    <img src="/images/pescado.png" alt=""/>
                </div>

                <div className="ui buy-info grid">
                    <div className="seven wide column">
                        <div className="tags">
                            <Tag tag={tags[0]}/>
                            <Tag tag={tags[1]}/>
                        </div>
                        
                        <div className="price">{formatPrice(product.price)} PESOS</div>


                        <div className="ui input">
                                <input type="number" min="250" step="50"/>
                            </div>
                    </div>
                    <div className="nine wide column">
                        <p>Filete de salmón chileno congelado sin espinas, con piel.</p>     

                        <div className="info-wrapper">
                            <span onClick={this.add} className="button">Comprar</span>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        );
    }
}

export default connect((store) => {
    return {};
})(MobileProductFirst);