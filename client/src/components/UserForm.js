import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withRouter, Redirect } from 'react-router-dom';
import { getUserByLogin } from '../apis';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Add User',
      login: '',
      firstName: '',
      lastName: '',
      gender: '',
      age: '',
      password: '',
      repeat:'',
      error: ''
    }
  }

  componentDidMount() {
    const { login } = this.props.match.params;
    if (login) { 
      this.setState({
        title: 'Update User'
      })
      getUserByLogin(login)
        .then(res => {
          this.loadUserInfo(res.data[0]);
        })
        .catch(err => {});
    }
  }

  loadUserInfo = user => {
    const { login, firstName, lastName, gender, age } = user;
      if (login) {
        this.setState({
          login: login
        });
      }
      if (firstName) {
        this.setState({
          firstName: firstName
        });
      }
      if (lastName) {
        this.setState({
          lastName: lastName
        });
      }
      if (gender) {
        this.setState({
          gender: gender
        });
      }
      if (age) {
        this.setState({
          age: age
        })
      }
  }

  loginChange = e => {
    this.setState({
      login: e.target.value
    });
  }

  firstNameChange = e => {
    this.setState({
      firstName: e.target.value
    });
  }

  lastNameChange = e => {
    this.setState({
      lastName: e.target.value
    });
  }

  genderChange = e => {
    this.setState({
      gender: e.target.value
    });
  }

  ageChange = e => {
    this.setState({
      age: e.target.value
    });
  }

  pwdChange = e => {
    this.setState({
      password: e.target.value
    });
  }

  rpwdChange = e => {
    this.setState({
      repeat: e.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();
    const { login, firstName, lastName, gender, age, password, repeat} = this.state;

    if (login.trim() === '') {
      this.setMessage('login field is empty');
    } else if (firstName.trim() === '') {
      this.setMessage('First Name is empty');
    } else if (lastName.trim() === '') {
      this.setMessage('Last Name is empty');
    } else if (this.state.title ==='Add User' && password.trim() === '') {
      this.setMessage('password is empty');
    } else if (password !== repeat) {
      this.setMessage('repeat is not equal to password');
    } else {
      const user = {
        login,
        firstName,
        lastName,
        gender,
        age,
        password
      }
      this.props.handleSubmit(user);
      this.props.history.push('/users');
    }
  }

  setMessage = msg => {
    this.setState({
      error: msg
    });
  }

  render() {
    return this.props.isLogin
           ? (
              <Form onSubmit={this.onSubmit}>
                <FormGroup row>
                  <Label sm={{ size: 2, offset: 3}} >
                    <h3 className='text-primary'>
                    {this.state.title}
                    </h3>
                  </Label>
                </FormGroup>
                <FormGroup row>
                  <Label className='text-right' for="login" sm={{ size: 2, offset: 2}}>Login</Label>
                  <Col sm={4}>
                    <Input type="text" id="login" onChange={this.loginChange} value={this.state.login}
                      disabled={this.props.user} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label className='text-right' for="firstName" sm={{ size: 2, offset: 2}}>First Name</Label>
                  <Col sm={4}>
                    <Input type="text" id="firstName" onChange={this.firstNameChange} value={this.state.firstName} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label className='text-right' for="lastName" sm={{ size: 2, offset: 2}}>Last Name</Label>
                  <Col sm={4}>
                    <Input type="text" id="lastName" onChange={this.lastNameChange} value={this.state.lastName} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label className='text-right' for="gender" sm={{ size: 2, offset: 2}}>gender</Label>
                  <Col sm={4}>
                    <Input type="text" id="gender" onChange={this.genderChange} value={this.state.gender} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label className='text-right' for="age" sm={{ size: 2, offset: 2}}>Age</Label>
                  <Col sm={4}>
                    <Input type="text" id="age" onChange={this.ageChange} value={this.state.age} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label className='text-right' for="pwd" sm={{ size: 2, offset: 2}}>Password</Label>
                  <Col sm={4}>
                    <Input type="password" id="pwd" onChange={this.pwdChange} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label className='text-right' for="rpwd" sm={{ size: 2, offset: 2}}>Repeat</Label>
                  <Col sm={4}>
                    <Input type="password" id="rpwd" onChange={this.rpwdChange} />
                  </Col>
                </FormGroup>
                <FormGroup>
                <Col sm={{ size: 8, offset: 5}}>
                  <Label className="text-danger">{this.state.error}</Label>
                </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm={{ size: 8, offset: 5}}>
                    <Button color="primary" type="submit" onClick={this.onSubmit}>
                      Submit
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            )
            : <Redirect to="/" />
  }
}

const WithRouterUserForm = withRouter(UserForm);

export default WithRouterUserForm;