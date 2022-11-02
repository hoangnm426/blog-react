import React from "react";
import Banner from "./banner";
import Footer from "./footer";
import Header from "./header";
import MainSection from "./main-section";
import Navigation from "./navigation";
import CreateNewStory from "./new-story";

function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <Banner />
      <CreateNewStory />
      <Footer />
    </>
  );
}

export default Home;
