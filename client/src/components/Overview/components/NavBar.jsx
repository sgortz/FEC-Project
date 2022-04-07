import React from 'react';
import { FiSearch } from "react-icons/fi";
import { RiShoppingBagLine } from "react-icons/ri";

import "./NavBar.css";

const NavBar = () => (
  <div className="Navbar">
    <div className="Logo">Z. Narrows</div>
    <form>
      <input className="top-search-bar" type="text" disabled={true}>
      {/* <FiSearch /> */}
      </input>
    </form>
    <RiShoppingBagLine size="15px" />
  </div>
)

export default NavBar;