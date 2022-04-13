import React, { useState, useEffect } from 'react';

import NavBar from './Navigation/NavBar.jsx';
import Sidebar from './Navigation/Sidebar.jsx';
import Announcements from './Navigation/Announcements.jsx';
import ProductOverview from './Overview/ProductOverview.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import QuestionAndAnswers from './QuestionsAndAnswers/QuestionAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsReviews.jsx';

import { useInView } from 'react-intersection-observer';
import useLocalStorage from "use-local-storage";
import { Link } from 'react-scroll';
import { BsArrowBarUp } from 'react-icons/bs'



const App = (props) => {

  const [product_id, setProduct_id] = useState(37311);
  const [productName, setProductName] = useState('Camo Onesie');
  const [avgReviewRating, setAvgReviewRating] = useState(null);
  const { ref, inView, entry } = useInView();
  const [questionLength, setQuestionLength] = useState(null);
  const [reviewLength, setReviewLength] = useState(null);
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const [sidebarDisplay, setSidebarDisplay] = useState(false);
  const [cartData, setCartData] = useState([]);


  const handleCartData = (data) => {
    setCartData([...cartData, data]);
  }

  useEffect (()=>{
    if (cartData.length !== 0) {
      setSidebarDisplay(true);
      document.getElementById("Sidebar").style.width = "145px";
      document.getElementById("mainpage").style.marginRight = "145px";
    } else {
      setSidebarDisplay(false);
      document.getElementById("Sidebar").style.width = "0";
      document.getElementById("mainpage").style.marginRight = "0";
    }

  }, [cartData]);

  return (
    <div className="app" data-theme={theme}>

      <div id="mainpage">
        <NavBar productName={productName} avgReviewRating={avgReviewRating} reviewLength={reviewLength} questionLength={questionLength} inView={inView} theme={theme} setTheme={setTheme} sidebarDisplay={sidebarDisplay} setSidebarDisplay={setSidebarDisplay} cartData={cartData}/>
        <Announcements />
        <div ref={ref}>
          <ProductOverview product_id={product_id} handleCartData={handleCartData} avgReviewRating={avgReviewRating} />
        </div>
        <hr id="RPDivider"/>
        <RelatedProducts product_id={product_id} setProduct_id={setProduct_id} avgReviewRating={avgReviewRating} setProductName={setProductName} />
        <hr id="QADivider"/>
        <QuestionAndAnswers product_id={product_id} setQuestionLength={setQuestionLength} />
        <hr id="RRDivider"/>
        <RatingsAndReviews product_id={product_id} productName={productName} setAvgReviewRating={setAvgReviewRating} setReviewLength={setReviewLength} />
        {inView? null :
        <button className="scroll-top">
          <Link activeClass="active" to="app" spy={true} smooth={true}>
            <BsArrowBarUp id="ArrowBarUp"/>
          </Link>
        </button>
        }
      </div>

      <Sidebar cartData={cartData} setProduct_id={setProduct_id}/>

    </div>

  )
}

export default App;