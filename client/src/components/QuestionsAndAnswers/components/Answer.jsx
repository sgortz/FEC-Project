import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import AnswerPhoto from './AnswerPhoto.jsx';
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
        <span className='A'>A:</span>
        <span className='ABody'>{body}</span>
      </div>
      <span className='answerPhotos'>
        {answer.photos.length > 0?
          answer.photos.map((url,index) => (
          <AnswerPhoto key={index} url={url}/> ))
          : null
        }
      </span>
      <div className='answerFooter'>
        {answerer_name.toLowerCase() === "seller"?
          <span> by <strong>Seller</strong>, {moment(date).format('LL')} </span>
          : <span> by {answerer_name}, {moment(date).format('LL')} </span>
        }
        <span className='QAbreak'>|</span>
        <span className='QAhelpful'>Helpful? </span>
        {!helpfulClicked?
        <a className='QAhelpful-button' onClick = {handleClickHelpful}>Yes ({answerHelpful})</a>
        : <a>Yes ({answerHelpful})</a>}
        <span className='QAbreak'>|</span>
        {!reportClicked?
          <a className='QAreport-button' onClick = {handleClickReport}>Report</a>
          : <a>Reported!</a>
        }
      </div>
    </div>
  )

}

export default Answer;