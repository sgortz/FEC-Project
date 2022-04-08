import React, { useState } from 'react';

const AnswerPhoto = (url) => {


  const[openAnswerPhoto, setOpenAnswerPhoto] = useState(false);

  const handleClickPhoto = () => {
    setOpenAnswerPhoto(openAnswerPhoto => !openAnswerPhoto);
  }


  const AnswerPhotoModel = (
    <div className='AnswerPhotoModel'>
      <span className='AnswerPhotoCloseBtn' onClick={handleClickPhoto}>&times;</span>
      <img className='answerPhotoFZ' src={url.url}></img>
    </div>
  )

  return (

    <div className='QAthumbnailPhoto'>
      <img className='answerPhoto' src={url.url} onClick={handleClickPhoto} ></img>
      {openAnswerPhoto? AnswerPhotoModel : null}
    </div>

  )


}

export default AnswerPhoto;