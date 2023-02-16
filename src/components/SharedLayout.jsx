import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { Navbar } from "./navigation/Navbar";

export const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
