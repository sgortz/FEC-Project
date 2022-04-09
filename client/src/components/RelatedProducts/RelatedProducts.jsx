import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProductList from "./components/RelatedProductList.jsx"
import RelatedProductCard from './components/RelatedProductCard.jsx'

const RelatedProducts = ({ product_id, setProduct_Id, avgReviewRating }) => {

  const [relatedProductId, setRelatedProductId] = useState([]);
  const [relatedProductData, setRelatedProductData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get('/products/:product_id/related', { params: { product_id: product_id } })
      .then(res => {
        setRelatedProductId(res.data);
      })
      .catch(err => {
        console.log("err in getting questions per id:", err)
      })
  }, [product_id])

  useEffect(()=>{
    Promise.all(
      relatedProductId.map((id)=>
        axios.get(`/products/${id}/`)
        .then(res=>res.data)
        .catch(err=>console.log(err))
      )
    )
    .then(res=>setRelatedProductData(res))
    .catch(err=>console.log(err))

  },[relatedProductId]);

  useEffect(()=>{
    Promise.all(
      relatedProductId.map((id)=>
        axios.get('/reviews/meta', { params: { product_id: id } })
        .then(res=>res.data)
        .catch(err=>console.log(err))
      )
    )
    .then(res=>setReviewData(res))
    .catch(err=>console.log(err))

  },[relatedProductId]);

  /*
  useEffect(() => {
    axios.get('/products/:product_id/related', { params: { product_id: product_id } })
      .then(res => {
        setRelatedProductId(res.data);
        return Promise.all(res.data.map((id) => {
          getRelatedProductInfo(id);
          getRelatedProductRating(id)
        }))
      })
      .catch(err => {
        console.log("err in getting questions per id:", err)
      })
  }, [product_id])


  const getRelatedProductInfo = (id) => {
    axios.get(`/products/${id}/`)
      .then(res => {

        let cleanData = {
          id: res.data[0].id,
          name: res.data[0].name,
          default_price:res.data[0].default_price,
          photo: (!res.data[1].results[0].photos[0]? res.data[1].results[0].photos[0]:
          'https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg'),
          sale_price:res.data[1].results[0].sale_price
        }

        let newRelatedData = [];
        newRelatedData.push(cleanData)
        // relatedProductData.push(cleanData)

      })
      // .then(() => {
      //   setRelatedProductData(newRelatedData);
      // })
      .catch(err => { console.error(err) })
  }

  const getRelatedProductRating = (id) => {
    axios.get('/reviews/meta', { params: { product_id: id } })
      .then(res => {
        // reviewData.push(res.data);
        let data = res.data;
        setReviewData([...reviewData, data]);

      })
      .catch(err => { console.error(err) })
  }
  */

  return (
    <div className='RelatedProducts'>
      <h2 className='RP title'>YOU MIGHT ALSO LOVE</h2>
      <div className='RelatedProductList'>
        <RelatedProductList setProduct_Id={setProduct_Id} relatedProductData={relatedProductData} reviewData={reviewData}
          relatedProductId={relatedProductId} isLoading={isLoading} />

      </div>
    </div>
  )

}


export default RelatedProducts;
