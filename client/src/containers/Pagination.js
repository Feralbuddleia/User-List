import { connect } from 'react-redux';
import PaginationDiv from '../components/PaginationDiv';
import { setPageInc, setPageDec } from '../actions/pagination';
import { getUserData } from '../actions/user';

const mapStateToProps = state => ({
  prevDisabled: state.pagination.page === 1,
  nextDisabled: state.pagination.page === state.pagination.pages
});

const mapDispatchToProps = dispatch =>({
  handlePrev: () => {dispatch(setPageDec()); dispatch(getUserData());},
  handleNext: () => {dispatch(setPageInc()); dispatch(getUserData());}
})

export default connect(mapStateToProps, mapDispatchToProps)(PaginationDiv);