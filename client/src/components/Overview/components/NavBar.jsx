import React from 'react';
import { FiSearch } from "react-icons/fi";
import "./NavBar.css";

const NavBar = () => (
  <div className="Navbar">
    <h1 className="Logo">Z. Narrows</h1>
    <form>
      <input className="top-search-bar" type="text" disabled={true}>
      {/* <FiSearch /> */}
      </input>
    </form>
  </div>
)

export default NavBar;