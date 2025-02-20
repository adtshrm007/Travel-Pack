import VideoBg from "url:../assest/CoverVideo3.mp4";
import image2 from "../assest/SwitzerLandImage.jpg";
import { Link } from "react-router";
import { NavLink } from "react-router";
import React from "react";
import { useState } from "react";
export default function Destination3() {
  const [activeNumber, setActiveNumber] = useState("03");
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
          <p>Travel Pack</p>
        </div>
        <div className="options">
          <p className="option">Home</p>
          <p className="option">Destinations</p>
          <p className="option">Blog</p>
          <p className="option">Contact</p>
        </div>
        <div className="login">
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-user"></i>
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
            <p className="fairytale">DREAMY</p>
            <p className="india">SWITZERLAND</p>
            <p className="info2">
              Embark on a journey through snow-capped peaks, enchanting
              villages, and pristine landscapes. Let Switzerland’s magic
              captivate your soul.
            </p>
            <div className="read">
              <i class="fa-sharp fa-solid fa-circle-down"></i>
              <p>Read More</p>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="info3">
            <p className="land">Alpine Escape</p>
            <p className="subland">
            Explore the majestic Swiss Alps, where snow-capped peaks, scenic trails, and world-class skiing await.
            </p>
          </div>
          <div className="info4">
            <p className="land">Crystal Lakes</p>
            <p className="subland">
            Sail across serene lakes surrounded by picturesque mountains, from Lake Geneva to Lake Lucerne.
            </p>
          </div>
          <div className="info5">
            <p className="land">Charming Cities</p>
            <p className="subland">
            Discover the elegance of Zurich, the history of Bern, and the romance of Lucerne’s old town.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
