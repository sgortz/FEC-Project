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
    this.handleProductApi = this.handleProductApi.bind(this);
    this.handleProductFeatures = this.handleProductFeatures.bind(this);
    // this.handleProductStyles = this.handleProductStyles.bind(this);
  }

  handleProductApi() {
    axios.get('/products')
      .then(response => {
        // console.log('API response! ', response.data[0].id)
        let productId = response.data[0].id;

        response.data.map((product, index) => {
          this.setState(
            prevState => (
              { products: prevState.products.concat(product) }
            ))
        });

        axios.get(`/products/${productId}/styles`, { param: productId })
          .then(response => {
            console.log('Do I get a second response? ', response.data)
          })
      })
      .catch(err => { console.error(err) })
  }

  handleProductFeatures() {
    console.log('hello from features')
  }
  // handleProductStyles(){}

  componentDidMount() {
    this.handleProductApi();
  }

  render() {
    if (this.state.products.length === 0) {
      return (
        <IconContext.Provider value={{ size: '6rem', className: 'loading' }}>
          <div>
            <NavBar />
            <RiLoader2Line className="loading" />
            <h1 className="page-loading"> page loading... </h1>
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
            {/* <div className="star-review">
              <StarReview/>
            </div> */}
            <div className="product-detail">
              <ProductDetail
                product={this.state.products[0]}
                productFeatures={this.handleProductFeatures} />
            </div>
            <div className="style-selector">
              <StyleSelector styles={stylesExample} product={productExample} />
            </div>
            <div className="add-to-cart">
              <AddToCart styles={stylesExample} />
            </div>
          </div>
          <ProductDescription product={this.state.products[0]} />
        </div>
      )

    }

  }
}

export default ProductOverview;