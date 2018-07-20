import React from 'react';
import Search from '../containers/Search';
import VisibleUserList from '../containers/VisibleUserList';
import Pagination from '../containers/Pagination';
import { withRouter, Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';
import ShowMessage from '../containers/ShowMessage';
import ShowWelcome from '../containers/ShowWelcome';

const DashboardPage = (props) => {
  console.log(props);
  return (
  props.isLogin 
  ? (
    <div className="text-left">
      <ShowMessage />
      <ShowWelcome />
      <Search />
      <VisibleUserList />
      <Pagination />
      <div className="mt-3">
        <Button 
          color="info" 
          onClick={() => props.history.push('/users/add')}
        >
          Add New user
        </Button>
      </div>
    </div>
  )
  : <Redirect to="/"/>)
}


export default withRouter(DashboardPage);