import { createContext, useState,useEffect} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,signOut } from "firebase/auth";
import {auth} from "../../firebase/firebase.init"

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
          setUser(currentUser); // Set user if logged in
        });
        return () => unsubscribe(); // Cleanup subscription on unmount
      }, []);

    const googleProvider = new GoogleAuthProvider();

 const registerUser = (email,password) =>{
   return createUserWithEmailAndPassword(auth,email,password)
   

 }

 const loginUser = (email,password) =>{
   return signInWithEmailAndPassword(auth,email,password)
  

 }
 const googleLogin = () =>{
    return signInWithPopup(auth,googleProvider)
 }
 const logOut = () =>{
    return signOut(auth)
 }
 const authInfo ={
    registerUser,
    loginUser,
    user,
    setUser,
    googleLogin,
    logOut
 }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {
                    children
                }
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;