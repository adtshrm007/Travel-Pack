import LoginVideo from "url:../assest/LoginVideo.mp4";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useState } from "react";
export default function Login() {



  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(`Changing ${e.target.name}: ${e.target.value}`); // ✅ Debugging log
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value, // ✅ Ensure name attributes match
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ Prevent form reload

    console.log("Submitting credentials:", credentials);

    // ✅ Retrieve users correctly
    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("Stored users:", users);

    // ✅ Find user by username
    const user = users.find((u) => u.username === credentials.username);

    if (!user) {
      alert("User not found! Please sign up.");
      return;
    }

    // ✅ Check password
    if (user.password === credentials.password) {
      alert("Login successful!");
      localStorage.setItem("loggedInUser", credentials.username); // Store session
      navigate("/destination1"); // Redirect to dashboard
    } else {
      alert("Incorrect password!");
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
        <form className="login-mainform" onSubmit={handleSubmit}>
          <div className="username">
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              onChange={handleChange}
              value={credentials.username}
            />
          </div>
          <div className="username">
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              onChange={handleChange}
              value={credentials.password}
            />
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
