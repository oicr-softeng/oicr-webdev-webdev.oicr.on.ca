import { createStore } from 'redux';
import combinedReducers from './reducers';
import composedMiddlewares from './middlewares';

export default createStore(combinedReducers, {}, composedMiddlewares);
