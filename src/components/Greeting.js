import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return (
      <div>
        <h2>{`${this.props.message}, ${"This message is passed by props"}`}</h2>
      </div>
    );
  }
}
export default Greeting;
