import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styling/ReviewModal.css';
function ReviewModal ({setReviewmodalshow}) {

  const [rating, setRating] = useState(null);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [chars, setChars] = useState({});

  const handleOnchange = (e) => {
    if (e.target.name === 'recommend') {
      if (e.target.value === 'true') {
        setRecommend(true)
      } else if (e.target.value === 'false') {
        setRecommend(false)
      }
    } else if (e.target.name === 'nickname') {
      setName(e.target.value)
    } else if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'reviewsummary') {
      setSummary(e.target.value);
    } else if (e.target.name === 'reviewbody') {
      setBody(e.target.value);
    }

  }


  return(
    <div className='reviewmodal'>
      <div className='review-modal-content'>
        <div className='review-modal-header'>
          <h3 className='review-modal-title'>Write Review</h3>
        </div>
        <div className='review-modal-body'>
          <div className='reviewoverallrating'>
            Overall Rating: Stars placeholder
          </div>
          <div className='recommendproduct'>
            <label>Do you recommend this product?</label>
            <input type="radio" name="recommend" id="inlineradioyes" value='true'  onChange={handleOnchange}></input>
            <label>Yes</label>
            <input type="radio" name="recommend" id="inlineradiono" value='false'  onChange={handleOnchange}></input>
            <label>No</label>
          </div>
          <div className='nickname'>
            <label>Your nickname: </label>
            <input type="text" name="nickname" required maxLength='60'
            id='reviewnickname' placeholder='Example: jackson11!'
            value={name} onChange={handleOnchange}></input>
          </div>
          <p id='note'>For privacy reasons, do not use your full name or email address</p>
          <div className='email'>
            <label>Your email: </label>
            <input type="text" name="email" required maxLength='60' id='reviewemail' placeholder='Example: jackson11@gmail.com'
            value={email} onChange={handleOnchange}></input>
          </div>
          <p id='note'>For authentication reasons, you will not be emailed</p>
          <div>
            Char place holder
          </div>
          <div className='reviewsummarycontainer'>
            <div className='reviewsummarylabel'>
              <label>Review Summary: </label>
            </div>
            <textarea maxLength='60' id='reviewsummary' required
            name='reviewsummary' placeholder='Example: Best Purchase ever!' value={summary} onChange={handleOnchange}></textarea>
          </div>
          <div className='reviewbodycontainer'>
            <div className='reviewbodylabel'>
              <label>Review Body: </label>
            </div>
            <textarea maxLength='1000' id='reviewbody' required
            name='reviewbody' placeholder='Why did you like the product? If not, why did you not like?' value={body} onChange={handleOnchange}></textarea>
            {body.length < 50 ?
            <p id='note'>Minimum required characters left: {50-body.length}</p>
            :
            <p id='note'>Minimum reached</p>
            }
          </div>
          <div>
            Upload Photo placeholder
          </div>


        </div>
        <div className='review-modal-footer'>
          <input type="button" id="closereviewmodal" value="Close" onClick={(e)=>
            { e.preventDefault();
              setReviewmodalshow(false);}}/>
          <input type="button" id="submitnewreview" value="Submit"/>


        </div>

      </div>

    </div>
  )

};

export default ReviewModal;