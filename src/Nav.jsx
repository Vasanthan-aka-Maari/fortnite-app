import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    textDecoration: "none",
    fontWeight: "700",
  };
  const imgStyle = {
    width: "5%",
    objectFit: "contain",
  };
  const navbar = {
    position: "sticky",
  };

  return (
    <nav style={navbar}>
      <img
        style={imgStyle}
        src="https://purepng.com/public/uploads/medium/purepng.com-fortnite-logo-black-and-whitefortnitefortnite-battle-royalegameslogos-6915227091711c2gx.png"
        alt=""
      />
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
