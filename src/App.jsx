import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import Tours from './components/Tours';
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Tours />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
