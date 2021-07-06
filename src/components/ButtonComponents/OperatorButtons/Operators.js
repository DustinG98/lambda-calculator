import React from "react";
import { operators } from "../../../data"
import OperatorButton from "../OperatorButtons/OperatorButton"
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {operators.map(cv => {
        return <OperatorButton value={cv.value} />
      })}
    </div>
  );
};

export default Operators
