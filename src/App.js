import React, { useEffect, useState } from "react";
import GlobalContainer from "./globalStyles";
import {
  PageLoad,
  Navbar,
  Intro,
  MIcons,
  Home,
  Footer,
} from "./components/index";

const App = () => {
  const [panim, setPAnim] = useState();

  useEffect(() => {
    setPAnim(true);
    setTimeout(() => {
      setPAnim(false);
    }, 5701);
  }, []);

  return (
    <>
      <GlobalContainer></GlobalContainer>
      {panim ? (
        <>
          <PageLoad></PageLoad>
        </>
      ) : (
        <>
          <Navbar></Navbar>
          <Intro></Intro>
          <MIcons></MIcons>
          <Home></Home>
          <Footer></Footer>
        </>
      )}
    </>
  );
};

export default App;
