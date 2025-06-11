import SignUpVideo from "url:../asset/SignUpVideo.mp4";
import { Link } from "react-router";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../firebaseconfig";

const provider = new GoogleAuthProvider();

export default function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match! ❌");
      return;
    }

    if (password.length < 8) {
      alert("Password should be at least 8 characters long");
      return;
    }

    if (
      !/[a-z]/.test(password) ||
      !/[A-Z]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      alert(
        "Password must include at least one lowercase letter, one uppercase letter, and one number."
      );
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User Created:", userCredential.user);

      await sendEmailVerification(userCredential.user);
      alert(
        "Signup successful. A verification email has been sent to your inbox 📧"
      );

      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="signup">
      <video autoPlay loop muted playsInline className="background-video3">
        <source src={SignUpVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      

      <div className="xyz">
        <div className="header">
        <div className="logo">
          <p>
            <i className="fa-solid fa-earth-americas"></i> Travel Pack
          </p>
        </div>
      </div>
        <div className="signup-form">
          <p className="abc">Sign Up</p>

          <form className="signup-mainform" onSubmit={handleSignUp}>
            <div className="emailid">
              <input
                type="email"
                placeholder="Email Id"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="emailid">
              <input
                type="text"
                placeholder="Username"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="emailid">
              <input
                type="password"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="emailid">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                required
                onChange={(e) => setconfirmPassword(e.target.value)}
              />
            </div>

            <div className="button">
              <button type="submit">Sign Up</button>{" "}
              {/* Fix: Use form submit */}
            </div>
          </form>

          <p className="next">
            Have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
