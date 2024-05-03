import React from "react";
import Header from "./Header";
import "./style.css";
import MobileNav from "./MobileNav";
import Hero from "./Hero";
import Features from "./Features";
import Product from "./Product";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
function HealthFitness() {
  return (
    <div className="main-health" style={{ backgroundColor: "white" }}>
      <Header />
      <MobileNav />
      <Hero />
      <Features />
      <Product />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default HealthFitness;
