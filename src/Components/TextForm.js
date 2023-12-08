import React, {useState, useEffect} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UpperCase was Clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to UpperCase!", "success")
    }
    const handleLowClick = () => {
        // console.log("UpperCase was Clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to LowerCase!", "success")

    }
    const handleClearClick = () => {
        // console.log("UpperCase was Clicked: " + text);
        // let newText = text.toLowerCase();
        setText("")
        props.showAlert("text cleared!", "success")

    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
    }
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (copied) {
          setTimeout(() => setCopied(false), 2000); // Clear copied indicator after 2 seconds
        }
      }, [copied]);

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }
  const [text, setText] = useState('');
//   text = "new text"; // Wrong way to change the state
//   setText("new Text"); // Correct way to change the state

    const lenCal = (text) => {
       if (text === "") {
        return 0;
       } else {
        return text.trim().split(" ").length;
       }
    }
  return (
    <>
        <div className = "container">
            <h1 className = {props.textMode}>{props.heading}</h1>
            <div className="mb-3">
            {/* <label for="myBox" className="form-label">Example TextArea</label> */}
            <textarea className="form-control" style = {props.textMode === 'text-dark' ? {backgroundColor: 'white', color: 'black', cursor: "pointer"} : {backgroundColor: 'grey', color: 'white', cursor: "pointer"}} value = {text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className={`btn btn-${props.btnColor} mx-2`} onClick = {handleUpClick}>Convert to UpperCase</button>
            <button className={`btn btn-${props.btnColor} mx-2`} onClick = {handleLowClick}>Convert to LowerCase</button>
            <button className={`btn btn-${props.btnColor} mx-2`} onClick = {handleClearClick}>Clear Text</button>
            <button className={`btn btn-${props.btnColor} mx-2`} onClick = {handleCopyClick}>Copy to ClipBoard</button>
            {copied && <div className="copied-text">Copied</div>}
        </div>
        <div className={`container my-3 ${props.textMode}`}>
            <h1>Your Text Summary</h1>
            <p>{lenCal(text)} words and {text.length} characters</p>
            <p>{(0.008 * text.split(" ").length).toFixed(2)} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Enter Something in the text box to preview it here'}</p>
        </div>
   </>
  )
}
