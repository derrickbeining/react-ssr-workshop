import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Helmet} from 'react-helmet';
import {fetchUsers} from 'store/actions';

class UsersList extends Component {
  render () {
    return (
      <div>
        {this.setPageHeader()}
        Here's a list of users:
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    )
  }

  componentDidMount () {
    this.props.fetchUsers();
  }

  setPageHeader () {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>)
  }

  renderUsers () {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  static loadData (store) {
    return store.dispatch(fetchUsers());
  }

}

const mapState = state => ({users: state.users});

export default connect(mapState, {fetchUsers})(UsersList);
