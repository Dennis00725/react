import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <UserClass />
      </div>
    );
  }
}

export default About;
