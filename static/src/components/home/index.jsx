import React from 'react';

import './styling.scss';

const Home = ({content}) => (
    <div className="wrapper about-me__wrapper">
        <div className="about-me__area" dangerouslySetInnerHTML={content}></div>
    </div>
);

export default Home;
