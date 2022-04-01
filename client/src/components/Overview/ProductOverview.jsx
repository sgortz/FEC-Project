import React from 'react';
import NavBar from './components/NavBar.jsx';
import Announcements from './components/Announcements.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import StarReview from './components/StarReview.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import AddToCart from './components/AddToCart.jsx';
import ProductDescription from './components/ProductDescription.jsx';
import productExample from '../../Data/overviewDataExample.js';
import stylesExample from '../../Data/overviewStylesExample.js';
import './ProductOverview.css';

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
          <div className="image-gallery">
            <ImageGallery styles={stylesExample} />
          </div>
          <div className="star-review">
            <StarReview styles={stylesExample} />
          </div>
          <div className="product-detail">
            <ProductDetail product={productExample} styles={stylesExample} />
          </div>
          <div className="style-selector">
            <StyleSelector styles={stylesExample} product={productExample}/>
          </div>
          <div className="add-to-cart">
            <AddToCart styles={stylesExample} />
          </div>
        </div>
        <ProductDescription styles={stylesExample} />
      </div>
    )
  }
}

export default ProductOverview;