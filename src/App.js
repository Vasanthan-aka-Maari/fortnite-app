import React from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const style = {
    backgroundColor: "black",
    color: "white",
    height: "90vh",
    textAlign: "center",
  };
  const text = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };
  const home = () => {
    return (
      <div style={style}>
        <div style={text}>
          <h1>Welcome, view about to know more.</h1>
        </div>
      </div>
    );
  };
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" component={home} exact />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
