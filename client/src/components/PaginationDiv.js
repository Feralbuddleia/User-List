import React from 'react';
import { Button } from 'reactstrap';

const PaginationDiv = (props) => (
  <div>
    <Button 
      outline 
      disabled={props.prevDisabled} 
      onClick={props.handlePrev}> 
      {'<<'} Prev 
    </Button> 
    {' '}
    <Button 
      outline 
      disabled={props.nextDisabled} 
      onClick={props.handleNext}
    > 
      Next {'>>'} 
    </Button> 
    {' '}
  </div>
)

export default PaginationDiv;