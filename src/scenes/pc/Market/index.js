import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import First from './components/1';
import Second from './components/2';
import Third from './components/3';
import Fourth from './components/4';
import Fifth from './components/5';
import Sixth from './components/6';

export default class MarketHome extends React.Component {
    componentDidMount() {
        document.title = "Market | Atarraya - Fish Market";
    }

    render() {
        return (
            <ReactFullpage
                licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
                anchors={['1', '2', '3', '4', '5', '6']}
                sectionsColor={['#fff', '#fff', '#fff', '#fff', '#2C4663', '#fff']}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <First />
                            <Second />
                            <Third />
                            <Fourth />
                            <Fifth />
                            <Sixth />
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
    }
}