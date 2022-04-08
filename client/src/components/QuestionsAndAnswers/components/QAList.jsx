import React from 'react';
import QAEntry from './QAEntry.jsx';
import "./QuestionAndAnswers.css";



const QAList = ({ filteredQuestions, questionNumber,searchTerm }) => {

  return (

    <div className='QAList'>

      {
        (filteredQuestions.slice(0, questionNumber)).map((question) => (
          <QAEntry key={question.question_id} question={question} searchTerm={searchTerm}/>
        ))
      }

    </div>

  )
}


export default QAList;