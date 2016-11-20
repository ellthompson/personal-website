import React from 'react';
import { Link } from 'react-router';

import './styling.scss';

const Footer = ({}) => (
    <div className="footer-band">
        <div className="footer-bar wrapper">
            <div className="footer-nav nav">
                <Link
                    to="/"
                    className="button__clear nav__item heading4"
                >Home</Link>
                <a
                    href="https://github.com/ellt92"
                    target="_blank"
                    className="button__clear nav__item heading4"
                >Github</a>
                <a
                    href="https://www.dropbox.com/s/nl7omm7689lq921/elliott-thompson-curriculum-vitae.pdf?dl=0"
                    target="_blank"
                    className="button__clear nav__item heading4"
                >Resume</a>
            </div>
            <div className="copy">Copyright © 2016</div>
        </div>
    </div>
);

export default Footer;
