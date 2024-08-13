import Header from "./components/Header";
import Footer from "./components/Footer";
import MainImage from "./MainImage";
import Description from "./Description";
import ImageGallery from "./ImageGallery";
import ShortInfoBottom from "./ShortInfoBottom";
import HR from "./HR";

import Card from "./Card";

import "./App.css";

export default function App() {


  return (
    <>
      <Header />
      <MainImage />
      <Card />
      <Description />

      <ImageGallery />
      <ShortInfoBottom />
      <HR />
      <Footer />

    </>


  );
}
