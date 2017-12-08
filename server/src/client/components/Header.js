import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Header = ({auth}) => {
  const authButton = auth ?
    <a href="/api/logout">Logout</a> :
    <a href="/api/auth/google">Login</a>;

return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/admins">Admins</Link>
      {authButton}
    </div>
  )
};

const mapState = state => ({auth: state.auth});

export default connect(mapState)(Header);
