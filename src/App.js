import React, { useState } from "react";
import "./App.css";
import Inputgroup from "./component/Inputgroup/Inputgroup";
import Operations from "./component/Operations/Operations";

function App() {
  const [input1, setinput1] = useState("");
  const [input2, setinput2] = useState("");
  const [Validate, setValidate] = useState("");
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleinputOne = (e) => {
    setinput1(e.target.value);
  };

  const handleinputTwo = (e) => {
    setinput2(e.target.value);
  };

  const validate = () => {
    if (input1 === "") {
      setValidate("Error : Num1 cannot be empty");
      setShowResult(false);
      return false;
    } else if (input2 === "") {
      setValidate("Error : Num2 cannot be empty");
      setShowResult(false);
      return false;
    } else {
      setValidate("Your Result is shown above");
      setShowResult(true);
      return true;
    }
  };

  const addition = () => {
    if (!validate()) return;
    let result = parseInt(input1) + parseInt(input2);
    setResult(result);
    setShowResult(true);
  };

  const substraction = () => {
    if (!validate()) return;
    let result = parseInt(input1) - parseInt(input2);
    setResult(result);
    setShowResult(true);
  };

  const multiply = () => {
    if (!validate()) return;
    let result = parseInt(input1) * parseInt(input2);
    setResult(result);
    setShowResult(true);
  };

  const division = () => {
    if (!validate()) return;
    let result = parseInt(input1) / parseInt(input2);
    setResult(result);
    setShowResult(true);
  };

  return (
    <div className="App">
      {<h1>React Calculator</h1>}

      <Inputgroup onChangeOne={handleinputOne} onChangeTwo={handleinputTwo} />
      <Operations
        addition={addition}
        substraction={substraction}
        multiply={multiply}
        division={division}
      />
      {showResult && <div>Result = {result}</div>}
      <div style={{ color: Validate.includes("Error") ? "red" : "green" }}>
        {Validate}
      </div>
    </div>
  );
}

export default App;

//https://stackoverflow.com/questions/52022197/how-do-i-get-my-gh-pages-branch-to-update
//To update build folder
