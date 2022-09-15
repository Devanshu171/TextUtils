import React, { useState } from "react";

//

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper Case", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLowerClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleCleartext = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };
  const handleCopytext = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  //  text-is varivble and it defaut value is string in usestate("")
  //  setText is function to update text or change state
  const [text, setText] = useState("");
  // console.log(useState("Enter text here2"));

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            value={text}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleLowerClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleCleartext}>
          Clear text
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleCopytext}>
          Copy text
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleExtraSpace}>
          Remove extra space
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters, in{" "}
          {text.length * 0.008} Minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
