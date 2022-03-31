import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar.jsx';
import Question from './components/Question.jsx';
import Answer from './components/Answer.jsx';


class QuestionMain extends React.Component {
  constructor (props) {
    super (props);
  }




  render() {
    return (

      <div>

        <h1>QUESTIONS & ANSWERS</h1>
        <br></br>
        <SearchBar />
        <br></br>
        <Question />
        <br></br>
        <Answer />
      </div>

    )
  }
}

export default QuestionMain;