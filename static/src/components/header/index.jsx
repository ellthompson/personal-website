import React from 'react';
import { IndexLink, Link } from 'react-router';
import Nav from 'components/nav/index.jsx';
import './styling.scss';

const Header = ({}) => (
    <div className="heading-band">
        <div className="wrapper heading-bar">
            <IndexLink to='/' className="button__clear" activeClassName="-active">Elliott Thompson</IndexLink>
            <Nav/>
        </div>
    </div>
);

export default Header;
