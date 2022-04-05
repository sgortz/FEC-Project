import React, { useState } from 'react';
import Answer from './Answer.jsx';
import Question from './Question.jsx';
import "./QuestionAndAnswers.css";


const QAEntry = ({ question }) => {


  const [answerNumber, setAnswerNumber] = useState(2);

  let answerId = Object.keys(question.answers);
  let answerList = answerId.map(id => question.answers[id])
  let sorterAnswerList = answerList.sort((a, b) => {
    return b.helpfulness - a.helpfulness;
  })
  // console.log(sorterAnswerList)

  return (

    <div className='QAEntry'>
      <Question question={question} />
      {sorterAnswerList.slice(0, answerNumber).map(answer => {
        return <Answer key={answer.id} answer={answer} />;
      })}
    </div>

  );
}

export default QAEntry;