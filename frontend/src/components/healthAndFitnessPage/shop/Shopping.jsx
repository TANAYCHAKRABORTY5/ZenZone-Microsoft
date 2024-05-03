import React from "react";
import Header from "./Header";
import "./shop.css";
import Sorting from "./Sorting";
import Wrapper from "./Wrapper";
import Footer from "./Footer";

function Shopping() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Header />
      <Sorting />
      <Wrapper />
      <Footer />
    </div>
  );
}

export default Shopping;
