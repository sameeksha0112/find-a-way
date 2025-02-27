import React from "react";
import Navigation from "../NavigationBar/Navigation";
import Footer from "../Footer/Footer";
import HomeCarousel from "../Carousel/HomeCarousel";
import InformationSearch from "../InformationSearch/InformationSearch";

function HomeLayout() {
  return (
    <div className="container">
      <Navigation></Navigation>
      <HomeCarousel></HomeCarousel>
      <InformationSearch></InformationSearch>
      <Footer></Footer>
    </div>
  );
}

export default HomeLayout;
