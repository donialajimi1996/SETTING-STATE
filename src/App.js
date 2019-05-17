import React, { Component } from "react";
import Fact from "./components/fact";
class App extends Component {
  state = {
    number: 0,
    fact: 1
  };
  fact = n => {
    if (this.state.number === 0) {
      return 1;
    } else {
      return n * n;
    }
  };
  change = e => {
    this.setState({
      number: e
    });
  };

  render() {
    return (
      <div>
        <button
          onClick={e => {
            this.change(e);
          }}
          id="1"
        >
          1
        </button>
        { <button
          onClick={n => {
            this.change(n);
          }}
          id="2"
        >
          2
        </button>
        <button
          onClick={n => {
            this.change(n);
          }}
          id="3"
        >
          3
        </button>
        <button
          onClick={n => {
            this.change(n);
          }}
          id="4"
        >
          4
        </button>
        <button
          onClick={n => {
            this.change(n);
          }}
          id="5"
        >
          5
        </button>
        <button
          onClick={n => {
            this.change(n);
          }}
          id="6"
        >
          6
        </button>
        <button
          onClick={n => {
            this.change(n);
          }}
          id="7"
        >
          7
        </button>
        <button
          onClick={n => {
            this.change(n);
          }}
        >
          8
        </button>
        <button
          onClick={n => {
            this.change(n);
          }}
        >
          9
        </button> }
        <Fact number={this.state.number} fact={this.fact(this.state.number)} />
      </div>
    );
  }
}

export default App;
