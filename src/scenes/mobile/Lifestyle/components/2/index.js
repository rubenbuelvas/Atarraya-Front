import React from 'react';

import RecipeSlide from 'components/RecipeSlide';
import { recipes } from 'api';

import './styles.css';

export default class Second extends React.Component {
    render() {
        return (
            <div id="lifestyle2" className="section">
                <div className="page-title">#RECETAS</div>

                <RecipeSlide recipe={recipes[0]} style={{ marginTop: '6vh' }} />
                <RecipeSlide recipe={recipes[1]} style={{ marginTop: '6vh' }} />
            </div>
        );
    }
}