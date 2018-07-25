import { connect } from "react-redux";
import React from "react";
import { setSort } from "../actions/sort";
import { getUserData } from "../actions/user";

const Title = ({ doSort, children }) => (
  <a href="#" onClick={doSort}>
    {children}
  </a>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  doSort: () => {
    dispatch(setSort(ownProps.sort));
    dispatch(getUserData());
    return false;
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Title);
