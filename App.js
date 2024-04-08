import React from "react";
import ReactDOM from "react-dom";

// React Element
const jsxHeading = <h1 id="heading">hello jsx</h1>;

const Title = () => <h1 className="head">hello</h1>;

// Component composition
const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title />
    <h1> Hello Component </h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
