import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducers as searchReducer } from 'oicr-ui-core/lib/search';
import coreReducers from '../core/reducers';
import coreMiddlewares from '../core/middlewares';

const initialState = {
    // Initial Values
}

const combinedReducers = combineReducers(Object.assign({}, coreReducers, searchReducer, {
    // Custom reducers
}));

const composedMiddlewares = compose(
    applyMiddleware(...coreMiddlewares),
    process.env.NODE_ENV === 'production' ? f => f : window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default createStore(combinedReducers, initialState, composedMiddlewares);
