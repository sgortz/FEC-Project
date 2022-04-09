import React, { useState, useEffect} from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';

const RelatedProductList = ({setProductId, relatedProductData, reviewData, isLoading}) => {




  if(relatedProductData === undefined && reviewData=== undefined) {
    return null;
  } else {
    return(
          (<div className='RelatedProductList'>

              {relatedProductData.map((product) => {
                return <RelatedProductCard />
              })}

          </div>)
    )
}
}

export default RelatedProductList;