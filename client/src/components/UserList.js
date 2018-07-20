import React, { Component } from "react";
import { getUserData, deleteUser } from "../actions/user";
import { Table, Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import Title from "../containers/Title";

class UserList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getUserData());
  }

  render() {
    const { dispatch } = this.props;
    return (
      <Table>
        <thead>
          <tr>
            <th>Edit</th>
            <th>Delete</th>
            <th>
              <Title search="firstName">First Name</Title>
            </th>
            <th>
              <Title search="lastName">Last Name</Title>
            </th>
            <th>
              <Title search="gender">Gender</Title>
            </th>
            <th>
              <Title search="age">Age</Title>
            </th>
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
                  onClick={() =>
                    this.props.history.push(`/users/edit/${user.login}`)
                  }
                >
                  Edit
                </Button>
              </td>
              <td>
                {" "}
                <Button
                  className="btn btn-default btn-sm"
                  onClick={() => dispatch(deleteUser(user.login))}
                >
                  delete
                </Button>
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
