import React from "react";

function Alerts(props) {
  return (
    props.alert && (
      <section style={{ position: "absolute", width: "100vw" }}>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {props.alert.msg}
        </div>
      </section>
    )
  );
}

export default Alerts;
