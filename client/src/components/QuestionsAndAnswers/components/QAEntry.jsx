import React, { useState } from 'react';
import Answer from './Answer.jsx';
import Question from './Question.jsx';
import { BsArrowDownShort, BsArrowUpShort} from "react-icons/bs";
import "./QuestionAndAnswers.css";


const QAEntry = ({ question, searchStatus, searchTerm}) => {


  const [answerNumber, setAnswerNumber] = useState(2);
  const [showMoreAnswer, setShowMoreAnswer] = useState(false);

  let answerId = Object.keys(question.answers);
  let answerList = answerId.map(id => question.answers[id])



  let sortedAnswerList = (answerList.sort((a, b) => {
    return b.helpfulness - a.helpfulness;
  }))

  sortedAnswerList.forEach(answer => {
    if (answer.answerer_name.toLowerCase() ==='seller') {
      let index = sortedAnswerList.indexOf(answer);
      sortedAnswerList.splice(index, 1)
      sortedAnswerList.unshift(answer);
    }
  })


  const handleShowMoreAnswers = () => {
    setAnswerNumber(answerList.length);
    setShowMoreAnswer(showMoreAnswer => !showMoreAnswer);
  }

  const handleCollapseAnswers = () => {
    setShowMoreAnswer(showMoreAnswer => !showMoreAnswer);
    setAnswerNumber(2);
  }

  return (

    <div className='QAEntry'>
      <Question question={question} searchTerm={searchTerm} />
      {sortedAnswerList.slice(0, answerNumber).map(answer => {
        return <Answer key={answer.id} answer={answer} />;
      })}
      {answerList.length > 2 && !showMoreAnswer ?
         <a className ='showMoreA' onClick={handleShowMoreAnswers}><BsArrowDownShort />See more answers ({answerList.length - 2})</a> : null}
      {showMoreAnswer?
          <a className ='collapseA' onClick = {handleCollapseAnswers}><BsArrowUpShort />Collapse all answers</a> : null}
    </div>

  );
}


export default QAEntry;