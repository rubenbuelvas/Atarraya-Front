import React from 'react';

import './styles.css';

export default class Third extends React.Component {
    render() {
        return (
            <div id="homeFourth" className="section">
                <h1 className="header">#FILETES</h1>
                <img src="stock/tocino.jpg" alt="atún"/>

                <div className="pin">
                    <div className="header">15%</div>
                    <p>EN ATÚN</p>
                </div>
            </div>
        );
    }
}