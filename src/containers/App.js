import React, { Component } from "react";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import ErrorBoundry from "../components/ErrorBoundry";
import Scroll from "../components/Scroll";
// import { robots } from "./data/robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }
  componentDidMount() {
    console.log("Component did mount  ");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  render() {
    const { robots, searchField } = this.state;
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div
        className="
        h-screen
        overflow-hidden
        text-white
        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
      >
        <div
          className="
          container mx-auto pt-12 pb-8
          flex flex-col
          h-full
        "
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="mb-4 text-center text-5xl font-title">
              Robot Friends
            </h1>
            <SearchBox searchChange={this.onSearchChange} />
          </div>
          <div className="my-8 bg-gray-100 h-px opacity-10" />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filterRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      </div>
    );
  }
}

export default App;
