import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProductList from "./components/RelatedProductList.jsx"
import RelatedProductCard from './components/RelatedProductCard.jsx'

const RelatedProducts = ({ product_id, setProduct_id }) => {

  const [relatedProductId, setRelatedProductId] = useState([]);
  const [relatedProductData, setRelatedProductData] = useState([]);
  const [reviewData, setReviewData] = useState([]);


  useEffect(() => {
    axios.get('/products/:product_id/related', { params: { product_id: product_id } })
      .then(res => {
        setRelatedProductId(res.data);
        // return Promise.all(res.data.map((id) => {
        //   getRelatedProductInfo(id);
        //   getRelatedProductRating(id)
        // }))

      })
      .catch(err => {
        console.log("err in getting questions per id:", err)
      })
  }, [product_id])

  useEffect(() => {
    getRelatedProducts(relatedProductId);
  }, [relatedProductId])

  // gets related products for each id
  const getRelatedProductInfo = async (ids) => {
    try {
      let infoPromises = Promise.all(await ids.map(id => {
        getRelatedProductById(id))
      });

      let ratingPromises = Promise.all(await ids.map(id => {
        getRelatedProductRating(id))
      });

      setRelatedProductData(infoPromises);
      setReviewData(ratingPromises);

    } catch (err) {
      console.log(err);
    }
  };

  // fetches a related product from the server
  const getRelatedProductById = async (id) => {
    let relatedProduct = {};
    await axios.get(`/products/${id}/`)
      .then(res => {

        let cleanData = {
          id: res.data[0].id,
          name: res.data[0].name,
          default_price: res.data[0].default_price,
          photo: (!res.data[1].results[0].photos[0] ? res.data[1].results[0].photos[0] :
            'https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg'),
          sale_price: res.data[1].results[0].sale_price
        }
        relatedProduct = cleanData;
        return relatedProduct;
      })
      .catch((err) => {
        console.log(err);

      });
    return relatedProduct;
  }


  const getRelatedProductRating = async (id) => {
    let reviews = {};
    await axios.get('/reviews/meta', { params: { product_id: id } })
      .then(res => {
        // reviewData.push(res.data);
        reviews = res.data;
        return reviews;

      })
      .catch(err => { console.error(err) })
  }

  return (
    <div className='RelatedProducts'>
      <h2 className='RP title'>YOU MIGHT ALSO LOVE</h2>
      <div className='RelatedProductList'>
        <RelatedProductList setProductId={setProduct_id} relatedProductData={relatedProductData} reviewData={reviewData}
          relatedProductId={relatedProductId} />
      </div>
    </div>
  )

}


export default RelatedProducts;
