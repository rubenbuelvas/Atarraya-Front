import React from 'react';
import ProductPin from 'components/ProductPin';
import { data } from 'api';
import './styles.css';

export default class Third extends React.Component {
    render() {
        return (
            <div id="marketThird" className="section">
                <h2 className="header">#COMPLEMENTOS</h2>
                <div className="ui container">
                    <div className="ui grid">
                        <div className="eight wide column">
                            <ProductPin product={data[0]} />
                        </div>
                        <div className="eight wide column">
                            <ProductPin product={data[0]} />                    
                        </div>
                    </div>                
                </div>
            </div>
        );
    }
}

