import React from 'react';

import './styles.css';

export default class RecipeThumbnail extends React.Component {
    render() {
        return (
            <a className="recipe thumbnail" href="/recipes/1">
                <div style={{backgroundImage: 'url("/stock/tocino.jpg")'}}>
                </div>
            </a>
        );
    }
}

