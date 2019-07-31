import React from 'react';

import 'bulma/css/bulma.min.css'
import '../styles/Footer.css'


function Footer(props) {
    return (
        <footer className="footer">
            <hr />
            <div className="content is-size-7">
                <span className="footer-text">© Copyright 2019 </span>
                <div className="footer-img" />
                <span className="footer-text"> Zequn Yu</span>
            </div>
        </footer>
    );
}

Footer.propTypes = {};

export default Footer;
