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
    <form>
      <input className="top-search-bar" type="text" disabled={true}>
        {/* <FiSearch /> */}
      </input>
    </form>
    <button className="themetogglebtn" onClick={switchTheme}>Switch to {props.theme === 'light' ? 'Dark' : 'Light'}</button>
    <RiShoppingBagLine id='RiShoppingBag' size="25px" />
  </div>
  )
  }

export default NavBar;


