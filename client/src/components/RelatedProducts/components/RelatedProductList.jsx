import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProductCard from './RelatedProductCard.jsx';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const RelatedProductList = ({ setProductName, relatedProductId, setProduct_id, relatedProductData }) => {

  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [listLength, setListLength] = useState(0);
  const [reviewData, setReviewData] = useState([]);
  const [scrollable, setScrollable] = useState({ right: false, left: false });



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
      .then(res => { setReviewData(res); setListLength(res.length) })
      .catch(err => console.log(err))

  }, [relatedProductId]);


  useEffect(() => {
    let buffer = 4;
    if (currentPhoto === 0 && currentPhoto + buffer >= listLength) {
      setScrollable({ left: false, right: false });
    } else if (currentPhoto === 0 && currentPhoto + buffer < listLength) {
      setScrollable({ left: false, right: true });
    } else if (currentPhoto !== 0 && currentPhoto + buffer >= listLength) {
      setScrollable({ left: true, right: false });
    } else {
      setScrollable({ left: true, right: true });
    }
  }, [currentPhoto, listLength]);


  const scrollLeft = () => {
    setCurrentPhoto(currentPhoto === listLength - 1 ? 0 : currentPhoto + 1)
  }

  const scrollRight = () => {
    setCurrentPhoto(currentPhoto === 0 ? listLength - 1 : currentPhoto - 1);
  }



  return (
    <div className='RelatedProductList'>
      {scrollable.left? <BsArrowLeftCircle fontSize = 'xx-large' className='RPleft-arrow'
      onClick={scrollLeft}> </BsArrowLeftCircle> : null}

      <div className="RPcarousel-container">
        {listLength !== 0?
          relatedProductData.map((product, count) => {
          if (count >= currentPhoto || currentPhoto + 4 >= listLength ) {

            return  <RelatedProductCard key={product.id} product={product} setProductName={setProductName}
              setProduct_id={setProduct_id} relatedProductData={relatedProductData} reviewData={reviewData} />

          }


        }) : null }

      </div>
       {scrollable.right? <BsArrowRightCircle fontSize = 'xx-large' className='RPright-arrow'
       onClick={scrollRight}> </BsArrowRightCircle> : null}
    </div>

  )

}

export default RelatedProductList;