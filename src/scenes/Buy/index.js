import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

export default class Buy extends React.Component {
    render() {
        return (
            <ReactFullpage
                licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
                anchors={['home', 'buy', 'mas-vendidos', 'promocion']}
                sectionsColor={['#fff', '#fff', '#2C4663', '#fff']}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            lalala
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
    }
}