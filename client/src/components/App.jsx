import React from 'react';
import ProductOverview from './Overview/ProductOverview.jsx'
import QAMain from './QuestionsAndAnswers/QAMain.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsReviews.jsx'

const App = (props) => (
  <div>
    <ProductOverview />
    <QAMain />
    <RatingsAndReviews />
  </div>
)

export default App;
