import React, { Component } from 'react';
import { setSearch } from '../actions/search';
import { getUserData } from '../actions/user';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  handleSearchChange = e => {
    this.setState({
      search: e.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.dispatch(setSearch(this.state.search));
    this.props.dispatch(getUserData());
    this.setState({
      search: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="mt-3 mb-3 text-left">
        Search: 
        {" "}
        <input type="text" onChange={this.handleSearchChange} value={this.state.search}/>
      </form>
    )
  }
}

export default SearchForm;