import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProductList from "./components/RelatedProductList.jsx"

const RelatedProducts = ({product_id, setProductId, avgReviewRating}) => {

  const [relatedProductId, setRelatedProductId] = useState([]);
  const [relatedProductData, setRelatedProductData] = useState([]);

  useEffect(() => {
    axios.get('/products/:product_id/related', { params: { product_id: product_id } })
      .then(res => {
        setRelatedProductId(res.data);
        return Promise.all(res.data.map(id => {
          return getRelatedProductInfo(id);
        }))
      })
      .catch(err => {
        console.log("err in getting questions per id:", err)
      })
  }, [product_id])

  const getRelatedProductInfo = (id) => {
    axios.get(`/products/${id}/`)
      .then(response => {
        setRelatedProductData([response.data])
      })
      .catch(err => { console.error(err) })

  }



  return (
    <div className='RelatedProducts'>
      <h2 className='RP title'>YOU MIGHT ALSO LOVE</h2>
      <div className='RelatedProductList'>
        <RelatedProductList product_id={product_id} setProductId={setProductId} avgReviewRating={avgReviewRating}
        relatedProductId={relatedProductId}/>
      </div>
    </div>

  )

}

export default RelatedProducts;
