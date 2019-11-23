import React from "react";
//import spinner from "./spinner.gif";

function Spinner() {
  return (
    <div className="row">
      <div className="col-12 text-center">
        <div
          className="spinner-border text-danger"
          role="status"
          style={{ width: "4rem", height: "4rem" }}
        >
          <span className="sr-only text-white">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
