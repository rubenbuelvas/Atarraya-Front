import React from 'react';

import Navbar from 'components/Navbar';

export default class Article extends React.Component {
    render() {
        return (
            <div id="article">
                <Navbar />

                <div className="article container">
                    <h1>#DESCUBRE</h1>

                    <h3>Conoce el detrás de escenas</h3>
                </div>
            </div>
        );
    }
}