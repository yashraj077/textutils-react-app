import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Utility from "./Components/Utility";
import About from "./Components/About";

function App() {
  const [theme, setTheme] = useState(false); // false => light theme

  const toggleTheme = () => {
    if (theme === true) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  };

  const obj = {
    appName: "TextUtils",
    heading1: "Enter text to analyze",
    description: `This TextUtils app is made using React js.`,
  };

  return (
    <section
      className={`${theme === true ? "bg bg-dark" : ""}`}
      style={{ height: "100vh" }}
    >
      <Router>
        <Navbar obj={obj} theme={theme} toggleTheme={toggleTheme} />
        <div className="container main-container my-5">
          <Switch>
            <Route exact path="/">
              <Utility obj={obj} theme={theme} />
            </Route>
            <Route exact path="/about">
              <About obj={obj} theme={theme} />
            </Route>
          </Switch>
        </div>
      </Router>
    </section>
  );
}

export default App;
