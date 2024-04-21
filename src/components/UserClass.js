import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props.name + "Child Constructor");
  }
  componentDidMount() {
    console.log(this.props.name + "Child componentDidMount");
  }

  render() {
    console.log(this.props.name + "Child Render");

    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>count:{count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increase
        </button>
        <h2>Name: Dennis</h2>
        <h3></h3>
        <h3>Contact : @dennis00725</h3>
      </div>
    );
  }
}

export default UserClass;
