import {useState} from 'react'
import "./App.css"
import Navbar from './Navbar'

const App = () => {

  //useState use to handle codes for html,css,js

  const [htmlCode,setHtmlCode]=useState("");
  const [cssCode,setCssCode]=useState("");
  const [jsCode,setJsCode]=useState("");

  // lets code login of compile code
  const handleOutput =(e)=>{
    // code
    // get iframe using  or useref hook but i am using id
    const iframe=document.getElementById("output")
    // add html and css code
    iframe.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>"
    // now add js code
    iframe.contentWindow.eval(jsCode);
  }

  return (
    <div id="body">
    <Navbar/>
    <div className="whole-editor">
      {/* FOR IDE */}
      <div className="left">
        {/* for HTML */}
        <label><img src='https://img.icons8.com/fluency/256/html-5.png' alt='HTML'/>HTML</label>
        <textarea name="html" onChange={(e)=>setHtmlCode(e.target.value)}></textarea>
        {/* for CSS */}
        <label><img src="https://img.icons8.com/fluency/256/css3.png" alt='CSS'/>CSS</label>
        <textarea name="css" onChange={(e)=>setCssCode(e.target.value)}></textarea>
        {/* for JS */}
        <label><span><img src='https://img.icons8.com/fluency/256/javascript.png' alt='JS'/></span>JS</label>
        <textarea name="js" onChange={(e)=>setJsCode(e.target.value)}></textarea>
      </div>
      {/* FOR OUTPUT */}
      <div className="right">
        {/* we used iframe to render html */}
        <iframe id='output'></iframe>
        <button onClick={handleOutput}>Run</button>
      </div>
    </div>
    </div>
  )
}

export default App