import React, { useState, useEffect } from 'react';
import QuantityOptions from './QuantityOptions.jsx'

const AddToCart = ({ data, stylesIndex, handleCartData }) => {
  const [sizeSelection, setSizeSelection] = useState('');
  const [quantitySelection, setQuantitySelection] = useState(1);
  const [quantityOption, setQuantityOption] = useState('');
  const [purchaseDisabled, setPurchaseDisabled] = useState(true);
  const [star, setStar] = useState(0);
  const [addToBag, setAddToBag] = useState('ADD TO BAG');

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
    setPurchaseDisabled(false);
  }

  const handleSubmitCart = (e) => {
    e.preventDefault();
    let cartObj = {
      price: data.results[stylesIndex].original_price,
      sale_price: data.results[stylesIndex].sale_price,
      product_id: data.product_id,
      quantity: quantitySelection,
      size: sizeSelection,
      style_id: data.results[stylesIndex].style_id,
      photo_url: data.results[stylesIndex].photos[0].url
    }

    handleCartData(cartObj)
    changeText('Item added !');
  }

  const changeText = (text) => {
    setAddToBag(text);
    setTimeout(() => {
      setAddToBag('ADD TO BAG')
    }, [1000])
  }

  return (
    <div>
      <form className='add-to-cart-form' >
        <select id="select-size" name="size" onChange={setSize} value={sizeSelection}>
          <option value="Select Size">SELECT SIZE</option>
          {productSizes.map((size, index) => {
            return (<option value={size} key={index}>{size}</option>)
          })}
        </select>

        <select
          id="quantity"
          name="quantity"
          disabled={sizeSelection === '' ? true : false}
          onChange={setQuantity}
          value={quantitySelection}
        >
          <QuantityOptions quantityOption={quantityOption} />
        </select>

        <input type="submit" id="add-to-bag"
          disabled={sizeSelection === '' ? true : false}
          value={addToBag}
          onClick={handleSubmitCart}
        />
      </form>
    </div>
  )
}

export default AddToCart;

