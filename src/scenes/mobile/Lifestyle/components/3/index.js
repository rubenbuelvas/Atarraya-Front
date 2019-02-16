import React from 'react';

import ArticleGrid from 'components/ArticleGrid';

import { articles } from 'api';

import './styles.css';

export default class Third extends React.Component {
    render() {
        return (
            <div id="lifestyle3" className="section">
                <div className="page-title">#BLOG</div>

                <ArticleGrid columns="two" articles={articles} type="blog" style={{marginTop: '15vh'}} />
            </div>
        );
    }
}

