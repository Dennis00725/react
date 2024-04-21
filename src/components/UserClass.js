import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }

  render() {
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>count:{count}</h1>
        <h1>count:{count2}</h1>
        <h2>Name: Dennis</h2>
        <h3></h3>
        <h3>Contact : @dennis00725</h3>
      </div>
    );
  }
}

export default UserClass;
