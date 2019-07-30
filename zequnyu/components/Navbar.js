import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import 'bulma/css/bulma.min.css'
import '../styles/Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            burgerActive: false,
        };
        this.handleBurgerClick = this.handleBurgerClick.bind(this);
    }

    handleBurgerClick() {
        this.setState({burgerActive: !this.state.burgerActive});
    }

    render() {
        return (
            <nav className="navbar is-white is-fixed-top has-shadow">
                <div className="container">
                    <div className="navbar-brand">
                        <Link href="/">
                            <span className="navbar-item button is-white" id="logo">
                                <img src='/static/logo.png' alt="Logo" />
                            </span>
                        </Link>
                        <span className={this.state.burgerActive ? "navbar-burger burger is-active" :
                            "navbar-burger burger"}
                              data-target="menu-hero"
                              onClick={this.handleBurgerClick}
                        >
                            <span/>
                            <span/>
                            <span/>
                        </span>
                    </div>
                    <div className={this.state.burgerActive ? "navbar-menu is-active": "navbar-menu"} id="menu-hero">
                        <div className="navbar-item" id="navbar-center">
                            <Link href="/">
                                <span
                                    name="project"
                                    className="button is-white"
                                    id="navbar-center-item"
                                >
                                    project
                                </span>
                            </Link>
                            <Link href={`/blog`}>
                                <span
                                    name="blog"
                                    className="button is-white"
                                    id="navbar-center-item"
                                >
                                    blog
                                </span>
                            </Link>
                            <Link href={`/static/cv.pdf`}>
                                <span
                                    name="resume"
                                    className="button is-white"
                                    id="navbar-center-item"
                                >
                                    resume
                                </span>
                            </Link>
                        </div>

                        <div className="navbar-end">
                            <span className="navbar-item">
                                <a className="button is-white" href="https://github.com/zequnyu" target="_blank"
                                   rel="noopener noreferrer">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </span>
                                </a>
                                <a className="button is-white" href="mailto:zequnyu11@gmail.com">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faEnvelopeSquare} />
                                    </span>
                                </a>
                                {/*<a className="button is-white" href="https://www.linkedin.com/in/anthony-yu-015266145/">*/}
                                {/*    <span className="icon">*/}
                                {/*        <FontAwesomeIcon icon={faLinkedin} />*/}
                                {/*    </span>*/}
                                {/*</a>*/}
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {
};

export default Navbar;
