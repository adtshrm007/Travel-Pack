import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAIvfzZRIf1Nz-inlkUjS91EW9j7m6g39U",
    authDomain: "travel-pack-cf40d.firebaseapp.com",
    projectId: "travel-pack-cf40d",
    storageBucket: "travel-pack-cf40d.firebasestorage.app",
    messagingSenderId: "519574931748",
    appId: "1:519574931748:web:a4c582704a39320f6d8bb1",
    measurementId: "G-N6QF3CRSP6",
  };

  const app=initializeApp(firebaseConfig)
  const auth=getAuth(app)
  


  export {auth}