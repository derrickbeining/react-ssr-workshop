import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAdmins} from 'store/actions';
import requireAuth from 'client/components/hocs/requireAuth';

class AdminsListPage extends Component {
  render () {
    return (
      <div>
        <h2>Protected List of Admins</h2>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }

  componentDidMount () {
    this.props.fetchAdmins();
  }

  renderAdmins () {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  }
}

const authEnforced = requireAuth(AdminsListPage);
const mapState = ({admins}) => ({admins});
const connectedToStore = connect(mapState, {fetchAdmins})(authEnforced);
connectedToStore.loadData = ({dispatch}) => dispatch(fetchAdmins());
export default connectedToStore;
