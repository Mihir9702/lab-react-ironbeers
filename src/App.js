import { Route, Routes } from "react-router-dom";
import "./App.css";
import BeerPage from "./components/BeerPage";
import BeersPage from "./components/BeersPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={[<Navbar />, <BeersPage />]} />
        <Route path="/beers/:id" element={[<Navbar />, <BeerPage />]} />
        <Route path="/random-beer" element={[<Navbar />, <RandomBeer />]} />
        <Route path="/new-beer" element={[<Navbar />, <NewBeer />]} />
      </Routes>
    </>
  );
}

export default App;
