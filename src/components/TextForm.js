import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked: "+text);
    let newtext1 = text.toUpperCase();
    setText(newtext1);
    props.showAlert("Converted to uppercase !","success");
  };
  const handleLoClick = () => {
    let newtext2 = text.toLowerCase();
    setText(newtext2);
    props.showAlert("Converted to lowercase !","success");
  };
  const handleClearText = () => {
    let newtext3 = "";
    setText(newtext3);
    props.showAlert("Text cleared !","success");
   
  };
  const handleReverseText = () => {
    let newtext4 =text.split('').reverse().join('');
    setText(newtext4);
    props.showAlert("Text Reversed !","success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied!","success");
  }
  const handleExtraSpace = () => {
    let newtext5=text.split(/[ ]+/);
    setText(newtext5.join(" "));
    props.showAlert("Extra space removed !","success");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
    
  };
  
  const [text, setText] = useState("");
  // text="new text"; --wrong way to change the this.state.
  // setText("new text");__right way
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
          id="myBox"
          rows="4"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleReverseText}>
        Reverse Text
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-2
      my-2 " onClick={handleExtraSpace}>
        Handle Extra Space
      </button>
    </div>
    <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary </h1>
      <p>{text.split(" ").length-1} words and {text.length} characters</p>
      <p>{0.008*(text.split(" ").length-1)} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox to preview here. "}</p>
    </div>
    </>
  );
}
