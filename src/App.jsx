

import React from 'react'
import "./app.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./pages/AboutUs/About"; // I will remove it 
import ContactUs from "./components/ContactUs/ContactUs";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ContactUs />
      
    </>
  );
}

export default App;

