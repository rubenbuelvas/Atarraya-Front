import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import BasketIcon from 'components/BasketIcon';

import Compra from './components/Compra';
import PideYa from './components/PideYa';

export default class Home extends React.Component {
    render() {
        document.title = "Atarraya";
        return (
            <div>
                <BasketIcon />
                <ReactFullpage
                    licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
                    anchors={['home', 'compra', 'pideya']}
                    // sectionsColor={['#282c34', '#ff5f45', '#0798ec']}
                    render={({ state, fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <div className="section" style={{ backgroundImage: `url("home-background.jpg")` }}>
                                    <h3>Section 1</h3>
                                    <button onClick={() => fullpageApi.moveSectionDown()}>
                                    Move down
                                    </button>
                                </div>
                                <Compra />
                                <PideYa />
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />

            </div>
        );
    }
}
