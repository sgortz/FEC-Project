import React from 'react';
import NavBar from './components/NavBar.jsx';
import Announcements from './components/Announcements.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import StarReview from './components/StarReview.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import AddToCart from './components/AddToCart.jsx';
import ProductDescription from './components/ProductDescription.jsx';
import stylesExample from '../../Data/overviewStylesExample.js';
import './ProductOverview.css';

console.log('styles! ', stylesExample)

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: ''
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <Announcements />
        <div className="wrapper">
          <div className="one">
            <ImageGallery styles={stylesExample} />
          </div>
          <div className="two">
            <StarReview />
          </div>
          <div className="three">
            <ProductDetail />
          </div>
          <div className="four">
            <StyleSelector styles={stylesExample} />
          </div>
          <div className="five">
            <AddToCart />
          </div>
        </div>
        <ProductDescription />
      </div>
    )
  }
}

export default ProductOverview;