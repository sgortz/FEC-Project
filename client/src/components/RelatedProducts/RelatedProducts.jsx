import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProductList from "./components/RelatedProductList.jsx"
import './RelatedProducts.css'


const RelatedProducts = ({ product_id, setProduct_id }) => {

  const [relatedProductId, setRelatedProductId] = useState([]);
  const [relatedProductData, setRelatedProductData] = useState([]);




  useEffect(() => {
    axios.get('/products/:product_id/related', { params: { product_id: product_id } })
      .then(res => {
        let uniqueId =[... new Set(res.data)];
        setRelatedProductId(uniqueId);
      })
      .catch(err => {
        console.log("err in getting related product id:", err)
      })
  }, [product_id])

  useEffect(() => {
    Promise.all(
      relatedProductId.map((id) =>
        axios.get(`/products/${id}/`)
          .then(res => {

            let cleanData = {
              id: res.data[0].id,
              name: res.data[0].name,
              category: res.data[0].category,
              default_price: res.data[0].default_price,
              photo: (!res.data[1].results[0].photos[0] ? res.data[1].results[0].photos[0]
                : 'https://images.unsplash.com/photo-1611267254323-4db7b39c732c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80'),
                // 'https://bit.ly/2Tg8g4s'),
              sale_price: res.data[1].results[0].sale_price
            }
            return cleanData;
          })
          .catch(err => console.log(err))
      )
    )
      .then(cleanData => setRelatedProductData(cleanData))
      .catch(err => console.log(err))

  }, [relatedProductId]);



  return (
    <div className='RelatedProducts'>
      <h2 className='RP title'>YOU MIGHT ALSO LOVE</h2>
      <div className='RelatedProductList'>
        <RelatedProductList setProduct_id={setProduct_id} relatedProductData={relatedProductData}
          relatedProductId={relatedProductId} />

      </div >
    </div >
  )

}


export default RelatedProducts;
