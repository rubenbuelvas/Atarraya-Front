import React from 'react';

import PropTypes from 'prop-types';

import ArticleBox from './components/ArticleBox';
import './styles.css';

class ArticleGrid extends React.Component {
    render() {
        const { articles, type, style, columns } = this.props;
        return (
            <div className="article-grid container" style={style} >
                <div className={`ui ${columns} column grid`}>
                    {articles.map(article => 
                        <div key={article.id} className="column">
                            <ArticleBox type={type} article={article} />
                        </div>)}
                </div>
            </div>
        );
    }
}

ArticleGrid.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
    type: PropTypes.string.isRequired,

    columns: PropTypes.string.isRequired,
    style: PropTypes.object
}

export default ArticleGrid;