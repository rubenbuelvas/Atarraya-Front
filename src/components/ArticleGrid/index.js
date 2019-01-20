import React from 'react';

import ArticleBox from './components/ArticleBox';
import './styles.css';

export default class ArticleGrid extends React.Component {
    render() {
        const { articles, type } = this.props;
        return (
            <div className="article-grid container">
                <div className="ui three column grid">
                    {articles.map(article => 
                        <div key={article.id} className="column">
                            <ArticleBox type={type} article={article} />
                        </div>)}
                </div>
            </div>
        );
    }
}