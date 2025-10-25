import { createContext, useContext, useState } from "react";
import godPhoto from '../assets/7d3b8e673c1bbb01bdbf517a5190e73f.jpg'

const UseTheme = createContext();

export const ThemeProvider = ({children}) => {
    const [theme , setTheme] = useState(false);
    const [photo,setPhoto] = useState(godPhoto);
    const [userName,setUserName] = useState("Greek God");
    const [dob,setDob] = useState("10/12/2006");
    const [age,setAge] = useState(26);
    const [region,setRegion] = useState("Greek");
    

    return (
        <UseTheme.Provider value={{theme,setTheme,photo,userName ,age,setAge,dob,setDob,region,setRegion}}>
            {children}
        </UseTheme.Provider>
    )
}

export const useTheme = () => useContext(UseTheme);