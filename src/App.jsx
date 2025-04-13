import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Media from "./components/Media";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App(){
  return(
    <div>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Media></Media>
      <Navbar></Navbar>
      <Footer></Footer>

    </div>
  );
}

export default App;