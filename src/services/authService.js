import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "./firebase";
export async function register(name,email,password){
 const cred=await createUserWithEmailAndPassword(auth,email,password);
 await updateProfile(cred.user,{displayName:name});
 await setDoc(doc(db,"users",cred.user.uid),{displayName:name,email,theme:"light",createdAt:serverTimestamp()});
 return cred.user;
}
export async function login(email,password){return (await signInWithEmailAndPassword(auth,email,password)).user}
export async function logout(){return signOut(auth)}
export async function resetPassword(email){return sendPasswordResetEmail(auth,email)}
