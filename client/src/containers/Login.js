import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isLogin: state.authentication.loginInfo !== null,
  error: state.authentication.error
});

export default connect(mapStateToProps)(LoginForm);

