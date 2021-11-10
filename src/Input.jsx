import React from "react";

function Input ({ label, style, ...rest }) {
  const styles = {
    color: "black",
    ...style
  };
  return (
    <>
    {label ? <label>{ label }</label> : null}
    <input style={ styles } />
    </>
  );
}
export default Input;