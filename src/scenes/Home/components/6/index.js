import React from 'react';
import { recipes } from 'api';
import './styles.css';

export default class Sixth extends React.Component {
    state = {
        idx: 0
    }

    render() {
        const { idx } = this.state;
        const recipe = recipes[idx];

        if(!recipe) return (<div id="sixth" className="section"></div>);

        return (
            <div id="sixth" className="section">
                <h1 className="header">#DESCUBRE</h1>
                <a href={`/recipes/${recipe.id}`}>
                    <div className="image" style={{ backgroundImage: `url(${recipe.image_url})` }}>
                        <span>{recipe.title}</span>
                    </div>
                </a>

                <div className="next">
                    <i className="angle right icon"></i>
                </div>
            </div>
        );
    }
}