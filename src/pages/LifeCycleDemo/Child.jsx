import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor child");
  }

  static getDerivedStateFromProps(nesState, newProps) {
    console.log("getDerivedStateFromProps child");
    return null;
  }
  render() {
    return (
    <div className="bg-dark text-white fs-3">
        Child Component
    </div>
    )
  }
  componentDidMount() {
    console.log("componentDidMount child");
  }
}
