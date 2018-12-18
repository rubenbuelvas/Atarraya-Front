import React from 'react';

import './styles.css';

const types = {
    blog: 'blog',
    recipe: 'recipes',
}

export default class ArticleBox extends React.Component {
    render() {
        const { article, type } = this.props;
        return (
            <div className="article box">
                <a href={`/${types[type]}/${article.id}`}>
                    <div style={{backgroundImage: `url("${article.imageUrl}")`}} className="thumbnail"></div>
                    {/* <img className="thumbnail" src={recipe.imageUrl} alt="Thumbnail"/> */}
                    <p>{article.title}</p>
                </a>
            </div>
        );
    }
}