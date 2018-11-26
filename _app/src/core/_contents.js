/* global window, document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Core, Provider as CoreProvider } from 'oicr-ui-core';
import { Route, Router, hashHistory } from 'react-router';

// Load store.
const store = require('../site/store').default;

/**
 * Content Redirection Example
 */
const contents = document.getElementById('app-contents');
if (contents) {
    ReactDOM.render(
        <CoreProvider store={store}>
            <Router history={hashHistory}>
                <Route
                    path="/preview/"
                    component={Core.Components.ContentPreview}
                />
                <Route path="*" component={Core.Components.PageNotFound} />
            </Router>
        </CoreProvider>,
        contents
    );
}
