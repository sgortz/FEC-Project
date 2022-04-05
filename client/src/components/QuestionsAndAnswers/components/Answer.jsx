import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import "./QuestionAndAnswers.css";

const Answer = ({ answer }) => {
  const {id, body, helpfulness, photo, date, answerer_name} = answer;


  const [answerHelpful, setAnswerHelpful] = useState(helpfulness);
  const [answerReport, setAnswerReport] = useState(false);
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [reportClicked, setReportClicked] = useState(false);


  const handleClickHelpful = () => {
    setAnswerHelpful(answerHelpful+1);
    setHelpfulClicked(helpfulClicked => !helpfulClicked);
    axios.put('/qa/answers/:answer_id/helpful', { answer_id: id })
    .then(res => {
      console.log('Answer is marked helpful')
    })
    .catch(err => {
      console.log("Couldn't mark answer helpful: ", err)
    })
  }

  const handleClickReport = () => {
    setReportClicked(reportClicked => !reportClicked);
    axios.put('/qa/answers/:answer_id/report', { answer_id: id })
    .then(res => {
      console.log('Answer is reported')
    })
    .catch(err => {
      console.log("Couldn't report answer: ", err)
    })

  }

  return (
    <div className='Answer'>
      <div className='answerBody'>
        <p><strong>A: </strong>{body}</p>
      </div>
      <div className='answerFooter'>
        <span> by {answerer_name}, {moment(date).format('LL')} </span>
        <span className='break'>|</span>
        <span className='helpful'>helpful? </span>
        {!helpfulClicked?
        <a className='helpful-button' onClick = {handleClickHelpful}>Yes ({answerHelpful})</a>
        : <a>Yes ({answerHelpful})</a>}
        <span className='break'>|</span>
        {!reportClicked?
          <a className='report-button' onClick = {handleClickReport}>Report</a>
          : <a>Reported!</a>
        }
      </div>
    </div>
  )

}

export default Answer;