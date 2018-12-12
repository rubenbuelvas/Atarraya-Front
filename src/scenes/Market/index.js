import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import First from './components/1';
import Second from './components/2';
import Third from './components/3';
import Fourth from './components/4';

export default class MarketHome extends React.Component {
    render() {
        return (
            <ReactFullpage
                licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
                anchors={['home', 'buy', 'mas-vendidos', 'promocion']}
                sectionsColor={['#fff', '#2C4663', '#2C4663', '#2C4663', '#fff', '#2C4663', '#fff', '#fff']}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <First />
                            <Second />
                            <Third />
                            <Fourth />
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
    }
}