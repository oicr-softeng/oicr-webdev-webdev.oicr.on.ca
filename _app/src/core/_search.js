/* global window, document, fetch */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Core, Search, Provider as CoreProvider } from 'oicr-ui-core';

if (window.SEARCH_CONFIG) Search.setConfig(window.SEARCH_CONFIG);

// Load store.
const store = require('../site/store').default;

const client = Core.initApolloClient(true, store);

const target = document.getElementById('app-search');

if (target) {
    ReactDOM.render(
        <CoreProvider store={store} client={client}>
            <Router history={hashHistory}>
                <Search.BaseRoutes />
            </Router>
        </CoreProvider>,
        target
    );
}
