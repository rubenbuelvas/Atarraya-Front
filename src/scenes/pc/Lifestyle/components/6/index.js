import React from 'react';

import ArticleGrid from 'components/ArticleGrid';
import { articles } from 'api';

import './styles.css';

export default class Sixth extends React.Component {
    render() {
        return (
            <div id="lifestyle6" className="section">
                <h1 className="header">#DESCUBRE</h1>
                <ArticleGrid type="blog" articles={articles}/>
            </div>
        );
    }
}