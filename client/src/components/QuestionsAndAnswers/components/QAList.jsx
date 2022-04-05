import React from 'react';
import LoadMoreQuestions from './LoadMoreQuestions.jsx';
import QAEntry from './QAEntry.jsx';





const QAList = ({ questionList, filteredQuestions, questionNumber }) => {





  return (

    <div className='QAList'>

      {
        (filteredQuestions.slice(0, questionNumber)).map((question, index) => (
          <QAEntry key={question.question_id} question={question} />
        ))
      }

    </div>

  )
}


export default QAList;