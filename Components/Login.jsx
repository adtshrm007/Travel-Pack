import LoginVideo from "url:../assest/LoginVideo.mp4";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseconfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user=auth.currentUser
      
      if(user)
      {
        alert("Already signed in")
        navigate("/destination1")
      }
      if (!auth.currentUser.emailVerified) {
  alert("Please verify your email first.");
  // Optionally log them out
}
else if(auth.currentUser)
{
  console.log(userCredential.user);
}
else
{
  console.log("User Logged In:", userCredential.user);
      alert("Login Successful");
      navigate("/destination1");
      
}



    } catch (error) {
      console.error("Login Error:", error.message);
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async (event) => {
      event.preventDefault();
      try {
        const result = await signInWithPopup(auth, provider);
        console.log("Google Sign-In Success:", result.user);
        navigate("/destination1");
      } catch (error) {
        alert(error.message);
      }
    };

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

            <p className="forgot">Forgot Password?</p>

            <div className="button">
              <button type="submit">Login</button>
            </div>
          </form>
          <p className="next">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>

        <div className="google">
          <div className="google1">
            <i className="fa-brands fa-google"></i>
            <button onClick={handleGoogleSignIn}>Sign Up using Google</button>
          </div>
        </div>
        
      </div>
    </>
  );
}
