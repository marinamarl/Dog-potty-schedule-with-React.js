import React from "react";
import "./styles.css";
import User from "./User.js";

export default class MyComponent extends React.Component {
  state = {
    tempDate: new Date(),
    date: [],
    time: [],
    inputValue: "",
    timestamp: [],
    email: "",
    fullname: ""
  };

  componentDidMount() {
    this.setState({
      date:
        this.state.tempDate.getDate() +
        "/" +
        (this.state.tempDate.getMonth() + 1) +
        "/" +
        this.state.tempDate.getFullYear(),
      time:
        this.state.tempDate.getHours() + ":" + this.state.tempDate.getMinutes()
    });
  }

  useCurrentDateTime = (date, time) => {
    this.setState({ timestamp: this.state.date + " " + this.state.time });
  };
  updateInputValue = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  render() {
    return (
      <div>
        <User />
        <p>------------------</p>
        <p>Today is: {this.state.date}</p>
        <p>The time is: {this.state.time}</p>
        <input onChange={this.updateInputValue} />
        <button onClick={this.useCurrentDateTime}>Add Pee</button>
        <input onChange={this.updateInputValue} />
        <button onClick={this.useCurrentDateTime}>Add Poo</button>
        <p>{this.state.inputValue || this.state.timestamp}</p>
        <p>To Do: send data from state to firebase </p>
        <p>To Do: return the data from firebase</p>
        <p>To Do: enter text for comments next to pee and poo</p>
        <p>To Do: have checkbox if was inside the house or not</p>
        <p>
          To Do: have checkbox other place options: inside, floor, pad, outside,
          usual outside place, balcony, garden, custom{" "}
        </p>
      </div>
    );
  }
}
