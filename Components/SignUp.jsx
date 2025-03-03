import SignUpVideo from "url:../assest/SignUpVideo.mp4";
import { Link } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function SignUp() {
  
  
    const [user, setUser] = useState({ 
      email: "", 
      username: "",
      password:"",
      confrimpassword:"" 
    });
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitting user:", user);
  
      if (user.password.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
      }
  
      if (user.password !== user.confrimpassword) {
        alert("Passwords do not match!");
        return;
      }
      
  
      // Retrieve users from localStorage
      let users = JSON.parse(localStorage.getItem("users")) || [];
  
      // Check if user already exists
      const userExists = users.some((existingUser) => existingUser.email === user.email);
      console.log(user)
      if (userExists) {
        alert("User already exists! Please login.");
        return;
      }
  
      // Add new user to the array
      users.push({
        email: user.email,
        username: user.username,
        password: user.password,
      });
  
      // Save updated users array back to localStorage
      localStorage.setItem("users", JSON.stringify(users));
  
      alert("Sign up successful! Please log in.");
      navigate("/login");
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
          {/* ✅ Ensure onSubmit is on the form */}
          <form className="signup-mainform" onSubmit={handleSubmit}>
            <div className="emailid">
              <input type="email" placeholder="Email Id" name="email" required onChange={handleChange} value={user.email} />
            </div>
            <div className="emailid">
              <input type="text" placeholder="Username" name="username" required onChange={handleChange} value={user.username} />
            </div>
            <div className="emailid">
              <input type="password" placeholder="Password" name="password" required onChange={handleChange} value={user.password} />
            </div>
            <div className="emailid">
              {/* ✅ Fixed `confirmPassword` name */}
              <input type="password" placeholder="Confirm Password" name="confrimpassword" required onChange={handleChange} value={user.confrimpassword} />
            </div>
            <div className="button">
              {/* ✅ Ensure the button type is submit */}
              <button type="submit">Sign Up</button>
            </div>
          </form>
          <p className="next">
            Have an account? <Link to="/login">Login</Link>
          </p>
        </div>
        <div className="google">
          <div className="google1">
            <i className="fa-brands fa-google"></i>
            <p>Sign Up using Google</p>
          </div>
          <div className="google1">
            <i className="fa-brands fa-facebook"></i>
            <p>Sign Up using Facebook</p>
          </div>
          <div className="google1">
            <i className="fa-solid fa-phone"></i>
            <p>Sign Up using Phone Number</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

