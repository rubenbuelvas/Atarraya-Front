 import React from 'react';

import './styles.css';

export default class RecipeCarousel extends React.Component {
    state = {
        idx: 0,
        leftVisible: false,
        rightVisible: true
    }

    constructor() {
        super();

        this.next = this.next.bind(this);
        this.back = this.back.bind(this);
    }

    next() {
        const { length } = this.props.recipes;

        this.setState(prevState => ({
            idx: prevState.idx + 1 === length ? prevState.idx : prevState.idx + 1,
            leftVisible: true,
            rightVisible: prevState.idx + 2 < length
        }));
    }

    back() {
        this.setState(prevState => ({
            idx: prevState.idx - 1 === 0 ? 0 : prevState.idx - 1,
            rightVisible: true,
            leftVisible: prevState.idx - 1 > 0
        }));
    }

    render() {
        const { idx, leftVisible, rightVisible } = this.state;
        const { recipes } = this.props;

        const recipe = recipes[idx];

        return (
            <div className="recipe-carousel">
                {rightVisible ? <i id="recCarRight" className="huge right angle icon" onClick={this.next}></i> : ''}
                {leftVisible ? <i id="recCarLeft" className="huge left angle icon" onClick={this.back}></i> : ''}
                <div onClick={() => window.location.replace(`/recipes/${recipe.id}`)} className="currentPic">
                    <div style={{ backgroundImage: `url(${recipe.image_url}` }} className="image"></div>
                </div>

                <a href={`/recipes/${recipe.id}`} className="reccar-name">{recipe.title}</a>
            </div>
        );
    }
}