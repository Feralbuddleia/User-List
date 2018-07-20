import { connect } from "react-redux";
import Welcome from '../components/Welcome';
import { setLoginOut } from '../actions/authentication';


const mapStateToProps = state => ({
  firstName: state.authentication.loginInfo.firstName
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(setLoginOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);