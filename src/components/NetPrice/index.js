import React from 'react';

import { formatPrice } from 'ui';

import './styles.css';

const NetPrice = props => (
    <div className="np-wrapper">
        <span>{formatPrice(props.gross)}</span>
        <span>Domicilio {formatPrice(props.delivery)}</span>
        <span className="net">{formatPrice(props.gross + props.delivery)}</span>
    </div>
);

export default NetPrice;