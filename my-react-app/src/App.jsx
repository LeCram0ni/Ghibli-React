import Header from "./Header";
import MainImage from "./MainImage";
import Description from "./Description";
import ImageGallery from "./ImageGallery";
import ShortInfoBottom from "./ShortInfoBottom";
import HR from "./HR";
import Footer from "./Footer";

import "./App.css";

import { useState } from "react";

function App() {


  return (
    <>
      <Header />
      <MainImage />

      <Description />

      <ImageGallery />
      <ShortInfoBottom />
      <HR />
      <Footer />

    </>


  );
}


export default App;