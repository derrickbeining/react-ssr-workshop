import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchUsers} from 'store/actions';

class UsersList extends Component {
  render () {
    return (
      <div>
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
