import Projects from "../components/Projects";

import 'bulma/css/bulma.min.css'
import '../styles/Index.css'


function Index() {
    return (
        <div>
            <div className="section">
                <div className="container level">
                    <div className="level-left">
                        <div className="level-item">
                            <figure className="image is-128x128">
                                <img className="is-rounded" src="/static/avatar.png"  alt="avatar" />
                            </figure>
                        </div>
                        <div className="level-item">
                            <div className="info-text">
                                <div className="info-text-up">
                                    <span className="info-text-up-hi">Hi,</span> I'm Zequn
                                </div>
                                <div className="info-text-mid">
                                    I'm currently a MSc Computer Science student at
                                    <span>
                                        <img className="info-text-mid-usc" src='/static/usc.png' alt="USC Logo" />
                                    </span>
                                </div>
                                <div className="info-text-down">
                                    I'm also a student worker at USC RESL lab
                                    <span>
                                        <img className="info-text-down-resl" src='/static/resl.png' alt="RESL Logo" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Projects />
        </div>


    );
}

export default Index;
