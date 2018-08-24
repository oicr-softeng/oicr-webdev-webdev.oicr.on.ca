import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Core, Forms, UMS } from 'oicr-ui-core';
import { isAdminSelector } from 'oicr-ui-core/lib/ums/selectors';

const { Dashboard } = Core.Components;
const { ContentManagementDashboard } = Core.Dashboard;
const {
    AdminSiteConfigDashboard,
    AdminUserDashboard,
    UserAccountDashboard
} = UMS.Dashboard;
const { AdminCaseManagementDashboard, FormBuilderDashboard } = Forms.Dashboard;

class UserDashboard extends React.Component {
    render() {
        const config = Core.getConfig();

        return (
            <Dashboard
                id="forms-user-dashboard"
                className="clearfix"
                defaultActiveKey={2.1}
                rootPath="dashboard"
            >
                <Dashboard.Menus id="user-dashboard-menu">
                    <UserAccountDashboard.Menu eventKey={2} />
                    {config.CMUI_ENABLED && (
                        <ContentManagementDashboard.Menu eventKey={3} />
                    )}
                    {config.FORM_ENABLED && (
                        <FormBuilderDashboard.Menu eventKey={4} />
                    )}
                    {config.FORM_ENABLED && (
                        <AdminCaseManagementDashboard.Menu eventKey={5} />
                    )}
                    <AdminSiteConfigDashboard.Menu eventKey={6} />
                    <AdminUserDashboard.Menu eventKey={7} />
                </Dashboard.Menus>
                <Dashboard.Contents id="user-dashboard-content">
                    <UserAccountDashboard.Content eventKey={2} />
                    {config.CMUI_ENABLED && (
                        <ContentManagementDashboard.Content eventKey={3} />
                    )}
                    {config.FORM_ENABLED && (
                        <FormBuilderDashboard.Content
                            eventKey={4}
                            caseManagementKey={5}
                        />
                    )}
                    {config.FORM_ENABLED && (
                        <AdminCaseManagementDashboard.Content
                            eventKey={5}
                            formBuilderKey={4}
                        />
                    )}
                    <AdminSiteConfigDashboard.Content eventKey={6} />
                    <AdminUserDashboard.Content eventKey={7} />
                </Dashboard.Contents>
            </Dashboard>
        );
    }
}

export default withRouter(
    connect(state => ({
        isAdmin: isAdminSelector(state)
    }))(UserDashboard)
);
