import React from 'react';
import Link from 'next/link';

import 'bulma/css/bulma.min.css'
import '../styles/Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelopeSquare, faHome, faUserTie} from "@fortawesome/free-solid-svg-icons";
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
                            <Link href={`/`}>
                                <span
                                    name="home"
                                    className="button is-white"
                                    id="nav-button navbar-center-item"
                                >
                                    <FontAwesomeIcon icon={faHome} id="narbar-icon" /> home
                                </span>
                            </Link>
                            <Link href={`/about`}>
                                <span
                                    name="about"
                                    className="button is-white"
                                    id="nav-button navbar-center-item"
                                >
                                    <FontAwesomeIcon icon={faUserTie} id="narbar-icon" /> about
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
                                <a className="button is-white" href="https://www.linkedin.com/in/zequnyu"
                                   target="_blank" rel="noopener noreferrer">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </span>
                                </a>
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
