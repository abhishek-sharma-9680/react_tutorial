import React,{useState} from 'react'
import PropTypes from 'prop-types';


export default function Textform(props) {

   const handleUpClick=()=>{
    // console.log("Uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
   }
   const handleDownClick=()=>{
    // console.log("Uppercase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
   }
   const handleOnChange=(event)=>{
    // console.log("on change");
    setText(event.target.value);
   }

    const [text,setText]=useState('Enter Text here');
    // setText("new text");
  return (
    <>
    <div>
        <h1  style={{ color: props.mode === 'light' ? 'black' : 'white'}}>{props.heading} </h1>
        <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange}id="myBox" rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey',
    color: props.mode === 'light' ? 'black' : 'white'}}></textarea>
  </div>
  <button className="btn btn primary mx-1" onClick={handleUpClick}   style={{ backgroundColor: "blue", color: "white" }}>Convert to UpperCase</button>
  <button className="btn btn primary mx-1" onClick={handleDownClick}   style={{ backgroundColor: "blue", color: "white" }}>Convert to LowerCase</button>
    </div>
    <div className="container">
      <h1 style={{ color: props.mode === 'light' ? 'black' : 'white'}}>Text summary</h1>
      <p style={{ color: props.mode === 'light' ? 'black' : 'white'}}> {text.split(" ").length} words and {text.length } charecters</p>
      <p style={{ color: props.mode === 'light' ? 'black' : 'white'}}>{text.split(" ").length*0.08} avg minutes to read</p>
    </div>
    </>
  )
}
