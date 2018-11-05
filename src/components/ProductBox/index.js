import React from 'react';

import './styles.css';

export default class ProductBox extends React.Component {
    render() {
        return (
            <div className="product box">
                <div className="wrapper">
                    <img src="images/pescado.png" alt=""/>
                </div>

                <div className="description">
                    <p>
                    Filete de salmón <br/> (250 <span style={{textTransform: 'lowercase'}}>g</span>) <br/> $12.500
                    </p>
                </div>
            </div>
        );
    }
}