import React, { useEffect , useRef} from 'react'
import { useTheme } from '../Context/Theme';



const ToggleBtn = () => {
  const btnRef = useRef();
  const {theme , setTheme , photo , userName , age , setAge ,dob,setDob,region,setRegion} = useTheme();
  useEffect(() => {
    if(theme){
      btnRef.current.classList.remove("button-light");
      btnRef.current.classList.add("button-dark");
      btnRef.current.innerText="Light Mode";
      
    } else {
      btnRef.current.classList.remove("button-dark");
      btnRef.current.classList.add("button-light");
    }
  },[theme])

  return (
    <div>
      <button className="button-light" ref={btnRef} onClick={() => setTheme((theme) => !theme)}>
        Dark Mode
      </button>
    </div>
  )
}

export default ToggleBtn
