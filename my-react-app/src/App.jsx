import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
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
      <Header></Header>
      <Footer> </Footer>
      <Food></Food>
      <ListGroup items={items}></ListGroup>
    </>
  );
}

export default App;
