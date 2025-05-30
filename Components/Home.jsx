import VideoBg from "url:../assest/HomeVideo.mp4";
import { Link } from "react-router";
import { useLocation } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect, use } from "react";
import { auth } from "../firebaseconfig";
export default function Home() {

  const location=useLocation();
  const [userInfo, setUserInfo] = useState({ email: "", photoURL: "" });



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo({
          email: user.email,
          photoURL: user.email.charAt(0).toUpperCase(),
        });
      } else {
        setUserInfo({
          email: "Guest",
          photoURL: <i className="fa-regular fa-circle-user"></i>,
        }); // Not logged in
      }
    });

    return () => unsubscribe();
  },[]);

  useEffect(() => {
}, [location.pathname]);

  

  return (
    <>
      <div className="homepage">
        <video autoPlay loop muted playsInline preload="none" className="background-video">
          <source src={VideoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="header">
          <div className="logo">
            <p>
              <i className="fa-solid fa-earth-americas"></i> Travel Pack
            </p>
          </div>
          <div className="options">
            <Link to="/">
              <p className="option">Home</p>
            </Link>

            <Link to="/destination1">
              <p className="option">Destinations</p>
            </Link>
            <p className="option">Blog</p>
            <p className="option">Contact</p>
          </div>
          <div className="login">
            <div className="user">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <Link to="/login">
              <div className="user">{userInfo.photoURL}</div>
            </Link>
          </div>
        </div>
        <div className="title">
          <h1>
            <i class="fa-solid fa-earth-americas"></i>TRAVEL PACK
          </h1>
          <p>Explore the world with us.</p>
        </div>
        <div className="booking">
          <p>BOOK YOUR TRIP</p>
        </div>
        <div className="searcheverything">
          <div className="searchbar">
            <div className="destination">Destination
              <div className="dropdownWrapper">
          <button className="dropdownToggle">Choose Destination</button>
          <div className="dropdownMenu">
            <Link to="/destination1"><p>1. India</p></Link>
            <Link to="/destination2"><p>2. Norway</p></Link>
            <Link to="/destination3"><p>3. SwitzerLand</p></Link>
            <Link to="/destination4"><p>4. Australia</p></Link>
          </div>
        </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </>
  );
}
