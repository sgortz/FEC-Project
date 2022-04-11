import React, { useState, useEffect } from 'react';
import ProductOverview from './Overview/ProductOverview.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import QuestionAndAnswers from './QuestionsAndAnswers/QuestionAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsReviews.jsx';
import NavBar from './Navigation/NavBar.jsx';
import { useInView } from 'react-intersection-observer';
import useLocalStorage from "use-local-storage";




const App = (props) => {

  const [product_id, setProduct_id] = useState(37311);
  const [productName, setProductName] = useState('Camo Onesie');
  const [avgReviewRating, setAvgReviewRating] = useState(null);
  const { ref, inView, entry } = useInView();
  const [questionLength, setQuestionLength] = useState(null);
  const [reviewLength, setReviewLength] = useState(null);

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme]= useLocalStorage('theme', defaultDark ? 'dark' : 'light');


  return (


    <div className="app" data-theme={theme}>
      <NavBar productName={productName} avgReviewRating={avgReviewRating} reviewLength={reviewLength} questionLength={questionLength} inView={inView} theme={theme} setTheme={setTheme}/>
      <div ref={ref}>
        <ProductOverview product_id={product_id}/>
      </div>
      <RelatedProducts product_id={product_id} setProduct_id={setProduct_id} avgReviewRating={avgReviewRating} setProductName={setProductName}/>
      <QuestionAndAnswers product_id={product_id} setQuestionLength={setQuestionLength} />
      <RatingsAndReviews product_id={product_id} productName={productName} setAvgReviewRating={setAvgReviewRating} setReviewLength={setReviewLength}/>
    </div>

  )
}

export default App;