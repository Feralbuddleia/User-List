import { connect } from 'react-redux';
import { addNewUser } from '../actions/user';
import UserForm from '../components/UserForm';

const mapDispatchToProps = dispatch => ({
  handleSubmit: user => dispatch(addNewUser(user))
});

export default connect(null, mapDispatchToProps)(UserForm);
