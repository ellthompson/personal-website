import React from 'react';
import { Link } from 'react-router';

import './styling.scss';

        //<Link to='/gallery' className="nav__item button__clear" activeClassName="-active">Gallery</Link>
        //<Link to='/projects' className="nav__item button__clear" activeClassName="-active">Projects</Link>

const Nav = ({}) => (
    <div className="nav">
        <Link to='/blog' className="nav__item button__clear" activeClassName="-active">Blog</Link>
        <a
            href="https://github.com/ellt92"
            target="_blank"
            className="button__clear nav__item"
        >Github</a>
        <a
            href="https://www.dropbox.com/s/nl7omm7689lq921/elliott-thompson-curriculum-vitae.pdf?dl=0"
            target="_blank"
            className="button__clear nav__item"
        >Resume</a>
    </div>
);

export default Nav;
