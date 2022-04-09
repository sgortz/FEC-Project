import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProductCard from './RelatedProductCard.jsx';

const RelatedProductList = ({ setProductName, relatedProductId, setProduct_id, relatedProductData }) => {

  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [reviewData, setReviewData] = useState([]);


  useEffect(() => {
    Promise.all(
      relatedProductId.map((id) =>
        axios.get('/reviews/meta', { params: { product_id: id } })
          .then(res => {

            let data = {
              id: res.data.product_id,
              ratings: res.data.ratings
            };
            return data;
          })
          .catch(err => console.log(err))
      )
    )
      .then(res => setReviewData(res))
      .catch(err => console.log(err))

  }, [relatedProductId]);



  return (
    (<div className='RelatedProductList'>

      {relatedProductData.map((product) => {

        return <RelatedProductCard key={product.id} product={product} setProductName={setProductName}
        setProduct_id={setProduct_id} relatedProductData={relatedProductData} reviewData={reviewData}/>

      })}

    </div>)
  )

}

export default RelatedProductList;