import React from 'react';

import ArticleBox from './components/ArticleBox';
import './styles.css';

export default class ArticleGrid extends React.Component {
    render() {
        const { articles, type } = this.props;
        return (
            <div class="article-grid container">
                <div className="ui three column grid">
                    <div className="column">
                        <ArticleBox type={type} article={articles[0]}/>
                    </div>
                    <div className="column">
                        <ArticleBox type={type} article={articles[1]}/>
                    </div>
                    <div className="column">
                        <ArticleBox type={type} article={articles[2]}/>
                    </div>
                </div>
            </div>
        );
    }
}