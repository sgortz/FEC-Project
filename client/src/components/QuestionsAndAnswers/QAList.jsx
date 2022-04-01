import React from 'react';
import Answer from './Answer.jsx';





const QAList = () => {

  return (
    <div className = 'Question'>
        <strong>Q: This is a hardcoded question?</strong>
        <span>helpful? </span> <button>yes</button> <span> (23) </span>
        <Answer />
        <button>MORE ANSWERED QUESTIONS</button>

    </div>


  )
}



export default QAList;