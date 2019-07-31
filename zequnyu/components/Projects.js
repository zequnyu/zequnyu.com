import React from 'react';

import 'bulma/css/bulma.min.css'
import '../styles/Projects.css'


function Projects(props) {
    return (
        <div className="section" id="projects">
            <div className="container">
                <div className="columns">
                    <div className="column wide-column">
                        <a href="https://github.com/rlworkgroup/garage" target="_blank"
                           rel="noopener noreferrer">
                            <div className="box box1">
                                <span className="box-title">
                                    garage
                                </span>
                                <span className="box-subtitle">
                                    A toolkit for reproducible reinforcement learning research
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="column is-3 long-column">
                        <a href="https://github.com/zequnyu/TravelDashboard" target="_blank"
                           rel="noopener noreferrer">
                            <div className="box box2">
                                <span className="box-title">
                                    Travel Dashboard
                                </span>
                                <span className="box-subtitle">
                                    Data analysis tool built for Atos UK
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="column is-3 long-column">
                        <a href="https://github.com/zequnyu/Diamond-Hunter" target="_blank"
                           rel="noopener noreferrer">
                            <div className="box box3">
                                <span className="box-title">
                                    Diamond Hunter
                                </span>
                                <span className="box-subtitle">
                                    A 2D-RPG game in JavaFx
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-3 long-column" id="fill-up-margin">
                        <a href="https://github.com/zequnyu/ugthesis" target="_blank"
                           rel="noopener noreferrer">
                            <div className="box box4">
                                <span className="box-title">
                                    UG dissertation
                                </span>
                                <span className="box-subtitle">
                                    Mental workload and facial expression
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="column is-3 long-column" id="fill-up-margin">
                        <a href="https://github.com/zequnyu/zequnyu.com" target="_blank"
                           rel="noopener noreferrer">
                            <div className="box box5">
                                <span className="box-title">
                                    zequnyu.com
                                </span>
                                <span className="box-subtitle">
                                    Personal website built with Next.js and Bulma
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="column is-6 wide-column">
                        <a href="https://github.com/zequnyu/urank" target="_blank"
                           rel="noopener noreferrer">
                            <div className="box box6">
                                <span className="box-title">
                                    uRank
                                </span>
                                <span className="box-subtitle">
                                    The ultimate collection of university rankings
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

Projects.propTypes = {};

export default Projects;