import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAdmins} from 'store/actions';

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

AdminsListPage.loadData = ({dispatch}) => dispatch(fetchAdmins());
const mapState = ({admins}) => ({admins});
export default connect(mapState, {fetchAdmins})(AdminsListPage);
