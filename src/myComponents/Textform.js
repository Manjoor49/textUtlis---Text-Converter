import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('');
    const handleupclick = () => {
        // console.log("upper-case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted U-Case", "success");
    }
    const handlelowclick = () => {
        // console.log("upper-case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted L-Case", "success");
    }
     const handleOnChange = (event) => {
        // console.log("Text-area was clicked");
        setText(event.target.value)
    }
    const clearText = () =>{
        setText('');
        props.showAlert("Cleared Text", "success");
    }
    const copyText = () =>{
        // var text = document.getElementById('myBox')
        // text.select();
        // navigator.clipboard.writeText(text.value);
        navigator.clipboard.writeText(text);
        props.showAlert("Text coppied", "success");
    } 
    const removeTextSpace = () => {
        // regex is used i.e "\s". multiple space will join with single space
        let removeSpace = text.split(/\s+/) 
        setText(removeSpace.join(" "))
        props.showAlert("Removed Extra Spaces", "success");
    }

    // const fCapital = () =>{
    //     let fcap = text.charAt(0).toUpperCase().split("  ") + text.slice(1).toLowerCase().split("  ")
    //     setText(fcap)
    //     console.log("fcap clicked");
    // }
 
 
  return (
    <>
        <div className="container" style={{}}>
            <h2>{props.heading}</h2>
            <div className="mb-3 " >
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>

            </div>
            <button className="btn btn-primary " disabled={text.length===0} onClick={handleupclick}>Convert Upper-Case</button>
            <button className="btn btn-primary mx-2" disabled={text.length===0} onClick={handlelowclick}>Convert Lower-Case</button>
            <button className="btn btn-primary " disabled={text.length===0} onClick={clearText}> Clear Text </button>
            <button className="btn btn-primary mx-2" disabled={text.length===0} onClick={copyText}> Copy Text </button>
            <button className="btn btn-primary" disabled={text.length===0} onClick={removeTextSpace}> Remove Space </button>

            {/* <button className="btn btn-info my-3 mx-3" onClick={fCapital}>Convert F-Capital Case</button> */}
        </div>

        <div className="container my-5"  >
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((el)=>{return el.length!==0 }).length} words & {text.length} Character</p>
            <p >~ {0.008 * text.split(" ").filter((el)=>{return el.length!==0}).length} Minutes are Require to read  </p>
            <h3 > Preview</h3>
            <p>{text.length>0 ?  text: 'Nothing to Preview Here.'}</p> 
        </div>
    </>
  )
}