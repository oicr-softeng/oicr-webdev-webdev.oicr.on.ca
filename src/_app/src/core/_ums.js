/* global document, window UMS_CONFIG */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { UMS, Provider as CoreProvider } from 'oicr-ui-core';

// Load store.
const store = require('../site/store').default;

if (window.UMS_CONFIG) UMS.setConfig(window.UMS_CONFIG);

// Get User Session, Invoke once
UMS.getUserInfo()(store.dispatch);

// Render UMS
const target = document.getElementById('app-user-services');
if (target) {
    ReactDOM.render(
        <CoreProvider store={store}>
            <Router history={hashHistory}>
                <UMS.BaseRoutes />
            </Router>
        </CoreProvider>,
        target,
    );
}

// Render User Menu
const targetUserMenu = document.getElementById('app-user-nav');
if (targetUserMenu) {
    ReactDOM.render(
        <CoreProvider store={store}>
            <UMS.Components.UserNavMenu rootPath="/user" />
        </CoreProvider>,
        targetUserMenu,
    );
}
