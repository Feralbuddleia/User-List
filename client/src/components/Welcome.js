import React from 'react';
import { Button } from 'reactstrap'


const Welcome = props => (
  <div className="mt-4 text-right">
    Welcome, 
    <span className="text-danger">
      {' ' + props.firstName}! 
    </span>
    {'   '}
    <Button color='success' onClick={props.logout}>
      Logout
    </Button>
  </div>
)

export default Welcome;