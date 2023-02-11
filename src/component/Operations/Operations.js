import React from "react";
import "./Operations.css";

const Operations = ({ addition, substraction, multiply, division }) => {
  return (
    <div>
      <button onClick={() => addition()}>+</button>
      <button onClick={() => substraction()}>-</button>
      <button onClick={() => multiply()}>*</button>
      <button onClick={() => division()}>/</button>
    </div>
  );
};

export default Operations;
