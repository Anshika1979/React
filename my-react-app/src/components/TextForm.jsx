import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = () => {
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleClearClick = () => {
        setText('');
        props.showAlert("Text cleared!", "success");
    }
        const handleOnChange = (event) => {
            setText(event.target.value);
        }
    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 style={{color: props.mode==='dark'?'white':'black'}}> {props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#ebeff3':'white', color: props.mode==='dark'? 'black':'black'}} id="myBox" rows="3" placeholder='Enter your text here'></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2 style={{color: props.mode==='dark'?'white':'black'}}>Your text summary</h2>
        <p>{text.split(" ").filter((element) => { return element.length !== 0; }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0; }).length} Minutes read</p>
    </div>
    <h2 style={{color: props.mode==='dark'?'white':'black'}}>Preview</h2>
    <p style={{color: props.mode==='dark'?'white':'black'}}>{text.length > 0 ? text : "Enter text in the textbox above to preview it here."}</p>
    </>
    
  )
}
