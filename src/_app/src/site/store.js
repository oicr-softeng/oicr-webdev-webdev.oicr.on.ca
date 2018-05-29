import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Search, Forms } from 'oicr-ui-core';
import { visibilityFilterReducer } from 'wfui-react/lib/util/visibilityFilter';
import coreReducers from '../core/reducers';
import coreMiddlewares from '../core/middlewares';

const initialState = {};

const combinedReducers = combineReducers(coreReducers);

const composedMiddlewares = compose(
    applyMiddleware(...coreMiddlewares),
    process.env.NODE_ENV === 'production'
        ? f => f
        : window.devToolsExtension
            ? window.devToolsExtension()
            : f => f,
);

export default createStore(combinedReducers, initialState, composedMiddlewares);
