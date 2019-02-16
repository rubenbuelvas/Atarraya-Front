import React from 'react';

import RecipeBox from './components/RecipeBox';
import { recipes } from 'api';

import './styles.css';

export default class FirstProduct extends React.Component {
    render() {
        return (
            <div id="buy2" className="section">
                <div className="container">
                    <h1 className="header">¿QUÉ PREPARAR?</h1>

                    <div className="receits">
                    
                    </div>
                    <div className="ui three column grid">
                        <div className="column">
                            <RecipeBox recipe={recipes[0]}/>
                        </div>
                        <div className="column">
                            <RecipeBox recipe={recipes[1]}/>
                        </div>
                        <div className="column">
                            <RecipeBox recipe={recipes[2]}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}