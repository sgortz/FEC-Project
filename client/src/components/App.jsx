import React, { useState, useEffect} from 'react';
import ProductOverview from './Overview/ProductOverview.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import QuestionAndAnswers from './QuestionsAndAnswers/QuestionAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsReviews.jsx';
import NavBar from './Overview/components/NavBar.jsx';
import { useInView } from 'react-intersection-observer';


const App = (props) => {

  const [product_id, setProduct_id] = useState(37311);
  const [productName, setProductName] = useState('Camo Onesie');
  const [avgReviewRating, setAvgReviewRating] = useState(null);
  const { ref, inView, entry } = useInView();
  const [questionLength, setQuestionLength] = useState(null);


  return (

    <div className="app">
      <NavBar productName={productName} avgReviewRating={avgReviewRating} inView={inView}/>
      <div ref={ref}>
        <ProductOverview product_id={product_id}/>
      </div>
      <RelatedProducts product_id={product_id} setProduct_id={setProduct_id} avgReviewRating={avgReviewRating} setProductName={setProductName}/>
      <QuestionAndAnswers product_id={product_id} />
      <QuestionAndAnswers product_id={product_id} setQuestionLength={setQuestionLength} />
      <RatingsAndReviews product_id={product_id} productName={productName} setAvgReviewRating={setAvgReviewRating} />
    </div>

  )
}

export default App;