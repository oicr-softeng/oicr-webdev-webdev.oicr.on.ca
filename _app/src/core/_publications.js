/* global window, document, fetch */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Publications, Provider as CoreProvider } from 'oicr-ui-core';

// Load store.
const store = require('../site/store').default;

// Render Publications
const targetPublications = document.getElementById('app-publications');

if (targetPublications) {
    ReactDOM.render(
        <CoreProvider store={store}>
            <Router history={hashHistory}>
                <Publications.BaseRoutes />
            </Router>
        </CoreProvider>,
        targetPublications
    );
}
