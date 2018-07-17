import UserList from '../components/UserList';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  users: state.users.data
});

export default connect(mapStateToProps)(UserList);
