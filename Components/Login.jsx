import LoginVideo from "url:../assest/LoginVideo.mp4";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default function Login() {
  const firebaseConfig={
      apiKey: "AIzaSyAIvfzZRIf1Nz-inlkUjS91EW9j7m6g39U",
      authDomain: "travel-pack-cf40d.firebaseapp.com",
      projectId: "travel-pack-cf40d",
      storageBucket: "travel-pack-cf40d.firebasestorage.app",
      messagingSenderId: "519574931748",
      appId: "1:519574931748:web:a4c582704a39320f6d8bb1",
      measurementId: "G-N6QF3CRSP6"
  
    }
  
    const navigate=useNavigate();
  
    const app=initializeApp(firebaseConfig)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const auth = getAuth(app);  
  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password );
      console.log("User Logged In:", userCredential.user);
      alert("Login Successful");  
      navigate("/destination1");
    } catch (error) {   
      console.error("Login Error:", error.message);
      alert(error.message);
    }
  }



  

  return (
    <>
    <div className="login1">
      <video autoPlay loop muted playsInline className="background-video2">
        <source src={LoginVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="header">
        <div className="logo">
          <p>
            <i className="fa-solid fa-earth-americas"></i> Travel Pack
          </p>
        </div>
      </div>
      <div className="login-form">
        <p className="abc">LOGIN</p>
        {/* ✅ Use onSubmit on the form */}
        <form className="login-mainform" onSubmit={handleLogin}>
         
          <div className="username">
            <input
              type="text"
              placeholder="Email Id"
              name="email"
              value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="username">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="forgot">
            
          </div>
          <div className="button">
            {/* ✅ Ensure type="submit" */}
            <button type="submit">Login</button>
          </div>
        </form>
        <p className="next">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
    </>
  );
}
