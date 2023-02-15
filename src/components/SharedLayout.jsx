import React from "react";
import { Outlet } from "react-router-dom";
import { Home } from "../pages/Home";
import { Navbar } from "./navigation/Navbar";

export const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
