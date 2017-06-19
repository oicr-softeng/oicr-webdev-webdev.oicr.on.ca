/* global window, document  */
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Core from 'oicr-ui-core';

// OICR Core Frameworks
const { LoginRoute, reducers, setConfig } = Core.User;
const { IntlContainer, intlReducer } = Core.i18n;

// Override default user configuration
setConfig({
    APP_ID: '58af5392a2b5fb21b534db23',
    CONTACT_LINK: 'mailto:admin@gmail.com',
    FORGET_PASS_LINK: `${window.location.origin}/dashboard/#/resetpass`,
});

/**
 * Register reducers
 */
const store = createStore(
    combineReducers({
        ...reducers,
    }),
    {},
    compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f),
);


/**
 * Render App
 */
const target = document.getElementById('oicr-user-services');
if (target) {
  ReactDOM.render((
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={({children}) => (<IntlContainer>{children}</IntlContainer>)} >
                    <LoginRoute />
                </Route>
            </Router>
        </Provider>
  ), target);
}
