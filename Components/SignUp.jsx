import SignUpVideo from "url:../assest/SignUpVideo.mp4";
import { Link } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function SignUp() {
  
  
    const [user, setUser] = useState({ email: "", username: "",password:"",confrimpassword:"" });
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Check if the user already exists
      if (localStorage.getItem(user.email)) {
        alert("User already exists! Please login.");
      } else {
        localStorage.setItem(user.email, JSON.stringify(user));
        alert("Sign up successful! Please log in.");
        navigate("/login");
      }
    };

  

  

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
            <div className="signup-mainform">
              <div className="emailid">
                <input  typre="text" placeholder="Email Id" required onChange={handleChange}></input>
              </div>
              <div className="emailid">
              <input type="text" placeholder="Username" required onChange={handleChange}></input>
              </div>
              <div className="emailid">
              <input type="password" placeholder="Password" required onChange={handleChange}></input>
              </div>
              <div className="emailid">
              <input type="password" placeholder="Confirm Password" required onChange={handleChange}></input>
              </div>

              <div className="button">
                <button onClick={handleSubmit}>Sign Up</button>
              </div>

              
              <p className="next">
                Have an account?<Link to="/login">Login</Link>
              </p>
            </div>
          </div>
          <div className="google">
            <div className="google1">
              <i class="fa-brands fa-google"></i>
              <p>Sign Up using Google</p>
            </div>
            <div className="google1">
            <i class="fa-brands fa-facebook"></i>
            <p>Sign Up using Facebook</p>
            </div>
            <div className="google1">
            <i class="fa-solid fa-phone"></i>
            <p>Sign Up using Phone Number</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

