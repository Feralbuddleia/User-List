import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddUser from '../containers/AddUser';
import EditUser from '../containers/EditUser';
import Dashboard from '../containers/Dashboard';
import Login from '../containers/Login';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/users" component={Dashboard} />
    <Route path="/users/add" component={AddUser}/>
    <Route path="/users/edit/:login" component={EditUser} />
  </Switch>
)

export default Router;