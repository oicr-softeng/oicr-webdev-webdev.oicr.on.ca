import thunk from 'redux-thunk';
import { compose, applyMiddleware } from 'redux';
import { middlewares } from 'oicr-ui-core/lib/ums';

// Load site middlewares if it exists
var siteMiddlewares = [];
try{
    siteMiddlewares = require('../site/middlewares');
} catch(e) {}

export default compose(
    applyMiddleware(...middlewares, ...siteMiddlewares),
    process.env.NODE_ENV === 'production' ? f => f : window.devToolsExtension ? window.devToolsExtension() : f => f
);