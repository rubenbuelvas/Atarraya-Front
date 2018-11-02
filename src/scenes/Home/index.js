import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Compra from './components/Compra';

import './styles.css'

export default class Home extends React.Component {
    render() {
        document.title = "Atarraya";
        return (
            <ReactFullpage
                licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
                anchors={['home', 'compra', 'thirdPage']}
                // sectionsColor={['#282c34', '#ff5f45', '#0798ec']}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section" id="section1" style={{ backgroundImage: `url("home-background.jpg")` }}>

                                <img src="images/atarrayaLogo.svg" alt="images/atarrayaLogo.png" id="logo" />

                                <button id="moveDownButton" style={{background: `url("images/arrowDown.png")`}} onClick={() => fullpageApi.moveSectionDown()}>
                                
                                </button>
                            </div>
                            <Compra />
                            <div className="section">
                                <h3>Section 3</h3>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
    }
}
