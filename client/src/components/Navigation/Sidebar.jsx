import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {

  return (
  <div id="Sidebar">
    <div className="subtotalbox">
      <p>Subtotal</p>
      <p id="carttotalprice">$43.66</p>
      <p>Your order qualifies for FREE Shipping.</p>

    </div>
    <div className="cartitem">
      <img className="cartitemphoto" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80">
      </img>
      <p></p>


    </div>

    <div className="cartitem">
      <img className="cartitemphoto" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cat-quotes-1543599392.jpg?crop=1.00xw:0.757xh;0,0&resize=1200:*">
      </img>

    </div>


  </div>
  )
  }

export default Sidebar;

