import logo from "../logo.svg";
import React from "react";

function About(props) {
  let aboutcss = {
    width: "18rem",
  };

  return (
    <div className="d-flex justify-content-center mt-5 mb-5 pt-5 pb-5">
      <div className="card" style={aboutcss}>
        {/* <img src={logo} className="card-img-top" alt="..." /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <div className="card-body">
          <h5 className="card-title text-center">About {props.obj.appName}</h5>
          <p className="card-text text-center">{props.obj.description}</p>
          <h3 className="text-center text-capitalize">Ingenuity Devs</h3>
        </div>
      </div>
    </div>
  );
}

export default About;
