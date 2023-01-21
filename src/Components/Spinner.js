import React, { Component } from "react";
import loading from "./circle.gif";
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-3 md-4">
        <img src={loading} alt="" />
      </div>
    );
  }
}

export default Spinner;
