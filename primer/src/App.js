import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 4,
    };
  }

  isEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
  }

  getClassName(num) {
    return num % 2 === 0
      ? "bg-primary text-white text-center p-2 m-1"
      : "bg-secondary text-white text-center p-2 m-1";
  }

  handleClick = () => this.setState({ count: this.state.count + 1 });

  render() {
    return (
      <div className="m-2">
        <div className="form-group">
          <label>Name:</label>
          <input className="form-control" />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input className="form-control" />
        </div>
      </div>
    );
  }
}

export default App;
