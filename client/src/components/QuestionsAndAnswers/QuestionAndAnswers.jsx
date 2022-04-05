//import packages
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import components
import SearchBar from './components/SearchBar.jsx';
import QAList from './components/QAList.jsx';
import AddQuestion from './components/AddQuestion.jsx';


const QuestionAndAnswers = ({ product_id }) => {


  const [questionList, setQuestionList] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(2);
  const [collapseQuestions, setCollapseQuestions] = useState(true)


  const handleSearch = (term) => {
    if (term.length > 2) {
      let filteredQuestions = questionList.filter(
        q => q.question_body.toLowerCase().includes(term.toLowerCase()));
      setFilteredQuestions(filteredQuestions);
    } else {
      setFilteredQuestions(questionList);
    }
  }

  const handleOpenModel = () => {
    setShowModel(showModel => !showModel);
  }

  const showMoreQuestion = () => {
    setQuestionNumber(questionList.length);
    setCollapseQuestions(prev => !prev)
  }

  const closeQuestions = () => {
    setQuestionNumber(2);
    setCollapseQuestions(prev => !prev);
  }


  useEffect(() => {
    axios.get('/qa/questions', { params: { product_id: product_id } })
      .then(res => {
        var sortedQuestions = res.data.results.sort((a, b) => {
          return b.question_helpfulness - a.question_helpfulness;
        })
        setQuestionList(sortedQuestions);
        setFilteredQuestions(sortedQuestions);
      })
      .catch(err => {
        console.log("err in getting questions per id:", err)
      })
  }, [product_id])


  return (
    <div className='QuestionAndAnswers'>

      <h2>QUESTIONS & ANSWERS</h2>
      <SearchBar handleSearch={handleSearch}/>

      {questionList ?
        <QAList filteredQuestions={filteredQuestions} questionNumber={questionNumber}/> : null}

      {filteredQuestions.length > 2  && collapseQuestions ?
        <button onClick={showMoreQuestion} >MORE ANSWERED QUESTIONS</button> : null}

      {!collapseQuestions ?
        <button onClick = {closeQuestions}>GO BACK</button> : null}
      <button onClick={handleOpenModel} >ADD A QUESTION</button>

      {showModel ?
        <AddQuestion product_id={product_id} handleOpenModel={handleOpenModel} /> : null}

    </div>
  )

}

export default QuestionAndAnswers;