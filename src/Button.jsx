import React from "react";

function Button ({ label, style, ...rest }) {
  const styles = {
    color: "black",
    ...style
  };
  return (
    <>
    <button style={ styles }>{ label }</button>
    </>
  );
}
export default Button;