import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      {/* Render the Navbar component */}
      <Navbar />

      {/* Render the Hero section */}
      <Hero />
    </div>
  );
}

export default App;
