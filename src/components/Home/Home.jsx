import React from "react";
import { HomeCon } from "./HomeElements";

import About from "../About/About";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <HomeCon>
        <About></About>
        <Project></Project>
        <Contact></Contact>
      </HomeCon>
    </>
  );
};

export default Home;
