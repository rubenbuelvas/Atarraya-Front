import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import First from './components/1';
import Second from './components/2';
import Third from './components/3';
import Fourth from './components/4';
import Fifth from './components/5';
import Sexth from './components/6';
import Seventh from './components/7';
import Eighth from './components/8';

export default class MarketHome extends React.Component {
    render() {
        return (
            <ReactFullpage
                licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
                anchors={['home', 'buy']}
                sectionsColor={['#fff', '#2C4663', '#fff', '#2C4663', '#fff', '#2C4663', '#fff', '#2C4663']}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <First />
                            <Second />
                            <Third />
                            <Fourth />
                            <Fifth />
                            <Sexth />
                            <Seventh />
                            <Eighth />
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
    }
}