import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import * as reducers from 'reducers/index.js';

import { apiMiddleware } from 'middleware/index.js';

const storeEnhancers = [applyMiddleware(apiMiddleware)];
if (window.devToolsExtension) storeEnhancers.push(window.devToolsExtension());

const store = createStore(
    combineReducers(reducers),
    compose(...storeEnhancers)
);

export default store;
