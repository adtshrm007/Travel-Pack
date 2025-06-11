import VideoBg from "url:../asset/CoverVideo3.mp4";
import image2 from "url:../asset/SwitzerlandImage.jpg";
import { Link } from "react-router";
import { NavLink } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../firebaseconfig";
export default function Destination3() {
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
  return (
    <div className="Main">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="background-video"
      >
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
            <img src={image2}></img>
          </div>
          <div className="info1">
            <p className="fairytale">DREAMY</p>
            <p className="india">SWITZERLAND</p>
            <p className="info2">
              Embark on a journey through snow-capped peaks, enchanting
              villages, and pristine landscapes. Let Switzerland’s magic
              captivate your soul.
            </p>
            <div className="read">
              <i className="fa-sharp fa-solid fa-circle-down"></i>
              <p>Read More</p>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="info3">
            <p className="land">Alpine Escape</p>
            <p className="subland">
              Explore the majestic Swiss Alps, where snow-capped peaks, scenic
              trails, and world-class skiing await.
            </p>
          </div>
          <div className="info4">
            <p className="land">Crystal Lakes</p>
            <p className="subland">
              Sail across serene lakes surrounded by picturesque mountains, from
              Lake Geneva to Lake Lucerne.
            </p>
          </div>
          <div className="info5">
            <p className="land">Charming Cities</p>
            <p className="subland">
              Discover the elegance of Zurich, the history of Bern, and the
              romance of Lucerne’s old town.
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
