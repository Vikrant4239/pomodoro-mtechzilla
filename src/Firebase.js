// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCGppmBgsa3hCIef0Lxk_5G25sQEglijnw",
    authDomain: "pomodro-timer.firebaseapp.com",
    projectId: "pomodro-timer",
    storageBucket: "pomodro-timer.appspot.com",
    messagingSenderId: "810394306133",
    appId: "1:810394306133:web:ecc3ce8691297994b6b6dc"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider()
export const signinwithgoogle = ()=>{
    signInWithPopup(auth,provider).then((result)=>{
       const name = result.user.displayName;
       const photo = result.user.photoURL;
       

       localStorage.setItem("name",name);
       localStorage.setItem("photo",photo)
      

    }).catch((error)=>{
        console.log(error)
    })

};






        
           
           
            
          
   