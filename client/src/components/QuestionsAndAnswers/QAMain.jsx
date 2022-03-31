//input packages
import React from 'react';
import axios from 'axios';
// input components
import SearchBar from './SearchBar.jsx';
import QAList from './QAList.jsx';
import AddQuestion from './AddQuestion.jsx';


const QAMain = () => {

  return (
    <div>

      <h1>QUESTIONS & ANSWERS</h1>
      <br></br>
      <SearchBar />
      <br></br>
      <QAList />

    </div>

  )

}


export default QAMain;