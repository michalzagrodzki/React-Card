import React from "react";

function Form ({ title, children, style, ...rest }) {
  const styles = {
    color: "black",
    backgroundColor: "#FFFFFF",
    padding: "10px",
    ...style
  };
  return (
    <form style={styles}>
      { title ? <h1>{ title }</h1> : null }
      { children }
    </form>
  );
}
export default Form;