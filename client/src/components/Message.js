
import React, { Component } from 'react';
import { setMsg } from '../actions/user';

class Message extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.dispatch(setMsg(''));
      console.log(this.props.message);
    }, 3000)
  }

  render() {
    return (
      <div className="text-success text-center">
        {this.props.message}
      </div>
    )
  }
}

export default Message;