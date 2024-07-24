//Classcounter.jsx
import { Component } from "react";
import Counter1 from "./Counter1";
class Counter extends Component {
  //initializing the counter value
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    console.log("Constructor: Counter initialized");
  }

  componentDidMount() {
    console.log("ComponentDidMount: Counter component mounted");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount: Counter component will unmount");
  }

  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <Counter1 number={this.state.counter} />
        <button onClick={this.incrementCounter.bind(this)}>Increment</button>
      </div>
    );
  }
}

export default Counter;
