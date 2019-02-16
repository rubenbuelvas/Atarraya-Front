import React from 'react';

import PropTypes from 'prop-types';

import './styles.css';

var RecipeSlide = props => {
    const { style, recipe } = props;
    return (
        <div className="recipe-slide" style={style}>
            <div onClick={() => window.location.replace(`/recipes/${recipe.id}`)} className="currentPic">
                <div style={{ backgroundImage: `url(${recipe.image_url}` }} className="image"></div>
            </div>

            <a href={`/recipes/${recipe.id}`} className="recslide-name">{recipe.title}</a>
        </div>
    )
};

RecipeSlide.propTypes = {
    recipe: PropTypes.object.isRequired,
    style: PropTypes.object
}

export default RecipeSlide;