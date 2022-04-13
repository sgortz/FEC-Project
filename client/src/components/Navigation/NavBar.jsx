import React from 'react';
import { FiSearch } from "react-icons/fi";
import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from 'react-scroll';
import Star from '../SharedComponents/star.jsx'
import "./NavBar.css";

const NavBar = (props) => {

  const switchTheme = () => {
    const newTheme = props.theme === 'light' ? 'dark' : 'light';
    props.setTheme(newTheme);
  }

  const handleShoppingBagClick = (e) => {
    e.preventDefault();
    if (props.sidebarDisplay) {
      props.setSidebarDisplay(false);
      document.getElementById("Sidebar").style.width = "145px";
      document.getElementById("mainpage").style.marginRight = "145px";
    } else {
      props.setSidebarDisplay(true);
      document.getElementById("Sidebar").style.width = "0";
      document.getElementById("mainpage").style.marginRight = "0";
    }
  }

  return (
  <div className="Navbar">
    {props.inView?
      <div className="Logo">Z. Narrows</div>
    :
      <div className="DynamicProductLogo"><p id="nav-product-name">{props.productName}</p>
      <span className='DynamicProductSecondRow'>
      <Link activeClass="active" to='RRDivider' spy={true} smooth={true}><Star value={props.avgReviewRating}/>
      </Link>

      <Link activeClass="active" to='RRDivider' spy={true} smooth={true}>    <u id="nav-link-to-review">{props.reviewLength} Reviews</u>
      </Link>
    |
      <Link activeClass="active" to='QADivider' spy={true} smooth={true}>
        <u id="nav-link-to-questions">{props.questionLength} Questions</u>
      </Link>
      </span>
      </div>
    }
    <button className="themetogglebtn" onClick={switchTheme}>Switch to {props.theme === 'light' ? 'Dark' : 'Light'}</button>
    <div id="RiShoppingBag">
     <RiShoppingBagLine  id="shoppingbag" size="27px" onClick={handleShoppingBagClick}/>
     {props.cartData.length > 0?
      <div className="reddot"></div>
      : null
      }
    </div>

  </div>
  )
  }

export default NavBar;


