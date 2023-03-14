import React, {useState} from 'react'

export default function Textform(props) {

//    const Name = JSON.parse(document.getElementById('myname').textContent);
    const onChange=(event)=>{
        setText(event.target.value);
    }
    const uppercase=()=>{
        var y = text.toUpperCase();
        setText(y);
        setheading('Converted in Uppercase')
    }
    const lowercase=()=>{
        var y = text.toLowerCase();
        setText(y);
        setheading('Converted in Lowercase')
    }
    const copytext = ()=>{
       var copy = document.getElementById("TextForm");
       copy.select();
       navigator.clipboard.writeText(copy.value);
    }
    const rmExtraSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }


    const [text, setText] = useState('Enter your text:');
    const [heading, setheading] = useState('Analyze You Text From Here')
    
  return (
    <div>
        <div className="form-check form-switch mx-5">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" style={props.style} htmlFor="flexSwitchCheckDefault">{props.mode==='dark'?'Whitemode':'Darkmode'}</label>
        </div>
        <div className="container my-3" >
            <h2 style={props.style}>{heading} </h2>
            <div className="form-group my-4" >
                <textarea className="form-control" style={props.style} onChange={onChange} id="TextForm" value={text} rows="8" ></textarea>
            </div>
            <button type="button" onClick={uppercase} className="btn btn-primary">Conver to Uppercase</button>
            <button type="button" onClick={lowercase} className="btn btn-primary mx-3" >Conver to lowercase</button>
            <button type="button" onClick={copytext} className="btn btn-primary mx-3" >Copy Text</button>
            <button type="button" onClick={rmExtraSpace} className="btn btn-primary mx-3" >Remove Extra Space</button>


        </div>
    <div className="container">
        <h3 style={props.style}>Your Text Summary: </h3>
        <p style={props.style}><strong>Word Count :</strong> {text.split(' ').length}, <strong>Characters :</strong> {text.length}, <strong>Reading Time :</strong> {0.008 * text.split(' ').length} secs</p>
        <h3 style={props.style}>Your Text Preview:</h3>
        <p style={props.style} >{text}</p> 
        {/* <p style={props.style}>Name={Name}</p> */}
    </div>
    </div>
  )
}
