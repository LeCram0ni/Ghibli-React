import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Button from "./Button";
import ListGroup from "./components/ListGroup";

import "./App.css";

import { useState } from "react";
import QuoteGenerator from "./QuoteGenerator";

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
      <QuoteGenerator></QuoteGenerator>

      <ListGroup items={items} />

      <Footer />
    </>
  );
}

export default App;
