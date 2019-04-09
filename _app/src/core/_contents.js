/* global window, document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Core, Provider as CoreProvider } from 'oicr-ui-core';
import { Route, Router, hashHistory } from 'react-router';
import store from '../site/store';

const client = Core.initApolloClient(true, store);

/**
 * Content Preview
 */

const contents = document.getElementById('app-contents');
if (contents) {
    ReactDOM.render(
        <CoreProvider store={store} client={client}>
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
