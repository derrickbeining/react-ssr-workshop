import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export default AuthedComponent => {
  class RequireAuth extends Component {
    render () {
      switch (this.props.auth) {
        case false: return <Redirect to="/" />;
        case null: return <div>Loading...</div>;
        default: return <AuthedComponent {...this.props} />;
      }
    }
  }
  const mapState = ({auth}) => ({auth})
  return connect(mapState)(RequireAuth);
}
