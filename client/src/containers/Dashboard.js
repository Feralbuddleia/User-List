import { connect } from 'react-redux';
import DashboardPage from '../components/DashboardPage';

const mapStateToProps = state => ({
  isLogin: state.authentication.loginInfo !== null
});

export default connect(mapStateToProps)(DashboardPage);