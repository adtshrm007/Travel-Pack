import VideoBg from "url:../asset/CoverVideo.mp4";
import { Link } from "react-router";
import image1 from "url:../asset/IndiaImage1.jpg";



import { NavLink } from "react-router";

import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../firebaseconfig";
export default function Destination1() {
  const [userInfo, setUserInfo] = useState({ email: "", photoURL: "" });

  const [open, setOpen] = useState(false);

  const handelMenuToggle = () => {
    setOpen(!open);
  };

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
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log("Image URL:", image1);

  return (
    <div className="Main">
      <video autoPlay loop muted playsInline className="background-video">
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
            <div className="user1">
              <i className="fa-solid fa-bars" onClick={handelMenuToggle}></i>
            </div>

            <Link to="/login">
              <div className="user">{userInfo.photoURL}</div>
            </Link>
          </div>
        </div>
        {open && (
          <div className="small_menu">
            <Link to="/">
            <p className="option1">Home</p>
            </Link>
            <Link to="/destination1">
            <p className="option1">Destinations</p>
            </Link>
            <p className="option1">Blog</p>
            <p className="option1">Contact</p>
          </div>
        )}
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
            <img src={image1}></img>
          </div>
          <div className="info1">
            <p className="fairytale">FAIRYTALE</p>
            <p className="india">INDIA</p>
            <p className="info2">
              We have collected the best ideas for planning a trip that will
              help you to feel the history and beauty of this wonderful country.
            </p>
            <Link to="/ReadMore">
              <div className="read">
                <i className="fa-sharp fa-solid fa-circle-down"></i>
                <p>Read More</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="info">
          <div className="info3">
            <p className="land">Land of Tiger</p>
            <p className="subland">
              One of the main attractions for the widlife lovers around the
              world
            </p>
          </div>
          <div className="info4">
            <p className="land">Emerlead Beaches</p>
            <p className="subland">
              A great opportunity to relax from worries in the best beaches in
              India
            </p>
          </div>
          <div className="info5">
            <p className="land">Golden Triangle</p>
            <p className="subland">
              Witness the magnificent Taj Mahal and witness the heritage of
              Delhi
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
