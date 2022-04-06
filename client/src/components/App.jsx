import React, {useState, useEffect} from 'react';
import ProductOverview from './Overview/ProductOverview.jsx'
import QuestionAndAnswers from './QuestionsAndAnswers/QuestionAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsReviews.jsx'

const App = (props) => {

  const [avgReviewRating, setAvgReviewRating] = useState(null);


  return (
    <div>
    {/* <ProductOverview /> */}
    <QuestionAndAnswers product_id={37315}/>
    <RatingsAndReviews product_id={37315} setAvgReviewRating={setAvgReviewRating}/>
  </div>

  )

  }

export default App;