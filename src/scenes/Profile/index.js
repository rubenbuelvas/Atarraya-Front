import React from 'react';

import Navbar from 'components/Navbar';
import FullFooter from 'components/FullFooter';

export default class Checkout extends React.Component {
    render() {
        return (
            <div id="checkout">
                <Navbar />

                <div id="checkout-info">
                    <h1>#PERFIL</h1>
                    <h4>Información de tu cuenta</h4>
                
                    <h4>Tus pedidos</h4>

                    <div id="checkout-container">
                        <div className="date">27/12/2018</div>
                        <div className="time">15:48</div>
                        <p><span>Dirección de envío:</span> Calle 152#40-14</p>
                        <p><span>Método de pago:</span> Pago contra entrega</p>

                        <div className="ui grid">
                            <div className="column"></div>
                            <div className="column header">Producto</div>
                            <div className="column header">Total</div>
                            <div className="column">
                                <img src="/images/pescado.png" alt="Mixtura Atarraya"/>
                            </div>
                            <div className="column">
                                Mixtura Atarraya
                            </div>
                            <div className="column">
                                $7350
                            </div>
                            <div className="column">
                                <img src="/images/pescado.png" alt="Filete de tilapia"/>
                            </div>
                            <div className="column">
                                Filete de tilapia
                            </div>
                            <div className="column">
                                $15750
                            </div>
                        </div>

                        <div className="ui divider"></div>

                        <div className="total">
                            $23100
                            <span>Domicilio</span>$2000
                            <div className="full-price">$25100</div>
                        </div>
                    </div>
                </div>
                
                <FullFooter />
            </div>
        );
    }
}