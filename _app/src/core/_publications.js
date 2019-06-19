/* global window, document, fetch */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Publications, Provider as CoreProvider, Core } from 'oicr-ui-core';

const { transformJSON } = Publications.helpers;

// Load store.
const store = require('../site/store').default;

const client = Core.initApolloClient(true, store);

// Render Publications
const targetPublications = document.getElementById('app-publications');

if (targetPublications) {
    // Check if static data is provided
    const staticMembers = transformJSON(
        targetPublications.getAttribute('data-members')
    );
    const staticPubs = transformJSON(
        targetPublications.getAttribute('data-publications')
    );

    if (staticMembers) {
        store.dispatch({ type: 'RECEIVE_MEMBERS', data: staticMembers });
    }

    if (staticPubs) {
        store.dispatch({
            type: 'RECEIVE_PUBLICATIONS',
            publications: staticPubs,
        });
    }

    ReactDOM.render(
        <CoreProvider store={store} client={client}>
            <Router history={hashHistory}>
                <Publications.BaseRoutes
                    isStatic={!!staticMembers && !!staticPubs}
                    isStaticPublications={!!staticPubs}
                    isStaticMembers={!!staticMembers}
                />
            </Router>
        </CoreProvider>,
        targetPublications
    );
}
