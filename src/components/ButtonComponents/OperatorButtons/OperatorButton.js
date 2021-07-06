import React from "react";

const OperatorButton = props => {
  return (
    <>
      <button className={"button operator-button"}>{props.value}</button>
    </>
  );
};

export default OperatorButton;
