import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Forms, Search, Publications } from 'oicr-ui-core';
import coreReducers from '../core/reducers';
import coreMiddlewares from '../core/middlewares';

const initialState = {
    // Initial Values
};

const combinedReducers = combineReducers(Object.assign({}, coreReducers, {}));

const composedMiddlewares = compose(
    applyMiddleware(...coreMiddlewares),
    process.env.NODE_ENV === 'production'
        ? f => f
        : window.devToolsExtension
        ? window.devToolsExtension()
        : f => f
);

export default createStore(combinedReducers, initialState, composedMiddlewares);
