import React, { Component } from "react";
import Child from "./Child";

export default class LifeCycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor");
  }

  static getDerivedStateFromProps(nesState, newProps) {
    console.log("getDerivedStateFromProps");
    return null;
  }
  render() {
    console.log("render");

    return (
      <div className="container">
        <h3>lifecycle Component</h3>
        <Child />
        <div id="content">

        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
}
