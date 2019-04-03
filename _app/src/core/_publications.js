/* global window, document, fetch */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Publications, Provider as CoreProvider, Core } from 'oicr-ui-core';

// Load store.
const store = require('../site/store').default;

const client = Core.initApolloClient(true, store);

// Render Publications
const targetPublications = document.getElementById('app-publications');

if (targetPublications) {
    ReactDOM.render(
        <CoreProvider store={store}  client={client}>
            <Router history={hashHistory}>
                <Publications.BaseRoutes />
            </Router>
        </CoreProvider>,
        targetPublications
    );
}
