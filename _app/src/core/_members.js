/* global window, document, fetch */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Members, Provider as CoreProvider, Core } from 'oicr-ui-core';

const { transformJSON } = Members.helpers;

// Load store.
const store = require('../site/store').default;

const client = Core.initApolloClient(true, store);

// Render Members
const targetMembers = document.getElementById('app-members');

if (targetMembers) {
    // Check if static data is provided
    const staticMembers = transformJSON(
        targetMembers.getAttribute('data-members')
    );

    if (staticMembers) {
        store.dispatch({ type: 'RECEIVE_MEMBERS', staticMembers });
    }

    ReactDOM.render(
        <CoreProvider store={store} client={client}>
            <Router history={hashHistory}>
                <Members.BaseRoutes isStatic={!!staticMembers} />
            </Router>
        </CoreProvider>,
        targetMembers
    );
}
