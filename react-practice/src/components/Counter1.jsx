import { Component } from "react";

export default class Counter1 extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.number != this.props.number) {
      console.log(
        "ComponentDidUpdate: Counter component updated :" + prevProps.number
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.props.number}</h1>
      </div>
    );
  }
}
