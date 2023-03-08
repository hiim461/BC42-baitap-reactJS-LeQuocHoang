import React from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Header from "./Header";
import PageContent from "./PageContent";
import "./home.css";

function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <PageContent />
      <Footer />
    </div>
  );
}

export default Home;
