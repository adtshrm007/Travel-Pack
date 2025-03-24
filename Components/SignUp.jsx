import SignUpVideo from "url:../assest/SignUpVideo.mp4";
import { Link } from "react-router"
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function SignUp() {

  const firebaseConfig={
    apiKey: "AIzaSyAIvfzZRIf1Nz-inlkUjS91EW9j7m6g39U",
    authDomain: "travel-pack-cf40d.firebaseapp.com",
    projectId: "travel-pack-cf40d",
    storageBucket: "travel-pack-cf40d.firebasestorage.app",
    messagingSenderId: "519574931748",
    appId: "1:519574931748:web:a4c582704a39320f6d8bb1",
    measurementId: "G-N6QF3CRSP6"

  }

  const app=initializeApp(firebaseConfig)
  
  const [email,setEmail]=useState('')
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setconfirmPassword]=useState('')

  const auth = getAuth(app);

const create=()=>createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(userCredential)
  
  })
  .catch((error) => {
    console.log(error)
  });

  return (
    <>
      <div className="signup">
        <video autoPlay loop muted playsInline className="background-video3">
          <source src={SignUpVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="xyz">
          <div className="signup-form">
            <p className="abc">Sign Up</p>
            <form className="signup-mainform">
              <div className="emailid">
                <input
                  type="email"
                  placeholder="Email Id"
                  name="email"
                  value={email}
                  required
                  onChange={(e)=>setEmail(e.target.value)
                    
                  }

                />
              </div>
              <div className="emailid">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  required
                  onChange={(e)=>setUsername(e.target.value)}
                />
              </div>
              <div className="emailid">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  required
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <div className="emailid">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  required
                  onChange={(e)=>setconfirmPassword(e.target.value)}
                />
              </div>
              <div className="button">
                <button type="submit" onClick={create}>Sign Up</button>
              </div>
            </form>
            <p className="next">
              Have an account? <Link to="/login">Login</Link>
            </p>
          </div>
          <div className="google">
            <div className="google1">
              <i className="fa-brands fa-google"></i>
              <button>
                <Link to={"/login"}>Sign Up using Google</Link>
              </button>
            </div>
            <div className="google1">
              <i className="fa-brands fa-facebook"></i>
              <p>Sign Up using Facebook</p>
            </div>
            <div className="google1">
              <i className="fa-solid fa-phone"></i>
              <Link to={"/SignUpWithPhoneNumber"}>Sign Up using Phone Number</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
