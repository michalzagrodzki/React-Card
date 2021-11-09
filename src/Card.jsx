import React from "react";

function Card ({ title, body, image, style, children, ...rest }) {
  const styles = {
    color: "black",
    backgroundColor: "transparent",
    padding: "10px",
    border: "1px solid #eaeef3",
    borderRadius: "10px",
    ...style
  };
  return (
    <div style={styles}>
      { title ? <h1>{ title }</h1> : null }
      { body ? <p>{ body }</p> : null }
      { image ? <img src={image} alt="Image" /> : null }
      { children }
    </div>
  );
}
export default Card;