import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../componenets/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../componenets/Footer";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
      <Footer />
    </>
  );
};

export default MainLayout;
