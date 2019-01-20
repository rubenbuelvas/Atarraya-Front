import React from 'react';

import './styles.css';

export default class RecipeBox extends React.Component {
    render() {
        const { recipe } = this.props;
        return (
            <div className="recipe box">
                <a href={`/recipes/${recipe.id}`}>
                    <img className="thumbnail" src={recipe.image_url} alt="Thumbnail"/>
                    <p>{recipe.title}</p>
                </a>
            </div>
        );
    }
}