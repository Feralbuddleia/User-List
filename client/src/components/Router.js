import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddUser from '../containers/AddUser';
import EditUser from '../containers/EditUser';
import VisibleUserList from '../containers/VisibleUserList';

const Router = () => (
  <Switch>
    <Route exact path="/users" component={VisibleUserList} />
    <Route path="/users/add" component={AddUser}/>
    <Route path="/users/edit/:login" component={EditUser} />
  </Switch>
)

export default Router;