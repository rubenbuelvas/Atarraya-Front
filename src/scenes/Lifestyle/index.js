import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import First from './components/1';

export default class Lifestyle extends React.Component {
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
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
    }
}