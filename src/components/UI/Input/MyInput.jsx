import React from "react";
import "./MyInput.css";

const MyInput = (props) => {
  return (
    <div>
      <label className="label" htmlFor="input">{props.label}</label>
      <input name="input" className="my-input" {...props} />
    </div>
  );
};
export default MyInput;
