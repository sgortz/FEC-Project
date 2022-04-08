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

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: '',
      product_data: [],
    }
    this.fetchProductData = this.fetchProductData.bind(this);
  }

  fetchProductData(id) {
    axios.get(`/products/${id}/`)
      .then(response => {
        this.setState({ product_data: response.data })
      })
      .catch(err => { console.error(err) })
  }

  componentDidMount() {
    this.fetchProductData(this.props.product_id);
  }

  render() {
    if (this.state.product_data.length === 0) {
      return (
        <IconContext.Provider value={{ size: '6rem', className: 'loading' }}>
          <div>
            {/* <NavBar /> */}
            <RiLoader2Line />
            <h1 className="page-loading"> page loading... </h1>
          </div>
        </IconContext.Provider>
      )
    } else {
      return (
        <div>
          {/* <NavBar /> */}
          <Announcements />
          <div className="wrapper">
            <ProductDetail data={this.state.product_data} />
            <ImageGallery photos={this.state.product_data[1]} />
           {/*  <div className="image-gallery">
            </div>
            <div className="star-review">
              <StarReview/>
            </div>
            <div className="product-detail">
            </div>
            <div className="style-selector">
              <StyleSelector styles={this.state.product_styles[0]} />
            </div>
            <div className="add-to-cart">
          </div>*/}
          <AddToCart data={this.state.product_data[1]} />
            </div>
          <ProductDescription features={this.state.product_data[0]} />
        </div>
      )
    }
  }
}

export default ProductOverview;