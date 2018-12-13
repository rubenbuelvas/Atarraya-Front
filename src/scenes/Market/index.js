import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import First from './components/1';
import Second from './components/2';
import Third from './components/3';
import Fourth from './components/4';

export default class MarketHome extends React.Component {
    componentDidMount() {
        document.title = "Market | Atarraya - Fish Market";
    }

    render() {
        return (
            <ReactFullpage
                licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
                anchors={['home', 'buy', 'mas-vendidos', 'promocion']}
                sectionsColor={['#fff', '#fff', '#2C4663', '#fff']}
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