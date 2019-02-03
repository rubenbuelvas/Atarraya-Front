import React from 'react';
import RecipeCarousel from './components/RecipeCarousel';

import { recipes } from 'api';

import './styles.css';

export default class Third extends React.Component {
    render() {
        return (
            <div id="lifestyle3" className="section">
                <h1>RECETAS</h1> 

                <RecipeCarousel recipes={recipes} />               
            </div>
        );
    }
}

