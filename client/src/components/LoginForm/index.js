import React, { Component } from 'react';
import { userLogin } from '../../actions/authentication';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { withRouter, Redirect } from 'react-router-dom';
import './index.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      message: ''
    }
  }

  handleLoginChange = e => {
    this.setState({
      login: e.target.value
    });
  }

  handlePwdChange = e => {
    this.setState({
      password: e.target.value
    });
  }

  setMessage = msg => {
    this.setState({
      message: msg
    });
  }

  onSubmit = e => {
    e.preventDefault();
    const { login, password } = this.state;
    console.log(login, password);
    if (login.trim() === '') {
      this.setMessage('login user name is empty');
    } else if (password.trim() === '') {
      this.setMessage('password is empty');
    } else {
      console.log(login, password);
      this.props.dispatch(userLogin(login, password));
      this.setMessage(this.props.message);
    } 
  }

  render() {
    const { isLogin } = this.props;
    return isLogin 
            ? <Redirect to={{pathname: '/users', state: {isLogin}}} />
            : (
              <div className="d-flex justify-content-center">
                <Form onSubmit={this.onSubmit} className="Login-form">
                  <FormGroup>
                    <Label for="login">
                      username
                    </Label>
                    <Input type="text" id="login" onChange={this.handleLoginChange} value={this.state.login} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="pwd">
                      password
                    </Label>
                    <Input type="password" id="pwd"  onChange={this.handlePwdChange} value={this.state.password} />
                  </FormGroup>
                  <FormGroup>
                    <Label className="text-danger">
                      {this.props.error}
                    </Label>
                  </FormGroup>
                  <FormGroup row className="d-flex justify-content-center">
                    <Button onClick={this.onSubmit}>
                      Submit
                    </Button>
                  </FormGroup>
                </Form>
              </div>
            )
  }
}

export default withRouter(LoginForm);