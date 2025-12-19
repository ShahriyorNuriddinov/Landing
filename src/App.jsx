import React from "react";
import Header from "./components/Header";
import Showcase from "./components/showcase";
import Skills from "./components/skills";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Showcase/>
      <Skills/>
      <About/>
      <Pricing/>
      <Contact/>
    </div>
  );
};

export default App;
