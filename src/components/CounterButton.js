import React, { Component } from "react";

class ConterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  updateCount = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  render() {
    console.log("ConterButton");
    return (
      <button
        className="py-2 px-6 rounded hover:bg-blue-500 transition font-bold bg-blue-400"
        color={this.props.color}
        onClick={this.updateCount}
      >
        Count: {this.state.count}
      </button>
    );
  }
}
export default ConterButton;
