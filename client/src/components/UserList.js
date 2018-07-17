import React, { Component } from "react";
import { getUserData, deleteUser } from "../actions/user";
import { Table, Button } from "reactstrap";
import { withRouter } from 'react-router-dom';

class UserList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getUserData());
  }

  render() {
    console.log(this.props);
    const { dispatch } = this.props;
    return (
      <Table>
        <thead>
          <tr>
            <th>Edit</th>
            <th>Delete</th>
            <th>First Name </th>
            <th>Last Name </th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {this.props.users.map(user => (
            <tr key={user._id}>
              <td>
                {" "}
                <Button
                  color="primary" 
                  className="btn btn-sm"
                  onClick= { () => this.props.history.push(`/users/edit/${user.login}`)}
                >Pencil</Button>
              </td>
              <td>
                {" "}
                <Button 
                  className="btn btn-default btn-sm"
                  onClick={() => dispatch(deleteUser(user.login))}
                >delete</Button>
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default withRouter(UserList);
