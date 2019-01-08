import React from 'react';

import { formatPrice } from 'ui';

const PurchaseColumn = props => {
    if(!props.purchase)  return '';

    const view = [];
    const { product, amount } = props.purchase;
    const { image_url, id, name, price } = product;
    view.push(
        <div key={`${id}img`} className={props.compact ? "six wide column" : "column"}>
            <img src={image_url} alt={name}/>
        </div>
    );
    view.push(
        <div key={id} className={props.compact ? "ten wide column" : "column"}>
            <div style={{ marginTop: '2vw'}}>
                <div className="description">{name}</div>
                <div className="amount">{amount} unidades</div>
                <div className="price">{formatPrice(price)}</div>
            </div>
        </div>);
    if(!props.compact)
        view.push(
            <div className="column">
                <div className="price centered">{formatPrice(price)}</div>
            </div>
        )
    return view;
}

export default PurchaseColumn;