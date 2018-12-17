import React from 'react';
import RecipeThumbnail from './components/RecipeThumbnail';

export default class Third extends React.Component {
    render() {
        return (
            <div style={{float: 'right'}}>
                <RecipeThumbnail />         
                <RecipeThumbnail />         
                <RecipeThumbnail />         
            </div>
        );
    }
}

