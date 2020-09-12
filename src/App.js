import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/navigation/Header";


function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
