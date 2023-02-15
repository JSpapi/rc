import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./Navbar.module.scss";
export const Navbar = () => {
  return (
    <nav className={cl.root}>
      <div className="container">
        <div className={cl.navbar}>
          <NavLink to="/" className={cl.link}>
            Home
          </NavLink>
          <NavLink to="/about" className={cl.link}>
            About
          </NavLink>
          <NavLink to="/products" className={cl.link}>
            Products
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
