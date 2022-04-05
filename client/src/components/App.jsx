import React from 'react';
import ProductOverview from './Overview/ProductOverview.jsx'
import QuestionAndAnswers from './QuestionsAndAnswers/QuestionAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsReviews.jsx'

const App = (props) => (
  <div>
    <ProductOverview />
    <QuestionAndAnswers product_id={37315}/>
    <RatingsAndReviews product_id={37315}/>
  </div>
)

export default App;