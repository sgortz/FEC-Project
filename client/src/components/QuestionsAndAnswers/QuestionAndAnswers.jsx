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
  const [searchTerm, setSearchTerm] = useState('');
  const [showModel, setShowModel] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(2);
  const [collapseQuestions, setCollapseQuestions] = useState(true)

  const handleSearch = (term) => {
    setSearchTerm(term);
    let filteredQuestions = questionList.filter(
      q => q.question_body.toLowerCase().includes(term.toLowerCase()));
    setFilteredQuestions(filteredQuestions);

  }

  const handleOpenModel = () => {
    setShowModel(showModel => !showModel);
  }

  const showMoreQuestion = () => {
    setQuestionNumber(questionList.length);
    setCollapseQuestions(prev => !prev);
  }

  const closeQuestions = () => {
    setQuestionNumber(2);
    setCollapseQuestions(prev => !prev);
  }


  useEffect(() => {
    axios.get('/qa/questions', { params: { product_id: product_id } })
      .then(res => {
        var sortedQuestions = res.data.results.sort((a, b) => {
          return a.question_helpfulness + b.question_helpfulness;
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
      <h1>QUESTIONS & ANSWERS</h1>
      <br></br>
      <SearchBar handleSearch={handleSearch} searchTerm={searchTerm} />
      <br></br>
      {questionList ?
        <QAList questionList={questionList} filteredQuestions={filteredQuestions}
          questionNumber={questionNumber} /> : null}
      <br></br>
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