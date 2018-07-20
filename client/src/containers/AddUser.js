import { connect } from 'react-redux';
import { addNewUser } from '../actions/user';
import UserForm from '../components/UserForm';

const mapStateToProps = (state, ownProps) => ({
  isLogin: state.authentication.loginInfo !== null
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: user => dispatch(addNewUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
