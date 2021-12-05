import React, { Component } from "react";

export default class MyClass extends Component {
  nameF = () => {
    return "Saud";
  };
  render() {
    return (
      <div>
        <h1>Hello {this.state.nme}</h1>
        <h1>Bye {this.props.name}</h1>
      </div>
    );
  }
}
