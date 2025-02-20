import VideoBg from "url:../assest/CoverVideo.mp4";
import image1 from "../assest/IndiaImage.jpg";
import { Link } from "react-router";
import { NavLink } from "react-router";
import React from "react";
import { useState } from "react";
export default function Destination1() {
  const [activeNumber, setActiveNumber] = useState("01");
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
            <img src={image1}></img>
          </div>
          <div className="info1">
            <p className="fairytale">FAIRYTALE</p>
            <p className="india">INDIA</p>
            <p className="info2">
              We have collected the best ideas for planning a trip that will
              help you to feel the history and beauty of this wonderful country.
            </p>
            <div className="read">
              <i class="fa-sharp fa-solid fa-circle-down"></i>
              <p>Read More</p>
            </div>
          </div>
        </div>
        <div className="info">
        <div className="info3">
            <p className="land">Land of Tiger</p>
            <p className="subland">One of the main attractions for the widlife lovers around the world</p>
        </div>
        <div className="info4">
        <p className="land">Emerlead Beaches</p>
        <p className="subland">A great opportunity to relax from worries in the best beaches in India</p>
        </div>
        <div className="info5">
        <p className="land">Golden Triangle</p>
        <p className="subland">Witness the magnificent Taj Mahal and witness the heritage of Delhi</p>
        </div>
        </div>
      </div>
    </div>
  );
}