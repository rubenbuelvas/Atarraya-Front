import React from 'react';
import { connect } from 'react-redux';
import { Checkbox, Dropdown } from 'semantic-ui-react'

import Navbar from 'components/Navbar';
import FullFooter from 'components/FullFooter';
import PurchaseColumn from 'components/PurchaseColumn';

import BackgroundImage from './images/checkout.jpg';

import { ENTREGA, PSE } from 'api/constants';

import './styles.css';

const addressOptions = [
    {
        text: 'Calle 124 # 52-03',
        value: '1',
    },

    {
        text: 'Calle 191A # 11A-92',
        value: '2',
    }
];

class Checkout extends React.Component {
    constructor() {
        super();

        this.state = {
            address: -1,
            method: '',
            termsChecked: false
        }

        this.buy = this.buy.bind(this);
        this.handlePaymentMethod = this.handlePaymentMethod.bind(this);
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    }

    handleDropdownChange = (e, { value }) => this.setState({ address: value });

    handlePaymentMethod(method) {
        this.setState(prevState => ({ 
            method: prevState.method === method ? '' : method
        }))
    }

    buy() {
        const { address, method, termsChecked } = this.state;

        if(address > -1 && method !== '' && termsChecked) {
            console.log("buy!");
        }
    }

    render() {
        const { method } = this.state;
        const { cart } = this.props;
        console.log(cart);

        return (
            <div id="checkout" style={{ backgroundImage: `url(${BackgroundImage})` }}>
                <Navbar />

                <h1>#Carrito</h1>

                <div id="checkout-container">
                    <div className="ui two column grid">
                        <div className="column">
                            <h3>Datos de envío</h3>

                            <h5>Dirección</h5>
                            <div className="ibc">
                                <Dropdown 
                                    compact 
                                    placeholder='Selecciona una dirección de envío...' 
                                    selection 
                                    options={addressOptions}
                                    onChange={this.handleDropdownChange} />
                            </div>

                            <h3>Método de pago</h3>
                            <div className="ibc">
                                <div className={`${method === ENTREGA ? 'active ' : ''}outline button`}
                                    onClick={() => this.handlePaymentMethod(ENTREGA)}>
                                    Pago contra entrega</div><br/>
                                <div className={`${method === PSE ? 'active ' : ''}outline button`}
                                    onClick={() => this.handlePaymentMethod(PSE)}>
                                    Débito bancario PSE
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div id="checkout-summary">
                                <h3>Resumen</h3>
                                <div className="ui grid">
                                    {(() => {
                                        return cart.map(product => {
                                            const view = [];
                                            const { image_url, id, name } = product;
                                            view.push(
                                                <div key={`${id}img`} className="six wide column">
                                                    <img src={image_url} alt={name}/>
                                                </div>
                                            );
                                            view.push(
                                                <div key={id} className="ten wide column">
                                                    <div style={{ marginTop: '2vw'}}>
                                                        <div className="description">{product.name}</div>
                                                        <div className="amount">3 unidades</div>
                                                        <div className="price">$5250</div>
                                                    </div>
                                                </div>);
                                            return view;
                                        })
                                    })()}
                                </div>
                                <div style={{ marginTop: '2vw' }} className="ui divider"></div>
                                <div className="total">
                                    <span>$23.100</span>
                                    <span>Domicilio $2.000</span>
                                    <span className="full-price">$25.100</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ibc">
                        <Checkbox label='Acepto políticas de privacidad y manejo de datos.'
                            onChange={() => this.setState(prevState => ({ termsChecked: !prevState.termsChecked }))} />
                    </div>

                    <div className="ibc">
                        <div className="big button" onClick={this.buy}>Comprar</div>
                    </div>
                </div>


                <div className="footer wrapper">
                    <FullFooter />                
                </div>
            </div>
        );
    }
}

export default connect((store) => {
    return {
        cart: store.cart
    };
})(Checkout);