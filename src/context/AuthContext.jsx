import {createContext,useContext,useEffect,useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth,firebaseReady} from "../services/firebase";
const C=createContext(null);
export function AuthProvider({children}){const [user,setUser]=useState(null),[loading,setLoading]=useState(true);
 useEffect(()=>{if(!firebaseReady){setLoading(false);return}return onAuthStateChanged(auth,u=>{setUser(u);setLoading(false)})},[]);
 return <C.Provider value={{user,loading}}>{children}</C.Provider>}
export const useAuth=()=>useContext(C);
