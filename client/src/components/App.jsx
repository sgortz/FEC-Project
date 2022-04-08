import React, { useState, useEffect} from 'react';
import ProductOverview from './Overview/ProductOverview.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import QuestionAndAnswers from './QuestionsAndAnswers/QuestionAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsReviews.jsx';

const App = (props) => {

  const [avgReviewRating, setAvgReviewRating] = useState(null);
  const [productId, setProductId] = useState(37311);

  return (
    <div className="app">
      <ProductOverview product_id={37311} />
      <RelatedProducts product_id={productId} setProductId={setProductId} avgReviewRating={avgReviewRating}/>
      <QuestionAndAnswers product_id={37311} />
      <RatingsAndReviews product_id={37315} setAvgReviewRating={setAvgReviewRating} />
    </div>

  )
}

export default App;