import React,{useState} from 'react'
import PropTypes from 'prop-types';


export default function Textform(props) {

   const handleUpClick=()=>{
    // console.log("Uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
   }
   const handleOnChange=(event)=>{
    // console.log("on change");
    setText(event.target.value);
   }

    const [text,setText]=useState('Enter Text here');
    // setText("new text");
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange}id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  )
}
