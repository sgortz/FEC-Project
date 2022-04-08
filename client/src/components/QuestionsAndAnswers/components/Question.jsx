import React, { useState } from 'react';
import axios from 'axios';
import Highlighter from "react-highlight-words";
import AddAnswer from './AddAnswer.jsx';
import "./QuestionAndAnswers.css";


const Question = ({ question, searchStatus, searchTerm }) => {

  const [showAnswerModel, setShowAnswerModel] = useState(false);
  const [questionHelpful, setQuestionHelpful] = useState(question.question_helpfulness);
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [reportClicked, setReportClicked] = useState(false);



  const handleOpenModel = () => {
    setShowAnswerModel(showAnswerModel => !showAnswerModel);
  }

  const handleClickHelpful = () => {
    setQuestionHelpful(questionHelpful + 1);
    setHelpfulClicked(helpfulClicked => !helpfulClicked);
    axios.put('/qa/questions/:question_id/helpful', { question_id: question.question_id })
      .then(res => {
        console.log('Question is marked helpful')
      })
      .catch(err => {
        console.log("Couldn't mark question helpful: ", err)
      })
  }

  const MakeTitle = ({titleText, searchStatus, searchTerm}) => {
    return (
      <div id="question">
        <Highlighter
          highlightClassName="QAHighlightClass"
          searchWords={[searchTerm]}
          autoEscape={true}
          textToHighlight={`Q:   ${titleText}`}
        />
      </div>
    );
  }


  return (

    <div className='questionContainer'>
      <div className='QAinlineLeft'>
        {/* <span >Q: {question.question_body} </span> */}
        <MakeTitle titleText={question.question_body} searchStatus={searchStatus} searchTerm={searchTerm} />
      </div>
      <div className='QAinlineRight'>
        <span className='QAhelpful'>Helpful? </span>
        {!helpfulClicked ?
          <a className='QAhelpful-button' onClick={handleClickHelpful}>Yes ({questionHelpful}) </a>
          : <a>Yes ({questionHelpful})</a>
        }
        <span className='QAbreak'>|</span>
        <a className='add-answer' onClick={handleOpenModel}>Add Answer</a>
        {showAnswerModel ?
          <AddAnswer question={question} handleOpenModel={handleOpenModel} /> : null}
      </div>
    </div>
  )

}

export default Question;