//input packages
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// input components
import SearchBar from './components/SearchBar.jsx';
import QAList from './components/QAList.jsx';
import AddQuestion from './components/AddQuestion.jsx';


const QuestionAndAnswers = ({ product_id }) => {


  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    axios.get('/qa/questions', { params: { product_id: product_id } })
      .then(res => {
        var sortedQuestions = res.data.results.sort((a, b) => {
          return a.question_helpfulness + b.question_helpfulness;
        })
        setQuestionList(sortedQuestions);
      })
      .catch(err => {
        console.log("err in getting questions per id:", err)
      })
  }, [product_id])

  return (
    <div className = 'QuestionAndAnswers'>
      <h1>QUESTIONS & ANSWERS</h1>
      <br></br>
      <SearchBar />
      <br></br>
      <QAList questionList = {questionList}/>
      <br></br>
      <button>MORE ANSWERED QUESTIONS</button>
      <AddQuestion />
    </div>
  )

}


export default QuestionAndAnswers;