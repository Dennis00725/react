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
        <UserClass name={"fist"} location={"India"} />
        <UserClass name={"second"} location={"US"} />
      </div>
    );
  }
}

export default About;

/*
*Mounting*
Parent Constructor
Parent Render
fistChild Constructor
fistChild Render
secondChild Constructor
secondChild Render
fistChild componentDidMount
secondChild componentDidMount
Parent componentDidMount
 */
