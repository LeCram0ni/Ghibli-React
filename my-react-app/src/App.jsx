import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import About from './pages/About';
import Links from './pages/Links';
import Movie from './pages/Movie';
import Overview from './pages/Overview';

import './App.css';

export default function App() {
  return (
    <Router>

      <Header />

        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/about" element={<About />} />
          <Route path="/links" element={<Links />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>

      <Footer />

    </Router>
  );
}
