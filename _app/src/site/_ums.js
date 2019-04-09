/* global document, window UMS_CONFIG */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import {
    Publications,
    Core,
    UMS,
    Provider as CoreProvider,
} from 'oicr-ui-core';
import UserDashboard from './modules/UserDashboard';

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
                <UMS.Route path="/dashboard" component={UserDashboard} />
                <UMS.BaseRoutes />
            </Router>
        </CoreProvider>,
        target
    );
}

// Render User Menu
const targetUserMenu = document.getElementById('app-user-nav');
if (targetUserMenu) {
    ReactDOM.render(
        <CoreProvider store={store}>
            <UMS.Components.UserNavMenu rootPath="/user" />
        </CoreProvider>,
        targetUserMenu
    );
}

/**
 * Render view/edit tab for admin user.
 * This will be rendered after pubmed publications are rendered.
 */
const config = Core.getConfig();
if (config.CMUI_ENABLED) {
    const targetEditable = document.getElementById('editButton');
    if (targetEditable) {
        ReactDOM.render(
            <Core.Provider store={store}>
                <Core.Components.ContentPageWrapper
                    viewDOM={targetEditable.innerHTML}
                    rootPath="/user/#/dashboard"
                    eventKey={3}
                    path={targetEditable.getAttribute('data-path')}
                    isPublic={targetEditable.getAttribute('data-is-public')}
                />
            </Core.Provider>,
            targetEditable
        );
    }
}
