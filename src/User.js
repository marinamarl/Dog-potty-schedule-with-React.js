import React from "react";
import { firestore } from "./firebase";

class User extends React.Component {
  state = {
    email: "",
    fullname: ""
  };

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  addUser = e => {
    e.preventDefault();
    firestore.collection("users").add({
      email: this.state.email,
      fullname: this.state.fullname
    });

    this.setState({ email: "", fullname: "" });
  };

  render() {
    return (
      <form onSubmit={this.addUser}>
        <input
          type="text"
          name="fullname"
          placeholder="Full name"
          onChange={this.updateInput}
          value={this.state.fullname}
        />
        <input
          type="email"
          name="email"
          placeholder="Full name"
          onChange={this.updateInput}
          value={this.state.email}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default User;
