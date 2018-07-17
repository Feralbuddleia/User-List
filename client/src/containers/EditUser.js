import UserForm from '../components/UserForm';
import { connect } from 'react-redux';
import { updateUser } from '../actions/user';

const mapStateToProps = (state, ownProps) => ({
  user: ownProps.user
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: user => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);