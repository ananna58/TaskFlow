import {createContext,useContext,useEffect,useState} from "react";
const C=createContext(null);
export function ThemeProvider({children}){const [theme,setTheme]=useState(localStorage.getItem("taskflow-theme")||"light");useEffect(()=>{document.documentElement.classList.toggle("dark",theme==="dark");localStorage.setItem("taskflow-theme",theme)},[theme]);return <C.Provider value={{theme,setTheme}}>{children}</C.Provider>}
export const useTheme=()=>useContext(C);
