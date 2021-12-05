import React, { Component } from "react";

export default class MyClass extends Component {
    state = {
        name = this.props.name
    }
  render() {
    return (
      <div>
        <h1>{this.name}</h1>
      </div>
    );
  }
}
