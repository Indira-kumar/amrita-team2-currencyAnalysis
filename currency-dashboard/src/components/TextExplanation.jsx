import React from "react";
import "./TextExplanation.css";
const TextExplanation = (props) => {
  return <div className="about-project">{props.text + props.highest}</div>;
};

export default TextExplanation;
