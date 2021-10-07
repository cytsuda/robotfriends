import React, { Component } from "react";
import ConterButton from "./CounterButton";

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    console.log("Header");
    return (
      <div className="flex flex-col justify-center items-center mb-4">
        <h1 className="mb-4 text-center text-5xl font-title">Robot Friends</h1>
        <ConterButton color="red"/>
      </div>
    );
  }
}
export default Header;
