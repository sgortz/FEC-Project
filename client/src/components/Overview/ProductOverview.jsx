import React from 'react';
import NavBar from './components/NavBar.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import StarReview from './components/StarReview.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import AddToCart from './components/AddToCart.jsx';
import ProductDescription from './components/ProductDescription.jsx';

const ProductOverview = () => {
  return (
    <div>
      <NavBar />
      <small>SITE-WIDE ANNOUNCEMENT MESSAGE! -- SALE / DISCOUNT offer -- NEW PRODUCT HIGHLIGHT</small>
      <ImageGallery />
      <StarReview />
      <ProductDetail />
      <StyleSelector />
      <AddToCart />
      <ProductDescription />
    </div>
  )
}

export default ProductOverview;