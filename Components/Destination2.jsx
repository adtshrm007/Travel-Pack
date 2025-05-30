import VideoBg from "url:../assest/CoverVideo2.mp4";
import image2 from "../assest/NorwayImage.jpg";
import { Link } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { NavLink } from "react-router";
import { auth } from "../firebaseconfig";
import { useState,useEffect } from "react";
export default function Destination2() {
  const [userInfo, setUserInfo] = useState({email:"",photoURL:""});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo({
          email:user.email,
          photoURL:user.email.charAt(0).toUpperCase(), 
        });
      } else {
        setUserInfo({email: "Guest",
          photoURL: <i className="fa-regular fa-circle-user"></i>,}); // Not logged in
      }
    });


    return () => unsubscribe();
  }, []);
  return (
    <div className="Main">
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
          <Link to="/"><p className="option">Home</p></Link>
          <Link to="/destination1"><p className="option">Destinations</p></Link>
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
      <div className="numbers">
        <NavLink
          to="/destination1"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          01
        </NavLink>
        <NavLink
          to="/destination2"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          02
        </NavLink>
        <NavLink
          to="/destination3"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          03
        </NavLink>
        <NavLink
          to="/destination4"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          04
        </NavLink>
      </div>
      <div className="image">
        <div className="basic">
          <div className="img">
            <img src={image2}></img>
          </div>
          <div className="info1">
            <p className="fairytale">MAGNIFICENT</p>
            <p className="india">NORWAY</p>
            <p className="info2">
              A place where nature reigns supreme, Norway is a dream destination
              for those who love dramatic fjords, northern lights, and rugged
              wilderness.
            </p>
            <div className="read">
              <i className="fa-sharp fa-solid fa-circle-down"></i>
              <p>Read More</p>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="info3">
            <p className="land">Majestic Fjords</p>
            <p className="subland">
              Sail through Norway’s legendary fjords, where towering cliffs meet
              crystal-clear waters.
            </p>
          </div>
          <div className="info4">
            <p className="land">Dancing Lights</p>
            <p className="subland">
              Witness the mesmerizing northern lights as they illuminate the
              Arctic skies in a magical display.
            </p>
          </div>
          <div className="info5">
            <p className="land">Untamed Wilderness</p>
            <p className="subland">
              Hike through vast national parks, explore Viking heritage, and
              experience the raw beauty of the Nordic landscapes.
            </p>
          </div>
        </div>
      </div>
      <div className="socialMediaHandles">
        <div className="socialMedia">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-pinterest"></i>
        </div>
      </div>
    </div>
  );
}
