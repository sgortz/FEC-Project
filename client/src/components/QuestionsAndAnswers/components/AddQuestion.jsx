import React, { useState } from 'react';
import axios from 'axios';
import "./QuestionAndAnswers.css";



const AddQuestion = ({ handleOpenModel, product_id, addQuestion }) => {

  const [questionBody, setQuestionBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    //verify email
    let verifyEmail = (email) => {
      let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailPattern.test(email);
    }

    if (verifyEmail(email) && name.length > 0 && questionBody.length > 0) {
      var data = { product_id: product_id, body: questionBody, name: name, email: email };
      addQuestion(data);
      axios.post('/qa/questions', data)
        .then(res => {
          console.log('Your question is posted: ', res.data)
          handleOpenModel();
        })
        .catch(err => {
          console.log("Couldn't post your question: ", err)
        })
    } else if (name.length === 0 || questionBody.length === 0) {
      alert("You must enter the following: name, email and question");
    } else if (!verifyEmail(email)) {
      alert("Please enter an valid email address!");
    }
  }

  const handleOnchange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value)
    } else if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else {
      setQuestionBody(e.target.value)
    }
  }

  return (
    <div className='QAmodel'>

      <form className='QAmodalContent'>
        <h3 className='QAmodelTitle'>Ask Your Question</h3>
        <label htmlFor='nickname'>Your Name * : </label>
        <input type='text' name='name' required
          maxLength='60'
          placeholder='Example: jackson11'
          onChange={handleOnchange}
          value={name} />
        <p>For privacy reasons, do not use your full name or email address. </p>
        <label htmlFor='email'>Your Email * : </label>
        <input type='email' name='email' required
          maxLength='60'
          placeholder='Example: jackson11@gmail.com'
          onChange={handleOnchange}
          value={email}
        />
        <p>For authentication reasons, you will not be emailed.</p>
        <label htmlFor='question'>Your Question * : </label>
        <textarea maxLength='1000' name='questionBody' required
          placeholder='Enter your question here...'
          onChange={handleOnchange}
          value={questionBody}
        ></textarea>
        <div>
          <span>
            <button className='QAcloseBtn' onClick={handleOpenModel}>Close</button>
          </span>
          <span>
            <button className='QAsubmitBtn' onClick={handleQuestionSubmit}>Submit</button>
          </span>
        </div>
      </form>

    </div>


  )
}



export default AddQuestion;