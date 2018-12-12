import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import First from './components/1';
import Second from './components/2';
import Third from './components/3';

import { data } from 'api';

export default class Buy extends React.Component {
    render() {
        const { id } = this.props.match.params;
        const product = data[id];
        return (
            <ReactFullpage
                licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
                anchors={['', 'recipes', 'also']}
                sectionsColor={['#fff', '#fff', '#fff']}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <First product={product}/>
                            <Second />
                            <Third />
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
    }
}