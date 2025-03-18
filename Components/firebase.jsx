import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  createUserWithEmailAndPassword, // ✅ For user registration
  signInWithEmailAndPassword // ✅ For user login
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIvfzZRIf1Nz-inlkUjS91EW9j7m6g39U",
  authDomain: "travel-pack-cf40d.firebaseapp.com",
  projectId: "travel-pack-cf40d",
  storageBucket: "travel-pack-cf40d.firebasestorage.app",
  messagingSenderId: "519574931748",
  appId: "1:519574931748:web:a4c582704a39320f6d8bb1",
  measurementId: "G-N6QF3CRSP6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Google Sign-In
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User signed in:", result.user);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error.message);
  }
};

// ✅ Sign-Up with Email and Password
export const signUpWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Sign-Up Error:", error.message);
  }
};

// ✅ Login with Email and Password
export const loginWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Login Error:", error.message);
  }
};

// ✅ Logout function
export const logout = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Sign-Out Error:", error.message);
  }
};

export { auth };
