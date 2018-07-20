import { connect } from 'react-redux';
import Message from '../components/Message';

const mapStateToProps = state => ({
  message: state.users.message
});

export default connect(mapStateToProps)(Message);