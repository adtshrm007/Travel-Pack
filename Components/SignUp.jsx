import SignUpVideo from "url:../assest/SignUpVideo.mp4";
import { Link } from "react-router";
export default function SignUp() {
  return (
    <>
      <div className="signup">
        <video autoPlay loop muted playsInline className="background-video3">
          <source src={SignUpVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="header">
          <div className="logo">
            <p>
              <i class="fa-solid fa-earth-americas"></i> Travel Pack
            </p>
          </div>
        </div>
        <div className="signup-form">
          <p className="abc">Sign Up</p>
          <div className="signup-mainform">
            <div className="emailid">
              <input type="text" placeholder="Email Id"></input>
            </div>
            <div className="emailid">
              <input type="text" placeholder="Username"></input>
            </div>
            <div className="emailid">
              <input type="password" placeholder="Password"></input>
            </div>
            <div className="emailid">
              <input type="password" placeholder="Confirm Password"></input>
            </div>
            
            <div className="button">
              <button>Sign Up</button>
            </div>
            <p className="next">
              Don't have an account?<Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
