import SignUpVideo from "url:../assest/SignUpVideo.mp4";
import { Link } from "react-router";
import { useState } from "react";
import { Axios } from "axios";

export default function SignUp() {
  const[email,setEmail]=useState();
const[username,setUsername]=useState();
const[password,setPassword]=useState();
const[ConfirmPassword,setConfirmPassword]=useState();

const handleClick=()=>{
  const payload={
    email:email,
    username:username,
    password:password,
    ConfirmPassword:ConfirmPassword
  }
  if(password==ConfirmPassword)
  {
    console.log(payload);
  }
  else
  {
    console.log("error");
  }
}


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
                <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email Id"></input>
              </div>
              <div className="emailid">
                <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Username"></input>
              </div>
              <div className="emailid">
                <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password"></input>
              </div>
              <div className="emailid">
                <input onChange={(e)=>setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password"></input>
              </div>

              <div className="button">
                <button onClick={handleClick}>Sign Up</button>
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
