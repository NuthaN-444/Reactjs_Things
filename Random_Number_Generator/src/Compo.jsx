import React, { useEffect, useRef, useState } from 'react'
import { useCallback } from 'react';

const Compo = () => {
  const [length , setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");
  const [copied,setCopied] = useState(false);


  const passwordRef = useRef(null);
  const copyToClipBoard = useCallback(()=>{
    const container = document.getElementsByClassName("container");
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    
    setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
  },[password])


  const passwordGenerator = useCallback(() => {
      let pass = ""
      let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
      if(numberAllowed) {str += '1234567890';}
      if(charAllowed) {str += "!@~`'#$%^&*_-+=/|";}

      for(let i=0 ; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * str.length + 1);
        pass += str[randomNumber-1];
      }
      setPassword(pass);
  },[length,numberAllowed,charAllowed])



  useEffect(() => {
    passwordGenerator();
  },[length,numberAllowed,charAllowed])



  return (
    <>
      <div className='container'>
          <h1>Password Generator</h1>
          <div className='password-div'>
            <input type="text" placeholder='Random Password' value={password} ref={passwordRef} readOnly/>
            <button onClick={copyToClipBoard}>Copy</button>
          </div>

          <div className='dependencies'>

              <input type="range" min={8} max={20} id='rangeTag' value={length} onChange={(e) => setLength(e.target.value)}/>
              <label>Length={length}</label>

              <input type="checkbox" onChange={() => setNumberAllowed((prev) => !prev)}/>
              <label>Numbers</label>

              <input type="checkbox" onChange={() => setCharAllowed((prev) => !prev)}/>
              <label>Special Characters</label>
          </div>
      </div>
                                    {/* add copied feature  */}
      {copied && <div className='copied-message'>
         Copied!
      </div>}
        </>
  )
}

export default Compo
