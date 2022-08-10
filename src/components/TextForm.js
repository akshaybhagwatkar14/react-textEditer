// import React from 'react'
import React, { useState } from 'react';



export default function TextForm(props) {
const handleUpClick =() =>{
  
  let newText= text.toUpperCase();
  setText(newText)
}

const handleLowClick =() =>{
  
  let newText= text.toLowerCase();
  setText(newText)
}
const handleShape =() =>{
  
  let newText= text.split(/[ ]+/);
  setText(newText.join(" "));
}

const handleClearClick =() =>{
  
  let newText='';
  setText(newText)
}
const handleCopy =() =>{
  let text= document.getElementById('myBox');
  text.select();
  navigator.clipboard.writeText(text.value);
 
}

const handleOn =(event) =>{
 
  setText(event.target.value);
}


  const [text, setText] = useState('');
 
  return (
    <>
<div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
      
         <textarea className="form-control" onChange={handleOn} value={text} id="myBox" rows="8" ></textarea>

    </div>
    <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-secondary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
    <button className="btn btn-danger mx-3" onClick={handleClearClick}>Clear</button>
    <button type="button " onClick={handleCopy} class="btn btn-warning mx-3">Copy</button>
    <button type="button " onClick={handleShape} class="btn btn-info mx-3">Shape Remove</button>
</div>
<div className='container my-4'>
<h2>your text summary</h2>
<h5>{text.split(" ").length} word - {text.length}characters</h5>
<h5>Minutes to read this.. {0.008 * text.split(" ").length} </h5>
<h2>Preview</h2>
<p>{text}</p>
</div>
</>
  )
}

