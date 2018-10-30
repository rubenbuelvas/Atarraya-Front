import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

export default class Home extends React.Component {
    render() {
        return (
            <ReactFullpage
                licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
                anchors={['home', 'secondPage', 'thirdPage']}
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
                        <div className="section">
                            <div className="slide"> Slide 1 </div>
                            <div className="slide"> Slide 2 </div>
                            <div className="slide"> Slide 3 </div>
                        </div>
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
