/* global document, window */
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Router, hashHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { BaseRoutes, Provider as UMSProvider, reducers, setConfig, getUserInfo, Components } from 'oicr-ui-core/lib/ums';

/**
 * Set UMS 
 */

// Override default user configuration
setConfig(UMS_CONFIG);

// Load store.
const store = require('../site/store').default;

// Get User Session, Invoke once
getUserInfo()(store.dispatch);

// Render UMS
const target = document.getElementById('app-user-services');
if (target) {
  ReactDOM.render((
        <UMSProvider store={store}>
            <Router history={hashHistory}>
                <BaseRoutes />
            </Router>
        </UMSProvider>
  ), target);
}

// Render User Menu
const targetUserMenu = document.getElementById('app-user-nav');
if (targetUserMenu) {
    ReactDOM.render((
        <UMSProvider store={store}>
            <Components.UserMenu rootPath="/user" />
        </UMSProvider>
    ), targetUserMenu);
}
