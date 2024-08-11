import Header from "./Header";
import MainImage from "./MainImage";
import ShortInfo from "./ShortInfo";
import RainbowStory from "./RainbowStory.jsx";
import ImageGallery from "./ImageGallery";
import ShortInfoBottom from "./ShortInfoBottom";
import Footer from "./Footer";

import "./App.css";

import { useState } from "react";

function App() {
  //hook
  const [counter, setCounter] = useState(0);

  let items = [
    "Moskau",
    "Istanbul",
    "London",
    "Sankt Petersburg",
    "Berlin",
    "Madrid",
    "Kyjiw",
    "Rom",
    "Paris",
    "Bukarest",
    "Minsk",
    "Wien",
    "Hamburg",
    "Budapest",
    "Warschau",
    "Barcelona",
    "München",
    "Mailand",
    "Neapel",
    "Prag",
  ];

  return (
    <>
      <Header />
      <MainImage />
      <ShortInfo />
      <RainbowStory />
      <ImageGallery />
      <ShortInfoBottom />
      <Footer />
    </>
  );
}

export default App;
