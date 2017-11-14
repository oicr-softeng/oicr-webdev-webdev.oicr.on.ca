import React from 'react';
import { connect } from 'react-redux';
import { selectors } from 'oicr-ui-core/lib/ums';

const { loggedinSelector } = selectors;

// Login Button
const LoginLink = ({ loggedIn }) => {
    if (!loggedIn) {
        return (
            <div className="cbw-login hidden-xs clearfix" id="nav-login-desktop">
                <ul>
                    <li>
                        <a href="/user" role="button" className="btn btn-default">
                            Log In
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
    return null;
};

export default connect(
    state => ({
        loggedIn: loggedinSelector(state),
    }),
    {},
)(LoginLink);
