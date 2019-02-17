import React from 'react';

import NetPrice from './components/NetPrice';
import PurchaseColumn from './components/PurchaseColumn';

import './styles.css';

export default class PurchaseGrid extends React.Component {
    render() {
        const { compact, purchases } = this.props;
        const columnsView = purchases.map(purchase => 
            <PurchaseColumn purchase={purchase} compact={compact ? 1 : 0} />
        );

        if(compact)
            return (
                <div className="purchase-grid">
                    <div className="ui grid">
                        {columnsView}
                    </div>

                    <div className="ui divider"></div>

                    <NetPrice gross={23100} delivery={2000} />
                </div>
            );
        return (
            <div className="purchase-grid">
                <div className="ui three column grid">
                    <div className="column"></div>
                    <div className="column"><h2>Producto</h2></div>
                    <div className="column"><h2>Total</h2></div>
                    
                    {columnsView}
                </div>
        
                <div className="ui divider"></div>
        
                <div className="next ui three column grid">
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column">
                        <NetPrice gross={23100} delivery={2000} />
                    </div>
                </div>
            </div>
        );
    }
}