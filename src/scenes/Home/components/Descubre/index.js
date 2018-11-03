import React from 'react';

import './styles.css';

export default class Descubre extends React.Component {
    render() {
        return (
            <div className="section" style={{ backgroundImage: `url("images/backgroundDescubre.png")` }}>
                    <div id="toBlog">
                        <span>CONOCE</span>
                    </div>
                    <img src="images/descubrePhoto.jpg" alt="" id="descubrePhoto"/>
                <div id="descubreHeader">#DESCUBRE</div>
            </div>
        );
    }
}