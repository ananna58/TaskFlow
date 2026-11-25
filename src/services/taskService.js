import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, orderBy, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
const tasksRef=(uid)=>collection(db,"users",uid,"tasks");
export function subscribeTasks(uid,callback,onError){return onSnapshot(query(tasksRef(uid),orderBy("createdAt","desc")),s=>callback(s.docs.map(d=>({id:d.id,...d.data()}))),onError)}
export async function createTask(uid,data){return addDoc(tasksRef(uid),{...data,createdAt:serverTimestamp(),updatedAt:serverTimestamp(),completedAt:null})}
export async function updateTask(uid,id,data){return updateDoc(doc(db,"users",uid,"tasks",id),{...data,updatedAt:serverTimestamp(),...(data.status==="Completed"?{completedAt:serverTimestamp()}:{})})}
export async function removeTask(uid,id){return deleteDoc(doc(db,"users",uid,"tasks",id))}
