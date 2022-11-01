import React from "react";
import Banner from "./banner";
import Footer from "./footer";
import Header from "./header";
import MainSection from "./main-section";
import Navigation from "./navigation";

function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <Banner />
      <MainSection />
      <Footer />
    </>
  );
}

export default Home;
