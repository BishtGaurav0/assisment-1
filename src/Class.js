import React from "react";

class Class extends React.Component {
  render() {
    const inline = {
      color: "blue",
    };
    return (
      <>
        <div className="class">
          <h2>This is Created using ClassComponent</h2>
          <p>This is done using external CSS</p>
          <p style={inline}>This is done using inline CSS</p>
        </div>
      </>
    );
  }
}

export default Class