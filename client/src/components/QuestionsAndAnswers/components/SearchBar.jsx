import React from 'react';

class SearchBar extends React.Component {
  constructor (props) {
    super (props);
  }




  render() {
    return (
      <div className = 'SearchBar'>
        <input size = '100' type='text' placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'></input>

      </div>

    )
  }
}

export default SearchBar;