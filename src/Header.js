import React, { useState } from "react";
import "./Header.css";
import Logo from "./robinhood.svg";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <img src={Logo} width={25} />
      </div>
      <div className="header__search">
        <div className="header__searchContainer">
          <SearchOutlined />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__menuItems">
        <a href="/">Free Stocks</a>
        <a href="/">PortFolio</a>
        <a href="/">Cash</a>
        <a href="/">Messages</a>
        <a href="/">Account</a>

        {/* <Link to="/login">Account</Link> */}
      </div>
    </div>
  );
}
export default Header;
