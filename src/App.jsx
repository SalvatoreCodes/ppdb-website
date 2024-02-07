import React from "react";
import "./styles.css";
import Hero from "./Sections/Hero";
import Programs from "./Sections/Program";
import Location from "./Sections/Location";
import Footer from "./Sections/Footer";

import CardFull from "./Components/CardFull";

function App() {
  return (
    <div className="app">
      <Hero />
      <Programs />
      <Location />
      <Footer />

      <CardFull />
    </div>
  );
}

export default App;
