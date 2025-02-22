import LoginVideo from "url:../assest/LoginVideo.mp4";
import { Link } from "react-router";
export default function Login() {
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
              <i class="fa-solid fa-earth-americas"></i> Travel Pack
            </p>
          </div>
        </div>
        <div className="login-form">
          <p className="abc">LOGIN</p>
          <div className="login-mainform">
            <div className="username">
              <input type="text" placeholder="Username"></input>
            </div>
            <div className="username">
              <input type="password" placeholder="Password"></input>
            </div>
            <div className="button">
                <button>Login</button>
            </div>
            <p className="next">Don't have an account?<Link to="/signup">Sign up</Link></p>
          </div>
        </div>
      </div>
    </>
  );
}
