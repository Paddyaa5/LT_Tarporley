import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Food from "./pages/Food";
import Drinks from "./pages/Drinks";
import Contact from "./pages/Contact";
import Footer from "./components/all/Footer";
import Header from "./components/navigation/Header";


const App = () => {

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  })
  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/food" component={Food} />
          <Route exact path="/drinks" component={Drinks} />
          <Route exact path="/contact-us" component={Contact} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
