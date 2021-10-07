import React, { Component } from "react";
import { connect } from "react-redux";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import ErrorBoundry from "../components/ErrorBoundry";
import Scroll from "../components/Scroll";
import Header from "../components/Header";
// import { robots } from "./data/robots";

// REDUX
import { setSearchField, requestRobots } from "../redux/action";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  componentDidMount() {
    console.log("Mounting robots");
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div
        className="
        h-screen
        overflow-hidden
        text-white
        bg-gray-900
        bg-hero-pattern"
      >
        <div
          className="
          container mx-auto pt-12 pb-8
          flex flex-col
          h-full
        "
        >
          <div className="flex flex-col justify-center items-center">
            <Header />
            <SearchBox searchChange={onSearchChange} />
          </div>
          <div className="my-8 bg-gray-100 h-px opacity-10" />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filterRobots} isPending={isPending} />
            </ErrorBoundry>
          </Scroll>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
