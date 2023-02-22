import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import cl from "./Navbar.module.scss";
export const Navbar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <nav className={cl.root}>
      <div className="container">
        <div className={cl.navbar}>
          <div className={cl.list}>
            <NavLink
              to="/"
              className={cl.link}
              // !I COULD USE JS LOGIC AS WELL IN THE CLASSNAME
              // 'active' ? [cl.link, cl.current].join(' ') :cl.link
            >
              Home
            </NavLink>
            <NavLink to="/about" className={cl.link} state={"998941231232"}>
              About
            </NavLink>
            <NavLink to="/products" className={cl.link}>
              Products
            </NavLink>
          </div>
          <a href={`tel: ${location.state}`} className={cl.contact}>
            {location.state}
          </a>
        </div>
      </div>
    </nav>
  );
};
