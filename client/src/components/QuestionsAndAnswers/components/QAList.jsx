import React from 'react';
import QAEntry from './QAEntry.jsx';
import "./QuestionAndAnswers.css";



const QAList = ({ filteredQuestions, questionNumber }) => {

  return (

    <div className='QAList'>

      {
        (filteredQuestions.slice(0, questionNumber)).map((question) => (
          <QAEntry key={question.question_id} question={question} />
        ))
      }

    </div>

  )
}


export default QAList;