import React, { useEffect, useRef } from 'react'
import { useTheme } from '../Context/Theme';

const Card = () => {
  const cardRef = useRef();
  const divRef = useRef([]);
  const {theme , setTheme  , photo , userName , age , setAge ,dob,setDob,region,setRegion} = useTheme();

  useEffect(() => {
    if(theme){
      cardRef.current.classList.remove("light");
      cardRef.current.classList.add("dark");
    } else {
      cardRef.current.classList.remove("dark");
      cardRef.current.classList.add("light");
    }
  },[theme])


  return (
    <div className='light' id='card' ref={cardRef}>
      <img src={photo} alt="god Photo"/>
      <div className='data-light' ref={divRef}>
        <p>Name : {userName}</p>
        <p>Age : {age}</p>
      </div>
      <div className='data-light' ref={divRef}>
        <p>DOB : {dob}</p>
        <p>Region : {region}</p>
      </div>
    </div>
  );
};


export default Card
