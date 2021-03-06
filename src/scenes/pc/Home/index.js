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

export default class Home extends React.Component {
    componentDidMount() {
        document.title = "Atarraya - Fish Market";
    }

    render() {
        return (
            <ReactFullpage
                licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
                anchors={['1', '2', '3', '4', '5', '6', '7', '8']}
                sectionsColor={['#fff', '#2C4663', '#2C4663', '#2C4663', '#fff', '#2C4663', '#fff', '#fff']}
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