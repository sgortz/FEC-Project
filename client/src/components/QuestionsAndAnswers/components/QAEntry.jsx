import React from 'react';
import Answer from './Answer.jsx';

const QAEntry = ({question}) => {

  return (

    <div>


      <h3>Q: {question.question_body} </h3>
      {/* need a questionHelpful component */}
      <span>helpful? </span> <button>yes</button> <span> (23) </span> <span>| Add answer </span>
      <h3>A: </h3> <p> </p>


    </div>

  );
}

export default QAEntry;