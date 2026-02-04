import React, { useEffect, useRef, useState } from 'react'
import { useCallback } from 'react';

const Compo = () => {
  const [length , setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  const copyRef = useRef(null);
  const passwordRef = useRef(null);
  
  const copyToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    copyRef.current.innerText = "Copied";
      setTimeout(() => {
            copyRef.current.innerText = "Copy";
      }, 5000);
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
            <button onClick={copyToClipBoard} ref={copyRef}>Copy</button>
          </div>

          <div className='dependencies'>

              
              <label><input type="range" min={8} max={20} id='rangeTag' value={length} onChange={(e) => setLength(e.target.value)}/>Length={length}</label>

              
              <label><input type="checkbox" onChange={() => setNumberAllowed((prev) => !prev)}/>Numbers</label>

              
              <label><input type="checkbox" onChange={() => setCharAllowed((prev) => !prev)}/>Special Characters</label>
          </div>
      </div>
        </>
  )
}

export default Compo
