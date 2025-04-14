import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";

// Define About component (NEW)
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

// Main App component
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
