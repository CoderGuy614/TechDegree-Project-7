import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class SearchForm extends Component {
  // The searchText is stored in state and used to pass the form input data to the search function
  state = {
    searchText: '',
    loading: this.props.loading
  }
  // Setting the value of searchText
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  // This function passes the from input to the onSearch prop, which calls the performSearch function for that term.
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value)
    e.currentTarget.reset();

  }
  // Rendering the components.  
  // For the home route, or if there is no search input, the user gets redirected to the default search term, "cats".
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <input type="search" 
               onChange={this.onSearchChange}
               name="search" 
               ref={(input) => this.query = input }
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
            {(this.props.title === '' || this.props.title === 'undefined')
            ? <Redirect exact to={ `/` } />
            : <Redirect to={ `/search/${this.props.title}` }/>
            })
      </form>      
    );
  }
}