import React, { useState } from 'react';
import axios from 'axios';
import ImageModal from '../../SharedComponents/ImageModal.jsx';
import "./QuestionAndAnswers.css";
import '../../SharedComponents/ImageModal.css';

const AddAnswer = ({handleOpenModel, question}) => {

  const{question_body, question_id} = question;


  const [answerBody, setAnswerBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [embedImgUrl, setEmbedImgUrl] = useState('');
  const [showUploadBtn, setShowUploadBtn] = useState(true);


  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    //verify email
    let verifyEmail = (email) => {
      let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailPattern.test(email);
    }

    if (verifyEmail(email) && name.length > 0 && answerBody.length > 0) {
      var data = { question_id: question_id, body: answerBody, name: name, email: email, photos:photos};

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
    } else if (! validURL(photos)) {
      alert("Please enter an valid url!");
    }
  }

  const handleOnchange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'answerBody') {
      setAnswerBody(e.target.value)
    } else {
      setEmbedImgUrl(e.target.value);
    }
  }


  const handleAddPhoto = (e) => {
    e.preventDefault();
    var img = new Image();
    img.src = embedImgUrl;

    img.onload = () => {
      var newPhotos = [...photos];
      newPhotos.push(embedImgUrl);
      setPhotos(newPhotos);
    };
    img.onerror = (err) => {
      alert('You must enter a valid picture url')
    }

    setShowUploadBtn(true);
    setEmbedImgUrl('');
  }


  return (


    <div >
      <div className='QAmodel'>
        <form className='QAmodalContent'>
          <h3 className='QAmodelTitle'>Submit your Answer</h3>

          <label htmlFor='nickname'>Your Name * : </label>
          <input id = 'name' type='text' name='name' required
            maxLength='60'
            placeholder='Example: jackson11'
            onChange={handleOnchange}
            value={name} />
          <p>For privacy reasons, do not use your full name or email address. </p>

          <label htmlFor='email'>Your Email * : </label>
          <input id= 'email' type='email' name='email' required
            maxLength='60'
            placeholder='Example: jackson11@gmail.com'
            onChange={handleOnchange}
            value={email} />
          <p>For authentication reasons, you will not be emailed.</p>

          <label htmlFor='answer'>Your Answer * : </label>
          <textarea id='answerBody' maxLength='1000' name='answerBody' required
            placeholder='Enter your answer here...'
            onChange={handleOnchange}
            value={answerBody}></textarea>


           <div className='QA-modal-footer'>
            {showUploadBtn && photos.length < 5?
                <div>
                  <input type="button" value='Upload Pictures' onClick={(e)=>{setShowUploadBtn(false)}}/>
                  <p id='note' style={{display: 'inline'}}> (Optional)</p>
                </div>
              : showUploadBtn === false?
                <div >
                  <input className='QAaddPhotoModel' type="text" name="photo" required
                  placeholder='Paste the image link here'
                  value={embedImgUrl} onChange={handleOnchange}></input>
                  <input className = 'embedPhotoBtn' type="button" value='Add' onClick={handleAddPhoto}></input>
                </div>
              : null
            }
           </div>

          <div className="AnswerNewPhotos">
            {photos.length > 0?
            photos.map((photo, index)=><ImageModal key={index} url={photo}/>)
            :null}
          </div>

          <div>
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