/* DEPENDENCIES */
import React from 'react';
import axios from 'axios';
import { RiLoader2Line } from 'react-icons/ri';
import { IconContext } from "react-icons";

/* STYLE SHEET */
import './ProductOverview.css';

/* CHILDREN COMPONENTS */
import NavBar from './components/NavBar.jsx';
import Announcements from './components/Announcements.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import StarReview from './components/StarReview.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import AddToCart from './components/AddToCart.jsx';
import ProductDescription from './components/ProductDescription.jsx';

/* HARD CODED DATA */
import productExample from '../../Data/overviewDataExample.js';
import stylesExample from '../../Data/overviewStylesExample.js';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      products_features: [],
      product_styles: [],
    }
    this.handleApi = this.handleApi.bind(this);
  }

  handleApi() {
    console.log('api request activated')
    axios.get('/products')
      .then(response => {
        // console.log('API response! ', Array.isArray(response.data))
        response.data.map((product, index) => {
          this.setState(prevState => ({ products: prevState.products.concat(product) }))
        })
      })
      .catch(err => { console.error(err) })
  }

  componentDidMount() {
    this.handleApi();
  }

  render() {
    if (this.state.products.length === 0) {
      return (
        <IconContext.Provider value={{ size: '6rem', className: 'loading' }}>
          <div>
            <NavBar />
            <h1 style={{ 'textAlign': 'center', 'marginTop': '100px' }}>Page not found :( </h1>
            <RiLoader2Line className="loading" />
          </div>
        </IconContext.Provider>
      )
    } else {
      return (
        <div>
          <NavBar />
          <Announcements />
          <div className="wrapper">
            <div className="image-gallery">
              <ImageGallery photos={stylesExample.results[0].photos} />
            </div>
            <div className="star-review">
              <StarReview styles={stylesExample} />
            </div>
            <div className="product-detail">
              <ProductDetail product={this.state.products[0]} styles={stylesExample} />
            </div>
            <div className="style-selector">
              <StyleSelector styles={stylesExample} product={productExample} />
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
}

export default ProductOverview;