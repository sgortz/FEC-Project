import React, { useState } from 'react';
import axios from 'axios';
import "./QuestionAndAnswers.css";

const AddAnswer = ({handleOpenModel, question}) => {

  const{question_body, question_id} = question;


  const [answerBody, setAnswerBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    //verify email
    let verifyEmail = (email) => {
      let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailPattern.test(email);
    }

    if (verifyEmail(email) && name.length > 0 && answerBody.length > 0) {
      var data = { question_id: question_id, body: answerBody, name: name, email: email };

      axios.post('/qa/questions/:question_id/answers', data)
        .then(res => {
          console.log('Your answer is posted: ', res.data)
          handleOpenModel();
        })
        .catch(err => {
          console.log("Couldn't post your answer: ", err)
        })
    } else if (name.length === 0 || answerBody.length === 0) {
      alert("You must enter the following: name, email and answer");
    } else if (!verifyEmail(email)) {
      alert("Please enter an valid email address!");
    }
  }

  const handleOnchange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else {
      setAnswerBody(e.target.value)
    }
  }

  const handleAddPhoto = (e) => {
    console.log(e.target.files[0]);
    let img = e.target.files[0];
    let imgUrl = URL.createObjectURL(img);
    setPhotos([...photos, imgUrl]);
  }

  return (


    <div >
      <div className='QAmodel'>
        <form className='QAmodalContent'>
          <h3 className='QAmodelTitle'>Submit your Answer</h3>

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
            value={email} />
          <p>For authentication reasons, you will not be emailed.</p>

          <label htmlFor='answer'>Your Answer * : </label>
          <textarea maxLength='1000' name='answerBody' required
            placeholder='Enter your answer here...'
            onChange={handleOnchange}
            value={answerBody}></textarea>

          <label htmlFor = 'photos'>Upload Photos (Optional): </label>
          <input type='file' onChange={handleAddPhoto}></input>



          <div>
            <span>
            <button className='QAuploadBtn'>Upload</button>
            </span>
            <span>
              <button className='QAcloseBtn' onClick={handleOpenModel}>Close</button>
            </span>
            <span>
              <button className='QAsubmitBtn' onClick={handleAnswerSubmit}>Submit</button>
            </span>
          </div>
        </form>

      </div>

    </div>


  )
}



export default AddAnswer;