import React from 'react';

import './styles.css';

export default class OrderBox extends React.Component {
    render() {
        return(
            <div className="order-box">
                <div className="order-container">   
                    <div className="date">27/12/2018</div>
                    <br/>
                    <div className="time">15:48</div><br/>
                    <span><span>Dirección de envío:</span> Calle 152#40-14</span><br/>
                    <span><span>Método de pago:</span> Pago contra entrega</span>

                    <div className="ui three column grid">
                        <div className="column"></div>
                        <div className="column"><h2>Producto</h2></div>
                        <div className="column"><h2>Total</h2></div>
                        <div className="column">
                            <img src="/images/pescado.png" alt="Mixtura Atarraya"/>
                        </div>
                        <div className="column">
                            <div style={{ marginTop: '2vw' }}>
                                <div className="description">Mixtura Atarraya</div>
                                <div className="amount">1 unidad</div>
                                <div className="price">$7350</div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="price centered">$7350</div>
                        </div>
                        <div className="column">
                            <img src="/images/pescado.png" alt="Filete de tilapia"/>
                        </div>
                        <div className="column">
                            <div style={{ marginTop: '2vw'}}>
                                <div className="description">Filete de tilapia</div>
                                <div className="amount">3 unidades</div>
                                <div className="price">$5250</div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="price centered">$15750</div>
                        </div>
                    </div>

                    <div className="ui divider"></div>

                    <div className="ui three column grid">

                    <div className="column"></div>
                        <div className="column"></div>
                        <div className="column">
                            <div className="total">
                                $23100
                                <span>Domicilio</span>$2000
                                <div className="full-price">$25100</div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <a href="/">¿tuviste algún problema con este pedido?</a>
            </div>
        );
    }
}