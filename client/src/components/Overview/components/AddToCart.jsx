import React, { useState, useEffect } from 'react';
import { BsStar, BsStarFill } from "react-icons/bs";
import QuantityOptions from './QuantityOptions.jsx'

const AddToCart = ({ data, stylesIndex, handleCartData }) => {
  const [sizeSelection, setSizeSelection] = useState('');
  const [quantitySelection, setQuantitySelection] = useState(1);
  const [quantityOption, setQuantityOption] = useState('');
  // const [purchaseDisabled, setPurchaseDisabled] = useState(true);
  const [star, setStar] = useState(0);
  const [addToBag, setAddToBag] = useState('ADD TO BAG');
  // const [bagData, setBagData] = useState([]);


  /* Managing duplicated data from API */
  let skusData = Object.values(data.results[stylesIndex].skus);
  let productSizes = [];
  let storageData = {};

  skusData.forEach((sku, index) => {
    if (productSizes.includes(sku.size)) {
      storageData[sku.size] += sku.quantity
    } else {
      productSizes.push(sku.size);
      storageData[sku.size] = sku.quantity;
    }
  })

  const setSize = (e) => {
    setSizeSelection(e.target.value);
    setQuantityOption(storageData[e.target.value] <= 15 ? storageData[e.target.value] : 15)
  }
  const setQuantity = (e) => {
    setQuantitySelection(e.target.value);
    // setPurchaseDisabled(false);
  }

  const handleSubmitCart = (e) => {
    e.preventDefault();
    let cartObj = {
      price: data.results[stylesIndex].original_price,
      sale_price: data.results[stylesIndex].sale_price,
      product_id: data.product_id,
      quantity: quantitySelection,
      size: sizeSelection,
      sku: 111,
      style_id: data.results[stylesIndex].style_id,
      photo_url: data.results[stylesIndex].photos[0].url
    }
    console.log(cartObj);
    // handleCartData(cartObj)
    changeText('Item added !');
  }

  const changeText = (text) => {
    setAddToBag(text);
    setTimeout(() => {
      setAddToBag('ADD TO BAG')
    }, [1000])
  }

  const toggleStar = (e) => {
    e.preventDefault();
    if (star === 0) {
      setStar(1);
    } else {
      setStar(0);
    }
  }



  return (
    <div>
      <form
        className='add-to-cart-form'
      // onSubmit={(e) => { e.preventDefault(); console.log('clicked!')}}
      >
        <select id="select-size" name="size" onChange={setSize} value={sizeSelection}>
          <option value="Select Size">SELECT SIZE</option>
          {productSizes.map((size, index) => {
            return (<option value={size} key={index}>{size}</option>)
          })}
        </select>

        <select
          id="quantity"
          name="quantity"
          disabled={sizeSelection === null ? true : false}
          onChange={setQuantity} >
          value={quantityOption}
          <QuantityOptions quantityOption={quantityOption} />
        </select>

        <input type="submit" id="add-to-bag" disabled={sizeSelection === null ? true : false} value={addToBag}
          onClick={handleSubmitCart}
        />

        <button className={star === 0 ? "starred" : "starred hidden"} onClick={toggleStar}>
          <BsStar />
        </button>
        <button className={star === 1 ? "starred" : "starred hidden"} onClick={toggleStar}>
          <BsStarFill />
        </button>
      </form>
    </div>
  )
}

export default AddToCart;

