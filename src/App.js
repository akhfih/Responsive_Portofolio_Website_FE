import React from "react";

import {
  Header,
  About,
  Skills,
  Testimonial,
  Work,
  Footer,
} from "./container/index";
import { Navbar } from "./components/index";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
