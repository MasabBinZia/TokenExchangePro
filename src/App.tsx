import React from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Dev from './components/Dev/Dev';
import Sub from './components/Sub/Sub';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Dev/>
      <Sub/>
      <Footer/>
    </div>
  )
}

export default App
