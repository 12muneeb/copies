import React, {Component} from 'react';
import {connect} from 'react-redux';
// @navigations

import {_AppLayout} from '../redux/actions';
import AuthNavigation from './stacks/authNavigation';
import {loginUser, setUserType} from '../redux/actions/authAction';
import MoverStack from './tabs/Movertab/MoverStack';
import UserStack from './tabs/Usertab/UserStack';

class RoleSelection extends Component {
  render() {
    const loggedInUser = this.props?.user;
    return (
      <>
        {loggedInUser &&
        (loggedInUser?.role == 'User') ? (
          <UserStack initialRoute={undefined} />
        ) : loggedInUser && loggedInUser?.role == 'Mover' ? (
          <MoverStack />
        ) : (
          <AuthNavigation initialRoute={undefined} />
        )}
      </>
    );
  }
}

function mapStateToProps({authReducer: {user, userType}}) {
  return {
    user,
    userType,
  };
}
const actions = {loginUser, setUserType};

export default connect(mapStateToProps, actions)(RoleSelection);
