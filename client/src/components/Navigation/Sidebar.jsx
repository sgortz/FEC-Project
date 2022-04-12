import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const Sidebar = (props) => {

  const [sortedCartData, setSortedCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(()=>{
    var styleidBasedData = {};
    var totalprice = 0;
    props.cartData.forEach((item)=>{
      let {style_id, product_id, photo_url} = item;
      let quantity = Number(item.quantity);
      let price = Number(item.price);
      let sale_price = Number(item.sale_price)

      if (styleidBasedData[style_id] === undefined) {
       styleidBasedData[style_id] = {product_id: product_id, style_id: style_id, photo_url: photo_url, quantity: quantity, price: price, sale_price: sale_price};
       if (item.sale_price === null) {
         totalprice += price * quantity;
       } else {
         totalprice += sale_price * quantity;
       }
      } else {
        styleidBasedData[style_id].quantity += quantity;
        if (item.sale_price === null) {
          totalprice += price * quantity;
        } else {
          totalprice += sale_price * quantity;
        }
      }
    });
    setSortedCartData(Object.values(styleidBasedData));
    setTotalPrice(totalprice);
  }, [props.cartData]);


  return (
  <div id="Sidebar">
    <div className="subtotalbox">
      <p>Subtotal</p>
      <p id="carttotalprice">${totalPrice}.00</p>
      {totalPrice === 0 ?
      <p>Add some items to the shopping cart.</p>
      :
      <p>Your order qualifies for FREE Shipping.</p>
      }
    </div>

    <div>
      {sortedCartData.map((item, index)=>
        <div className="cartitem" key={index}>
          <img className="cartitemphoto" src={item.photo_url}>
          </img>
          {item.sale_price === 0 ?
            <p>${item.price}.00</p>
            :
            <span>
              <p id="onsale">${item.sale_price}.00  </p>
              <p id="linethrough">${item.price}.00</p>
            </span>


          }
          <p>QTY: {item.quantity}</p>
        </div>
      )}
    </div>
  </div>
  )
  }

export default Sidebar;

