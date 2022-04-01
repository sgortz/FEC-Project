import React from 'react';
import LoadMoreQuestions from './LoadMoreQuestions.jsx';
import QAEntry from './QAEntry.jsx';





const QAList = ({questionList}) => {




  return (

    <div className = 'QAList'>

      {(questionList.slice(0, 4)).map((question, index) =>
        <QAEntry key = {question.question_id} question = {question}/>
      )}

    </div>


  )
}



export default QAList;