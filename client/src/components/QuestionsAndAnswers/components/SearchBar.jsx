import React, { useState } from 'react';
import "./QuestionAndAnswers.css";





const SearchBar = ({ handleSearch, searchTerm }) => {

  const onChange = (e) => {
    handleSearch(e.target.value);
  }

  return (

      <div className = 'searchBar'>
        <input size = '100' type='text' placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        onChange = {onChange} value = {searchTerm} /><i className="fa fa-search"></i>

      </div>


  )

}



export default SearchBar;

