import React, { Component } from "react";
class Fact extends Component {
  render() {
    return (
      <div>
        <h1>
          the factorial of {this.props.number} is : {this.props.fact}
        </h1>
      </div>
    );
  }
}
export default Fact;
