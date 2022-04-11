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
      document.getElementById("asidesidebar").style.marginRight = "145px";
    } else {
      props.setSidebarDisplay(true);
      document.getElementById("Sidebar").style.width = "0";
      document.getElementById("asidesidebar").style.marginRight = "0";
    }
  }

  return (
  <div className="Navbar">
    {props.inView?
      <div className="Logo">Z. Narrows</div>
    :
      <div className="DynamicProductLogo">{props.productName}
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
    {/* <form>
      <input className="top-search-bar" type="text" disabled={true}>
        <FiSearch />
      </input>
    </form> */}
    <button className="themetogglebtn" onClick={switchTheme}>Switch to {props.theme === 'light' ? 'Dark' : 'Light'}</button>
    <RiShoppingBagLine id="RiShoppingBag" size="25px" onClick={handleShoppingBagClick}/>
  </div>
  )
  }

export default NavBar;


