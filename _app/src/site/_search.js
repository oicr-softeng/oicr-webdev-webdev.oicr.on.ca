/* global window, document, fetch */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import * as Search from 'oicr-ui-core/lib/search';
import { setTranslations } from 'oicr-ui-core/lib/i18n';
import { Provider as CoreProvider } from 'oicr-ui-core';

Search.setConfig(window.UMS_CONFIG);
setTranslations({ 'search_bar.search': 'Search webdev.oicr.on.ca' }, 'en');

// Load store.
const store = require('./store').default;

const target = document.getElementById('app-search');
if (target) {
    ReactDOM.render(
        <CoreProvider store={store}>
            <Router history={hashHistory}>
                <Search.BaseRoutes />
            </Router>
        </CoreProvider>,
        target,
    );
}
