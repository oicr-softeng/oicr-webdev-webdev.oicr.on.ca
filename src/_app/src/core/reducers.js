import { combineReducers } from 'redux';
import { reducers } from 'oicr-ui-core/lib/ums';

// Load site reducers if it exists
var siteReducers = {}
try{
    siteReducers = require('../site/reducers');
} catch(e) {}

export default combineReducers(Object.assign({}, reducers, siteReducers));