import React from 'react';
import { FiSearch } from "react-icons/fi";
import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from 'react-scroll';
import Star from '../../SharedComponents/star.jsx'
import "./NavBar.css";

const NavBar = (props) => (
  <div className="Navbar">
    {props.inView?
      <div className="Logo">Z. Narrows</div>
    :
      <div className="DynamicProductLogo">{props.productName}
      <span className='DynamicProductSecondRow'><Star value={props.avgReviewRating}/>
      <Link activeClass="active" to='RatingsandReviews' spy={true} smooth={true}>
      <u className="link-to-review">111</u>
    </Link>
      </span>
      </div>

    }
    <form>
      <input className="top-search-bar" type="text" disabled={true}>
        {/* <FiSearch /> */}
      </input>
    </form>
    <RiShoppingBagLine id='RiShoppingBag' size="25px" />
  </div>
)

export default NavBar;