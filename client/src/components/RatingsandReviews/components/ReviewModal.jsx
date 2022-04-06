import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styling/ReviewModal.css';
function ReviewModal ({product_id, productChars, setReviewmodalshow}) {

  const [rating, setRating] = useState(5);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [chars, setChars] = useState({});

  const [size, setSize] = useState('None Selected');
  const [comfort, setComfort] = useState('None Selected');
  const [quality, setQuality] = useState('None Selected');
  const [width, setWidth] = useState('None Selected');
  const [length, setLength] = useState('None Selected');
  const [fit, setFit] = useState('None Selected');





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
    } else if (e.target.name === 'size') {
      setSize(e.target.value);
      if (Object.keys(productChars).indexOf('Size') !== -1) {
        var charid = productChars['Size'].id
      }
      var newchars = {...chars};
      newchars[charid] = e.target.value;
      setChars(newchars)
    } else if (e.target.name === 'comfort') {
      setComfort(e.target.value);
      if (Object.keys(productChars).indexOf('Comfort') !== -1) {
        var charid = productChars['Comfort'].id
      }
      var newchars = {...chars};
      newchars[charid] = e.target.value;
      setChars(newchars)
    } else if (e.target.name === 'quality') {
      setQuality(e.target.value);
      if (Object.keys(productChars).indexOf('Quality') !== -1) {
        var charid = productChars['Quality'].id
      }
      var newchars = {...chars};
      newchars[charid] = e.target.value;
      setChars(newchars)
    } else if (e.target.name === 'width') {
      setWidth(e.target.value);
      if (Object.keys(productChars).indexOf('Width') !== -1) {
        var charid = productChars['Width'].id
      }
      var newchars = {...chars};
      newchars[charid] = e.target.value;
      setChars(newchars)
    } else if (e.target.name === 'length') {
      setLength(e.target.value);
      if (Object.keys(productChars).indexOf('Length') !== -1) {
        var charid = productChars['Length'].id
      }
      var newchars = {...chars};
      newchars[charid] = e.target.value;
      setChars(newchars)
    } else if (e.target.name === 'fit') {
      setFit(e.target.value);
      if (Object.keys(productChars).indexOf('Fit') !== -1) {
        var charid = productChars['Fit'].id
      }
      var newchars = {...chars};
      newchars[charid] = e.target.value;
      setChars(newchars)
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let verifyemail = emailPattern.test(email);
    let verifyallreviewradioschecked = Object.keys(chars).length === Object.keys(productChars).length;
    let verifyname = name.length > 0;
    let verifysummary = summary.length > 0;
    let verifybody = body.length > 50;
    let verifyrating = rating !== null;
    let verifyrecommend = recommend !== null;

    if (verifyallreviewradioschecked && verifyemail && verifyname && verifysummary && verifybody && verifyrating && verifyrecommend) {
      alert('we\'ll submit your review shortly ');

    } else {
      alert('You must enter the following: name, email, rating, recommend, summary, body');
    }

  }


  return(
    <div className='reviewmodal'>
      <div className='review-modal-content'>
        <div className='review-modal-header'>
          <h2 className='review-modal-title-1'>Write Your Review</h2>
          <h4 className='review-modal-title-2'>About the [Product Name] </h4>
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


          <div className='newreviewallchars'>
            {productChars.Size ?
              <div className='newreviewbox'>
                <div className='newreviewcharlabel'>Size</div>
                <div className='newreviewchardes'>{size}</div>
                <div className='newreview size'>
                  <div className='sizecheckboxgroup'>
                    <input type='radio' name='size' id='sizeradiobt1' value='A size too small' onChange={handleOnchange}/>
                    <label>A size too small</label>
                  </div>
                  <div className='sizecheckboxgroup'>
                    <input type='radio' name='size' id='sizeradiobt2' value='1/2 a size too small' onChange={handleOnchange}/>
                    <label>1/2 a size too small</label>
                  </div>
                  <div className='sizecheckboxgroup'>
                    <input type='radio' name='size' id='sizeradiobt3' value='Perfect' onChange={handleOnchange}/>
                    <label>Perfect</label>
                  </div>
                  <div className='sizecheckboxgroup'>
                    <input type='radio' name='size' id='sizeradiobt4' value='1/2 a size too big' onChange={handleOnchange}/>
                    <label>1/2 a size too big</label>
                  </div>
                  <div className='sizecheckboxgroup'>
                    <input type='radio' name='size' id='sizeradiobt5' value='A size too wide' onChange={handleOnchange}/>
                    <label>A size too wide</label>
                  </div>
                </div>
              </div>
              : null
            }

            {productChars.Comfort?
              <div className='newreviewbox'>
                <div className='newreviewcharlabel'>Comfort</div>
                <div className='newreviewchardes'>{comfort}</div>
                <div className='newreview comfort'>
                  <div className='comfortcheckboxgroup'>
                    <input type='radio' name='comfort' id='comfortradiobt1' value='Uncomfortable' onChange={handleOnchange}/>
                    <label>Uncomfortable</label>
                  </div>
                  <div className='comfortcheckboxgroup'>
                    <input type='radio' name='comfort' id='comfortradiobt2' value='Slightly uncomfortable' onChange={handleOnchange}/>
                    <label>Slightly uncomfortable</label>
                  </div>
                  <div className='comfortcheckboxgroup'>
                    <input type='radio' name='comfort' id='comfortradiobt3' value='Ok' onChange={handleOnchange}/>
                    <label>Ok</label>
                  </div>
                  <div className='comfortcheckboxgroup'>
                    <input type='radio' name='comfort' id='comfortradiobt4' value='Comfortable' onChange={handleOnchange}/>
                    <label>Comfortable</label>
                  </div>
                  <div className='comfortcheckboxgroup'>
                    <input type='radio' name='comfort' id='comfortradiobt5' value='Perfect' onChange={handleOnchange}/>
                    <label>Perfect</label>
                  </div>
                </div>
              </div>
              : null
            }

            {productChars.Quality?
              <div className='newreviewbox'>
                <div className='newreviewcharlabel'>Quality</div>
                <div className='newreviewchardes'>{quality}</div>
                <div className='newreview quality'>
                  <div className='qualitycheckboxgroup'>
                    <input type='radio' name='quality' id='qualityradiobt1' value='Poor' onChange={handleOnchange}/>
                    <label>Poor</label>
                  </div>
                  <div className='qualitycheckboxgroup'>
                    <input type='radio' name='quality' id='qualityradiobt2' value='Below average' onChange={handleOnchange}/>
                    <label>Below average</label>
                  </div>
                  <div className='qualitycheckboxgroup'>
                    <input type='radio' name='quality' id='qualityradiobt3' value='What I expected' onChange={handleOnchange}/>
                    <label>What I expected</label>
                  </div>
                  <div className='qualitycheckboxgroup'>
                    <input type='radio' name='quality' id='qualityradiobt4' value='Pretty great' onChange={handleOnchange}/>
                    <label>Pretty great</label>
                  </div>
                  <div className='qualitycheckboxgroup'>
                    <input type='radio' name='quality' id='qualityradiobt5' value='Perfect' onChange={handleOnchange}/>
                    <label>Perfect</label>
                  </div>
                </div>
              </div>
              : null
            }

            {productChars.Width?
              <div className='newreviewbox'>
                <div className='newreviewcharlabel'>Width</div>
                <div className='newreviewchardes'>{width}</div>
                <div className='newreview width'>
                  <div className='widthcheckboxgroup'>
                    <input type='radio' name='width' id='widthradiobt1' value='Too narrow' onChange={handleOnchange}/>
                    <label>Too narrow</label>
                  </div>
                  <div className='widthcheckboxgroup'>
                    <input type='radio' name='width' id='widthradiobt2' value='Slightly narrow' onChange={handleOnchange}/>
                    <label>Slightly narrow</label>
                  </div>
                  <div className='widthcheckboxgroup'>
                    <input type='radio' name='width' id='widthradiobt3' value='Perfect' onChange={handleOnchange}/>
                    <label>Perfect</label>
                  </div>
                  <div className='widthcheckboxgroup'>
                    <input type='radio' name='width' id='widthradiobt4' value='Slightly wide' onChange={handleOnchange}/>
                    <label>Slightly wide</label>
                  </div>
                  <div className='widthcheckboxgroup'>
                    <input type='radio' name='width' id='widthradiobt5' value='Too wide' onChange={handleOnchange}/>
                    <label>Too wide</label>
                  </div>
                </div>
              </div>
              : null
            }

            {productChars.Length?
              <div className='newreviewbox'>
                <div className='newreviewcharlabel'>Length</div>
                <div className='newreviewchardes'>{length}</div>
                <div className='newreview length'>
                  <div className='lengthcheckboxgroup'>
                    <input type='radio' name='length' id='lengthradiobt1' value='Runs short' onChange={handleOnchange}/>
                    <label>Runs short</label>
                  </div>
                  <div className='lengthcheckboxgroup'>
                    <input type='radio' name='length' id='lengthradiobt2' value='Runs slightly short' onChange={handleOnchange}/>
                    <label>Runs slightly short</label>
                  </div>
                  <div className='lengthcheckboxgroup'>
                    <input type='radio' name='length' id='lengthradiobt3' value='Perfect' onChange={handleOnchange}/>
                    <label>Perfect</label>
                  </div>
                  <div className='lengthcheckboxgroup'>
                    <input type='radio' name='length' id='lengthradiobt4' value='Runs slightly long' onChange={handleOnchange}/>
                    <label>Runs slightly long</label>
                  </div>
                  <div className='lengthcheckboxgroup'>
                    <input type='radio' name='length' id='lengthradiobt5' value='Runs long' onChange={handleOnchange}/>
                    <label>Runs long</label>
                  </div>
                </div>
              </div>
              : null
            }

            {productChars.Fit?
              <div className='newreviewbox'>
                <div className='newreviewcharlabel'>Fit</div>
                <div className='newreviewchardes'>{fit}</div>
                <div className='newreview fit'>
                  <div className='fitcheckboxgroup'>
                    <input type='radio' name='fit' id='fitradiobt1' value='Runs tight' onChange={handleOnchange}/>
                    <label>Runs tight</label>
                  </div>
                  <div className='fitcheckboxgroup'>
                    <input type='radio' name='fit' id='fitradiobt2' value='Runs slightly tight' onChange={handleOnchange}/>
                    <label>Runs slightly tight</label>
                  </div>
                  <div className='fitcheckboxgroup'>
                    <input type='radio' name='fit' id='fitradiobt3' value='Perfect' onChange={handleOnchange}/>
                    <label>Perfect</label>
                  </div>
                  <div className='fitcheckboxgroup'>
                    <input type='radio' name='fit' id='fitradiobt4' value='Runs slightly long' onChange={handleOnchange}/>
                    <label>Runs slightly long</label>
                  </div>
                  <div className='fitcheckboxgroup'>
                    <input type='radio' name='fit' id='fitradiobt5' value='Runs long' onChange={handleOnchange}/>
                    <label>Runs long</label>
                  </div>
                </div>
              </div>
              : null
            }

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
          <input type="button" id="submitnewreview" value="Submit" onClick={handleSubmit}/>


        </div>

      </div>

    </div>
  )

};

export default ReviewModal;