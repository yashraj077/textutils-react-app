import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Utility from "./Components/Utility";
import About from "./Components/About";

function App() {
  const obj = {
    appName: "TextUtils",
    heading1: "Enter text to analyze",
    description: `This TextUtils app is made using React js.`,
  };

  return (
    <>
      <Router>
        <Navbar obj={obj} />
        <div className="container main-container my-5">
          <Switch>
            <Route exact path="/">
              <Utility obj={obj} />
            </Route>
            <Route exact path="/about">
              <About obj={obj} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
