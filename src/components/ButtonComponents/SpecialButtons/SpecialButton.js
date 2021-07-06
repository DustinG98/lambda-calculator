import React from "react";

const SpecialButton = props => {
  return (
    <>
      <button className={"button special-button"}>{props.value}</button>
    </>
  );
};

export default SpecialButton
