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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [panim, setPAnim] = useState();

  useEffect(() => {
    setPAnim(true);
    setTimeout(() => {
      setPAnim(false);
    }, 5701);
  }, []);

  return (
    <Router>
      <GlobalContainer></GlobalContainer>
      <Switch>
        <Route exact path="/">
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
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
