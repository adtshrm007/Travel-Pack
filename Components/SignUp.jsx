import SignUpVideo from "url:../assest/SignUpVideo.mp4";
import { Link } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";
import { signInWithGoogle } from "./firebase"; // ✅ Import Firebase function

export default function SignUp() {
  const [user1, setUser1] = useState(null);
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "", // ✅ Fixed name
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async () => {
    try {
      const response = await signInWithGoogle();
      setUser1(response?.user); // ✅ Corrected variable
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting user:", user);

    if (user.password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    if (!/\d/.test(user.password)) {
      alert("Password must contain at least one number");
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(user.password)) {
      alert("Password must contain at least one special character");
      return;
    }

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Retrieve users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    const userExists = users.some((existingUser) => existingUser.email === user.email);
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
            <form className="signup-mainform" onSubmit={handleSubmit}>
              <div className="emailid">
                <input
                  type="email"
                  placeholder="Email Id"
                  name="email"
                  required
                  onChange={handleChange}
                  value={user.email}
                />
              </div>
              <div className="emailid">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  required
                  onChange={handleChange}
                  value={user.username}
                />
              </div>
              <div className="emailid">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  onChange={handleChange}
                  value={user.password}
                />
              </div>
              <div className="emailid">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword" // ✅ Fixed name
                  required
                  onChange={handleChange}
                  value={user.confirmPassword}
                />
              </div>
              <div className="button">
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
              <button onClick={handleLogin}>
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
