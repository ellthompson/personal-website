import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import 'smoothscroll';

import store from 'store.js';
import './scss/index.scss';


import App from 'containers/app/index.jsx';
import Home from 'containers/home/index.jsx';
import BlogList from 'containers/blog-list/index.jsx';
import BlogPost from 'containers/blog-post/index.jsx';

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={browserHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='blog'>
                        <IndexRoute component={BlogList}/>
                        <Route path=':slug' component={BlogPost}/>
                    </Route>
                </Route>
            </Router>
        </div>
    </Provider>,
    document.getElementById('react__root')
);
