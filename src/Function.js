import React from "react";

const Function = () => {
  const inline = {
    color: "blue",
  };
  return (
    <>
      <div className="function">
        <h2>This is Created using FunctionalComponent</h2>
        <p >This is done using external CSS</p>
        <p style={inline}>This is done using inline CSS</p>
      </div>
    </>
  );
};

export default Function