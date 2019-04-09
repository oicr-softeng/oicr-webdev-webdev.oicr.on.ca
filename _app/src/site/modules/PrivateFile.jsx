import React from 'react';
import { injectIntl } from 'react-intl';
import {
    loggedinSelector,
} from 'oicr-ui-core/lib/ums/selectors';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PrivateFile extends React.Component {
    render() {
        const {
            loggedIn,
            fileSrc
        } = this.props;

        const fileStyle = {
            padding: '60px',
        }

        return (
            <div className='container' style={fileStyle}>
              {loggedIn ? 
              <div>
                <iframe src={"//docs.google.com/gview?embedded=true&url=" + fileSrc} width="100%" height="800px"></iframe>
                <a href={fileSrc}>Download</a>
              </div>
              :
              <p>Sorry, you don't have permission to access this page.</p>}
            </div>
        )
    }
}

PrivateFile.propTypes = {
    loggedIn: PropTypes.bool,
    fileSrc: PropTypes.string,
};

export default injectIntl(
    connect(
        state => ({
            loggedIn: loggedinSelector(state),
        }),
        {},
    )(PrivateFile),
);